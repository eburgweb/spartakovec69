$('.slider__photo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('#fullpage').fullpage({
  //options here
  autoScrolling: true,
  // scrollHorizontally: true,
  sectionSelector: '.section__contents',
  loopBottom: true,
  loopTop: true,
  anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
  responsiveWidth: 800,
});