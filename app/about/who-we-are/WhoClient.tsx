"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { ShieldCheck, Brain, Database, Cloud } from "lucide-react";

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
            title: "Enterprise-First Mindset",
            icon: <ShieldCheck size={28} />,
            desc1:
                "We design and deliver solutions built for scale, security, and operational reliability in complex enterprise environments.",
            desc2:
                "Our approach balances innovation with governance, ensuring technology investments deliver measurable and lasting value.",
        },
        {
            title: "Deep Technology Expertise",
            icon: <Brain size={28} />,
            desc1:
                "Our teams bring hands-on expertise across cloud platforms, application modernization, data, AI, and cybersecurity.",
            desc2:
                "We focus on practical, production-ready solutions—not experimentation without impact.",
        },
        {
            title: "Strategic Partnership",
            icon: <Database size={28} />,
            desc1:
                "We work as an extension of our clients’ leadership and technology teams, aligning closely with business priorities.",
            desc2:
                "Long-term partnerships are built on trust, transparency, and shared accountability for outcomes.",
        },
        {
            title: "Built for the Future",
            icon: <Cloud size={28} />,
            desc1:
                "We help organizations prepare for continuous change through adaptable architectures and modern operating models.",
            desc2:
                "Our focus is on future-ready platforms that evolve with technology, markets, and customer expectations.",
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
                            <h1>Who We Are</h1>

                            <p>
                             We are a technology-driven consulting and software services firm helping organizations navigate digital transformation with clarity, confidence, and scale. Our expertise spans cloud platforms, intelligent systems, cybersecurity, and modern architectures—enabling enterprises to build resilient, future-ready digital foundations.
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
                    <span className={styles.tag}>About Us</span>

                    <h2 className={styles.heading}>Who We Are</h2>

                    <p className={styles.intro}>
                  We are a technology-led consulting and software services organization partnering with enterprises to design, build, and scale digital capabilities that drive long-term business value.
Operating at the intersection of strategy, engineering, and innovation, we help organizations navigate complexity, modernize legacy environments, and adopt emerging technologies with confidence.
                    </p>



                    
                    <p className={styles.intro}>
                Our work is grounded in deep enterprise experience, strong engineering discipline, and a clear understanding of how technology enables business outcomes. We collaborate closely with leadership teams to align digital initiatives with organizational goals, governance requirements, and operational realities.
                    </p>





                    
                    <p className={styles.intro}>
                From cloud transformation and intelligent platforms to cybersecurity and data-driven decision-making, we focus on building resilient, scalable, and future-ready digital foundations.
                    </p>


                   
                    
                    <p className={styles.intro}>
                By combining strategic insight with execution excellence, we enable organizations to move beyond transformation initiatives and create sustainable advantage in an increasingly software-driven world.
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