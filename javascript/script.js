$(function () {
  $(".menu > nav > ul > li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
      $(".submenu-bg").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
      $(".submenu-bg").stop().slideUp(500);
    });
});


// script.js

const images = document.querySelectorAll('.image');
let currentIndex = 0;

document.getElementById('changeButton').addEventListener('click', function() {
  const nextIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.remove('active');
  images[nextIndex].classList.add('active');

  currentIndex = nextIndex;
});