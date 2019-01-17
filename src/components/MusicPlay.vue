<template>
	<div>
		<!-- 导航栏 01-->
		<div class="tabNavPc_box">
			<div class="tabNavPc wrap">
				<section class="logo">
					<img class="logo_img" src="0.jpg" alt="" title="这是LOGO"/>
				</section>
				<section class="tabNavs">
					<TabNav></TabNav>
				</section>
			</div>
		</div>
		<!-- 导航栏 02 -->
		
		
		<section>
			<input type="range" />
			<audio :src="MusicUrl" controlsList="nodownload" controls="controls" autoplay="autoplay"></audio>
		</section>
		
		
		
	</div>
</template>

<script>
import TabNav from './TabNav.vue'	
	
	
export default{
	name: 'MusicPlay',
	data(){
		return{
			MusicUrl:'../../static/shibai.mp3',
			//MusicUrl:'http://qq249181841.6000y.com/swf/2013-3-4/112731586.swf'
		}
	},
	// 组件集合
	components:{
		TabNav
	},
	methods:{
		
	}
}
</script>

<style scoped="scoped">
.tabNavPc_box{
	width: 100%;
	height: 50px;
	background:#F2F2F2;
	position: relative;
	z-index: 20;
}	
.tabNavPc{
	height: 100%;
	display: flex;
}	
.logo{
	flex:2;
	background: #ccc;
}	
.logo_img{
	width: 100%;
	height: 100%;
	display: block;
}
.tabNavs{
	flex: 10;
}	


	
	
</style>




	
