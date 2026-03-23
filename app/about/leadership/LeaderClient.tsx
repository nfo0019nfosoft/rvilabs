"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { Compass, CheckCircle2, Handshake, Rocket } from "lucide-react";

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
            title: "Strategic Direction",
            icon: <Compass size={28} />,
            desc1:
                "Leadership grounded in business-first thinking and long-term value creation.",
            desc2:
                "We align technology strategy with organizational vision and market realities.",
        },
        {
            title: "Execution Excellence",
            icon: <CheckCircle2 size={28} />,
            desc1:
                "Hands-on leadership ensuring disciplined delivery across complex enterprise initiatives.",
            desc2:
                "Focused on outcomes, scalability, and operational stability.",
        },
        {
            title: "Trusted Partnership",
            icon: <Handshake size={28} />,
            desc1:
                "We work closely with executive teams as long-term strategic partners.",
            desc2:
                "Built on transparency, trust, and shared accountability.",
        },
        {
            title: "Future-Focused Thinking",
            icon: <Rocket size={28} />,
            desc1:
                "Leadership prepared for continuous change and emerging technologies.",
            desc2:
                "Enabling organizations to adapt, evolve, and lead with confidence.",
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
                            <h1>Leadership</h1>

                            <p>
                           Guiding enterprise transformation through strategic vision, deep industry expertise, and technology-driven decision-making.
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

                    <h2 className={styles.heading}>Leadership</h2>

                    <p className={styles.intro}>
                Our leadership brings together strategic vision, deep technology expertise, and real-world enterprise experience.
We guide organizations through complex transformation journeys by aligning technology decisions with long-term business objectives, governance requirements, and operational realities.
                    </p>



                    
                    <p className={styles.intro}>
                Focused on clarity, accountability, and execution excellence, our leaders partner closely with clients to modernize platforms, manage risk, and enable sustainable growth.
                    </p>





                    
                    <p className={styles.intro}>
             By combining insight with action, we help enterprises build resilient, future-ready digital foundations in an increasingly software-driven world.
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