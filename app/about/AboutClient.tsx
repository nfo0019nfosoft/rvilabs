"use client";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import styles from "./about.module.css";





import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaLeaf,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

type Section = {
  label: string;
  title: string;
  content: string[];
  icon: any;
  link:any;
};

const sections: Section[] = [
  {
    label: "About Company",
    title: "Who We Are",
     link: "/about/who-we-are",
    content: [
      "We are a forward-thinking technology organization focused on building reliable, scalable, and future-ready digital solutions for businesses operating in complex and fast-changing environments.",
      "We are a forward-thinking technology organization focused on building reliable, scalable, and future-ready digital solutions for businesses operating in complex and fast-changing environments.",
      "From strategy and architecture to engineering and ongoing optimization, we partner closely with our clients to design systems that are secure, resilient, and built to evolve with future demands.",
      "Guided by innovation, quality, and accountability, we help organizations accelerate transformation, improve operational efficiency, and unlock sustainable growth in the digital-first world.",
    ],
    icon: FaRocket,
   
  },
  {
    label: "Leadership",
    title: "Leadership",
     link: "/about/leadership",
    content: [
      "Our leadership team brings together deep industry experience, strategic vision, and a strong commitment to excellence.",
      "With a clear focus on long-term value creation, our leaders guide the organization through complex challenges while fostering innovation, accountability, and collaboration.",
      "They empower teams, build trusted partnerships, and ensure that every initiative aligns with our mission to deliver meaningful outcomes for clients and stakeholders.",
    ],
    icon: FaUsers,
  },
  {
    label: "Our Principles",
    title: "Our Values",
     link: "/about/ourvalues",
    content: [
      "Our values define who we are and guide how we work, collaborate, and deliver outcomes for our clients and partners.",
      "We are committed to integrity, transparency, and accountability in every engagement, ensuring trust and long-term relationships.",
      "Innovation and excellence drive our approach, empowering teams to challenge convention, embrace change, and create meaningful impact.",
      "Above all, we value people — fostering an inclusive, respectful, and growth-oriented culture where diverse perspectives thrive.",
    ],
    icon: FaLightbulb,
  },
  {
    label: "Sustainability",
    title: "Sustainability",
     link: "/about/sustainability",
    content: [
      "Sustainability is integral to how we operate, innovate, and create long-term value for our clients, communities, and the environment.",
      "We are committed to responsible practices that reduce environmental impact, promote ethical operations, and support sustainable growth across all aspects of our business.",
      "Through conscious decision-making, efficient technologies, and continuous improvement, we aim to build solutions that contribute to a more resilient and sustainable digital future.",
    ],
    icon: FaLeaf,
  },
  {
    label: "People & Culture",
    title: "Diversity & Inclusion",
     link: "/about/diversity-inclusion",
    content: [
      "Diversity and inclusion are fundamental to our culture and the way we build, collaborate, and innovate across the organization.",
      "We are committed to creating an inclusive environment where individuals feel valued, respected, and empowered to contribute their unique perspectives and experiences.",
      "By embracing diverse backgrounds, ideas, and ways of thinking, we strengthen our teams, enhance creativity, and deliver better outcomes for our clients and communities.",
      "Our focus on equity, belonging, and opportunity helps us foster a workplace where everyone can grow, succeed, and make a meaningful impact.",
    ],
    icon: FaGlobe,
  },
  {
    label: "Corporate Responsibility",
    title: "Corporate Responsibility",
     link: "/about/corporate-responsibility",
    content: [
      "Corporate responsibility is central to how we conduct business and engage with our clients, partners, employees, and communities.",
      "We operate with integrity and accountability, ensuring ethical decision-making, transparency, and compliance across all operations.",
      "Through responsible governance, community engagement, and sustainable practices, we strive to create positive, long-lasting impact beyond business outcomes.",
    ],
    icon: FaShieldAlt,
  },
];
export default function AboutSections() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);




  return (
    <>
    <section className={styles.hero}>
      {/* Background Image */}
      <img
        src="/about.png"
        alt=" on technology and innovation"
        className={styles.bg}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1>About Us</h1>
          <p>
         We help organizations transform through technology, insight, and execution excellence.
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





    <section className={styles.wrapper}>
      {sections.map((section, index) => {
        const Icon = section.icon;
        const reverse = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`${styles.row} ${reverse ? styles.reverse : ""}`}
          >
            
            {/* TEXT */}
            <div
              data-aos={reverse ? "fade-left" : "fade-right"}
              className={styles.content}
            >
              <h3>{section.label}</h3>
              <h2>{section.title}</h2>

              <div className={styles.card}>
                {section.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              <a href={section.link}>
  <button className={styles.btn}>Read More</button>
</a>
              </div>
            </div>

            {/* ICON VISUAL */}
            <div className={styles.visual}>
              <div className={styles.iconBig}>
                <Icon />
              </div>
              <div className={styles.iconSmall1}>
                <Icon />
              </div>
              <div className={styles.iconSmall2}>
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </section>

















    </>
  );
}