<template>
	<section class="tabNav">
		<ul>
			<router-link 
				tag="li"
				class="tabNav_li"
				active-class="active"
				:class="{active:current === index}"
				v-for="(item,index) in items"
				:key="index"
				:to="{ path:'/'+item.pathed }"
			>
				{{item.itemTxt}}
				<ol class="tabNav_ol">
					<router-link 
						tag="li"
						class="tabNav_ol_li"
						v-for="(list,index) in item.lists"
						:key="index"
						@click="listClick(index)"
						:to="{ path:'/'+list.pathed }"
					>
						{{list.listTxt}}
					</router-link>
				</ol>
			</router-link>
		</ul>
	</section>
</template>

<script>
export default{
	name: 'TabNav',
	data(){
		return{
			current:'0',
			items:[ // 导航栏数据  开始
				{
					itemTxt:'首页1',
					pathed:'IndexPc'
				},
				{
					itemTxt:'首页2',
					pathed:'IndexPc2',
					lists:[
						{
							listTxt:'音乐播放器',    //MusicPlay
							pathed:'IndexPc3'
						},
						{
							listTxt:'12',
							pathed:'IndexPc2'
						},
						{
							listTxt:'音乐播放器',
							pathed:'MusicPlay'
						}
					]
				},
				{
					itemTxt:'首页3',
					pathed:'TabItem1',
					lists:[
						{
							listTxt:'音乐播放器',    // MusicPlay
							pathed:'MusicPlay'
						},
						{
							listTxt:'32',
							pathed:'IndexPc2'
						},
						{
							listTxt:'33',
							pathed:'IndexPc3'
						}
					]
				},
				{
					itemTxt:'首页4',
					pathed:'TabItem1',
					lists:[
						{
							listTxt:'31',
							pathed:'TabItem1'
						},
						{
							listTxt:'32',
							pathed:'TabItem1'
						}
					]
				},
				{
					itemTxt:'首页5',
					pathed:'TabItem1',
					lists:[
						{
							listTxt:'41',
							pathed:'TabItem1'
						},
						{
							listTxt:'42',
							pathed:'TabItem1'
						}
					]
				}
			] // 导航栏数据  结束
		}
	},
	methods:{
		listClick(index){
			alert(index)
			console.log(this.current)
		}
	}
}
	
</script>

<style scoped="scoped">
.tabNav ul{
	display: flex;
	width: 100%;
}	
.tabNav_li{
	flex: 1;
	font-size: 14px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
	margin-left: 15px;
	background: #eee;
}	
.active{
	color: #fff;
	background: #f40;
}	
.tabNav_li:hover{
	color: #fff;
	background: #f40;
}	
.tabNav_li:hover .tabNav_ol{
	display: block;
}

.tabNav_ol{
	display: none;
}	
.tabNav_ol_li{
	height: 25px;
	line-height: 25px;
	background: #eee;
	color: #333;
}	
.tabNav_ol_li:hover{
	color: #fff;
	background: #f80;
}	
		
</style>