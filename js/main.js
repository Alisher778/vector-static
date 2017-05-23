$(document).ready(function(){
	// $(document).scroll(function(){
	// 	var scrollTop = $(document).scrollTop();
		
	//     if(scrollTop > 100){
	  	
	//     	$('nav').css({'background-color':'#fff', 'color': '#000'});
	
	//     }else{
	//     	$('nav').css({'background-color':'transparent', 'color': '#fff'})
	//     }
 //  	});


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
})