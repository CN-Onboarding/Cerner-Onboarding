// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

 
$$('.login-screen .list-button').on('click', function () {
        var username = $$('.login-screen input[name="username"]').val();
        var password = $$('.login-screen input[name="password"]').val();
        myApp.alert('Login Accepted, ' + ' Tap OK to continue', function () {
          myApp.closeModal('.login-screen');
        });
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



















// Callbacks to run specific code for specific pages, for example for About page:
/*myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

 Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}*/


 
/*$$('.panel-left').on('opened', function () {
    myApp.alert('Left panel opened!');
});
$$('.panel-left').on('click', function () {
    myApp.alert('Left panel is closing!');
});*/ 
   