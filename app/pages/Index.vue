<template>
	<main>
		<div class="fixed-centered text-centered">
			<h1 class="main-title">Khinenw's Page</h1>
			<h3 class="sub-title">키네누의 페이지에 오신 것을 환영합니다!</h3>
		</div>
		<parallax :speedFactor="0.5" :sectionHeight="100">
			<img :src="getBG(1)">
		</parallax>

		<section id="summary">
			<div class="section-inner">
				<h2 class="section-title">Summary</h2>
				<div class="sh">
					<span class="sh-line">1</span>
					<span class="sh-code">console.log(
						<span class="sh-str">"Hello, World!"</span>
						);
					</span>
				</div>
			</div>
		</section>
		
		<parallax :speedFactor="0.7" :sectionHeight="30">
			<img :src="getBG(2)">
		</parallax>

		<section id="summary">
			<div class="section-inner">
				<h2 class="section-title">Summary</h2>
				<div class="sh">
					<span class="sh-line">1</span>
					<span class="sh-code">console.log(
						<span class="sh-str">"Hello, World!"</span>
						);
					</span>
				</div>
			</div>
		</section>
		<!-- <parallax section-class="small-masthead">
			<img :src="getBG(3)"></img>
		</parallax> -->
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

	#summary {
		background: #202020;

		h2 {
			color: #f1f1f1;
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

	.sh {
		font-family: 'D2 Coding', monospace !important;
		background: #303030;
		color: #f1f1f1;
		max-width: 750px;
		margin: 15px;
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
	}
</style>

<script>
	import Parallax from "vue-parallaxy";

	export default {
		methods: {
			getBG(num){
				return window.assets[`bgMain${num}`];
			}
		},

		components: {
			Parallax
		}
	};
</script>
