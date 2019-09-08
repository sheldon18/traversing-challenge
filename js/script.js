//waits until page is ready
$(document).ready(function(){
  
//will need to comment out some code when trying to view effects on their own
 

 //hides all panels when a panel is clicked
$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   });


//hides only the panel that was clicked
  $(".theButton").click(function(){
  $(this).hide();
   });

//adds  a fadeTo to all panels when a panel is clicked
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });


//restores all panels to full opacity when reset button clicked 
$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	
   });

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout or mouseleave
$(".theButton").mouseleave(function(){
	$(this).removeClass("makeBlack");
   });


$(".theButton").mouseover(function(){
 var panelColor = $(this).css("background-color");
 console.log(panelColor);
 $(".superButton").text(panelColor);
 
});

});