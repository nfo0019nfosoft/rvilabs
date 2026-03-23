"use client";

import { useEffect, useRef } from "react";
import styles from "../hot-topics/hot-topics.module.css";
import { Globe, Cpu, ShieldCheck, TrendingUp } from "lucide-react";

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
            title: "Global Economic Transformation",
            icon: <Globe size={28} />,
            desc1:
                "Analysis of macroeconomic trends, geopolitical dynamics, and market shifts redefining how organizations operate and compete globally.",
            desc2:
                "We explore how economic uncertainty and structural change influence technology investment, digital priorities, and enterprise resilience.",
        },
        {
            title: "Technology as an Economic Enabler",
            icon: <Cpu size={28} />,
            desc1:
                "Exploring the role of advanced technologies such as artificial intelligence, cloud platforms, and data ecosystems in driving productivity and innovation.",
            desc2:
                "These insights highlight how software has become a foundational layer for growth, efficiency, and long-term value creation.",
        },
        {
            title: "Policy, Regulation & Digital Trust",
            icon: <ShieldCheck size={28} />,
            desc1:
                "Examination of global regulatory frameworks, digital governance, and trust models shaping enterprise technology strategies.",
            desc2:
                "We focus on how organizations align innovation with compliance, ethical standards, and evolving global expectations.",
        },
        {
            title: "Sustainable & Resilient Growth",
            icon: <TrendingUp size={28} />,
            desc1:
                "Insights into how enterprises balance growth with sustainability, resilience, and long-term societal impact.",
            desc2:
                "Conversations emphasize responsible innovation, future-ready operating models, and technology-led sustainability initiatives.",
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
                            <h1>World Economic Forum</h1>

                            <p>
                               Highlighting global economic trends, technological transformation, and policy-driven insights shaping the future of industries, governments, and software-led enterprises worldwide.
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

                    <h2 className={styles.heading}>World Economic Forum</h2>

                    <p className={styles.intro}>
                 Our World Economic Forum insights draw from global dialogue on economic transformation, technological progress, and the evolving role of software in shaping industries and societies. This perspective reflects the priorities of leaders operating at the intersection of business, technology, policy, and global markets.
                 </p>



                    
                    <p className={styles.intro}>
                   
As the global economy navigates uncertainty, geopolitical shifts, and rapid technological acceleration, organizations are challenged to rethink how they create value, manage risk, and sustain long-term growth. Technology is no longer a support function—it has become a central driver of economic resilience and competitive advantage.<br/>
Our World Economic Forum content focuses on the strategic themes shaping the future of software-led enterprises, including digital infrastructure, artificial intelligence, cybersecurity, sustainability, and workforce transformation.
                    </p>





                    
                    <p className={styles.intro}>
                 We examine how global policy frameworks, regulatory evolution, and economic forces influence enterprise technology strategy and investment decisions. These insights help leaders understand not only what is changing—but why it matters and how to respond.
                    </p>




                    
                    <p className={styles.intro}>
                  By connecting global thought leadership with practical enterprise experience, we translate high-level global conversations into actionable guidance that supports informed decision-making in an increasingly interconnected world.
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