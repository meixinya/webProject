// 热门商品特效
$(function(){
	$(".con4_main_i>div").hover(function(){
	    var v1=$(this).index();
	   $(this).children("div").animate({bottom:"0"},500)
	},function(){
	    var v1=$(this).index();
	    $(this).children("div").animate({bottom:"-240px"},500)
	});

	// 背景框变色
	$(".thumbnail ").hover(function(){
		$(this).css({boxShadow:"0 0 20px #808080"});
	},function(){
		$(this).css({boxShadow:"0 0 0px "})
	});

	// 置顶
	$(".go_top").click(function(){

	    $("body").animate({scrollTop:0},500);
	});
	$(window).scroll(scr)
	scr();
	function scr(){
	    var DT = $(document).scrollTop();
		//判断楼层是否需要显示和隐藏
	    if(DT >= 300){
	        $('.go_top').fadeIn(1000);
	    }else{
	        $('.go_top').fadeOut(1000);
	    }

	}

});