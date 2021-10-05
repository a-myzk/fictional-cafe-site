$(function() {
  $('#burger-btn').on('click', function(){
    $('.burger-icon').toggleClass('active');
    $('.sp').slideToggle();
  });
});
