<template>
	<div class="fullpage">
		<div class="nenw-logon">
			<nenw-sticker class="sticker"></nenw-sticker>
			<div class="bio">
				<h1>Khinenw</h1>
				<span>console.log("Hello, World!")</span>
			</div>
			<div class="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";
	@import "../less/horizontal-loader.css";

	@bio-height: 100px;

	.fullpage {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		animation-name: whiteout;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-timing-function: ease;
		background-color: #1de9b6;
	}

	.nenw-logon {
		position: fixed;
		.fixed-centered;
	}

	.nenw-logon, .bio {
		.flex-centered;

		display: flex;
		flex-direction: column;
	}

	.sticker {
		position: relative;
		top: @bio-height / 2;
		animation-name: up;
		animation-delay: 1s;
		animation-duration: .5s;
		animation-fill-mode: forwards;
		animation-timing-function: ease;
	}

	.bio {
		.flex-centered;

		height: @bio-height;
		opacity: 0;

		animation-name: fadein;
		animation-delay: 1.3s;
		animation-duration: .5s;
		animation-fill-mode: forwards;
		animation-timing-function: ease;

		h1, span {
			color: #fff;
			margin: 0;
			margin-bottom: 5px;
			padding: 0;
			text-align: center;
		}
	}

	.loader {
		width: 100vw;

		div {
			background: #fff;
			animation-iteration-count: 1;
			animation-duration: 3s;
		}

		.for(5); .-each(@n) {
			div:nth-child(@{n}) {
				animation-delay: 1.8s + @n * 0.08s;
			}
		}
	}
</style>

<script>
	import Cookie from "../js/cookie";
	import NenwSticker from "../components/NenwSticker.vue";

	export default {
		components: {
			NenwSticker
		},

		mounted(){
			Cookie.create('logon', "true");
		}
	};
</script>
