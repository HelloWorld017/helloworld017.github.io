<template>
	<main>
		<nenw-navigation></nenw-navigation>

		<parallax
			:height="100"
			:src="getAsset('bgGallery')"
			:speed="0.3"
			:unparallax="mobile">
			<section class="main-section">
				<header class="section-header">
					<h1 class="header-title">
						<i class="mdi mdi-image"></i>
					</h1>

					<h3>Gallery</h3>
				</header>
			</section>
		</parallax>

		<template v-for="(section, k) in links">
			<parallax
				:height="section.height"
				:src="getAsset(section.parallax)"
				:speed="0.3"
				:unparallax="mobile"
				pixelMode>
				<section class="gallery-section">
					<header class="section-header">
						<h1><i :class="section.icon"></i></h1>
					</header>

					<div class="decorated-text" v-for="link in section.links">
						<a target="_blank" :href="link.link" v-text="link.name"></a>
					</div>
				</section>
			</parallax>
		</template>

		<nenw-footer highlight="#d00060" darken="#c00050"></nenw-footer>
	</main>
</template>

<style lang="less" scoped>
	@import "~theme";

	main {
		display: flex;
		flex-direction: column;

		.parallax {
			position: relative;

			section {
				position: absolute;
				background: rgba(0, 0, 0, 0.3);
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;

				header {
					display: flex;
					min-height: 300px;
					flex-direction: column;
					.flex-centered;

					h1 {
						color: #fff;
						text-align: center;
					}

					i.mdi {
						font-size: 100px;
					}
				}
			}
		}

		.main-section {
			display: flex;
			flex-direction: column;
			color: #fff;
			.flex-centered;

			header {
				display: flex;
				flex-direction: column;
				.flex-centered;

				h1>i.mdi {
					font-size: 10rem;
				}

				h3 {
					font-size: 1.7rem;
					font-weight: 100;
				}
			}
		}
	}

	.decorated-text {
		width: 100%;
		height: 70px;
		display: flex;
		.flex-centered;

		a {
			position: relative;
			display: inline-block;
			color: #fff;
			font-family: 'Nanum Barun Gothic', sans-serif;
			font-size: 15px;
			text-decoration: none;
			text-align: center;
			max-width: 386px;
			width: 100%;
			height: 20px;
			line-height: 20px;

			&::before, &::after {
				position: absolute;
				top: 50%;
				content: '';
				width: 5px;
				height: 40px;
				background: rgba(255, 255, 255, 0.3);
				transform-origin: center;
				transform: translateY(-50%);
				.animated(.5s);
			}

			&::before {
				left: 0;
			}

			&::after {
				right: 0;
			}

			&:hover {
				&::before {
					left: 50%;
					top: -30px;
					background: #fff;
					transform: translateX(-50%) rotate(90deg);
				}

				&::after {
					right: 50%;
					bottom: -30px;
					background: #fff;
					transform: translateX(50%) rotate(90deg);
				}
			}
		}
	}
</style>

<script>
	import Parallax from "../components/Parallax.vue";
	import NenwFooter from "../components/NenwFooter.vue";
	import NenwNavigation from "../components/NenwNavigation.vue";

	const normalizeLinks = (v) => {
		if(typeof v === 'string'){
			return {
				name: v,
				link: `/play/${v.replace(' ', '')}.html`
			};
		}

		if(!Array.isArray(v)) return;

		return {
			name: v[1],
			link: `/play/${v[0]}.html`
		};
	};

	const LINKS = ((data) => {
		Object.keys(data).forEach((k) => {
			data[k].name = k.charAt(0).toUpperCase() + k.slice(1);
			data[k].icon = `mdi mdi-${data[k].icon}`;
			data[k].links = data[k].links.map(normalizeLinks);
			data[k].parallax = `bgGallery${data[k].name}`;
			data[k].height = data[k].links.length * 70 + 400;
		});

		return data;
	})({
		math: {
			icon: 'vector-triangle',
			links: [
				['Triangles', 'Triangles 1'],
				'Triangles 2', 'Triangles 3', 'Circles', 'Pixels', 'Lines',
				'Diagonal Pattern', 'Square Pattern', 'Triangle Pattern',
				['DrangonCurve', 'Dragon Curve (WIP)'],
				'Binary Clock'
			]
		},

		korean: {
			icon: 'file-document-box',
			links: [
				'Hangul'
			]
		},

		art: {
			icon: 'brush',
			links: [
				'Mine Sweeper', 'Rainy Drop', 'Snow Halation', 'Jump', 'Trail'
			]
		},

		progress: {
			icon: 'timelapse',
			links: [
				'Progress 1', 'Progress 2', 'Progress 3'
			]
		}
	});

	export default {
		data() {
			return {
				links: LINKS
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
			getAsset(token) {
				return window.assets[token];
			}
		},

		components: {
			Parallax,
			NenwFooter,
			NenwNavigation
		}
	};
</script>
