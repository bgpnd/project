var swiper = new Swiper(".section--testimonial .swiper", {
    loop: true,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// const toggleOpen = document.querySelector('[data-toggle]').addEventListener('click', function(e) {
//     const attr = this.dataset.toggle;
//     this.classList.toggle('active');
//     if(this.classList.contains('active')){
//         document.querySelector('body').classList.add('overflow-hidden');
//         document.querySelector('[data-toggle-open="' + attr + '"]').classList.add('open');
//     }else{
//         document.querySelector('body').classList.remove('overflow-hidden');
//         document.querySelector('[data-toggle-open="' + attr + '"]').classList.remove('open');
//     }
//     e.preventDefault();
// });

document.querySelector('.header-btn--menu').addEventListener('click', function () { 
    document.querySelector('.header-collapse--menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('overflow-hidden');
    document.querySelector('.hamburger').classList.toggle('is-active')
})

document.querySelector('.header-collapse-body').querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.header-collapse--menu').classList.toggle('open');
        document.querySelector('body').classList.toggle('overflow-hidden');
        document.querySelector('.hamburger').classList.toggle('is-active')
    })
})

window.addEventListener("scroll", function() { 
    if (document.documentElement.scrollTop > 50) {
        document.querySelector('.header').classList.add('stick');
    }else {
        document.querySelector('.header').classList.remove('stick');
    }
});