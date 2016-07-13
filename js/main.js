var onResize = function() {
  // apply dynamic padding at the top of the body according to the fixed navbar height
  $("#document_container").css("padding-top", $(".navbar-fixed-top").height());
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function() {
  onResize();
});

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

var twitter_containerEle = $('#twitter_container');
var document_containerEle = $('#document_container');
twitter_containerEle.height = document_containerEle.height;