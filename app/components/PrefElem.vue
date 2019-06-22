<template>
	<div class="PrefElem">
		<div class="PrefElem__icon">
			<slot></slot>
		</div>
		<div class="PrefElem__desc">
			<span class="PrefElem__title">{{name}}</span>
			<a class="PrefElem__readmore" :href="url">
				<i class="mdi mdi-texture"></i> ExLink
			</a>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.PrefElem {
		display: flex;
		width: 100%;
		max-width: 768px;
		padding: 0 50px;
		box-sizing: border-box;
		margin: 20px auto;

		&__icon * {
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
			font-family: 'Lato', sans-serif;
			font-size: 1.5rem;
			font-weight: 400;
			text-decoration: none;
			position: relative;

			&::after {
				display: block;
				background: rgba(255, 255, 255, .5);
				content: '';

				position: absolute;
				left: 50%;
				bottom: -5px;
				height: 3px;
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
</style>

<script>
	export default {
		props: {
			name: String,
			url: String
		}
	};
</script>
