// Page loading animation

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});




// 3D Card Mouse Effect

const cards=document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let x =
(e.offsetX / card.offsetWidth - .5) * 20;


let y =
(e.offsetY / card.offsetHeight - .5) * 20;



card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;


});



card.addEventListener("mouseleave",()=>{


card.style.transform=
"rotateY(0deg) rotateX(0deg) scale(1)";


});


});




// Smooth reveal animation

const sections =
document.querySelectorAll("section");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});



sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"1s";


observer.observe(section);


});
