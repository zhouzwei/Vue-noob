<template>
<div :class="['todo_item_box',todo.completed ? 'completed':'']">
	<ul>
		<li
			class="todo_item"			
		>
			<input 
				type="checkbox" 
				:id="'ipt'+todo.id" 
				class="item_ipt" 
				v-model="todo.completed"
			/>
			<label :for="'ipt'+todo.id"></label>
			<span>{{todo.todoTxt}}</span>
			<button class="deletBtn" @click="deletBtn">X</button>
		</li>
	</ul>
</div>
</template>

<script>
export default{
	props:{
		todo:{
			type:Object,
			required:true
		}
		
	},
	data(){
		return{
			
		}
	},
	methods:{
		deletBtn(){
			this.$emit('del',this.todo.id)
		}
	}
}
</script>

<style scoped="scoped">
.todo_item_box{
	margin-top: 0.6rem;
}	
.todo_item{
	height: 1.4rem;
	line-height: 1.4rem;
	font-size: 0.56rem;
	position: relative;
	margin-bottom: 0.4rem;
}	
.item_ipt{
	width: 0.8rem;
	height: 0.8rem;
	display: none;
}	
.todo_item label{
	width: 0.8rem;
	height: 0.8rem;
	float: left;
	background: #fff;
	border-radius: 50%;
	border: 1px solid #f40;
	box-sizing: border-box;
	margin-top: 0.3rem;
	position: relative;
}
.todo_item label:after{
	opacity: 0;
	content: '';
	position: absolute;
	width: 0.4rem;
	height: 0.2rem;
	background: transparent;
	top: 0.12rem;
	left: 0.12rem;
	border: 0.08rem solid #fff;
	border-top: none;
	border-right: none;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}	
.todo_item .item_ipt[type=checkbox]:checked + label{
	background: #f40;
}
.todo_item .item_ipt[type=checkbox]:checked + label:after {
	opacity: 1;
}		
.todo_item span{
	width: 10rem;
	float: left;
	margin-left: 0.4rem;
	font-size: 0.72rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}	
.completed span{
	color: #999;
	text-decoration:line-through;
}
.deletBtn{
	float: right;
	height: 100%;
	padding: 0px 0.4rem;
	background: #f40;
	color: #fff;
	outline: none;
}	
		
	
</style>