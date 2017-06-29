<template>
	<span>
		<span class="unlight" v-text="highlight"></span>
		<span class="light">
			<slot></slot>
		</span>
	</span>
</template>

<style lang="less" scoped>
	.unlight {
		font-weight: 700;
	}

	.light {
		font-weight: 300;
	}
</style>

<script>
	export default {
		props: ['highlight']
	};
</script>
