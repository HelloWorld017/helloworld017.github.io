import swal from "sweetalert2";

export default async (assets, store, afterBehavior) => {
	window.assets = {};

	await new Promise((resolve, reject) => {
		const loadedAssets = [];

		const keys = Object.keys(assets);
		keys.forEach(async idx => {
			try {
				const resp = await fetch(assets[idx]);
				const blob = await resp.blob();

				window.assets[idx] = URL.createObjectURL(blob);
			} catch(err) {
				swal('Oops...', 'Failed while loading assets!', 'error');
			}
			store.commit('loadAsset');

			loadedAssets.push(idx);
			if(loadedAssets.length === keys.length) {
				resolve();
			}
		});
	});

	await afterBehavior();

	setTimeout(() => store.commit('assetFinish'), 2000);
	setTimeout(() => store.commit('firstAnimationFinish'), 2400);
	setTimeout(() => store.commit('animationFinish'), 6800);
};
