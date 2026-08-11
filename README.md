# Trendy Terrace

I designed and developed Trendy Terrace, a responsive multi-page storefront for a premium home decor brand. I built this project to demonstrate how to create clean layouts, consistent visual components, and asynchronous interactive forms using only native web technologies—HTML5, CSS3, and vanilla JavaScript—without relying on heavy frameworks or external CSS libraries.

[![Trendy Terrace Live Site](https://img.shields.io/badge/Live_Demo-trendy--terrace--in.vercel.app-blue?style=flat-to-the-badge)](https://trendy-terrace-in.vercel.app)

<img width="1913" height="943" alt="Trendy Terrace Showcase" src="https://github.com/user-attachments/assets/95fe1300-deff-4da4-83a8-9926f6149e81" />

---

## Tech Stack

- **HTML5** — Semantic and accessible page structure
- **CSS3** — Responsive layouts, Grid, Flexbox, custom properties, animations
- **JavaScript (ES6+)** — UI interactions, validation, and asynchronous requests
- **ScrollReveal.js** — Scroll-triggered content reveals
- **Font Awesome** — Interface icons
- **Web3Forms** — Contact form submission

---

## Engineering Highlights

### 1. Fluid Layouts & Bento Grids
Instead of bulky visual frameworks, the grids are structured natively:
*   **Flexbox and Native CSS Grid:** Ensures cards, collections, and structural components adapt dynamically across ultra-wide, desktop, tablet, and mobile displays.
*   **Adaptive Layout Architectures:** Mapped layout files (`sofa.html`, `livingroom.html`, `bedroom.html`) to showcase modular, structured product catalog variations.

### 2. Design Tokens with CSS Variables
I structured a central styling system using CSS custom properties (`style.css`). This maintains a single source of truth for:
*   Font family hierarchies (`var(--accent-font)` for editorial serif typography and default system sans-serif font).
*   Warm, brand-specific earth color palettes (`var(--primary)`, `var(--secondary)`, `var(--brown-white)`).
*   Central transition timings and curves to keep interactive elements behaving identically across all subpages.

### 3. Asynchronous Form Validation & Submissions
The interactive contact form (`contact.html`) handles communication cleanly without breaking the user experience:
*   **Strict Client-side Checks:** Evaluates fields sequentially. Rejects inputs that fail to match correct email formats or realistic telephone character structures.
*   **AJAX Submissions:** Uses native `fetch` to submit form payloads directly to the **Web3Forms API**, preventing annoying full-page browser reloads.
*   **Form Lifecycle Feedback:** Features an integrated loading spinner and an auto-dismissing success banner that automatically fades away after 4 seconds using tracked timeouts to avoid overlapping UI state changes.

### 4. Layout Stability & Hardware Acceleration
To ensure clean performance and minimize cumulative layout shifts (CLS):
*   **Dimensional Boundaries:** Image wrappers are defined with exact bounds, reserving correct dimensions before image files completely download over slow network connections.
*   **Staggered Page-Load Transitions:** Applied pure CSS transitions combined with `@keyframes` slide-up animations to animate the hero text, sidebars, and form fields sequentially on initial page mount.

---

## Project Structure

```directory
trendy-terrace/
├── index.html             # Main landing page (hero space, arrivals, brand intro)
├── bedroom.html           # Bedroom catalog grid layout
├── livingroom.html        # Living room showroom template
├── sofa.html              # Dedicated seating catalog
├── product.html           # Single product feature template
├── contact.html           # Validated asynchronous contact inquiry form
├── style.css              # Central stylesheet (design tokens, layout rules, and media queries)
├── script.js              # UI toggles, ScrollReveal config, and form validation
└── img/                   # Organized product and UI photography asset folders
```

---

## Running Locally

Since this website is built entirely on standard native browser standards, it requires no package installations, compiler setups, or server environments:

1. Clone the repository:
   ```sh
   git clone https://github.com/abdul-rahman-0x/trendy-terrace.git
   ```
2. Enter the project directory:
   ```sh
   cd trendy-terrace
   ```
3. Open `index.html` inside your web browser, or launch it with a simple local server extension like Live Server.

---

## What I Learned

*   **UI Hierarchy & Staggered Transitions:** Setting coordinate delays via CSS variables makes page introductions look hand-crafted and premium.
*   **Robust Client-side Forms:** Intercepting browser submissions to execute asynchronous fetch payloads provides a clean, app-like feedback loop for users.
*   **Component Structure in Vanilla Files:** Separating core layout templates (like structural bento grids) from style rules keeps the codebase scalable and clean as new pages are introduced.

---


## License & Credits

*   **Icons:** Vector assets loaded via Font Awesome.
*   **Photography:** Royalty-free high-resolution architectural directories.
*   **Licensing:** Open-source release under the [MIT License](LICENSE).

---

## Author

Crafted by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**.
