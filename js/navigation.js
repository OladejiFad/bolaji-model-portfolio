const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});