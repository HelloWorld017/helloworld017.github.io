<template>
	<footer id="nenw-footer" :style="{color: foreground}">
		<div class="highlight section" :style="{background: highlight}">
			<div class="footer-container">
				<h3>Footer</h3>

				<p>
					<div>
						<span class="light">nenw.moe</span>
						4.1, 2017 Redesigned
					</div>
					<br>
					<div>
						<span class="light">Powered by </span>
						Github Pages
					</div>
					<br>
					<div>
						<span class="light">Used </span>
						Vue.js, Nanum Fonts
					</div>
				</p>
			</div>
		</div>
		<div class="darken section" :style="{background: darken}">
			<div class="footer-container flex-container">
				<div>
					<span class="light">© 2016-2019 </span>
					Khinenw
				</div>
				<br>

				<span>
					View on
					<a href="https://github.com/HelloWorld017/helloworld017.github.io"
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
		}
	};
</script>
