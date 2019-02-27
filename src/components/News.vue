<template>
<div>
	<section class="title">消息列表</section>
	<ul class="news_list_box">
		<li 
			class="news_list"
			v-for="(item,index) in items"
			:key="index"
		>
			<input type="checkbox" class="checkboxBtn" @click="seletedCheckbox(item,index)" :id="'chechbox'+index" />
			<label :for="'chechbox'+index"></label>
			<section class="itemTxt">{{item.itemTxt}}</section>
			<button class="delet_btn" v-show="show" @click="handleDelet(item)">删除</button>
		</li>
	</ul>
</div>
</template>

<script>
export default{
	name:'News',
	data(){
		return{
			show:false,
			checkAllFlage:false,
			current:-1,
			items:[
				{itemTxt:'1.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'2.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'3.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'4.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'5.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'6.我是消息列表内容我是消息列表内容我是消息列表内容'},
				{itemTxt:'7.我是消息列表内容我是消息列表内容我是消息列表内容'}
			]
		}
	},
	methods:{
		
		seletedCheckbox(item,index){   //  是否选中当前选项（是否打钩）
			var delet_btn = document.getElementsByClassName('delet_btn');
			var checkboxBtn = document.getElementsByClassName('checkboxBtn');
			for(var i=0;i<checkboxBtn.length;i++){
				this.checked = !this.checked
				if(checkboxBtn[i].checked){
					delet_btn[i].style.display = 'block';
				}else{
					delet_btn[i].style.display = 'none';
				}
			}
		},
		
		handleDelet(item){
			var index = this.items.indexOf(item);
			//var newsLlist = document.getElementsByClassName('news_list');
			var delet_btn = document.getElementsByClassName('delet_btn');
			var checkboxBtn = document.getElementsByClassName('checkboxBtn');
			if(checkboxBtn[index].checked){
				this.items.splice(index,1);   // 删除当前选项
				if(index > 0){
					var indexDif = index - 0;
					for(var j=0;j<indexDif;j++){
						if(checkboxBtn[j].checked){
							checkboxBtn[j].checked = true;
							delet_btn[j].style.display = 'block';
						}else if(!checkboxBtn[j].checked){
							checkboxBtn[j].checked = false;
							delet_btn[j].style.display = 'none';
						}						
					}
					for(var i=index;i<checkboxBtn.length-index;i++){
						if(checkboxBtn[i].checked){
							console.log(i)
							checkboxBtn[i].checked = false;
							delet_btn[i].style.display = 'none';
							checkboxBtn[index+1].checked = false;
							delet_btn[index+1].style.display = 'none';
						}else if(!checkboxBtn[i].checked){
							//console.log(11)
							checkboxBtn[index].checked = false;
							delet_btn[index].style.display = 'none';
						}
						//checkboxBtn[i].checked = false;
						//delet_btn[i].style.display = 'none';
					}
					
				}else{
					for(var i=0;i<checkboxBtn.length;i++){
						checkboxBtn[i].checked = false;
						delet_btn[i].style.display = 'none';
					}
				}
				
				
				
			}			
		}
		
	}
}
</script>

<style scoped="scoped">
.title{
	width: 100%;
	height: 1.6rem;
	line-height: 1.6rem;
	text-align: center;
	background: #f40;
	color: #fff;
	font-size: 0.64rem;
	position: fixed;
	left: 0;
	top: 0;
}	
.news_list_box{
	padding: 2rem 0 0 0;
}
.news_list{
	height: 2rem;
	position: relative;
	background: #f8ffe5;
	margin-bottom: 0.4rem;
	color: #333;
	padding: 0 0.4rem;
	box-sizing: border-box;
}
.news_list:nth-of-type(2n+1){
	background: #fffce3;
}
.checkboxBtn{
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	left: 0.4rem;
	top: 50%;
	margin-top: -0.4rem;
	visibility: hidden;
}
.news_list label{
	width: 0.8rem;
	height: 0.8rem;
	display: block;
	cursor: pointer;
	background: #ff;
	border-radius: 50%;
	border: 1px solid #f40;
	box-sizing: border-box;
	position: absolute;
	left: 0.4rem;
	top: 50%;
	margin-top: -0.4rem;
}
.news_list label:after {
	opacity: 0;
	content: '';
	position: absolute;
	width: 0.4rem;
	height: 0.2rem;
	background: transparent;
	top: 0.1rem;
	left: 0.1rem;
	border: 2px solid #fff;
	border-top: none;
	border-right: none;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.news_list input[type=checkbox]:checked + label{
	background: #f40;
}
.news_list input[type=checkbox]:checked + label:after {
	opacity: 1;
}

.itemTxt{
	width: 10.8rem;
	height: 100%;
	padding-left: 1.2rem;
	font-size: 0.56rem;
	line-height: 2rem;
	margin-right: 0.2rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	float: left;
}
.delet_btn{
	float: right;
	padding:0.12rem 0.32rem;
	background: #f40;
	outline: none;
	color: #fff;
	font-size: 0.48rem;
	margin-top: 0.56rem;
	display: none0;
}
.onDeletBtn{
	display: block;
}





</style>
