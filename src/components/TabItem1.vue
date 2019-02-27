<template>
	<div>
		<p class="tltle">超出手动可以滑动的导航栏</p>
		<section class="swiper_slide_nav">
			<section class="canopy"></section>
		    <div class="swiper-container swiper1">
		        <div class="swiper-wrapper">
		            <!--<div class="swiper-slide selected"><a href="near_classify_1.html">美食</a></div>
		            <div class="swiper-slide"><a href="javascript:;">电影</a></div>
		            <div class="swiper-slide"><a href="javascript:;">酒店</a></div>
		            <div class="swiper-slide"><a href="javascript:;">旅行</a></div>
		            <div class="swiper-slide"><a href="javascript:;">休闲娱乐</a></div>
		            <div class="swiper-slide"><a href="javascript:;">丽人</a></div>
		            <div class="swiper-slide"><a href="javascript:;">运动健身</a></div>
		            <div class="swiper-slide"><a href="javascript:;">宠物</a></div>-->
		            <div
		            	class="swiper-slide"
		            	:class="{selected:current === index}"
		            	v-for="(item,index) in items"
		            	:key="index"
		            >
		            	<router-link tag="a" :to="{ path:'/'+item.pathed }">
		            		{{item.itemTxt}}
		            	</router-link>
		            </div>
		        </div>
		    </div>
		</section>
		
	</div>
</template>

<script>
export default{
	name: 'TabItem1',
	data(){
		return{
			current:0,
			items:[
				{
					itemTxt:'美食',
					pathed:'TabItem1'
				},
				{
					itemTxt:'电影',
					pathed:'TabItem1'
				},
				{
					itemTxt:'酒店',
					pathed:'TabItem1'
				},
				{
					itemTxt:'旅行',
					pathed:'TabItem1'
				},
				{
					itemTxt:'休闲娱乐',
					pathed:'TabItem1'
				},
				{
					itemTxt:'丽人',
					pathed:'TabItem1'
				},
				{
					itemTxt:'运动健身',
					pathed:'TabItem1'
				},
				{
					itemTxt:'宠物',
					pathed:'TabItem1'
				}
			]
		}
	},
	methods:{
		swiper(){
			function setCurrentSlide(ele, index) {
		        $(".swiper1 .swiper-slide").removeClass("selected");
		        ele.addClass("selected");
		        //swiper1.initialSlide=index;
		    }
		
		    var swiper1 = new Swiper('.swiper1', {
		        // 设置slider容器能够同时显示的slides数量(carousel模式)。
		        // 可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
		        // loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
		        slidesPerView: 4.5,
		        paginationClickable: true,    //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
		        spaceBetween: 0,              //slide之间的距离（单位px）。
		        freeMode: true,               //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
		        loop: false,                  //是否可循环
		        onTab: function(swiper) {
		            var n = swiper1.clickedIndex;
		        }
		    });
		    swiper1.slides.each(function(index, val) {
		        var ele = $(this);
		        ele.on("click", function() {
		            setCurrentSlide(ele, index);
		            switch(index){
		            	case 4:
		            		$('.swiper-wrapper').css({'transform':'translate3d(-9.94404rem, 0px, 0px)'});
		            		break;
		            	case 5:
		            		$('.swiper-wrapper').css({'transform':'translate3d(-11.50404rem, 0px, 0px)'});
		            		break;
		            	case 6:
		            		$('.swiper-wrapper').css({'transform':'translate3d(-11.50404rem, 0px, 0px)'});
		            		break;
		            	case 7:
		            		$('.swiper-wrapper').css({'transform':'translate3d(-11.50404rem, 0px, 0px)'});
		            		break;
		            	default:
		            		$('.swiper-wrapper').css({'transform':'translate3d(-0rem, 0px, 0px)'});
		            }
		            //swiper2.slideTo(index, 500, false);
		            //mySwiper.initialSlide=index;
		        });
		    });
		}
	},
	mounted(){
		this.swiper()
	}
}
</script>

<style scoped="scoped">
.tltle{
	font-size: 16px;
	background: #f40;
	color: #fff;
	text-align: center;
	line-height: 35px;
}
.swiper_slide_nav{
	width:100%;
	height:2rem;
	background:#fff;
	margin-bottom: 15px;
	position:relative;
	border-bottom: 2px solid #e6e6e6;
	box-sizing: border-box;
}
.canopy{
	width: 100%;
	height:0.4rem;
	position:absolute;
	left:0;
	top:0;
	background:#fff;
	z-index: 3;
}
.swiper-container{
	overflow: hidden;
}
.swiper-wrapper{
	width:1000rem;
	height:2rem;
	position:relative;
}
.swiper-slide{
	width:3.1rem;
	float:left;
	text-align: center;
	font-size: 0.6rem;
	color:#888;
	line-height: 2rem;
	border-right: 1px solid #e6e6e6;
	box-sizing: border-box;
	position:relative;
	z-index: 2;
}
.swiper1 .selected {
    height:2rem;
    color: #2086eb;
    border-bottom: 2px solid #2086eb;
    box-sizing: border-box;
}
.swiper1 .selected a{
	color: #2086eb;
}




</style>
