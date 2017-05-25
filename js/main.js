$(document).ready(function(){
	
  	// ======= Animate Number ===============================================


  	$('.animate-number').each(function () {
	  var $this = $(this);
	  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
	    duration: 5000,
	    easing: 'swing',
	    step: function () {
	      $this.text(Math.ceil(this.Counter));
	    }
	  });
	});

	// form image map truck animation =======================================
	$('#street').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top':'16%', right: '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
		horn.play();
	});

	$('#apt').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '42%', 'right': '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
	});

	$('#zip').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '42%', 'right': '68%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
	});

	$('#city').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '60%', 'right': '68%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
	});

	$('#state').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '60%', 'right': '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
	});


	$('#country').focus(function(){
		console.log('hello')
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '89%', 'right': '60%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
		horn.play();
	})



	// ==Form On click next button move to next button

	$('#form-location button.next').click(function(){
		var value;
		// $('#form-location input').each(function(){
		// 	if($(this).val() != ''){
		// 		value = true;
		// 	}else{
		// 		value = false;
		// 	}
		// 	return value;
		// })
		// if(value){
			$('#form-location, .img-area').fadeOut();
			$('#form-type').slideDown();
			$('.stage span.active').removeClass('active');
			$('.stage span.span2').addClass('active')
		// }else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`)
			$('.message').fadeOut(4000)
		// }
		
	})

	$('#form-type button.next').click(function(){
		var value;
		// $('#form-type input').each(function(){
		// 	if($(this).val() != ''){
		// 		value = true;
		// 	}else{
		// 		value = false;
		// 	}
		// 	return value;
		// })
		// if(value){
			$('#form-type').fadeOut();
			$('.img-area').show();
			$('#form-info').slideDown();
			$('.stage span.active').removeClass('active');
			$('.stage span.span3').addClass('active')
		// }else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`)
			$('.message').fadeOut(4000)
		// }
		
	})

















})