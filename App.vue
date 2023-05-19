<script>
	export default {
		globalData: {
		        userId:''
			},
		onLaunch: function() {
			console.log('App Launch')
			
			let a =new Uint8Array(6)
			console.log(a)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
