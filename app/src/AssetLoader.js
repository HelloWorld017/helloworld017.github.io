import EventEmitter from "events";
import LoaderApp from "../pages/AssetLoader.svelte";

import "../less/Loader.less";
import swal from "sweetalert2";

class AssetLoader extends EventEmitter {
	constructor() {
		this.ui = new LoaderApp({
			target: document.querySelector('#loader-app'),
			props: {
				loader: this
			}
		});
		window.assets = (window.assets || {});
	}

	async loadInternal({assets, fonts, scripts}, eventKey = 'update') {
		const loadedAssets = {};

		let loadedCount = 0;
		let loadingCount =
			Object.keys(assets).length +
			Object.keys(fonts).length +
			Object.keys(scripts.length);

		const callback = (type, name) => {
			const readableType = type.slice(0, 1).toUpperCase() + type.slice(1);

			const progress = Math.round(loadedCount / loadingCount * 100);
			const log = `Loaded ${readableType} : ${name}`;
			this.emit(eventKey, progress, log);
		};

		const promises = [];
		promises.push(
			...Object.keys(assets).map(async assetName => {
				const assetRequest = await fetch(assets[assetName]);
				const assetBlob = await assetRequest.blob();

				loadedAssets[assetName] = URL.createObjectURL(assetBlob);
				callback('asset', assetName);
			}),

			...Object.keys(fonts).map(async fontName => {
				await fonts[fontName].load().catch(() => {});
				callback('font', fontName);
			}),

			...Object.keys(scripts).map(async scriptName => {
				const scriptExport = await scripts[scriptName];

				loadedAssets[scriptName] = scriptExport;
				callback('script', scriptName);
			})
		);

		await Promise.all(promises);

		Object.keys(loadedAssets).forEach(key => {
			window.assets[key] = loadedAssets[key];
		});

		this.emit(eventKey, 100, 'Done Loading!');

		return window.assets;
	}

	async load(loadSpec) {
		return await this.loadInternal(loadSpec);
	}

	async backgroundLoad(loadSpec) {
		return await this.loadInternal(loadSpec, 'updateBackground');
	}

	destroyUi() {
		this.ui.$destroy();
	}
}

export default AssetLoader;
