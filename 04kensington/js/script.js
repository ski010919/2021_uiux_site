$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false
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
});