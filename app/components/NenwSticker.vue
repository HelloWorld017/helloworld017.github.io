<template>
	<div class="nenw-sticker" ref="activator">
		<div class="sticky sticker-animated">
			<div class="front circle-wrapper sticker-animated">
				<div class="front circle sticker-animated">
					<img :src="profileSrc">
				</div>
			</div>
		</div>

		<div class="sticky sticker-animated">
			<div class="back circle-wrapper sticker-animated">
				<div class="back circle sticker-animated"></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	@size: 200px;
	@rotate-start: 10deg;
	@rotate-end: 45deg;
	@sticker-color: #00bcd4;

	.sticker-animated {
		.animated(750ms);
	}

	.nenw-sticker {
		position: relative;
		width: @size;
		height: @size;

		.sticky {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			transform: rotate(@rotate-start);
			transform-origin: @size / 2 @size / 2;

			.circle-wrapper {
				overflow: hidden;

				&.front {
					height: 0;
					margin-top: @size;

					&>.circle {
						margin-top: -@size;
						background-image: linear-gradient(to top, rgba(251,236,63,.0) 75%, @sticker-color 95%);

						img {
							width: @size;
							height: @size;
							border-radius: @size;
							transform: rotate(-@rotate-start);
						}
					}
				}

				&.back {
					height: @size;
					margin-top: @size;

					&>.circle {
						background-image: linear-gradient(to top, rgba(251,236,63,.0), rgba(255,255,255,.8));
						margin-top: 0;
					}
				}

				&>.circle {
					width: @size;
					height: @size;
					border-radius: @size;
					background: @sticker-color;
				}
			}
		}

		&.active {
			.sticky {
				opacity: 1;
				transform: rotate(45deg);

				.circle-wrapper {
					&.front {
						height: @size;
						margin-top: 0;

						&>.circle {
							margin-top: 0;

							img {
								transform: rotate(-@rotate-end);
							}
						}
					}

					&.back {
						margin-top: 0;
						>.circle {
							height: @size;
							margin-top: -@size;
						}
					}
				}
			}
		}
	}
</style>

<script>
	export default {
		computed: {
			profileSrc(){
				return window.assets.profile;
			}
		},

		props: {
			active: {
				type: Boolean
			}
		},

		mounted(){
			setTimeout(() => this.$refs.activator.classList.add('active'), 500);
		}
	};
</script>
