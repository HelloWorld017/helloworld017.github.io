<template>
	<div id="app" :class="{loaded, finished}">
		<template v-if="!logonShowed">
			<loading v-if="!loaded"></loading>
			<logon v-if="loaded && !finished"></logon>
			<div class="fake-slide" v-if="loaded" :class="{finished}"></div>
			<transition name="slide-fade" mode="out-in" v-if="finished">
				<keep-alive>
					<router-view id="app-view" :class="{finished}"></router-view>
				</keep-alive>
			</transition>
		</template>
		<template v-else>
			<nenw-loading v-if="!firstFinished"></nenw-loading>
			<div
				class="fake-slide first-anim"
				v-if="loaded"
				:class="{finished: firstFinished}">
			</div>

			<transition name="slide-fade" mode="out-in" v-if="firstFinished">
				<keep-alive>
					<router-view id="app-view" :class="{finished: firstFinished}">
					</router-view>
				</keep-alive>
			</transition>
		</template>
	</div>
</template>

<style lang="less">
	@import "~theme";
	@import "~sweetalert/dist/sweetalert.css";

	body, html {
		margin: 0;
		padding: 0;
	}

	#app {
		background-color: #fff;
		min-height: 100vh;

		&.loaded {
			background-color: transparent;
		}
	}

	#app-view {
		opacity: 0;
		animation-name: fadein;
		animation-duration: .5s;
		animation-delay: .3s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
	}

	.fake-slide {
		position: fixed;
		top: 0;
		left: -100vw;
		width: 100vw;
		height: 100vh;
		background: #fff;

		animation-name: view-in;
		animation-duration: .5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-delay: 4.2s;

		&.first-anim {
			animation-delay: 0s;
		}

		&.finished {
			display: none;
		}
	}

	.slide-fade-enter-active {
		.animated(.5s);
	}
	.slide-fade-leave-active {
		.animated(.5s);
	}
	.slide-fade-enter, .slide-fade-leave-to{
		opacity: 0;
	}
</style>

<script>
	import Cookie from "./js/cookie";

	import Loading from "./pages/Loading.vue";
	import Logon from "./pages/Logon.vue";

	export default {
		computed: {
			loaded() {
				return this.$store.state.assetFinish;
			},

			finished() {
				return this.$store.state.initAnimationFinish;
			},

			firstFinished(){
				return this.$store.state.firstAnimationFinish;
			},

			logonShowed() {
				return Cookie.read('logon') === "true";
			}
		},

		components: {
			Loading,
			Logon
		}
	};
</script>
