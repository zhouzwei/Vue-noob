<template>
<div class="login_content">
	<section style="text-align: center;margin: 5px 0;">Forget</section>
	<UserName @user-name="userName"></UserName>
	<VCode @v-code="vCode"></VCode>
	<UserPassword @user-password="userPassword"></UserPassword>
	<AgainUserPassword @againuser-password="againUserpassword"></AgainUserPassword>
	<!-- 提示语  -->
	<section class="tip" v-show="tipShow">{{tipTxt}}</section>
	<section class="login_btn" @click="LoginBtn">确定</section>
</div>
</template>

<script>
import	UserName from './input/UserName.vue'
import	UserPassword from './input/UserPassword.vue'
import	VCode from './input/Vcode.vue'
import	AgainUserPassword from './input/AgainUserPassword.vue'

	
export default{
	name: 'Forget',
	data(){
		return{
			tipTxt:"提示语",
			tipShow:false,
			iphone_reg:/^1[3|4|5|7|8][0-9]{9}$/,    //  判断手机号码
			userNames:'',     // 手机号码
			vCodes:'',    // 验证码
			userPasswords:''   // 密码
		}
	},
	components:{
		UserName,
		UserPassword,
		VCode,
		AgainUserPassword
	},
	methods:{
		userName(uName){  // 用户名-手机号码
			this.userNames = uName;
			if(uName===''||uName===null){
				this.tipShow = true;
				this.tipTxt = '手机号码不为空'
			}else if(!this.iphone_reg.test(uName)){
				this.tipShow = true;
				this.tipTxt = '手机号码格式错误'
			}else{
				this.tipShow = false;
				this.tipTxt = '',
				localStorage.sitename = uName;
			}
			//console.log('userName',uName);
		},
		userPassword(userpassword){  // 密码
			this.userPasswords = userpassword;
			if(this.userPasswords !==''){
				this.tipShow = false;
				this.tipTxt = '';
			}else{
				this.tipShow = true;
				this.tipTxt = '密码错误';
				return
			}
		},
		againUserpassword(value){ // 再次输入密码
			this.againUserPasswords = value;
			if(this.againUserPasswords!==this.userPasswords){
				this.tipShow = true;
				this.tipTxt = '两次密码输入不一致';
				return
			}else{
				this.tipShow = false;
				this.tipTxt = '';
				return
			}
		},
		vCode(vcode){  // 验证码
			this.vCodes = vcode;
			if(this.vCodes !==''||this.vCodes !==null){
				this.tipShow = false;
				this.tipTxt = '';
				return
			}else{
				this.tipShow = true;
				this.tipTxt = '验证码错误';
				return
			}
		},
		LoginBtn(){  // 登录按钮
			if(this.userNames==='' || this.userNames===null){
				this.tipShow = true;
				this.tipTxt = '手机号码不为空';
			}else if(!this.iphone_reg.test(this.userNames)){
				this.tipShow = true;
				this.tipTxt = '手机号码格式错误';
			}else if(this.vCodes==='' || this.vCodes.length!==6){
				this.tipShow = true;
				this.tipTxt = '验证码错误';
			}else if(this.userPasswords ===''||this.userPasswords===null){
				this.tipShow = true;
				this.tipTxt = '密码错误';
			}else if(this.againUserPasswords===''||this.againUserPasswords===null){
				this.tipShow = true;
				this.tipTxt = '密码不为空';
				return
			}else if(this.againUserPasswords!==this.userPasswords){
				this.tipShow = true;
				this.tipTxt = '两次输入密码不一致';
				return
			}else{
				this.$router.push({path:"/Login"});
				this.tipShow = false;
				this.tipTxt = '';
			}
		}
	}
}
</script>

<style scoped="scoped">
.login_content{
	padding: 0.8rem 0.4rem;
}	
.tip{
	text-align: center;
	font-size: 0.48rem;
	color: #f40;
}
.login_btn{
	width: 100%;
	height: 1.4rem;
	line-height: 1.4rem;
	text-align: center;
	background: #42B983;
	color: #fff;
	font-size: 0.64rem;
	border-radius: 0.2rem;
	margin: 0.6rem auto;
}
.btn{
	background:#6EA7D6;
	font-size: 0.48rem;
	border: none;
	padding: 0.16rem 0.32rem;
	color: #fff;
	outline: none;
	border-radius: 0.08rem;
}
.forget_password{
	
}







</style>