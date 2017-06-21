<template>
	<div id="app" :class="{loaded, finished}">
		<nenw-loading v-if="!loaded"></nenw-loading>
		<nenw-logon v-if="loaded && !finished"></nenw-logon>
		<div class="fake-slide" v-if="loaded" :class="{finished}"></div>
		<transition name="slide-fade" mode="out-in" v-if="finished">
			<keep-alive>
				<router-view id="app-view" :class="{finished}"></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<style lang="less">
	@import "~theme";

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
	import NenwLoading from "./components/NenwLoading.vue";
	import NenwLogon from "./components/NenwLogon.vue";

	export default {
		computed: {
			loaded() {
				return this.$store.state.assetFinish;
			},

			finished() {
				return this.$store.state.initAnimationFinish;
			}
		},

		components: {
			NenwLoading,
			NenwLogon
		}
	};
</script>
