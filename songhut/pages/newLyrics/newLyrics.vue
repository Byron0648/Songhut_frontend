<template>
	<view>
		<view class="button-wrap">
			<view class="submit-text" @click="onSubmit">完成</view>
			<view class="iconfont icon-baocun icon-text" @click="save"></view>
			<view class="iconfont icon-undo icon-text" @tap="undo" style="margin-left: 420upx;"></view>
			<view class="iconfont icon-redo icon-text" @tap="redo"></view>
		</view>
		<view class="input-wrap">
			<input class="my-input" placeholder="标题" @input="titleChange"/>
		</view>
		<view class="container">
			<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady" @input="lyricChange"></editor>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				lyrics:"",
				placeholder:"输入歌词"
			}
		},
		methods: {
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context;
				}).exec();
			},
			undo() {
				this.editorCtx.undo();
			},
			redo() {
				this.editorCtx.redo();
			},
			titleChange(e){
				this.title = e.detail.value
			},
			lyricChange(e){
				this.lyrics = e.detail.value
			},
			onSubmit(){
				var that = this
				if(!this.title||!this.lyrics){
					uni.showModal({
						title:"提示",
						content:"请完善歌词的信息",
						showCancel:false
					})
				}else{
					//TODO后台接口还未完成
					// uni.request({
					// 	url:,
					// 	data:JSON.stringify({
					//		id:this.id,
					// 		title:this.title,
					// 		content:this.lyrics
					// 	}),
					// 	success(e){
					// 		console.log(e)
					// 		uni.showModal({
					// 			content:"已保存",
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
	@import "./editor-icon.css";
	
	.container {
		margin-top: 0upx;
		left: 0;
		width: 750upx;
		background-color: #FFFFFF;
	}
	
	.ql-container {
		box-sizing: border-box;
		width: 750upx;
		height: 100%;
		font-size: 34upx;
		line-height: 1.5;
		overflow: auto;
		padding: 30upx 20upx 30upx 20upx;
	}
	
	.button-wrap{
		display: inline-flex;
		width: 750upx;
		background-color: #f6f6f7;
	}
	
	.submit-text{
		font-size: 40upx;
		color: #1CBBB4;
		width: 120upx;
		text-align: center;
		padding: 10upx 20upx 10upx 20upx;
	}
	
	.icon-text{
		width: 70upx;
		padding: 0upx 10upx 0upx 10upx;
	}
	
	.my-input{
		height: 70upx;
		padding: 15upx 25upx;
		line-height: 70upx;
		font-size: 32upx;
		background: #FFF;
		flex: 1;
	}
	
	.input-wrap{
		border-style: solid;
		border-color: #D3D3D3;
		width: 750upx;
	}
	
</style>
