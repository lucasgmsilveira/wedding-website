// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animations for story timeline and dynamic images
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach((section, index) => {
        // Animate background image
        gsap.from(section.querySelector('.background-image'), {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top center",
                scrub: true
            }
        });

        // Animate content
        gsap.from(section.querySelector('.content'), {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });

        // Animate dynamic image
        const dynamicImage = section.querySelector('.dynamic-image');
        if (dynamicImage) {
            gsap.from(dynamicImage, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: dynamicImage,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });
        }
    });

    // Additional animations for story items
    gsap.utils.toArray('.story-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });

        // Animate dynamic image within story item
        const dynamicImage = item.querySelector('.dynamic-image');
        if (dynamicImage) {
            gsap.from(dynamicImage, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.5, // Slight delay for a staggered effect
                scrollTrigger: {
                    trigger: dynamicImage,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });
        }
    });
});