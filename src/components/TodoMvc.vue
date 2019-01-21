<template>
<div class="todo_box">
	<AddTodo 
		@AddTodo="AddTodos"
		
	/>
	<TodoItem 
		:todo = "todo"
		v-for="todo in filterTodos"
		:id="'todo'+todo.id"
		:key="todo.id"
		@del="delList"
	/>
	<TodoFooter 
		:todos="todos"
		@FooterNav="ToggleFooterNav"
		:filter="filter"
	/>
</div>
</template>

<script>
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"
import TodoFooter from "./TodoFooter"
	
let id = 2;	
export default{
	name:'TodoMvc',
	current:0,
	data(){
		return{
			addValue:"",
			todos:[
				{id:0,todoTxt:'01',completed:false},
				{id:1,todoTxt:'02',completed:true}
			],
			filter:'所有'
		}
	},
	components:{
		AddTodo,
		TodoItem,
		TodoFooter
	},
	computed:{
		filterTodos(){
			if(this.filter==='所有'){
				return this.todos;
			}
			const completed=this.filter==='已完成';
			return this.todos.filter(todo=>completed===todo.completed);
//			return this.todos.filter(function(todo){
//				return todo.completed === completed	
//			})
		}
	},
	methods:{
		AddTodos(value){
			if(value === '' || value ===null){
				alert('输入不能为空!');
				return;
			}
			this.todos.push({  // unshift:数组前增加一个
	  			id:id++,
	  			todoTxt:value,
	  			completed:false
	  		})
		},
		delList(id){
			var index = this.todos.findIndex(function(todo){
	  			return todo.id === id;
	  		})
	  		this.todos.splice(index,1);
		},
		ToggleFooterNav(nav){
			this.filter=nav;
		}
		
	}
}
</script>

<style scoped="scoped">
.todo_box{
	padding: 0.8rem 0.4rem;
}



</style>
