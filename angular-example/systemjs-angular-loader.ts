const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
const stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

function commonPath(path1: string[], path2: string[]) {
	const length = Math.min(path1.length, path2.length);

	let position: number;

	for (position = 0; position < length; position++) {
		if (path1[position] !== path2[position]) {
			position--;
			break;
		}
	}

	return path1.slice(0, position + 1);
}

function relative(from: string[], to: string[]) {
	const common = commonPath(from, to);

	to = to.slice(common.length);
	if (from.length === common.length) {
		return to;
	}

	return [...from.slice(common.length).map(_ => '..'), ...to];
}

const rootUrlParts = (() => {
	const url = document.createElement('a');
	url.href = document.baseURI;
	const parts = url.pathname.split('/');
	parts.pop();
	return parts;
})();

export function translate(load: { source: string; address: string; }) {
	if (load.source.indexOf('moduleId') !== -1) {
		return load;
	}

	const url = document.createElement('a');
	url.href = load.address;
	const urlParts = url.pathname.split('/');
	urlParts.pop();

	const baseHref = document.createElement('a');
	baseHref.href = this.baseURL;
	const baseHrefParts = baseHref.pathname.split('/');

	const relPath = relative(rootUrlParts, baseHrefParts).join('/');

	let basePath = urlParts.join('/');
	basePath = basePath.replace(baseHref.pathname, '');
	basePath = `${relPath}${basePath}`;

	load.source = load.source
		.replace(templateUrlRegex, function(_, __, resolvedUrl){
			if (resolvedUrl.startsWith('.')) {
				resolvedUrl = basePath + resolvedUrl.substr(1);
			}

			return `templateUrl: "${resolvedUrl}"`;
		})
		.replace(stylesRegex, function(_, relativeUrls) {
			const urls = [];
			let match: RegExpExecArray;

			while ((match = stringRegex.exec(relativeUrls)) !== null) {
				if (match[2].startsWith('.')) {
					urls.push(`"${basePath}${match[2].substr(1)}"`);
				} else {
					urls.push(`"${match[2]}"`);
				}
			}

			return `styleUrls: [${urls.join(', ')}]`;
		});

		return load;
}
