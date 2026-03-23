
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaNetworkWired, FaServer, FaTools } from "react-icons/fa";

export default function InfrastructureServices() {







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
          <h1>Infrastructure Services</h1>

          <p>
Delivering reliable, secure, and scalable IT infrastructure solutions that ensure operational continuity, optimize performance, and support business growth.
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
     Infrastructure Services
        </h2>



 <div className={styles.text}>

        <p className= "reveal">


  Enabling organizations to design, deploy, and manage robust IT infrastructure that drives operational efficiency, reliability, and scalable growth.      
         </p>

       
          <p className="reveal">
Our infrastructure services help businesses build and maintain secure, high-performing, and resilient IT environments. We work closely with organizations to design infrastructure strategies that align technology investments with operational priorities and business objectives.
          </p>
          <p className="reveal">
Through modern data centers, cloud integrations, and intelligent automation, we ensure infrastructure is scalable, reliable, and optimized for performance and cost-efficiency. Our approach provides visibility, control, and operational resilience across complex environments.
        </p>
          <p className="reveal">
From network design and server management to storage solutions and disaster recovery, we deliver foundations that support continuous operations and business continuity. This enables seamless collaboration and system integration across the enterprise.
          </p>



            <p className="reveal">
Security, compliance, and operational excellence are central to our infrastructure services. We help organizations manage risk, meet regulatory requirements, and maintain high standards of governance.

          </p>
      <p className="reveal">
By combining strategic planning with hands-on execution, we support enterprises across the full infrastructure lifecycle — from assessment and roadmap development to implementation, optimization, and continuous improvement in a rapidly evolving digital landscape.
</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaNetworkWired /></div>
    <h3 className={styles.cardTitle}> Infrastructure Strategy</h3>
    <p className={styles.cardText}>
Develop IT infrastructure roadmaps that align with business objectives, scalability requirements, and operational priorities.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaServer /></div>
    <h3 className={styles.cardTitle}>Infrastructure Design & Deployment </h3>
    <p className={styles.cardText}>
Architect and implement networks, servers, storage, and cloud integrations that ensure high performance, reliability, and flexibility.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaTools/></div>
    <h3 className={styles.cardTitle}> Operations & Optimization</h3>
    <p className={styles.cardText}>
Optimize infrastructure through monitoring, automation, and governance to ensure efficiency, cost control, and continuous improvement.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}