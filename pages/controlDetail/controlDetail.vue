<template>

	<view class="content">

		<!-- 	<image style="width: 100%;" mode="aspectFit"
			src="https://img0.baidu.com/it/u=86488813,3798298985&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=354" alt="">
 -->
		<!-- <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
			目前能修改就只有合同到期时间，充值到期时间，备注。
		</van-notice-bar> -->
		<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
			{{("数据创建时间:"+createTime),}}
		</van-notice-bar>
		<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
			{{("数据更新时间:" +updateTime)}}
		</van-notice-bar>
		<van-cell-group>
			<!-- <van-field :value="deviceName" :disabled="!checked" label="监控名称:" placeholder="请输入监控名称"
					input-align="right" /> -->
			<van-field :disabled="!checked" id='address' @change="field" :value="address" label="设备地址"
				input-align="right" />
			<van-cell :disabled="!checked" id='isCardOverdue'
				:value="isCardOverdue=='0'?'充值未过期':isCardOverdue=='1'?'充值即将过期':isCardOverdue=='2'?'充值已过期':'异常'"
				title="是否过期"
				:value-class="isCardOverdue=='0'?'primary':isCardOverdue=='1'?'warning':isCardOverdue=='2'?'danger':'danger'" />
			<van-cell :disabled="!checked" id='isDeviceOverdue'
				:value="isDeviceOverdue=='0'?'合同未过期':isDeviceOverdue=='1'?'合同即将过期':isDeviceOverdue=='2'?'合同已过期':'异常'"
				title="是否过期"
				:value-class="isDeviceOverdue=='0'?'primary':isDeviceOverdue=='1'?'warning':isDeviceOverdue=='2'?'danger':'danger'" />

			<van-field :disabled="!checked" id='deviceName' @change="field" :value="deviceName" label="设备名称"
				input-align="right" />
			<!-- 	<van-field :value="deviceId" label="设备ID" error input-align="right" /> -->
			<van-field :disabled="!checked" id='installName' @change="field" :value="installName" label="安装人名称:"
				input-align="right" />
			<van-field :disabled="!checked" id='iotcardId' @change="field" :value="iotcardId" label="物联网卡号"
				input-align="right" />
			<van-field :disabled="!checked" id='dandelionId' @change="field" :value="dandelionId" label="蒲公英码"
				input-align="right" />
			<van-field :disabled="!checked" id='iotcardName' @change="field" :value="iotcardName" label="实名人"
				input-align="right" />
			<van-field :disabled="!checked" id='operator' @change="field" :value="operator" label="运营商"
				input-align="right" />
			<van-field :disabled="!checked" id='corporation' @change="field" :value="corporation" label="所属公司"
				input-align="right" />
			<van-field :disabled="!checked" id='month' @change="field" :value="month" label="已充月数"
				input-align="right" />
			<!-- <van-cell :value="startRechargTime" title="开卡时间" is-link @click="StartRechargMonths" is-link /> -->
			<van-cell :disabled="!checked" :value="cardOverdueTime" title="充值到期时间" @click="RechargeExpirationTime"
				is-link />
			<van-cell :disabled="!checked" :value="installTime" title="安装时间" @click="InstallTime" is-link />
			<van-field :disabled="!checked" id='signPeriod' @change="field" :value="signPeriod" label="合同期限"
				input-align="right" />
			<van-cell :disabled="!checked" :value="installOverdueTime" title="设备到期时间" @click="overdueTime" is-link />

			<van-cell title="充值是否启用通知">
				<van-switch size="20px" :checked="checkedCard" @change="onCheckdCard" />
			</van-cell>
			<van-cell title="合同是否启用通知">
				<van-switch size="20px" :checked="checkedDevice" @change="onCheckdDevice" />
			</van-cell>
			<van-field :disabled="!checked" id='mark' :value="mark" @change="field" label="留言备注:" type="textarea"
				placeholder="请输入留言" autosize input-align="right" :border="false" />
		</van-cell-group>

		<view @click="editDeviceMsg">
			<view class="confirmButton">
				<van-button :type="(checked?'primary':'primary')" size="large">确认修改</van-button>
			</view>

		</view>

		<view @click="deleteDeviceMsg" class="confirmButton">
			<van-button type="danger" size="large">删除设备</van-button>
		</view>
		<van-dialog id="van-dialog" />
		<van-popup @close="onClose" position="bottom" :show="show1">
			<view class="timePicker">
				<van-datetime-picker type="date" :value="currentDate " :input="onInput" :min-date=" minDate "
					@formatter=" formatter " @confirm="onConfirm1" @cancel="show=false" />
			</view>
		</van-popup>
		<!-- 	<van-calendar   @close="show = false"  :show="show" @confirm="onConfirm" /> -->
	</view>

</template>

