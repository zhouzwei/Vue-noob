<template>
<div>
	<input 
		type="text" 
		class="add_input"
		v-model.trim="addtodo"
		@keyup.enter="AddInput"
		placeholder="请输入内容"
	/>
</div>
</template>

<script>
export default{
	data(){
		return{
			addtodo:''
		}
	},
	methods:{
		AddInput(e){
			//console.log(e.target.value)
			this.$emit("AddTodo",this.addtodo);
			e.target.value = '';
			this.addtodo = '';
		}
	}
}
</script>

<style scoped="scoped">
.add_input{
	width: 100%;
	height: 1.2rem;
	border: 1px solid #f40;
	box-sizing: border-box;
	outline: none;
	padding: 0 0.2rem;
	font-size: 0.56rem;
}	
	
	
	
</style>
