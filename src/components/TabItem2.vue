<template>
	<div style="height: 100%;background: #F2F2F2;">
		<section class="shop_car">购物车</section>
		<!-- 商品列表 -->
		<section class="goods_list">
			<ul>
				<li class="goods_list_li"
					v-for="(goods,index) in goodsList"
					:key="index"
				>
					<section class="goods_ipt_box">
						<input 
							type="checkbox" 
							class="goods_ipt" 
							:id="'chechbox'+index"
							@click="selectProduct(goods)"
						/>
						<label :for="'chechbox'+index"></label>
					</section>
					<section class="goods_img_box">
						<img class="goods_img" :src="goods.goodsImg" alt="" />
					</section>
					<section class="goods_info">
						<section class="goods_name">{{goods.goodsNmae}}</section>
						<section class="user_btn">
							<section class="lose_btn" @click="goodsMoney(goods,-1)">{{goods.goodsLose}}</section>
							<!--<section class="txt_btn">{{goods.goodsTxt}}</section>-->
							<input type="text" class="txt_btn" value="1" disabled v-model="goods.goodsNum" />
							<section class="add_btn" @click="goodsMoney(goods,1)">{{goods.goodsAdd}}</section>
						</section>
						<section class="goods_price">&yen; {{Math.round((goods.goodsPrice*goods.goodsNum)*100)/100}}</section>
					</section>
					<section class="delet_btn_box">
						<span class="delet_btn" @click="deletBtn(goods)">{{goods.goodsDelet}}</span>
					</section>
				</li>
			</ul>
		</section>
		<!-- 结算 -->
		<section class="settlement_account">
			<section class="settlement_account_page_1 settlement_account_page">
				<input type="checkbox" class="future_ipt" id="futureIpt"/>
				<label class="futureIpt" for="futureIpt" @click="checkAll"></label>
				<span class="future_txt">全选</span>
			</section>
			<section class="settlement_account_page_2 settlement_account_page">
				<span>合计:</span>
				<span>{{totalPrice}}元</span>
			</section>
			<section class="settlement_account_page_3 settlement_account_page">
				结算({{totalCount}})
			</section>
		</section>
		
		<!-- 删除弹窗 -->
		<div class="delet_btn_bg_box" v-show="showBox">
			<div class="delet_btn_bg">
				<p>确定要删除吗？</p>
				<div class="btn deter_btn" @click="deletBtnBox(1)">确定</div>
				<div class="btn cancel_btn" @click="deletBtnBox(-1)">取消</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'TabItem2',
	data(){
		return{
			showBox:false,
			checkAllFlage:false,  // 是否全选
			totalPrice:0,      // 总价格
			totalCount:0,     // 总数量
			curProduct:'',    // 当前商品
			goodsList:[
				{
					goodsImg:require('../assets/images/index/shangjialianmeng-icon04.png'),
					goodsNmae:'商品名称',
					goodsLose:'-',
					goodsNum:'2',
					goodsAdd:'+',
					goodsPrice:'186.00',
					goodsDelet:'删除'
				},
				{
					goodsImg:require('../assets/images/index/shangjialianmeng-icon04.png'),
					goodsNmae:'商品名称',
					goodsLose:'-',
					goodsNum:'1',
					goodsAdd:'+',
					goodsPrice:'200.00',
					goodsDelet:'删除'
				},
				{
					goodsImg:require('../assets/images/index/shangjialianmeng-icon04.png'),
					goodsNmae:'商品名称',
					goodsLose:'-',
					goodsNum:'1',
					goodsAdd:'+',
					goodsPrice:'123.45',
					goodsDelet:'删除'
				}
			]
		}
	},
	methods:{
		
		deletBtn(goods){  // 删除单个商品按钮
			this.showBox = true;
			this.curProduct = goods;
		},
		deletBtnBox(way){  // 删除弹窗 再次确定是否要删除
			var index = this.goodsList.indexOf(this.curProduct);
			if(way>0){   // 确定删除
				//this.goodsList[index].checked = false
				this.goodsList.splice(index,1);
				this.showBox = false;
			}else{   // 取消删除
				this.showBox = false;
			}
			this.calculatePrice();
		},
		// 增加 减少物品数量时   商品总价格
		goodsMoney(product,way){
			if(way>0){   // 加号
				product.goodsNum++;
			}else{   // 减号
				product.goodsNum--;
				if(product.goodsNum<1){
					product.goodsNum = 1;
				}
			}
			this.calculatePrice();
		},
		// 选择商品按钮
		selectProduct(goods){
			this.calculatePrice();
		},
		// 全选按钮
		checkAll(){
			var goodsIpt = document.getElementsByClassName('goods_ipt');
			this.checkAllFlage = !this.checkAllFlage;    //  是否已经点击了全选按钮
			for(var i=0;i<goodsIpt.length;i++){
				if(this.checkAllFlage){
					goodsIpt[i].checked = true;
				}else{
					goodsIpt[i].checked = false;
				}
			}
			this.calculatePrice();
		},
		// 计算总价
		calculatePrice(){
			var goodsIpt = document.getElementsByClassName('goods_ipt');
			this.totalPrice = 0;
			this.totalCount= 0;
			for(var i=0;i<goodsIpt.length;i++){
				if(goodsIpt[i].checked){
					this.totalPrice += Math.round((this.goodsList[i].goodsNum * this.goodsList[i].goodsPrice)*100)/100;
					this.totalCount += parseInt(this.goodsList[i].goodsNum); 
				}
			}
		}
		
	}
}
</script>

