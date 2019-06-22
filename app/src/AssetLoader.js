import EventEmitter from "events";
import LoaderApp from "../pages/AssetLoader.svelte";

import "../less/Loader.less";
import swal from "sweetalert2";

class AssetLoader extends EventEmitter {
	constructor() {
		super();

		this.ui = new LoaderApp({
			target: document.querySelector('#loader-app'),
			props: {
				loader: this
			}
		});

		window.assets = (window.assets || {});
		this.assets = window.assets;
	}

	async loadInternal({assets, fonts, scripts}, eventKey = 'update') {
		let loadedCount = 0;
		let loadingCount =
			Object.keys(assets).length +
			Object.keys(fonts).length +
			Object.keys(scripts).length;

		const callback = (type, name, readableName) => {
			if(!readableName) readableName = name;

			loadedCount++;

			const readableType = type.slice(0, 1).toUpperCase() + type.slice(1);

			const progress = Math.round(loadedCount / loadingCount * 100);
			const log = `Loaded ${readableType} : ${readableName}`;


			this.emit(eventKey, progress, log);
			this.emit(type, name);
		};

		const promises = [];
		promises.push(
			...Object.keys(assets).map(async assetName => {
				const assetRequest = await fetch(assets[assetName].src);
				const assetBlob = await assetRequest.blob();

				this.assets[assetName] = URL.createObjectURL(assetBlob);
				callback('asset', assetName, assets[assetName].name);
			}),

			...Object.keys(fonts).map(async fontName => {
				await fonts[fontName].load().catch(() => {});
				callback('font', fontName);
			}),

			...Object.keys(scripts).map(async scriptName => {
				const scriptExport = await scripts[scriptName];

				if(scriptExport.__esModule) {
					this.assets[scriptName] = scriptExport.default;
					this.assets[`${scriptName}$`] = scriptExport;
				} else {
					this.assets[scriptName] = scriptExport;
				}

				callback('script', scriptName);
			})
		);

		await Promise.all(promises);
		this.emit(eventKey, 100, 'Done Loading!');

		return this.assets;
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
