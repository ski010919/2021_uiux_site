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

    // $(".toggle").on("이벤트이름",리스너);  < 이벤트
    // $(".toggle").on("click",function(){});  <이벤트 예시
    // $(".toggle").click(function(){});   <축약형
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);

        if( toggle == "toggle"){
            // $(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            // $(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });
});