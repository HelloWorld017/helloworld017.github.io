import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import swal from "sweetalert";
import "babel-polyfill";
import "whatwg-fetch";

import App from "./App.vue";

import loadAsset from "./js/asset-loader";
import assetList from "./assets/";
import fontList from "./js/fonts";
import routes from "./js/routes";
import scroll from "./js/scroll";

//Loading Assets

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
	state: {
		assetsAmount: Object.keys(assetList).length + fontList.length,
		assetFinish: false,
		firstAnimationFinish: false,
		initAnimationFinish: false,
		loadedAssets: 0,
		height: window.innerHeight,
		width: window.innerWidth,
		mobile: window.innerWidth < 768,
		scroll: scroll()
	},

	mutations: {
		loadAsset(state) {
			state.loadedAssets++;
		},

		assetFinish(state) {
			state.assetFinish = true;
		},

		firstAnimationFinish(state) {
			state.firstAnimationFinish = true;
		},

		animationFinish(state) {
			state.initAnimationFinish = true;
		},

		updateResize(state) {
			state.width = window.innerWidth;
			state.height = window.innerHeight;
			state.mobile = window.innerWidth < 768;
		},

		updateScroll(state) {
			state.scroll = scroll();
		}
	}
});

window.addEventListener('resize', () => store.commit('updateResize'));
window.addEventListener('scroll', () => store.commit('updateScroll'));

const router = new VueRouter({routes, mode: 'history'});

new Vue({
	el: '#app',
	store,
	router,
	render(h){
		return h(App);
	}
});

loadAsset(assetList, store, () => Promise.all(fontList.map((v) => {
	return new Promise((resolve) => {
		v.load().catch(() => {
			swal("Oops...", "Failed while loading assets!", "error");
		}).then(() => {
			store.commit('loadAsset');
			resolve();
		});
	});
})));
