$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});


// var btnMenu = document.getElementById('btnMenu');
// var menuList = document.getElementsByClassName('menu__ul');
// var listItems = document.getElementsByClassName('menu__li');
// var menuWrap = document.getElementById('menuWrap');
// var navContainer = document.getElementsByTagName('nav');
//
// // FIRST STYLE
// btnMenu.addEventListener('click', function() {
//   menuWrap.classList.toggle('menuShow');


// btnMenu.addEventListener('mouseover', function() {
//   menuWrap.classList.add('menuShow');
// });

// btnMenu.addEventListener('mouseout', function() {
//   menuWrap.classList.remove('menuShow');


  // TOGGLE HIDE SHOW
  // if (menuWrap.style.opacity === '0') {
  //   menuWrap.style.opacity = '1';
  // } else {
  //   menuWrap.style.opacity = '0';
  // }

  // COLOR CHANGE LI
  // listItems[0].style.background = 'red';
  // console.log(listItems);

// });




// SECOND STYLE
// btnMenu.addEventListener('click', btnClick=>{
//   console.log(btnClick.type, btnClick.target);
// });


// $(document).ready(function() {
//   $("#btnMenu").hover(function() {
//     $("#menuWrap").slideToggle;
//   });
// });
