<template>
	<main>
		<sect-logo></sect-logo>

		<sect-about></sect-about>

		<section id="last">
			<div class="section-decorator"></div>
			<div class="content">
				<scroll-section :num="3">
					<section slot="slot-1" class="scroll-content">
						<info-tile image="atom" text="Atom" link="//atom.io"></info-tile>
					</section>

					<section slot="slot-2" class="scroll-content" style="background: #222">
					</section>

					<section slot="slot-3" class="scroll-content" style="background: #111">
					</section>
				</scroll-section>
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

		.section-decorator {
			position: absolute;
			width: 200vw;
			height: 450vh;
			transform: rotate(3deg);
			transform-origin: top left;
			background: linear-gradient(to bottom, #f18585, #808080);
		}

		.content {
			position: relative;

			.scroll-content {
				width: 100%;
				height: 100%;
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

	import restaurance from "restaurance";

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

			heroes() {
				restaurance({target: document.querySelector('#app-view')}, ['section', 'main>.parallax', 'footer'], 15);
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
