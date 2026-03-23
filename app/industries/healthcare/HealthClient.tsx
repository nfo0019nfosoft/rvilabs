"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { HeartPulse, Stethoscope, ShieldCheck, Microscope } from "lucide-react";

export default function HotTopicsPage() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

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

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const data = [
        {
            title: "Healthcare Platform Modernization",
            icon: <HeartPulse size={28} />,
            desc1:
                "Legacy healthcare systems are evolving into interoperable, cloud-enabled platforms that improve data accessibility and operational efficiency.",
            desc2:
                "We support modernization initiatives that enhance system integration, scalability, and resilience across care networks.",
        },
        {
            title: "Digital Care & Patient Experience",
            icon: <Stethoscope size={28} />,
            desc1:
                "Patients and clinicians expect secure, intuitive digital experiences across care delivery, engagement, and remote interaction.",
            desc2:
                "Our approach enables connected care journeys that improve access, outcomes, and patient trust.",
        },
        {
            title: "Compliance, Privacy & Security",
            icon: <ShieldCheck size={28} />,
            desc1:
                "Protecting sensitive health and research data is a critical priority across healthcare and life sciences organizations.",
            desc2:
                "We design security and governance frameworks aligned with healthcare regulations, privacy standards, and digital trust.",
        },
        {
            title: "Data, Analytics & Intelligent Research",
            icon: <Microscope size={28} />,
            desc1:
                "Healthcare and life sciences data becomes transformative when governed, integrated, and analyzed at scale.",
            desc2:
                "We enable advanced analytics and AI-driven insight to support clinical decision-making, research acceleration, and operational optimization.",
        },
    ];

    return (
        <>
            <main>
                {/* HERO */}
                <section className={styles.hotTopicsHero}>
                    <video
                        className={styles.hotTopicsHero__video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/bgvideo.mp4" type="video/mp4" />
                    </video>

                    <div className={styles.hotTopicsHero__overlay}></div>

                    <div className={styles.hotTopicsHero__content}>
                        <div className={styles.hotTopicsHero__text}>
                            <h1>Healthcare & Life Sciences</h1>

                            <p>
                           Supporting healthcare providers, life sciences organizations, and research institutions in modernizing digital platforms, securing sensitive data, and enabling smarter, patient-centric and research-driven outcomes.
                            </p>

                            <a
                                href="/contact"
                                className={styles.hotTopicsHero__btnPrimary}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* SECTION */}
            <section className={styles.section}>
                <div className={styles.inner}>
                    <span className={styles.tag}>Industries</span>

                    <h2 className={styles.heading}>Healthcare & Life Sciences</h2>

                    <p className={styles.intro}>
                 Healthcare and life sciences organizations operate in a highly regulated, data-intensive environment shaped by rising patient expectations, scientific innovation, and increasing operational complexity.<br/>
Providers, payers, and research-driven enterprises must modernize digital platforms, protect sensitive health data, and enable seamless collaboration—while ensuring compliance, safety, and trust across the care and research ecosystem.
                    </p>



                    
                    <p className={styles.intro}>
               
Our Healthcare & Life Sciences expertise focuses on helping organizations balance innovation with governance, agility with clinical and regulatory rigor, and transformation with measurable outcomes that improve patient care and research effectiveness.
               </p>



                    
                    <p className={styles.intro}>
               
We work across healthcare delivery, life sciences research, pharmaceuticals, and digital health platforms to build secure, scalable, and future-ready technology foundations that support long-term clinical, operational, and scientific excellence.
                    </p>


        



                    <div className={styles.grid}>
                        {data.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => {
                                    if (el) cardsRef.current[i] = el;
                                }}
                                className={styles.card}
                            >
                                <div className={styles.icon}>{item.icon}</div>

                                <h3>{item.title}</h3>

                                <p>{item.desc1}</p>
                                <p>{item.desc2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}