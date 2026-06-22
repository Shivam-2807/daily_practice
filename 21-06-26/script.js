const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const bt =document.querySelector('#bt1');
const addpbutton =document.querySelector('.addpbutton');
const inpt1 =document.querySelector('.inpt1');
const inpt2 =document.querySelector('.inpt2');
const cardcont = document.querySelector('.card-container');
const delet = document.querySelector('.delete');
const edit = document.querySelector('.edit');

bt.addEventListener('click',()=>{
    overlay.style.display='flex';
})

btn.addEventListener('click',()=>{
    overlay.style.display='none';
})
//  =============

addpbutton.addEventListener('click',()=>{
    
    const cardd = `<div class="card">
        <img class="card-img" src="${inpt1.value}">
        <div><h3>${inpt2.value}</h3></div> 
        <div><button class="delete">delete</button> <button class= "edit">edit</button>`;
        
    cardcont.innerHTML += cardd;
    inpt1.value = "";
    inpt2.value = "";
});

cardcont.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const card = e.target.closest('.card');
        card.remove();
    }
});