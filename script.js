// Typing Animation

const text =
"Cyber Security Expert & Digital Marketing Specialist";

let index = 0;

const title = document.querySelector(".hero-text h2");

title.innerHTML = "";

function typing() {

if(index < text.length){

title.innerHTML += text.charAt(index);

index++;

setTimeout(typing,70);

}

}

typing();



// Active Menu

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



// Scroll Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition="0.8s";

observer.observe(card);

});



// Floating Effect

const image=document.querySelector(".hero-image img");

image.addEventListener("mousemove",()=>{

image.style