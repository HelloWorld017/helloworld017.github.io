<template>
	<div class="Section SectionPref SectionPref1">
		<h1 class="SectionPref1__title">Pref</h1>
		<h2 class="SectionPref1__subtitle">Editor</h2>
		
		<div class="SectionPref1__element PrefElem">
			<atom class="PrefElem__icon"></atom>
			<div class="PrefElem__desc">
				<span class="PrefElem__title">Atom</span>
				<a class="PrefElem__readmore" href="https://atom.io">Read More</a>
			</div>
		</div>
		
		<h2 class="SectionPref1__subtitle">Framework</h2>
		<div class="SectionPref1__element PrefElem">
			<node class="PrefElem__icon"></node>
			<div class="PrefElem__desc">
				<span class="PrefElem__title">Node.js</span>
				<a class="PrefElem__readmore" href="https://nodejs.org">Read More</a>
			</div>
		</div>
		<div class="SectionPref1__element PrefElem">
			<electron class="PrefElem__icon"></electron>
			<div class="PrefElem__desc">
				<span class="PrefElem__title">Electron</span>
				<a class="PrefElem__readmore" href="https://electronjs.org">Read More</a>
			</div>
		</div>
		
		<div class="SectionPref1__change Change">
			<div class="Change__prev">
				01
			</div>
			<div class="Change__next">
				02
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.SectionPref1 {
		background: #23B8A7;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding-top: 50px;
		position: relative;
		
		&__title {
			max-width: 1018px;
			margin: 20px auto;
			padding: 0;
			padding-left: 50px;
			width: 100%;
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 4rem;
			text-transform: uppercase;
		}
		
		&__subtitle {
			max-width: 968px;
			margin: 10px auto;
			margin-top: 40px;
			padding: 0;
			padding-left: 75px;
			width: 100%;
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 3rem;
			font-weight: 100;
			text-transform: uppercase;
		}
	}
	
	.PrefElem {
		display: flex;
		width: 100%;
		max-width: 768px;
		margin: 20px auto;
		
		&__icon {
			width: 20vw;
			max-width: 200px;
		}
		
		&__desc {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
		}
		
		&__title {
			color: #fff;
			font-family: 'Roboto', sans-serif;
			font-size: 2rem;
			font-weight: 700;
			text-transform: uppercase;
			margin: 0;
			margin-bottom: 15px;
		}
		
		&__readmore {
			color: #fff;
			font-size: 1.5rem;
			font-weight: 200;
			text-decoration: none;
			position: relative;
			
			&::after {
				display: block;
				background: #fff;
				content: '';
				
				position: absolute;
				left: 50%;
				bottom: -1px;
				height: .8px;
				width: 0;
				
				transform: translate(-50%, 0);
				
				transition: all .4s ease;
			}
			
			&:hover {
				&::after {
					width: 100%;
				}
			}
		}
	}
	
	.Change {
		width: 100%;
		padding-right: 50px;
		box-sizing: border-box;
		text-align: right;
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
		font-size: 10vw;
		
		position: relative;
		
		&__prev {
			color: #202020;
		}
		
		&__next {
			position: absolute;
			bottom: 0;
			right: 50px;
			color: #fff;
			transform: translate(0, 100%);
		}
	}
</style>

<script>
	import Atom from "../assets/image/pref/Atom.svg?inline";
	import Electron from "../assets/image/pref/Electron.svg?inline";
	import Node from "../assets/image/pref/Node.svg?inline";
	
	export default {
		components: {
			Atom,
			Electron,
			Node
		}
	};
</script>
