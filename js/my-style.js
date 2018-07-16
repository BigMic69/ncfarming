var btnMenu = document.getElementById('btnMenu');
var menuList = document.getElementsByClassName('menu__ul');
var listItems = document.getElementsByClassName('menu__li');
var menuWrap = document.getElementById('menuWrap');
var navContainer = document.getElementsByTagName('nav');

// FIRST STYLE
btnMenu.addEventListener('click', function() {
  menuWrap.classList.toggle('menuShow');


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

});




// SECOND STYLE
// btnMenu.addEventListener('click', btnClick=>{
//   console.log(btnClick.type, btnClick.target);
// });


// $(document).ready(function() {
//   $("#btnMenu").hover(function() {
//     $("#menuWrap").slideToggle;
//   });
// });
