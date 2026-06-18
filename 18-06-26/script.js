const darkmode =document.querySelector('#darkmode');
const hero = document.querySelector('.hero');
const aside = document.querySelector('aside');

darkmode.addEventListener('click',()=>{
    hero.classList.toggle('dark-active')
    aside.classList.toggle('dark-active')
});