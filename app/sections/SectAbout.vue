<template>
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
</template>

<style lang="less" scoped>
	@import "~theme";

	#about {
		width: 100vw;
		min-height: 43vw;
		background: #e3e3e3;
		position: relative;

		.content-decorator {
			background: #e3e3e3;
			top: -10px;
			left: 50%;
			width: 113vw;
			height: 100vw;
			position: absolute;
			transform: translateX(-50%) rotate(-4deg);
			transform-origin: bottom left;
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
				background: #d0d0d0;
				color: #222222;
				padding: 5px;
				overflow-x: auto;
				overflow-y: visible;
				white-space: nowrap;

				.sh-str {
					color: darken(#ff4e73, 10%);
				}
			}
		}
	}

	#link {
		margin-top: 20rem;
		padding-bottom: 30vh;
		overflow: hidden;

		.decorator {
			position: absolute;

			&:nth-child(1) {
				width: 100vw;
				height: 57vw;
				transform: rotate(-15deg);
				background: #222222;
			}

			&:nth-child(2) {
				width: 120vw;
				height: 43vw;
				transform: rotate(-5deg);
				background: #323232;
			}
		}

		.link-content {
			position: absolute;
			left: -14vw;
			width: 120vw;
			height: 57vw;
			background: #f17676;
			transform: rotate(20deg);

			.inner-content {
				transform: rotate(-20deg);
				transform-origin: left;
				position: relative;
				top: 15%;
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

		#link {
			padding-bottom: 10vh;
			margin-top: 10rem;

			 .decorator {
				 display: none;
			 }

			.link-content {
				position: static;
				transform: none;

				.inner-content {
					transform: none;
				}
			}
		}
	}
</style>

<script>
	export default {};
</script>
