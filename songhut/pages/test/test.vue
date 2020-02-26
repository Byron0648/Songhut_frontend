<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="button-sp-area">
                <button type="primary" plain="true" @tap="navToVoice">录音</button>
                <button type="primary" plain="true" @tap="navToTransformVtoS">试听</button>
				<button type="primary" plain="true" @tap="navToChooseTransform">选择转换</button>
                <button type="default" plain="true" @tap="navToNewMusicLibrary">新建乐库</button>
				<button type="default" plain="true" @tap="navToNewLyrics">新建歌词</button>
				<button type="default" plain="true" @tap="navToPlaySameTime">同时播放</button>
				<button type="default" plain="true" @tap="navToShowLibrary">我的乐库</button>
				<button type="default" plain="true" @tap="navToDetaillnfor">共享库</button>
				
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                title: 'button',
                loading: false
            }
        },
        onLoad() {
            // this._timer = null;
        },
        onShow() {
            // this.clearTimer();
            // this._timer = setTimeout(() => {
            //     this.loading = true;
            // }, 300)
        },
        onUnload() {
            // this.clearTimer();
            // this.loading = false;
        },
        methods: {
            openTypeError(error) {
                console.error('open-type error:', error);
            },
            clearTimer() {
                if (this._timer != null) {
                    clearTimeout(this._timer);
                }
            },
			navToVoice(){
				uni.navigateTo({
					url: '../recordAccompany/recordAccompany'
				})
			},
				
			navToTransformVtoS(){
				uni.navigateTo({
					url:'../transformVtoS/transformVtoS'
				})
			},
			
			navToChooseTransform(){
				uni.navigateTo({
					url:"../chooseTransform/chooseTransform"
				})
			},
			
			navToNewMusicLibrary(){
				uni.navigateTo({
					url:"../newMusicLibrary/newMusicLibrary"
				})
			},
			
			navToNewLyrics(){
				uni.navigateTo({
					url:"../newLyrics/newLyrics"
				})
			},
			
			navToPlaySameTime(){
				uni.navigateTo({
					url:"../playAtSameTime/playAtSameTime"
				})
			},
			
			navToShowLibrary(){
				uni.navigateTo({
					url:"../showLibrary/showLibrary"
				})
			},
			
			navToDetaillnfor(){
				uni.navigateTo({
					url:"../detailInfor/detailInfor"
				})
			},
        }
    }
</script>

<style>
    button {
        margin-top: 30upx;
        margin-bottom: 30upx;
    }

    .button-sp-area {
        margin: 0 auto;
    }
	
	.uni-padding-wrap{
		width:690upx;
		margin:0 30upx;
	}
</style>
