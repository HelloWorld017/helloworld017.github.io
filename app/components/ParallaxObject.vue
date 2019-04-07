<template>
	<div class="parallax-contents" :style="{top: calculatedTop, opacity}">
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.parallax-contents {
		position: absolute;
	}
</style>

<script>
	import scroll from "../src/scroll";

	export default {
		props: {
			speed: {
				type: Number,
				default: 1.2
			},

			top: {
				type: Number,
				required: true
			},

			scrollOffset: {
				type: Number,
				default: 0
			},

			opacityMap: Boolean
		},

		computed: {
			scrollPosition() {
				return this.$store.state.scroll;
			},

			calculatedTop() {
				return `calc(${this.top}% + ${this.speed * (this.scrollPosition - this.scrollOffset)}px)`;
			},

			opacity() {
				if(this.opacityMap) return 1;

				return 1 - Math.min(1, Math.max(0, this.scrollPosition - this.opacityOffset) * (this.speed / 200));
			},

			opacityOffset() {
				return this.$store.state.height * this.top / 150 + this.scrollOffset;
			}
		}
	};
</script>
