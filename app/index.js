import assetList from "./assets/";
import fontList from "./assets/fonts";
import AssetLoader from "./src/AssetLoader";
import Route from "route-parser";
import URL from "url";

(async () => {
	const loadSpec = {
		assets: assetList,
		fonts: fontList,
		scripts: {
			'App': import('./App.js')
		}
	};

	const url = location.href;
	const pathname = new URL(url).pathname;
	const routes = [
		{path: '/', module: 'Index'},
		{path: '/gallery', module: 'Gallery'},
		{path: '*', module: 'NotFound'}
	];

	let initRoute = null;
	routes.every(routeObject => {
		const route = new Route(routeObject.path);
		if(route.match(pathname)) {
			loadSpec.scripts[routeObject.module] = import(`./pages/${routeObject.module}.vue`);
			initRoute = routeObject;
			return false;
		}

		return true;
	});

	if(initRoute === null) {
		initRoute = routes[routes.length - 1];
	}

	const loader = new AssetLoader();
	const assets = await loader.load(loadSpec);

	const {app, router, store} = assets.App([
		{path: initRoute.path, component: assets[initRoute.module]}
	]);

	router.pushWhenLoaded = function(...args) {

	};

	setTimeout(() => {
		loader.destroyUi();
	}, 5000);

	const backgroundLoadSpec = {
		scripts: {}
	};

	const backgroundRoutes = routes.filter(({module: routeModule}) => routeModule !== initRoute.module);

	backgroundRoutes.forEach(routeObject => {
		if(routeObject.module !== initRoute.module) {
			backgroundLoadSpec[routeObject.module] = import(`./pages/${routeObject.module}.vue`);
		}
	});

	const backgroundAssets = await loader.backgroundLoad(backgroundLoadSpec);

	router.addRoutes(
		backgroundRoutes.map(routeObject => {
			return {path: routeObject.path, component: backgroundAssets[routeObject.module]};
		})
	);
})();
