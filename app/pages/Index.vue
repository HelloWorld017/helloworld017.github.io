<template>
	<main>
		<parallax :height="100" :src="getBG(1)" :speed="0.2" :unparallax="mobile">
			<div class="fixed-centered text-centered">
				<h1 class="main-title">Khinenw's Page</h1>
				<h3 class="sub-title">키네누의 페이지에 오신 것을 환영합니다!</h3>
				<div class="mobile-menu show-on-mobile-down" ref="mobileMenu">
					<a href="https://blog.khinenw.tk">Blog</a>
					<router-link to="/gallery">Gallery</router-link>
					<router-link to="/project">Projects</router-link>
					<router-link to="/service">Services</router-link>
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
					<a href="https://blog.khinenw.tk">Blog</a>
					<router-link to="/gallery">Gallery</router-link>
					<router-link to="/project">Projects</router-link>
					<router-link to="/service">Services</router-link>
				</div>
			</scroll-trigger>
		</parallax>

		<section id="summary">
			<div class="section-inner">
				<h2 class="section-title">
					Summary
				</h2>
				<div class="sh">
					<span class="sh-line">1</span>
					<span class="sh-code">console.log(
						<span class="sh-str">"Hello, World!"</span>
						);
					</span>
				</div>
			</div>
		</section>

		<parallax :height="30" :src="getBG(2)" :speed="0.6" :unparallax="mobile"></parallax>

		<section id="about-khinenw">
			<div class="section-inner">
				<h2 class="section-title">
					<light-text highlight="About ">Khinenw</light-text>
				</h2>

				대덕고등학교에 재학중인 <strike>개발자</strike> 코딩노예
				<br>
				<img src="https://track.khinenw.tk/script/res/profile2">

				<div style="margin-bottom: 50px;">
					<h3 class="inner-section-title">Links</h3>
					<a href="https://github.com/HelloWorld017/">Github</a>
					<a href="https://blog.khinenw.tk/">Blog</a>
				</div>
			</div>
		</section>

		<parallax :height="50" :src="getBG(3)" :speed="0.3" :unparallax="mobile"></parallax>

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
		background: #202020;
		padding: 100px;

		h2 {
			color: #f1f1f1;
		}
	}

	#about-khinenw {
		background: #fff;
		color: #202020;

		h2 {
			color: #202020;
		}

		a {
			color: #333;
		}

		img {
			width: 100%;
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

	.main-title {
		font-size: 4rem;
		color: #fff;
		font-family: @title-font;
		font-weight: 100;
	}

	.sub-title {
		.main-title;
		font-size: 1.3rem;
	}

	.section-title {
		font-size: 2.3rem;
	}

	.inner-section-title {
		font-size: 1.3rem;
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
			background: rgba(0, 0, 0, 0.5);
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
			font-size: 1.5rem;
		}

		.sub-title {
			font-size: 1rem;
		}

		.bottom-menu a {
			font-size: 0.8rem;
		}

		#summary {
			padding: 10px;
		}
	}
</style>

<script>
	const NAVBAR_DESIRED = 100;

	import LightText from "../components/LightText.vue";
	import NenwFooter from "../components/NenwFooter.vue";
	import Parallax from "../components/Parallax.vue";
	import ScrollTrigger from "../components/ScrollTrigger.vue";

	export default {
		computed: {
			mobile() {
				return this.$store.state.mobile;
			},

			height() {
				return this.$store.state.height;
			}
		},

		methods: {
			getBG(num){
				return window.assets[`bgMain${num}`];
			}
		},

		components: {
			LightText,
			NenwFooter,
			Parallax,
			ScrollTrigger
		}
	};
</script>
