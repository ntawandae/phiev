          /*--For-make-Menu-responsive------------*/
  $(document).ready(function(){
		$('.toggle').click(function(){
			$('.toggle').toggleClass('active')
			$('.navigation').toggleClass('active')
		})
	});
//        for search bar
            $(document).on('click','.search',function(){
                $('.search-bar').addClass('search-bar-active')
            });
            
            $(document).on('click','.search-cancel',function(){
                $('.search-bar').removeClass('search-bar-active')
            });
     //hdeals       
               $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
            //for chat box
            $(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
            
            //            login-signup-form
            $(document).on('click','.user,.already-user',function(){
                $('.form').addClass('login-active').removeClass('sign-up-active')
            });
            $(document).on('click','.sign-up-btn',function(){
                $('.form').addClass('sign-up-active').removeClass('login-active')
            });
            $(document).on('click','.view',function(){
                $('.view-page').addClass('view-active').removeClass('view-product-active')
            });
            $(document).on('click','.form-cancel',function(){
                $('.view-page').removeClass('view-active')
            });   
            $(document).on('click','.form-cancel',function(){
                $('.form').removeClass('login-active').removeClass('sign-up-active')
            });  
            
                /*----Full Page Slider---------------*/
 
    $(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        pause:3000,
        speed:1500,
        pauseOnHover:true,
        loop:true
    });
});

/*----what we offer---------------*/
$(".services").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });


//clients
  $(document).ready(function() {
    $('#client-logos').owlCarousel({
        loop:true,
        autoplay:true,
        margin:15,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        },
        navText: ["<img src='http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png'/>","<img src='http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png'/>"]
    });

  });
//dropdown
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
//<!-- This code used to rotate drop icon(-180deg).. -->
         $('.category-nav .category-heading').click(function(){
           $('.category-nav .category-heading span').toggleClass("rotate");
         });
           $('nav ul li .first').click(function(){
             $('nav ul li .first span').toggleClass("rotate");
           });
           $('nav ul li .second').click(function(){
             $('nav ul li .second span').toggleClass("rotate");
           });