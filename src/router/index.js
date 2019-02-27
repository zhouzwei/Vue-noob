import Vue from 'vue'
import Router from 'vue-router'
//import store from './store.js'

import Login from '@/components/Login'            // 登录
import Regs from '@/components/Regs'              // 注册
import Forget from '@/components/Forget'          // 忘记密码
import Home from '@/components/Home'              // 首页
import TabItem1 from '@/components/TabItem1'      // 计算器（目前功能不完善）
import TabItem2 from '@/components/TabItem2'      // 购物车
import TabItem3 from '@/components/TabItem3'      // 
import TabItem4 from '@/components/TabItem4'      // 话费充值
import TabItem5 from '@/components/TabItem5'      // css3应用
import PosBuy from '@/components/PosBuy'          // pos卡购买
import IndexPc from '@/components/IndexPc'        // pc端首页
import TabNav from '@/components/TabNav'          // 导航栏
import Banner from '@/components/Banner'          // 轮播图
import MusicPlay from '@/components/MusicPlay'    // 音乐播放器
import Slide from '@/components/Slide'            // 无缝自动播放图
import IndexPc2 from '@/components/IndexPc2'      
import IndexPc3 from '@/components/IndexPc3'
import News from '@/components/News'              // 消息页面
import TodoMvc from '@/components/TodoMvc'        // todomvc
import City from '@/components/City'              // 城市选择
import PullRefresh from '@/components/PullRefresh'  // 下拉刷新
import Rate from '@/components/Rate'              // 评分



Vue.use(Router)

const routes=[
		{
	      path: '/Login',  // 登录
	      name: 'Login',
	      component: Login
	    },
	    {
	      path: '/Regs',  // 注册
	      name: 'Regs',
	      component: Regs
	    },{
	      path: '/Forget',  // 忘记密码
	      name: 'Forget',
	      component: Forget
	    },
	    {
	      path: '/Home',  // 首页
	      name: 'Home',
	      component: Home,
	      meta: {
	        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	      }
	    },
	    {
	      path: '/TabItem1',     // 计算器（目前功能不完善）
	      name: 'TabItem1',
	      component: TabItem1
	    },
	    {
	      path: '/TabItem2',   // 购物车
	      name: 'TabItem2',
	      component: TabItem2
	    },
	    {
	      path: '/TabItem3',  // 
	      name: 'TabItem3',
	      component: TabItem3
	    },
	    {
	      path: '/TabItem4',      // 话费充值
	      name: 'TabItem4',
	      component: TabItem4
	    },
	    {
	      path: '/TabItem5',   // css3应用
	      name: 'TabItem5',
	      component: TabItem5
	    },
	    {
	      path: '/City',   // 城市
	      name: 'City',
	      component: City
	    },
	    {
	      path: '/TodoMvc',  // todo
	      name: 'TodoMvc',
	      component: TodoMvc
	    },
	    {
	      path: '/News',    // 消息页面
	      name: 'News',
	      component: News
	    },
	    {
	      path: '/PosBuy',  // pos卡页面
	      name: 'PosBuy',
	      component: PosBuy
	    },
	    {
	      path: '/IndexPc',  // pc端首页
	      name: 'IndexPc',
	      component: IndexPc
	    },
	    {
	      path: '/Banner',  // 轮播图
	      name: 'Banner',
	      component: Banner
	    },
	    {
	      path: '/TabNav',  // 导航栏
	      name: 'TabNav',
	      component: TabNav
	    },
	    {
	      path: '/MusicPlay',  // 播放器
	      name: 'MusicPlay',
	      component: MusicPlay
	    },
	    {
	      path: '/IndexPc2',  // 
	      name: 'IndexPc2',
	      component: IndexPc2
	    },
	    {
	      path: '/IndexPc3',
	      name: 'IndexPc3',
	      component: IndexPc3
	    },
	    {
	      path: '/Slide',   // 自动播放图
	      name: 'Slide',
	      component: Slide
	    },
	    {
	      path: '/PullRefresh',  // 下拉刷新
	      name: 'PullRefresh',
	      component: PullRefresh
	    },
	    {
	      path: '/Rate',  // 评分
	      name: 'Rate',
	      component: Rate
	    },	    
	    {
		   path: '/',
		   redirect: '/Login'       //重定向到哪个页面设置
		}
]

// 页面刷新时，重新赋值token
//if (window.localStorage.getItem('token')) {
//  store.commit(types.LOGIN, window.localStorage.getItem('token'))
//}

const router = new Router({
    mode: 'history',    //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

//router.beforeEach((to, from, next) => {
//  if (to.matched.some(r => r.meta.requireAuth)) {   // 判断该路由是否需要登录权限
//      if (store.state.token) {
//          next();
//      }
//      else {
//          next({
//              path: '/login',
//              query: {redirect: to.fullPath}
//          })
//      }
//  }
//  else {
//      next();
//  }
//})


//export default new Router({
//	mode: 'history',    //切换路径模式，变成history模式
//	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
//	routes	
//})


export default router
