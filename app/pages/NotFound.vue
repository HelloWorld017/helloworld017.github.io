<template>
	<main>
		<img :src="sadIcon">
		<section>
			<h1>Oops!</h1>
			<span>Page not found :(</span>
		</section>

		<canvas ref="canvas"></canvas>
	</main>
</template>

<style lang="less" scoped>
	@import "~theme";
	main {
		width: 100vw;
		height: 100vh;
		background: darken(#c33764, 20%);
		background: -webkit-linear-gradient(to right, darken(#c33764, 20%), darken(#1d2671, 20%));
		background: linear-gradient(to right, darken(#c33764, 20%), darken(#1d2671, 20%));
	}

	img {
		position: absolute;
		width: 80vw;
		max-width: 80vh;
		height: 80vw;
		max-height: 80vh;

		opacity: 0.2;
		.fixed-centered;
	}

	section {
		width: 80vw;
		height: 80vh;
		position: absolute;
		color: #fff;

		.fixed-centered;

		h1 {
			font-family: @title-font;
			font-size: 5rem;
			font-weight: 100;
			margin: 0;
			padding: 0;
		}
	}

	canvas {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

</style>

<script>
	import Color from "color";
	import {World} from "../js/origami";

	const start = Color('#c33764').darken(0.2);
	const end = Color('#1d2671').darken(0.2);

	export default {
		computed: {
			sadIcon() {
				return window.assets.sadIcon;
			}
		},

		mounted() {
			this.canvas = this.$refs.canvas;
			this.world = new World({
				canvas: this.canvas,
				width: window.innerWidth,
				height: window.innerHeight,
				xUnit: window.innerWidth / 32,
				initialColor: 'transparent'
			});

			window.world = this.world;
			this.world.render();

			let colorMap = [];
			for(let i = 0; i < this.world.xCount; i++) {
				colorMap[i] = end.mix(start, (i / (this.world.xCount - 1))).string();
			}

			this.world.propagateFragment({
				x: Math.round(this.world.xCount / 2),
				y: Math.round(this.world.yCount / 2)
			}, (fragId) => {
				const y = fragId % this.world.yCount;
				const x = (fragId - y) / this.world.yCount;

				return colorMap[x] || "#00c0a0";
			}, this.world.xCount * this.world.yCount - 1, () => {
				this.world.propagateFragment({
					x: Math.round(this.world.xCount / 2),
					y: Math.round(this.world.yCount / 2)
				}, () => '#00c0a0', this.world.xCount * this.world.yCount - 1, () => {

				});
			});
		},

		beforeDestroy() {

		}
	};
</script>
