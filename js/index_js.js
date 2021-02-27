burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightNav');

burger.addEventListener('click',()=>
{
rightNav.classList.toggle('v-class-res');
navlist.classList.toggle('v-class-res');
navbar.classList.toggle('h-nav-res');

});