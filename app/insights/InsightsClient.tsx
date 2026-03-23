"use client";
import styles from "./insights.module.css";
import { FaBrain, FaCloud, FaShieldAlt, FaLeaf , FaLightbulb, FaUsers, FaChartLine, FaCogs } from "react-icons/fa";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";

export default function InsightsPage() {


  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <section className={styles.hero}>
      {/* Background Image */}
      <img
        src="/insight.png"
        alt="Insights on technology and innovation"
        className={styles.bg}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1>Insights</h1>
          <p>
            Thought leadership, expert perspectives, and forward-looking ideas
            shaping the future of technology, business, and innovation.
          </p>

          <div className={styles.actions}>
            <a href="/services" className={styles.primaryBtn}>
              Our Services
            </a>
            <a href="/contact" className={styles.secondaryBtn}>
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT CANVAS */}
        <div className={styles.canvasBox}>
          <canvas id="polygonCanvas"></canvas>
        </div>
      </div>
    </section>


     


    <section className={styles.insightsSection}>
      <div className={styles.insightsContainer}>
        
        {/* HEADER */}
        <div className={styles.insightsHeader} data-aos="fade-up">
          <span className={styles.insightsLabel}>Key Themes</span>

          <h2>Hot Topics</h2>

          <p>
           Critical topics influencing organizations today — shaping strategy, technology adoption, and competitive advantage in an increasingly complex and fast-evolving digital landscape.

These topics reflect the convergence of technology, business, and societal change, where organizations must respond with speed, resilience, and clarity of purpose to remain relevant and competitive.

From the rapid advancement of artificial intelligence and cloud platforms to heightened expectations around cybersecurity, sustainability, and digital trust, leaders are navigating unprecedented levels of transformation.

