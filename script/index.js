$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height <  4900 ) {
        $('.idolimg').css({'background-image':'url(./image/pers_img1.png)'});
    }

    if (height >= 6000 ) {
        $('.idolimg').css({'background-image':'url(./image/pers_img2.png)'});
    }

    if (height >= 7000 ) {
        $('.idolimg').css({'background-image':'url(./image/pers_img3.png)'});
    }

    if (height >= 7700 ) {
        $('.idolimg').css({'background-image':'url(./image/pers_img4.png)'});
    }
});

window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    console.log(scrollY);
});