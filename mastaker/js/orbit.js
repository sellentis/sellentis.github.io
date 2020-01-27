$(document).ready(function() {
	$('.item').on('click', function(e){
	    e.stopPropagation();
	    	$('#orbit').val($(this).data('val'))
	    	// $('.sub-list').hide();
	    	$('.list-select').hide();
	});

	$('#orbit').on('click', function(e) {
		$('.list-select').toggle();
	});

	$('.item').on('click', function(e) {
		$('.sub-list').hide();
		// $(this).children().toggle();
	});
	$('#do_signup').on('click', function(e) {
		var qwe = [];
		$('#errors').text('');
		// console.log($('#phone').val().length);
		// if ($('#name').val().length == 0 || $('#patronymic').val().length == 0 || $('#surname').val().length == 0 || 
		// 	$('#orbit').val().length == 0 || $('#phone').val().length == 0 || $('#email').val().length == 0 || $('#city').val().length == 0) {
		// 	$('#errors').text('Заполните все поля!');
		// }
		$('input').css('border','none');
		$('input').css('box-shadow','none');
		if ($('#name').val().length == 0) {
			e.preventDefault();
			qwe.push(' имя');
			$('#name').css('border','1px solid red');
			$('#name').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		// if ($('#patronymic').val().length == 0) {
		// 	e.preventDefault();
		// 	qwe.push(' отчество');
		// 	$('#patronymic').css('border','1px solid red');
		// 	$('#patronymic').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		// }
		if ($('#surname').val().length == 0) {
			e.preventDefault();
			qwe.push(' фамилия');
			$('#surname').css('border','1px solid red');
			$('#surname').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		if ($('#orbit').val().length == 0) {
			e.preventDefault();
			qwe.push(' сфера деятельности');
			$('#orbit').css('border','1px solid red');
			$('#orbit').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		if ($('#phone').val().length == 0) {
			e.preventDefault();
			qwe.push(' телефон(11 цифр)');
			$('#phone').css('border','1px solid red');
			$('#phone').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		if ($('#email').val().length == 0) {
			e.preventDefault();
			qwe.push(' электронная почта');
			$('#email').css('border','1px solid red');
			$('#email').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		// if ($('#password').val().length < 6 || ('#password').val().length > 32) {
		// 	e.preventDefault();
		// 	qwe.push(' пароль (от 6 до 32х символов), сейчас: ' + $('#password').val().length);
		// 	$('#password').css('border','1px solid red');
		// 	$('#password').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		// }
		if ($('#city').val().length == 0) {
			e.preventDefault();
			qwe.push(' город');
			$('#city').css('border','1px solid red');
			$('#city').css('box-shadow','0px 0px 5px 0px rgba(255,0,0,1)');
		}
		if (qwe.length >= 1) {
			e.preventDefault();
			var str = 'Заполните следующие поля:';
			for (var i = 0; i< qwe.length; i++) {
				str = str + qwe[i] + ',';
			}
			var str1 = str.replace(/.$/,".")
			$('#errors').text(str1);
		}
	});

	$('body').on('click', function(e) {
		if(!$(e.target).is('.list-select') && !$(e.target).is('#orbit') && !$(e.target).is('.item')) {
	        $('.list-select').hide();
	        // console.log("1");
	    }
	    else {
	    	// console.log("2");
	    }
	});

});

	