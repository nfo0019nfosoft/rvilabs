
"use client";

import { useEffect } from "react";
import styles from "../digitaltransformation/digital.module.css";
import { FaChartLine, FaRobot, FaDatabase } from "react-icons/fa";

export default function DataAI() {







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
          <h1>Data & AI</h1>

          <p>
Transforming data into actionable intelligence through advanced analytics, AI-driven insights, and scalable data platforms that power smarter decisions.
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
         
               Data & AI
        </h2>



 <div className={styles.text}>

        <p className= "reveal">
Transforming data into actionable intelligence through advanced analytics, artificial intelligence, and scalable data platforms that drive smarter decisions and sustainable business value.

        
         </p>

       
          <p className="reveal">
Our Data & AI services help organizations harness the full potential of their data by building modern, secure, and scalable data ecosystems. We enable businesses to move beyond traditional reporting toward intelligent, insight-driven operations that support strategic and operational goals.
          </p>
          <p className="reveal">
Through advanced analytics, machine learning, and AI-driven automation, we empower teams to uncover patterns, predict outcomes, and optimize performance across core business functions. Our solutions are designed to deliver measurable impact while improving speed, accuracy, and decision confidence.
        </p>
          <p className="reveal">
From data engineering and platform modernization to real-time analytics and AI model development, we build resilient data foundations that support enterprise-scale workloads. These foundations ensure seamless data integration, high availability, and trusted insights across the organization.
          </p>



            <p className="reveal">
We place strong emphasis on data governance, security, and compliance, helping organizations manage risk while ensuring data quality, transparency, and regulatory alignment. Responsible AI and ethical data practices are embedded into every solution we deliver.

          </p>
      <p className="reveal">
By combining strategic insight with deep technical expertise, we support enterprises across the full Data & AI lifecycle — from strategy and platform design to model deployment, optimization, and continuous innovation in a data-driven world.
</p>
        </div>
{/* CARDS */}
<div className={styles.highlights}>
  
  <div className={`revealLeft ${styles.card}`}>
    <div className={styles.icon}><FaChartLine /></div>
    <h3 className={styles.cardTitle}>Data Strategy</h3>
    <p className={styles.cardText}>
Define enterprise data and analytics roadmaps aligned with business priorities, governance requirements, and long-term growth objectives.
    </p>
  </div>

  <div className={`revealTop ${styles.card}`}>
    <div className={styles.icon}><FaRobot /></div>
    <h3 className={styles.cardTitle}>Analytics & AI</h3>
    <p className={styles.cardText}>
Develop advanced analytics, machine learning, and AI solutions that enable predictive insights, intelligent automation, and better decision-making.
    </p>
  </div>

  <div className={`revealRight ${styles.card}`}>
    <div className={styles.icon}><FaDatabase /></div>
    <h3 className={styles.cardTitle}>Data Platforms</h3>
    <p className={styles.cardText}>
Build and optimize modern data platforms that support scalability, security, real-time insights, and enterprise-wide data integration.
    </p>
  </div>



        </div>
      </div>
    </section>

  


























    </>
  );
}