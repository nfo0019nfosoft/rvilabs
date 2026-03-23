"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { Landmark, Smartphone, ShieldCheck, LineChart } from "lucide-react";

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
            title: "Core Banking Modernization",
            icon: <Landmark size={28} />,
            desc1:
                "Legacy core systems are evolving into modular, cloud-enabled platforms that improve agility and reduce operational complexity.",
            desc2:
                "We support phased modernization strategies that minimize risk while enabling faster innovation across products and channels",
        },
        {
            title: "Digital Banking & Customer Experience",
            icon: <Smartphone size={28} />,
            desc1:
                "Customer expectations demand seamless, secure, and personalized experiences across digital and mobile banking channels.",
            desc2:
                "Our approach integrates platforms, data, and experience design to strengthen engagement, trust, and long-term relationships.",
        },
        {
            title: "Risk, Compliance & Cybersecurity",
            icon: <ShieldCheck size={28} />,
            desc1:
                "Expanding digital ecosystems have elevated risk management and cybersecurity to board-level priorities.",
            desc2:
                "We design resilient security architectures that support regulatory compliance, fraud prevention, and digital trust.",
        },
        {
            title: "Data, Analytics & Intelligent Finance",
            icon: <LineChart size={28} />,
            desc1:
                "Financial data becomes a strategic asset when governed, integrated, and activated in real time.",
            desc2:
                "We enable advanced analytics and AI-driven insight to support smarter risk assessment, decision-making, and operational efficiency.",
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
                            <h1>Banking & Financial Services</h1>

                            <p>
                        Enabling banks and financial institutions to modernize core systems, strengthen security and compliance, and deliver intelligent, data-driven financial services in a rapidly evolving digital economy.
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

                    <h2 className={styles.heading}>Banking & Financial Services</h2>

                    <p className={styles.intro}>
                Banking and financial services organizations operate in a highly regulated, digitally intensive environment shaped by evolving customer expectations, economic uncertainty, and increasing competitive pressure.<br/>
Institutions must modernize core systems, strengthen security, and unlock data-driven insight—while maintaining operational stability, regulatory compliance, and customer trust at scale.
                    </p>



                    
                    <p className={styles.intro}>
Our Banking & Financial Services expertise focuses on helping banks, lenders, and financial platforms balance innovation with governance, agility with resilience, and transformation with measurable business outcomes.
                    </p>





                    
                    <p className={styles.intro}>
       We work with organizations across retail banking, corporate banking, payments, and financial ecosystems to design secure, scalable, and future-ready digital foundations that support sustainable growth in an increasingly software-driven financial landscape.
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