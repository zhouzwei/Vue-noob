<template>
<section class="form-group">
	<label for="userPassword" id="lable-userPassword">输入密码:</label>
	<input 
		type="password" 
		v-model.trim="passwords" 
		@keyup="userPassword" 
		ref="password" 
		id="userPassword" 
		placeholder="密码" 
		maxlength="21"
	/>
	<em class="disvisual" v-show="visible" @click="disvisual"></em>
	<em class="visual" v-show="!visible" @click="visual"></em>
</section>
</template>

<script>
export default{
	props:[],
	data(){
		return{
			passwords:"",
			visible:true
		}
	},
	methods:{
		userPassword(){
			this.$emit('user-password', this.passwords);
		},
		disvisual(){
			this.visible = false
			document.getElementById('userPassword').setAttribute('type','text');
		},
		visual(){
			this.visible = true
			document.getElementById('userPassword').setAttribute('type','password');
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
	position: relative;
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
.disvisual{
	width: 0.8rem;
	height: 0.8rem;
	border: 0.2rem solid #999;
	border-radius: 50%;
	box-sizing: border-box;
	position: absolute;
	right: 2rem;
	top: 50%;
	margin-top: -0.4rem;
}
.visual{
	width: 0.8rem;
	height: 0.8rem;
	border:0.2rem solid #ADFF2F;
	background: #999;
	border-radius: 50%;
	box-sizing: border-box;
	position: absolute;
	right: 2rem;
	top: 50%;
	margin-top: -0.4rem;
}
	
</style>