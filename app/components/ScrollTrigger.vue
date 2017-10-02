<template>
	<div class="sticky">
		<slot></slot>
	</div>
</template>

<script>
	import scroll from "../js/scroll";

	export default {
		data(){
			return {
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

			className: {
				type: String,
				required: true
			}
		},

		methods: {
			updateScroll(){
				this.scroll = scroll();

				if(this.scroll + this.scrollOffset >= this.position) {
					this.$el.classList.add(this.className);
					this.$emit('under');
				} else {
					this.$el.classList.remove(this.className);
					this.$emit('over');
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
