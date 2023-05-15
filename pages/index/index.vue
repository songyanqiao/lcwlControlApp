<template>
	<view class="content">
		<image mode="widthFix" class="logo" src="/static/lcwlLogo.png"></image>
		<van-notice-bar text="本小程序是龙程网络科技公司研发" />

		<view class="msg">
			<van-cell-group inset>
				<van-field required clearable label="账号" @change="changeValue" id="phone" :value="phone"
					placeholder="请输入账号" bind:click-icon="onClickIcon" />

				<van-field :value="password" @change="changeValue" id="password" type="password" label="密码"
					placeholder="请输入密码" required />
			</van-cell-group>

		</view>
		<view class="loginBox">
			<van-button @click="login()" custom-class="login" type="primary">登录</van-button>
			<!--  <view style="margin-left: 20px;" class="">
   	 <van-button @click="register()" custom-class="login" type="info">注册</van-button>
   </view> -->

		</view>

		<view class="space">

		</view>
		<van-notify id="van-notify" />
	</view>
</template>

<script>
	import Notify from '../../wxcomponents/@vant/weapp/notify/notify';
	export default {
		data() {
			return {
				title: 'Hello',
				phone: '',
				password: ''
			}
		},
		onLoad() {

		},
		methods: {
			changeValue(e) {
				console.log(e)
				if (e.currentTarget.id == "phone") {
					this.phone = e.detail
				} else if (e.currentTarget.id == "password") {
					this.password = e.detail
				}
			},
			login() {

				let a = new Uint8Array(6)
				console.log(a)
				let phone = this.phone
				let password = this.password

				uni.request({
					url: 'https://song.lazion.cn/api/user/login',
					method: 'get',
					data: {
						userPassword: password,
						userAccount: phone
					},
					success: res => {
						console.log(res)

						if (res.data.code == 1) {

							Notify({
								type: 'danger',
								message: '登录失败'
							});
						} else {

							Notify({
								type: 'success',
								message: '登录成功'
							});
							uni.navigateTo({
								url: "/pages/controlList/controlList"
							})

						}

					},
					fail: () => {
						uni.showToast({
							title: '网络错误',
							icon: 'none', //如果要纯文本，不要icon，将值设为'none'
							duration: 2000 //持续时间为 2秒
						})
					}
				})






			},
			register() {
				uni.navigateTo({
					url: "/pages/register/register"
				})
			}

		}
	}
</script>

<style>
	.loginBox {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}

	.login {
		width: 100px;
	}

	.space {
		width: 100%;
		height: 100px;
	}

	.content {

		background-color: #f9f9f9;
		width: 100%;
		height: 667px;
	}

	.msg {
		margin: 20px;
	}

	.logo {
		width: 100%;
		height: ;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
