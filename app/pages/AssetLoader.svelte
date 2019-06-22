<div id="AssetLoader">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
		<symbol id="wave">
			<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
			<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
			<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
			<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
		</symbol>
	</svg>

	<div class="WaveContainer">
		<div class="Water" style="height: {percent}" bind:this={water}>
			<canvas class:fade="{percent === 100}" bind:this={canvas}></canvas>

			<div class="Wave Wave--back">
				<svg viewBox="0 0 560 20" class="Wave__content--back">
					<use xlink:href="#wave"></use>
				</svg>
			</div>
			<div class="Wave Wave--front">
				<svg viewBox="0 0 560 20" class="Wave__content--front">
					<use xlink:href="#wave"></use>
				</svg>
			</div>
		</div>
	</div>

	<div class="Loading" class:FadeOut="{percent === 100}">
		<span>{percent}</span>
	</div>

	<div class="Logs" class:FadeOut="{percent === 100}">
		{#each logs as log}
			<div class="Log">
				{log}
			</div>
		{/each}
	</div>
</div>

<script>
	import {onMount, onDestroy} from 'svelte';
	import RippleCreator from "../src/Ripple";
	import "../less/Wave.less";

	export let loader;

	let percent = 0;
	let logs = [];
	let water, canvas, rippleCreator;

	loader.on('update', (newPercent, newLog) => {
		percent = `${newPercent}%`;
		logs = [newLog, ...logs].slice(0, 10);
	});

	onMount(() => {
		canvas.width = canvas.offsetWidth;

		rippleCreator = new RippleCreator(canvas, () => {
			return water.offsetHeight;
		});
	});

	onDestroy(() => {
		rippleCreator.stopped = true;
	});
</script>

<style>
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
	}

	canvas.fade {
		opacity: 0;
	}

	.Loading {
		position: fixed;
		left: 50vw;
		top: 50vh;
		width: 100px;
		height: 100px;
		background: #159284;
		border-radius: 50%;
		transform: translate(-50%, -50%);

		font-family: 'Roboto', sans-serif;
		font-size: 2rem;
		font-weight: 100;
		text-align: center;
		line-height: 100px;
		color: #f1f2f3;
	}

	.Logs {
		position: fixed;
		left: 10px;
		bottom: 10px;
		width: 300px;
		display: flex;
		flex-direction: column-reverse;
		color: #f1f2f3;
		background: rgba(0, 0, 0, .5);
		border-radius: 5px;
		padding: 20px;
	}

	.FadeOut {
		animation-name: FadeOut;
		animation-duration: .4s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
	}

	@keyframes FadeOut {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
