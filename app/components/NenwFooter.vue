<template>
	<footer>
		<div class="highlight section" :class="{dark}">
			<div class="footer-container">
				<h3>Footer</h3>

				<p>
					<light-text highlight="khinenw.tk">
						4.0, 2017 Redesigned
					</light-text>
					<br>
					<light-text highlight="Powered by ">
						Nginx
					</light-text>
					<br>
					<light-text highlight="Used ">
						Vue.js, Nanum Fonts
					</light-text>
				</p>
			</div>
		</div>
		<div class="darken section" :class="{dark}">
			<div class="footer-container flex-container">
				<light-text highlight="© 2016-2017 ">
					Khinenw
				</light-text>
				<br>

				<span>
					View on
					<a href="https://github.com/HelloWorld017/nenwchan2" class="no-decoration">
						<span class="bold">GitHub</span>
					</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<style lang="less" scoped>
	footer {
		color: #fff;

		.bold {
			font-weight: bold;
		}

		a {
			color: #fff;
			text-decoration: none;
		}

		h3 {
			margin: 0;
			font-size: 2rem;
		}

		.section {
		    padding: 20px 10px;

			&.highlight {
				background: #009688;

				&.dark {
					//Kong-color;
					background: #222222;
				}
			}

			&.darken {
				background: #00897b;
				&.dark {
					background: #303132;
				}
			}

			&>.footer-container {
				max-width: 768px;
				margin: 0 auto;

				&.flex-container {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>

<script>
	import LightText from "./LightText.vue";

	export default {
		props: {
			dark: {
				type: Boolean
			}
		},

		components: {
			LightText
		}
	};
</script>
