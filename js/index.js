$( document ).ready(function() {

  if ($("body").width() < 460) {
    $(".menus").addClass('mobile');
  }

  var ResizeTimer;
  $(window).on("resize", function(){
    clearTimeout(ResizeTimer);
    ResizeTimer = setTimeout(function(){
      var wW = $("body").width();
        if (wW < 460) {
          $(".menus").addClass('mobile');
        }else {
          $(".menus").removeClass('mobile')
        };
    }, 200);
  });


  $(".btn").on('click', function(){

    var picked = $(this).attr('data-ms');
    var withid = $("#" + picked);

    /*if (withid.is("#01") && $("#01").hasClass("active")) {
      $("#01").removeClass("active")
    }else {
      withid.addClass("active");
    };*/

    withid.addClass("active");

    if (withid.hasClass("active")) {
      
    }

  });

});
