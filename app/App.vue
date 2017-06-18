<template>
	<div id="app" :class="{loaded}">
		<nenw-loading v-if="!loaded"></nenw-loading>
		<nenw-logon class="fixed-centered" v-if="loaded"></nenw-logon>
		<transition name="slide-fade" mode="out-in" v-if="loaded">
			<keep-alive>
				<router-view id="app-view"></router-view>
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
			animation-name: whiteout;
			animation-duration: 1s;
			animation-fill-mode: forwards;
			animation-timing-function: ease;
			background-color: #1de9b6;
		}
	}

	#app-view {
		position: fixed;
		top: 0;
		left: -100vw;
		width: 100vw;
		height: 100vh;

		animation-name: view-in;
		animation-duration: .5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-delay: 4.3s;
	}

	.fixed-centered {
		position: fixed;
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
			}
		},

		components: {
			NenwLoading,
			NenwLogon
		}
	};
</script>
