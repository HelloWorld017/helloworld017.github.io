<template>
	<section class="SectLogo Section">
		<div class="SectLogo__background" :style="{backgroundImage: `url(${asset('bgMain')}`}">
			<div class="SectLogo__background__overlay"></div>
		</div>

		<div class="SectLogo__content">
			<h1 class="SectLogo__title">
				Khinenw
			</h1>
			<div class="SectLogo__subtitle">
				a.k.a nenw*
			</div>
		</div>

		<div class="SectLogo__parallax">
			<parallax-object v-for="(asterisk, i) in asterisks"
				:key="i"
				:top="asterisk.y * 100"
				:speed="1 + i / 10"
				:style="{left: `${asterisk.x * 100}%`, fontSize: `${asterisk.size / 36}rem`}"
				class="SectLogo__asterisk">

				*
			</parallax-object>
		</div>

		<sect-clip class="SectLogo__clip"></sect-clip>
	</section>
</template>

<style lang="less" scoped>
	.SectLogo {
		position: relative;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		&__background {
			position: absolute;
			top: -20px;
			left: -20px;
			right: -20px;
			bottom: -20px;

			background-position: center;
			background-size: cover;

			filter: blur(10px);

			&__overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(#1F2031, .83);
			}
		}

		&__content {
			position: relative;

			display: inline-flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
		}

		&__title {
			font-family: 'Exo 2', sans-serif;
			font-size: 8vw;
			font-weight: 100;
			color: #fff;
			margin: 0;
			padding: 0;
		}

		&__subtitle {
			font-family: 'Titillium Web', sans-serif;
			font-size: 3rem;
			font-weight: 500;
			color: #fff;
		}

		&__parallax {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		&__asterisk {
			color: rgba(#fff, .8);
			font-family: 'Roboto', sans-serif;
			font-weight: 100;
		}

		&__clip {
			position: absolute;
			bottom: 0;
			width: 100%;
		}
	}
</style>

<script>
	import ParallaxObject from "../components/ParallaxObject.vue";
	import SectClip from "../assets/image/sectclip-0.svg?inline";

	export default {
		data() {
			return {
				asterisks: [
					{x: 0.211, y: 0.268, size: 96},
					{x: 0.803, y: 0.474, size: 64},
					{x: 0.534, y: 0.104, size: 288},
					{x: 0.830, y: 0.104, size: 144},
					{x: 0.098, y: 0.423, size: 72},
					{x: 0.193, y: 0.595, size: 96}
				]
			};
		},

		components: {
			ParallaxObject,
			SectClip
		},

		computed: {
			mobile() {
				return this.$store.state.mobile;
			}
		},

		methods: {
			asset(id) {
				return window.assets[id];
			}
		}
	};
</script>
