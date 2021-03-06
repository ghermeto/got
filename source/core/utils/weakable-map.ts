export default class WeakableMap<K, V> {
	weakMap: WeakMap<object, V>;
	map: Map<K, V>;

	constructor() {
		this.weakMap = new WeakMap();
		this.map = new Map();
	}

	set(key: K, value: V): void {
		if (typeof key === 'object') {
			this.weakMap.set(key as unknown as object, value);
		} else {
			this.map.set(key, value);
		}
	}

	get(key: K): V | undefined {
		if (typeof key === 'object') {
			return this.weakMap.get(key as unknown as object);
		}

		return this.map.get(key);
	}

	has(key: K): boolean {
		if (typeof key === 'object') {
			return this.weakMap.has(key as unknown as object);
		}

		return this.map.has(key);
	}
}
