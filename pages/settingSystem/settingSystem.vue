<template>
	<view class="content">


<!-- 
		<button @click="addInfoNumber">点击增加通知次数 </button>

<button @click="onInfo">点击开启接收通知</button> -->

	</view>


</template>

<script>
	export default {
		data() {
			return {
				checked: false,
			}
		},
		onLoad() {

uni.showModal({
	title:'功能未开放',
	content:'后续的动态通知手机号会进一步开放，敬请期待'
})

		
		},
		methods: {


onInfo(){
	uni.request({
		url: 'https://song.lazion.cn/api/wx/secret',
		method: 'get',
	
		success(res) {
			let appSecret = res.data.data
	
			uni.login({
				provider: "weixin",
				success: function(res) {
					let appid = "wx0c46f8f108c3e0e2";
					let secret = appSecret;
					let url =
						"https://api.weixin.qq.com/sns/jscode2session?appid=" +
						appid +
						"&secret=" +
						secret +
						"&js_code=" +
						res.code +
						"&grant_type=authorization_code";
					uni.request({
						url: url, // 请求路径
						success: (r) => {
							console.log("r", r);
							console.info("用户的openId", r.data.openid);
							uni.request({
								url: 'https://song.lazion.cn/api/wx/keep/openid',
								method: 'get',
								data: {
									openId: r.data.openid
								},
								success(res) {
	
									uni.showToast({
										title: '登陆成功',
										icon: 'none', //如果要纯文本，不要icon，将值设为'none'
										duration: 2000 //持续时间为 2秒
									})
								}
							})
	
						},
					});
				},
			});
	
		}
	
	})
},
			onCheckd(e) {
				this.getDeviceDetail(this.id)

				this.checked = e.detail

			},


			login() {


			},
			addInfoNumber() {

				this.changeAgree()
				// uni.requestSubscribeMessage({
				// 	tmplIds: [''],
				// 	success(res) {
				// 		console.log(1111)
				// 	}
				// })
			},
			changeAgree() {
				uni.getSetting({
					withSubscriptions: true,
					success(res) {
						if (!res.subscriptionsSetting.mainSwitch) {
							uni.showModal({
								title: '温馨提示',
								content: '您没有开启订阅消息的权限，是否去设置？',
								success: function(resdata) {
									if (resdata.cancel) {
										uni.showToast({
											title: '拒绝',
											icon: 'none',
											duration: 1000
										})
									} else if (resdata.confirm) {
										uni.openSetting({
											withSubscriptions: true,
											success: function(dataAu) {
												console.log(dataAu, '打开设置页')

											}
										})
									}
								}
							})
						} else {
							// var templateid = that.setting.templateid.map(item => item.tempid)
							uni.requestSubscribeMessage({
								tmplIds: ['Fh5ctu6uxYQC4gV-z7lWSdX6mfaLlqOlNu1-9KNTJV8'],
								success(resres) {
									console.log(resres, '成功成功')

								},
								fail(fail) {
									console.log(fail, '失败失败失败')
								}
							})
						}
					}
				})
			}
		}

	}
</script>

<style>
</style>
