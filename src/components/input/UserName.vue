<template>
<section class="form-group">
	<label for="userName">手机号码:</label>
	<input 
		type="text" 
		v-model.trim="names" 
		@keyup="userName" 
		ref="name" 
		id="userName" 
		placeholder="请输入手机号码" 
		maxlength="11"
	/>
</section>
</template>

<script>
export default{
	data(){
		return{
			names:""
		}
	},
	methods:{
		userName(){
			this.$emit('user-name', this.names);
		}
	}
}
</script>

<style scoped="scoped">
.form-group{
	width: 100%;
	height: 1.4rem;
	line-height: 1.4rem;
	box-sizing: border-box;
	margin-bottom: 0.6rem;
}	
.form-group label{
	width: 25%;
	height: 100%;
	font-size: 0.56rem;
	text-align: right;
	float: left;
	margin-right: 3%;
}
.form-group input{
	width: 60%;
	height: 100%;
	outline: none;
	float: left;
	font-size: 0.56rem;
	padding: 0 0.2rem;
	border: 1px solid #999;
	box-sizing: border-box;
}
.form-group input:focus{
	border: 1px solid #333;
	box-shadow: 0px 0px 3px 1px #ADFF2F;
	border-radius: 0.12rem;
}

	
</style>
