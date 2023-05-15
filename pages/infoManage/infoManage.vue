<template>
	
	
	<view class="content">
		
		<view style="">
		
		</view>
		<van-cell-group inset>
		  <van-cell title="通知人" value="1919191919" />
		<van-cell center title="是否启用">
		  <template #right-icon>
		    <van-switch :checked="checked" @change="onCheckd"size="24" />
		  </template>
		</van-cell>
		</van-cell-group>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
			}
		},
		onLoad() {
	
		},
		methods: {
		onCheckd(e) {
		
			this.checked = e.detail
		
		},
		}}
</script>

<style>
	.content{
		background-color: rgb(247,248,250);
		height: 100%;
		width: 100%;
	}
</style>