"use client";
import styles from "./industries.module.css";


// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect ,useRef } from "react";






const data = [
  {
    title: "Banking & Financial Services",
    desc: "Innovative solutions to optimize financial operations, enhance customer experience, and ensure regulatory compliance. We help financial institutions implement secure digital banking platforms, advanced analytics, and automation strategies that drive efficiency, reduce risk, and increase profitability.",
    img: "/banking.png",
     link: "/industries/banking",
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Driving digital transformation in healthcare with patient-centric solutions, research support, and operational excellence. From electronic health records to AI-driven diagnostics and telemedicine, our solutions improve patient care, streamline operations, and accelerate innovation in life sciences.",
    img: "/healthcare.png",
     link: "/industries/healthcare",
  },
  {
    title: "Manufacturing",
    desc: "Optimizing production, supply chains, and smart factory initiatives through innovative technology solutions. We support manufacturers in implementing Industry 4.0 practices, predictive maintenance, and digital supply networks to enhance productivity, quality, and sustainability.",
    img: "/manufacturing.png",
     link: "/industries/manufacturing",
  },
  {
    title: "Retail & Consumer Products",
    desc: "Enhancing customer engagement, inventory management, and digital experiences across retail ecosystems. Our solutions include e-commerce platforms, AI-driven analytics, and omnichannel strategies that boost sales, improve customer loyalty, and optimize operations across the value chain.",
    img: "/retail.png",
     link: "/industries/retail",
  },
];



export default function IndustriesSection() {
  const ref = useRef<(HTMLDivElement | null)[]>([]);

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

    ref.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <>
    <section className={styles.hero}>
      {/* Background Image */}
      <img
        src="/industries.png"
        alt="Industries on technology and innovation"
        className={styles.bg}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1>Industries</h1>
          <p>
            Delivering specialized solutions and insights across diverse sectors, driving innovation, efficiency, and growth tailored to each industry’s needs.
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










    <section className={styles.section}>
      <div className={styles.sectionContainer}>

        <h2 className={styles.heading}>Industries We Serve</h2>

        <p className={styles.intro}>
         We provide specialized solutions and insights across diverse sectors, helping businesses innovate, grow, and thrive in a rapidly evolving world. Our expertise spans technology integration, operational optimization, and strategic transformation, enabling organizations to stay ahead of industry trends and deliver measurable results. By combining deep industry knowledge with cutting-edge solutions, we empower businesses to achieve sustainable growth, enhance customer experiences, and create long-term value.
        </p>

        <div className={styles.list}>
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) ref.current[i] = el;
              }}
              className={`${styles.item} ${
                i % 2 === 1 ? styles.reverse : ""
              }`}
            >
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img src={item.img} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.link} className={styles.btn}>
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  



















    </>
  );
}