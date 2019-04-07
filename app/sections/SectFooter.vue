<template>
	<footer id="nenw-footer" :style="{color: foreground}">
		<div class="highlight section" :style="{background: highlight}">
			<div class="footer-container">
				<h3>Footer</h3>

				<p>
					<light-text highlight="nenw.moe">
						4.1, 2017 Redesigned
					</light-text>
					<br>
					<light-text highlight="Powered by ">
						Koa
					</light-text>
					<br>
					<light-text highlight="Used ">
						Vue.js, Nanum Fonts
					</light-text>
				</p>
			</div>
		</div>
		<div class="darken section" :style="{background: darken}">
			<div class="footer-container flex-container">
				<light-text highlight="© 2016-2017 ">
					Khinenw
				</light-text>
				<br>

				<span>
					View on
					<a href="https://github.com/HelloWorld017/nenwchan2"
						class="no-decoration" :style="{color: foreground}">

						<span class="bold">GitHub</span>
					</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<style lang="less" scoped>
	footer {
		.bold {
			font-weight: 700;
		}

		a {
			text-decoration: none;
		}

		h3 {
			margin: 0;
			font-size: 2rem;
		}

		.section {
		    padding: 20px 30px;

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
			highlight: {
				type: String,
				default: '#009688'
			},

			darken: {
				type: String,
				default: '#00897b'
			},

			foreground: {
				type: String,
				default: '#fff'
			}
		},

		components: {
			LightText
		}
	};
</script>
