
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaCode, FaMobileAlt, FaSyncAlt } from "react-icons/fa";

export default function Applicationdevelopement() {







  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .revealLeft, .revealRight, .revealTop"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);








  return (
    <>
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        {/* 3D Canvas */}
        <div className={styles.hero3d}>
          <canvas id="polygonCanvas"></canvas>
        </div>

        {/* Text Content */}
        <div className={styles.heroLeft}>
          <h1>Application Development</h1>

          <p>
Creating modern applications that deliver seamless user experiences, robust performance, and long-term maintainability.
          </p>

          <div className={styles.heroActions}>
            <a href="/contact" className={styles.btnPrimary}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>











    <section className={styles.serviceHero}>
      <div className={styles.container}>
        
        <span className={`reveal ${styles.tag}`}>
          CORE SERVICE
        </span>

        <h2 className={`reveal ${styles.title}`}>
          Application Development
        </h2>



 <div className={styles.text}>

        <p className= "reveal">
          Enabling organizations to design, build, and scale robust applications that drive innovation, improve user experience, and deliver measurable business value.
        </p>

       
          <p className="reveal">
           Our application development services help businesses create software solutions tailored to their unique needs. We leverage modern technologies, frameworks, and best practices to deliver secure, high-performing, and scalable applications.
          </p>
          <p className="reveal">
        From web and mobile applications to enterprise-grade platforms, we combine intuitive design with robust architecture to ensure applications are user-friendly, reliable, and adaptable to evolving business requirements.
        </p>
          <p className="reveal">
      We emphasize seamless integration with existing systems, enabling efficient workflows, enhanced productivity, and real-time data insights. Our solutions are built to support rapid growth and operational agility.
          </p>



            <p className="reveal">
   Security, maintainability, and performance are core to our development process. We follow industry standards and best practices to ensure applications are resilient, compliant, and capable of handling mission-critical operations.

          </p>
      <p className="reveal">
   By combining strategic planning with agile execution, we guide organizations through the full application lifecycle — from requirements analysis and prototyping to development, deployment, and continuous improvement.
   </p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaCode /></div>
    <h3 className={styles.cardTitle}> Custom Application Development</h3>
    <p className={styles.cardText}>
     Build tailored software solutions that address unique business challenges, enhance user engagement, and drive operational efficiency.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaMobileAlt /></div>
    <h3 className={styles.cardTitle}> Mobile & Web Platforms</h3>
    <p className={styles.cardText}>
      Design responsive web and mobile applications that provide seamless user experiences across devices and platforms.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaSyncAlt /></div>
    <h3 className={styles.cardTitle}>Application Modernization </h3>
    <p className={styles.cardText}>
     Upgrade legacy systems with modern architectures and technologies to improve performance, scalability, and maintainability.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}