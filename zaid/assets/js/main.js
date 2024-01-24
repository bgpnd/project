var imageSwiper = new Swiper(".section--hero .swiper--img", {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var textSwiper = new Swiper('.section--hero .swiper--text', {
    loop: true,
    pagination: {
        el: ".section--hero .swiper--text .swiper-pagination",
    },
});

textSwiper.controller.control = imageSwiper;
imageSwiper.controller.control = textSwiper;


var theTabs = document.querySelectorAll(".tabs_nav_item");
function theTabClicks(tabClickEvent) {
    var clickedTab = tabClickEvent.currentTarget;
    document.querySelector(".tabs_nav_item.--active").classList.remove("--active");
    document.querySelector(".tabs_content_item.--active").classList.remove("--active");
    clickedTab.classList.add("--active");
    document.querySelector('[data-tabcontent="'+clickedTab.dataset.tab+'"]').classList.add("--active");
}
for (i = 0; i < theTabs.length; i++) {
    theTabs[i].addEventListener("click", theTabClicks)
}
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.onscroll = function() {myFunction()};
var header = document.querySelector("header");
var sticky = header.offsetTop;
function myFunction() {
if (window.pageYOffset > sticky){
    header.classList.add("--sticky");
  } else {
    header.classList.remove("--sticky");
  }
}
document.querySelector("input#menu").addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.querySelector('html').classList.add('overflow-hidden')
  } else {
    document.querySelector('html').classList.remove('overflow-hidden')
  }
});

let share = document.querySelector('.share');
if (share) {
    share.addEventListener('click', function() {
        navigator.clipboard.writeText(window.location.href);
        this.classList.add('--copied')
        setTimeout(() => { this.classList.remove('--copied') }, 2000);
    })
}
var labels = document.querySelectorAll(".label_close");
if(labels){
  function closeLabel(closeLabelEvent) {
    var closeLabel = closeLabelEvent.target;
    closeLabel.parentNode.classList.add('hidden')
  }
}
for (i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", closeLabel)
}

let pagination = document.querySelector('.pagination');
if (pagination) {
    let pagActive = document.querySelector('.pagination--active')
    let pagList = pagination.querySelectorAll('.pagination_list_item')
    let pagLength = document.querySelector('.pagination--length')
    if (pagActive) {
        pagActive.innerHTML = pagination.querySelector('.pagination_list_item.--active').querySelector('a').innerHTML
        pagLength.innerHTML = pagList.length
    }
}