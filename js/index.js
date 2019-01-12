$(document).ready(function(){  
  $(".left").hover(function(){ 
    $(".left").addClass("active");
    $(".middle").addClass("add");
    $(".right").addClass("hide-menu")},
  function(){
    $(".left").removeClass("active");
    $(".middle").removeClass("add");
    $(".right").removeClass("hide-menu")
  });

  $(".right").hover(function(){ 
    $(".right").addClass("active");
    $(".middle").addClass("add");
    $(".left").addClass("hide-menu")
    $(".menu").addClass("hide-menu")},
  function(){
    $(".right").removeClass("active");
    $(".middle").removeClass("add");
    $(".left").removeClass("hide-menu")
    $(".menu").removeClass("hide-menu")
  });

  
  $(".p-button").click(function(){
    $(".preview").addClass("hide");
    if ($('.preview').hasClass("hide")){
      $('.content-holder').removeClass("hide");
    }
  });

});