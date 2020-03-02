$(function(){
    //navbar bg color    
	$(window).scroll(function(){
		var anit = $(this).scrollTop();
		if(anit > 200){
			$('.navbar').addClass('bg');		   
		   }
		else{
			$('.navbar').removeClass('bg');
		}
    });
    //type js
    $(".typewriter").typed({
        strings: ["-Hello!", " I am <u style=\"color: #ff4a57\">Anit Sheikh</u>", "Nice to meet you."],
        // optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 1500,
        // backspacing speed
        backSpeed: 100,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
    //venobox for youtube
    $('.venobox').venobox();
    //wow js
    new WOW().init();
    //mixitup 
    var containerEl = document.querySelector('.portimg');
            var mixer = mixitup(containerEl);
//slick slide
$('.clright').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,   
    asNavFor: '.clients_name',
    nextArrow: '.left',
    prevArrow: '.right',
    fade:true,
  });
  $('.clients_name').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.clright',
    focusOnSelect: true,
    arrows: false,
    fade: true,
  });
  //smooth scroll js
  var html_body = $('html, body');
  $('.navbar a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top -20
              }, 1500);
              return false;
          }
      }
  });
  //backtotop
    $('.backtotop').click(function(){
		$('html,body').animate({scrollTop:0},1500);
    });
    $(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling < 820){
			$('.backtotop').fadeOut();	
             }
			else{
				$('.backtotop').fadeIn();
         }
    });
     //Preloader
     $('#preloader').delay(350).fadeOut('slow');
});