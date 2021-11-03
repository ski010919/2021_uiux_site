
$("#fullpage").fullpage({
    menu:".navbar-nav",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition: 'fp-right',
    navigationTooltips: ['main', 'First', 'Second','Third','footer'],
    responsiveWidth: 768,
});

const swiper = new Swiper(".swiper.swiper01", {
    slidesPerView:3,
    loop:true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        758: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            // spaceBetween: 10,
        },
        993: {
            slidesPerView: 1,
        },
    },
});

window.addEventListener("scroll",function(){
    let scrollY = window.pageYOffset;
    console.log(scrollY);
    if(scrollY > 100){
        $(".navbar").addClass("bg-blk px-lg-5")
        $(".navbar").removeClass("mt-4")
        $(".navbar .navbar-brand").addClass("ud")
    }else{
        $(".navbar").removeClass("bg-blk px-lg-5")
        $(".navbar").addClass("mt-4")
        $(".navbar .navbar-brand").removeClass("ud")
    }
});

let winWidth = window.width();
winSize();

window.addEventListener("resize",function(){
    winWidth = window.width();
    winSize()
});

function winSize(){
    let onView = true;
    if(winWidth < 768){
        $(".navbar-toggle").click(function(){
            if(onView == true){
                $(".navbar").addClass("onView");
                onView = false;
            }else{
                $(".navbar").removeClass("onView");
                onView = true;
            }
        })
    }
};

// $("a#btn01").append(`
// <div class="glaylayer"></div>
// <div class="overlayer"></div>
// `)

// $("a#btn01").click(function(e){
//     e.preventDefault();
//     $(".glaylayer").fadeIn();

//     let ahref = $(this).attr("href");
//     $(".overlayer").fadeIn().html(`<img src="${ahref}">`);
// });

// $(".glaylayer,.overlayer").click(function(){
//     $(".glaylayer,.overlayer").fadeOut();
// })


const modal = document.getElementById("#modal.modal_overlay")
const btnModal = document.getElementById(".sec01_lf #btn01")
btnModal.addEventListener("click",function(){
    modal.style.display = "flex"
})