"use client";

import { useEffect, useRef } from "react";
import styles from "../hot-topics/hot-topics.module.css";
import { Lightbulb, Workflow, ShieldAlert, Rocket } from "lucide-react";

export default function ExpertPerspective() {
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
            title: "Technology Leadership Insights",
            icon: <Lightbulb size={28} />,
            desc1:
                "Perspectives from experienced technology leaders on navigating complexity, scale, and continuous digital evolution.",
            desc2:
                "These insights focus on balancing innovation with stability, governance, and enterprise-wide alignment.",
        },
        {
            title: "Strategy to Execution",
            icon: <Workflow size={28} />,
            desc1:
                "Expert views on translating digital strategy into operational reality across platforms, teams, and enterprise environments.",
            desc2:
                "We examine how organizations drive measurable outcomes through disciplined execution and adaptive technology roadmaps.",
        },
        {
            title: "Risk, Security & Resilience",
            icon: <ShieldAlert size={28} />,
            desc1:
                "Insights into managing cybersecurity risk, regulatory pressure, and operational resilience in increasingly interconnected systems.",
            desc2:
                "Experts share approaches for building secure, trusted, and resilient digital foundations at scale.",
        },
        {
            title: "Future-Ready Enterprises",
            icon: <Rocket size={28} />,
            desc1:
                "Perspectives on preparing organizations for continuous change, emerging technologies, and evolving market expectations.",
            desc2:
                "Discussions highlight adaptive architectures, talent readiness, and leadership practices required for sustained success.",
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
                            <h1>Expert Perspectives</h1>

                            <p>
                 In-depth viewpoints from industry experts and technology leaders on emerging trends, strategic innovation, and the decisions shaping the future of software-driven organizations.
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

                    <h2 className={styles.heading}>Expert Perspective</h2>

                    <p className={styles.intro}>
             Expert Perspectives brings together strategic viewpoints from technology leaders, industry specialists, and digital transformation practitioners shaping the future of software-driven enterprises. These perspectives reflect real-world experience, informed analysis, and a deep understanding of enterprise-scale complexity.
                 </p>



                    
                    <p className={styles.intro}>
                   
As organizations operate in an environment defined by rapid innovation, economic volatility, and rising digital expectations, leadership insight becomes critical to navigating uncertainty and making confident long-term decisions. Technology leaders must evaluate not only what is possible, but what is practical, scalable, and sustainable.<br/>
Our Expert Perspectives focus on how organizations translate strategy into execution—aligning technology investment with business objectives, operational resilience, and measurable outcomes.
                    </p>





                    
                    <p className={styles.intro}>
               We explore how experts address challenges such as legacy modernization, platform scalability, cybersecurity risk, data governance, and workforce transformation, while identifying opportunities created by emerging technologies and evolving operating models.

                    </p>




                    
                    <p className={styles.intro}>
                  
By combining thought leadership with hands-on enterprise experience, we provide clarity on complex topics and deliver insight that supports informed decision-making, responsible innovation, and long-term value creation in a rapidly changing digital landscape.
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