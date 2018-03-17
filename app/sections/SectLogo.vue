<template>
	<parallax :height="100" :src="asset('bgMain')" :speed="0.2" :unparallax="mobile" class="main-logo">
		<div class="overlay"></div>
		<div class="content">
			<div class="top-parts">
				<div class="logo-wrapper">
					<div class="logo">
						<div class="inner-logo">
							<span class="logo-text">*</span>
						</div>
					</div>
				</div>
				<div class="pole-top"></div>
			</div>
			<h1 class="title-text">
				Khinenw's Page
			</h1>
			<div class="pole-bottom"></div>
		</div>
	</parallax>
</template>

<style lang="less" scoped>
	.main-logo {
		display: flex;
		justify-content: center;
		align-items: center;

		.overlay {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, #2d3442, #192032);
			opacity: .9;
		}

		.content {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100vh;

			.top-parts {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;

				flex: 1;

				.pole-top {
					width: 1vmin;
					height: 5vmin;
					background: #fff;
				}

				.logo {
					color: #fff;
					border: 2.8vmin solid #fff;
					font-size: 13vmin;
					display: inline-block;
					width: 13vmin;
					height: 13vmin;
					margin-bottom: 3vmin;
					transform: rotate(45deg);

					.inner-logo {
						width: 13vmin;
						height: 13vmin;
						text-align: center;
						transform: rotate(315deg) scale(2);

						.logo-text {
							font-family: "Lato", sans-serif;
						}
					}
				}
			}

			.title-text {
				font-family: "Lato", sans-serif;
				font-weight: 100;
				color: #fff;
				font-size: 16vmin;
				margin-top: 6vmin;
				margin-bottom: 6vmin;
				text-align: center;
			}

			.pole-bottom {
				width: 1vmin;
				flex: 1;
				background: #fff;
			}
		}
	}
</style>

<script>
	import Parallax from "../components/Parallax.vue";
	export default {
		components: {
			Parallax
		},

		computed: {
			mobile() {
				return this.$store.state.mobile;
			}
		},

		methods: {
			asset(id) {
				return window.assets[id];
			}
		}
	};
</script>
