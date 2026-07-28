// --- 1. Sticky Navbar Logic ---
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 50);
});

// --- 2. Mobile Menu Logic ---
const menu = document.querySelector(".menu");
const toggleMenu = () => {
    menu.classList.toggle("active");
};

// Selectors for open/close buttons
document.querySelector(".menu-btn")?.addEventListener("click", toggleMenu);
document.querySelector(".close-btn")?.addEventListener("click", toggleMenu);

// Close menu automatically when a link is clicked
document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
});

// --- 3. FAQ / Accordion Logic ---
function toggleAccordion(accordionId) {
    const accordionItem = document.getElementById(accordionId);
    const answer = accordionItem.querySelector(".answer");
    const arrow = accordionItem.querySelector(".fas");

    // FIX: Typo "acitve" -> "active"
    const isActive = accordionItem.classList.toggle("active");

    if (isActive) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.classList.replace("fa-plus", "fa-minus");
    } else {
        answer.style.maxHeight = "0";
        arrow.classList.replace("fa-minus", "fa-plus");
    }
}

// --- 4. Scroll Reveal Configurations ---
const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1200,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
});

// Hero Section
sr.reveal(".slogan-1");
sr.reveal(".slogan-2", { delay: 600 });
sr.reveal(".btn-heropage", { delay: 800 });

// New Arrival Boxes (Staggered animation)
sr.reveal(".new-arrivals-box", { interval: 200 });

// About Section (Matches our new zig-zag layout)
sr.reveal(".about-title h1", { origin: "left" });
sr.reveal(".about-title p", { origin: "right" });
sr.reveal(".about-box", { interval: 300 });

// Projects / Sofa / Gallery
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".sofa-box", { interval: 150 });

// Footer
sr.reveal(".footer-headline");
sr.reveal(".footer-newsletter", { origin: "left" });
sr.reveal(".socials", { delay: 400 });
