<template>
	<main>
		<img :src="sadIcon">
		<section>
			<h1>Oops!</h1>
			<span>Page not found :(</span>
			<div class="button-bar">
				<router-link to="/">Main</router-link>
				<a @click="back">Back</a>
			</div>
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
		z-index: 999;

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
		pointer-events: none;
	}

	.button-bar {
		margin-top: 10vh;
		display: flex;

		a {
			margin-right: 10px;
			display: block;
			border: 1px solid #fff;
			border-radius: 25px;
			background: transparent;
			cursor: pointer;
			padding: 20px 50px;
			height: 50px;
			line-height: calc(50px - 40px);
			font-family: @title-font;
			font-size: 1.2rem;
			font-weight: 100;
			transition: background .4s ease, color .4s ease;
			outline: 0;
			text-decoration: none;
			color: #fff;
			box-sizing: border-box;
			text-align: center;

			&:hover {
				background-color: #fff;
				color: #000;
				font-weight: 300;
			}

			&:active {
				filter: brightness(90%);
			}
		}
	}

</style>

<script>
	import Color from "color";
	import {World} from "../js/origami";

	const start = Color('#c33764').darken(0.2);
	const end = Color('#1d2671').darken(0.2);

	const colorRandom = (color, amount = 5) => color.red(
		color.red() + Math.random() * amount * 2 - amount
	).green(
		color.green() + Math.random() * amount * 2 - amount
	).blue(
		color.blue() + Math.random() * amount * 2 - amount
	).string();

	const colorRandomUnified = (color, amount = 5) => {
		const rand = Math.random() * amount * 2 - amount;
		return color.red(color.red() + rand)
			.green(color.green() + rand)
			.blue(color.blue() + rand)
			.string();
	};

	const TEXT_MAP = [
		[
			'#ff9800',
			{x: 8, y: 8}, {x: 9, y: 8}, {x: 9, y: 7}, {x: 10, y: 7},
			{x: 10, y: 6}, {x: 11, y: 6}, {x: 9, y: 9}, {x: 10, y: 9},
			{x: 10, y: 10}, {x: 11, y: 10}, {x: 11, y: 11}, {x: 12, y: 11},
			{x: 10, y: 11}, {x: 9, y: 11}, {x: 9, y: 12}, {x: 8, y: 12},
			{x: 11, y: 9}, {x: 12, y: 9}, {x: 12, y: 8}, {x: 13, y: 8}
		],

		[
			'#00bcd4',
			{x: 16, y: 12}, {x: 17, y: 12}, {x: 17, y: 13}, {x: 18, y: 13},
			{x: 18, y: 14}, {x: 19, y: 14}, {x: 19, y: 15}, {x: 20, y: 15},
			{x: 19, y: 16}, {x: 18, y: 16}, {x: 18, y: 17}, {x: 17, y: 17},
			{x: 17, y: 18}, {x: 16, y: 18}, {x: 16, y: 19}, {x: 15, y: 19},
			{x: 15, y: 18}, {x: 14, y: 18}, {x: 14, y: 17}, {x: 13, y: 17},
			{x: 13, y: 16}, {x: 12, y: 16}, {x: 13, y: 15}, {x: 14, y: 15},
			{x: 14, y: 14}, {x: 15, y: 14}, {x: 15, y: 13}, {x: 16, y: 13}
		],

		[
			'#e91e63',
			{x: 20, y: 20}, {x: 21, y: 20}, {x: 21, y: 19}, {x: 22, y: 19},
			{x: 22, y: 18}, {x: 23, y: 18}, {x: 21, y: 21}, {x: 22, y: 21},
			{x: 22, y: 22}, {x: 23, y: 22}, {x: 23, y: 23}, {x: 24, y: 23},
			{x: 22, y: 23}, {x: 21, y: 23}, {x: 21, y: 24}, {x: 20, y: 24},
			{x: 23, y: 21}, {x: 24, y: 21}, {x: 24, y: 20}, {x: 25, y: 20}
		]
	].map((v) => {
		const result = {};
		const color = Color(v.shift());
		v.forEach((v) => result[`${v.x},${v.y}`] = colorRandom(color, 10));
		return result;
	});

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

			this.world.render();

			let colorMap = [];
			for(let i = 0; i < this.world.xCount; i++) {
				colorMap[i] = end.mix(start, (i / (this.world.xCount - 1))).string();
			}

			const asyncProp = (...args) => new Promise((resolve) => {
				this.world.propagateFragment(args[0], args[1], args[2], resolve);
			});

			const center = {
				x: Math.round(this.world.xCount / 2),
				y: Math.round(this.world.yCount / 2)
			};

			const propAmount = this.world.xCount * this.world.yCount - 1;
			const getXY = (fragId) => {
				return {
					x: Math.floor(fragId / this.world.yCount),
					y: fragId % this.world.yCount
				};
			};

			(async () => {
				await asyncProp(
					center,
					(fragId) => colorMap[getXY(fragId).x],
					propAmount
				);

				const color = Color('#202020');

				await asyncProp(center, () => colorRandomUnified(color), propAmount);

				for(const texts of TEXT_MAP) {
					const textKeys = Object.keys(texts);
					const textLength = textKeys.length;
					const textStart = textKeys[0]
						.split(',')
						.map((v) => parseInt(v));

					await asyncProp(
						{x: textStart[0], y: textStart[1]},
						(fragId) => {
							const {x, y} = getXY(fragId);
							const tile = texts[`${x},${y}`];

							return tile;
						},
						textLength
					);
				}

				await (() => new Promise((resolve) => setTimeout(resolve, 5000)))();

				await asyncProp(center, () => {
					const rand = Math.random() * 10 - 5;
					return color.red(color.red() + rand)
						.green(color.green() * rand)
						.blue(color.blue() * rand)
						.string();
				}, propAmount);

				Object.keys(TEXT_MAP[1]).forEach((k) => {
					TEXT_MAP[1][k] = colorRandom(Color('#ff5722'), 10);
				});

				for(const texts of TEXT_MAP) {
					const textKeys = Object.keys(texts);
					const textLength = textKeys.length;
					const textStart = textKeys[0]
						.split(',')
						.map((v) => parseInt(v));

					await asyncProp(
						{x: textStart[0], y: textStart[1]},
						(fragId) => {
							const {x, y} = getXY(fragId);
							const tile = texts[`${x},${y}`];

							return tile;
						},
						textLength
					);
				}
			})();
		},

		beforeDestroy() {
			this.world.stopRender = true;
		},

		methods: {
			back(){
				history.back();
			}
		}
	};
</script>
