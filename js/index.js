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

    withid.toggleClass("active");

    if ($('#01, #02').hasClass("active")) {
      $(".menus").removeClass("active")
      withid.addClass("active");
    }

  });

});