By exploring these areas in depth, we help decision-makers better understand emerging risks and opportunities, align innovation with business objectives, and build strategies that deliver measurable impact today while preparing for the challenges of tomorrow.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.insightsGrid}>
          
          <div className={styles.insightCard} data-aos="fade-up">
            <h3>
              <FaBrain className={styles.insightIcon} />
              Artificial Intelligence & Automation
            </h3>
            <p>Redefining productivity, decision-making, and customer experiences through intelligent systems that enable faster insights, smarter operations, and more personalized interactions.</p>
          </div>

          <div className={styles.insightCard} data-aos="fade-up" data-aos-delay="100">
            <h3>
              <FaCloud className={styles.insightIcon} />
              Cloud & Platform Modernization
            </h3>
            <p>Enabling scalable, secure, and resilient digital foundations that support agility, reliability, and continuous innovation across the enterprise.</p>
          </div>

          <div className={styles.insightCard} data-aos="fade-up" data-aos-delay="200">
            <h3>
              <FaShieldAlt className={styles.insightIcon} />
              Cybersecurity & Digital Trust
            </h3>
            <p>Strengthening resilience and digital trust across increasingly complex ecosystems, data-driven platforms, and connected enterprise environments.</p>
          </div>

          <div className={styles.insightCard} data-aos="fade-up" data-aos-delay="300">
            <h3>
              <FaLeaf className={styles.insightIcon} />
              Sustainability & ESG
            </h3>
            <p>Integrating responsible practices into technology and business strategies to support sustainable growth, regulatory alignment, and long-term value creation.</p>
          </div>

        </div>

        {/* BUTTON */}
        <div className={styles.insightsButtonWrap}>
          <a href="/insights/hot-topics" className={styles.insightsButton}>
            Read More
          </a>
        </div>

      </div>
    </section>





    <section className={styles.futureSection}>
      <div className={styles.futureContainer}>
        
        {/* LEFT CONTENT */}
        <div className={styles.futureContent} data-aos="fade-right">
          <span className={styles.futureLabel}>Future Outlook</span>

          <h2>Conversations for Tomorrow</h2>

          <p>
            Forward-looking discussions examining how technology, leadership, and innovation will redefine industries and societies.
          </p>

          <p>
            These conversations challenge assumptions, explore emerging trends, and help leaders anticipate change, navigate uncertainty, and make confident decisions in a rapidly evolving global landscape.
          </p>

          <p>
            By bringing together diverse perspectives and real-world insights, we enable meaningful dialogue that informs strategy and supports long-term, future-ready thinking.
          </p>

          <div className={styles.futureBtnWrap}>
            <a href="/insights/conversations-for-tomorrow" className={styles.futureBtn}>
              Read More
            </a>
          </div>
        </div>

        {/* RIGHT ICON VISUAL */}
        <div className={styles.futureVisual}>
          <FaBrain className={styles.futureIconOne} />
          <FaCloud className={styles.futureIconTwo} />
          <FaShieldAlt className={styles.futureIconThree} />
          <FaLeaf className={styles.futureIconFour} />
        </div>

      </div>
    </section>
  




 
    <section className={styles.expertSimpleSection}>
      <div className={styles.expertSimpleContainer}>

        {/* LEFT ICONS (STATIC FLOAT) */}
        <div className={styles.expertSimpleVisual}>
          <FaLightbulb className={styles.iconOne} />
          <FaUsers className={styles.iconTwo} />
          <FaChartLine className={styles.iconThree} />
          <FaCogs className={styles.iconFour} />
        </div>

        {/* RIGHT CONTENT (SCROLL ANIMATION) */}
        <div
          className={styles.expertSimpleContent}
          data-aos="fade-left"   /* 🔥 LEFT → RIGHT */
        >
          <span className={styles.label}>Global Perspective</span>

          <h2>World Economic Forum</h2>

          <p>
           Insights aligned with global discussions on economic resilience, digital transformation, and sustainable growth.
          </p>

          <p>
           We translate global dialogue into practical insights that help organizations respond to macro-economic and technological shifts with clarity and confidence.
          </p>
            
            <p>
            By connecting global perspectives with real-world execution, we enable leaders to understand emerging trends, assess their impact, and shape strategies that drive sustainable, long-term value in a rapidly changing global environment.
            </p>


          <div className={styles.btnWrap}>
            <a href="/insights/world-economic-forum" className={styles.btn}>
              Read More
            </a>
          </div>
        </div>

      </div>
    </section>
  





    <section className={styles.perspectiveSection}>
      <div className={styles.perspectiveWrapper}>

        {/* HEADER */}
        <div className={styles.perspectiveHeader} data-aos="fade-up">
          <span className={styles.perspectiveTag}>Leadership Thinking</span>

          <h2>Expert Perspectives</h2>

          <p>
            Perspectives from industry leaders, technologists, and strategists
            shaped by real-world experience.
          </p>

          <p>
            These insights combine strategic thinking with practical execution,
            offering clear viewpoints on navigating complexity and innovation.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.perspectiveGrid}>

          <div className={styles.perspectiveCard} data-aos="fade-up">
            <h3>
              <FaCogs className={styles.perspectiveIcon} />
              The Future of Enterprise Technology
            </h3>

            <p>
              Navigating complexity through modular architectures and AI-driven platforms.
            </p>

            <p>
              Helping enterprises stay flexible and ready for continuous change.
            </p>
          </div>

          <div className={styles.perspectiveCard} data-aos="fade-up" data-aos-delay="150">
            <h3>
              <FaUsers className={styles.perspectiveIcon} />
              Leadership in a Digital-First World
            </h3>

            <p>
              Building resilient leadership models that balance innovation and talent.
            </p>

            <p>
              Guiding leaders to inspire teams and drive sustainable growth.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className={styles.perspectiveBtnWrap}>
          <a href="/insights/expert-perspectives" className={styles.perspectiveBtn}>
            Read More
          </a>
        </div>

      </div>
    </section>
  
















    </>
  );
}