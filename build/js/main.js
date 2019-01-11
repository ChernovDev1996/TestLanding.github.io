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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbmF2YmFyLWJ1cmdlcicpO1xyXG52YXIgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19uYXZiYXItbmF2aWdhdGlvbicpO1xyXG52YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2hlYWRlcicpO1xyXG52YXIgYnJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbmF2YmFyLWJyYW5kJyk7XHJcbnZhciBjbGlja3MgPSAwO1xyXG5cclxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2QWRhcHRpdmUpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgbGFzdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBpZiAobGFzdFBvc2l0aW9uID4gNTApIHtcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsYXN0UG9zaXRpb24gPCA1MCkgeyBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBuYXZBZGFwdGl2ZSgpIHtcclxuICAgIGNsaWNrcysrO1xyXG4gICAgaWYgKGNsaWNrcyAlIDIgIT09IDApIHtcclxuICAgICAgICBidXJnZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIGJyYW5kLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsaWNrcyAlIDIgPT0gMCkge1xyXG4gICAgICAgIGJ1cmdlci5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgYnJhbmQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNwYXJlbnQnKTtcclxuXHJcbiAgICB2YXIgbmF2TGlzID0gbmF2TGlzdC5jaGlsZHJlbjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2TGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGNsaWNrcyAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgbmF2TGlzW2ldLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2xpY2tzICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5hdkxpc1tpXS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
