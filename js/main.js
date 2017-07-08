(function($){
    
  $(window).on('load', function(){
    var map;
    var beetroot = {lat: 51.4938405, lng: 31.2999212};
    var mapContainer = $('#map')[0];
    map = new google.maps.Map(mapContainer, {
      center: beetroot,
      zoom: 17
    });
    var image = "img/pin.png";
    var beachMarker = new google.maps.Marker({
        position: beetroot,
        map: map,
        icon: image
    });
  });
  
  $(document).ready(function(){
        
//      Mobile menu
        $(function () {
                $('.hamburger-menu').on('click', function() {
                    $('.bar').toggleClass('animate');
                    var mobileNav = $('.mobile-nav');
                    mobileNav.toggleClass('hide show');
                })
            });
    
//    Smoth menu scroll
    $(function () {
    $('.main-banner__menu-item').on('click', function(event){ 
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    });
//    Back to top btn
    
    $("#back-top").hide();
    
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
      });

      $('#back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
      });
    });
    
//    Slick slider configurations
    
    $('.works__slider').slick({
      dots: true,
      infinite: true, 
      arrows: true,
      prevArrow: "<i class='a-left control-c prev slick-prev'>",
      nextArrow: "<i class='a-right control-c next slick-next'>",
    });
      
 $(".team__wrapper").slick({
      dots: false,
      infinite: true, 
      arrows: true,
      prevArrow: "<i class='a-left control-c prev slick-prev'>",
      nextArrow: "<i class='a-right control-c next slick-next'>",
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 900,
        settings: {
            slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1
        }
      }]
  });    

});
  
})(jQuery);