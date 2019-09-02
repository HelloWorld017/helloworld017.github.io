<template>
	<div id="app" class="App" :class="{'App--loaded': loaded, 'App--finished': finished}">
		<template v-if="!logonShowed">
			<transition name="Fade">
				<logon v-if="loaded && !finished"></logon>
			</transition>

			<div class="FakeSlide" v-if="loaded"></div>

			<div class="AppView">
				<transition name="SlideFade" mode="out-in" v-if="finished">
					<keep-alive>
						<router-view class="AppView__router"></router-view>
					</keep-alive>
				</transition>
			</div>
		</template>
		<template v-else>
			<div
				class="FakeSlide FakeSlide--first"
				v-if="loaded">
			</div>

			<div class="AppView">
				<transition name="SlideFade" mode="out-in" v-if="firstFinished">
					<keep-alive>
						<router-view class="AppView__router">
						</router-view>
					</keep-alive>
				</transition>
			</div>
		</template>
	</div>
</template>

<style lang="less">
	@import "~theme";
	@import "~sweetalert2/dist/sweetalert2.css";

	body, html {
		margin: 0;
		padding: 0;
	}

	.App {
		min-height: 100vh;
		width: 100%;
		overflow-x: hidden;

		&--loaded {
			background-color: transparent;
		}
	}

	.AppView {
		opacity: 0;
		animation-name: fadein;
		animation-duration: .5s;
		animation-delay: .3s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
	}

	.FakeSlide {
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

		&--first {
			animation-delay: 0s;
		}
	}

	.SlideFade {
		&-enter-active, &-leave-active {
			transition: all .5s ease;
		}

		&-enter, &-leave-to {
			transform: translate(10px);
			opacity: 0;
		}
	}

	.Fade {
		&-enter-active, &-leave-active {
			transition: all .5s ease;
		}

		&-enter, &-leave-to {
			opacity: 0;
		}
	}
</style>

<script>
	import Cookie from "./src/Cookie";

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
			Logon
		}
	};
</script>
