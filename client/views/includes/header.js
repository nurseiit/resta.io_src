Template.header.onRendered (function () {
  // preloader
  setTimeout(function () {
    $('.preloader').fadeOut();
  }, 500);

  // menu toggle btn
  $('.btn-menu').click(function(){
    $('.fixed-menu').addClass('open');
  });
  $('.btn-close').click(function(){
    $('.fixed-menu').removeClass('open');
  });
});
