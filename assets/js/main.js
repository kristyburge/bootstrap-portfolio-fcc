$(document).ready(function() { 

  // simple smooth scrolling for bootstrap scroll spy nav
  // credit http://stackoverflow.com/questions/14804941/how-to-add-smooth-scrolling-to-bootstraps-scroll-spy-function

  $(".navbar-nav li a[href^='#']").on('click', function(e) {
     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
       }, 300, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
       });

  });


});