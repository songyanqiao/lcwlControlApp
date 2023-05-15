<template>


	<view class="content">

		<view style="width: 100%; position: fixed; top: 0;">
			<van-search @blur="searchList" @change="searchChange" v-model="searchValue" @click="show=true"
				placeholder="请输入项目地址/具体名称" />
			<!-- <view style="margin-top: 10px;" @click="show=true">
		<van-cell title="选择设备地址" is-link value="福州市" />
	</view> -->
			<van-dropdown-menu>
				<van-dropdown-item @closed="getSelectDataList" id="value1" @change="selecValue" :value="value1"
					:options="option1" />
				<van-dropdown-item @closed="getSelectDataList" id="value3" @change="selecValue" :value="value3"
					:options="option3" />
				<van-dropdown-item @closed="getSelectDataList" id="value2" @change="selecValue" :value="value2"
					:options="option2" />

			</van-dropdown-menu>
		</view>
		<view style="width: 100%;height:104px ;">

		</view>

		<!-- <van-button @click="getSelectAll" size="large" type="default">查看全部</van-button>
 -->
		<view class="controlListBox">

			<view v-for="item in recordList" :key="item.id" class="controlList">

				<view @click="controlDetail(item.id)" class="controlBox">
					<view class="text">

						<view class="left">
							设备地址：
						</view>
						<view class="right">
							{{ item.address}}
						</view>
					</view>
					<view class="text">
						<view class="left">
							设备名称：
						</view>
						<view class="right">
							{{ item.deviceName}}
						</view>
					</view>
					<!-- 	<view class="text">

						<view class="left">

							设备ID：
						</view>
						<view class="right">
							232321321313
						</view>
					</view> -->

					<view class="text">

						<view class="left">
							设备安装时间：
						</view>
						<view class="right">
							{{ item.installTime}}
						</view>
					</view>
					<view class="text">

						<view class="left">
							合同到期时间：
						</view>
						<view class="right">
							{{ item.installOverdueTime}}
						</view>
					</view>
					<!-- <view class="text">
					
						<view class="left">
							开卡时间：
						</view>
						<view class="right">
							2023/12/20
						</view>
					</view> -->
					<view class="text">

						<view class="left">
							充值到期时间：
						</view>
						<view class="right">
							{{ item.cardOverdueTime}}
						</view>
					</view>
					<view class="text">

						<view class="left">
							合同是否过期：
						</view>
						<view
							:class="item.isDeviceOverdue==0?'primary right':item.isDeviceOverdue==1?'warning right':item.isDeviceOverdue==1?'danger right':'danger right'">
							{{ item.isDeviceOverdue==0?'未过期':item.isDeviceOverdue==1?'即将过期':item.isDeviceOverdue==2?'已过期':'异常'}}
						</view>
					</view>
					<view class="text">

						<view class="left">
							充值是否过期：
						</view>
						<view
							:class="item.isCardOverdue==0?'primary right':item.isCardOverdue==1?'warning right':item.isCardOverdue==1?'danger right':'danger right'">
							{{ item.isCardOverdue==0?'未过期':item.isCardOverdue==1?'即将过期':item.isCardOverdue==2?'已过期':'异常'}}
						</view>
					</view>
				</view>

			</view>
		</view>





		<view style="width: 100%;height: 100px;">

		</view>

		<van-popup custom-style="height: 60%;" position="bottom" :show="show" @close="onClose">
			<view class="picker">
				<van-picker @confirm="onConfirm" @cancel="onCancel" show-toolbar :columns="columns"
					@change="onChange" />
			</view>

		</van-popup>



		<van-tabbar @change="onChangeTabbar" :active="active ">
			<van-tabbar-item name="list" icon="home-o">设备列表</van-tabbar-item>
			<van-tabbar-item name="userCenter" icon="user-o">用户中心</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	import {
		baseUrl
	} from '../../config/config.js'
	const citys = {
		'aaa': ['杭州', '宁波', ],
		'sss': ['福州', '厦门'],
		'1aaa': ['杭州', '宁波', ],
		's1ss': ['福州', '厦门'],
	};
	const project = [
		[
			[
				'1', '1', '1'
			],
			[
				'11', '11', '11'
			],
			['111', '111', '111']

		],
		[
			['2', '2', '2'],
			['22', '22', '22'],
			['222', '222', '222']
		]
	]
	export default {
		data() {
			return {
				value1: '',
				value2: '',
				value3: '',
				option1: [{
						text: '全部',
						value: ''
					},
					{
						text: '充值未过期',
						value: 0
					},
					{
						text: '充值即将过期',
						value: 1
					},
					{
						text: '充值已过期',
						value: 2
					},
				],

				option2: [{
						text: '全部',
						value: ''
					},
					{
						text: '已启用',
						value: 0
					}, {
						text: '不启用',
						value: 1
					},

				],
				option3: [{
						text: '全部',
						value: ''
					},
					{
						text: '合同未过期',
						value: 0
					},
					{
						text: '合同即将过期',
						value: 1
					},
					{
						text: '合同已过期',
						value: 2
					},
				],





				searchValue: '',
				columns: [{
						values: Object.keys(citys),
						className: 'column1',
					},
					{
						values: citys['aaa'],
						className: 'column2',
						defaultIndex: 0,
					}, {
						values: project[0][0],
						className: 'column3',
						defaultIndex: 0,
					},
				],
				show: false,
				fieldValue: '',
				cascaderValue: '',
				active: 0,
				code: '',
				index: 0,
				indexArray: [],
				fieldNames: {
					text: 'name',
					value: 'code',
					children: 'items',
				},

				recordList: [],


				listData: []
			}
		},
		onShow() {

			this.getRecordList('')
			this.getSelectDataList()

		},
		methods: {

			filter(condition, data) {
				return data.filter(item => {
					return Object.keys(condition).every(key => {
						return String(item[key]).toLowerCase().includes(
							String(condition[key]).trim().toLowerCase())
					})
				})
			},
			getSelectAll() {
				this.value1 = 0
				this.value2 = 0
				this.value3 = 0
				this.recordList = this.listData
			},
			onCloseAction(e) {
				console.log(e.detail);
			},
			selecValue(e) {
				console.log(e)
				if (e.currentTarget.id == "value1") {
					this.value1 = e.detail
				} else if (e.currentTarget.id == "value2") {
					this.value2 = e.detail
				} else if (e.currentTarget.id == "value3") {
					this.value3 = e.detail
				}

			},
			getSelectDataList(e) {
				var condition = {
					isCardOverdue: this.value1,
					isAble: this.value2,
					isDeviceOverdue: this.value3
				};
				var selectDataList = this.filter(condition, this.listData);
				this.recordList = selectDataList
			},
			searchChange(e) {

				this.searchValue = e.detail
			},
			searchList() {
				this.getRecordList(this.searchValue)
			},
			getRecordList(searchValue) {

				// let sign = ''
				// let appId = "2b4a6ea298774c0c99ff012b3b6594e3"
				// let appSecret = "1eb4bea8be784447aa1eadab128fdc67"
				// let timeStamp = 1603420956946
				// uni.request({
				// 	url: 'https://yzt.yztzn.com/yzt-openApi/video/list',
				// 	method: 'post',
				// 	data: {
				// 		sign: '',
				// 		appId: "2b4a6ea298774c0c99ff012b3b6594e3",
				// 		appSecret: "1eb4bea8be784447aa1eadab128fdc67",
				// 		timeStamp: 1603420956946
				// 	},
				// 	success(res) {
						
				// 		console.log(res)
				// 	}

				// })














				uni.request({
					url: 'https://song.lazion.cn/api/deviceInfo/query',
					method: 'get',
					data: {
						searchValue: searchValue
					},
					success: res => {
						console.log(res.data.data.reverse());
						this.recordList = res.data.data.reverse()
						this.listData = res.data.data.reverse()
						uni.showToast({
							title: res.data.message,
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
			onConfirm() {

				this.show = false

			},
			onClose() {
				this.show = false

			},
			onChange(event) {

				const {
					picker,
					value,
					index
				} = event.detail;
				console.log(picker.getIndexes())
				let indexArray = picker.getIndexes()
				this.indexArray = indexArray
				// var a=	picker.getColumnIndex()
				// 
				if (index == 0) {
					picker.setColumnValues(1, citys[value[0]]);
					picker.setColumnValues(2, project[indexArray[0]][indexArray[1]])
				}

				if (index == 1) {
					picker.setColumnValues(1, citys[value[0]]);
					picker.setColumnValues(2, project[indexArray[0]][indexArray[1]])
				}
			},
			onCancel() {
				this.show = false
			},
			controlDetail(id) {

				uni.navigateTo({
					url: '/pages/controlDetail/controlDetail?id=' + id,
				})
			},

			showPopup() {
				console.log(this.show, )
				this.show = true
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			columnchange(e) {

				console.log(e.detail)
				this.selectArea(e.detail.column, e.detail.value)
			},
			onChangeTabbar(e) {

				if (e.detail == 'userCenter') {
					uni.navigateTo({
						url: "../userCenter/userCenter"
					})
				}

			}

		}
	}
</script>

<style>
	.addButton {

		position: fixed;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		bottom: 50px;
		right: 50px;
	}

	.picker {
		height: 30%;

	}

	.danger {
		color: #ff0000;
	}

	.warning {
		color: #ffaa00;
	}

	.primary {
		color: #55ff00;
	}

	.content {

		background-color: rgb(247, 248, 250);
		width: 100%;
		height: 667px;
	}

	.controlListBox {
		width: 95%;
		display: flex;

		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.controlList {
		width: 95%;
	}

	.controlBox .text {
		padding: 5px;
		color: #7f7f7f;
		display: flex;
		font-size: 14px;
		justify-content: space-between;
	}

	.controlBox .text .left {}

	.controlBox .text .right {}

	.controlBox {
		margin-top: 20px;
		padding: 10px;
		width: 100%;
		box-shadow: 0 4px 8px 0 rgba(229, 229, 229, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.05);
		border-radius: 10px;
		background-color: #fff;

	}

	.pickerBox {
		width: 90%;
		display: flex;
		background-color: #fff;
		padding: 20px;
		box-shadow: 0 4px 8px 0 rgba(229, 229, 229, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.05);
	}

	.pickerBox .title {
		margin-right: 50px;
		color: #7f7f7f;

	}

	.pickerBox .msg {
		width: 50%;
		margin-right: 50px;
		color: #b4b4b4;
		font-size: 13px;

	}

	.pickerBox .image {
		width: 15px;
		height: 15px;

	}
</style>
