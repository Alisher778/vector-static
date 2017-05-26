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

//########################### form image map truck animation #############################################
	$('#p-street').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top':'16%', right: '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
		horn.play();
	});

	$('#p-apt').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '42%', 'right': '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
	});

	$('#p-city').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '42%', 'right': '68%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
	});

	$('#p-zip').focus(function(){
		var horn = $('#horn')[0];
		$('.truck').animate({'top': '58%', 'right': '68%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
	});


	$('#d-street').focus(function(){
		$('.truck').animate({'top': '65%', 'right': '40%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
	});


	$('#d-apt').focus(function(){
		$('.truck').animate({'top': '65%', 'right': '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(0deg)"})
		});
	})

	$('#d-city').focus(function(){
		$('.truck').animate({'top': '90%', 'right': '20%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
		
	})
	$('#d-zip').focus(function(){
		$('.truck').animate({'top': '90%', 'right': '70%'}, 2000, function(){
			$(this).css({"transform":"rotateY(180deg)"})
		});
		horn.play();
	})

//############################################################################################################


//======== Form On click next button move to next button ====================================================

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
			$('#form-location input:invalid').css('border', '1px solid red');
		}
		
	});
// Back button
	$('#form-type button.back').click(function(){
		$('#form-type').fadeOut();
		$('.stage span.active').removeClass('active');
		$('.stage span.span1').addClass('active')
		$('#form-location, .img-area').slideDown();
	});

// ###########################################################################################################

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
			$('.stage span.span3').addClass('active');
		}else{
			$('form[name=myform]').append(`<div class="message">Make sure all fields are filled out!</div>`);
			$('.message').fadeOut(4000);
			$('#form-type input:invalid').css('border', '1px solid red');
		}
		
	});

// Back button for Building Type   ===============

	$('#form-info button.back').click(function(){
		$('#form-info, .img-area').fadeOut();
		$('#form-type').slideDown();
		$('.stage span.active').removeClass('active');
		$('.stage span.span2').addClass('active')
	});



	$('#p-zip').keyup(function(){
		if($(this).val().length == 5){
			$('#d-street').focus()
		}
	});

//########################### Select Building Type #############################################
	$('.pick-up-details .building').click(function(){
		$('.pick-up-details div.building').removeClass('selected');
		$('.pick-up-details div.building input').removeAttr('checked');
		$('.pick-up-details div.building button').removeClass('active');

		$(this).addClass('selected');
		$('.pick-up-details .building.selected button').addClass('active');
		$('.pick-up-details .building.selected input').attr('checked', 'cheched');
		
	});

	$('.drop-off-details .building').click(function(){
		$('.drop-off-details div.building').removeClass('selected');
		$('.drop-off-details div.building input').removeAttr('checked');
		$('.drop-off-details div.building button').removeClass('active');

		$(this).addClass('selected');
		$('.drop-off-details .building.selected button').addClass('active');
		$('.drop-off-details .building.selected input').attr('checked', 'cheched');
		
	})

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

var movingData;

$('form#quote-form :input').on("change keyup paste", function(){
	// Conatct info

		var $email = $('#email').val();
		var $tel = $('#tel').val();
		var $name = $('#name').val();
	// Location
		// Pick up address
		var $pStreet = $('#p-street').val();
		var $pApartment = $('#p-apt').val();
		var $pCity = $('#p-city').val();
		var $pState = $('#p-state').val();
		var $pZip = $('#p-zip').val();

		// Drop off address 
		var $dStreet = $('#d-street').val();
		var $dApartment = $('#d-apt').val();
		var $dCity = $('#d-city').val();
		var $dState = $('#d-state').val();
		var $dZip = $('#d-zip').val();

	// Address Type Details
		// Pick-up details
		var $pType = $('input[name=pick-up-building-type]:checked').val();
		var $pElevator = $('input[name=pick-up-elevator]:checked').val();
		var $pStairs = $('input[name=pick-up-stairs]:checked').val();
		var $pFloor = $('#pick-up-floor').val();
		var $pBedroom = $('#pick-up-bedroom').val();
		
		// Dropp-off details
		var $dType = $('input[name=drop-off-building-type]:checked').val();
		var $dElevator = $('input[name=drop-off-elevator]:checked').val();
		var $dStairs = $('input[name=drop-off-stairs]:checked').val();
		var $dFloor = $('#drop-off-floor').val();
		var $dBedroom = $('#drop-off-bedroom').val();

		// Moving Date
		var $moveDate = $('.date input[type=date]').val();
		var data = {	name: $name, email: $email, tel: $tel, moveDate: $moveDate,
						pickUpAddress:{ pStreet: $pStreet, pApartment: $pApartment, pCity: $pCity, pState: $pState,pZip: $pZip },
						dropOffAddress:{ dStreet: $dStreet, dApartment: $dApartment, dCity: $dCity, dState: $dState, dZip: $dZip },
						pickUpAddressType: { pType:$pType, pElevator: $pElevator, pStairs: $pStairs, pFloor: $pFloor, pBedroom: $pBedroom },
						dropOffAddressType: { dType:$dType, dElevator: $dElevator, dStairs: $dStairs, dFloor: $dFloor, dBedroom: $dBedroom }
				   }	
					console.log(data);
		movingData = data;
})

	console.log(movingData)

	$('.submit-btn').click(function(e){
		e.preventDefault();
		console.log(movingData)
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