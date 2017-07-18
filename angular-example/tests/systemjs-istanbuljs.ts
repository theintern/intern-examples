/**
 * This module hooks the SystemJS translate function to apply code coverage instrumentation.
 */

import { createInstrumenter } from 'istanbul-lib-instrument';
import { readFileSync } from 'fs';
import { parse } from 'url';
import { dirname, normalize, join } from 'path';

const istanbulGlobal = '__coverage__';
const sourceMapRegex = /(?:\/{2}[#@]{1,2}|\/\*)\s+sourceMappingURL\s*=\s*(data:(?:[^;]+;)+base64,)?(\S+)/;

const instrumenter = createInstrumenter({
	coverageVariable: istanbulGlobal
});

const esInstrumenter = createInstrumenter({
	coverageVariable: istanbulGlobal,
	esModules: true
});

export function translate(this: SystemJSLoader.System, load: any) {
	const source = load.source;
	const meta = load.metadata;

	if (
		meta.format === 'json' ||
		meta.format === 'defined' ||
		meta.loaderModule && meta.loaderModule.build === false
	) {
		return source;
	}

	const match = sourceMapRegex.exec(load.source);
	let sourceMap: any;
	if (match) {
		const sourcePath = parse(load.address).pathname!;
		const mapPath = match[2];
		const mapFile = normalize(join(dirname(sourcePath), mapPath));
		try {
			sourceMap = JSON.parse(readFileSync(mapFile, { encoding: 'utf8' }));
		}
		catch (_error) {
			console.warn('Unable to load source map at ' + mapFile);
		}
	}

	const baseURL = (meta.istanbul && this.resolveSync(meta.istanbul.baseURL)) || this.baseURL!;
	const name = normalize(load.address.slice(baseURL.length));

	try {
		if (meta.format === 'esm') {
			return esInstrumenter.instrumentSync(source, name, sourceMap);
		}
		else {
			return instrumenter.instrumentSync(source, name, sourceMap);
		}
	}
	catch (error) {
		const message = `Unable to add coverage instrumentation to "${name}".\n\t`;
		const newErr: SystemJSError = new Error(`${message}${error.message}`);
		newErr.stack = `${message}${error.stack}`;
		newErr.originalErr = error.originalErr || error;
		throw newErr;
	}
}

interface SystemJSError extends Error {
	originalErr?: Error;
}
