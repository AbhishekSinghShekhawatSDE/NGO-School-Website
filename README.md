# Gyan Jyoti Seva Samiti - NGO School Website

![Gyan Jyoti Seva Samiti Website Screenshot](https://github.com/AbhishekSinghShekhawatSDE/NGO-School-Website/blob/2f55c641329224cf23b473f8589db0019414b957/assets/output%20(3).jpg?raw=true)

This repository contains the front-end codebase for the Gyan Jyoti Seva Samiti website, a platform dedicated to showcasing the NGO's mission, programs, and services for children with special needs. The website aims to provide information to parents, donors, and the community.

**Live Demo (if applicable, otherwise remove this line or link to GitHub Pages deployment):**
[View Live Site](YOUR_LIVE_SITE_URL_HERE)

## About Gyan Jyoti Seva Samiti

Gyan Jyoti Seva Samiti is a non-governmental organization committed to creating a nurturing and empowering educational environment for children with intellectual and developmental disabilities. Operating as the Gyan Jyoti Special School in Jaipur, Rajasthan, they believe in unlocking each child's potential through personalized learning, compassionate care, and a commitment to celebrating every achievement.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile) for optimal viewing.
*   **Multi-Page Layout:** Includes dedicated pages for:
    *   Home
    *   About Us (Story, Executive Committee, Legal Info, Methodology, Team, Values)
    *   Admissions (Process, Eligibility, Required Documents)
    *   Mission & Vision (Detailed philosophy, objectives)
    *   Gallery (Photo and Video showcase)
    *   FAQ (Common questions answered)
    *   Contact Us (Address, Map, Contact Details)
*   **Interactive Elements:**
    *   Smooth scrolling for anchor links.
    *   Navbar with active link highlighting and scroll effects.
    *   Scroll-to-top button.
    *   Animations on scroll for engaging content presentation.
    *   Number counters for impact metrics.
    *   Image and testimonial carousels.
    *   Modals for detailed information (e.g., registration certificate, gallery images).
    *   Accordions for FAQ section.
*   **Informative Content:** Provides comprehensive details about the organization, its services, admission procedures, and team.
*   **Accessibility Considerations:** Basic accessibility features implemented for broader usability.

## Technologies Used

*   **HTML5:** Semantic markup for website structure.
*   **CSS3:** Custom styling with a premium orange-dominant theme.
    *   **Bootstrap 5.3.3:** For responsive layout, pre-styled components, and utility classes.
    *   **Font Awesome 6.5.1:** For icons.
    *   **Google Fonts:** 'Poppins' for headings and 'Roboto' for body text.
*   **JavaScript (Vanilla JS):** For dynamic interactions and enhancements, including:
    *   Smooth scrolling
    *   Navbar effects
    *   Scroll-to-top button
    *   Scroll-triggered animations
    *   Number counters
    *   Active navigation link highlighting
    *   Dynamic gallery loading (on Gallery page)


## Getting Started

To view or work on this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AbhishekSinghShekhawatSDE/NGO-School-Website.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd NGO-School-Website
    ```
3.  **Open `index.html` in your web browser.**
    *   Alternatively, you can use a local development server (e.g., VS Code's Live Server extension) for a better development experience with features like live reloading.

## Key Sections & Functionality

*   **`main.css`:** Defines the overall theme (premium orange dominant), typography, button styles, card designs, and responsive adjustments. It uses CSS variables for easy theme management.
*   **`main.js`:** Handles client-side interactivity:
    *   `initSmoothScroll()`: Enables smooth transitions for `href="#section"` links.
    *   `initNavbarScrollEffects()`: Adds a `navbar-scrolled` class for styling when the page is scrolled.
    *   `initScrollToTopButton()`: Manages the visibility and functionality of a scroll-to-top button.
    *   `initScrollAnimations()`: Uses Intersection Observer to trigger CSS animations on elements as they enter the viewport.
    *   `initNumberCounters()`: Animates numbers (e.g., impact statistics) when they become visible.
    *   `initActiveNavLinks()`: Highlights the active link in the navigation bar based on the current page.
    *   Specific inline scripts in HTML files handle page-specific animations (e.g., gallery loading, hero text animations).

## Developer

This website was developed by **Abhishek Singh Shekhawat**.

*   **Portfolio:** [abhisheksinghshekhawat.com](https://www.abhisheksinghshekhawat.com)
*   **LinkedIn:** [linkedin.com/in/abhisheksinghshekhawat](https://www.linkedin.com/in/abhisheksinghshekhawat/)
*   **GitHub:** [@AbhishekSinghShekhawatSDE](https://github.com/AbhishekSinghShekhawatSDE)

## Contributing

Contributions, issues, and feature requests are welcome. Please feel free to:
*   Open an issue to discuss a bug or suggest an improvement.
*   Fork the repository and submit a pull request.

