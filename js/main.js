// $(function() {
//   $('#burger-btn').on('click', function(){
//     $('.icon').toggleClass('active');
//     $('.sp').slideToggle();
//   });
// });




// $(function() {
//   $('#burger-btn').click(function() {
//       $('.icon').toggleClass('active');

//       if ($('.icon').hasClass('active')) {
//           // $('.sm').addClass('active');
//           $('.sm').slideToggle();
//       } else {
//           $('.sm').removeClass('active');
//       }
//   });
// });

// $(function() {
//   $('#burger-btn').click(function() {
//     $(this).toggleClass('active');
//     if ($(this).hasClass('active')) {
//       $('.sp').addClass('active');
//     } else {
//       $('.sp').removeClass('active');
//     }
//   });
// });

$(function() {
  $('#burger-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.sp').slideToggle();
    $('.sp').removeClass('active');
  });
});