<style scoped="scoped">
.shop_car{
	width: 100%;
	height: 1.4rem;
	text-align: center;
	color: #f40;
	font-size: 0.56rem;
	line-height: 1.4rem;
	background: #fff;
	position: fixed;
	left: 0;
	top: 0;
}
/* 商品列表的css  */
.goods_list{
	width: 100%;
	padding-bottom: 1.8rem;
	padding-top: 1.4rem;
}
.goods_list_li{
	padding: 0 0.4rem;
	height: 4rem;
	background: #DAA520;
	margin-bottom: 0.4rem;
}
.goods_list_li:nth-of-type(2n){
	background:#e2b56f;
}
.goods_ipt_box{
	float: left;
	width: 10%;
	height: 100%;
	position: relative;
}
.goods_ipt[type=checkbox]{
	width: 0.8rem;
	height: 0.8rem;
	margin-top: 1.6rem;
	visibility: hidden;
}
.goods_ipt_box label{
	width: 0.8rem;
	height: 0.8rem;
	display: block;
	cursor: pointer;
	margin-top: -0.8rem;
	background: #fff;
	border-radius: 50%;
	box-sizing: border-box;
}
.goods_ipt_box label:after {
	opacity: 0;
	content: '';
	position: absolute;
	width: 0.4rem;
	height: 0.2rem;
	background: transparent;
	top: 1.8rem;
	left: 0.2rem;
	border: 2px solid #fff;
	border-top: none;
	border-right: none;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.goods_ipt_box input[type=checkbox]:checked + label{
	background: #f40;
}
.goods_ipt_box input[type=checkbox]:checked + label:after {
	opacity: 1;
}

.goods_img_box{
	float: left;
	width: 20%;
	height: 100%;
}
.goods_img{
	width: 92%;
	height: 100%;
}
.goods_info{
	float: left;
	width: 50%;
	height: 100%;
}
.goods_name{
	font-size: 0.56rem;
	color: #fff;
}
.user_btn{
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.56rem;
	text-align: center;
	color: #fff;
	margin: 0.2rem 0;
}
.lose_btn{
	float: left;
	width: 20%;
	height: 100%;
}
.txt_btn{
	float: left;
	width: 20%;
	height: 100%;
	text-align: center;
	border: 1px solid #fff;
	box-sizing: border-box;
	color: #333;
}
.add_btn{
	float: left;
	width: 20%;
	height: 100%;
}
.goods_price{
	font-size: 0.64rem;
	line-height: 1rem;
	text-align: left;
	color: #ff0;
}

.delet_btn_box{
	float: left;
	width: 20%;
	height: 100%;
	box-sizing: border-box;
}
.delet_btn{
	display: block;
	width: 80%;
	margin: 1.6rem auto 0;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	font-size: 0.48rem;
	background: #f40;
	color: #fff;
	border-radius: 0.2rem;
}



/*  结算底部的css  */
.settlement_account{
	width: 100%;
	height: 1.76rem;
	background: #fff;
	position: fixed;
	left: 0;
	bottom: 0;
}	
.settlement_account_page{
	height: 100%;	
	float: left;
	font-size: 0.56rem;
	line-height: 1.76rem;
}	
.settlement_account_page_1{
	width: 35%;
	padding: 0 0.2rem;
	box-sizing: border-box;
}	
.settlement_account_page_2{
	width: 40%;
}	
.settlement_account_page_3{
	width: 25%;
	background: #f40;
	text-align: center;
	color: #fff;
}	
.future_ipt{
	float: left;
	width: 0.8rem;
	height: 0.8rem;
	margin-top:0.48rem;
	margin-right: 0.32rem;
	visibility: hidden;
	display: none;
}
.futureIpt{
	float: left;
	width: 0.8rem;
	height: 0.8rem;
	margin-top:0.48rem;
	margin-right: 0.32rem;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 50%;
	box-sizing: border-box;
}	
.futureIpt:after{
	opacity: 0;
	content: '';
	position: absolute;
	width: 0.4rem;
	height: 0.2rem;
	background: transparent;
	top: 0.64rem;
	left: 0.36rem;
	border: 2px solid #fff;
	border-top: none;
	border-right: none;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.future_ipt[type=checkbox]:checked + .futureIpt{
	border: none;
	background: #f40;
}
.future_ipt[type=checkbox]:checked + .futureIpt:after {
	opacity: 1;
}
.future_txt{
	float: left;
}	
/* 删除弹窗 */
.delet_btn_bg_box{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: rgba(0,0,0,0.2);
}
.delet_btn_bg{
	width: 10rem;
	height: 4rem;
	background: #fff;
	margin: 10rem auto;
	border-radius: 0.2rem;
}
.delet_btn_bg p{
	font-size: 0.64rem;
	text-align: center;
	line-height: 1.8rem;
	color: #f40;
}
.btn{
	float: left;
	width: 50%;
	height: 1.4rem;
	line-height: 1.4rem;
	text-align: center;
	font-size: 0.56rem;
}
	
	
	
</style>
