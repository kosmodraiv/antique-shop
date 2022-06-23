const board = document.querySelector('#board')
const colors = ['#B22222', '#7B68EE', '#9400D3', 'purple', '#FF1493']
const SQUARES_NUMBERS = 798
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
      clearActiveClasses()

      slide.classList.add('active') 
  })
}


function clearActiveClasses() {
  slides.forEach((slide) => {
      slide.classList.remove('active')
  })
}

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)

}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px black`
}


function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors [index]
}

$(function(){
   
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-list').on('click', function(){
    $('.product-page__content .product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });

  $('.icon-th-large').on('click', function(){
    $('.product-page__content .product__item').removeClass('list'); 
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('input[type="file"], select').styler();
  
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });


  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  


  var mixer = mixitup('.products__inner-box');


});


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});