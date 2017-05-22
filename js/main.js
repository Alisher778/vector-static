$(document).ready(function(){
	$(document).scroll(function(){
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop)
	    if(scrollTop > 100){
	  	
	    	$('nav').css({'background-color':'#fff', 'color': '#000'});
	
	    }else{
	    	$('nav').css({'background-color':'transparent', 'color': '#fff'})
	    }
  	});
})