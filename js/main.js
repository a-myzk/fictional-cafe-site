$(function() {
  $('#burger-btn').on('click', function(){
    $('.burger-icon').toggleClass('active');
    $('.sp').slideToggle();
  });
});

$(function() {
  $('a[href^="#"]').click(function(){
    var adjust = 120;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function() {
  ScrollReveal().reveal('.animation', {
    duration: 800,
    viewFactor: 0.4
  });
});
