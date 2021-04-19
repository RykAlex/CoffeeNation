$(document).ready(function () {
  /* Slick silder https://kenwheeler.github.io/slick/ */

  $(".slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: true,
          autoplay: true,
        },
      },
    ],
  });

  $("#myUl").endlessRiver();
  $("#myUl2").endlessRiver();
  $("#myUl3").endlessRiver();

  /* modal Search desktop
  ============================*/
  let element = document.querySelector("header .desktop .top .search img");
  console.log(element);

  element.addEventListener("click", function () {
    let input = document.querySelector(".search-form");
    input.classList.add("show");
  });

  let closeInput = document.querySelector(".search-form .close");
  closeInput.addEventListener("click", function () {
    let input = document.querySelector(".search-form");
    input.classList.remove("show");
  });
});

/* modal Burger mobile
  ============================*/
let burger = document.querySelector(".burger img");
console.log(burger);

burger.addEventListener("click", function () {
  let slide = document.querySelector(".slide-menu");
  slide.classList.add("show");
});

let closeSlide = document.querySelector(".slide-menu .close");
closeSlide.addEventListener("click", function () {
  let slide = document.querySelector(".slide-menu");
  slide.classList.remove("show");
});
