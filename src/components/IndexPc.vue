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
		<!--  banner图  01 -->
		<section class="banner_box">
			<Banner></Banner>
			
		</section>
		<!--  banner图  02 -->
		<!-- input 复选框的全选/全不选  01 -->
		<section class="input_checked_box">
			<section class="input_checked wrap">
				<section style="height: 30px;">
					<section
						class="list_page"
						v-for="(checkbox,index) in checkboxs"
						:key="index"
					>
						<label :for="checkbox.name">{{checkbox.checkboxTxt}}</label>
						<input :id="checkbox.id" class="checkbox" type="checkbox" />	
					</section>
				</section>
				<section style="height: 30px;margin-top: 5px;">
					<section class="list_page" >
						<label for="name_s">全选</label>
						<input id="name_s" type="checkbox" @click="selectClick"/>
					</section>
					<section class="list_page" >
						<label for="name_n">反选</label>
						<input id="name_n" type="checkbox" @click="n_selectClick"/>
					</section>
				</section>
			</section>
		</section>
		<!-- input 复选框的全选/全不选  02 -->
		<!-- 使用css3做移动效果 01  -->
		<section class="content">
			<section class="wrap content_m">
				<section class="move_btn" @click="moveBtn">点击移动方块</section>
				<section class="moving_box">
					<section class="movingBox" id="movingBox">我会旋转移动</section>
				</section>
			</section>
		</section>
		<!-- 使用css3做移动效果 02 -->
		<!-- 点击显示隐藏内容 01 -->
		<section class="toggle_boxs">
			<section class="toggle_less wrap">
				<ul class="clearfix">
					<li class="toggle_less_li"
						:class="{toggle_less_active:currentIndex2 === index}"
						v-for="(litem,index) in litems"
						@click="onPassage(index,litem)"
						:key="index"
					>
						{{litem.litemTxt}}
						<section class="passage_box" v-show="index === currentIndex2">
							<p
								v-for="(passage,index) in litem.passages"
								:key="index"
							>	
								{{passage.passageTxt}}
							</p>
						</section>
					</li>
				</ul>
				<section>
					<button class="btn active_btn" @click="activeBtn">点击显示隐藏文本</button>
					<section class="btn_txt" v-show="hidden">需要显示隐藏的文本</section>
				</section>
			</section>
		</section>		
		<!-- 点击显示隐藏内容 02 -->
		<!-- 自动移动、滑动图片 01 -->
		<Slide></Slide>
		<!-- 自动移动、滑动图片 02 -->
		
		
		
		<section style="height: 200px;"></section>
		<!-- 回到顶部 01 -->
		<section class="go_hack" v-show="!show" @click="goHack">
			返回顶部
		</section>
		<!-- 回到顶部 02 -->
		
	</div>
</template>

<script>
import TabNav from './TabNav.vue'	
import Banner from './Banner.vue'	
import Slide from './Slide.vue'	
	
	
	
