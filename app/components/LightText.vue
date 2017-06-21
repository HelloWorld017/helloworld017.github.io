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
		font-weight: 500;
	}

	.light {
		font-weight: 100;
	}
</style>

<script>
	export default {
		props: ['highlight']
	};
</script>
