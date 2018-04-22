$(".left").hover(function(){ 
  $(".left").addClass("active");
  $(".middle").addClass("add");},
 function(){
  $(".left").removeClass("active");
  $(".middle").removeClass("add");
});

$(".right").hover(function(){ 
  $(".right").addClass("active");
  $(".middle").addClass("add");},
 function(){
  $(".right").removeClass("active");
  $(".middle").removeClass("add");
});