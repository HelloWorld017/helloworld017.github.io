<template>
	<div class="sticky">
		<slot></slot>
	</div>
</template>

<script>
	import scroll from "../src/scroll";

	export default {
		data(){
			return {
				prevScroll: scroll(),
				scroll: scroll()
			};
		},

		props: {
			position: {
				type: Number,
				required: true
			},

			scrollOffset: {
				type: Number,
				default: 0
			},

			max: {
				type: Number,
				default: Infinity
			},

			className: {
				type: String,
				required: true
			}
		},

		methods: {
			updateScroll(){
				this.prevScroll = this.scroll;
				this.scroll = scroll();

				const prev = this.prevScroll + this.scrollOffset;
				const curr = this.scroll + this.scrollOffset;

				const previousState = prev >= this.position && prev < this.max;
				const currentState = curr >= this.position && curr < this.max;

				if(currentState && !previousState) {
					this.$el.classList.add(this.className);
					this.$emit('over');
				} else if(!currentState && previousState) {
					this.$el.classList.remove(this.className);
					this.$emit('under');
				}
			}
		},

		mounted() {
			this._scrollListener = () => this.updateScroll();
			window.addEventListener('scroll', this._scrollListener);
		},

		beforeDestroy() {
			window.removeEventListener('scroll', this._scrollListener);
		}
	}
</script>
