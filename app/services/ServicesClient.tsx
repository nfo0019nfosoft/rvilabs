"use client";

import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect,useRef } from "react";


export default function ServicesPage() {   // ✅ MUST be default export
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    },
    { threshold: 0.2 }
    
  );
  

  [...serviceRefs.current]
    .forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);


  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);




  const services = [
    {
      title: "Digital Transformation",
      desc: "We help organizations modernize business models, operational processes, and customer experiences through innovation-led digital strategies. By leveraging emerging technologies, automation, and data-driven insights, we enable businesses to adapt quickly and stay competitive in a rapidly changing digital landscape.",
      img: "/hero.png",
        link: "/services/digitaltransformation",
    },
    {
      title: "Cloud Services",
      desc: "We design and implement secure, scalable cloud architectures that enable organizations to operate with greater agility and efficiency. Our cloud solutions help reduce infrastructure complexity, optimize operational costs, and support seamless scalability as business demands evolve. By leveraging modern cloud platforms and best practices, we ensure high availability, performance, and long-term reliability across enterprise environments.",
      img: "/hero.png",
        link: "/services/cloudservices",
    },
    {
      title: "Data & AI",
      desc: "Turning data into actionable intelligence through advanced analytics, intelligent automation, and AI-powered systems that support faster, smarter decision-making. We help organizations unlock the full value of their data by building scalable data platforms, predictive models, and insight-driven solutions that improve performance, efficiency, and long-term business outcomes.",
      img: "/hero.png",
        link: "/services/data-ai",
    },
    {
      title: "Cybersecurity",
      desc: "Protecting digital assets with advanced security frameworks, risk management, and proactive threat monitoring. Our cybersecurity solutions are designed to safeguard critical systems, sensitive data, and enterprise infrastructure against evolving threats. We implement industry-leading security practices, continuous monitoring, and compliance-driven strategies to reduce risk, strengthen resilience, and ensure business continuity across complex digital environments.",
      img: "/hero.png",
        link: "/services/cybersecurity",
    },
    {
      title: "Application Development",
      desc: "Designing and building high-performance web and mobile applications using modern architectures, scalable frameworks, and intuitive user experiences. We focus on clean code, optimized performance, and future-ready solutions that adapt as your business grows.",
      img: "/hero.png",
        link: "/services/applicationdevelopment",
    },
    {
      title: "Enterprise Platforms",
      desc: "Integrating and optimizing enterprise platforms to streamline operations, improve collaboration, and enhance data visibility across the organization. We design scalable platform ecosystems that connect systems, automate workflows, and support long-term business agility while ensuring reliability, security, and seamless performance at enterprise scale.",
      img: "/hero.png",
        link: "/services/enterpriseplatform",
    },
    {
      title: "IT Consulting",
      desc: "Strategic consulting services designed to align technology initiatives with long-term business goals and innovation roadmaps. We help organizations assess their current IT landscape, identify opportunities for optimization, and design future-ready strategies that improve efficiency, scalability, and decision-making. Our consultants work closely with leadership teams to ensure technology investments deliver measurable value and sustainable growth.",
      img: "/hero.png",
        link: "/services/itconsulting",
    },
    {
      title: "Infrastructure Services",
      desc: "Modernizing business models, processes, and customer experiences through innovation-led digital strategies. We help organizations adopt emerging technologies, streamline operations, and create agile digital ecosystems that drive measurable growth and long-term competitive advantage.",
      img: "/hero.png",
        link: "/services/infrastructure",
    },
  ];


  return (
    <>
    <section className={styles.hero}>
      
      <Image
        src="/services.png"
        alt="Careers at RV Labs"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.content}>

          <div className={styles.heroLeft}>
            <h1>Services</h1>

            <h2>
             Offering expert solutions that drive innovation, efficiency, and business growth.
            </h2>

            <div className={styles.actions}>
            

              <Link href="/contact" className={styles.primary}>
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











      <section className={styles.section}>
        <div className={styles.container}>

          <h2 className={styles.title}>Our Services</h2>

          <p className={styles.intro}>
            Enterprise-grade digital solutions engineered for scale, security, and long-term business impact. We combine strategic thinking, advanced engineering, and modern technologies to help organizations innovate faster, operate smarter, and build resilient digital foundations that support sustainable growth in a rapidly evolving global landscape.
          </p>

          {services.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
  if (el) serviceRefs.current[i] = el;
}}
              className={`${styles.card} ${i % 2 === 1 ? styles.reverse : ""}`}
            >

              {/* IMAGE */}
              <div className={styles.image}>
                <img src={item.img} alt={item.title} />
              </div>

              {/* ✅ FIXED CONTENT */}
              <div className={styles.serviceContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                {/* ✅ FIXED BUTTON */}
                 <a href={item.link} className={styles.serviceBtn}>
  Read More
</a>
              
               
              </div>

            </div>
          ))}
        </div>
      </section>



























</>
  );
}
