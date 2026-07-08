# Trendy Terrace: Premium Home Decor Showcase

A high-fidelity, fully responsive multi-page storefront engineered for a boutique home decor brand. Built from the ground up using semantic HTML5, custom property-driven CSS, and vanilla JavaScript to deliver a polished, lightweight, and framework-free shopping experience.

<img width="1913" height="943" alt="Trendy Terrace Mockup" src="https://github.com/user-attachments/assets/dfb4fabe-10c6-4d97-9c50-0a6df374400c" />

---

## Core Architectural Features

The project serves as a showcase for modern front-end layouts and design consistency without relying on monolithic CSS frameworks:

- **Fluid Grid Architecture:** Built with native CSS Grid and Flexbox models, ensuring a flexible layout that responds gracefully from mobile screen sizes up to ultra-wide desktop displays.
- **Design Tokenization:** Leveraged CSS custom properties (`--variables`) to establish a single source of truth for color palettes, typographic scale, easing curves, and spacing rules.
- **Cinematic Scroll Dynamics:** Integrated asynchronous entrance animations powered by `ScrollReveal.js` to structure visual hierarchy and elevate engagement during user scrolls.
- **Dynamic Structural Templates:** Crafted and mapped stylistic layouts across individual category directories—ensuring base design logic scales consistently across diverse catalog pages.

---

## Key Engineering Insights

Developing this codebase provided deep structural insights into vanilla web performance and architecture:

*   **Accessible DOM Tree Design:** Prioritized native semantic landmark tags (`<header>`, `<main>`, `<section>`, `<article>`) to improve search engine indexing (SEO) and assist screen reader utilities (a11y).
*   **Preventing Cumulative Layout Shift (CLS):** Structured component wrappers and image containers with strict dimensional boundaries to prevent structural jumps as assets asynchronous load over slow networks.
*   **Event Delegation & Clean DOM Toggles:** Used event listener patterns to execute standard JavaScript UI actions (such as menu interactions and scroll tracking) with minimal memory footprint and browser paint overhead.
*   **Separation of Style Concerns:** Structured style sheets to decouple core layout behavior (the skeleton) from cosmetic UI tokens. This makes overrides straightforward and prevents specificity battles in the CSS.

---

## Technology Stack

*   **Markup:** Semantic `HTML5` for structural clarity.
*   **Styling:** `CSS3` featuring native layout engines and variable tokens.
*   **Interactivity:** Vanilla `ES6+ JavaScript` for direct DOM manipulation.
*   **Motion Framework:** `ScrollReveal.js` for lightweight scroll-triggered reveals.
*   **Iconography:** `Font Awesome` for high-performance vector-based UI iconography.

---

## Directory & Component Structure

The repository maintains an clean separation of styling, scripting, and media assets to keep the codebase highly maintainable:

```directory
trendy-terrace/
├── index.html             # Storefront entry point (Hero, featured arrivals, brand catalog)
├── bedroom.html           # Dedicated Bedroom collections template
├── livingroom.html        # Dedicated Living Room catalog
├── sofa.html              # Specialized Seating catalog 
├── product.html           # Highly detailed single product showcase layout
├── contact.html           # Interactive inquiry layout and support channels
├── style.css              # Central style sheet (variables, reset rules, components, media queries)
├── script.js              # Interactivity handling & ScrollReveal setups
└── img/                   # Asset folder containing optimized system imagery
    ├── new-arrival-img/   # Curated promotional cards
    ├── about-img/         # Brand lifestyle photography
    ├── Sofa/              # High-resolution seating catalog imagery
    └── other-images/      # Decoupled structural assets and decorative elements
```

---

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/abdul-rahman-0x/Trendy-Fully-Responsive-Website.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Trendy-Fully-Responsive-Website
    ```

3. Open `index.html` in your web browser to view the website.

---

## License & Credits

- **Iconography:** Vector graphics sourced via Font Awesome.
- **Imagery:** Mockup photography sourced from royalty-free, high-resolution web directories.
- **Licensing:** This project is open-source and distributed under the permissive MIT License.

---

## Get in Touch

Built by [Abdul Rahman](https://github.com/abdul-rahman-0x).

