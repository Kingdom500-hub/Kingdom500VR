// ==========================
// KINGDOM 500
// Animations
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".card").forEach(el=>observer.observe(el));
document.querySelectorAll(".offerCard").forEach(el=>observer.observe(el));
document.querySelectorAll(".requirement").forEach(el=>observer.observe(el));
document.querySelectorAll(".statCard").forEach(el=>observer.observe(el));


// ==========================
// Smooth Navigation
// ==========================

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

});

});


// ==========================
// Navbar Background
// ==========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>100){

nav.style.background="rgba(0,0,0,.92)";

}else{

nav.style.background="rgba(0,0,0,.72)";

}

});


// ==========================
// Fade Animation
// ==========================

const animated=document.querySelectorAll(

".card,.offerCard,.requirement,.statCard"

);

animated.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".7s";

});

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

animated.forEach(item=>{

fadeObserver.observe(item);

});


// ==========================
// Button Hover Glow
// ==========================

document.querySelectorAll(".goldButton").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px rgba(214,176,75,.7)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 20px rgba(214,176,75,.25)";

});

});


// ==========================
// Future Features
// ==========================

// Counter Animation
// Discord Integration
// Gallery
// Migration Countdown
// Player Database
