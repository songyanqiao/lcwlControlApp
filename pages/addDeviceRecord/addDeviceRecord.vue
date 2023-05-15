<template>

	<view class="content">

		<!-- 	<image style="width: 100%;" mode="aspectFit"
			src="https://img0.baidu.com/it/u=86488813,3798298985&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=354" alt="">
 -->
		<van-notice-bar color="#ff0000" background="#e0feff" left-icon="info-o">
设备地址最长为36个字，设备名称：最长为24个字, 多余的字会丢失,如需填写更多请在备注中补充
		</van-notice-bar>
		<van-cell-group>
			<!-- <van-field :value="deviceName" :disabled="!checked" label="监控名称:" placeholder="请输入监控名称"
					input-align="right" /> -->
			<van-field :disabled="!checked" id='address' @change="field" :value="address" label="设备地址"
				input-align="right" />
		<!-- 	<van-cell :disabled="!checked" id='isCardOverdue'
				:value="isCardOverdue=='0'?'未过期':isCardOverdue=='1'?'即将过期':isCardOverdue=='2'?'已过期':'异常'" title="是否过期"
				:value-class="isCardOverdue=='0'?'primary':isCardOverdue=='1'?'warning':isCardOverdue=='2'?'danger':'danger'" />
 -->
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

		<!-- 	<van-cell title="是否启用">
				<van-switch size="20px" :checked="isAble " @change="onCheckd" />
			</van-cell> -->
			<van-field :disabled="!checked" id='mark' :value="mark" @change="field" label="留言备注:" type="textarea"
				placeholder="请输入留言" autosize input-align="right" :border="false" />
		</van-cell-group>
		<view @click="editDeviceMsg" class="confirmButton">
			<van-button type="warning" size="large">确认添加</van-button>
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

	export default {
		data() {
			return {
				show1: false,
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



			onCheckd(e) {
				this.getDeviceDetail(this.id)

				this.checked = e.detail

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

				console.log(this)
				if (!this.checked) {
					return 0
				}
				Dialog.confirm({
						title: '确认添加吗',
						message: '请注意信息是否填写正确',
					})
					.then(() => {
						let data = {

							address: this.address,
							cardOverdueTime: this.cardOverdueTime,
							corporation: this.corporation,
							createCardTime: this.createCardTime,
							createTime: this.createTime,
							dandelionId: this.dandelionId,
							deviceId: this.deviceId,
							deviceName: this.deviceName,
							// id: this.id,
							installName: this.installName,
							installOverdueTime: this.installOverdueTime,
							installTime: this.installTime,
							iotcardId: this.iotcardId,
							iotcardName: this.iotcardName,
							isAble: this.isAble,
							isCardOverdue: this.isCardOverdue,
							isDelete: this.isDelete,
							isDeviceOverdue: this.isDeviceOverdue,
							mark: this.mark,
							month: this.month,
							operator: this.operator,
							signPeriod: this.signPeriod,
							

						}


if(data.cardOverdueTime==''||data.installOverdueTime==''||data.installTime==''){
	
	uni.showToast({
		title: '请填写时间',
		icon: 'none', //如果要纯文本，不要icon，将值设为'none'
		duration: 2000 //持续时间为 2秒
	})
	
	return 0
}

data.cardOverdueTime=data.cardOverdueTime.replaceAll('/','-')
console.log(data)

data.installOverdueTime=data.installOverdueTime.replaceAll('/','-')

data.installTime=data.installTime.replaceAll('/','-')
console.log(1111)
						uni.request({
							url: 'https://song.lazion.cn/api/deviceInfo/add|revise',
							method: 'post',
							data: data,
							headers: { //放body要时，Content-Tpye为application/json，默认值也是这个
								"Content-Type": "application/json",
								charset: "utf-8"
							},
						success: res => {
							console.log(res.data,1111)
							if(res.data.data.length==0){
						uni.showToast({
							title: '修改成功',
							icon: 'none', //如果要纯文本，不要icon，将值设为'none'
							duration: 2000 //持续时间为 2秒
						})
							
							// uni.navigateBack()
							}
						else {
							let IotCard	=''													
							 let Dandelion=''																																																					
						for(let i=0;i<res.data.data.length;i++){							
							if(res.data.data[i].sort=="IotCardId"){
								 IotCard='物联网卡 地址:'+res.data.data[i].address
							}
							if(res.data.data[i].sort=="DandelionId"){
								 Dandelion='蒲公英码 地址:'+res.data.data[i].address
							}
						}															
							uni.showModal({
								title:'卡号冲突',
								content: IotCard+'    '+Dandelion,
								showCancel: true, //如果要纯文本，不要icon，将值设为'none'
								duration: 2000 //持续时间为 2秒
							})
						}
							
						
						}
							,fail() {
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
		color: #ffaa00;
	}

	.primary {
		color: #55ff00;
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

	.timePicker {

		height: ;
	}
</style>
