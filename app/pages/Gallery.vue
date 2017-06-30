<template>
	<main>
		<section class="main-section">
			<header>
				<div class="header-wrapper">
					<div class="header-content">
						<h1 class="header-title"><i class="mdi mdi-image" style="font-size: 10rem;"></i></h1>
						<h3 class="header-title" style="font-size: 1.7rem; font-weight: 300">Gallery</h3>
					</div>
				</div>
			</header>
		</section>

		<template v-for="(section, k) in links">
			<parallax
				:height="section.height"
				:src="getAsset(section.parallax)"
				:unparallax="mobile",
				pixelMode>

				<header class="section-header">
					<h1><i :class="section.icon"></i></h1>
				</header>

				<div class="decorated-text-wrapper" v-for="link in section.links">
					<a :href="link.link" v-text="v.name"></a>
				</div>
			</parallax>
		</template>
	</main>
</template>

<script>
	import Parallax from "../components/Parallax.vue";

	const normalizeLinks = (v) => {
		if(typeof v === 'string'){
			return {
				name: v,
				link: `/play/${v.replace(' ', '')}.html`
			};
		}

		if(!Array.isArray(v)) return;

		return {
			name: v[0],
			link: `/play/${v[1]}.html`
		};
	};

	const LINKS = ((data) => {
		Object.keys(data).forEach((k) => {
			data[k].name = k.charAt(0).toUpperCase() + k.slice(1);
			data[k].icon = `mdi mdi-${data[k].icon}`;
			data[k].links = data[k].links.map(normalizeLinks);
			data[k].parallax = `bgGallery${data[k].name}`;
			data[k].height = data[k].links * 50 + 400;
		});

		return data;
	})({
		math: {
			icon: 'vector-triangle',
			links: [
				['Triangles', 'Tirnalges 1'],
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
				links: LINKS,
				mobile: window.innerWidth < 768
			};
		},

		methods: {
			getAsset(token) {
				return window.assets[token];
			}
		},

		mounted() {
			this._listener = () => {
				this.mobile = window.innerWidth < 768;
			};

			window.addEventListener('resize', this._listener);
		},

		beforeDestroy() {
			window.removeEventListener('resize', this._listener);
		},

		components: {
			Parallax
		}
	};
</script>
