<template>
	<main>
		<parallax :speedFactor="0.5">
			<img :src="getBG(1)">
			<h1 class="fixed-centered">Khinenw's Page</h1>
		</parallax>
		<h1>Khinenw's Page</h1>

		<!-- <parallax section-class="small-masthead">
			<img :src="getBG(3)"></img>
		</parallax> -->
	</main>
</template>

<style lang="less" scoped>
	main {
		min-height: 200vh;
	}

	.small-masthead {
		min-height: 300px;
		height: 300px;
	}
</style>

<script>
	import Parallax from "vue-parallaxy";

	export default {
		methods: {
			getBG(num){
				return window.assets[`bgMain${num}`];
			}
		},

		components: {
			Parallax
		}
	};
</script>
