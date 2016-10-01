function toggleVisibility() {
    var h;
    if ($(window).height() < 580) {
        h = 580;
    } else {
        h = $(window).height();
    }
    if ($(window).scrollTop() >= h) {
        $("#footer").show();
        $("#devices").hide();
        $("#description").hide();
    } else {
        $("#footer").hide();
        $("#devices").show();
        $("#description").show();
    }
}

function update() {
    if ($(window).height() >= 580) {
        $("#footer").removeClass("gradient_bg");
    } else {
        $("#footer").addClass("gradient_bg");
    }
}

$(document).ready(function() {
    toggleVisibility();
    update();
    $(window).scroll(function() {
        toggleVisibility();
    });
    $(window).resize(function() {
        update();
    });
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1281,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});