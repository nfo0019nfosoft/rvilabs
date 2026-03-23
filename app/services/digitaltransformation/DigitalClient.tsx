
"use client";

import { useEffect } from "react";
import styles from "./digital.module.css";

import { FaLightbulb, FaLayerGroup, FaCogs } from "react-icons/fa";

export default function Digitaltransformation() {







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
          <h1>Digital Transformation</h1>

          <p>
           Empowering organizations to modernize operations, accelerate innovation, and build resilient digital foundations for long-term growth.
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
          Digital Transformation
        </h2>



 <div className={styles.text}>

        <p className= "reveal">
          Enabling organizations to reimagine operations, modernize technology, and create connected digital ecosystems that drive long-term value, resilience, and sustained competitive advantage.
        </p>

       
          <p className="reveal">
           Our digital transformation services help businesses respond confidently to rapidly evolving market conditions by aligning technology, people, and processes around clear strategic objectives. We focus on creating adaptive operating models that support innovation, scalability, and continuous improvement.
          </p>
          <p className="reveal">
         Through intelligent platforms, automation, and data-driven decision-making, we enable organizations to unlock new efficiencies while improving speed, visibility, and control across core business functions. Our approach emphasizes measurable outcomes that translate directly into business impact.
          </p>
          <p className="reveal">
      From legacy modernization to cloud-native and API-driven architectures, we design digital foundations that are secure, resilient, and future-ready. These foundations enable seamless integration across systems while enhancing performance, agility, and customer experience.
          </p>



            <p className="reveal">
   We work closely with leadership teams to ensure transformation initiatives are aligned with long-term business goals, regulatory requirements, and evolving market expectations. Governance, risk management, and operational stability remain central to every engagement.
          </p>




            <p className="reveal">
   By combining strategic insight with execution excellence, we support enterprises through every stage of transformation — from vision and roadmap development to implementation, optimization, and continuous evolution in an increasingly digital world.
          </p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaLightbulb /></div>
    <h3 className={styles.cardTitle}>Strategy & Vision</h3>
    <p className={styles.cardText}>
      Define clear transformation roadmaps aligned with business goals,
      innovation priorities, and long-term growth objectives.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaLayerGroup /></div>
    <h3 className={styles.cardTitle}>Modern Platforms</h3>
    <p className={styles.cardText}>
      Build scalable, cloud-ready platforms that enable flexibility,
      performance, and seamless integration across the enterprise.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaCogs /></div>
    <h3 className={styles.cardTitle}>Intelligent Operations</h3>
    <p className={styles.cardText}>
      Leverage automation, analytics, and AI-driven insights to improve
      efficiency, resilience, and operational visibility.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}