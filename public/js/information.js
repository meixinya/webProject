//绑定鼠标移入事件
	$('.smalls').mouseover(function(){
		$('.move').show();
		$('.bigs').show();
	})
	$('.smalls').mousemove(function(e){
		var x = e.pageX;
		var y = e.pageY;
		//获取当前元素相对于文档的偏移量
		var t = $(this).offset().top;
		var l = $(this).offset().left;
		//计算top和left
		var newT = y-t-($('.move').height()/2);
		var newL = x-l-($('.move').width()/2);
		//获取最大的top和left
		var MaxTop = $('.smalls').height() - $('.move').height();
		var MaxLeft = $('.smalls').width() - $('.move').width();
		//越界判断
		if(newT <= 0){newT = 0}
		if(newL <= 0){newL = 0}
		if(newT >= MaxTop){newT = MaxTop}
		if(newL >= MaxLeft){newL = MaxLeft}
		//设置xiaodiv的移动
		$('.move').css({top:newT+'px',left:newL+'px'});
		//计算 移动比例
		var xp = newL/$('.smalls').width();
		var yp = newT/$('.smalls').height();
		//计算大图的移动距离
		var Nx = xp*$('.bimg').width();
		var Ny = yp*$('.bimg').height();
		//设置大图移动
		$('.bimg').css({top:-Ny+'px',left:-Nx+'px'});
	})
	//绑定鼠标移出事件
	$('.smalls').mouseout(function(){
		$('.move').hide();
		$('.bigs').hide();
	})
	//给图片列表绑定单击事件
	$('.uimg li').click(function(){
		//获取当前图片的src属性
		var s = $(this).find('img').attr('src');
		//设置图片
		$('.simg').attr('src',s);
		$('.bimg').attr('src',s);
	})