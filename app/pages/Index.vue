<template>
	<main>
		<navigation></navigation>
		<sect-logo></sect-logo>
		<sect-about></sect-about>
		<sect-pref1></sect-pref1>
		<sect-pref2></sect-pref2>
		<sect-footer highlight="#1c1c1c" darken="#191919"></sect-footer>
	</main>
</template>

<style lang="less" scoped>
	main {
		display: flex;
		flex-direction: column;

		background: #e3e3e3;
		overflow: hidden;
	}
</style>

<script>
	import Navigation from "../components/Navigation.vue";
	import SectAbout from "../sections/SectAbout.vue";
	import SectFooter from "../sections/SectFooter.vue";
	import SectLogo from "../sections/SectLogo.vue";
	import SectPref1 from "../sections/SectPref1.vue";
	import SectPref2 from "../sections/SectPref2.vue";

	export default {
		methods: {
			asset(id) {
				return window.assets[id];
			}
		},

		components: {
			Navigation,
			SectAbout,
			SectFooter,
			SectLogo,
			SectPref1,
			SectPref2
		}
	};
</script>
