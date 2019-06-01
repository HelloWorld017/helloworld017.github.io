<template>
	<div class="Section SectionPref SectionPref2">
		<h2 class="SectionPref2__subtitle">Language</h2>

		<div class="SectionPref2__list PrefList">
			<div class="PrefList__item">
				<es8></es8>
			</div>
			<div class="PrefList__item">
				<python></python>
			</div>
		</div>

		<h2 class="SectionPref2__subtitle">Web</h2>

		<div class="SectionPref2__list PrefList">
			<div class="PrefList__item">
				<vue-js></vue-js>
			</div>

			<div class="PrefList__item">
				<less-css></less-css>
			</div>

			<div class="PrefList__item">
				<post-css></post-css>
			</div>

		</div>

		<h2 class="SectionPref2__subtitle">Game</h2>

		<div class="SectionPref2__list PrefList">
			<div class="PrefList__item">
				<hots></hots>
			</div>

			<div class="PrefList__item">
				<rainbow-six></rainbow-six>
			</div>

			<div class="PrefList__item">
				<tetris></tetris>
			</div>

			<div class="PrefList__item">
				<nier></nier>
			</div>

			<div class="PrefList__item">
				<portal2></portal2>
			</div>

		</div>
	</div>
</template>

<style lang="less" scoped>
	.SectionPref2 {
		background: #252525;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding-top: 50px;
		position: relative;

		&__subtitle {
			max-width: 968px;
			margin: 10px auto;
			margin-top: 100px;
			padding: 0;
			width: 100%;
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 3rem;
			font-weight: 800;
			text-transform: uppercase;
		}
	}

	.PrefList {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		max-width: 968px;
		width: 100%;
		margin: 10px auto;
		margin-top: 40px;

		&__item {
			width: 33.33%;
			padding: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;

			&:first-child {
				margin-left: 0;
			}

			&:last-child {
				margin-right: 0;
			}

			& > svg {
				width: 20vw;
				max-width: 200px;
				height: 20vw;
				max-height: 200px;
			}
		}
	}
</style>

<script>
	import Es8 from "../assets/image/pref/ES8.svg?inline";
	import Hots from "../assets/image/pref/Hots.svg?inline";
	import LessCss from "../assets/image/pref/LessCSS.svg?inline";
	import Nier from "../assets/image/pref/Nier.svg?inline";
	import Portal2 from "../assets/image/pref/Portal2.svg?inline";
	import PostCss from "../assets/image/pref/PostCSS.svg?inline";
	import Python from "../assets/image/pref/Python.svg?inline";
	import RainbowSix from "../assets/image/pref/RainbowSix.svg?inline";
	import Tetris from "../assets/image/pref/Tetris.svg?inline";
	import VueJs from "../assets/image/pref/VueJS.svg?inline";

	export default {
		components: {
			Es8,
			Hots,
			LessCss,
			Nier,
			Portal2,
			PostCss,
			Python,
			RainbowSix,
			Tetris,
			VueJs
		}
	};
</script>
