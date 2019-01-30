<template>
<section class="form-group">
	<label for="email">邮箱:</label>
	<input 
		type="text" 
		v-model.trim="emails" 
		@keyup="Emails" 
		ref="email" 
		id="email" 
		placeholder="请输入邮箱" 
	/>
</section>
</template>

<script>
export default{
	data(){
		return{
			emails:''
		}
	},
	methods:{
		Emails(){
			this.$emit('e-mail', this.emails);
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