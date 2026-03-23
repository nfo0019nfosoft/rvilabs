
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaProjectDiagram, FaPuzzlePiece, FaCogs } from "react-icons/fa";

export default function EnterprisePlatforms() {







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
          <h1>Enterprise Platforms</h1>

          <p>
Delivering integrated, scalable, and secure enterprise platforms that streamline operations, enhance collaboration, and drive sustainable business growth across the organization.
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
         
            Enterprise Platforms
        </h2>



 <div className={styles.text}>

        <p className= "reveal">

Enabling organizations to design, implement, and scale enterprise platforms that drive operational efficiency, collaboration, and long-term business growth.
        
         </p>

       
          <p className="reveal">
Our enterprise platform services help businesses integrate and modernize systems by leveraging scalable, secure, and flexible platforms. We collaborate closely with organizations to design solutions that align technology investments with operational priorities and strategic goals.
          </p>
          <p className="reveal">
Through modular architectures, intelligent automation, and integrated workflows, we enable faster innovation while enhancing efficiency, performance, and governance. Our approach ensures visibility and control across complex enterprise environments.
        </p>
          <p className="reveal">
From platform deployment and system integration to optimization and modernization, we build resilient foundations that support business continuity and growth. These foundations enable seamless operations and improved collaboration across departments and geographies.
          </p>



            <p className="reveal">
We place strong emphasis on security, compliance, and operational resilience, helping organizations manage risk while adhering to regulatory and industry standards. Enterprise platforms are designed with governance and control embedded at every layer.

          </p>
      <p className="reveal">
By combining strategic planning with execution excellence, we support enterprises across the full platform lifecycle — from assessment and roadmap development to implementation, optimization, and continuous improvement in a rapidly evolving digital landscape.
</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaProjectDiagram /></div>
    <h3 className={styles.cardTitle}>Platform Strategy </h3>
    <p className={styles.cardText}>
Define enterprise platform roadmaps aligned with business objectives, operational needs, and long-term scalability.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaPuzzlePiece /></div>
    <h3 className={styles.cardTitle}>Platform Design & Integration </h3>
    <p className={styles.cardText}>
Architect and integrate platforms that deliver flexibility, performance, and seamless collaboration across systems and teams.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaCogs /></div>
    <h3 className={styles.cardTitle}>Platform Operations </h3>
    <p className={styles.cardText}>
Optimize platform performance through monitoring, automation, and governance to ensure reliability, efficiency, and continuous improvement.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}