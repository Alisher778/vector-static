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
		$('#form-location input').each(function(){
			if($(this).val() != ''){
				value = true;
			}else{
				value = false;
			}
			return value;
		})
		if(value){
			$('#form-location, .img-area').fadeOut();
			$('#form-type').slideDown();
			$('.stage span.active').removeClass('active');
			$('.stage span.span2').addClass('active')
		}else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`);
			$('.message').fadeOut(4000);
			$('#form-location input:invalid').css('border', '1px solid red')
		}
		
	});

	$('#form-type button.next').click(function(){
		var value;
		$('#form-type input').each(function(){
			if($(this).val() != ''){
				value = true;
			}else{
				value = false;
			}
			return value;
		})
		if(value){
			$('#form-type').fadeOut();
			$('.img-area').show();
			$('#form-info').slideDown();
			$('.stage span.active').removeClass('active');
			$('.stage span.span3').addClass('active')
		}else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`)
			$('.message').fadeOut(4000)
		}
		
	});

// ====================== Phone Number Validation ==========================
	 $("input[type=tel]").on("change keyup paste", function () {
	    var output;
	    var input = $(this).val();
	    input = input.replace(/[^0-9]/g, '');
	    var area = input.substr(0, 3);
	    var pre = input.substr(3, 3);
	    var tel = input.substr(6, 4);
	    if (area.length < 3) {
	        output = "(" + area;
	    } else if (area.length == 3 && pre.length < 3) {
	        output = "(" + area + ")" + " " + pre;
	    } else if (area.length == 3 && pre.length == 3) {
	        output = "(" + area + ")" + " " + pre + "-" + tel;
	    }
	    $(this).val(output);
	});
//  ============================================================================


//  ===================== Data for Table   ===============================

$('form#quote-form :input').on("change keyup paste", function(){
	// Conatct info

		var $email = $('#email').val();
		var $tel = $('#tel').val();
		var $name = $('#name').val();
	// Location
		var $email = $('#email').val();
		var $tel = $('#tel').val();
		var $name = $('#name').val();

	var data = {name: $name, 
				email: $email,
				tel: $tel
				}
				console.log(data);
})



	$('.submit-btn').click(function(){
		var value;
		$('#form-info input').each(function(){
			if($(this).val() != ''){
				value = true;
			}else{
				value = false;
			}
			return value;
		})
		if(value){
			console.log('Success')
		}else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`)
			$('.message').fadeOut(4000)
		}
	})
















})