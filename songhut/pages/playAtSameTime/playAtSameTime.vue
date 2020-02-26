<template>
	<view>
		<button @click="play">播放</button>
		<view>{{nowtime}}</view>
		<view>{{nowtime1}}</view>
		<button @click="stop">暂停</button>
	</view>
</template>

<script>
	let innerAudioContext = ''
	let innerAudioContext1 = ''
	
	export default {
		data() {
			return {
				nowtime:0,
				nowtime1:0
			}
		},
		onLoad() {
			
		},
		methods: {
			format(num){
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(
					Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			audioInit(){
				var that = this
				innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				innerAudioContext.onTimeUpdate(function(){
					that.nowtime = that.format(innerAudioContext.currentTime);
				})
				innerAudioContext.onCanplay(function(){
					that.nowtime = that.format(Math.floor(innerAudioContext.currentTime))
				})
				
				innerAudioContext1 = uni.createInnerAudioContext();
				innerAudioContext1.src = 'http://music.163.com/song/media/outer/url?id=866018207.mp3';
				innerAudioContext1.onPlay(() => {
				  console.log('开始播放');
				});
				innerAudioContext1.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				innerAudioContext1.onTimeUpdate(function(){
					that.nowtime1 = that.format(Math.floor(innerAudioContext1.currentTime))
				})
				innerAudioContext1.onCanplay(function(){
					that.nowtime1 = that.format(Math.floor(innerAudioContext1.currentTime))
				})
			},
			play(){
				if(!innerAudioContext.src||!innerAudioContext1.src){
					this.audioInit()
				}
				innerAudioContext.play()
				innerAudioContext1.play()
			},
			stop(){
				innerAudioContext.stop()
				innerAudioContext1.stop()
			},
			
		}

	}
</script>

<style>
	.info {
		margin: 30upx;
		border-radius: 30rpx;
		width: 100%;
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
		border-radius: 15rpx;
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
	
	.form-wrapper{
		display: flex;
		align-items: center;
		margin-top: 100upx;
		margin-left: 50upx;
		margin-right: 50upx;
	}
	
	.form-textarea{
		margin-left: 40upx;
		background-color: #FFFFFF;
		width: 400upx;
	}
	
	.form-btn{
		align-items: center;
		width: 200upx;
		font-size: 34upx;
		margin: 0 auto;
	}
</style>
