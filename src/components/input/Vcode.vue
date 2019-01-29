<template>
<section class="form-group">
	<label for="Vcode">验证码:</label>
	<input 
		type="text" 
		v-model.trim="Vcodes" 
		@keyup="Vcode" 
		ref="Vcode" 
		id="Vcode" 
		maxlength="6" 
		placeholder="请输入验证码"
	/>
	<span class="vcode_btn" v-show="show_code" @click="setCode">{{yzm_txt}}</span>
	<span class="vcode_btn" v-show="!show_code">倒计时 {{count}} s</span>
</section>
</template>

<script>
export default{
	data(){
		return{
			Vcodes:"",
			yzm_txt:"获取验证码",
			show_code:true,
			count:'',
			iphone_reg:/^1[3|4|5|7|8][0-9]{9}$/,
			num:10
		}
	},
	methods:{
		Vcode(){
			this.$emit('v-code', this.Vcodes);
			if(this.yzm_txt=== "重新获验证码"){
				this.Vcodes = ''
				alert('验证码超时，请重新获取!')
				return
			}
		},
		setCode(){
			//var iphoneTxt = localStorage.sitename;			
			//var iphoneTxt = $('#userName').val();
			var iphoneTxt = document.getElementById('userName').value;
			if(iphoneTxt==='' || iphoneTxt===null){
				alert('电话号码不能为空');
			}else if(!this.iphone_reg.test(iphoneTxt)){
				alert('手机号码有误');
			}else{
				//localStorage.sitename = '';
				const TIME_COUNT = this.num;
				if(!this.timer){ 
					this.count = TIME_COUNT;
					this.show_code = false;
					this.yzm_txt = "获取验证码";
					this.timer = setInterval(()=>{
						if(this.count>0 && this.count<=TIME_COUNT){
							this.count--;
						}else{
							this.show_code = true;
							clearInterval(this.timer);
							this.yzm_txt = "重新获验证码";
							this.timer = null;
						}
					},1000)
				}				
			}
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
.vcode_btn{
	font-size: 0.56rem;
	width: 3.8rem;
	height: 1.4rem;
	line-height: 1.4rem;
	background: #42B983;
	text-align: center;
	color: #fff;
	border-radius: 0.08rem;
	position: absolute;
	top: 0;
	right:1.68rem;
}
.form-group input:focus{
	border: 1px solid #333;
	box-shadow: 0px 0px 1px #ADFF2F;
}

</style>