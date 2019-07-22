

jQuery(function ($) {
  "use strict";
  var mainbottom = $('#main').offset().top;
  $(window).on('scroll', function () {
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar').addClass('past-main');
      $('.navbar').addClass('effect-main')
    } else {
      $('.navbar').removeClass('past-main');
    }

  });

  $('#contact-form').on('click', function (e) {
    e.preventDefault();
    $('#contact').collapse('hide');
  });
  
  $('#menu-toggler').on('click', function () {
    $('html').toggleClass('disable-scroll');
  });

  $('#toggle-navbar').on('click', function () {
    $('html').toggleClass('disable-scroll');
  });

  $(document).on('click.nav', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
      $(this).removeClass('in').addClass('collapse');
    }
  });


  /*-----------------------------------
  ----------- Scroll To Top -----------
  ------------------------------------*/

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  $('#back-top').on('click', function () {
    $('#back-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  /*-------- Owl Carousel ---------- */

  $(".review-cards").owlCarousel({
    slideSpeed: 200,
    margin: 10,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      766: {
        items: 2,
      },
    }
  });

  
  (function ($) {
   

    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function () {
      $('.navbar-collapse').collapse('hide');
      $('html').removeClass('disable-scroll');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

  })(jQuery); // End of use strict


  /*----- Preloader ----- */

  $(window).on('load', function () {
    setTimeout(function () {
      $('#loading').fadeOut('slow', function () {
      });
    }, 3000);
  });

});



