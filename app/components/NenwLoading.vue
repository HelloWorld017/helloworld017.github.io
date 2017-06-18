<template>
	<div id="nenw-loading">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
			<symbol id="wave">
				<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
				<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
				<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
				<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
			</symbol>
		</svg>

		<div class="box">
			<div id="water" class="water" :style="style">
				<canvas :class="{fade: percent === 100}" ref="canvas"></canvas>

				<div class="water-wave wave-back">
					<svg viewBox="0 0 560 20" class="wave-content-back">
						<use xlink:href="#wave"></use>
					</svg>
				</div>
				<div class="water-wave wave-front">
					<svg viewBox="0 0 560 20" class="wave-content-front">
						<use xlink:href="#wave"></use>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	@waterFColor:#1de9b6;
	@waterBColor:#64ffda;

	.box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.water{
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 2;
			width: 100%;
			height: 0%;
			background: @waterFColor;
			.animated(2s);

			&-wave {
				width: 200%;
				position: absolute;
				top: 1px;
				transform: translate(0, -100%);
			}
		}

		.wave {
			&-back {
				right: 0;
				animation: wave-back 1.4s infinite linear;
			}

			&-front {
				left: 0;
				animation: wave-front .7s infinite linear;
			}

			&-content {
				&-back {
					fill: @waterBColor;
				}

				&-front {
					fill: @waterFColor;
				}
			}
		}
	}

	svg {
		display: block;
	}

	canvas {
		width: 100%;
		height: 100%;
		opacity: 1;

		transition-delay: 7s;
		.animated(1s);

		&.fade {
			opacity: 0;
		}
	}
</style>

<script>
	import RippleCreator from "../js/ripple";

	export default {
		computed: {
			percent() {
				return this.$store.state.loadedAssets /
					this.$store.state.assetsAmount * 100;
			},

			style() {
				return {
					height: `${Math.round(this.percent)}%`
				};
			}
		},

		mounted() {
			const canvas = this.$refs.canvas;
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;

			this.rippleCreator = new RippleCreator(canvas);
		},

		beforeDestroy(){
			this.rippleCreator.stopped = true;
		}
	};
</script>
