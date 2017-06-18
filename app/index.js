import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import "babel-polyfill";
import "whatwg-fetch";

import App from "./App.vue";

import loadAsset from "./js/asset-loader";
import assetList from "./assets/";
import routes from "./js/routes";

//Loading Assets

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
	state: {
		assetsAmount: Object.keys(assetList).length,
		assetFinish: false,
		loadedAssets: 0
	},

	mutations: {
		loadAsset (state){
			state.loadedAssets++;
		},

		assetFinish (state){
			state.assetFinish = true;
		}
	}
});

const router = new VueRouter({routes, mode: 'history'});

const app = new Vue({
	el: '#app',
	store,
	router,
	render(h){
		return h(App);
	}
});

loadAsset(assetList, store);
