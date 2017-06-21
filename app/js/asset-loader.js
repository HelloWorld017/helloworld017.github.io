export default async (assets, store) => {
	window.assets = {};

	const length = Object.keys(assets).length;

	for(let asset in assets){
		const resp = await fetch(assets[asset]);
		const blob = await resp.blob();

		window.assets[asset] = URL.createObjectURL(blob);
		store.commit('loadAsset');
	}

	setTimeout(() => store.commit('assetFinish'), 2000);
	setTimeout(() => store.commit('animationFinish'), 6800);
};
