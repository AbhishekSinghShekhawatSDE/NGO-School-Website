document.addEventListener('DOMContentLoaded', function () {

    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId.length > 1 && document.querySelector(targetId)) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else if (targetId === "#") {
                    e.preventDefault(); 
                }
            });
        });
    }

    function initNavbarScrollEffects() {
        const navbar = document.querySelector('.navbar.fixed-top');
        if (!navbar) return;

        let lastScrollTop = 0;
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 80) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }

            // if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight * 2){
            //     navbar.style.top = `-${navbar.offsetHeight}px`;
            // } else {
            //     navbar.style.top = "0";
            // }
            // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        }, false);
    }

    function initScrollToTopButton() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.setAttribute('id', 'scrollToTopBtn');
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        scrollToTopBtn.classList.add('btn');
        document.body.appendChild(scrollToTopBtn);

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (!animatedElements.length) return;

        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); 
                } else {
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    function initNumberCounters() {
        const counters = document.querySelectorAll('.number-counter');
        if (!counters.length) return;

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const duration = parseInt(counter.getAttribute('data-duration') || 2000);
            const Suffix = counter.getAttribute('data-suffix') || '';
            let current = 0;
            const increment = target / (duration / 16); 

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + Suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + Suffix;
                }
            };
            requestAnimationFrame(updateCounter);
            counter.classList.add('counted');
        };
        
        const observerOptions = {
            root: null,
            threshold: 0.5 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    function initActiveNavLinks() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const currentPath = window.location.pathname.split("/").pop() || 'index.html';

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); 
            }
        });
    }
    
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.card'); 
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // card.classList.add('card-hover-active');
            });
            card.addEventListener('mouseleave', () => {
                // card.classList.remove('card-hover-active');
            });
        });
    }

    initSmoothScroll();
    initNavbarScrollEffects();
    initScrollToTopButton();
    initScrollAnimations();
    initNumberCounters();
    initActiveNavLinks();
    // initCardHoverEffects(); 

    console.log("School Website Interactivity Initialized.");
});