$(function(){
  // For Recent Works
  var imageLength = $('.image_wrapper').children().first().width();
  var collectionWidth = $('.collection.cf').width();
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

  var move = {
    scrollToRight: function() {
       var rightArrowWrapper = $(this).parent();
    $(rightArrowWrapper.siblings('.scrollable')[0]).animate({scrollLeft: "+=" + imageLength}, 800, 'linear', move.scrollToRight);
    rightArrowWrapper.siblings('.collection_arrows.left').css('visibility', 'visible').animate({opacity: '1'}, 500);
    },
    scrollToLeft: function() {
      var scrollable = $($(this).parent().siblings('.scrollable')[0])
      scrollable.animate({scrollLeft: "-=" + imageLength}, 800, 'linear', move.scrollToLeft);
    },
    scrollBottom: function() {
      // accounts for the fixed nav 57px at top
      var amountScrolled = $('.work_image_wrapper').scrollTop() + $(window).height() -57;
      return amountScrolled
    },
    scrollToResume: function() {
      var bioWrapperHeight = $('.bio_wrapper').height();
      $('html, body').animate({scrollTop: bioWrapperHeight+40}, 800);
    }
  }

// Makes collections scroll to image widths
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

// Interactive page elements
  $('.up_arrow:first, .down_arrow:last').hide();
  $(".right_arrow").click(move.scrollToRight);
  $(".left_arrow").click(move.scrollToLeft);
  $('.resume_button').click(move.scrollToResume);

  // Only on mobile
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

    $('.bio_name').hide();
  } else {
    // accounts for the fixed nav 57px at top
    $('.work_image_wrapper').css('max-height', $(window).height()-58)

    $('.down_arrow').on('click',function(){
       $('html, body').animate({scrollTop: $(window).scrollTop() + move.scrollBottom()}, 800);
      });

    $('.up_arrow').on('click',function(){
       $('html, body').animate({scrollTop: $(window).scrollTop() - move.scrollBottom()}, 800);
      });
  }

});
