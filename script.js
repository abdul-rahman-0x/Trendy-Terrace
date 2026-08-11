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

// --- 5. contact form validation & ajax handler ---
const contactForm = document.getElementById("contactForm");
let statusTimeout; // tracks active timeout to prevent overlap

if (contactForm) {
    const fields = [
        {
            id: "formName",
            errorId: "nameError",
            validate: (val) => val.trim().length > 0,
        },
        {
            id: "formEmail",
            errorId: "emailError",
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        },
        {
            id: "formPhone",
            errorId: "phoneError",
            validate: (val) =>
                /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(val) &&
                val.replace(/\D/g, "").length >= 7,
        },
        {
            id: "formMessage",
            errorId: "messageError",
            validate: (val) => val.trim().length > 0,
        },
    ];

    // visual state error switcher
    const toggleFieldError = (inputEl, isValid) => {
        const parentGroup = inputEl.closest(".form-group");
        if (isValid) {
            parentGroup.classList.remove("invalid");
        } else {
            parentGroup.classList.add("invalid");
        }
    };

    // real-time error clearance
    fields.forEach(({ id }) => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.addEventListener("input", () => {
                const targetConfig = fields.find((f) => f.id === id);
                const isValid = targetConfig.validate(inputElement.value);
                toggleFieldError(inputElement, isValid);
            });
        }
    });

    // submit processing intercept
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let isFormValid = true;

        // validate all inputs sequentially
        fields.forEach(({ id, validate }) => {
            const inputElement = document.getElementById(id);
            if (inputElement) {
                const isValid = validate(inputElement.value);
                toggleFieldError(inputElement, isValid);
                if (!isValid) isFormValid = false;
            }
        });

        if (!isFormValid) return;

        // setup loading and button feedback
        const submitBtn = document.getElementById("submitBtn");
        const btnText = submitBtn.querySelector(".btn-text");
        const loader = submitBtn.querySelector(".loader");
        const formStatus = document.getElementById("formStatus");

        // clear any existing hide-timeouts
        clearTimeout(statusTimeout);
        formStatus.style.opacity = "1";

        submitBtn.disabled = true;
        btnText.classList.add("hidden");
        loader.classList.remove("hidden");
        formStatus.classList.add("hidden");

        // transmit form payload
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                formStatus.className = "form-status success";
                formStatus.textContent =
                    "Thank you! Your message has been sent successfully.";
                contactForm.reset();

                // dismiss pop-up smoothly after 4 seconds
                statusTimeout = setTimeout(() => {
                    formStatus.style.transition = "opacity 0.6s ease";
                    formStatus.style.opacity = "0";

                    setTimeout(() => {
                        formStatus.classList.add("hidden");
                        formStatus.style.opacity = "1"; // restore default opacity for next submits
                    }, 600);
                }, 4000);
            } else {
                throw new Error("API Transmission Failed");
            }
        } catch (error) {
            formStatus.className = "form-status error";
            formStatus.textContent =
                "Oops! Something went wrong. Please check your network and try again.";
        } finally {
            // restore button elements
            submitBtn.disabled = false;
            btnText.classList.remove("hidden");
            loader.classList.add("hidden");
            formStatus.classList.remove("hidden");
        }
    });
}
