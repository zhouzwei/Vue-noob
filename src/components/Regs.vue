<template>
<div class="regs_content">
	<section style="text-align: center;margin: 15px 0;">注册</section>
	<UserName @user-name="userName"></UserName>
	<VCode @v-code="vCode"></VCode>
	<Email @e-mail="Emails"></Email>
	<IDcard @id-cards="IDCard"></IDcard>
	<UserPassword @user-password="userPassword"></UserPassword>
	<AgainUserPassword @againuser-password="againUserpassword"></AgainUserPassword>
	<!-- 提示语  -->
	<section class="tip" v-show="tipShow">{{tipTxt}}</section>
	<section class="regs_btn_box">
		<button class="regs_btn" @click="regsBtn">完成注册</button>
	</section>
	<p class="has_login" @click="hasLogin">有账号？马上登录</p>
</div>
</template>

<script>
import	UserName from './input/UserName.vue'
import	VCode from './input/Vcode.vue'	
import	Email from './input/Email.vue'
import	IDcard from './input/IDcard.vue'
import	UserPassword from './input/UserPassword.vue'
import	AgainUserPassword from './input/AgainUserPassword.vue'	
	
	
	
export default{
	name: 'Regs',
	data(){
		return{
			tipTxt:"提示语",
			tipShow:false,
			iphone_reg:/^1[3|4|5|7|8][0-9]{9}$/,  // 判断手机号码正则
			email_reg:/^([\w\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,  // 判断邮箱正则
			idcard_reg:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,    // 判断身份证正则
			userNames:'',      // 手机号码                               
			vCodes:'',    // 验证码
			userPasswords:'',  // 密码
			againUserPasswords:'',  // 再次输入密码
			eMails:'',   // 邮箱
			idCards:'',     // 身份证号码
			len:6    // 字符长度
		}
	},
	components:{
		UserName,
		UserPassword,
		VCode,
		Email,
		IDcard,
		AgainUserPassword
	},	
	methods:{
		userName(uName){  // 用户名-手机号码
			this.userNames = uName;
			if(uName===''||uName===null){
				this.tipShow = true;
				this.tipTxt = '手机号码不为空';
				return
			}else if(!this.iphone_reg.test(uName)){
				this.tipShow = true;
				this.tipTxt = '手机号码格式错误';
				return
			}else{
				this.tipShow = false;
				this.tipTxt = '',
				localStorage.sitename = uName;
				return
			}
			//console.log('userName',uName);
		},
		userPassword(userpassword){  // 密码
			this.userPasswords = userpassword;
			if(this.userPasswords !==''||this.userPasswords !==null){
				this.tipShow = false;
				this.tipTxt = '';
				return
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
		Emails(value){  // 邮箱
			this.eMails = value;
			if(value ==='' || value===null){
				this.tipShow = true;
				this.tipTxt = '请输入邮箱';
				return
			}else if(!this.email_reg.test(value)){
				this.tipShow = true;
				this.tipTxt = '邮箱格式错误';
				return
			}else{
				this.tipShow = false;
				this.tipTxt = '';
				return
			}
		},
		IDCard(value){  // 身份证号码
			this.idCards = value;
			if(value ==='' || value===null){
				this.tipShow = true;
				this.tipTxt = '请输入身份证号码';
				return
			}else if(!this.idcard_reg.test(value)){
				this.tipShow = true;
				this.tipTxt = '请输入正确的身份证号码';
				return
			}else{
				this.tipShow = false;
				this.tipTxt = '';
				return
			}
		},
		regsBtn(){  // 注册按钮
			if(this.userNames===''||this.userNames===null){
				this.tipShow = true;
				this.tipTxt = '手机号码不能为空';
				return
			}else if(!this.iphone_reg.test(this.userNames)){
				this.tipShow = true;
				this.tipTxt = '手机号码输入错误';
				return
			}else if(this.vCodes===''||this.vCodes===null){
				this.tipShow = true;
				this.tipTxt = '验证码不为空';
				return
			}else if(this.vCodes<=this.len){
				this.tipShow = true;
				this.tipTxt = '验证码输入错误';
				return
			}else if(this.eMails===''||this.eMails===null){
				this.tipShow = true;
				this.tipTxt = '邮箱不为空';
				return
			}else if(!this.email_reg.test(this.eMails)){
				this.tipShow = true;
				this.tipTxt = '邮箱格式错误';
				return
			}else if(this.idCards===''||this.idCards===null){
				this.tipShow = true;
				this.tipTxt = '身份证号码不为空';
				return
			}else if(!this.idcard_reg.test(this.idCards)){
				this.tipShow = true;
				this.tipTxt = '请输入正确的身份证号码';
				return
			}else if(this.userPasswords===''||this.userPasswords===null){
				this.tipShow = true;
				this.tipTxt = '密码不为空';
				return
			}else if(this.againUserPasswords===''||this.againUserPasswords===null){
				this.tipShow = true;
				this.tipTxt = '密码不为空';
				return
			}else if(this.againUserPasswords!==this.userPasswords){
				this.tipShow = true;
				this.tipTxt = '两次输入密码不一致';
				return
			}else{
				this.tipShow = false;
				this.tipTxt = '';
				this.$router.push({path:"/Login"});
				return
			}
		},
		hasLogin(){  // 有账号 马上登录
			this.$router.push({path:"/Login"});
		}
	}
}
</script>

<style scoped="scoped">
.regs_content{
	padding: 0.8rem 0.4rem;
}
.tip{
	text-align: center;
	font-size: 0.48rem;
	color: #f40;
}
.regs_btn_box{
	padding: 15px 0;
}
.regs_btn{
	width: 100%;
	display: block;
	line-height: 1.76rem;
	font-size: 0.64rem;
	color: #fff;
	background: #42B983;
	border-radius: 0.2rem;
	outline: none;
}	
.has_login{
	font-size: 0.48rem;
	color: #f40;
}
</style>