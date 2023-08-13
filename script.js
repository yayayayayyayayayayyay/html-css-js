let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

function redirWhatsapp () {
    window.location.href = "https://wa.me/+6285237885388"
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disbaleOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });