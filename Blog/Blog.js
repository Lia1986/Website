$(document).ready(function () {
  $('.blog-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.blog-carousel-nav'
  });
  $('.blog-carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.blog-carousel',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  
});