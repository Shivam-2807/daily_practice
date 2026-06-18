const darkmode = document.querySelector('#darkmode');
const asid = document.querySelector('.asid');
const hero = document.querySelector('.hero');
const b1 =document.querySelector('#b1')
const form1=document.querySelector('.form1');
const closebtn=document.querySelector('#closebtn')

darkmode.addEventListener('click',()=>{
    asid.classList.toggle('dark-active')
    hero.classList.toggle('dark-active')
});
b1.addEventListener('click', () =>{
   form1.style.display = 'flex';
});
closebtn.addEventListener('click',() =>{
    form1.style.display='none';
});