document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HAMBURGER MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            const isOpen = nav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* CLOSE MENU AFTER LINK CLICK */

        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });


        /* CLOSE MENU ON DESKTOP */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 995) {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    function updateActiveNavigation() {

        let current = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =========================
       TYPING EFFECT
    ========================= */

    const textElement =
        document.querySelector(".typed-text");

    if (textElement) {

        const words = [
            "Python Developer",
            "Data Analyst",
            "BI Analyst",
            "Software Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                textElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;
                }

            } else {

                textElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 70 : 120
            );

        }

        typeEffect();

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".section-title, " +
            ".about-content, " +
            ".about-card, " +
            ".service-card, " +
            ".skills-category, " +
            ".technology-section, " +
            ".project-card, " +
            ".education-item, " +
            ".experience-card, " +
            ".contact-info, " +
            ".contact-form"
        );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );

    }


    /* =========================
       SKILL BAR ANIMATION
    ========================= */

    const skillProgress =
        document.querySelectorAll(
            ".skill-progress"
        );

    skillProgress.forEach((bar) => {

        let finalWidth = "";

        if (bar.classList.contains("python")) {
            finalWidth = "95%";
        }
        else if (bar.classList.contains("html")) {
            finalWidth = "90%";
        }
        else if (bar.classList.contains("css")) {
            finalWidth = "85%";
        }
        else if (bar.classList.contains("javascript")) {
            finalWidth = "90%";
        }
        else if (bar.classList.contains("sql")) {
            finalWidth = "99%";
        }
        else if (bar.classList.contains("powerbi")) {
            finalWidth = "80%";
        }
        else if (bar.classList.contains("excel")) {
            finalWidth = "85%";
        }
        else if (bar.classList.contains("analysis")) {
            finalWidth = "80%";
        }

        bar.style.width = "0%";
        bar.style.transition = "width 1.5s ease";

        const skillObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            setTimeout(() => {

                                entry.target.style.width =
                                    finalWidth;

                            }, 200);

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );

        skillObserver.observe(bar);

    });

});