<template>
	<div class="scroll-section-root">
		<div class="scroll-section-wrapper">
			<scroll-pin class="scroll-section" :duration="totalSectionHeight" :offset="offset" fixed>
				<div class="identifier" ref="identifier">
					<a class="bullet" v-for="i in num" :key="i" :class="{active: checkActive(i)}"></a>
				</div>

				<section class="container">
					<transition name="slide">
						<div v-for="i in num" :key="i" v-if="activeId === i" class="scroll-container">
							<slot :name="`slot-${i}`"></slot>
						</div>
					</transition>
				</section>
			</scroll-pin>
		</div>

		<div class="position-holder" :style="{height: computedHeight}"></div>
	</div>
</template>

<style lang="less" scoped>
	.scroll-section-root {
		margin-bottom: 100px;
	}

	.scroll-section-wrapper {
		position: absolute;
		width: 100%;
	}

	.scroll-section {
		display: flex;
		padding-left: 50px;
		margin: 10vh 0;
		justify-content: space-between;
		min-height: 80vh;

		.identifier {
			display: flex;
			flex-direction: column;

			@bullet-size: 10px;
			@bullet-width: @bullet-size / 2;

			.bullet {
				display: inline-block;
				width: @bullet-size;
				height: @bullet-size;
				margin-top: 5px;
				margin-bottom: 5px;
				margin-right: 10vw;
				border-radius: 50%;
				box-sizing: border-box;
				border-color: #fff;
				border-style: solid;
				border-width: 1px;
				transition: border-width .5s ease;

				&.active {
					border-width: @bullet-width;
				}
			}
		}

		.container {
			background: #f0f0f0;
			overflow: hidden;
			position: relative;
			flex: 1;
		}
	}

	.scroll-container {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.slide-enter-active, .slide-leave-active {
		transition: transform .5s ease;
	}

	.slide-enter {
		transform: ~"translateY(calc(80vh - 1px))";
	}

	.slide-enter-to, .slide-leave {
		transform: translateY(0);
	}

	 .slide-leave-to {
		 transform: ~"translateY(calc(-80vh + 1px))";
	 }
</style>

<script>
	import {Controller, Scene} from "scrollmagic";
	import ScrollPin from "./ScrollPin.vue";

	export default {
		data() {
			return {
				elemTop: 0,
				events: {
					resizeListener: () => this.updateRect()
				}
			};
		},

		props: {
			num: {
				type: Number,
				required: true
			}
		},

		methods: {
			checkActive(i) {
				return i === this.activeId;
			},

			updateRect() {
				this.elemTop = this.$el.getBoundingClientRect().top + this.$store.state.scroll;
			}
		},

		computed: {
			height() {
				return this.$store.state.height;
			},

			computedHeight() {
				return `${(this.num + 0.9) * this.height}px`;
			},

			offset() {
				return this.height * 0.1;
			},

			totalSectionHeight() {
				return this.height * this.num;
			},

			activeId() {
				return Math.min(
					Math.max(
						0, Math.floor((this.$store.state.scroll - this.elemTop) / this.height)
					) + 1,
					this.num
				);
			}
		},

		mounted() {
			window.addEventListener('resize', this.events.resizeListener);

			this.updateRect();
		},

		destroyed() {
			window.removeEventListener('resize', this.events.resizeListener);
		},

		components: {
			ScrollPin
		}
	};
</script>
