<template>
<div class="login_content">
	<section style="text-align: center;margin: 5px 0;">LOGIN</section>
	<UserName @user-name="userName"></UserName>
	<VCode @v-code="vCode"></VCode>
	<UserPassword @user-password="userPassword"></UserPassword>
	<!-- 提示语  -->
	<section class="tip" v-show="tipShow">{{tipTxt}}</section>
	<section class="login_btn" @click="LoginBtn">登录</section>
	<section class="clearfix">
		<button class="btn forget_password" @click="ForgetBtn">忘记密码</button>
		<button class="btn go_regs" @click="GoRegsBtn">马上注册</button>
	</section>
</div>
</template>

<script>
import	UserName from './input/UserName.vue'
import	UserPassword from './input/UserPassword.vue'
import	VCode from './input/Vcode.vue'


	
export default{
	name: 'Login',
	data(){
		return{
			tipTxt:"提示语",
			tipShow:false,
			iphone_reg:/^1[3|4|5|7|8][0-9]{9}$/,  // 判断手机号码
			userNames:'',     // 手机号码
			vCodes:'',    // 验证码
			userPasswords:'',   // 密码
			len:6   // 字符长度
		}
	},
	components:{
		UserName,
		UserPassword,
		VCode
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
				return
			}else if(!this.iphone_reg.test(this.userNames)){
				this.tipShow = true;
				this.tipTxt = '手机号码格式错误';
				return
			}else if(this.vCodes==='' || this.vCodes.length!==this.len){
				this.tipShow = true;
				this.tipTxt = '验证码错误';
				return
			}else if(this.userPasswords ===''||this.userPasswords===null){
				this.tipShow = true;
				this.tipTxt = '密码错误';
				return
			}else{
				this.$router.push({path:"/Home"});
				this.tipShow = false;
				this.tipTxt = '';
				return
			}
		},
		ForgetBtn(){  // 忘记密码按钮
			this.$router.push({path:"/Forget"});
		},
		GoRegsBtn(){   // 马上注册按钮
			this.$router.push({path:"/Regs"});
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