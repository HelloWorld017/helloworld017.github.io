import swal from "sweetalert";

export default async (assets, store, afterBehavior) => {
	window.assets = {};

	for(let asset in assets){
		try {
			const resp = await fetch(assets[asset]);
			const blob = await resp.blob();

			window.assets[asset] = URL.createObjectURL(blob);
			store.commit('loadAsset');
		} catch(err) {
			swal("Oops...", "Failed while loading assets!", "error");
		}
	}

	await afterBehavior();

	setTimeout(() => store.commit('assetFinish'), 2000);
	setTimeout(() => store.commit('firstAnimationFinish'), 2400);
	setTimeout(() => store.commit('animationFinish'), 6800);
};
