"use client";

import { useEffect, useRef } from "react";
import styles from "../hot-topics/hot-topics.module.css";
import { Sparkles, Briefcase, Shield, RefreshCcw } from "lucide-react";

export default function ConversationsForTomorrow() {
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
            title: "Future Technology Dialogue",
            icon: <Sparkles size={28} />,
            desc1:
                "Exploring the technologies that will shape tomorrow’s enterprises, from artificial intelligence and automation to cloud ecosystems and platform innovation.",
            desc2:
                "These conversations focus on how emerging capabilities translate into scalable, secure, and sustainable enterprise solutions.",
        },
        {
            title: "Executive Strategy & Leadership",
            icon: <Briefcase size={28} />,
            desc1:
                "Conversations centered on the strategic decisions facing CIOs, CTOs, and senior leaders as digital complexity continues to grow.",
            desc2:
                "We examine how leadership teams align vision, technology investment, and organizational change to drive long-term business outcomes.",
        },
        {
            title: "Enterprise Resilience & Risk",
            icon: <Shield size={28} />,
            desc1:
                "Addressing the challenges of operating in an environment defined by cybersecurity threats, regulatory pressure, and market volatility.",
            desc2:
                "These discussions focus on building resilient digital foundations that balance innovation with governance, security, and trust.",
        },
        {
            title: "Preparing for Continuous Change",
            icon: <RefreshCcw size={28} />,
            desc1:
                "Insight into how organizations design operating models and platforms that evolve alongside technology, markets, and customer expectations.",
            desc2:
                "Conversations highlight adaptive architectures, workforce readiness, and the cultural shifts required for sustained digital success.",
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
                            <h1>Conversations for Tomorrow</h1>

                            <p>
                             Engaging with forward-looking ideas, emerging technologies, and strategic insights that will define how software-driven organizations innovate, scale, and compete in a rapidly evolving digital landscape.
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

                    <h2 className={styles.heading}>Conversations for Tomorrow</h2>

                    <p className={styles.intro}>
                   Conversations for Tomorrow brings together forward-looking ideas, strategic dialogue, and expert insight on the forces shaping the future of software-driven enterprises. These conversations reflect the evolving priorities of technology and business leaders navigating constant disruption, global uncertainty, and accelerating digital change.

                    </p>



                    
                    <p className={styles.intro}>
                   As organizations prepare for the next phase of digital evolution, leadership conversations are shifting beyond short-term transformation toward long-term adaptability, resilience, and value creation. Enterprises must rethink how technology enables growth, supports innovation, and responds to changing customer and market expectations.
Our Conversations for Tomorrow focus on the strategic questions that define future readiness—how enterprises adopt emerging technologies, modernize platforms, manage risk, and align digital investment with business outcomes.


                    </p>





                       <p className={styles.intro}>
             We explore how executive teams are redefining operating models, governance structures, and technology roadmaps to support continuous change. Each conversation is grounded in real-world enterprise experience and informed by evolving global and industry dynamics. By translating complex ideas into clear strategic insight, we help leaders anticipate what’s next, engage in meaningful dialogue, and make informed decisions that position their organizations for long-term success in an increasingly software-defined world.
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