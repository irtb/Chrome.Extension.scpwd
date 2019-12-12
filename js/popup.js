// 生成密码
$('#make').click(e => {

	var params = '';
	var password = '';
	var number = $('#number').val();
	var minuscules = $('#minuscules').val();
	var capital = $('#capital').val();
	var special = $('#special').val();
	var plength = $('#plength').val();

	if($('#number').is(':checked')) {
		params = params + number;
	}
	if($('#minuscules').is(':checked')) {
		params = params + minuscules;
	}
	if($('#capital').is(':checked')) {
		params = params + capital;
	}
	if($('#special').is(':checked')) {
		params = params + special;
	}

	if (plength == '' || plength == 0) {
		$('#res').html('密码长度必填且安全长度应该大于6');
	}

	if (params == '') {
		$('#res').html('必须选择一种密码组成元素');
	} else {
		for(var i = 0; i < plength; i++){
		    var rand = Math.floor(Math.random() * (params.length + 1)) + 1;
		    password += params.charAt(rand);
		}

		$('#pwds').show();
		$("#tip_message").text('Create Successful').fadeIn(1000);
		setTimeout(function() {
			$("#tip_message").fadeOut(1000);
			$('#res').show().text(password);
		}, 500);
		
	}
});

// 复制密码
var copyBtn = new ClipboardJS('#copy', {
	text: function() {
		return $('#res').html();
	}
});
copyBtn.on("success", function(e) {
	$("#tip_message").text('Copy Successful').fadeIn(1000);
	setTimeout(function() {
		$("#tip_message").fadeOut(1000);
	}, 500);
});

// 保存密码
$('#save').click(e => {
	alert('save is codiing~');
});

