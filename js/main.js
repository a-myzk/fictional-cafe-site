$(function() {
  $('#burger-btn').on('click', function(){
    $('.icon').toggleClass('close');
    $('.sm').slideToggle();
  });
});