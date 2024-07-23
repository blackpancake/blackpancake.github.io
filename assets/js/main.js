

var iUp = (function () {
    var time = 0,
        duration = 150,
        clean = function () {
            time = 0;
        },
        up = function (element) {
            setTimeout(function () {
                element.classList.add("up");
            }, time);
            time += duration;
        },
        down = function (element) {
            element.classList.remove("up");
        },
        toggle = function (element) {
            setTimeout(function () {
                element.classList.toggle("up");
            }, time);
            time += duration;
        };
    return {
        clean: clean,
        up: up,
        down: down,
        toggle: toggle
    };
})();

// function getBingImages(imgUrls) {
//     var panel = document.querySelector('#panel');
//     panel.style.background = "url('" + "https://i0.hdslb.com/bfs/article/2b039af9fc9846705027e2e588e30fc31729df6d.jpg@1256w_746h_!web-article-pic.avif" + "') center center no-repeat #666";
//     panel.style.backgroundSize = "cover";
// }

function decryptEmail(encoded) {
    var address = atob(encoded);
    window.location.href = "mailto:" + address;
}

document.addEventListener('DOMContentLoaded', function () {

    var iUpElements = document.querySelectorAll(".iUp");
    iUpElements.forEach(function (element) {
        iUp.up(element);
    });

    var avatarElement = document.querySelector(".js-avatar");
    avatarElement.addEventListener('load', function () {
        avatarElement.classList.add("show");
    });
});

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
    if (navigationWrapper.style.display == "block") {
        navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            navigationWrapper.classList.toggle('visible');
            navigationWrapper.classList.toggle('animated');
            navigationWrapper.classList.toggle('bounceOutUp');
            navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
        });
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceOutUp');
    } else {
        navigationWrapper.classList.toggle('visible');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
    }
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-list');
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-angleup');
    btnMobileMenu.classList.toggle('animated');
    btnMobileMenu.classList.toggle('fadeIn');
});
