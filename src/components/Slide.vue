<template>
<section class="slide_box">
	<section class="slide wrap">
		<section class="slide_title">无缝循环</section>
		<ul class="slide_ul clearfix" id="SlideUl">
			<li class="slide_li"
				v-for="(item,index) in items"
				:key="index"
			>
				{{item.itemTxt}}
			</li>
		</ul>
	</section>
</section>
</template>

<script>
export default{
	name:"Slide",
	data(){
		return{
			items:[
				{itemTxt:'01'},
				{itemTxt:'02'},
				{itemTxt:'03'},
				{itemTxt:'04'},
				{itemTxt:'05'},
				{itemTxt:'06'},
				{itemTxt:'07'},
				{itemTxt:'08'},
				{itemTxt:'09'},
				{itemTxt:'10'},
				{itemTxt:'11'},
				{itemTxt:'12'},
				{itemTxt:'13'},
				{itemTxt:'14'},
				{itemTxt:'15'},
				{itemTxt:'16'}
			]
		}
	},
	methods:{
		autoPlay(){
			var SlideUl = document.getElementById('SlideUl');
			var SlideLl = document.getElementsByClassName('slide_li');
			var SlideLl_len = SlideLl.length;
			var SlideLl_w = SlideLl[0].clientWidth;
			var num = 0;
			var arry = [];
			for(var i=0;i<SlideLl_len;i++){
				// 找出第几个的时候就超出或等于1300的屏
				if((SlideLl_w*i+15*i)>=1300){
					num = i;
					break;
				};
			};
			for(var j=0;j<num;j++){
				var clonedNode = SlideLl[j].cloneNode(true); // 克隆节点
				SlideUl.appendChild(clonedNode); // 插入节点
			};
			var dic = 0;
			var dicTimer = 50;
			var start = null;
			var str = function(){
			    dic=dic+5;
			    if( dic > SlideLl_len*SlideLl_w+((SlideLl_len-1)*15)){
			        dic=0;
			    }
			    SlideUl.style.left=-dic+'px';
			};
			start=setInterval(str,dicTimer);			
		}


	},
	mounted(){
		this.autoPlay();
	}
}
</script>

<style scoped="scoped">
.slide_box{
	background: #f2f2f2;
	height: 250px;
}
.slide{
	height: 100%;
	background: #C51C36;
	box-sizing: border-box;
	padding: 25px 10px;
	overflow: hidden;
}
.slide_title{
	font-size: 16px;
	color: #fff;
	text-align: center;
	margin-bottom: 10px;
}
.slide_ul{
	width: 20000px;
	height: 100%;
	position: relative;
}
.slide_li{
	height: 150px;
	width: 100px;
	background:#0000FF;
	line-height:150px;
	text-align: center;
	font-size: 26px;
	color: #fff;
	margin-left: 15px;
	float: left;
	position: relative;
	cursor: pointer;
}
.slide_li:nth-of-type(1){
	margin-left: 0;
}




</style>

