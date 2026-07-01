// =====================================
// Sticky Header Shadow
// =====================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.boxShadow = "none";

    }

});

// =====================================
// Active Navigation Link
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// HERO SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(showSlide,4000);


// TYPING EFFECT

const words = [
    "Fashion Model",
    "Commercial Model",
    "Brand Ambassador",
    "Runway Model"
];

let word = 0;
let letter = 0;
let current = "";
let isDeleting = false;

const typing = document.getElementById("typing-text");

function type(){

    current = words[word];

    if(isDeleting){

        typing.textContent = current.substring(0,letter--);

    }else{

        typing.textContent = current.substring(0,letter++);

    }

    if(!isDeleting && letter === current.length+1){

        isDeleting = true;

        setTimeout(type,1200);

        return;

    }

    if(isDeleting && letter===0){

        isDeleting=false;

        word++;

        if(word===words.length){

            word=0;

        }

    }

    setTimeout(type,isDeleting?50:100);

}

type();

// =====================================
// LOADING SCREEN
// =====================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 800);

});

// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 80;

    const update = () => {

        count += speed;

        if(count < target){

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    };

    update();

};

counters.forEach(counter => animateCounter(counter));

// =====================================
// SCROLL REVEAL (Intersection Observer)
// =====================================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section => {

    observer.observe(section);

});

window.addEventListener("scroll", revealSections);

revealSections();