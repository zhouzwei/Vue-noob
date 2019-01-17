<template>
<div>
	<section class="title">CSS3应用</section>
	<section class="mainList">
		<section>
			<button class="animate_btn1" @click="showBox1=!showBox1">1点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="lightSpeedIn" leave-active-class="lightSpeedOut">
            	<p class="animated animate_btn1_box" v-show="showBox1"></p>
        	</transition>
		</section>
		
		<section>
			<button class="animate_btn1" @click="showBox2=!showBox2">2点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="rotateInDownLeft" leave-active-class="rotateInDownRight">
            	<p class="animated animate_btn1_box" v-show="showBox2"></p>
        	</transition>
		</section>
		
		<section>
			<button class="animate_btn1" @click="showBox3=!showBox3">3点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="rotateInUpLeft" leave-active-class="rotateInUpRight">
            	<p class="animated animate_btn1_box" v-show="showBox3"></p>
        	</transition>
		</section>
		
		<section>
			<button class="animate_btn1" @click="showBox4=!showBox4">4点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="rollIn" leave-active-class="rollOut">
            	<p class="animated animate_btn1_box" v-show="showBox4"></p>
        	</transition>
		</section>
		
		<section>
			<button class="animate_btn1" @click="showBox5=!showBox5">5点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="swing" leave-active-class="tada">
            	<p class="animated animate_btn1_box" v-show="showBox5"></p>
        	</transition>
		</section>
		
		<section>
			<button class="animate_btn1" @click="showBox6=!showBox6">6点击显示隐藏，做cs3运动</button>
			<transition enter-active-class="bounceInLeft" leave-active-class="bounceInRight">
            	<p class="animated animate_btn1_box" v-show="showBox6"></p>
        	</transition>
		</section>
		
	</section>
</div>
</template>

<script>
export default{
	name: 'TabItem5',
	data(){
		return{
			showBox1:true,
			showBox2:true,
			showBox3:true,
			showBox4:true,
			showBox5:true,
			showBox6:true
		}
	}
}
</script>

<style scoped="scoped">
.title{
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	text-align: center;
	color: #fff;
	background: #f40;
	position: fixed;
	left: 0;
	top: 0;
}	
.mainList{
	padding: 50px 10px 0 10px;
}
.animate_btn1{
	height: 30px;
	padding: 0 5px;
	display: block;
	margin: 0 auto 15px;
	outline: none;
}
.animate_btn1_box{
	width: 40px;
	height: 40px;
	background: #f40;
	margin: 0 auto 15px;
}

	
	
</style>
