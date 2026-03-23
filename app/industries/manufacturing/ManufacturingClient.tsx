"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { Factory, Users, ShieldCheck, BarChart3 } from "lucide-react";

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
            title: "Smart Factory & Platform Modernization",
            icon: <Factory size={28} />,
            desc1:
                "Legacy manufacturing systems are evolving into connected, cloud-enabled platforms that unify production, quality, and operational data.",
            desc2:
                "We enable phased modernization strategies that improve system integration, flexibility, and real-time operational insight.",
        },
        {
            title: "Digital Operations & Workforce Enablement",
            icon: <Users size={28} />,
            desc1:
                "Modern manufacturing requires seamless digital experiences for operators, engineers, and plant leadership.",
            desc2:
                "Our approach connects machines, data, and people to improve productivity, safety, and decision-making across the shop floor.",
        },
        {
            title: "Operational Resilience & Industrial Security",
            icon: <ShieldCheck size={28} />,
            desc1:
                "Expanding connectivity across factories and supply chains has elevated cybersecurity and risk management to critical priorities.",
            desc2:
                "We design resilient security architectures that protect industrial systems, ensure continuity, and safeguard operational integrity.",
        },
        {
            title: "Data, Analytics & Intelligent Manufacturing",
            icon: <BarChart3 size={28} />,
            desc1:
                "Manufacturing data becomes a strategic asset when integrated across production, quality, and supply chain systems.",
            desc2:
                "We enable advanced analytics and AI-driven insight to support predictive maintenance, process optimization, and smarter operational decisions.",
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
                            <h1>Manufacturing</h1>

                            <p>
                            Enabling manufacturers to modernize operations, integrate intelligent digital platforms, and build resilient, data-driven production environments that improve efficiency, quality, and long-term competitiveness.
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

                    <h2 className={styles.heading}>Manufacturing</h2>

                    <p className={styles.intro}>
Manufacturing organizations operate in an increasingly complex and competitive environment shaped by global supply chains, cost pressures, evolving customer demand, and rapid technological advancement.<br/>
Manufacturers must modernize production systems, integrate digital platforms across operations, and gain real-time visibility into assets and processes—while maintaining quality, safety, and operational resilience at scale.
                    </p>



                    
                    <p className={styles.intro}>

Our Manufacturing expertise focuses on helping organizations balance operational efficiency with innovation, automation with workforce enablement, and transformation with measurable performance improvement.

                    </p>





                    
                    <p className={styles.intro}>
            We work across discrete and process manufacturing, industrial enterprises, and supply chain ecosystems to design secure, scalable, and future-ready digital foundations that support productivity, agility, and long-term competitiveness.
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