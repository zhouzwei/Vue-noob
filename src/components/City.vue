<template>
<div>
	<section class="search_box">
		<input 
			type="text" 
			class="search_input" 
			placeholder="请输入城市"
			v-model.trim="searchInput"
			@keyup="handleSearchInput"
		/>
		<button class="search_btn" @click="cancelBtn">取消</button>
	</section>
	<section class="content_box">
		<!-- 当前城市  -->
		<section class="current_city_box">
			<section class="current_city_title">当前城市</section>
			<section class="current_city">{{currentCity}}</section>
		</section>
		<!-- 历史选择城市  -->
		<section class="history_city_box">
			<section class="history_city_title">历史访问城市</section>
			<section class="history_city">
				<ol class="clearfix">
					<li 
						class="history_city_li"
						v-for="(historyCity,index) in historyCitys"
						:key="index"
						@click="handleHistoryCity(index)"
					>{{historyCity}}
					</li>
				</ol>
			</section>
		</section>
		<!-- 热门城市  -->
		<section class="hot_city_box">
			<section class="hot_city_title">热门城市</section>
			<section class="hot_city">
				<ol class="clearfix">
					<li
						class="hot_city_li"
						v-for="(hotCity,index) in hotCitys"
						:key="index"
						@click="handleHotCity(index)"
					>{{hotCity.hotCityTxt}}
					</li>
				</ol>
			</section>
		</section>
	</section>
	
	<!-- 城市选择  -->
	<ul class="all_citys_list" v-show="showCitys">
		<li 
			class="city_single"
			v-for="(item,index) in items"
			:key="index"
			@click="citySelect(index)"
		>{{item.citytxt}}
		</li>
	</ul>
	<!-- 右侧26个字母 -->
	<section class="alphabet_box" v-show="showCitys">
		<section 
			class="page"
			v-for="(page,index) in pages"
			:key="index"
			@click="handleAlphabet(index)"
		>{{page}}
		</section>
	</section>
	
</div>
</template>

<script>
export default{
	name: 'City',
	data(){
		return{
			currentCity:'广州',
			showCitys:false,
			searchInput:'',
			citys:[
				
			],
			historyCitys:[],
			hotCitys:[
				{hotCityTxt:'北京'},
				{hotCityTxt:'上海'},
				{hotCityTxt:'广州'},
				{hotCityTxt:'深圳'},
				{hotCityTxt:'杭州'},
				{hotCityTxt:'南昌'}
			],
			pages:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
		}
	},
	methods:{
		handleSearchInput(){ // 所有城市显示
			this.showCitys = true;
		},
		fatch(){  // api
			var _this=this;
			_this.$http.get('static/citys.json').then(function(res){
				_this.citys=res.data;
			}).catch(function(err){
				console.log(err);
			})
		},
		citySelect(index){  // 城市列表选择
			this.currentCity = this.items[index].citytxt.split("市")[0];    //  split 把字符串切割成数组
			this.historyCitys.unshift(this.currentCity);
			this.heavy();
			this.searchInput = '';
			this.showCitys = false;
		},
		cancelBtn(){  // 取消按钮
			this.searchInput = '';
			this.showCitys = false;
		},
		handleHotCity(index){  // 热门城市
			this.currentCity = this.hotCitys[index].hotCityTxt;
			this.historyCitys.unshift(this.currentCity);
			this.heavy();
		},
		handleHistoryCity(index){ // 历史访问城市点击事件
			this.currentCity = this.historyCitys[index];
			this.historyCitys.unshift(this.currentCity);
			this.heavy();
		},
		handleAlphabet(index){  // 右侧26个字母点击事件
			console.log(this.pages[index]);
		},
		heavy(){  // 数组去重
			if(this.historyCitys.length > 1){
				var arr = this.historyCitys
				this.historyCitys = Array.from(new Set(arr));
			}
			if(this.historyCitys.length > 3){
				this.historyCitys.length = 3
			}
		}
	},
	computed:{   // 计算城市属性，匹配城市关键字
		items:function(index){
			var arry=[];
			for( var i=0;i<this.citys.length;i++ ){
				if( this.citys[i].citytxt.search(this.searchInput) != -1 ){   // 匹配关键字 -1
					arry.push(this.citys[i]);
				}				
			}
			return arry
		}
	},
	mounted(){
		//获取数据
		this.fatch();
	}
}
</script>

<style scoped="scoped">
/* 搜索头部  */
.search_box{
	height: 1.6rem;
	width: 100%;
	padding: 0.2rem 0.4rem;
	position: fixed;
	left: 0;
	top: 0;
	background: #f2f2f2;
	box-sizing: border-box;
}	
.search_input{
	float: left;
	width: 70%;
	height: 1.2rem;
	font-size: 0.56rem;
	border: 1px solid #999;
	outline: none;
	padding: 0 0.2rem;
	box-sizing: border-box;
	border-radius: 0.08rem;
}	
.search_btn{
	width: 20%;
	float: right;
	height: 1.2rem;
	text-align: center;
	line-height: 1.2rem;
	background: #42B983;
	color: #fff;
	font-size: 0.56rem;
	border-radius: 0.2rem;
	outline: none;
}
/* 内容部分  */	
.content_box{
	padding: 1.8rem 0px 0 0px;
	background: #f2f2f2;
	min-height: 8rem;
}	
.current_city_title{
	padding: 0 0.4rem;
	font-size: 0.48rem;
	line-height: 0.96rem;
}
.current_city{
	background:#fff;
	font-size: 0.56rem;
	line-height: 1.76rem;
	padding: 0 0.4rem;
}
.history_city_title{
	padding: 0 0.4rem;
	font-size: 0.48rem;
	line-height: 0.96rem;
}
.history_city{
	height: 1.76rem;
	line-height: 1.76rem;
	background: #fff;
	padding: 0 0.4rem;
	overflow: hidden;
}
.history_city_li{
	width: 33.33%;
	height: 1.76rem;
	float: left;
	font-size: 0.56rem;
	padding: 0 0.2rem;
	box-sizing: border-box;
}	
.hot_city_title{
	padding: 0 0.4rem;
	font-size: 0.48rem;
	line-height: 0.96rem;
}
.hot_city{
	padding: 0.2rem 0.4rem;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
	background: #fff;
}
.hot_city_li{
	height: 1.36rem;
	width:4.72rem;
	padding: 0 0.2rem;
	float: left;
	text-align: left;
	line-height: 1.36rem;
	font-size: 0.56rem;
	box-sizing: border-box;
	overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
/* 所有城市列表  */
.all_citys_list{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 1.6rem;
	background: rgba(0,0,0,0.5);
	overflow-y: auto;
	padding-bottom: 1.6rem;
}
.city_single{
	padding: 0 0.2rem;
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.56rem;
	background: #fff;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
}
/* 右侧26个字母表  */
.alphabet_box{
	width: 0.96rem;
	height: 100%;
	position: fixed;
	top: 1.6rem;
	right: 0.4rem;
	padding: 1.2rem 0;
	box-sizing: border-box;
}
.page{
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: right;
	color: #42B983;
	font-size: 0.48rem;
	z-index: 3;
}







	
	
	
	
	
	
	
</style>
