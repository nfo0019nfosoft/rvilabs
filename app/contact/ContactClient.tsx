"use client";

import styles from "./contact.module.css";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {

  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  const data = [
    {
      title: "Talent Acquisition (Recruitment Team)",
      content: (
        <>
          <h3>Campus and Fresher Recruitment</h3>
          <p>
            For campus placement and fresher recruitment related queries,
            please raise a virtual ticket through our recruitment portal.
          </p>

          <h3>Experienced Professionals</h3>
          <p>
            For interview updates, candidature status, or offer letters,
            reach out with relevant details to the recruitment support team.
          </p>

          <h3>Ethics & Compliance</h3>
          <p>
            For concerns related to recruitment ethics or compliance,
            confidential reporting channels are available.
          </p>
        </>
      ),
    },
    {
      title: "HR Services",
      content: (
        <>
          <h3>Provident Fund (PF)</h3>
          <p>
            PF-related queries including balance, withdrawals, and transfers
            should include employee ID and tenure details.
          </p>

          <h3>Exit & Employment Letters</h3>
          <p>
            Post-exit documentation requests can be submitted with
            employee details for faster resolution.
          </p>
        </>
      ),
    },
    {
      title: "Background Verification (BGV)",
      content: (
        <p>
          Former employees requiring background verification assistance should submit complete employment details for verification processing.
        </p>
      ),
    },
    {
      title: "Procurement",
      content: (
        <p>
          Vendor payment inquiries must include invoice number, PO number, amount, and internal point of contact to ensure timely support.
        </p>
      ),
    },
    {
      title: "Other",
      content: (
        <p>
          For investor, media, or general corporate inquiries, please submit relevant identification details to route your request accurately.
        </p>
      ),
    },
  ];





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
        src="/contact.png"
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
            <h1>Contact Us</h1>

            {/* ✅ Use H2 for description */}
            <h2>
             Get in touch with our team to discuss your needs, ask questions, or explore how we can work together to achieve your goals.
            </h2>

            <div className={styles.actions}>
              <Link href="/services" className={styles.primary}>
                Our Services
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
  






    <section className={styles.contactWrap}>
      
      {/* HEADER */}
      <div className={styles.contactHeader}>
        <h2 data-aos="fade-up">Contact Us</h2>

        <p data-aos="fade-up">
         Connect with our team to explore partnerships, discuss opportunities, or learn how our expertise can support your business objectives. We work closely with organizations to understand their challenges, operational priorities, and long-term strategic goals. Our approach combines industry insight, technical expertise, and a deep understanding of evolving market dynamics. Whether you are planning a new initiative, expanding capabilities, or optimizing existing systems, we provide clear guidance and support. Our teams collaborate transparently at every stage of engagement, ensuring alignment, accountability, and measurable outcomes. With a strong focus on innovation, security, and scalability, we help businesses navigate complexity with confidence. We believe in building trusted, long-term relationships that drive sustainable growth and lasting business value.
        </p>
      </div>

      <div className={styles.contactGrid}>

        {/* LEFT CARD */}
        <div className={styles.contactInfo} data-aos="fade-right">
          <h3>Let’s Start a Conversation</h3>

          <p>
            Whether you have a specific project in mind or are exploring strategic possibilities, our team is ready to assist. Reach out to us for expert guidance, collaboration, and tailored solutions.
          </p>

          <div className={styles.contactItem}>
            <div className={styles.iconCircle}>
              <Mail size={20} />
            </div>
            <span>contact@yourcompany.com</span>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconCircle}>
              <MapPin size={20} />
            </div>
            <span>Global Operations</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.contactForm} data-aos="fade-left">
          <h3>Send Us a Message</h3>

          <form className={styles.formGrid}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Phone Number" />

           

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className={styles.full}
            ></textarea>

            <button type="submit" className={styles.full}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  








    <section className={styles.connSection}>
      <div className={styles.connInner}>
        <h2 className={styles.connTitle}>Connections</h2>

        {data.map((item, i) => (
          <div
            key={i}
            className={`${styles.connItem} ${
              active === i ? styles.active : ""
            }`}
          >
            <button
              className={styles.connHeader}
              onClick={() => toggle(i)}
            >
              <span>{item.title}</span>
              <span className={styles.icon}></span>
            </button>

            <div className={styles.connContent}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>





    <section className={styles.mapSection} data-aos="fade-up">
      
      <div className={styles.mapHeader}>
        <h2>Our Global Presence</h2>

        <h3>
          Strategically positioned to support clients worldwide, delivering
          expertise, innovation, and local insight wherever you operate.
        </h3>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1fefc7b%3A0xe7f7d6d5f1f5e2f!2sGoogle!5e0!3m2!1sen!2sin!4v1690000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  















</>
  );
}