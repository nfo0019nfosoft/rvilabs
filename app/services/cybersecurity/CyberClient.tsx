
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaShieldAlt, FaShieldVirus, FaBalanceScale } from "react-icons/fa";

export default function Cybersecurity() {







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
          <h1>Cybersecurity</h1>

          <p>
Safeguarding enterprises with integrated security frameworks, risk management, and intelligence-driven defense capabilities.
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
         
                 Cybersecurity
        </h2>



 <div className={styles.text}>

        <p className= "reveal">


          Protecting digital assets, infrastructure, and data through proactive security strategies, advanced threat protection, and resilient cybersecurity architectures.
         </p>

       
          <p className="reveal">
Our cybersecurity services help organizations safeguard critical systems, sensitive data, and digital operations against an evolving threat landscape. We take a holistic approach to security, aligning people, processes, and technology to reduce risk while enabling business agility.
          </p>
          <p className="reveal">
Through advanced threat detection, security monitoring, and intelligent automation, we enable organizations to identify vulnerabilities, respond rapidly to incidents, and maintain continuous operational resilience. Our solutions are designed to strengthen security posture without compromising performance or user experience.
        </p>
          <p className="reveal">
From network and application security to cloud and endpoint protection, we design layered defense architectures that provide visibility and control across the enterprise. These architectures ensure secure integration across systems while supporting scalability and digital transformation.
          </p>



            <p className="reveal">
We place strong emphasis on governance, risk management, and compliance, helping organizations meet regulatory, industry, and data protection requirements. Security controls are embedded into business operations to ensure consistency, accountability, and audit readiness.
          </p>
      <p className="reveal">
By combining strategic security planning with hands-on execution, we support enterprises across the full cybersecurity lifecycle — from risk assessment and architecture design to implementation, monitoring, and continuous improvement in an increasingly connected world.

</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaShieldAlt /></div>
    <h3 className={styles.cardTitle}>Security Strategy</h3>
    <p className={styles.cardText}>
Define enterprise cybersecurity roadmaps aligned with business priorities, risk tolerance, regulatory requirements, and long-term resilience goals.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaShieldVirus /></div>
    <h3 className={styles.cardTitle}>Threat Protection</h3>
    <p className={styles.cardText}>
        Detect, prevent, and respond to cyber threats through advanced monitoring, incident response, and intelligent security automation.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaBalanceScale /></div>
    <h3 className={styles.cardTitle}>Governance & Compliance</h3>
    <p className={styles.cardText}>
Strengthen governance, risk, and compliance frameworks to ensure security controls, data protection, and regulatory alignment across the enterprise.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}