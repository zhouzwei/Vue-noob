<template>
	<div>
		<ul class="pos_list">
			<router-link 
				tag="li"
				class="pos_list_tab"
				v-for="(list,index) in lists"
				:key="index"
				:to="{ path:'/'+list.pathed }"
			>
				<section class="pos_list_tab_lt">
					<img :src="list.posIcon" alt="" />
				</section>
				<section class="pos_list_tab_rt">
					<h3>{{list.h3}}</h3>
					<p>{{list.p}}</p>
				</section>
			</router-link>
		</ul>
		<section class="more_fun">更多新功能敬请期待</section>
	</div>
</template>

<script>
export default{
	name: 'TabItem3',
	data(){
		return{
			lists:[
				{
					posIcon:require('../assets/images/pos/pos-icon01.png'),
					h3:'标题一',
					p:'内容介绍一',
					pathed:'TodoMvc'
				},
				{
					posIcon:require('../assets/images/pos/pos-icon02.png'),
					h3:'标题二',
					p:'内容介绍二',
					pathed:'PosBuy'
				},
				{
					posIcon:require('../assets/images/pos/pos-icon03.png'),
					h3:'标题三',
					p:'内容介绍三',
					pathed:'TabItem3'
				},
				{
					posIcon:require('../assets/images/pos/pos-icon04.png'),
					h3:'标题四',
					p:'内容介绍四',
					pathed:'TabItem4'
				}
			]
		}
	}
}
</script>

<style scoped="scoped">
.pos_list{
	padding:0.8rem 0.32rem 0; 
}
.pos_list_tab{
	width: 100%;
    height: 5rem;
    background: #fab08d;
    border-radius: 0.2rem;
    margin-bottom: 0.32rem;
}
.pos_list_tab_lt{
	width: 5.6rem;
    height: 5rem;
    float: left;
    margin-right: 0.4rem;
    position: relative
} 
.pos_list_tab_lt img{
	width: 4.08rem;
    height: 3.52rem;
    position: absolute;
    left: 50%;
    margin-left: -2.04rem;
    top: 50%;
    margin-top: -1.76rem;
}
.pos_list_tab:nth-of-type(2) .pos_list_tab_lt img{
	width: 4rem;
    height: 2.96rem;
    position: absolute;
    left: 50%;
    margin-left: -2rem;
    top: 50%;
    margin-top: -1.48rem;	
}
.pos_list_tab:nth-of-type(3) .pos_list_tab_lt img{
	width: 4rem;
    height: 3.28rem;
    position: absolute;
    left: 50%;
    margin-left: -2rem;
    top: 50%;
    margin-top: -1.64rem;	
}
.pos_list_tab:nth-of-type(4) .pos_list_tab_lt img{
    width: 4.04rem;
    height: 3.48rem;
    position: absolute;
    left: 50%;
    margin-left: -2.02rem;
    top: 50%;
    margin-top: -1.74rem;	
}
.pos_list_tab_rt{
	float: left;
}
.pos_list_tab_rt h3{
	font-size: 0.76rem;
    color: #5a5a5a;
    margin-top: 1.8rem;
}
.pos_list_tab_rt p{
	font-size: 0.52rem;
    color: #656565
}
.more_fun{
	text-align: center;
    color: #d7d7d7;
    font-size: 0.48rem;
    margin-top: 0.8rem;
}



</style>