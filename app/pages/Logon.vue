<template>
	<div class="Logon">
		<div class="Profile">
			<sticker class="Sticker"></sticker>
			<div class="Profile__bio">
				<h1>nenw*</h1>
				<span>console.log("Aviation in progress")</span>
			</div>

			<div class="Progress">
				<div v-for="i in 5" :key="i"></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";
	@import "../less/Progress.less";

	@bio-height: 100px;

	.Logon {
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

	.Profile {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&__bio {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

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
				font-family: @title-font;
			}

			h1 {
				font-weight: 100;
			}
		}
	}

	.Sticker {
		position: relative;
		top: @bio-height / 2;
		animation-name: up;
		animation-delay: 1s;
		animation-duration: .5s;
		animation-fill-mode: forwards;
		animation-timing-function: ease;
	}
</style>

<script>
	import Cookie from "../src/Cookie";
	import Sticker from "../components/Sticker.vue";

	export default {
		components: {
			Sticker
		},

		mounted(){
			Cookie.create('logon', "true");
		}
	};
</script>
