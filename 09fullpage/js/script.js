
$("#fullpage").fullpage({
    menu:".navbar-nav",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition: 'fp-right',
    navigationTooltips: ['main', 'First', 'Second','Third','footer'],
    responsiveWidth: 768,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink+','+index)

        if(index == 1){
            $(".navbar-brand").addClass("on")
            $(".navbar-brand").removeClass("ud")
            $(".nav-link.menu").addClass("on")
            $(".nav-link.menu").removeClass("ud")
        }else{
            $(".navbar-brand").removeClass("on")
            $(".navbar-brand").addClass("ud")
            $(".nav-link.menu").removeClass("on")
            $(".nav-link.menu").addClass("ud")
        }

    }
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

let winWidth = $(window).width();
winSize();

window.addEventListener("resize",function(){
    winWidth = $(window).width();
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

if(winWidth < 700){


    $(".youtube").colorbox({
        iframe:true,
        innerWidth:300,
        innerHeight:200
    })
}else{
   $(".youtube").colorbox({
    iframe:true,
    innerWidth:700,
    innerHeight:394
    }) 
}

const modal = document.querySelector("#modal")
const btnModal = document.querySelector("#btn01")
const closeBtn = modal.querySelector(".close")

btnModal.addEventListener("click",function(){
    modal.style.display = "block"
})
closeBtn.addEventListener("click",function(){
    modal.style.display = "none"
})
const modal02 = document.querySelector("#modal02")
const btnModal02 = document.querySelector("#morebar")
const closeBtn02 = modal02.querySelector(".close02")

btnModal02.addEventListener("click",function(){
    modal02.style.display = "block"
})
closeBtn02.addEventListener("click",function(){
    modal02.style.display = "none"
})

