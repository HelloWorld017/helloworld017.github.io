<template>
	<main>
		<parallax :height="100" :src="getBG(1)" :speed="0.2" :unparallax="mobile">
			<div class="particle-section" v-if="!mobile">
				<parallax-object
					class="diamond-particle"
					v-for="(top, index) in particles"
					:scroll-offset="0"
					:top="top"
					:key="index"
					:speed="Math.random() + 0.5">
				</parallax-object>
			</div>

			<div class="fixed-centered text-centered">
				<h1 class="main-title">Khinenw's Page</h1>
				<h3 class="sub-title">키네누의 페이지에 오신 것을 환영합니다!</h3>
				<div class="mobile-menu show-on-mobile-down" ref="mobileMenu">
					<a target="_blank" href="https://blog.khinenw.tk">Blog</a>
					<router-link to="/gallery">Gallery</router-link>
					<a target="_blank" href="https://git.khinenw.tk">Projects</a>
					<a target="_blank" href="https://t.me/Khinenw">Telegram</a>
				</div>
			</div>

			<scroll-trigger
				class="bottom-menu hide-on-mobile-down"
				ref="desktopMenu"
				class-name="fixed"
				:position="height * 0.8"
				:scroll-offset="0">

				<h1 class="title">Khinenw's Page</h1>
				<div class="right-menu">
					<a target="_blank" href="https://blog.khinenw.tk">Blog</a>
					<router-link to="/gallery">Gallery</router-link>
					<a target="_blank" href="https://git.khinenw.tk">Projects</a>
					<a target="_blank" href="https://t.me/Khinenw">Telegram</a>
				</div>
			</scroll-trigger>
		</parallax>

		<section id="summary" class="chevron-section">
			<scroll-trigger :position="height" class-name="active"></scroll-trigger>
			<scroll-trigger :position="height + 550" class-name="inactive"></scroll-trigger>

			<canvas :width="width" height="550" ref="canvas"></canvas>

			<div class="section-inner">
				<h2 class="section-title">
					<light-text highlight="About ">Khinenw</light-text>
				</h2>

				Developer@Daedeok High School
				<br>
				<br>
				<div class="sh">
					<span class="sh-line">1</span>
					<span class="sh-code">console.log(
						<span class="sh-str">"Hello, World!"</span>
						);
					</span>
				</div>

				<br><br>
				<div style="margin-bottom: 50px;">
					<h3 class="inner-section-title">Links</h3>
					<a href="https://github.com/HelloWorld017/">Github</a>
					<a href="https://blog.khinenw.tk/">Blog</a>
				</div>
			</div>
		</section>

		<section class="chevron-section"></section>
		<section class="chevron-section"></section>

		<section class="chevron-section contents" id="interests">
			<div class="section-inner">
				<h2 class="section-title bold">
					preference
				</h2>
				<div class="box-container">
					<div class="box">
						<h3>
							Editor
						</h3>
						<a href="https://atom.io">
							<img src="/app/assets/image/atom.svg" alt="Atom">
						</a>
					</div>
					<div class="box">
						<h3>
							Language
						</h3>
						<a href="https://www.ecma-international.org/ecma-262/8.0/index.html">
							<img src="/app/assets/image/es8.svg" alt="ECMAScript8">
						</a>
					</div>
					<div class="box">
						<h3>
							Plays
						</h3>
						<a @click="heroes" class="sigong-joa">
							<img src="/app/assets/image/heroes.svg" alt="Heroes of the Storm">
						</a>
					</div>
					<div class="box">
						<h3>
							CSS Preprocessor
						</h3>
						<a href="http://lesscss.org">
							<img src="/app/assets/image/lesscss.svg" alt="LessCSS">
						</a>
						<a href="http://postcss.org">
							<img src="/app/assets/image/postcss.svg" alt="PostCSS">
						</a>
					</div>
					<div class="box">
						<h3>
							Front-end Framework
						</h3>
						<a href="https://vuejs.org">
							<img src="/app/assets/image/vue.svg" alt="VueJS">
						</a>
					</div>
					<div class="box">
						<h3>
							Likes
						</h3>
						<a href="https://en.wikipedia.org/wiki/Artificial_neural_network">
							<img src="/app/assets/image/ann.svg" alt="Neural Networks">
						</a>
						<a href="https://nodejs.org">
							<img src="/app/assets/image/nodejs.svg" alt="node.js">
						</a>
						<a href="https://electron.atom.io">
							<img src="/app/assets/image/electron.svg" alt="Electron">
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="chevron-section"></section>

		<!--<parallax :height="30" :src="getBG(2)" :speed="0.6" :unparallax="mobile"></parallax>

		<parallax :height="50" :src="getBG(3)" :speed="0.3" :unparallax="mobile"></parallax> -->

		<nenw-footer></nenw-footer>
	</main>
