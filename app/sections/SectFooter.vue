<template>
	<footer id="SectFooter" class="Section Footer" :style="{color: foreground}">
		<div class="Footer__section" :style="{background: highlight}">
			<div class="Footer__container">
				<h3>Footer</h3>

				<p>
					<div class="Footer__line">
						<span class="bold">nenw.moe</span>
						4.2, 2019 Redesigned
					</div>

					<div class="Footer__line">
						<span class="bold">Powered by </span>
						Github Pages
					</div>

					<div class="Footer__line">
						<span class="bold">Used </span>
						Vue.js
					</div>
				</p>
			</div>
		</div>
		<div class="Footer__section Footer__section--darken" :style="{background: darken}">
			<div class="Footer__container Footer__container--justify">
				<div>
					<span class="bold">© 2016-2019 </span>
					Khinenw
				</div>

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
	.Footer {
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

		&__line:not(:first-child) {
			margin-bottom: 5px;
		}

		&__section {
		    padding: 20px 30px;
		}

		&__container {
			max-width: 768px;
			margin: 0 auto;

			&--justify {
				display: flex;
				justify-content: space-between;
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
