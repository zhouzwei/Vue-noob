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
	</div>
</template>

<script>
import TabNav from './TabNav.vue'	
	
	
export default{
	name: 'IndexPc3',
	data(){
		return{
			
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
