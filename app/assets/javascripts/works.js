$(function(){
  // For Recent Works
  var imageLength = $('.image_wrapper').children().first().width();
  var collectionWidth = $('.collection.cf').width();

   function scrollBottom(){
    // accounts for the fixed nav 57px at top
    var amountScrolled = $('.work_image_wrapper').scrollTop() + $(window).height() -57;
   return amountScrolled
   }

  function scrollToLeft(){
    var scrollable = $($(this).parent().siblings('.scrollable')[0])
    scrollable.animate({scrollLeft: "-=" + imageLength}, 800, 'linear', scrollToLeft);
  }

  function scrollToRight(){
    var rightArrowWrapper = $(this).parent();
    $(rightArrowWrapper.siblings('.scrollable')[0]).animate({scrollLeft: "+=" + imageLength}, 800, 'linear', scrollToRight);
    rightArrowWrapper.siblings('.collection_arrows.left').css('visibility', 'visible').animate({opacity: '1'}, 500);
  }

  function stop(){
    $('.scrollable').stop();
  }

   // accounts for the fixed nav 57px at top
  $('.work_image_wrapper').css('max-height', $(window).height()-57)


  $('.down_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() + scrollBottom()}, 800);
    });

  $('.up_arrow').on('click',function(){
     $('html, body').animate({scrollTop: $(window).scrollTop() - scrollBottom()}, 800);
    });

  $('.up_arrow:first, .down_arrow:last').hide();

  $('.collection').each(function(i, el) {
    var imageWrapper = $(el).children('.scrollable').children('.image_wrapper')
    var numImages =  imageWrapper.children().length
    var imageWrapperWidth = imageLength*numImages

      if (imageWrapper.children().length < 1) {
        $(el).remove();
      }
      // set width of wrapper based on image widths
      imageWrapper.width(imageWrapperWidth);
      $('.scrollable').css('width', collectionWidth);

      if (imageWrapperWidth <= $('.scrollable').width()) {
        $(el).children('.collection_arrows.right').hide();
      }
  });

  $(".right_arrow").click(scrollToRight);
  $(".left_arrow").click(scrollToLeft);


});
