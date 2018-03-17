<template>
	<main>
		<sect-logo></sect-logo>

		<sect-about></sect-about>

		<section id="last">
			<div class="section-decorator"></div>
			<div class="content">
				<h1>Preferences</h1>
				<section class="scroll-content">
					<info-tile image="atom" text="Atom" link="https://atom.io"></info-tile>
					<info-tile
						image="es8"
						text="ES8"
						link="https://www.ecma-international.org/ecma-262/8.0/index.html.io">
					</info-tile>
					<info-tile image="python" text="Python3" link="https://python.org"></info-tile>
					<info-tile image="heroes" text="HotS" link="javascript:sigongjoa()"></info-tile>
					<info-tile image="lesscss" text="LessCSS" link="http://lesscss.org"></info-tile>
					<info-tile image="postcss" text="PostCSS" link="http://postcss.org"></info-tile>
					<info-tile image="vue" text="VueJS" link="https://vuejs.org"></info-tile>
					<info-tile
						image="ann"
						text="NNs"
						link="https://en.wikipedia.org/wiki/Artificial_neural_network">
					</info-tile>
					<info-tile image="torch" text="pytorch" link="http://pytorch.org"></info-tile>
					<info-tile image="nodejs" text="node.js" link="https://nodejs.org"></info-tile>
					<info-tile image="electron" text="Electron" link="https://electron.atom.io"></info-tile>
				</section>

				<nenw-footer highlight="transparent" darken="transparent"></nenw-footer>
			</div>
		</section>
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
			height: 5100px;
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
	import SectLogo from "../sections/SectLogo.vue";

	import LightText from "../components/LightText.vue";
	import NenwFooter from "../components/NenwFooter.vue";
	import ParallaxObject from "../components/ParallaxObject.vue";
	import ScrollTrigger from "../components/ScrollTrigger.vue";
	import ScrollSection from "../components/ScrollSection.vue";
	import InfoTile from "../components/InfoTile.vue";

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
			SectLogo,
			LightText,
			NenwFooter,
			ParallaxObject,
			ScrollTrigger,
			ScrollSection,
			InfoTile
		}
	};
</script>
