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

	$('button.next').click(function(){
		$('#form-location').hide();
		console.log('Hello')
	})
















})