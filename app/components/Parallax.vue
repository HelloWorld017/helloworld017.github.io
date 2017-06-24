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
	}
</style>

<script>
	import scroll from "../js/scroll";

	export default {
		data(){
			return {
				vpWidth: window.innerWidth,
				vpHeight: window.innerHeight,
				imgWidth: 1,
				imgHeight: 1,
				scrollPosition: 0,
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
			}
		},

		methods: {
			updateViewport() {
				this.vpWidth = window.innerWidth;
				this.vpHeight = window.innerHeight;
			},

			updateScroll() {
				this.scrollPosition = scroll();
				this.scrollOffset = this.$el.scrollTop;
			},

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

			this.updateViewport();
		},

		mounted() {
			this.updateScroll();

			this._scrollListener = () => this.updateScroll();
			this._resizeListener = () => this.updateViewport();

			window.addEventListener('scroll', this._scrollListener);
			window.addEventListener('resize', this._resizeListener);
		},

		beforeDestroy() {
			window.removeEventListener('scroll', this._scrollListener);
			window.removeEventListener('resize', this._resizeListener);
		}
	};
</script>
