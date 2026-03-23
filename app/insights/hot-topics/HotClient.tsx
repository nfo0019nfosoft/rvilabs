"use client";

import { useEffect, useRef } from "react";
import styles from "./hot-topics.module.css";
import { Brain, Cloud, ShieldCheck, Database } from "lucide-react";

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
            title: "Enterprise Artificial Intelligence",
            icon: <Brain size={28} />,
            desc1:
                "Moving beyond experimentation, organizations are embedding AI across operations, customer engagement, and decision-making.",
            desc2:
                "We explore scalable adoption models, governance frameworks, ethical considerations, and measurable business outcomes enabled by AI-driven platforms.",
        },
        {
            title: "Cloud & Platform Modernization",
            icon: <Cloud size={28} />,
            desc1:
                "Cloud transformation is now foundational to enterprise agility and resilience. Legacy systems are evolving into modular, cloud-native platforms.",
            desc2:
                "Our insights focus on modernization strategies, cost optimization, security, and long-term platform sustainability.",
        },
        {
            title: "Cybersecurity & Digital Trust",
            icon: <ShieldCheck size={28} />,
            desc1:
                "Expanding digital ecosystems have elevated cybersecurity and risk management to board-level priorities.",
            desc2:
                "We examine how enterprises build resilient security architectures, comply with global regulations, and maintain trust across customers, partners, and platforms.",
        },
        {
            title: "Data, Analytics & Decisions",
            icon: <Database size={28} />,
            desc1:
                "Data has become a strategic enterprise asset—when governed, integrated, and activated effectively.",
            desc2:
                "Topics include modern data platforms, analytics maturity, and AI-driven insights that accelerate informed, high-confidence decision-making.",
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
                            <h1>Hot Topics</h1>

                            <p>
                               Exploring the technologies, strategies, and digital shifts shaping modern software enterprises—from cloud-native platforms and AI-driven innovation to cybersecurity, scalability, and future-ready architectures.
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
                    <span className={styles.tag}>Insights</span>

                    <h2 className={styles.heading}>Hot Topics</h2>

                    <p className={styles.intro}>
                    Critical themes shaping enterprise technology strategy and digital leadership. These topics reflect the most pressing challenges and opportunities facing organizations operating in a software-driven, globally connected economy.
As industries continue to evolve under the influence of rapid digital acceleration, enterprises are required to rethink how technology supports long-term growth, resilience, and competitive advantage. Decision-makers must balance innovation with stability, speed with governance, and transformation with measurable outcomes.

                    </p>



                    
                    <p className={styles.intro}>
                   Our Hot Topics focus on the strategic issues that demand executive attention—ranging from enterprise-scale artificial intelligence and cloud-native modernization to cybersecurity resilience, data-driven decision-making, and platform sustainability.

                    </p>





                    
                    <p className={styles.intro}>
                  We examine how organizations adapt operating models, align technology investments with business objectives, and build digital foundations capable of supporting continuous change. Each topic is grounded in real-world enterprise experience and informed by evolving market expectations. By translating complex technology trends into clear, actionable insight, we help leaders anticipate disruption, manage risk, and make confident decisions that drive long-term value in an increasingly digital and interconnected world.

Enterprise Artificial Intelligence
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