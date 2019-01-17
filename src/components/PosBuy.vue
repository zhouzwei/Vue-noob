<template>
	<div>
		<header class="head"">
			<img src="../assets/images/pos/pos-pay-banner.png" alt="" />
		</header>
		<main class="pos_main">
			<ol>
				<li 
					:class="{active:currentIndex === index}"
					v-for="(tab,index) in tabs"
					:key="index"
					@click="tabToggleClick(index,tab)"
				>
					{{tab.tabTxt}}
				</li>
			</ol>
			<section class="cost">pos卡 商家版、个人版让你生活无忧  <em>¥2.00-8.00</em></section>
			<section class="selected clearfix">
				<!--实物选择-->
				<section class="need_entity">
					<section class="sf_entity">
						是否<br/>实物:
					</section>
					<section 
						class="whether" 
						:class="{on:currentIndex2 === index}" 
						v-for="(judge,index) in judges" 
						:key="index"
						@click="judgeToggleClick(index,judge)"
					>
						{{judge.judgeTxt}}
					</section>
				</section>
				<section class="tishi" v-show="showDisplay">个人版情况下，如果不需要实物卡， 则发送给的是电子版</section>
				<!--快递区域选择-->
				<section class="regional" v-show="!showDisplay">
					<section class="sf_entity">
						快递<br/>区域:
					</section>
					<section 
						class="provinces" 
						:class="{onprovinces:currentIndex3 === index}" 
						v-for="(province,index) in provinces" 
						:key="index"
						@click="provinceToggleClick(index,province)"
					>
						{{province.provinceTxt}}
					</section>
				</section>
			</section>
		</main>
		
		<!--立即购买 按钮-->
		<section class="buy_btn_box">
			<button class="buy_btn btn" @click="handleClickBtn">
				立即购买(<span>{{count}}</span>元)
			</button>
		</section>
	</div>
</template>

<script>
import {mapGetters,mapActions}	from "vuex";	
	
export default{
	name: 'PosBuy',
	data(){
		return{
			tabs:[
				{tabTxt:"个人版"},
				{tabTxt:"商家版"}
			],
			judges:[
				{judgeTxt:"否"},
				{judgeTxt:"是"}
			],
			provinces:[
				{provinceTxt:"省内"},
				{provinceTxt:"省外"}
			]
		}
	},
	computed:mapGetters([
	  	'count',
	  	'currentIndex',
	  	'currentIndex2',
	  	'currentIndex3',
	  	'showDisplay'
	]),
	methods:mapActions([
	  	'tabToggleClick',
	  	'judgeToggleClick',
	  	'provinceToggleClick',
	  	'handleClickBtn'
	])
	
}
</script>

<style scoped="scoped">
body{
	background: #f2f2f2;	
}
.head{
	height: 4.88rem;
	background: #fff;
}	
.head img{
	width: 100%;
	height: 100%;
}	
.pos_main{
	padding: 0.6rem 0.56rem 0.92rem;
	height: 5.8rem;
	background: #fff;
}	
.pos_main ol{
	width: 10rem;
    height: 1.32rem;
    border: 1px solid #c61c36;
    box-sizing: border-box;
    border-radius: 0.48rem;
    margin: 0 auto;
    overflow: hidden;	
}	
.pos_main ol li{
	width: 50%;
    height: 1.32rem;
    text-align: center;
    line-height: 1.32rem;
    font-size: 0.64rem;
    color: #4e4e4e;
    font-weight: 700;
    float: left;
}
.pos_main ol .active{
	background: #c61c36;
    color: #fffce9;
}
.cost{
	font-size: 0.56rem;
    color: #4d4d4d;
    text-align: center;
    margin-top: 0.6rem;
}
.cost em{
	color: #c61c36;
}
.selected{
	margin-top: 1.2rem;
}   
.need_entity{
	float: left;
    margin-right: 0.72rem;
}
.sf_entity{
	float: left;
    font-size: 0.72rem;
    color: #333;
    margin-right: 0.4rem
}
.whether{
	float: left;
    width: 1.4rem;
    height: 1.6rem;
    border: 1px solid #c0bfbf;
    background: #eaeaea;
    font-size: 0.64rem;
    color: #4d4d4d;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 0.28rem;
    margin-left: 0.24rem;
}
.on{
	background: #c61c36;
	color: #fff;
	border: none;
}
.tishi{
	font-size: 0.48rem;
    color: rgb(77, 77, 77);
    display: block;
}
.regional{
	float: left;
}   
.provinces{
	float: left;
    width: 2.2rem;
    height: 1.6rem;
    border: 1px solid #c0bfbf;
    background: #eaeaea;
    font-size: 0.64rem;
    color: #4d4d4d;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 0.28rem;
    margin-left: 0.24rem;
}
.onprovinces{
	background: #c61c36;
	color: #fff;
	border: none;
}
.buy_btn_box{
	padding:0 0.56rem;
	margin-top: 0.8rem;
}  
.btn{
	display: block;
    border-radius: 0.4rem;
    text-align: center;
} 
.buy_btn{	
	width: 100%;
    height: 1.76rem;
    line-height: 1.76rem;
    background: #c61c36;
    color: #fff;
    font-size: 0.8rem;
}


	
	

	
	
</style>