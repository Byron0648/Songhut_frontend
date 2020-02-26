<template>
	<view style="width: 750upx;">
		<view class="cu-bar search bg-white" >
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入乐库名称搜索" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(value,index) in library" :key="index" @tap="tabSelect" :data-id="index">
					{{value}}
				</view>
			</view>
		</scroll-view>
		
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item" :class="menuArrow?'arrow':''" v-for="(value,index) in list" :key="index">
				<view class="content">
					<text class="text-grey">{{value}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				library: {
					1: '我创建的',
					2: '已完成的'
				},
				list1:{
					1:'乐库1',
					2:'乐库2',
					3:'乐库3'
				},
				list2:{
					1:'乐库4',
					2:'乐库5',
					3:'乐库6'
				},
				list:{}
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 1){
					this.list = this.list1;
				}else{
					this.list = this.list2;
				}
			}
		}
	}
</script>

<style>
</style>