</template>

<style lang="less" scoped>
	@import "~theme";

	main {
		min-height: 200vh;
	}

	section {
		padding: 10px;
	}

	blockquote {
	    border-left: .5rem solid #c0c1c2;
		padding: .75rem .25rem;
	}

	#summary {
		color: #fff;
		position: relative;
		padding: 100px;
		height: 550px;
	    box-sizing: border-box;

		a {
			color: #fff;
		}

		h2 {
			color: #f1f1f1;
		}

		canvas {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
		}

		.section-inner {
			position: relative;
		}
	}

	.chevron-section {
		min-height: 120px;
		position: relative;
		&.contents {
			padding-top: 60px;
		}

		&:not(:last-of-type) {
			&::before, &::after {
				display: block;
				content: '';
				position: absolute;
				bottom: -60px;
				width: 0;
				height: 0;
				border-style: solid;
			}

			&::before {
				border-width: 60px 60vw 0 0;
				left: 0;
				z-index: 9;
			}

			&::after {
				border-width: 0 60vw 60px 0;
				right: 0;
				z-index: 10;
			}
		}

		@section-color: #212121, #323232, #3fc1c9, #ecfffb, #00c0a0;

		.for(length(@section-color)); .-each(@i) {
			@color: extract(@section-color, @i);

			&:nth-of-type(@{i}) {
				background: @color;

				&:not(:last-of-type) {
					&::before {
						border-color: @color transparent transparent transparent;
					}

					&::after {
						border-color: transparent @color transparent transparent;
					}
				}
			}
		}
	}

	.section-inner {
		max-width: 768px;
		margin: 0 auto;
	}

	.small-masthead {
		min-height: 300px;
		height: 300px;
	}

	.fixed-centered {
		position: absolute;
	}

	.sub-title {
		color: #fff;
		font-family: @title-font;
		font-weight: 100;
		font-size: 1.3rem;
	}

	.main-title {
		.sub-title;
		font-size: 4rem;
		background: rgba(0, 0, 0, .5);
		padding: 0 10px;
	}

	.section-title {
		font-size: 2.3rem;
		&.bold {
			font-weight: 700;
			text-transform: uppercase;
		}
	}

	.inner-section-title {
		font-size: 1.3rem;
	}

	.sigong-joa {
		cursor: pointer;
	}

	.particle-section {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;

		.diamond-particle {
			position: absolute;
			border-color: rgba(255, 255, 255, .3);
			border-style: solid;
			transform: rotate(45deg) translate(-50%, -50%);
			opacity: .4;

			&:nth-child(1) {
				left: 25%;
				top: 60%;
				width: 400px;
				height: 400px;
				border-width: 3px;
				border-color: rgba(255, 255, 255, .6);
			}

			&:nth-child(2) {
				left: 60%;
				top: 40%;
				width: 200px;
				height: 200px;
				border-width: 5px;
				border-color: rgba(255, 255, 255, .4);
			}

			&:nth-child(3) {
				left: 50%;
				top: 30%;
				width: 50px;
				height: 50px;
				border-width: 3px;
				border-color: rgba(255, 255, 255, .6);
			}

			&:nth-child(4) {
				left: 20%;
				top: 50%;
				width: 200px;
				height: 200px;
				border-width: 18px;
			}

			&:nth-child(5) {
				left: 50%;
				top: 70%;
				width: 300px;
				height: 300px;
				border-width: 7px;
			}
		}
	}

	.box-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.box {
		display: inline-block;
		margin-top: 50px;
	}

	.bottom-menu {
		top: 80%;
		left: 50%;
		box-sizing: border-box;
		transform: translateX(-50%);
		position: absolute;
		display: flex;
		min-width: 0;
		transition: min-width .4s ease, padding .35s ease, box-shadow .4s ease;
		justify-content: space-between;
		.text-centered;

		.right-menu {
			display: flex;
		}

		a {
			.animated-link
		}

		.title {
			padding: 0;
			font-family: @title-font;
			font-size: 1.3rem;
			font-weight: 300;
			color: #fff;
			margin: 0;
			display: none;
			.animated(.4s);
			opacity: 0;
			z-index: inherit;
			max-width: 0;
			overflow: hidden;
			font-size: 1.5rem;
			padding: 10px;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			transform: skewX(-10deg);
			background: rgba(0, 0, 0, .5);
			.animated(.4s);
		}

		&.hide-on-mobile-down.fixed {
			position: fixed;
			top: 0;
			z-index: 99;
			min-width: 100vw;
			padding: 0 5vw;
			.nav-shadow;

			a {
				font-weight: 400;
			}

			&::before {
				background: #00C0A0;
			}

			.title {
				display: inline-block;
				opacity: 1;
				max-width: none;
			}
		}
	}

	.mobile-menu {
		display: flex;
		position: relative;
		flex-direction: column;
		.flex-centered;

		a {
			.animated-link
		}
	}

	.sh {
		font-family: 'D2 Coding', monospace !important;
		background: #303030;
		color: #f1f1f1;
		max-width: 750px;
		margin: 15px;
		display: flex;
	}

	.sh-line {
		color: #808080;
		margin-left: 5px;
		padding-right: 20px;
		border-right: solid 1px #808080;
	}

	.sh-code {
		margin-left: 15px;
	}

	.sh-str {
		color: #00FF80;
	}

	@media only screen and (max-width: 768px) {
		.main-title {
			font-size: 3rem;
		}

		.sub-title {
			font-size: 1rem;
		}

		.bottom-menu a {
			font-size: 0.8rem;
		}

		section {
			padding: 30px;
		}

		.box-container {
			flex-direction: column;
		}
	}
