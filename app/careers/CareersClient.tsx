"use client";

import styles from "./careers.module.css";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";


export default function CareersPage() {   // ✅ MUST be default export
    

const [fileName, setFileName] = useState("No file chosen");

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    setFileName(e.target.files[0].name);
  }
};

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
      
      <Image
        src="/careers.png"
        alt="Careers at RV Labs"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.content}>

          <div className={styles.heroLeft}>
            <h1>Careers</h1>

            <h2>
              Join our team to grow, innovate, and shape the future with impactful work.
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

          <div className={styles.heroRight}>
            <canvas id="polygonCanvas"></canvas>
          </div>

        </div>
      </div>

    </section>








<section className={styles.careersSection}>
  <div className={styles.careerContainer}>

    {/* HEADER */}
    <div className={styles.careersHeader}>
      <h2 data-aos="fade-up">Careers</h2>
      <p data-aos="fade-up">
    Join our team to grow, innovate, and shape the future with impactful work. We value creativity, collaboration, and continuous learning, offering opportunities to make a real difference across industries.
      </p>
    </div>

    {/* GRID */}
    <div className={styles.careersGrid}>

      {/* CARD */}
      <div className={styles.card} data-aos="fade-right">
        <div className={styles.iconBox}>
          {/* SVG ICON */}
          <svg viewBox="0 0 24 24">
            <path d="M4 4h16v12H4zM2 20h20" />
          </svg>
        </div>

        <h3>Software Engineer</h3>

        <p>
        Develop innovative software solutions, collaborate with cross-functional teams, and contribute to cutting-edge projects that drive business success.
        </p>

        <button className={styles.btn}>Apply Now →</button>
       
      </div>

      <div className={styles.card} data-aos="fade-left">
        <div className={styles.iconBox}>
          <svg viewBox="0 0 24 24">
            <path d="M3 3v18h18M7 15l4-4 4 4 5-5" />
          </svg>
        </div>

        <h3>Product Manager</h3>

        <p>
        Lead product strategy, define roadmaps, and work closely with engineering and design teams to deliver exceptional user experiences.
        </p>

        <button className={styles.btn}>Apply Now →</button>
        
      </div>

      <div className={styles.card} data-aos="fade-right">
        <div className={styles.iconBox}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2l8 4-8 4-8-4 8-4zM4 10l8 4 8-4M4 14l8 4 8-4" />
          </svg>
        </div>

        <h3>UX/UI Designer</h3>

        <p>
         Craft intuitive and visually appealing digital experiences that engage users and align with business goals.
        </p>
        <button className={styles.btn}>Apply Now →</button>

      </div>

      <div className={styles.card} data-aos="fade-left">
        <div className={styles.iconBox}>
          <svg viewBox="0 0 24 24">
            <path d="M4 19h16M4 15h10M4 11h7M4 7h4" />
          </svg>
        </div>

        <h3>Data Analyst</h3>

        <p>
          Analyze data to generate insights, support strategic decisions, and optimize performance across teams and projects.
        </p>

        <button className={styles.btn}>Apply Now →</button>
        
      </div>

    </div>
  </div>
</section>






<section className={styles.applySection}>
  <div className={styles.applyContainer}>

    {/* LEFT IMAGE */}
    <div className={styles.left} data-aos="fade-right">
      <img src="/careers2.png" alt="Careers visual" />
    </div>

    {/* RIGHT FORM */}
    <div className={styles.formBox} data-aos="fade-left">

      <h2>Apply for a Position</h2>

      <p>
        Take the next step in your career. Submit your details and our team
        will get in touch with you.
      </p>

      <form className={styles.form}>

        <div className={styles.row}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className={styles.row}>
          <input type="tel" placeholder="Phone Number" />

          {/* FIXED SELECT */}
          <div className={styles.selectWrapper}>
            <select>
              <option value="">Select Position</option>
              <option>Software Engineer</option>
              <option>Product Manager</option>
              <option>UX/UI Designer</option>
              <option>Data Analyst</option>
            </select>
          </div>
        </div>

        <textarea placeholder="Tell us about yourself"></textarea>



             <label className={styles.fileUpload}>
  <input type="file" onChange={handleFileChange} />

  <span className={styles.uploadText}>Upload Resume</span>

  {/* 🔥 INLINE FILE NAME */}
  <span className={styles.fileName}>{fileName}</span>
</label>




        <button type="submit">
          Submit Application <span>→</span>
        </button>

      </form>
    </div>

  </div>
</section>










    </>
  );
}