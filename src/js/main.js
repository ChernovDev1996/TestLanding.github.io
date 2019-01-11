var burger = document.querySelector('.hero__navbar-burger');
var navList = document.querySelector('.hero__navbar-navigation');
var header = document.querySelector('.hero__header');
var brand = document.querySelector('.hero__navbar-brand');
var clicks = 0;

burger.addEventListener('click', navAdaptive);
window.addEventListener('scroll', function (event) {
    var lastPosition = window.scrollY;
    if (lastPosition > 50) {
        burger.classList.add('hidden');
    }
    else if (lastPosition < 50) { burger.classList.remove('hidden'); }
});

function navAdaptive() {
    clicks++;
    if (clicks % 2 !== 0) {
        burger.style.color = 'black';
        brand.style.color = 'black';
    }
    else if (clicks % 2 == 0) {
        burger.style.color = 'white';
        brand.style.color = 'white';
    }

    navList.classList.toggle('active');
    header.classList.toggle('transparent');

    var navLis = navList.children;
    for (var i = 0; i < navLis.length; i++) {
        if (clicks % 2 !== 0) {
            navLis[i].style.color = 'black';
        }
        else if (clicks % 2 == 0) {
            navLis[i].style.color = 'white';
        }
    }
}