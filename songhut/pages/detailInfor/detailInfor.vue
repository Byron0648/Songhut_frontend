<template>
	<view style="width: 750upx;">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(value,index) in details" :key="index" @tap="tabSelect" :data-id="index">
					{{value}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				details:{
					1:'歌词',
					2:'旋律',
					3:'伴奏',
					4:'演唱'
				}
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 6
			}
		}
	}
</script>

<style>

</style>
