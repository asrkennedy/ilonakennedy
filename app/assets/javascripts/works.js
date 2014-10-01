$(function(){
  // For Recent Works
  var imageLength = $('.image_wrapper').children().first().width();
  var collectionWidth = $('.collection.cf').width();
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

   function scrollBottom(){
    // accounts for the fixed nav 57px at top
    var amountScrolled = $('.work_image_wrapper').scrollTop() + $(window).height() -57;
    // if mobile
    // var amountScrolled = $('.work_image_wrapper').scrollTop() + $('.work_image_wrapper').height()
   return amountScrolled
   }

  function scrollToLeft(){
    var scrollable = $($(this).parent().siblings('.scrollable')[0])
    var imageNumber = scrollable.children().first().children().length;
    scrollable.animate({scrollLeft: "-=" + (imageLength + (2*imageNumber))}, 800, 'linear', scrollToLeft);
  }

  function scrollToRight(){
    var rightArrowWrapper = $(this).parent();
    var imageNumber = rightArrowWrapper.siblings('.scrollable').children().first().children().length;
    $(rightArrowWrapper.siblings('.scrollable')[0]).animate({scrollLeft: "+=" + (imageLength + (2*imageNumber))}, 800, 'linear', scrollToRight);
    rightArrowWrapper.siblings('.collection_arrows.left').css('visibility', 'visible').animate({opacity: '1'}, 500);
  }

  function stop(){
    $('.scrollable').stop();
  }

  function scrollToResume(){
    var bioWrapperHeight = $('.bio_wrapper').height();
    $('html, body').animate({scrollTop: bioWrapperHeight+40}, 800);
  }

  if (isMobile.matches) {
      $('.down_arrow').on('click',function(){
        $('html, body').animate({scrollTop: $(window).scrollTop() +  $('.work_image_wrapper').height()}, 800);
      });
      $('.up_arrow').on('click',function(){
       $('html, body').animate({scrollTop: $(window).scrollTop() - $('.work_image_wrapper').height()}, 800);
      });

      $('.title').on('click',function(){
        $('nav ul').slideToggle();
      })
    } else {
        // accounts for the fixed nav 57px at top
    $('.work_image_wrapper').css('max-height', $(window).height()-58)

    $('.down_arrow').on('click',function(){
       $('html, body').animate({scrollTop: $(window).scrollTop() + scrollBottom()}, 800);
      });

    $('.up_arrow').on('click',function(){
       $('html, body').animate({scrollTop: $(window).scrollTop() - scrollBottom()}, 800);
      });
    }

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

  $('.resume_button').click(scrollToResume);

});
