//全局变量
	var UserOk = false;
	var PassOk = false;
	var EmailOk = false;
	//绑定表单的提交事件
	$('form').submit(function(){
		//触发所有的丧失焦点事件
		$('input').trigger('blur');

		//判断字段是否正确
		if(UserOk && PassOk && EmailOk){
			//都正确就可以提交
			return true;
		}else{
			//有一个错误都不能提交
			return false;
		}
	})
	//获取焦点事件
	$('button[type!=submit]').focus(function(){
		//将当前元素的边框进行设置
		$(this).css('border','1px solid blue');
		//设置提醒
		var v = $(this).attr('readme');
		$(this).next('span').html(v).css('color','blue');
	})
	//当丧失焦点时进行验证
	$('input[name=username]').blur(function(){
		//获取用户输入的信息.进行验证
		var v = $(this).val();
		//进行正则验证
		var reg = /^\w{6,18}$/;
		if(reg.test(v)){
			$(this).css('border','1px solid green');
			$(this).next('span').html('√').css('color','blue');
			UserOk = true;
		}else{
			$(this).css('border','1px solid red');
			$(this).next('span').html('用户名不符合要求').css('color','red');
			UserOk = false;
		}
	})
	//给密码框绑定丧失焦点事件
	$('input[name=password]').blur(function(){
		//获取用户输入的信息.进行验证
		var v = $(this).val();
		//进行正则验证
		var reg = /^\w{6,18}$/;
		if(reg.test(v)){
			$(this).css('border','1px solid green');
			$(this).next('span').html('√').css('color','blue');
			PassOk = true;
		}else{
			$(this).css('border','1px solid red');
			$(this).next('span').html('密码不符合要求').css('color','red');
			PassOk = false;
		}
	})
