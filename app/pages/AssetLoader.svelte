<div id="nenw-loading">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
		<symbol id="wave">
			<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
			<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
			<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
			<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
		</symbol>
	</svg>

	<div class="loading">
		<span>Loading</span>
		<span>{percent}</span>
	</div>

	<div class="logs">
		{#each logs as log}
			<div class="log">
				{log}
			</div>
		{/each}
	</div>

	<div class="box">
		<div id="water" class="water" :style="height: `{percent}`">
			<canvas :class="{fade: percent === 100}" bind:this={canvas}></canvas>

			<div class="water-wave wave-back">
				<svg viewBox="0 0 560 20" class="wave-content-back">
					<use xlink:href="#wave"></use>
				</svg>
			</div>
			<div class="water-wave wave-front">
				<svg viewBox="0 0 560 20" class="wave-content-front">
					<use xlink:href="#wave"></use>
				</svg>
			</div>
		</div>
	</div>
</div>

<script>
	import {onMount, onDestroy} from 'svelte';
	import RippleCreator from "../src/Ripple";

	export let loader;

	let percent = 0;
	let logs = [];
	let canvas, rippleCreator;

	loader.on('update', (newPercent, newLog) => {
		percent = `${Math.round(newPercent)}%`;
		logs = [newLog, ...logs].slice(0, 10);
	});

	onMount(() => {
		canvas.width = canvas.offsetWidth;

		rippleCreator = new RippleCreator(canvas, () => {
			return this.$refs.water.offsetHeight;
		});
	});

	onDestroy(() => {
		rippleCreator.stopped = true;
	});
</script>

<style lang="less">
	.box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.water {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 2;
			width: 100%;
			height: 0%;
			background: #1de9b6;
			transition: all 2s ease;

			&-wave {
				width: 200%;
				position: absolute;
				top: 1px;
				transform: translate(0, -100%);
			}
		}

		.wave {
			&-back {
				right: 0;
				animation: wave-back 1.4s infinite linear;
			}

			&-front {
				left: 0;
				animation: wave-front .7s infinite linear;
			}

			&-content {
				&-back {
					fill: #64ffda;
				}

				&-front {
					fill: #1de9b6;
				}
			}
		}
	}

	svg {
		display: block;
	}

	canvas {
		width: 100%;
		height: 100%;
		opacity: 1;

		transition-property: all;
		transition-timing-function: ease;
		transition-duration: 1s;
		transition-delay: 7s;

		&.fade {
			opacity: 0;
		}
	}

	.loading {
		position: fixed;
		left: 50vw;
		top: 50vh;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Roboto', sans-serif;
		font-size: 2rem;
		font-weight: 100;
		padding: 10px;
		background: #00C0A0;
		color: #f1f2f3;
	}
</style>