</style>

<script>
	const NAVBAR_DESIRED = 100;

	import sketchless from "sketchless";
	import restaurance from "restaurance";

	import LightText from "../components/LightText.vue";
	import NenwFooter from "../components/NenwFooter.vue";
	import Parallax from "../components/Parallax.vue";
	import ParallaxObject from "../components/ParallaxObject.vue";
	import ScrollTrigger from "../components/ScrollTrigger.vue";

	export default {
		data() {
			return {particles: [60, 40, 30, 50, 70]};
		},

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
			getBG(num){
				return window.assets[`bgMain${num}`];
			},

			/* getRandomParticle() {
				let size = `${Math.random() * 400}px`;
				return {
					'border-width': `${Math.random() * 15 + 5}px`,
					'top': `${Math.random() * 100}%`,
					'left': `${Math.random() * 100}%`,
					'width': size,
					'height': size
				};
			}, */

			heroes() {
				restaurance({target: document.querySelector('#app-view')}, ['section', 'main>.parallax', 'footer'], 15);
			}
		},

		components: {
			LightText,
			NenwFooter,
			Parallax,
			ParallaxObject,
			ScrollTrigger
		},

		mounted() {
			//transparent makes a bug in chrome (makes a white diagonal line when nginx hardware accelerated)
			sketchless.rainy(this.$refs.canvas, '#212121');
		}
	};
</script>
