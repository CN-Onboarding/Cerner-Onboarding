// Initialize your app
var myApp = new Framework7({
    //swipePanel: 'left'
});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view4 = myApp.addView('#view-4', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

 
$$('.login-screen .list-button').on('click', function () {
        var username = $$('.login-screen input[name="username"]').val();
        var password = $$('.login-screen input[name="password"]').val();
        //myApp.alert('Login Accepted, ' + ' Tap OK to continue', function () {
          myApp.closeModal('.login-screen');
        //});
      });
 

/* Init slider and store its instance in mySwiper variable - BEGIN */

var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    spaceBetween: 0,
    slidesPerView: 1
  });

$$(document).on('pageInit', function (e) {
  // Do something here when page loaded and initialized
  
  var mySwiper = myApp.swiper('.swiper-container', {
  pagination:'.swiper-pagination',
  spaceBetween: 0,
  slidesPerView: 1
});

})

/* Init slider and store its instance in mySwiper variable - END */



