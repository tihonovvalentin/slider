

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    speed:3000
  });
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  
  });


//   $('.slider-for').slick({
//     arrows: false,
//     autoplay:true,
//     speed:3000
//   })
  
//   $('.fa-chevron-left').click(function(){
//     $('.slider-for').slick('slickPrev');
//   })
  
//   $('.fa-chevron-right').click(function(){
//     $('.slider-for').slick('slickNext');
//   })