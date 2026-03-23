
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaCloud, FaLayerGroup, FaCogs } from "react-icons/fa";

export default function Cloudservices() {







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
          <h1>Cloud Services</h1>

          <p>
Enabling scalable, secure, and agile cloud environments that support innovation, operational efficiency, and long-term business growth.
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
         
Cloud Services
        </h2>



 <div className={styles.text}>

        <p className= "reveal">


            Enabling organizations to adopt, optimize, and scale cloud environments that deliver agility, security, and sustainable value across the enterprise.
         </p>

       
          <p className="reveal">
         Our cloud services help businesses modernize infrastructure and applications by leveraging secure, scalable, and flexible cloud platforms. We work closely with organizations to design cloud strategies that align technology investments with operational priorities and long-term business objectives
          </p>
          <p className="reveal">
      Through cloud-native architectures, hybrid and multi-cloud solutions, and intelligent automation, we enable faster innovation while improving cost efficiency, performance, and governance. Our approach ensures visibility and control across complex cloud environments.
        </p>
          <p className="reveal">
    From application migration and modernization to cloud security and platform optimization, we build resilient foundations that support business continuity and rapid change. These foundations enable seamless integration across systems while enhancing reliability and scalability.
          </p>



            <p className="reveal">
   We place strong emphasis on security, compliance, and operational resilience, helping organizations manage risk while meeting regulatory and industry standards. Cloud environments are designed with governance and control embedded at every layer.
          </p>
      <p className="reveal">
 By combining strategic planning with execution excellence, we support enterprises across the full cloud journey — from assessment and roadmap development to migration, optimization, and continuous improvement in an evolving digital landscape.

</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaCloud /></div>
    <h3 className={styles.cardTitle}>Cloud Strategy</h3>
    <p className={styles.cardText}>
Define cloud adoption and modernization roadmaps aligned with business goals, security requirements, and long-term scalability.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaLayerGroup /></div>
    <h3 className={styles.cardTitle}> Cloud Platforms</h3>
    <p className={styles.cardText}>
Design and manage hybrid, multi-cloud, and cloud-native platforms that deliver flexibility, performance, and operational efficiency.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaCogs /></div>
    <h3 className={styles.cardTitle}>Cloud Operations</h3>
    <p className={styles.cardText}>
Optimize cloud environments through automation, monitoring, and governance to ensure reliability, cost control, and continuous performance improvement.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}