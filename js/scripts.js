(function($) {
    "use strict";
  
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
      if ($(".navbar").offset().top > 60) {
        $(".fixed-top").addClass("top-nav-collapse");
      } else {
        $(".fixed-top").removeClass("top-nav-collapse");
      }
    });
  
    // Smooth scrolling for all anchor links
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Highlight active navigation link on scroll
    $(window).on('scroll', function() {
      var scrollDistance = $(window).scrollTop();
  
      $('.section').each(function() {
        var sectionTop = $(this).offset().top - 60;
        var sectionBottom = sectionTop + $(this).outerHeight();
  
        if (scrollDistance >= sectionTop && scrollDistance <= sectionBottom) {
          $('nav .nav-link').removeClass('active');
          $('nav .nav-link[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
      });
    });
  
    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle)').on('click', function() {
      $('.offcanvas-collapse').toggleClass('open');
    });
  
    // hover in desktop mode
    function toggleDropdown(e) {
      const _d = $(e.target).closest('.dropdown');
      const _m = $('.dropdown-menu', _d);
      setTimeout(function() {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
      }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
      .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
      .on('click', '.dropdown-menu a', toggleDropdown);
  
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function() {
      if ($(this).val() != '') {
        $(this).addClass('notEmpty');
      } else {
        $(this).removeClass('notEmpty');
      }
    });
  
    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
      if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn(500);
      } else {
        $('a.back-to-top').fadeOut(500);
      }
    });
  
    // Smooth scrolling when clicking the back-to-top button
    $('a.back-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
    });
  
    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function() {
      $(this).blur();
    });
  
  })(jQuery);
  
  // loading animation
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function() {
    loader.style.display = "none";
  });


  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

        // Function to handle animations when an element enters the viewport
        function handleIntersection(entries, observer) {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Add your animation class to the target element
                  entry.target.classList.add('animate');
                  // Unsubscribe from further observations to prevent duplicate animations
                  observer.unobserve(entry.target);
              }
          });
      }

      // Create an Intersection Observer
      const observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use the viewport as the root
          rootMargin: '0px', // No margin
          threshold: 0.2, // 20% of the target element must be visible
      });

      // Elements to observe and animate when they enter the viewport
      const elementsToAnimate = document.querySelectorAll('.about'); // Add more elements as needed

      elementsToAnimate.forEach((element) => {
          // Start observing each element
          observer.observe(element);
      });