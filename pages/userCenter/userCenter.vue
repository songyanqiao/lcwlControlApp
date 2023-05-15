<template>
<view class="content">
	
	
	
	<image style="width: 100%;" mode="widthFix"  src="/static/lcwlLogo.png"></image>
	
	
<van-cell-group inset>
<van-cell @click="addDeviceRecord"  title="添加设备" is-link  />

<!-- <van-cell  @click="infoManage"  title="通知管理" is-link /> -->
<van-cell @click="settingSystem"   title="系统设置" is-link />
</van-cell-group>
	
	
	<van-tabbar @change="onChangeTabbar" :active="active ">
		<van-tabbar-item name="list" icon="home-o">设备列表</van-tabbar-item>
		<van-tabbar-item name="userCenter" icon="user-o">用户中心</van-tabbar-item>
	</van-tabbar>
</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
			},
			methods:{
				onChangeTabbar(e){
					
					if(e.detail=='list'){
						uni.navigateTo({
							url:"/pages/controlList/controlList"
						})
					}
				
				},
				addDeviceRecord(){
					
					uni.navigateTo({
						url:"/pages/addDeviceRecord/addDeviceRecord"
					})
				},infoManage(){
					
					uni.navigateTo({
						url:"/pages/infoManage/infoManage"
					})
				},settingSystem(){
					
					uni.navigateTo({
						url:"/pages/settingSystem/settingSystem"
					})
				}
				
			}
			}
</script>

<style>
</style>