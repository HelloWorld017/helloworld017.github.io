<template>
	<main>
		<sect-logo></sect-logo>
		<sect-about></sect-about>
		<sect-preference></sect-preference>
		<sect-footer highlight="transparent" darken="transparent"></sect-footer>
	</main>
</template>

<style lang="less" scoped>
	@import "~theme";
	main {
		background: #e3e3e3;
		overflow: hidden;
	}

	#last {
		width: 100vw;
		overflow: hidden;
		margin-top: -10vh;
		position: relative;

		h1 {
			color: #fff;
			font-weight: 100;
			font-size: 3rem;
			margin-top: 100px;
			margin-left: 10vw;
		}

		.section-decorator {
			position: absolute;
			width: 200vw;
			height: ~"calc(450vh + 300px)";
			transform: rotate(3deg);
			transform-origin: top left;
			background: linear-gradient(to bottom, #f18585, #808080);
		}

		.content {
			position: relative;

			.scroll-content {
				background: #f1f2f3;
				margin: 10vw;
				display: flex;
				justify-content: space-around;
				height: 100%;

				flex-wrap: wrap;

				.info-tile {
					margin: 30px;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		#last {
			margin-top: -20vh;
		}
	}
</style>

<script>
	const NAVBAR_DESIRED = 100;

	import SectAbout from "../sections/SectAbout.vue";
	import SectFooter from "../sections/SectFooter.vue";
	import SectLogo from "../sections/SectLogo.vue";
	import SectPreference from "../sections/SectPreference.vue";

	export default {
		computed: {
			mobile() {
				return this.$store.state.mobile;
			},

			height() {
				return this.$store.state.height;
			},

			width() {
				return this.$store.state.width;
			}
		},

		methods: {
			asset(id) {
				return window.assets[id];
			},

			playAnim() {
				this.$el.querySelectorAll('.box').forEach((v) => v.classList.add('active'));
			}
		},

		components: {
			SectAbout,
			SectFooter,
			SectLogo
		}
	};
</script>
