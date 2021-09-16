$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false,
        auto:true
    });
    $(".nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevBtn").click(function(){
        slider1.goToPrevSlide();
    });

    const slider2 = $(".slider02").bxSlider({
        controls:false,
        pager:false,
        auto:true
    });
    $(".pager_next").click(function(){
        slider2.goToNextSlide();
    });
    $(".pager_prev").click(function(){
        slider2.goToPrevSlide();
    });

    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class");

        if(toggle == "toggle"){
            $(".toggle").addClass("active");
            $(".gnb").addClass("view");
        }else{
            $(".toggle").removeClass("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });

    $(".youtube").colorbox({
        iframe:true,
        innerWidth:700,
        innerHeight:394,
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        // spaceBetween: 30,
        effect: "coverflow",
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });
});