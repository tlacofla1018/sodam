// Top Button
const toTop = document.querySelector('#toTop');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(toTop, .2, {
            x: 0
        });
    } else {
        gsap.to(toTop, .2, {
            x: 100
        });
    }
}, 300));

toTop.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});