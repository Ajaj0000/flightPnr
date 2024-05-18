


//banner search box tabs ==========
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


//menu js =======
$(".mobile_menu").click(function(){
  $(".nav_bar").addClass("active");
  $(".overlay").addClass("active");
  $("body").addClass("active");
});

$(".overlay").click(function(){
  $(".nav_bar").removeClass("active");
  $(".overlay").removeClass("active");
  $("body").removeClass("active");
});


//  var swiper = new Swiper(".banner_slider", {
//       spaceBetween: 3,
//       loop:true,
//       centeredSlides: true,
//        speed: 3000,
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });




//     $(document).ready(function () { 


//     // .partnerSwiper
//     var pSwiper1 = new Swiper('.partnerSwiper', {
//         grabCursor: false,
//         loop: true,
//         slidesPerView: 'auto',  
//         shortSwipes: false,
//         longSwipes: false,
//         allowTouchMove: false,
//         autoplay: {
//           delay: 1,  
//         }, 
//         freeMode: true, 
//         speed: 5000,
//         });
        

// });


// $(".menu_icon").click(function(){
//   $(".menu").addClass("active")
//   $(".nav").addClass("active")
//   $(".overlay").addClass("active")
//   $("body").addClass("active")
// });


// $(".overlay").click(function(){
//   $(".menu").removeClass("active")
//   $(".nav").removeClass("active")
//   $(".overlay").removeClass("active")
//   $("body").removeClass("active")
// });


// // TravelBlogSwiper
// var swiper = new Swiper(".TravelBlogSwiper", {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     640: {
//       slidesPerView: 2,
//     },

//     768: {
//       slidesPerView: 3,
//     },
//     992: {
//       slidesPerView: 3,      
//     }
//   }
// });


//  $( function() {
//     $( "#datepicker" ).datepicker();
//   } );


// // // $('.tab_nav li').click(function(){
// // //   $('.tabs-nav li').removeClass('active');
// // //   $(this).addClass('active');
// // //   $('.flight_searchbox').hide();

// // //   });

// //   $(function() {
// //   $('.tab_nav li').click(function() {

// //     // Check for active
// //     $('.tab_nav li').removeClass('active');
// //     $(this).parent().addClass('active');

// //     // Display active tab
// //     let currentTab = $(this).attr('href');
// //     $('.flight_searchbox').hide();
// //     $(currentTab).show();

// //     return false;
// //   });
// // });


// // //header fixed
// // $(window).scroll(function () {
// //   if ($(window).scrollTop() >= 300) {
// //     $('header').addClass('header_fixed');    
// //   }
// //   else {
// //     $('header').removeClass('header_fixed');    
// //   }
// // });
