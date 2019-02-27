<template>
<div>
	<section class="title">话费充值</section>
	<section class="topUpContent">
		<section class="input_box">
			<input class="input_base" @keyup="handleInputs" v-model.trim="handleInput" type="text" placeholder="请输入手机号码" maxlength="11" />
			<p v-show="showAddress">广东广州</p>
			<img class="address_icon" src="../assets/images/address_icon.png" alt="" />
		</section>
		<section class="phone_charge_title">充值话费</section>
		<ul class="phone_charge_list clearfix">
			<li
				class="phone_charge"
				:class="{active:currentIndex === index}"
				v-for="(item,index) in items"
				:key="index"
				@click="handleChange(index)"
			>
				<span class="soure_price">{{item.sourePrice}}元</span>
				<span class="discount_price">售价：{{item.discountPrice}}元</span>
			</li>
		</ul>
	</section>
	<section class="submitBtn" @click="submitBtn">提交({{submitPrice}}元)</section>
</div>
</template>

<script>
export default{
	name: 'TabItem4',
	data(){
		return{
			showAddress:false,
			handleInput:'',
			iphone_reg:/^1[3|4|5|7|8][0-9]{9}$/,
			currentIndex:-1,
			submitPrice:0,
			items:[
				{sourePrice:'10',discountPrice:'9.9'},    // discountPrice 优惠价、售后价
				{sourePrice:'20',discountPrice:'19.8'},
				{sourePrice:'50',discountPrice:'49.5'},
				{sourePrice:'100',discountPrice:'199.9'},
				{sourePrice:'200',discountPrice:'299.8'},
				{sourePrice:'500',discountPrice:'499.5'}
			]
		}
	},
	methods:{
		handleInputs(){
			if(this.iphone_reg.test(this.handleInput)){
				this.showAddress = true;
				return
			}else{
				this.showAddress = false;
				return
			}
		},
		handleChange(index){
			this.currentIndex = index;
			this.submitPrice = this.items[index].discountPrice;		 
		},
		calculatePrice(){
			var phone_charge = document.getElementsByClassName('phone_charge');
			for(var i=0;i<phone_charge.length;i++){
				this.submitPrice = this.items[i].discountPrice;
			}
		},
		submitBtn(){		
			if(!this.iphone_reg.test(this.handleInput)){
				alert('手机号码错误，请仔细查看!');
				this.$router.push({path:"/Rate"});
				return
			}else if(this.currentIndex < 0){
				alert('请选择话费充值额!');
				return
			}else{
				alert('充值成功了!');
				this.$router.push({path:"/PullRefresh"});				
				return
			}
		}
		
	},
	mounted(){
		if(this.currentIndex === 0){
			this.submitPrice = this.items[this.currentIndex].discountPrice;
		}
	}
}
</script>

<style scoped="scoped">

.title{
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	text-align: center;
	color: #fff;
	background: #f40;
	font-size: 0.64rem;
	position: fixed;
	left: 0;
	top: 0;
}	
/* 手机号输入框 */
.topUpContent{
	width: 100%;
	padding: 1.6rem 0.4rem;
	box-sizing: border-box;
	/*background: #f2f2f2;*/
}
.input_box{
	height: 2.4rem;
	width: 100%;
	position: relative;
	background: #fff;
}
.input_box p{
	color: #999;
	font-size: 0.48rem;
	position: absolute;
	left: 0.2rem;
	bottom: 0.2rem;
}
.address_icon{
	width: 1.2rem;
	height: 1.2rem;
	position: absolute;
	top: 0;
	right: 0.4rem;
}
.input_base{
	width: 100%;
	height: 1.2rem;
	outline: none;
	padding: 0 5px;
	box-sizing: border-box;
	font-size: 0.64rem;
	color: #333;
}

/* 话费充值列表  */
.phone_charge_title{
	font-size: 0.56rem;
}
.phone_charge_list{
	background: #fff;
	padding: 0.4rem 0;
}
.phone_charge{
	width: 4.6rem;
	height: 2.4rem;
	color: #6ea7d6;
	border: 1px solid #6ea7d6;
	border-radius: 0.08rem;
	padding: 0.2rem 0.08rem;
	box-sizing: border-box;
	float: left;
	margin-left: 0.2rem;
	margin-bottom: 0.4rem;	
}
.phone_charge:nth-of-type(3n+1){
	margin-left: 0;
}
.phone_charge span{
	text-align: center;
	display: block;
}	
.soure_price{
	font-size: 0.72rem;
	line-height: 1.12rem;
}
.discount_price{
	font-size: 0.48rem;
}
.active{
	background: #6ea7d6;
	border: none;
	color: #fff;
}
	
/* 提交按钮 */	
.submitBtn{
	width: 100%;
	height: 1.6rem;
	line-height: 1.6rem;
	text-align: center;
	color: #fff;
	background: #f40;
	font-size: 0.64rem;
	position: fixed;
	left: 0;
	bottom: 0;
}	
</style>