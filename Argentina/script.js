var objs = document.querySelectorAll('.bcEx');
var obj = document.querySelector('.bcEx');

objAlt = obj.clientHeight;

objs.forEach(el => {
    el.style.width = objAlt + 'px';
})

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

var imgs = document.querySelectorAll(".imgPerfil");
window.addEventListener("scroll", function() {
    console.log(window.scrollY)
    if (window.scrollY >= 9000) {
        imgs.forEach(el => {
            el.style.filter = "blur(0px)";
        })
    } else {
        imgs.forEach(el => {
            el.style.filter = "blur(10px)";
        })
    }
})

function redirect(local) {
    window.location.href = local;
}