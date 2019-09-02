<template>
	<div class="Section SectionPref SectionPref1">
		<h1 class="SectionPref1__title">Pref</h1>
		<h2 class="SectionPref1__subtitle">Editor</h2>

		<pref-elem name="Atom" url="https://atom.io">
			<atom></atom>
		</pref-elem>

		<h2 class="SectionPref1__subtitle">Framework</h2>

		<pref-elem name="Node.js" url="https://nodejs.org">
			<node></node>
		</pref-elem>

		<pref-elem name="Electron" url="https://electronjs.org">
			<electron></electron>
		</pref-elem>

		<div class="SectionPref1__change Change">
			<div class="Change__prev">
				01
			</div>
			<div class="Change__next">
				02
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.SectionPref1 {
		background: #23B8A7;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding-top: 50px;
		position: relative;

		&__title {
			max-width: 1018px;
			margin: 20px auto;
			padding: 0;
			padding-left: 50px;
			width: 100%;
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 4rem;
			text-transform: uppercase;
		}

		&__subtitle {
			max-width: 968px;
			margin: 10px auto;
			margin-top: 40px;
			padding: 0;
			padding-left: 75px;
			width: 100%;
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 3rem;
			font-weight: 100;
		}
	}

	.Change {
		width: 100%;
		padding-right: 50px;
		box-sizing: border-box;
		text-align: right;
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
		font-size: 10vw;
		z-index: 1;

		position: relative;

		&__prev {
			color: #202020;
		}

		&__next {
			position: absolute;
			bottom: 0;
			right: 50px;
			color: #fff;
			transform: translate(0, 100%);
		}
	}

	@media (max-width: 768px) {
		.Change {
			font-size: 5rem;
		}
	}
</style>

<script>
	import Atom from "../assets/image/pref/Atom.svg?inline";
	import Electron from "../assets/image/pref/Electron.svg?inline";
	import Node from "../assets/image/pref/Node.svg?inline";
	import PrefElem from "../components/PrefElem.vue";

	export default {
		components: {
			Atom,
			Electron,
			Node,
			PrefElem
		}
	};
</script>
