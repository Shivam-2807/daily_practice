const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener('click',()=>{
    const ranl =Math.random()*360;
    const ranr =Math.random()*360;
    box.style.left =`${ranl}px`;
    box.style.top =`${ranr}px`;
},1000);