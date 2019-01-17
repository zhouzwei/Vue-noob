import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TabItem1 from '@/components/TabItem1'
import TabItem2 from '@/components/TabItem2'
import TabItem3 from '@/components/TabItem3'
import TabItem4 from '@/components/TabItem4'
import TabItem5 from '@/components/TabItem5'
import PosBuy from '@/components/PosBuy'
import IndexPc from '@/components/IndexPc'
import TabNav from '@/components/TabNav'
import Banner from '@/components/Banner'
import MusicPlay from '@/components/MusicPlay'
import Slide from '@/components/Slide'
import IndexPc2 from '@/components/IndexPc2'
import IndexPc3 from '@/components/IndexPc3'
import News from '@/components/News'



Vue.use(Router)

export default new Router({
	mode: 'history',    //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes: [
	    {
	      path: '/Home',
	      name: 'Home',
	      component: Home
	    },
	    {
	      path: '/TabItem1',
	      name: 'TabItem1',
	      component: TabItem1
	    },
	    {
	      path: '/TabItem2',
	      name: 'TabItem2',
	      component: TabItem2
	    },
	    {
	      path: '/TabItem3',
	      name: 'TabItem3',
	      component: TabItem3
	    },
	    {
	      path: '/TabItem4',
	      name: 'TabItem4',
	      component: TabItem4
	    },
	    {
	      path: '/TabItem5',
	      name: 'TabItem5',
	      component: TabItem5
	    },
	    {
	      path: '/News',
	      name: 'News',
	      component: News
	    },
	    {
	      path: '/PosBuy',
	      name: 'PosBuy',
	      component: PosBuy
	    },
	    {
	      path: '/IndexPc',
	      name: 'IndexPc',
	      component: IndexPc
	    },
	    {
	      path: '/Banner',
	      name: 'Banner',
	      component: Banner
	    },
	    {
	      path: '/TabNav',
	      name: 'TabNav',
	      component: TabNav
	    },
	    {
	      path: '/MusicPlay',
	      name: 'MusicPlay',
	      component: MusicPlay
	    },
	    {
	      path: '/IndexPc2',
	      name: 'IndexPc2',
	      component: IndexPc2
	    },
	    {
	      path: '/IndexPc3',
	      name: 'IndexPc3',
	      component: IndexPc3
	    },
	    {
	      path: '/Slide',
	      name: 'Slide',
	      component: Slide
	    },
	    {
		   path: '/',
		   redirect: '/Home'       //重定向到哪个页面设置
		}
  	]
})
