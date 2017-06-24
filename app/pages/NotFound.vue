<template>
	<main>
		<img :src="sadIcon">
		<section>
			<h1>Oops!</h1>
			<span>Page not found :(</span>
		</section>
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
		height: 300px;
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

</style>

<script>
	export default {
		computed: {
			sadIcon() {
				return window.assets.sadIcon;
			}
		}
	};
</script>
