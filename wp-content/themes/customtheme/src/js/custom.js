jQuery(document).ready(function ($) {
  (function ($) {
    if ($('#client-location').length) {
      getIpLocation(function(data) {
        $('#client-location').val(data); 
      });
    }

    if($('#input_13_2').length){
      getIpLocation(function(data) {
        $('#input_13_2').val(data); 
      });
    }

    function getIpLocation(callback){
      var ipLocation ='';
      $.getJSON("https://api.ipify.org/?format=json", function(e) {
        $.getJSON('https://ipapi.co/'+e.ip+'/json', function(data){
          ipLocation = data.city+', '+data.country+', '+data.region;
          callback(ipLocation);
        });
      });
    }


    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing option
    });
    var video_data = "";
    jQuery(document).on(
      "click",
      "#client-testimonial-slider .single-client .single-client-video, #testimonials_popup .single-client .single-client-video",
      function () {
        let source_id = jQuery(this).data("id");
        let source_src = jQuery(this).data("src");
        // console.log(source_src);
        // console.log(source_id);
        video_data = "#" + source_id;
        // console.log(video_data);
        // console.log(jQuery("#video_modal #" + source_id));
        jQuery("#" + source_id).attr("src", source_src);
        jQuery("#" + source_id).css("display", "block");
        jQuery(".modal-main.video_popup_common").toggleClass("is-visible");
        // jQuery("#video_modal").css('display', 'block');
        // jQuery("#video_modal iframe").css('display', 'block');
        // jQuery('.modal-main').toggleClass('is-visible');
      }
    );

    $('.transparent_button_second').click(function(){
      $('.testimonials_popup .dynamic_content h3').html($(this).siblings('.heading').text());
      $('.testimonials_popup .dynamic_content p').html($(this).siblings('.sub_heading').text());
    })
    
    $('.ginput_recaptcha').each(function(i){
        var thisID = $(this).attr('id');
        $(this).attr('id', thisID+'_'+i);
    });

    jQuery(".modal-close").on("click", function (e) {
      e.preventDefault();
      //let source_id = jQuery('.rvs-testimonials .testimonial .item').data('id');
      jQuery("#video_modal iframe").css("display", "none");
      jQuery(".modal-main").removeClass("is-visible");
      console.log(video_data);
      jQuery(video_data).removeAttr("src");
      //jQuery("#video_modal #"+source_id).addClass('iframesources');
    });
    jQuery(document).ready(function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        jQuery("#mega-menu-expanded > li").hover(
          function () {
            // Mouse enter event
            jQuery("header").addClass("header-white-bg");
          },
          function () {
            // Mouse leave event
            jQuery("header").removeClass("header-white-bg");
          }
        );
      }
    });
    

    jQuery(document).ready(function () {
      jQuery(".single-design-dev")
        .on("mouseenter", function () {
          // Fade out first image with zoom effect
          jQuery(this).find(".image-1").css({
            opacity: 0,
            transform: "scale(1.1)", // Zoom effect
            transition:
              "opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth transition with cubic-bezier timing function
          });
          // Fade in second image with delay
          setTimeout(
            function () {
              jQuery(this).find(".image-2").css("opacity", 1);
            }.bind(this),
            300
          ); // Delay in milliseconds
        })
        .on("mouseleave", function () {
          // Fade out second image with zoom effect
          jQuery(this).find(".image-2").css({
            opacity: 0,
            transform: "scale(1.1)", // Zoom back to normal
            transition:
              "opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth transition with cubic-bezier timing function
          });
          // Fade in first image with delay
          setTimeout(
            function () {
              jQuery(this).find(".image-1").css("opacity", 1);
            }.bind(this),
            300
          ); // Delay in milliseconds
        });
    });
    jQuery(".our-partners-details-images").owlCarousel({
      items: 8,
      loop: true,
      margin: 20,
      autoplay: true,
      slideTransition: "linear",
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 3,
          dots: false,
        },
        650: {
          items: 3,
          dots: false,
        },
        767: {
          items: 4,
          dots: false,
        },
        1000: {
          items: 5,
        },
        1440: {
          items: 6,
        },
      },
    });

    var old_count = 0;
    jQuery("#client-testimonial-slider").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      //   center:true,
      dotsEach: true,
      navContainer: ".custom-nav",
      dotsContainer: ".custom-pagination",
      //   rewind:true,
      nav: true,
      navText: [
        '<span><img src="/wp-content/uploads/2024/04/slider-left-btn.svg"></span>',
        '<span><img src="/wp-content/uploads/2024/04/slider-right-btn.svg"></span>',
      ],
      // dotsSpeed:50000,
      paginationSpeed: 5000,
      // responsiveClass:true,.
      responsive: {
        0: {
          items: 1.25,
          dots: false,
        },
        650: {
          items: 2.25,
          dots: false,
        },
        767: {
          items: 2.25,
          dots: false,
        },
        1000: {
          items: 3.25,
        },
      },
    });

    $(document).ready(function () {
      var owl;
      var owl2;

      function initOwlCarousel() {
        owl = $("#hero-client").owlCarousel({
          loop: false,
          margin: 10,
          nav: false,
          autoplay: true, // Enable autoplay
          autoplayTimeout: 5000,
          dots: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
              dots: false,
            },
            480: {
              items: 2,
              nav: false,
              dots: false,
            },
            600: {
              items: 3,
              nav: false,
              dots: false,
            },
            1000: {
              items: 3,
              nav: false,
              dots: false,
            },
          },
        });
        owl2 = $(".magento-slider-img-mob").owlCarousel({
          items: 2,
          loop: true,
          margin: 10,
          nav: false,
          autoplay: true, // Enable autoplay
          autoplayTimeout: 3000,
          dots: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
              dots: false,
            },
            650: {
              items: 2,
              nav: false,
              dots: false,
            },
          },
        });
         }

      function destroyOwlCarousel() {
        if (owl !== undefined) {
          owl
            .trigger("destroy.owl.carousel")
            .removeClass("owl-carousel owl-loaded");
          owl.find(".owl-stage-outer").children().unwrap();
        }
        if (owl2 !== undefined) {
          owl2
            .trigger("destroy.owl.carousel")
            .removeClass("owl-carousel owl-loaded");
          owl2.find(".owl-stage-outer").children().unwrap();
        }
      }

      function checkWindowSize() {
        if ($(window).width() < 991) {
          initOwlCarousel();
        } else {
          destroyOwlCarousel();
        }
      }

      // Initial check on document ready
      checkWindowSize();

      // Check window size on resize
      $(window).resize(function () {
        checkWindowSize();
      });

      var owlCities = $('.our-partners-details-cities');
      owlCities.owlCarousel({
        items: 10,
        loop: false,
        margin: 0,
        mousewheel:true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
          0: {
            items: 2,
            dots: false,
          },
          480: {
            items: 2,
            dots: false,
          },
            650: {
              items: 3,
              dots: false,
            },
            767: {
              items: 4,
              dots: false,
            },
            1000: {
              items: 5,
            },
            1440: {
              items: 7,
            },
          },
      });
      owlCities.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
          owlCities.trigger('next.owl');
        } else {
          owlCities.trigger('prev.owl');
        }
        e.preventDefault();
    });
    });

    ("use strict");
    $(".testimonial").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  })(jQuery);
  jQuery("#owl-carousel").owlCarousel({
    loop: true,
    items: 1,
  });
  jQuery("#owl-carousel-case-study").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  });

  jQuery(".internal-testimonial").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1350: {
        items: 5,
      },
      1500: {
        items: 6,
      },
    },
  });
  jQuery("div#commerce-plaform-logos").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1350: {
        items: 5,
      },
      1500: {
        items: 6,
      },
    },
  });
  // jQuery(".owl-prev").html('<i class="fa-solid fa-chevron-left"></i>');
  // jQuery(".owl-next").html('<i class="fa-solid fa-chevron-right"></i>');

  // Trusted Clients Logo Shuffle
  setInterval(imageShuffle, 3000);

  var showImages = jQuery(".show-clients-img img").length;
  var img_element = jQuery(".hidden-clients-img img").length;

  function imageShuffle() {
    var random = Math.floor(Math.random() * showImages);
    var old_image = jQuery(".show-clients-img img").eq(random).attr("src");

    var changerandom = Math.floor(Math.random() * img_element);
    var new_image = jQuery(".hidden-clients-img img")
      .eq(changerandom)
      .attr("src");

    jQuery(".show-clients-img img").eq(random).attr("src", new_image);
    jQuery(".hidden-clients-img img").eq(changerandom).attr("src", old_image);
  }

  // Progressbar
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function () {
    var max = -219.99078369140625;
    forEach(document.querySelectorAll(".progress"), function (index, value) {
      percent = value.getAttribute("data-progress");
      value
        .querySelector(".fill")
        .setAttribute(
          "style",
          "stroke-dashoffset: " + ((100 - percent) / 100) * max
        );
      value.querySelector(".value").innerHTML = percent + "%";
    });
  };
  // Fixed Header
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery("header").addClass("sticky-header");
      jQuery("body").addClass("sticky-header-main");
    } else {
      jQuery("header").removeClass("sticky-header");
      jQuery("body").removeClass("sticky-header-main");
    }
  });
  var hT = jQuery("header").offset().top;
  if (hT > 1) {
    jQuery("header").addClass("sticky-header");
    jQuery("body").addClass("sticky-header-main");
  }

  /*kulwinder*/

  //   $(".rvs-testimonials .testimonial .item").click(function(){
  //       $(".main-popup").show();

  // });

  $(".rvs-header .menu-item-has-children").hover(function () {
    $(".rvs-header").toggleClass("active");
  });

  // Quick & dirty toggle to demonstrate modal toggle behavior
  // $('.rvs-testimonials .testimonial .item').on('click', function(e) {
  //   e.preventDefault();
  //   $('.modal-main').toggleClass('is-visible');
  // });
  // $('.modal-close').on('click', function(e) {
  //   e.preventDefault();
  //   $('.modal-main').removeClass('is-visible');
  // });

  //get data src//

  //  $(".rvs-testimonials .testimonial .item").click(function(){
  //      let source = $(this).data('src');
  //      $("#video_modal iframe").remove();
  //      $('<iframe class="embed-responsive-item w-100" title="Client testimonial | Ecommerce company of the year (2021) UK  | RVS Media | London" frameborder="0" allowfullscreen></iframe>')
  //          .attr("src", source)
  //          .appendTo("#video_modal");
  //     $('.modal-main').toggleClass('is-visible');
  //      });
  function loadIframe(iframeName, url) {
    var $iframe = $("." + iframeName);
    if ($iframe.length) {
      $iframe.attr("src", url);
      return false;
    }
    return true;
  }

  // $(".diff-weight").click(function(){
  //   $(this).toggleClass("active");
  //   if($(this).hasClass('active')){
  //    $('li.diff-weight.active ul').removeClass('hide')
  // }
  // });
  $(document).ready(function () {
    $(".diff-weight").click(function (event) {
      // Check if the click target is not a child of .diff-weight ul
      if (!$(event.target).closest(".diff-weight ul").length) {
        // Hide siblings' .sub-menu
        $(".diff-weight ul").not($(this).children(".diff-weight ul")).hide();
        // Toggle visibility of the child .diff-weight ul
        $(this).children(".diff-weight ul").toggle();
      }
    });
  });

  jQuery(document).ready(function () {
    jQuery(".modal-toggle").click(function () {
      //  jQuery('body').addClass('video-open');
      jQuery(".modal-close").click(function () {
        //  jQuery('body').removeClass('video-open');
      });
    });
  });
});

