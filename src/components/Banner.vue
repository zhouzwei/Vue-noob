<template>
<section class="">
	<!-- 轮播图片 -->
	<section class="banner">
		<section 
			class="banner_page"
			v-for="(bannerList,index) in bannerLists"
			:key="index"
			v-show="index === currentIndex1"
		>
			<img :src="bannerList.bannerListImg" alt="" />
		</section>
	</section>
	<!-- 轮播点 -->
	<section class="banner_dot">
		<span
			:class="{currentDot:currentIndex1 === index}"
			v-for="(dot,index) in dots"
			:key="index"
			@click="dotClick(index,dot)"
		></span>
	</section>
	<!-- 左右箭头按钮 -->
	<section>
		<section class="row_btn row_lt" @click="rowLtClick">&lt;</section>
		<section class="row_btn row_rt" @click="rowRtClick">&gt;</section>
	</section>
</section>
</template>

<script>
export default{
	name: 'Banner',
	data(){
		return{
			times:3500,
			currentIndex1:0,
			bannerLists:[ // banner 轮播图  开始
				{bannerListImg:require('../assets/images/01.jpg')},
				{bannerListImg:require('../assets/images/02.jpg')},
				{bannerListImg:require('../assets/images/03.jpg')}
			], // banner 轮播图  结束1
			dots:[
				{},
				{},
				{}
			],
		}
	},
	methods:{
		// 自动轮播
		autoplay(){			
			setInterval(()=>{
				if(this.currentIndex1 > this.dots.length-2){
					this.currentIndex1 = -1
				}
				this.currentIndex1++
			},this.times)
		},
		// 轮播点 事件
		dotClick(index,dot){
			//alert(1)
			this.currentIndex1 = index;
		},
		// 左箭头 事件
		rowLtClick(){
			if(this.currentIndex1 < 1){
				this.currentIndex1 = this.dots.length
			}
			this.currentIndex1--
			console.log(this.currentIndex1)
		},
		// 右箭头 事件
		rowRtClick(){
			if(this.currentIndex1 > this.dots.length-2){
				this.currentIndex1 = -1
			}
			this.currentIndex1++
			console.log(this.currentIndex1)
		}
	},
	mounted(){     //   挂载结束
    	this.autoplay();
  	}
}
</script>

<style scoped="scoped">
.banner{
	width: 100%;
	height: 500px;
	position: relative;
}
.banner_page{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
.banner_page:nth-of-type(1){
	z-index: 2;
	background:blue;
}
.banner_page:nth-of-type(2){
	background:greenyellow;
}
.banner_page:nth-of-type(3){
	background:goldenrod;
}
.banner_page img{
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
}
/* banner 轮播点 */
.banner_dot{
	width: 100px;
	height: 10px;
	position: absolute;
	left: 50%;
	margin-left: -50px;
	bottom: 15px;
	z-index: 10;
}
.banner_dot span{
	width: 10px;
	height: 10px;
	background: #fff;
	border-radius: 50%;
	float: left;
	margin-left: 10px;
	cursor: pointer;
}
.banner_dot span:nth-of-type(1){
	margin-left: 0px;
}
.banner_dot .currentDot{
	background: #FF4400;
}
/* 箭头 */
.row_btn{
	width: 50px;
	height: 50px;
	background: #ADFF2F;
	font-size: 18px;
	color: #333;
	cursor: pointer;
	line-height: 50px;
	text-align: center;
	position: absolute;
	top: 50%;
	margin-top: -25px;
	z-index: 19;
}
.row_lt{
	left: 20px;
	margin-top: -25px;
}
.row_rt{
	right: 20px;
	margin-top: -25px;
}	
	
	
</style>
