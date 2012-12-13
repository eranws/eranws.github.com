console.log("MAIN.JS");

$(document).ready(function(){

   
		$( ".slideobj" ).bind( "mouseenter", function()
		{
			$( this ).find( ".slide" ).stop( false, true ).slideDown( 5 );
		})
		.bind( "mouseleave", function()
		{
			$( this ).find( ".slide" ).slideUp(3);
		});
	
});