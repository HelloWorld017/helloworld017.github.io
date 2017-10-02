<template>
	<div class="parallax-contents" :style="{top: calculatedTop}">
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
	import scroll from "../js/scroll";

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
				required: true
			}
		},

		computed: {
			scrollPosition() {
				return this.$store.state.scroll;
			},

			calculatedTop() {
				return `calc(${this.top}% + ${this.speed * (this.scrollPosition - this.scrollOffset)}px)`;
			}
		}
	};
</script>
