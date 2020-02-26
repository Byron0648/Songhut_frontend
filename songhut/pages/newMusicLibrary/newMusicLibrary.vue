<template>
	<view>
		<view>
			<view class="margin-wrap">
				<view class="title-text">新建库名</view>
				<image class="title-icon" src="../../static/hut_logo.png"></image>
			</view>
			
			<view class="input-wrap">
				<input class="my-input" placeholder="输入乐库名" type="text" @input="inputChange"/>
			</view>
			
			<view class="margin-wrap">
				<view class="title-text">乐库简介</view>
			</view>
			
			<view class="textarea-wrap">
				<textarea class="my-textarea" placeholder="描述乐库信息" @input="dinputChange"/>
			</view>
			
			<view class="margin-wrap" style="margin-left: 460upx;">
				<text class="my-switch-text">隐私设置</text>
				<switch class='red' @change="SwitchA" :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
			</view>
			
			<view class="button-margin-wrap">
				<button class="bg-gradual-button cicle" @tap="newLibrary">创建</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switchA:false,
				lname:null,
				ldescription:null,
			}
		},
		methods: {
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			inputChange(e){
				this.lname = e.detail.value
			},
			dinputChange(e){
				this.ldescription = e.detail.value
			},
			newLibrary(){
				var that = this
				if(!this.lname||!this.ldescription){
					uni.showModal({
						title:"提示",
						content:"请完善乐库的信息",
						showCancel:false
					})
				}else{
					//后台接口还未完成
					// uni.request({
					// 	url:,
					// 	data:JSON.stringify({
					// 		lname:this.lname,
					// 		ldescription:this.ldescription
					// 	}),
					// 	success(e){
					// 		console.log(e)
					// 		uni.showModal({
					// 			content:"已新建乐库--"+ that.lname,
					// 			showCancel:true
					// 			success(res) {
					// 				if(res.confirm){
					// 					uni.navigateTo({
					// 						url://TODO
					// 					})
					// 				}
					// 			}
					// 		})
					// 	}
					// })
				}
			}
		}
	}
</script>

<style>
	.margin-wrap{
		display: flex;
		margin-top: 50upx;
		margin-left: 30upx;
		width: 690upx;
	}
	
	.title-text{
		font-size: 36upx;
		width: 145upx;
		color: grey;
	}
	
	.title-icon{
		width: 60upx;
		height: 50upx;
	}
	
	.my-input{
		height: 70upx;
		padding: 15upx 25upx;
		line-height: 70upx;
		font-size: 32upx;
		background: #FFF;
		flex: 1;
		border-radius: 20upx;
	}
	
	.input-wrap{
		margin-left: 30upx;
		margin-top: 12upx;
		width: 690upx;
	}
	
	.textarea-wrap{
		margin-left: 30upx;
		margin-top: 12upx;
		width: 690upx;
	}
	
	.my-textarea{
		width: 690upx;
		background:#FFF;
		padding:15upx 25upx;
		line-height: 1.6;
		font-size: 32upx;
		height:300upx;
		border-radius: 20upx;
	}
	
	.my-switch-text{
		font-size: 34upx;
		color: grey;
		height: 40upx;
		width: 150upx;
	}
	
	.button-margin-wrap{
		display: flex;
		margin-top: 70upx;
		margin-left: 30upx;
		width: 690upx;
	}
	
	.bg-gradual-button {
		width: 690upx;
		height: 100upx;
		border-radius: 50upx;
		border-style: none;
		background-image: linear-gradient(45deg, #56e3cf, #00aaff);
		color: #ffffff;
		font-size: 40upx;
		text-align: center;
	}
	
	switch.red[checked] .wx-switch-input.wx-switch-input-checked,
	switch.red.checked .uni-switch-input.uni-switch-input-checked{
		background-color: #e54d42 !important;
		border-color: #e54d42 !important;
		color: #ffffff !important;
	}
	
</style>
