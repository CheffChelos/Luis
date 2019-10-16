$('document').ready(() => {

  var index = 0;
  $('li.slider-navbar__item > div').eq(index).addClass('selected');


  $('.navbar__icon').on('click', () => {
    $('.navbar__item').slideToggle('slow');
  });

  const sliderProto = (ind) => {
    this.index = ind;
  }

  const slider = sliderProto.bind(window);

    $('.slides > div:not(:first-child)').slideToggle(0);

  $('li.slider-navbar__item').on('click', function() {
    //hide prev slide
    $('li.slider-navbar__item > div').eq(index).removeClass('selected');
    $('.slides>div').eq(index).slideToggle()
    //got new value of index
    index = $(this).index();
    //substitude old index value
    slider(index);
    //show new slide
    $('li.slider-navbar__item > div').eq(index).addClass('selected');
    $('.slides>div').eq(index).slideToggle()
  })

  $(".navbar").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 500);
      });

});
