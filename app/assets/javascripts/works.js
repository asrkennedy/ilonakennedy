$(function(){
  // For Recent Works
  var scrollBottom = $('.work_image_wrapper').scrollTop() + $('.work_image_wrapper').height();

  function scrollToLeft(){
    var scrollable = $($(this).parent().siblings('.scrollable')[0])
    scrollable.animate({scrollLeft: '-=330'}, 800, 'linear', scrollToLeft);
  }

  function scrollToRight(){
    var rightArrowWrapper = $(this).parent();
    $(rightArrowWrapper.siblings('.scrollable')[0]).animate({scrollLeft: '+=330'}, 800, 'linear', scrollToRight);
    rightArrowWrapper.siblings('.collection_arrows.left').css('visibility', 'visible').animate({opacity: '1'}, 500);
  }

  function stop(){
    $('.scrollable').stop();
  }

  $('.down_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() + scrollBottom}, 800);
    });

  $('.up_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() - scrollBottom}, 800);
    });

  $('.up_arrow:first, .down_arrow:last').hide();

  $('.collection').each(function(i, e) {
    var imageWrapper = $(e).children('.scrollable').children('.image_wrapper')
    var imageWidth = imageWrapper.children().width()
    var numImages =  imageWrapper.children().length
    var imageWrapperWidth = imageWidth*numImages

      if (imageWrapper.children().length < 1) {
        $(e).remove();
      }
      imageWrapper.width(imageWrapperWidth);
      if (imageWrapperWidth <= $('.scrollable').width()) {
        $(e).children('.collection_arrows.right').hide();
      }
  });

  $(".right_arrow").click(scrollToRight);
  $(".left_arrow").click(scrollToLeft);


  // var hoverHeight = $('.past_work_image_hover').siblings().height()
  // $('.past_work_image_hover').height(hoverHeight);


});