<script>
	import Dialog from '../../wxcomponents/@vant/weapp/dialog/dialog';
	import {
		baseUrl
	} from '../../config/config.js'
	var app=getApp()
	export default {
		data() {
			return {
				show1: false,
				checkedCard: false,
				checkedDevice: false,
				date: '',
				checked: true,
				mark: '',
				deviceName: '大门摄像头',
				deviceId: '223233132',
				deviceLocation: '福州市/仓山区/阳光小区',
				deviceInstallTime: '2023/2/23',
				deviceExpirationTime: '2023/5/23',
				rechargeExpirationTime: '2023/5/23',
				timePickerType: 0,
				cardNumber: '3231321312312',
				snNumber: '3232h2j3h1',
				cardRealPerson: '朱小平',
				service: '星球',
				rechargedMonths: '9月',
				company: '东方',
				startRechargMonths: '2023/5/23',
				deviceState: 0,
				staffName: '宋烟桥',
				staffPhone: '19105936037',
				currentDate: new Date().getTime(),
				minDate: new Date("2022/2/2").getTime(),
				signPeriod: '',





				createTime: '',
				uudateTime: '',
				id: '',
				address: "",
				cardOverdueTime: "",
				corporation: '',
				createCardTime: '',
				createTime: "",
				dandelionId: "",
				deviceId: '',
				deviceName: "",
				id: "",
				installName: '',
				installOverdueTime: "",
				installTime: "",
				iotcardId: "",
				iotcardName: "",
				isAble: 0,
				isCardOverdue: 0,
				isDelete: 0,
				isDeviceOverdue: 0,
				mark: '',
				month: "",
				operator: "",
				signPeriod: "",
				updateTime: ""
			}



		},
		methods: {

			field(e) {

				let id = e.currentTarget.id
				let value = e.detail
				if (id == 'address') {

					this.address = value
				} else if (id == 'deviceName') {

					this.deviceName = value
				} else if (id == 'installName') {

					this.installName = value
				} else if (id == 'iotcardId') {

					this.iotcardId = value
				} else if (id == 'dandelionId') {

					this.dandelionId = value
				} else if (id == 'iotcardName') {

					this.iotcardName = value
				} else if (id == 'operator') {

					this.operator = value
				} else if (id == 'corporation') {

					this.corporation = value
				} else if (id == 'month') {

					this.month = value
				} else if (id == 'signPeriod') {

					this.signPeriod = value
				} else if (id == 'mark') {

					this.mark = value
				}

			},
			onConfirm1(date) {

				var date1 = new Date(date.detail);
				console.log(date1)

				if (this.timePickerType == 1) {
					this.installTime = this.formatDate(date1)

				} else if (this.timePickerType == 0) {
					this.installOverdueTime = this.formatDate(date1)
				} else if (this.timePickerType == 2) {
					console.log(date1)
					this.installTime = this.formatDate(date1)
				} else if (this.timePickerType == 3) {
					this.cardOverdueTime = this.formatDate(date1)
				}
				this.show1 = false;
			},
			InstallTime() {
				if (!this.checked) {

					return 0
				}
				this.timePickerType = 1
				this.show1 = true
			},
			overdueTime() {
				if (!this.checked) {

					return 0
				}
				this.show1 = true
				this.timePickerType = 0
			},

			StartRechargMonths() {

				if (!this.checked) {

					return 0
				}
				this.timePickerType = 2
				this.show1 = true


			},
			RechargeExpirationTime() {
				if (!this.checked) {

					return 0
				}
				this.timePickerType = 3
				this.show1 = true
			},



			onCheckdCard(e) {

				this.checkedCard = e.detail

			},
			onCheckdDevice(e) {

				this.checkedDevice = e.detail

			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`;
				}
				if (type === 'month') {
					return `${value}月`;
				}
				if (type === 'date') {
					return `${value}r`;
				}
				return value;
			},
			onClose() {
				this.show = false
				this.show1 = false
			},
			onLoad(option) {

				let {
					id
				} = option

				this.id = id

				this.getDeviceDetail(id)



			},

			getDeviceDetail(id) {

			
				uni.request({
					url: 'https://song.lazion.cn/api/deviceInfo/get',
					method: 'get',
					data: {
						id: id,userId:parseInt(app.globalData.userId)
					},
					success: res => {
					
						let data = res.data.data

						this.address = data.address
						this.cardOverdueTime = data.cardOverdueTime
						this.corporation = data.corporation
						this.createCardTime = data.createCardTime
						this.createTime = data.createTime
						this.dandelionId = data.dandelionId
						this.deviceId = data.deviceId
						this.deviceName = data.deviceName
						this.id = data.id
						this.installName = data.installName
						this.installOverdueTime = data.installOverdueTime
						this.installTime = data.installTime
						this.iotcardId = data.iotcardId
						this.iotcardName = data.iotcardName
						this.isAble = data.isAble

						if (data.isCardNotify) {
							this.checkedCard = false
						} else {
							this.checkedCard = true
						}
						if (data.isDeviceNotify) {
							this.checkedDevice = false
						} else {
							this.checkedDevice = true
						}

						this.isCardOverdue = data.isCardOverdue
						this.isDelete = data.isDelete
						this.isDeviceOverdue = data.isDeviceOverdue
						this.mark = data.mark
						this.month = data.month
						this.operator = data.operator
						this.signPeriod = data.signPeriod
						this.createTime = data.createTime
						this.updateTime = data.updateTime
						// this.updateTimeupdateTime: 


						this.recordList = res.data.data

						uni.showToast({
							title: '查询成功',
							icon: 'none', //如果要纯文本，不要icon，将值设为'none'
							duration: 2000 //持续时间为 2秒
						})
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
			formatDate(date) {

				return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			},
			onConfirm(date) {
				// date.detail.getFullYear()
				var date1 = new Date(date.detail);
				this.show = false;

				if (this.timePickerType) {
					this.deviceExpirationTime = this.formatDate(date1)
				} else {
					this.rechargeExpirationTime = this.formatDate(date1)
				}


			},

			editDeviceMsg() {


				Dialog.confirm({
						title: '确认修改设备信息吗',
						message: '请注意信息是否填写正确',
					})
					.then(() => {

						let data = {
                            userId:parseInt(app.globalData.userId),
							address: this.address,
							cardOverdueTime: this.cardOverdueTime,
							corporation: this.corporation,
							createCardTime: this.createCardTime,
							createTime: this.createTime,
							dandelionId: this.dandelionId,
							deviceId: this.deviceId,
							deviceName: this.deviceName,
							id: this.id,
							installName: this.installName,
							installOverdueTime: this.installOverdueTime,
							installTime: this.installTime,
							iotcardId: this.iotcardId,
							iotcardName: this.iotcardName,
							isAble: 0,
							isCardOverdue: this.isCardOverdue,
							isDelete: this.isDelete,
							isDeviceOverdue: this.isDeviceOverdue,
							mark: this.mark,
							month: this.month,
							operator: this.operator,
							signPeriod: this.signPeriod,

						}

						if (this.checked) {
							data.isAble = 0
						} else {
							data.isAble = 1
						}
						if (this.checkedCard) {
							data.isCardNotify = 0
						} else {
							data.isCardNotify = 1
						}
						if (this.checkedDevice) {
							data.isDeviceNotify = 0
						} else {
							data.isDeviceNotify = 1
						}
					

						data.cardOverdueTime = data.cardOverdueTime.replaceAll('/', '-')
					
						data.installOverdueTime = data.installOverdueTime.replaceAll('/', '-')
					

						data.installTime = data.installTime.replaceAll('/', '-')
					
						uni.request({
							url: 'https://song.lazion.cn/api/deviceInfo/revise',
							method: 'post',
							data: data,
							headers: { //放body要时，Content-Tpye为application/json，默认值也是这个
								"Content-Type": "application/json",
								charset: "utf-8"
							},
							success: res => {
								console.log(res.data,1111)
								if(res.data.data==true){
							uni.showToast({
								title: '修改成功',
								icon: 'none', //如果要纯文本，不要icon，将值设为'none'
								duration: 2000 //持续时间为 2秒
							})
								
								
								}
								else  if(res.data.data==null){
									
									uni.showToast({
										title: res.data.message,
										icon: 'none', //如果要纯文本，不要icon，将值设为'none'
										duration: 2000 //持续时间为 2秒
									})
							}
							},
							fail() {
								uni.showToast({
									title: '网络错误',
									icon: 'none', //如果要纯文本，不要icon，将值设为'none'
									duration: 2000 //持续时间为 2秒
								})
							}
						})


						// on confirm
					})
					.catch(() => {
						// on cancel
					});
			},
			deleteDeviceMsg() {
				Dialog.confirm({
						title: '确认删除设备信息吗',
						message: '此操作不可逆转',
					}).then(() => {


						let data = {
							id: this.id,userId:parseInt(app.globalData.userId)
						}
						console.log(data)
						uni.request({
							url: 'https://song.lazion.cn/api/deviceInfo/delete',
							method: 'get',
							data: data,
							headers: { //放body要时，Content-Tpye为application/json，默认值也是这个
								"Content-Type": "application/json",
								charset: "utf-8"
							},
							success: res => {
								console.log(res.data);
								uni.showToast({
									title: res.data.message,
									icon: 'none', //如果要纯文本，不要icon，将值设为'none'
									duration: 2000 //持续时间为 2秒
								})
								uni.navigateBack()

							},
							fail() {
								uni.showToast({
									title: '网络错误',
									icon: 'none', //如果要纯文本，不要icon，将值设为'none'
									duration: 2000 //持续时间为 2秒
								})
							}
						})


						// on confirm
					})
					.catch(() => {
						// on cancel
					});

			}

		}

	}
</script>

<style>
	.danger {
		color: #ff0000 !important;
	}

	.warning {
		color: #ffaa00 !important;
	}

	.primary {
		color: #55ff00 !important;
	}

	.text {
		padding: 5px;
		color: #7f7f7f;
		display: flex;
		font-size: 14px;
		margin: 20px;
		margin-top: 5px;
		margin-bottom: 5px;
		justify-content: space-between;
	}

	.timePicker {}

	.confirmButton {

		width: ;


	}
</style>
