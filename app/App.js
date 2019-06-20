import restaurance from "restaurance";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import "babel-polyfill";
import "whatwg-fetch";

import App from "./App.vue";
import scroll from "./src/scroll";

//Loading Assets

Vue.use(Vuex);
Vue.use(VueRouter);

window.addEventListener('resize', () => store.commit('updateResize'));
window.addEventListener('scroll', () => store.commit('updateScroll'));

module.exports = (routes) => {
	const store = new Vuex.Store({
		state: {
			assetFinish: false,
			firstAnimationFinish: false,
			initAnimationFinish: false,
			height: window.innerHeight,
			width: window.innerWidth,
			mobile: window.innerWidth < 768,
			scroll: scroll()
		},

		mutations: {
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

	const router = new VueRouter({routes, mode: 'history'});

	const app = new Vue({
		el: '#app',
		store,
		router,
		render(h) {
			return h(App);
		}
	});

	setTimeout(() => store.commit('assetFinish'), 1000);
	setTimeout(() => store.commit('firstAnimationFinish'), 1400);
	setTimeout(() => store.commit('animationFinish'), 5800);

	return {
		app, router, store
	};
};
