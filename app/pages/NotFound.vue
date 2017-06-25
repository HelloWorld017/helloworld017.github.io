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
	export default {
		computed: {
			sadIcon() {
				return window.assets.sadIcon;
			}
		},

		mounted() {
			this.canvas = this.$refs.canvas;
			
		},

		beforeDestroy() {

		}
	};
</script>
