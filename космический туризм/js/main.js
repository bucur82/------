$(function () {
  $(".slider__box").slick({
    prevArrow:
      '<img class="slider__arrow slider__arrow-prev" src="images/arrow-prev.svg" alt="arrow-left" />',
    nextArrow:
      '<img class="slider__arrow slider__arrow-next" src="images/arrow-next.svg" alt="arrow-right" />',
  });

  $(".nav__btn").on("click", function () {
    $(".header__nav").toggleClass("active");
  });
});
