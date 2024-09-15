'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './styles.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ imagePaths }) {
  useEffect(() => {
    // Animation code goes here
    gsap.utils.toArray('section').forEach((section, index) => {
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

      const dynamicImage = item.querySelector('.dynamic-image');
      if (dynamicImage) {
        gsap.from(dynamicImage, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: dynamicImage,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }, []);

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="/presentes">Lista de presentes</a></li>
            <li><a href="/como-chegar">Como chegar</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <div className="background-image" style={{backgroundImage: `url(${imagePaths.home})`}}></div>
          <div className="content">
            <h1>Jane & John's Wedding</h1>
            <p>Join us in celebrating our love</p>
          </div>
          <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.home})`}}></div>
        </section>

        <section id="story">
          <div className="background-image" style={{backgroundImage: `url(${imagePaths.story1})`}}></div>
          <div className="content">
            <h2>Our Story</h2>
            <div className="story-timeline">
              <div className="story-item" id="story1">
                <h3>How We Met</h3>
                <p>It was a beautiful summer day when...</p>
                <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.story1})`}}></div>
              </div>
              <div className="story-item" id="story2">
                <h3>Our First Date</h3>
                <p>We went to that cozy little café...</p>
                <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.story2})`}}></div>
              </div>
              <div className="story-item" id="story3">
                <h3>The Proposal</h3>
                <p>Under a starry sky, surrounded by...</p>
                <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.story3})`}}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="location">
          <div className="background-image" style={{backgroundImage: `url(${imagePaths.location})`}}></div>
          <div className="content">
            <h2>Wedding Location</h2>
            <p>Join us at the beautiful Garden Venue</p>
            <address>123 Wedding Lane, Lovetown, LV 12345</address>
          </div>
          <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.location})`}}></div>
        </section>

        <section id="hotels">
          <div className="background-image" style={{backgroundImage: `url(${imagePaths.hotels})`}}></div>
          <div className="content">
            <h2>Accommodations</h2>
            <ul>
              <li>Lovely Inn: 2 miles from the venue</li>
              <li>Cozy Suites: 3 miles from the venue</li>
              <li>Elegant Hotel: 5 miles from the venue</li>
            </ul>
          </div>
          <div className="dynamic-image" style={{backgroundImage: `url(${imagePaths.hotels})`}}></div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Jane & John's Wedding</p>
      </footer>
    </div>
  );
}