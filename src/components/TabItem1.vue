<template>
	<div>
		<p class="tltle">计算器</p>
		<section class="compute_box">
			<input type="text" class="compute_ipt" @keypress="handleKeyUp(-1)" v-model.trim="ipt1" />
			<input type="text" class="compute_add_ipt" disabled="disabled" value="+" />
			<input type="text" class="compute_ipt" @keypress="handleKeyUp(1)" v-model.trim="ipt2" />
			<input type="text" class="compute_add_ipt" disabled="disabled" value="=" />
			<input type="text" class="compute_add_ipt" disabled="disabled" :value="val" />
			
		</section>
		<section class="count_btn_box">
			<ul>
				<li
					class="count_btn"
					v-for="(count,index) in counts"
					:key="index"
					@click="handleChangeLi(index)"
				>
					{{count.countTxt}}
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default{
	name: 'TabItem1',
	data(){
		return{
			ipt1:'',
			ipt2:'',
			val:'',
			counts:[
				{countTxt:'1'},
				{countTxt:'2'},
				{countTxt:'3'},
				{countTxt:'4'},
				{countTxt:'5'},
				{countTxt:'6'},
				{countTxt:'7'},
				{countTxt:'8'},
				{countTxt:'9'},
				{countTxt:'清空'},
				{countTxt:'0'},
				{countTxt:'确定'},
			]
		}
	},
	methods:{
		handleKeyUp(way){
			if(way>0){
				this.handleChangeLi()
			}else{
				console.log(1)
			}			
			
		},
		handleChangeLi(index){
			console.log(index)
			if(index === 11){
				this.val = this.ipt1 + this.ipt2
			}
		}
	}
}
</script>

<style scoped="scoped">
.tltle{
	font-size: 16px;
	background: #f40;
	color: #fff;
	text-align: center;
	line-height: 35px;
}
.compute_box{
	padding: 35px 50px 240px;
}
.compute_box input{	
	width: 100%;
	display: block;	
	margin-top: 10px;
	border: 1px solid #ccc;
	outline: none;
	padding: 0 5px;
	text-align: center;
	height: 35px;
	line-height: 35px;	
	box-sizing: border-box;
	font-size: 16px;
}
.compute_box .compute_add_ipt{
	font-size: 26px;
	color: #f40;
}
.compute_ipt{
}

.count_btn_box{
	width: 100%;
	height: 240px;
	position: fixed;
	left: 0;
	bottom: 0;
}
.count_btn{
	width: 33.33%;
	height: 60px;
	background: #FAB08D;
	color: #fff;
	font-size: 20px;
	text-align: center;
	line-height: 60px;
	float: left;
	border-left: 1px solid #fff;
	border-top: 1px solid #fff;
	box-sizing: border-box;
}
.count_btn:nth-of-type(3n+1){
	border-left:none;
}






</style>
