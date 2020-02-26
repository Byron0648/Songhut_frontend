<template>
	<view>
		<view class="form-wrapper">
			<view class="my-text" style="width: 240upx;">
				选择转换乐器:
			</view>
			<view class="input-wrap">
				<picker @change="bindPickerChange" :value="index" :range="instrumentList" range-key="name">
					<view class="my-input" style="width: 310upx;margin-left: 20upx;">{{instrumentList[index].name}}</view>
				</picker>
			</view>
		</view>
		<view class="form-wrapper">
			<button class="cu-btn round form-btn bg-button" @click="beginTransform">开始转换</button>
		</view>
		<view class="info" v-if="hasTransform">
			<view style="margin-left: 25upx;">
				<view class="audio-wrapper" style="width: 700upx;">
					<view style="margin-left: 15upx;margin-top: 10upx;">
						<view @tap="play()" v-if="playState===1">
							<image class="iconbtn play" src="../../static/play.png"></image>
						</view>
						<view @tap="pause()" v-else>
							<image class="iconbtn play" src="../../static/pause.png"></image>
						</view>
					</view>
					<slider class="audio-slider" :value="currentTime" min="0" :max="duration" @change="sliderChange" block-size="15" />
					<view class="audio-number">{{nowtime}} / {{alltime}}</view>
				</view>
				<view class="form-wrapper">
					<view class="my-text" style="width: 160upx;">
						素材命名:
					</view>
					<view class="input-wrap">
						<input class="my-input" style="width: 340upx;margin-left: 20upx;" type="text"></input>
					</view>
				</view>
				<view class="form-wrapper">
					<view class="my-text" style="width: 160upx;">
						素材描述:
					</view>
					<view class="form-textarea">
						<textarea fixed="true" style="width: 340upx;padding: 15upx 25upx;" />
						</view>
			</view>
			
			<view class="form-wrapper">
				<view class="my-text" style="width: 160upx;">
					保存位置:
				</view>
				<view>
					<input class="my-input" style="width: 340upx;margin-left: 20upx;" type="text"></input>
				</view>
			</view>
			</view>
			<view class="form-wrapper">
				<button class="cu-btn round form-btn bg-button" @click="navToChooseTransform">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				instrumentList:getApp().globalData.instrumentList,
				index:0,
				hasTransform:false,
				nowtime:"00:00",
				alltime:"00:00",
				
			}
		},
		onLoad(options) {
			console.log(options)
			console.log(this.instrumentList)
		},
		methods: {
			//TODO
			bindPickerChange(e){
			    console.log('picker发送选择改变，携带值为：' + e.target.value)
			    this.index = e.target.value
			},
			beginTransform(){
				this.hasTransform = true
			},
			
		}
	}
</script>

<style>
	.form-wrapper{
		display: flex;
		margin-top: 60upx;
		margin-left: 90upx;
		width: 570upx;
	}
	
	.form-btn{
		width: 200upx;
		font-size: 34upx;
		margin: 0 auto;
	}
	
	.my-text{
		font-size: 34upx;
	}
	
	.my-input{
		height: 70upx;
		padding: 0upx 25upx 0upx 25upx;
		text-align: center;
		line-height: 70upx;
		font-size: 32upx;
		background: #FFF;
		flex: 1;
		border-radius: 15upx;
	}
	
	.info {
		margin-top: 100upx;
	}
	
	.iconbtn {
		margin-top: 8upx;
		width: 50upx;
		height: 50upx;
	}
	
	.audio-wrapper {
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		border-radius: 15upx;
	}
	
	.audio-number {
		font-size: 24upx;
		line-height: 1;
		color: #000000;
		margin-right: 15rpx;
	}
	
	.audio-slider {
		flex: 1;
		margin: 0 20upx;
	}
	
	.form-textarea{
		margin-left: 20upx;
		background-color: #FFFFFF;
		width: 340upx;
		border-radius: 20upx;
	}
	
	
</style>
