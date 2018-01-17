<template>
	<scroll-pin class="scroll-section" :duration="height">
		<div class="identifier" ref="identifier">
			<a class="bullet" v-for="i in num" :key="i" :class="{active: checkActive(i)}"></a>
		</div>

		<section class="container">
			<transition>
				<slot :name="activeSlot"></slot>
			</transition>
		</section>
	</scroll-pin>
</template>

<style lang="less" scoped>
	.scroll-section {
		display: flex;
		padding-left: 50px;
		margin: 100px 0;
		justify-content: space-between;
		min-height: 512px;

		.identifier {
			display: flex;
			flex-direction: column;

			@bullet-size: 10px;
			@bullet-width: @bullet-size / 2;

			.bullet {
				display: inline-block;
				width: @bullet-size;
				height: @bullet-size;
				margin-top: 5px;
				margin-bottom: 5px;
				margin-right: 10vw;
				border-radius: 50%;
				box-sizing: border-box;
				border-color: #fff;
				border-style: solid;
				border-width: 1px;
				transition: border-width .5s ease;

				&.active {
					border-width: @bullet-width;
				}
			}
		}

		.container {
			background: #f0f0f0;
			flex: 1;
		}
	}
</style>

<script>
	import {Controller, Scene} from "scrollmagic";
	import ScrollPin from "./ScrollPin.vue";

	export default {
		data() {
			return {
				activeId: 1
			};
		},

		props: {
			num: {
				type: Number,
				required: true
			}
		},

		methods: {
			checkActive(i) {
				return i === this.activeId;
			}
		},

		computed: {
			activeSlot() {
				return `slot-${this.activeId}`;
			},

			height() {
				return this.$store.state.height * this.num;
			}
		},

		mounted() {

		},

		destroyed() {

		},

		components: {
			ScrollPin
		}
	};
</script>
