"use client";

import styles from "./investors.module.css";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaLeaf,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";


export default function InvestorsPage() {




          useEffect(() => {
  AOS.init({
    duration: 1000, // animation speed
    once: true,     // only once animate
    offset: 100,    // early trigger
  });
}, []);


  return (
    <>
    <section className={styles.hero}>

      {/* Background Image */}
      <Image
        src="/investors.png"
        alt="Investors Background"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>

          {/* LEFT CONTENT */}
          <div className={styles.heroLeft}>
            
            {/* ✅ SEO: only ONE H1 */}
            <h1>Investors</h1>

            {/* ✅ Use H2 for description */}
            <h2>
              Providing transparent insights, financial updates, and strategic
              direction to support informed investment decisions and long-term value creation.
            </h2>

            <div className={styles.actions}>
              <Link href="/services" className={styles.primary}>
                Our Services
              </Link>

              <Link href="/contact" className={styles.secondary}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT 3D */}
          <div className={styles.heroRight}>
            <canvas id="polygonCanvas"></canvas>
          </div>

        </div>
      </div>

    </section>
  




<section className={styles.investorsSection}>

  {/* HEADER */}
  <div className={styles.header}>
    <h2 data-aos="fade-up">Investor</h2>
    <p data-aos="fade-up">
     Delivering transparency, strategic clarity, and long-term value through disciplined governance, financial performance, and sustainable growth. We are committed to open communication with our investors, providing clear insights into our strategy, operational execution, and financial outlook. Our focus on responsible leadership and value creation ensures confidence, stability, and long-term returns for all stakeholders.
    </p>
  </div>

  {/* GRID (ALL 6 SAME DESIGN) */}
  <div className={styles.grid}>

    <div className={styles.card} data-aos="fade-right">
      <FaChartLine className={styles.icon} />
      <h3>Financial Performance</h3>
      <p>We focus on consistent revenue growth, strong cash flows, and disciplined capital allocation to support long-term shareholder value. Our financial strategy prioritizes stability, scalability, and sustainable returns.

</p>
    </div>

    <div className={styles.card} data-aos="fade-left">
      <FaShieldAlt className={styles.icon} />
      <h3>Corporate Governance</h3>
      <p>Robust governance practices guide our decision-making and risk management. We uphold the highest standards of integrity, accountability, and compliance across all operations and leadership levels.</p>
    </div>

    <div className={styles.card} data-aos="fade-right">
      <FaRocket className={styles.icon} />
      <h3>Growth Strategy</h3>
      <p>Our growth strategy is centered on innovation, market expansion, and strategic partnerships. We invest in emerging technologies and capabilities to strengthen our competitive position across industries.</p>
    </div>

    <div className={styles.card} data-aos="fade-left">
      <FaLeaf className={styles.icon} />
      <h3>ESG & Sustainability</h3>
      <p>Sustainability is embedded into our business strategy. We are committed to responsible operations, environmental stewardship, and creating positive social impact while delivering economic value.</p>
    </div>

    {/* 🔥 SAME STYLE CONTINUED */}
    <div className={styles.card} data-aos="fade-right">
      <FaFileAlt className={styles.icon} />
      <h3>Investor Relations</h3>
      <p>
     Access financial reports, earnings updates, and regulatory disclosures to stay informed about our performance and outlook.
      </p>
    </div>

    <div className={styles.card} data-aos="fade-left">
      <FaUsers className={styles.icon} />
      <h3>Leadership & Board</h3>
      <p>
       Our experienced leadership team and board provide strategic oversight, ensuring alignment with shareholder interests and long-term objectives.
      </p>
    </div>

  </div>

</section>










</>
  );
}