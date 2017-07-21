import { Injectable, Inject, InjectionToken } from '@angular/core';

export const LocalStorageServiceKey = new InjectionToken<string>('LocalStorageServiceKey');

@Injectable()
export class LocalStorageService<T> {
	constructor(@Inject(LocalStorageServiceKey) private key: string) {}

	get(): T {
		return JSON.parse(localStorage.getItem(this.key) || 'null');
	}

	set(value: T) {
		localStorage.setItem(this.key, JSON.stringify(value));
	}

	clear() {
		localStorage.removeItem(this.key);
	}
}
