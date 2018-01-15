<template>
	<main>
		<parallax :height="100" :src="asset('bgMain')" :speed="0.2" :unparallax="mobile" class="main-logo">
			<div class="overlay"></div>
			<div class="content">
				<div class="logo">
					<div class="logo-wrapper">
						<span class="logo-text">*</span>
					</div>
				</div>
				<div class="pole-top"></div>
				<h1 class="title-text">
					Khinenw's Page
				</h1>
				<div class="pole-bottom"></div>
			</div>
		</parallax>

		<section id="about">
			<div class="content-decorator"></div>
			<section class="content">
				<h2><span class="bold">About</span> Khinenw</h2>
				<p>
					Developer@Daedeok High School
				</p>
				<code>
					<span class="sh-line">1  |   </span>
					console.log(<span class="sh-str">"Hello, World!"</span>);
				</code>
			</section>

			<section id="link">
				<div class="decorator"></div>
				<div class="decorator"></div>
				<section class="link-content">
					<div class="inner-content">
						<h2>Links</h2>
						<li>
							<ul><a class="animated-link" href="https://github.com/HelloWorld017">GitHub</a></ul>
							<ul><a class="animated-link" href="https://blog.khinenw.tk">Blog</a></ul>
							<ul><a class="animated-link" href="https://t.me/Khinenw">Telegram</a></ul>
						</li>
					</div>
				</section>
			</section>
		</section>

		<section id="last">
			<nenw-footer></nenw-footer>
		</section>
	</main>
</template>

<style lang="less" scoped>
	@import "~theme";
	main {
		overflow: hidden;
	}

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
			overflow: hidden;

			.logo {
				color: #fff;
				border: 2.8vmin solid #fff;
				font-size: 13vmin;
				display: inline-block;
				width: 13vmin;
				height: 13vmin;
				margin-top: 15vmin;
				margin-bottom: 3vmin;
				transform: rotate(45deg);

				.logo-wrapper {
					width: 13vmin;
					height: 13vmin;
					text-align: center;
					transform: rotate(315deg) scale(2);

					.logo-text {
						font-family: "Lato", sans-serif;
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

			.pole-top {
				width: 1vmin;
				height: 5vmin;
				background: #fff;
			}

			.pole-bottom {
				width: 1vmin;
				height: 100vh;
				background: #fff;
			}
		}
	}

	#about {
		width: 100vw;
		min-height: 43vw;
		background: #e3e3e3;
		position: relative;

		.content-decorator {
			background: #e3e3e3;
			top: -120px;
			left: 50%;
			width: 99.76vw;
			height: 400px;
			position: absolute;
			transform: translateX(-51.5%) rotate(-4deg);
		    transform-origin: top;
		}


		* {
			font-family: 'Titilium', sans-serif;
		}

		.content {
			position: relative;
			padding: 0 4vw;
			max-width: 768px;
			margin: 0 auto;
			font-weight: 100;

			h2 {
				margin: 0;
				margin-bottom: 2rem;
				font-size: 3.5rem;
				font-weight: 100;
				color: #222222;
			}

			p {
				font-size: 2rem;
			}

			code, code span {
				font-family: "Fira Code", monospace;
			}

			code {
				background: #c0c0c0;
				color: #222222;
				padding: 5px;

				.sh-str {
					color: darken(#ff4e73, 10%);
				}
			}
		}
	}

	#link {
		position: absolute;
		bottom: 21vw;

		.decorator:nth-child(1) {
			position: absolute;
			width: 100vw;
			height: 57vw;
			transform: rotate(-15deg);
			background: #222222;
		}

		.decorator:nth-child(2) {
			position: absolute;
			top: 14vw;
			width: 120vw;
			height: 43vw;
			transform: rotate(-5deg);
			background: #323232;
		}

		.link-content {
			position: absolute;
			top: 7vw;
		    left: -14vw;
			width: 120vw;
			height: 57vw;
			background: #f17676;
			transform: rotate(20deg);

			.inner-content {
				transform: rotate(-20deg);
				position: relative;
				left: 14vw;
				color: #fff;

				* {
					font-family: "Roboto", sans-serif;
				}

				li {
					list-style-type: none;
					display: flex;

					ul {
						padding: 0;
					}
				}

				h2 {
					font-weight: 100;
					font-size: 3rem;
					margin: 0;
				}

				a {
					color: #fff;
					font-size: 1.3rem;
					font-weight: 400;
				}
			}
		}
	}

	#last {
		transform: translateY(10vmin) rotate(3deg);
	}

	.bold {
		font-weight: 500;
	}

	@media screen and (max-width: 768px) {
		#about {
			min-height: 300px;

			.content-decorator {
				height: 200px;
			}

			.content {
				h2 {
					font-size: 2rem;
				}

				p {
					font-size: 1rem;
				}
			}
		}

		#link .decorator {
			display: none;
		}
	}
</style>

<script>
	const NAVBAR_DESIRED = 100;

	import restaurance from "restaurance";

	import LightText from "../components/LightText.vue";
	import NenwFooter from "../components/NenwFooter.vue";
	import Parallax from "../components/Parallax.vue";
	import ParallaxObject from "../components/ParallaxObject.vue";
	import ScrollTrigger from "../components/ScrollTrigger.vue";

	export default {
		computed: {
			mobile() {
				return this.$store.state.mobile;
			},

			height() {
				return this.$store.state.height;
			},

			width() {
				return this.$store.state.width;
			}
		},

		methods: {
			asset(id) {
				return window.assets[id];
			},

			heroes() {
				restaurance({target: document.querySelector('#app-view')}, ['section', 'main>.parallax', 'footer'], 15);
			},

			playAnim() {
				this.$el.querySelectorAll('.box').forEach((v) => v.classList.add('active'));
			}
		},

		components: {
			LightText,
			NenwFooter,
			Parallax,
			ParallaxObject,
			ScrollTrigger
		}
	};
</script>
