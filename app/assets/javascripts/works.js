$(function(){
  var scrollBottom = $('.work_image_wrapper').scrollTop() + $('.work_image_wrapper').height();

  $('.down_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() + scrollBottom}, 800);
    });

  $('.up_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() - scrollBottom}, 800);
    });

  $('.up_arrow:first').hide();


});
