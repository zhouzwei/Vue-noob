import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

var state={
	count:2,
	currentIndex:0,
	currentIndex2:0,
	currentIndex3:0,
	showDisplay:true
}

const mutations={
	//处理数据变化
	tabToggleClicks(state){
		state.count
	},
	judgeToggleClick(state){
		state.count
	},
	provinceToggleClick(state){
		state.count
	},
	handleClickBtn(){
		//this.$router.push({path:"/TabItem3"});
		window.location.href="./IndexPc"
	}
}

const actions={
	//处理你要干什么，异步请求、判断、流程控制
	tabToggleClick:({commit},index)=>{   // 个人版商家版事件切换
		commit('tabToggleClicks')
		state.currentIndex = index
		if(state.currentIndex === 0){  //  个人版
			if(state.currentIndex2 === 0){ // 否
				state.count = 2	
			}else if(state.currentIndex2 === 1){ // 是
				if(state.currentIndex3 === 0){   // 省内
					state.count = 16
				}else if(state.currentIndex3 === 1){  // 省外
					state.count = 26
				}
			}
		}else if(state.currentIndex === 1){  // 商家版
			if(state.currentIndex2 === 0){ // 否
				state.count = 6	
			}else if(state.currentIndex2 === 1){ // 是
				if(state.currentIndex3 === 0){   // 省内
					state.count = 20
				}else if(state.currentIndex3 === 1){  // 省外
					state.count = 30
				}
			}
		}
	},
	judgeToggleClick:({commit},index)=>{ // 是否要实物事件切换
		state.currentIndex2 = index
		commit('judgeToggleClick')
		if(state.currentIndex2 === 0){ // 否
			state.showDisplay = true
			if(state.currentIndex === 0){ // 个人版
				state.count = 2	
			}else if(state.currentIndex === 1){ // 商家版
				state.count = 6	
			}
		}else if(state.currentIndex2 === 1){ // 是
			state.showDisplay = false
			if(state.currentIndex === 0){ // 个人版					
				if(state.currentIndex3 === 0){ // 省内
					state.count = 16
				}else if(state.currentIndex3 === 1){ // 省外
					state.count = 26
				}
			}else if(state.currentIndex === 1){ // 商家版
				if(state.currentIndex3 === 0){ // 省内
					state.count = 20
				}else if(state.currentIndex3 === 1){ // 省外
					state.count = 30
				}
			}
		}
	},
	provinceToggleClick:({commit},index)=>{ // 省内省外事件切换
		state.currentIndex3 = index
		commit('provinceToggleClick')
		if(state.currentIndex3 === 0){ // 省内
			if(state.currentIndex === 0){  // 个人
				state.count = 16
			}else if(state.currentIndex === 1){ // 商家
				state.count = 20
			}
		}else if(state.currentIndex3 === 1){ // 省外
			if(state.currentIndex === 0){  // 个人
				state.count = 26
			}else if(state.currentIndex === 1){ // 商家
				state.count = 30
			}
		}
	},
	handleClickBtn:({commit})=>{
		commit('handleClickBtn')
	}
}

const getters={
	count(state){
		return state.count
	},
	currentIndex(state){
		return state.currentIndex
	},
	currentIndex2(state){
		return state.currentIndex2
	},
	currentIndex3(state){
		return state.currentIndex3
	},
	showDisplay(state){
		return state.showDisplay
	},
}



export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})


















