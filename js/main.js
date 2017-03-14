
$('#taptostart').click( function() {
  $('#startSection').fadeOut(250);
  $('#step1').fadeIn(250);
});

setTimeout(function() {
  $('#startScreen').addClass('test');
}, 5000)

setTimeout(function() {
  $('#startScreen').removeClass('test');
}, 15000)

$('.next-button').click( function(){
  $(this).closest('.content-box').fadeOut(500);
  $( $(this).attr('href') ).fadeIn(750);
});

$('.select-item a').click( function(){
  $(this).closest('.group').find('.order-item').hide();
  $( $(this).attr('href') ).show();
});

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
