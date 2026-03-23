
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaProjectDiagram, FaSitemap, FaTools } from "react-icons/fa";

export default function ITConsulting() {







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
          <h1>IT Consulting</h1>

          <p>
Providing strategic IT consulting services that align technology initiatives with business goals, optimize operations, and drive sustainable growth.
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
         IT Consulting
        </h2>



 <div className={styles.text}>

        <p className= "reveal">

Enabling organizations to align technology strategy with business goals, optimize IT operations, and drive innovation for sustainable growth.
        
         </p>

       
          <p className="reveal">
Our IT consulting services help businesses assess, plan, and implement technology solutions that meet their unique needs. We work closely with organizations to develop strategies that optimize processes, improve performance, and maximize ROI on technology investments.
          </p>
          <p className="reveal">
Through enterprise architecture design, system integration, and digital transformation initiatives, we enable organizations to leverage technology effectively while improving operational efficiency and governance.
        </p>
          <p className="reveal">
From IT strategy development and process optimization to technology adoption and risk management, we build frameworks that support seamless operations and scalable growth.
          </p>



            <p className="reveal">
We place strong emphasis on security, compliance, and operational resilience, ensuring that IT systems are robust, reliable, and aligned with regulatory and industry standards.

          </p>
      <p className="reveal">
By combining strategic insight with hands-on execution, we guide organizations across the full IT lifecycle — from assessment and roadmap planning to implementation, optimization, and continuous improvement.
</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaSitemap /></div>
    <h3 className={styles.cardTitle}> IT Strategy & Planning</h3>
    <p className={styles.cardText}>
Develop technology roadmaps and strategies that align IT initiatives with business objectives and long-term growth.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaProjectDiagram /></div>
    <h3 className={styles.cardTitle}> System Integration</h3>
    <p className={styles.cardText}>
Integrate diverse systems and platforms to improve collaboration, efficiency, and operational continuity.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaTools/></div>
    <h3 className={styles.cardTitle}> IT Operations & Optimization</h3>
    <p className={styles.cardText}>
Enhance IT performance through process improvement, automation, monitoring, and governance to ensure reliability and scalability.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}