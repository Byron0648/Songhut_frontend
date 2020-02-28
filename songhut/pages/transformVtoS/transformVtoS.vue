<template>
	<view class="info">
		<view class="audio-wrapper">
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
			<view>
				素材命名:
			</view>
			<view>
				<input class="uni-input" style="width: 400upx;margin-left: 40upx;" type="text"></input>
			</view>
		</view>
		<view class="form-wrapper">
			<view>
				素材描述:
			</view>
			<view class="form-textarea">
				<textarea fixed="true" style="width: 400upx;padding: 15upx 25upx;" />
				</view>
		</view>
		
		<view class="form-wrapper">
			<view>
				保存位置:
			</view>
			<view>
				<input class="uni-input" style="width: 400upx;margin-left: 40upx;" type="text"></input>
			</view>
		</view>
		
		<view class="form-wrapper">
			<button class="cu-btn round form-btn bg-button" @click="uploadMelody">保存</button>
		</view>
	</view>
</template>

<script>
	var host = getApp().globalData.host;
	let bgAudioMannager = '';
	export default {
		data() {
			return {
				playWay: 1,
				playState: 1,
				nowIndex: 0,
				duration: 0,
				currentTime: 0,
				songList: [{
						"name": "走歌人",
						"author": "暗杠",
						//"src": "http://music.163.com/song/media/outer/url?id=418990139.mp3",
						"src": "https://116.62.170.221:8080/download/result1.mid",
						"img": "http://p2.music.126.net/_UOTSqLC8qHRivyuUBC9OQ==/18200215974944920.jpg"
					},
					{
						"name": "走歌人18",
						"author": "暗杠",
						"src": "http://music.163.com/song/media/outer/url?id=866018207.mp3",
						"img": "http://p2.music.126.net/D9_qDt18yiHxVPr6CRGgLA==/109951163406952902.jpg"

					},
					{
						"name": "走歌人原版无损伴奏",
						"author": "暗杠",
						"src": "http://music.163.com/song/media/outer/url?id=430685718.mp3",
						"img": "http://p2.music.126.net/_UOTSqLC8qHRivyuUBC9OQ==/18200215974944920.jpg"
					}
				]
			}
		},
		onLoad(options) {
			
			bgAudioMannager = uni.getBackgroundAudioManager();
			this.filePath = options.savedFilePath
			console.log(this.filePath)
		},
		computed: {
			'nowtime': function() {
				var that = this
				var s = that.currentTime
				//计算分钟
				//算法：将秒数除以60，然后下舍入，既得到分钟数
				var h;
				h = Math.floor(s / 60);
				//计算秒
				//算法：取得秒%60的余数，既得到秒数
				s = s % 60;
				//将变量转换为字符串
				h += '';
				s += '';
				//如果只有一位数，前面增加一个0
				h = (h.length == 1) ? '0' + h : h;
				s = (s.length == 1) ? '0' + s : s;
				return h + ':' + s;
			},
			'alltime': function() {
				var that = this
				var s = that.duration
				//计算分钟
				//算法：将秒数除以60，然后下舍入，既得到分钟数
				var h;
				h = Math.floor(s / 60);
				//计算秒
				//算法：取得秒%60的余数，既得到秒数
				s = s % 60;
				//将变量转换为字符串
				h += '';
				s += '';
				//如果只有一位数，前面增加一个0
				h = (h.length == 1) ? '0' + h : h;
				s = (s.length == 1) ? '0' + s : s;
				return h + ':' + s;
			}
		},
		methods: {
			sliderChange(e) {
				this.currentTime = e.detail.value
				bgAudioMannager.seek(this.currentTime)
			},
			bgAudioInnit() {
				var that = this
				bgAudioMannager.title = that.songList[that.nowIndex].name;
				bgAudioMannager.singer = that.songList[that.nowIndex].author;
				bgAudioMannager.coverImgUrl = that.songList[that.nowIndex].img;
				bgAudioMannager.src = that.songList[that.nowIndex].src;

				bgAudioMannager.onPlay(() => {
					that.playFunc()
				})
				bgAudioMannager.onPause(() => {
					that.pauseFunc()
				})
				bgAudioMannager.onEnded(() => {
					//that.end()
				})
				bgAudioMannager.onTimeUpdate(() => {
					that.currentTime = Math.floor(bgAudioMannager.currentTime);
					that.duration = Math.floor(bgAudioMannager.duration);
				})
				bgAudioMannager.onPrev(function() {
					that.last()
				})
				bgAudioMannager.onNext(function() {
					that.next()
				})

				bgAudioMannager.onError(function() {
					that.error()
				})
				bgAudioMannager.onWaiting(function() {
					that.playState = 0
				})

				bgAudioMannager.onCanplay(function() {
					that.duration = Math.floor(bgAudioMannager.duration)
					console.log("shipingjinrukeyibofangzhuangtai")
				})

			},
			error() {
				this.playState = 0
			},
			play() {
				var that = this
				if (bgAudioMannager.src == undefined) {
					this.bgAudioInnit()
				}
				bgAudioMannager.play()
				console.log(this.alltime)

			},
			pause() {
				var that = this
				bgAudioMannager.pause()
			},
			playFunc() {
				var that = this
				that.playState = 0
			},
			pauseFunc() {
				var that = this
				that.playState = 1
			},
			//以上为待修改内容
			uploadMelody(){
				console.log("开始上传")
				console.log(this.filePath)
				uni.uploadFile({
					url: host + '/file/uploadFileToRepository',
					name:'uploadFile',
					filePath:this.filePath,
					fileType:'audio',
					formData:{
						fileName:"测试",
						fileType:"1",
						introduce:"this is a test",
						repositoryId:"1",
						isPublic:"0"
					},
					success(res){
						console.log(res)
						uni.showModal({
							content:res
						})
						//TODO
					},
					fail(err){
						console.log(err)
					}
				})
			}
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
