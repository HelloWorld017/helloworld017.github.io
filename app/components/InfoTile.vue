<template>
	<section class="info-tile" :class="{active}">
		<h1 class="info-title">
			{{text}}
			<a :href="link" class="info-button" target="_blank">
				<i class="mdi mdi-plus"></i>
			</a>
		</h1>
		<img :src="loadedImage"></img>
	</section>
</template>

<style lang="less" scoped>
	.info-button {
		width: 50px;
		height: 50px;
		align-items: center;
		background: #e8656f;
		border: none;
		border-radius: 50%;
		color: #fff;
		cursor: pointer;
		display: inline-flex;
		font-size: 20px;
		justify-content: center;
		outline: none;
		transition: box-shadow .4s ease;
		vertical-align: middle;

		&:hover {
			box-shadow: rgba(0, 0, 0, .3) 0px 0px 5px 2px;
		}
	}

	.info-tile {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100%;

		position: relative;

		img {
			background: #f0f0f0;
			position: relative;
		}
	}

	.info-title {
		margin: 20px 0;
		font-size: 3rem;
		font-weight: 100;
		display: flex;
		width: 100%;
		justify-content: space-between;
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
