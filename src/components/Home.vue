<template>
	<div class="home">
		<header class="header">
			<section class="clearfix">
				<!-- logo -->
				<div class="logo"><img src="../assets/images/index/logo.png" alt="" /></div>
				<!-- 公告 -->
				<div class="notice">
					<marquee behavior="" direction="" loop="-1" scrollamount="5">
						<span v-for="(notice,index) in notices" :key="index">{{notice.notice_txt}}</span>
					</marquee>
				</div>
				<div class="horn_box" @click="hornClick">
					<span class="tip_dot" v-show="show"></span>
					<div class="horn" id="horn"></div>
				</div>
			</section>
		</header>
		<section class="tabs_head">
			<section class="happyNewYear">
				<ul class="tabs_ul clearfix">
					<router-link 
						tag="li" 
						:class="tab.tabCls" 
						v-for="(tab,index) in tabs" 
						:key="index" 
						:to="{ path:'/TabItem'+( parseInt(index)+parseInt(1) ),query:{id:index+1} }" 
					>
						<section class="tabImg_box"><img :src="tab.tabImg" alt="" /></section>
						<section>{{tab.tabTxt}}</section>
					</router-link> 
				</ul>
			</section>
		</section>
		<main class="main">
			
			<!-- 轮播图 -->
			<section class="banner">
				<div class="swiper-container">
					<div class="swiper-wrapper" >
						<div 
							class="swiper-slide" 
							v-for="(item,index) in items"
							:key="index"
						>
							<img :src="item.swiperImg" alt="" />
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</section>
		</main>
	</div>
	
</template>

<script>
//import Swiper from 'swiper'  // 这个是cnpm时候这种方法使用

import xin from "@/assets/images/index/xin.png"
import nian from "@/assets/images/index/nian.png"
import kuai from "@/assets/images/index/kuai.png"
import le from "@/assets/images/index/le.png"
import kefu from "@/assets/images/index/gantanhao.png"


	
export default {
	name: 'Home',
	data(){
		return{
			notices:[
				{notice_txt:'内容1'},
				{notice_txt:'内容2'},
				{notice_txt:'内容3'}
			],
			tabs:[
				{
					tabCls:'xin',
					tabImg:xin,
					tabTxt:'新'
				},
				{
					tabCls:'nian',
					tabImg:nian,
					tabTxt:'年'
				},
				{
					tabCls:'kuai',
					tabImg:kuai,
					tabTxt:'快'
				},
				{
					tabCls:'le',
					tabImg:le,
					tabTxt:'乐'
				},
				{
					tabCls:'kefu',
					tabImg:kefu,
					tabTxt:'！'
				}
			],
			show:true,
			items:[
				{swiperImg:require('../assets/images/index/banner01.png')},
				{swiperImg:require('../assets/images/index/banner01.png')},
				{swiperImg:require('../assets/images/index/banner01.png')}
			]
		}
	},
	methods:{
		hornClick(){
			//alert(1)
			this.$router.push({ path:"/News" });
		},
		a(){
			var horn = document.getElementById('horn');
			if(this.show===true){
				setInterval(function(){
					//$('.horn').addClass('jitter')
					horn.classList.add('jitter');
				},"300");
				setInterval(function(){
					//$('.horn').removeClass('jitter')
					horn.classList.remove('jitter');
				},"5000");
			}else{
				setInterval(function(){
					//$('.horn').removeClass('jitter')
					horn.classList.remove('jitter');
				},"300");
			}
			
		},
		swiper(){
			var swiper = new Swiper('.swiper-container', {
	            pagination: '.swiper-pagination',        
	            paginationClickable: true,
	            spaceBetween: 0,
	            centeredSlides: true,
	            autoplay: 2500,
	            loop:true,
	            autoplayDisableOnInteraction: false
        	});
		}
	},
	mounted(){
		this.a(),
		this.swiper()
	}
}
</script>

<style>
.header{
	width: 100%;
	background: #c51c36;
	color: #fff;
	padding: 0.4rem 0.4rem 0.4rem 0.2rem;
	height: 1.92rem;
	box-sizing: border-box;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
}
.logo{
	float: left;
	width: 1.12rem;
	height: 1.12rem;
	margin-right: 0.2rem;
}	
.logo img{
	float: left;
	width: 100%;
	height: 100%;
}	
.notice{
	float: left;
	width: 11.76rem;
	height: 1.12rem;
	line-height: 1.12rem;
	background: #db5b5d;
	border-radius: 0.8rem;
	color: #fff;
	font-size: 0.56rem;
}
.notice span{
	float: left;
	margin-left: 0.6rem;
}
.notice span:nth-of-type(1){
	margin-left: 0;
}	
.horn_box{
	float: right;
	width: 0.9rem;
	height: 1.12rem;
	position: relative;
}
.horn{
	width: 0.9rem;
	height: 1.12rem;	
	background: url(../assets/images/index/tongzhi.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 0;
	top: 0;
}	
@keyframes jitter{
	0%{transform: rotate(10deg);}
	50%{transform: rotate(0deg);}
	100%{transform: rotate(-10deg);}
}
.jitter{
	animation:jitter 0.1s ease-in-out 0.2s 7;
	/*infinite*/
}
.tip_dot{
	width: 0.2rem;
	height: 0.2rem;
	background: #fff;
	border-radius: 50%;
	position: absolute;
	top: -0;
	right: -0px;
	z-index: 1;
}	
.tabs_head{
	height: 8.08rem;
	background: url(../assets/images/index/header2017-bg.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
}	
.happyNewYear{
	width: 100%;
	position: absolute;
	left: 0;
	bottom: -2rem;
}	
.tabs_ul{
	width: 14rem;
	margin: 0 auto;
	background: url(../assets/images/index/nav.png) no-repeat;
	background-size: 100% 100%;
	padding: 0.5rem 0.2rem 0.6rem;
	border-radius: 0.2rem;
}	
.tabs_ul li{
	color: #333;
	font-size: 0.64rem;
	width: 2.7rem;
	float: left;
	text-align: center;
}	
.tabImg_box{
	height: 2.56rem;
}	
.xin img{
	width: 2.48rem;
}	
.nian img{
	width: 2.34rem;
	height: 2.48rem;
}	
.kuai img{
	width: 2.4rem;
	height: 2.36rem;
}	
.le img{
	width: 2.24rem;
	height: 2.36rem;
}	
.kefu img{
	width: 1.2rem;
	height: 2.08rem;
}	
.main{
	width: 100%;
    height: 33.76rem;
    background: url(../assets/images/index/diwen-bg.png) no-repeat;
    background-size: 100%;
    padding-bottom: 1rem;
    padding-top:2rem ;
}

/*banner板块1图代码开始*/
html{font-size:25px;}
.banner{width: 15rem;height:5.64rem;position:relative;text-align:center;}
.banner img{width:13.6rem;height:5.64rem;position:absolute;left:50%;margin-left:-6.8rem;}
.swiper-container {
	width:15rem;
	height: 5.64rem;
}
.swiper-pagination{position:absolute;right:1.6rem; bottom:0.4rem;}
.swiper-slide {
width: 100%;
/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: left;
-ms-flex-pack: left;
-webkit-justify-content: left;
justify-content: left;
-webkit-box-align: left;
-ms-flex-align: left;
-webkit-align-items: left;
align-items: left;
}
/*banner板块1图代码结束*/


	
</style>