<template>
	<section class="SectAbout Section">
		<div class="SectAbout__inner">
			<h1 class="SectAbout__title">
				Profile
			</h1>

			<div class="SectAbout__content">
				<div class="SectAbout__top">
					<div class="SectAbout__profile">
						<img class="SectAbout__profile__image" :src="asset('profile')" alt="profile">
						<span class="SectAbout__profile__name">nenw*</span>
					</div>

					<div class="SectAbout__aviate Aviate">
						<div class="Aviate__diagram">
							<div class="Aviate__dot"></div>
							<div class="Aviate__connect Aviate__connect--2x"></div>
							<div class="Aviate__plane">
								<i class="Aviate__plane__fill mdi mdi-airplane"></i>
								<i class="Aviate__plane__stroke mdi mdi-airplane"></i>
							</div>
							<div class="Aviate__connect"></div>
							<div class="Aviate__dot"></div>
						</div>

						<div class="Aviate__nodes">
							<div class="Aviate__node Aviate__start">
								<span class="Aviate__point__name">H2</span>
								<span class="Avaite__point__date">2017.02</span>
							</div>

							<div class="Aviate__node Aviate__end">
								<span class="Aviate__dot__name">K4</span>
								<span class="Avaite__dot__date">2022.02</span>
							</div>
						</div>
					</div>
				</div>

				<div class="SectAbout__bio">
					Developer @ KAIST
				</div>

				<div class="SectAbout__code Code">
					<div class="Code__line">
						<div class="Code__indicator">
							1
						</div>
						<code class="Code__code">
							<span class="Code__fragment">Khinenw.status(</span>
							<span class="Code__string Code__string--yellow">'Aviation in Progress'</span>
							<span class="Code__fragment">);</span>
						</code>
					</div>

					<div class="Code__line">
						<div class="Code__indicator">
							2
						</div>
						<code class="Code__code">
							<span class="Code__fragment">Khinenw.setAka(</span>
							<span class="Code__string">'nenw*'</span>,
							<span class="Code__string">'키네누'</span>,
							<span class="Code__string">'네누별'</span>,
							<span class="Code__string">'キネヌ'</span>
							<span class="Code__fragment">);</span>
						</code>
					</div>
				</div>

				<div class="SectAbout__contacts">
					<div class="SectAbout__contact Contact">
						<i class="Contact__icon mdi mdi-github-circle"></i>
						<a class="Contact__value" href="https://github.com/HelloWorld017">@HelloWorld017</a>
					</div>

					<div class="SectAbout__contact Contact">
						<i class="Contact__icon mdi mdi-telegram"></i>
						<a class="Contact__value" href="https://t.me/Khinenw">@Khinenw</a>
					</div>

					<div class="SectAbout__contact Contact">
						<i class="Contact__icon mdi mdi-email-variant"></i>
						<a class="Contact__value" href="mailto:khi@nenw.dev">khi at nenw dot dev</a>
					</div>
				</div>

			</div>
		</div>
		<div class="SectAbout__clip">
			<sect-clip class="SectAbout__clip__image"></sect-clip>
		</div>
	</section>
</template>

<style lang="less" scoped>
	@import "~theme";

	.SectAbout {
		background: #272727;
		display: flex;
		flex-direction: column;
		position: relative;

		&__title {
			color: #fff;
			font-family: 'Titillium Web', sans-serif;
			font-weight: 100;
			font-size: 2.4rem;

			padding-bottom: 25px;
		}

		&__inner {
			padding: 40px 20px;
			width: 100%;
			max-width: 768px;
			margin: 0 auto;
			box-sizing: border-box;
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 0 20px;
		}

		&__profile {
			display: flex;
			align-items: center;

			&__name {
				color: #fff;
				font-family: 'Exo 2', sans-serif;
				font-weight: 100;
				font-size: 2rem;
			}

			&__image {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				margin-right: 20px;
			}
		}

		&__top {
			display: flex;
			justify-content: space-between;

			width: 100%;
		}

		&__bio {
			margin-top: 10px;

			color: #f1f1f1;
			font-family: 'Exo 2', sans-serif;
			font-weight: 300;
			font-size: 1.6rem;
		}

		&__code {
			margin-top: 40px;
		}

		&__contacts {
			display: flex;
			flex-direction: column;
			margin-top: 70px;
		}

		&__contact {
			&:not(:first-child) {
				margin-top: 5px;
			}
		}

		&__clip {
			position: relative;

			&__image {
				position: relative;
				height: 80%;
				transform: scale(1.25) translateY(-6.25%);
			}
		}
	}

	.Aviate {
		display: flex;
		flex-direction: column;

		&__nodes {
			display: flex;
			justify-content: space-between;
			width: 200px;
		}

		&__node {
			display: flex;
			flex-direction: column;
			color: #f1f1f1;
		}

		&__start {
			align-items: flex-start;
		}

		&__end {
			align-items: flex-end;
		}

		&__diagram {
			display: flex;
			align-items: center;
			overflow: hidden;
		}

		&__dot {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: #fff;
		}

		&__connect {
			flex: 1;
			height: 1px;
			background: #fff;

			&--2x {
				flex: 2;
			}
		}

		&__plane {
			position: relative;
			transform: rotate(90deg);
			transform-origin: center;

			&__fill {
				position: relative;
				color: #25D7C3;
				z-index: 1;
			}

			&__stroke {
				position: absolute;
				top: 0;
				left: 0;

				color: #272727;
				transform: scale(3) rotate(90deg);
			}
		}
	}

	.Code {
		background: #202020;
		display: flex;
		flex-direction: column;
		padding: 10px 20px;

		&__line {
			display: flex;
			margin-top: 5px;
		}

		&__indicator {
			font-family: 'Fira Code', sans-serif;

			width: 10px;
			padding-right: 10px;
			border-right: 1.5px solid #404040;
			margin-right: 15px;
			color: #404040;
		}

		&__code {
			color: #fff;
			display: flex;

			&, & * {
				//TODO change to noto sans?
				font-family: 'Fira Code', 'Nanum Barun Gothic', sans-serif;
			}
		}

		&__string {
			color: #25d7c3;

			&--yellow {
				color: #d6ad43;
			}
		}
	}

	.Contact {
		display: flex;
		color: #f1f1f1;
		font-size: 1.1rem;

		&__icon {
			margin-right: 1rem;
		}

		&__value {
			cursor: pointer;
			color: #a0a0a0;
			text-decoration: none;
			position: relative;
			z-index: 2;
		}
	}
</style>

<script>
	import SectClip from "../assets/image/sectclip-1.svg?inline";
	export default {
		methods: {
			asset(id) {
				return window.assets[id];
			}
		},

		components: {
			SectClip
		}
	};
</script>