export default{
	name: 'IndexPc',
	data(){
		return{
			show:true,
			hidden:true,					
			currentIndex1:0,
			currentIndex2:0,
			zIndex:0,
			timer:null,  // 定时器
			checkboxs:[ // 复选框全选、全不选
				{
					checkboxTxt:'张三',
					name:"name1",
					id:'name1'
				},
				{
					checkboxTxt:'李四',
					name:"name2",
					id:'name2'
				},
				{
					checkboxTxt:'王五',
					name:"name3",
					id:'name3'
				},
				{
					checkboxTxt:'赵六',
					name:"name4",
					id:'name4'
				}
			],
			litems:[
				{
					litemTxt:'内容一',
					passages:[
						{passageTxt:'1）创建新节点'},
						{passageTxt:'createDocumentFragment() //创建一个DOM片段'},
						{passageTxt:'createElement() //创建一个具体的元素'},
						{passageTxt:'createTextNode() //创建一个文本节点'}
					]
				},
				{
					litemTxt:'内容二',
					passages:[
						{passageTxt:'2）添加、移除、替换、插入'},
						{passageTxt:'appendChild() //添加'},
						{passageTxt:'removeChild() //移除'},
						{passageTxt:'replaceChild() //替换'},
						{passageTxt:'insertBefore() //插入 '}
					]
				},
				{
					litemTxt:'内容三',
					passages:[
						{passageTxt:'3）查找'},
						{passageTxt:'getElementsByTagName() //通过标签名称'},
						{passageTxt:'getElementsByName() //通过元素的Name属性的值'},
						{passageTxt:'getElementById() //通过元素Id，唯一性'}
					]
				},
				{
					litemTxt:'内容四',
					passages:[
						{passageTxt:'闭包的理解、作用'},
						{passageTxt:'作用：匿名自执行函数、缓存、实现封装（主要作用）、实现面向对象中的对象'}
					]
				},
				{
					litemTxt:'内容五',
					passages:[
						{passageTxt:'1）创建新节点'},
						{passageTxt:'createDocumentFragment() //创建一个DOM片段'},
						{passageTxt:'createElement() //创建一个具体的元素'},
						{passageTxt:'createTextNode() //创建一个文本节点'}
					]
				}
			]
			
			
		}
	},
	// 组件集合
	components:{
		TabNav,
		Banner,
		Slide
	},
	methods:{
		selectClick(e){
			var arr = document.getElementsByClassName('checkbox');
			if(e.target.checked){
				for(var i=0;i<arr.length;i++){
					arr[i].checked = true;
				}
			}else{
				for(var i=0;i<arr.length;i++){
					arr[i].checked = false;
				}
			}
		},
		n_selectClick(e){
			var arr = document.getElementsByClassName('checkbox');
			for(var i=0;i<arr.length;i++){
				arr[i].checked = !arr[i].checked;
			}
		},
		moveBtn(){
			var movingBox = document.getElementById('movingBox');
			movingBox.classList.add('onMoving');
			setTimeout(()=>{
				movingBox.classList.remove('onMoving');
			},10500)
		},
		R_moveBtn(){
			var movingBox = document.getElementById('movingBox');
			movingBox.classList.remove('onMoving');
		},
		//
		onPassage(index,litem){
			this.currentIndex2 = index;			
		},
		// 点击显示隐藏内容
		activeBtn(){
			this.hidden = !this.hidden
		},
		// goHack 返回顶部事件
		goHack(){
			//var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			document.documentElement.scrollTop = 0;
			this.show = true;
		},
		// 滚动屏幕事件
		fullScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let viewHeight = document.documentElement.clientHeight;
			//console.log(scrollTop)
			if(scrollTop>viewHeight-400){
				this.show = false;
			}else{
				this.show = true;
			}
		}
	},
	mounted(){     //   挂载结束
    	//this.fullScroll()
    	window.addEventListener('scroll', this.fullScroll);
  	},
	beforeUpdate(){    //  数据跟新之前
		//this.fullScroll();
	},
	updated(){    // 数据更新完成
		//this.fullScroll();
		//this.R_moveBtn();
	},
  	destroyed(){  //  销毁完成状态 
  		//this.fullScroll();
  		//this.show = true;
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
/* banner */
.banner_box{
	width: 100%;
	height: 500px;
	position: relative;
}
/* 全反选 */
.input_checked_box{
	width: 100%;
	height: 200px;
}
.input_checked{
	height: 100%;
	background: #f2f2f2;
	padding: 20px;
	box-sizing: border-box;
}
.list_page{
	float: left;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	margin-right: 15px;
	margin-bottom: 15px;
}
.list_page label{
	float:left;
	margin-right: 2px;
}
.list_page input{
	float: left;
	width: 18px;
	height: 18px;
	margin-top: 6px;
}

.content{
	height: 1000px;
}
.content_m{
	background:#DAA520;
	height: 100%;
	padding: 10px 0;
	box-sizing: border-box;
}
.move_btn{
	width: 120px;
	height: 25px;
	margin:0 auto;
	line-height: 25px;
	background: #42B983;
	color: #fff;
	text-align: center;
	font-size: 16px;
	cursor: pointer;
	border-radius: 3px;
}
.moving_box{
	width:100%;
	height: 800px;
	position: relative;
	margin-top: 35px;
	background: #eee;
}
.movingBox{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	position: absolute;
	left: 0;
	top: 0;
	background: #0000FF;
	font-size: 12px;
	color: #fff;
	line-height: 80px;
}
@keyframes moving{
	0%{
		left:0px;
		transform: rotate(0);
	}
	12.5%{
		left:610px;
		transform: rotate(1800deg);
	}
	25%{
		left:1220px;
		top:0px;
		transform: rotate(3600deg);
	}
	50%{
		left: 1220px;
		top:720px;
		transform: rotate(5400deg);
	}
	62.5%{
		left: 610px;
		top:720px;
		transform: rotate(7200deg);
	}
	75%{
		left: 0px;
		top:720px;
		transform: rotate(9000deg);
	}
	100%{
		left: 0px;
		top:80px;
		transform: rotate(10800deg);
	}
}
.onMoving{
	animation:moving 10s linear;
	/*infinite*/
}
.toggle_boxs{
	height: 350px;
	width: 100%;
	background: #f2f2f2;
}
.toggle_less{
	height: 100%;
	padding: 20px 0;
	box-sizing: border-box;
}
.toggle_less ul{
	width: 100%;
	height: 120px;
	padding-bottom: 25px;
	display: flex;
}
.toggle_less_li{
	flex: 1;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
	height: 30px;
	padding: 0 15px;
	cursor: pointer;
}
.toggle_less_active{	
	background: #ff0;
}
.passage_box{
	margin-top: 5px;
}
.passage_box p{
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 5px;
	text-align: left;
	cursor:auto;
}
.active_btn{
	width: 150px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	display: block;
	font-size: 16px;
	margin: 0 auto;
	outline: none;
	background: #f00;
	color: #fff;
	cursor: pointer;
}
.btn_txt{
	font-size: 14px;
	text-align: center;
	margin-top: 5px;
}




/* 返回顶部css */
.go_hack{
	width: 80px;
	height: 60px;
	background: #42B983;
	color: #fff;
	line-height: 60px;
	text-align: center;
	position: fixed;
	bottom: 50px;
	right: 30px;
	font-size: 16px;
	cursor: pointer;
}


	
	
</style>