jQuery(document).ready(function () {
  // jQuery('body').removeClass('prevent-body');
  // jQuery(window).on('load', function() {

  jQuery("#menu-header-menu li").hover(
    function () {
      jQuery("body").addClass("prevent-body");
    },
    function () {
      // Remove the 'hovered' class when not hovering
      jQuery("body").removeClass("prevent-body");
    }
  );
  jQuery("#menu-latest-header-menu li").hover(
    function () {
      jQuery("body").addClass("prevent-body");
    },
    function () {
      // Remove the 'hovered' class when not hovering
      jQuery("body").removeClass("prevent-body");
    }
  );
});

// jQuery(document).ready(function(){
//     jQuery('#menu-header-menu li ul li').hover(function(){
//      jQuery('body').toggleClass('prevent-body');
//     });
//  });
//  jQuery(document).ready(function(){
// jQuery(window).on('load', function() {
//    jQuery('#menu-header-menu li').hover(function(){
//     jQuery('body').toggleClass('prevent-body');
// });
// });
//  });

jQuery(".client-testimonial .owl-prev").html(
  '<i class="fa-solid ok fa-chevron-left"></i>'
);
jQuery(".client-testimonial .owl-next").html(
  '<i class="fa-solid fa-chevron-right"></i>'
);

jQuery('input[type="range"]').on('input', function() {
  var value = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * 100;
  $(this).css('background', 'linear-gradient(to right, #ef295a 0%, #ef295a ' + value + '%, #fff ' + value + '%, white 100%)');
});

