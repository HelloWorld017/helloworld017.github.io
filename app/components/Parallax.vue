<template>
	<div class="parallax" :style="computedStyle">
		<div class="parallax-contents">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.parallax {
		width: 100%;
		position: relative;
		display: flex;
	}
</style>

<script>
	import scroll from "../js/scroll";

	export default {
		data(){
			return {
				imgWidth: 1,
				imgHeight: 1,
				scrollOffset: 0
			};
		},

		props: {
			unparallax: {
				type: Boolean
			},

			src: {
				type: String,
				required: true
			},

			height: {
				type: Number,
				required: true
			},

			pixelMode: {
				type: Boolean
			},

			speed: {
				type: Number,
				default: 1.2
			}
		},

		computed: {
			computedStyle() {
				if(this.unparallax) {
					return {
						minHeight: `${this.calculatedHeight}px`,
						backgroundImage: `url('${this.src}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					};
				}

				return {
					minHeight: `${this.calculatedHeight}px`,
					backgroundImage: `url('${this.src}')`,
					backgroundSize: this.imgSize,
					backgroundPosition: `0 ${-this.currentYOffset}px`
				};
			},

			calculatedHeight(){
				return this.pixelMode ?
					this.height :
					this.height / 100 * this.vpHeight;
			},

			currentYOffset() {
				const {start, end, diff} = this.getScrollData();

				return (this.scrollPosition - start) * diff;
			},

			imgSize() {
				let width = this.vpWidth;
				let height = this.calculatedHeight * (1 + this.speed);

				if(this.imgWidth / this.imgHeight > width / height) {
					width = this.imgWidth * height / this.imgHeight;
				} else {
					height = this.imgHeight * width / this.imgWidth;
				}

				return `${width}px ${height}px`;
			},

			vpWidth() {
				return this.$store.state.width;
			},

			vpHeight() {
				return this.$store.state.height;
			},

			scrollPosition() {
				return this.$store.state.scroll;
			}
		},

		methods: {
			getScrollData() {
				const start = Math.max(0, this.scrollOffset - this.vpHeight);
				const end = this.scrollOffset + this.calculatedHeight + this.vpHeight;
				const diff = this.calculatedHeight * this.speed / (end - start);

				return {start, end, diff};
			}
		},

		created() {
			const image = new Image();
			image.onload = () => {
				this.imgWidth = image.width;
				this.imgHeight = image.height;
			};
			image.src = this.src;
		},

		mounted() {
			this.scrollOffset = this.$el.getBoundingClientRect().top;
		}
	};
</script>
