<template>
	<main>
		<sect-logo></sect-logo>
		<sect-about></sect-about>
		<sect-pref1></sect-pref1>
		<sect-footer highlight="transparent" darken="transparent"></sect-footer>
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
	const NAVBAR_DESIRED = 100;

	import SectAbout from "../sections/SectAbout.vue";
	import SectFooter from "../sections/SectFooter.vue";
	import SectLogo from "../sections/SectLogo.vue";
	import SectPref1 from "../sections/SectPref1.vue";

	export default {
		computed: {
			mobile() {
				return this.$store.state.mobile;
			},

			height() {
				return this.$store.state.height;
			},

			width() {
				return this.$store.state.width;
			}
		},

		methods: {
			asset(id) {
				return window.assets[id];
			},

			playAnim() {
				this.$el.querySelectorAll('.box').forEach((v) => v.classList.add('active'));
			}
		},

		components: {
			SectAbout,
			SectFooter,
			SectLogo,
			SectPref1
		}
	};
</script>