jQuery(document).ready(function ($) {
  $(document).on(
    "click",
    "#mega-menu-expanded li.mega-menu-item.mega-menu-item-has-children > a.mega-menu-link",
    function (e) {
      var current = $(e.target).parent()[0];
      $("#mega-menu-expanded>li").each(function (index, element) {
        if (current == element) {
          // $(this).removeClass('mega-toggle-on');
        } else {
          console.log(element);
          $(element).removeClass("mega-toggle-on");
        }
      });
    }
  );

  $(document).on("click", ".close_icon", function (e) {
    e.preventDefault();
    $("body").click();
  });
});

jQuery(document).ready(function ($) {
  jQuery(".single-service-tech-left-list ul").hover(
    function () {
      jQuery(".single-service-tech-left-list ul").addClass("service-li-hover");
    },
    function () {
      jQuery(".single-service-tech-left-list ul").removeClass(
        "service-li-hover"
      );
    }
  );

  $(".cta_popup_btn").click(function(){
    var form_id = $(this).data('form');
    var monthlyPaymentElement = $(this).siblings().filter('#monthly-payment');
    if (monthlyPaymentElement.length) {
      $('#cta_popup .popup_body>div#form'+form_id+' .budget input').val(monthlyPaymentElement.text());
    }
    $('#cta_popup .popup_body>div').hide();
    $('#cta_popup .popup_body>div#form'+form_id).show();
  })

});


