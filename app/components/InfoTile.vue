<template>
	<section class="info-tile" :class="{active}">
		<div class="info-viewer">
			<div class="info-line"></div>
			<a :href="link" class="info-button" target="_blank">
				<i class="mdi mdi-plus"></i>
			</a>
		</div>
		<img :src="loadedImage"></img>
	</section>
</template>

<style lang="less" scoped>
	.info-viewer {
		position: absolute;
		top: 0;
		transform: translateX(-50px);
	}

	.info-line {
		width: 1px;
		height: 60vh;
		transform: translate(60vw, -60vw) rotate(45deg) scaleY(1.414);
		transform-origin: bottom center;
		transition: all .4s ease;
		background: #888;
	}

	.info-button {
		width: 50px;
		height: 50px;
		align-items: center;
		background: #e8656f;
		border: none;
		border-radius: 50%;
		color: #fff;
		cursor: pointer;
		display: flex;
		font-size: 20px;
		justify-content: center;
		outline: none;
		opacity: 0;
		transform: translateY(-25px);
		transition: box-shadow .4s ease, opacity .4s ease .4s;

		&:hover {
			box-shadow: rgba(0, 0, 0, .3) 0px 0px 5px 2px;
		}
	}

	.info-tile {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;

		position: relative;

		img {
			background: #f0f0f0;
			position: relative;
		}

		&.active {
			.info-line {
				transform: translateX(25px) rotate(45deg) scaleY(1.414);
			}

			.info-button {
				opacity: 1;
			}
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				active: false
			};
		},

		props: {
			image: {
				type: String,
				required: true
			},

			text: {
				type: String,
				default: ''
			},

			link: {
				type: String,
				default: "javascript:void(0)"
			}
		},

		computed: {
			loadedImage() {
				return window.assets[this.image];
			}
		},

		methods: {
			activate() {
				this.active = true;
			},

			deactivate() {
				this.active = false;
			}
		}
	}
</script>
