<template>
	<div class="nav">
		<scroll-trigger :position="height" className="active">
			<nav class="top-nav">
				<div class="nav-wrapper">
					<h1>Khinenw's Page</h1>

					<div class="mobile-nav show-on-mobile-down">
						<a @click="toggleAside">
							<i class="mdi mdi-menu"></i>
						</a>
					</div>

					<div class="nav-right">
						<router-link to="/">Main</router-link>
						<a target="_blank" href="https://blog.nenw.dev">Blog</a>
						<router-link to="/gallery">Gallery</router-link>
						<a target="_blank" href="https://git.nenw.dev">Projects</a>
						<a target="_blank" href="https://t.me/Khinenw">Telegram</a>
					</div>
				</div>
			</nav>
		</scroll-trigger>


		<aside :class="{active: aside}">
			<a class="closer" @click="toggleAside">
				<i class="mdi mdi-close"></i>
			</a>

			<h1>Khinenw's Page</h1>
			<router-link to="/">Main</router-link>
			<a href="https://blog.nenw.dev">Blog</a>
			<router-link to="/gallery">Gallery</router-link>
			<a href="https://git.nenw.dev">Projects</a>
			<a href="https://t.me/Khinenw">Telegram</a>
		</aside>

		<div class="cover" :class="{active: aside}" @click="toggleAside"></div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	aside {
		position: fixed;
		display: flex;
		background: #202122;
		top: 0;
		left: -300px;
		width: 300px;
		height: 100vh;
		flex-direction: column;
		z-index: 101;
		.flex-centered;
		.animated(.5s);

		&.active {
			left: 0;
		}

		h1 {
			color: #fff;
			text-align: center;
			font-family: @title-font;
			font-size: 1.6rem;
			font-weight: 100;
		}

		a {
			cursor: pointer;

			&:not(.closer) {
				.animated-link;
				font-weight: 400;
			}
		}

		.closer {
			position: absolute;
			right: 10px;
			top: 10px;
			font-size: 1.3rem;
			color: #fff;
		}
	}

	nav {
		color: #f1f2f3;
		position: fixed;
		display: flex;
		top: 0;
		left: 0;
		width: 100vw;
		height: 60px;
		padding: 5px 20px;
		box-sizing: border-box;
		z-index: 99;
		.animated(.5s);
		.flex-centered;

		.nav-wrapper {
			width: 100%;
			max-width: 968px;
			display: flex;
			justify-content: space-between;
		}

		.nav-right {
			display: flex;
			.flex-centered;

			a {
				.animated-link;
				font-weight: 400;
				font-size: 1.1rem;
			}
		}

		.mobile-nav {
			position: absolute;
			left: 0;
			padding-left: 5px;
			a {
				color: #fff;
				font-size: 1.4rem;
			}
		}

		h1 {
			font-size: 1.7rem;
			font-weight: 400;
			font-family: @title-font;
			margin: 0;
			padding: 0;
			line-height: 50px;
		}
	}

	.active nav {
		background: #f1f2f3;
		//Kong-color
		color: #222222;
		.nav-shadow;

		a {
			color: #222222;

			&::after {
				background: #222222;
			}
		}
	}

	.cover {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: transparent;
		z-index: 100;
		pointer-events: none;
		.animated(.5s);

		&.active {
			background-color: rgba(0, 0, 0, .6);
			pointer-events: all;
		}
	}

	@media only screen and (max-width: 768px) {
		nav .nav-right {
			display: none;
		}

		nav .nav-wrapper {
			.flex-centered;
		}
	}
</style>

<script>
	import ScrollTrigger from "./ScrollTrigger.vue";

	export default {
		data() {
			return {
				aside: false
			};
		},

		computed: {
			mobile() {
				return this.$store.state.mobile;
			},

			height() {
				return this.$store.state.height;
			}
		},

		methods: {
			toggleAside(e) {
				this.aside = !this.aside;
				e.stopPropagation();
				e.preventDefault();
			}
		},

		components: {
			ScrollTrigger
		}
	};
</script>