jQuery(document).ready(function($) {
  $('#ajax-search-form').on('input', function(e) {
      e.preventDefault(); // Prevent the form from submitting normally
      var query = $('#ajax-search-input').val();
      // if(query.length >= 2){
        var formData = $(this).serialize(); // Serialize form data
        $.ajax({
            type: 'GET',
            url: mapAjax.ajaxurl,
            data: formData + '&action=custom_ajax_search', // Add custom action
            success: function(response) {
                $('#ajax-search-results').html(response); // Display search results
            }
        });
      // }else{
      //   $('#ajax-search-results').html('<div class="ajax-search-result">minimum enter 2 chractore.</div>'); // Display search results
      // }
  });

  function removeValue(array, value, remove = false) {
    const index = array.indexOf(value);
    if (index !== -1) {
      if(remove){
        array.splice(index, 1);
      }else{
        return true;
      }
    }
  }

  function loadSavePage() {
    const savedPages = JSON.parse(localStorage.getItem("saved_pages"));
    $.ajax({
        url: '/saved-pages',
        method: 'POST',
        data: { data: savedPages },
        success: function(response) {
            $('#saved_popup .popup_body').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
  }

  function activeSave() {
    const savedPages = JSON.parse(localStorage.getItem("saved_pages"));
    if (savedPages && removeValue(savedPages, $('.page_save').data('id'))) {
        $('.page_save').addClass('active');
    }
  }

  function saveCheck() {
    const pageLink = $('.page_save');
    console.log(pageLink);
    const isActive = pageLink.hasClass('active');
    let savedPages = JSON.parse(localStorage.getItem("saved_pages")) || [];
    const pageId = pageLink.data('id');

    if (isActive) {
        removeValue(savedPages, pageId, true);
        pageLink.removeClass('active');
    } else {
        savedPages.push(pageId);
        pageLink.addClass('active');
    }

    localStorage.setItem('saved_pages', JSON.stringify(savedPages));
    loadSavePage();
  }

  $(document).on('click','.page_save',function(e){
    e.preventDefault();
    saveCheck();
  })
  activeSave();
  loadSavePage();

  $(document).on('click', '.clear_saved_pages', function() {
    localStorage.clear('saved_pages');
    loadSavePage();
  });
  $(document).on('click', '.all-success-stories .search-result-option', function() {
      $(this).parent().siblings('.innvo-impact-body').find('.impact-card').show('slow');
      $(this).hide();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // JavaScript to enable drag-to-scroll
  const slider = document.querySelector('.magento-table-list');
  
  if (slider) {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2; // The 2 is to increase the scroll speed
          slider.scrollLeft = scrollLeft - walk;
      });
  }
});






// blog-archive 
jQuery(document).ready(function(){
  // Initialize Owl Carousel only when screen width is less than 767px
  function initializeCarousel() {
      if ($(window).width() <= 767) {
          $('.blog-latest-archive .blog-archive-cat-body-inner ').owlCarousel({
              items: 1, // Adjust based on how many items you want to show at once
              margin: 10,
              nav: false
          });
      } else {
          $('.blog-latest-archive .blog-archive-cat-body-inner ').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      }
  }

  // Run on page load
  initializeCarousel();

  // Run on window resize
  $(window).resize(function() {
      initializeCarousel();
  });
});
// 





//-----------------blog-archive- page search bar---------------------------
jQuery(document).ready(function($) {
  
  
  let query = '';  //---var for query 
  let formData = ''; //---- var for formdata 

  //----------------blog archive show the drop suggestion ---------
  $('#blog-ajax-search-form').on('input', function(e) {
      e.preventDefault(); // Prevent the form from submitting normally
      query = $('#blog-ajax-search-input').val();
      

      formData = $(this).serialize(); 
          $.ajax({
              type: 'GET',
              url: mapAjax.ajaxurl,
              data: formData + '&action=blog_custom_ajax_search&response_type=dropdown', // Add action and dropdown
              success: function(response) {
                  $('#blog-ajax-search-results').html(response); // Display search results
              }
          });    
     
  })


  //--------------blog archive showing results on the page using ajax----------
  $('.blog-archive-form-search .search-form-icon').on( "click", function(){
      $('.hide-onsearch-icon-click').css("display","none");
      
     // Update URL without reloading the page
    var newUrl = new URL(window.location.href);

    newUrl.searchParams.set('s', query); // Use 's' for search query in URL
    history.pushState(null, '', newUrl.href);
   
      $.ajax({
          type: 'GET',
          url: mapAjax.ajaxurl,
          data: formData + '&action=blog_custom_ajax_search&response_type=full_results', // Add action and response_type
          success: function(response) {
            $('#result-blog-archive-cat-sec').html(response); // Display full search results
            $('#blog-ajax-search-results').empty(); // Clear search suggestions
          }
      });  
    
  })


  // ---------------Event listener for the back button so that the result will be shown as per the previous page
  //--------------popstate= browser back button click event 
  window.addEventListener('popstate', function(event) {
    var newUrlParam = new URL(window.location.href);
    newUrlParam.searchParams.delete('s');
    console.log(newUrlParam);

    window.history.replaceState({}, document.title, newUrlParam.href);

    window.location.reload();

  })
   

  //----------category page infite scroll----script function

  let currentPage = 1;
  let isLoading = false;
  let hasMorePosts = true; // Track if more posts are available
  
  // Pass the category ID from your page or set it dynamically
  const categoryId = $('#category-id').val(); // Assuming you have a hidden input with the category ID

  function loadMorePosts() {
    if (isLoading || !hasMorePosts) return;
     isLoading = true; // Set loading flag to true

     // Show the loader
     $('#loader').show();

    
    currentPage++;
    $.ajax({
      type: "POST",
      dataType: "html",
      url: mapAjax.ajaxurl,
      data: {
          action: 'load_more_category_post',
          paged: currentPage,
          category: categoryId // Include category ID
      },
      success: function (res) {
            if (res.trim() === '') {
                hasMorePosts = false; // No more posts to load
            } else {
                $('#ajax-posts').append(res);
                currentPage++;
            }
            isLoading = false;
        },
      // success: function (res) {
      //     $('#ajax-posts').append(res);
      // },
      complete: function () {
          // Hide the loader
          $('#loader').hide();
          isLoading = false; // Set loading to false
      },
      error: function (xhr, status, error) {
          console.log("Error loading more posts:", error);
          isLoading = false; // Reset loading flag even if there was an error
      }
  });
}

function checkScrollPosition() {
  const scrollTop = $(window).scrollTop();
  const scrollHeight = $(document).height();
  const windowHeight = $(window).height();

  if (scrollTop + windowHeight >= scrollHeight - 2000) { // 100px from bottom
      // Show the loader
      // setTimeout(function(){
      //   $('#loader').show();
      // }, 3000);
      loadMorePosts();
  }
}

$(window).on('scroll', function() {
  checkScrollPosition();
});

loadMorePosts();


  // $('#load-more').on('click', function() {
  //     //pageNumber++;
  //     //var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=load_more_category_post';
  //     currentPage++;

  //       $.ajax({
  //           type: "POST",
  //           dataType: "html",
  //           url: mapAjax.ajaxurl,
            
  //           data: {
  //             action: 'load_more_category_post',
  //             paged: currentPage,
  //             category: categoryId // Include category ID
  //           },
  //           success: function (res) {
             
  //             $('#ajax-posts').append(res);
  //           },
        
           
  //       });
  //       return false;

       
  //   })


});

