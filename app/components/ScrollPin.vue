<template>
	<div class="sticky" :style="{top: calculatedTop}" :class="{fixed, active}">
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
	.sticky {
		width: 100%;
		position: relative;

		&.fixed.active {
			position: fixed;
		}
	}
</style>

<script>
	import scroll from "../js/scroll";

	export default {
		data(){
			return {
				elemTop: 0,
				max: 0,
				calculatedTop: 0,
				active: false,
				events: {
					scrollListener: () => this.updateScroll(),
					resizeListener: () => this.updateRect()
				}
			};
		},

		props: {
			offset: {
				type: Number,
				default: 0
			},

			duration: {
				type: Number,
				default: -1
			},

			fixed: {
				type: Boolean
			},

			fixedTop: {
				type: Number,
				default: 0
			}
		},

		methods: {
			updateScroll(){
				const pos = scroll();

				if(pos > this.elemTop - this.offset && pos < this.max) {
					this.active = true;

					if(this.fixed) {
						this.calculatedTop = `${this.fixedTop}px`;
					} else {
						this.calculatedTop = `${pos - this.elemTop + this.offset}px`;
					}
				} else if(pos > this.elemTop) {
					this.active = false;
					this.calculatedTop = `${this.max - this.elemTop + this.offset}px`;
				} else {
					this.active = false;
					this.calculatedTop = '0';
				}
			},

			updateRect() {
				this.$el.style.position = 'static';
				this.elemTop = this.$el.getBoundingClientRect().top + scroll();
				this.max = this.duration > 0 ?
					this.elemTop + this.duration :
					this.$parent.$el.getBoundingClientRect().bottom;
				this.$el.style.position = '';
			}
		},

		mounted() {
			window.addEventListener('scroll', this.events.scrollListener);
			window.addEventListener('resize', this.events.resizeListener);

			this.updateRect()
		},

		beforeDestroy() {
			window.removeEventListener('scroll', this.events.scrollListener);
			window.removeEventListener('resize', this.events.resizeListener);
		}
	}
</script>
