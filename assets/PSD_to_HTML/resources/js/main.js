$(document).ready(function () {
    $("#bar1").barfiller({ barColor: "#39b4af", duration: 3e3, tooltip: !1 }),
        $("#bar2").barfiller({ barColor: "#39b4af", duration: 3e3, tooltip: !1 }),
        $("#bar3").barfiller({ barColor: "#39b4af", duration: 3e3, tooltip: !1 }),
        $(".js-about-section").waypoint(function (o) {
            "down" == o ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
        }),
        $("a").on("click", function (o) {
            var e;
            "" !== this.hash &&
                (o.preventDefault(),
                (e = this.hash),
                $("html, body").animate({ scrollTop: $(e).offset().top }, 500, function () {
                    window.location.hash = e;
                }));
        });
});
const modalView = document.querySelectorAll(".work_modal"),
    modalBtns = document.querySelectorAll(".work_button"),
    modalClose = document.querySelectorAll(".work_modal-close");
let modal = function (o) {
    modalView[o].classList.add("active-modal");
};
modalBtns.forEach((o, e) => {
    o.addEventListener("click", () => {
        modal(e);
    });
}),
    modalClose.forEach((o) => {
        o.addEventListener("click", () => {
            modalView.forEach((o) => {
                o.classList.remove("active-modal");
            });
        });
    });
var swiperTestimonial = new Swiper(".testimonial_container", {
    cssMode: !0,
    loop: !0,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    mousewheel: !0,
    keyboard: !0,
});
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
