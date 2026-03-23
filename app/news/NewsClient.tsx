"use client";

import styles from "./news.module.css";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";



export default function NewsPage() {


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
        src="/news.jpg"
        alt="News and industry insights background"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.heroContent}>

        {/* LEFT CONTENT */}
        <div className={styles.heroLeft}>

          {/* SEO */}
          <h1>News</h1>

          <p>
            Stay updated with the latest company developments, industry trends,
            and insights that shape the future of technology and business.
          </p>

          <div className={styles.actions}>
            <Link href="/services" className={styles.btnPrimary}>
              Our Services
            </Link>

            <Link href="/contact" className={styles.btnSecondary}>
              Contact Us
            </Link>
          </div>

        </div>

        {/* 3D CANVAS */}
        <div className={styles.hero3d}>
          <canvas id="polygonCanvas"></canvas>
        </div>

      </div>
    </section>







<section className={styles.newsSection}>
 <div className={styles.container}> 
  {/* HEADER */}
  <div className={styles.newsHeader}>
    <h2 data-aos="fade-up">News</h2>

    <p data-aos="fade-up">
      Stay informed with the latest company announcements, industry insights,
      and thought leadership shaping the future of technology and business.
    </p>
  </div>

  {/* FEATURED */}
  <div className={styles.featuredNews}>
    <h3 data-aos="fade-up">Featured Update</h3>

    <div className={styles.featuredCard} data-aos="fade-up">
      <span className={styles.date}>December 2025</span>

      {/* changed h4 → h3 ✅ */}
      <h3 className={styles.cardTitle}>
        Driving Innovation Through Industry-Led Digital Transformation
      </h3>

      <p>
       Our latest initiatives focus on helping organizations embrace emerging technologies, optimize operations, and build resilient digital ecosystems. By combining strategic vision with execution excellence, we continue to support sustainable growth across industries.
      </p>
    </div>
  </div>

  {/* GRID */}
  <div className={styles.newsGrid}>

    <div className={styles.card} data-aos="fade-left">
      <span className={styles.date}>November 2025</span>

      <h3 className={styles.cardTitle}>
        Expanding Our Services Portfolio
      </h3>

      <p>
       We have expanded our service offerings to include advanced analytics, cloud modernization, and AI-driven solutions to meet evolving business needs.
      </p>
    </div>

    <div className={styles.card} data-aos="fade-right">
      <span className={styles.date}>October 2025</span>

      <h3 className={styles.cardTitle}>
        Strengthening Partnerships Across Industries
      </h3>

      <p>
      Strategic collaborations with technology leaders enable us to deliver scalable, secure, and future-ready solutions for our clients.
      </p>
    </div>

    <div className={styles.card} data-aos="fade-left">
      <span className={styles.date}>September 2025</span>

      <h3 className={styles.cardTitle}>
        Insights on Digital Leadership
      </h3>

      <p>
      Our leadership team shares perspectives on navigating digital disruption and building organizations prepared for long-term success.
      </p>
    </div>

    <div className={styles.card} data-aos="fade-right">
      <span className={styles.date}>August 2025</span>

      <h3 className={styles.cardTitle}>
        Commitment to Innovation & Excellence
      </h3>

      <p>
      Continuous investment in innovation ensures we stay ahead of industry trends while delivering measurable value to our clients.
      </p>
    </div>

  </div>
  </div>
</section>





    </>
  );
}














