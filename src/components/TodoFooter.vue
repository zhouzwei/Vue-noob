<template>
<div class="navs_box clearfix">
	<div class="data_nav">{{fillterDate}}条数据</div>
	<ol class="data_state clearfix">
		<li
			class="FooterNav"
			:class="{active:currentIndex === index}"
			v-for="(nav,index) in navs"
			:key="index"
			@click="ToggleNav(nav,index)"
		>
			{{nav}}
		</li>
	</ol>
</div>
</template>

<script>
export default{
	data(){
		return{
			currentIndex:0,
			navs:['所有','待办项','已完成']			
		}
	},
	props:{
		filter:{
			type:String,
			required:true
		},
		todos:{
			type:Array,
			required:true
		}
	},
	computed:{
		fillterDate(){
			return this.todos.filter(function(todo){
				return todo.completed === false
			}).length
		}
	},
	methods:{
		ToggleNav(nav,index){
			this.currentIndex = index;
			this.$emit('FooterNav',nav);
		}
	}
}
</script>

<style scoped="scoped">
.navs_box{
	margin-top: 0.6rem;
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.56rem;
}
.data_nav{
	float: left;
	width: 2rem;
	padding: 0 0.2rem;
	margin-right: 0.4rem;
}
.data_state{
	float: left;
}	
.FooterNav{
	float: left;
	margin-right: 0.2rem;
	padding: 0 0.4rem;
	text-align: center;
	height: 1.2rem;
	background: #42B983;
	color: #fff;
}
.active{
	background: #f40;
}	
	
</style>