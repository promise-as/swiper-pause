'use strict';

$(function () {});

var mySwiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,

  autoplay: 1000, //可选选项，自动滑动
  autoplayDisableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay
});

// console.log(mySwiper);

$('.swiper-container').mouseenter(function () {
  mySwiper.stopAutoplay();
});
$('.swiper-container').mouseleave(function () {
  mySwiper.startAutoplay();
});