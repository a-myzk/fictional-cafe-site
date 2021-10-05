$(function() {
  $('#burger-btn').on('click', function(){
    $('.icon').toggleClass('close');
    $('.sp').slideToggle();
  });
});




// $(function() {
//   $('#burger-btn').click(function() {
//       $('.icon').toggleClass('close');

//       if ($('.icon').hasClass('close')) {
//           // $('.sm').addClass('close');
//           $('.sm').slideToggle();
//       } else {
//           $('.sm').removeClass('close');
//       }
//   });
// });

