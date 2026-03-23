"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { Users2, Scale, Handshake, Lightbulb } from "lucide-react";

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
            title: "Inclusive Leadership",
            icon: <Users2 size={28} />,
            desc1:
                "Leaders champion fairness, representation, and opportunities for all. ",
            desc2:
                " We encourage open dialogue and equitable decision-making.",
        },
        {
            title: "Equitable Operations",
            icon: <Scale size={28} />,
            desc1:
                " Policies and processes ensure fairness and equal access.",
            desc2:
                "We embed inclusion into all organizational practices. ",
        },
        {
            title: "Collaborative Culture",
            icon: <Handshake size={28} />,
            desc1:
                " Teams work together across backgrounds and experiences.",
            desc2:
                "We foster belonging, respect, and shared accountability. ",
        },
        {
            title: "Innovation Through Inclusion",
            icon: <Lightbulb size={28} />,
            desc1:
                " Diverse perspectives drive creativity and effective solutions.",
            desc2:
                " Inclusion enhances innovation, adaptability, and impact.",
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
                            <h1>Diversity & Inclusion</h1>

                            <p>
                                Embedding Diversity & Inclusion at the core of our strategy to drive sustainable impact, foster equitable opportunities, and build trusted partnerships across organizations.
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

                    <h2 className={styles.heading}>Diversity & Inclusion</h2>

                    <p className={styles.intro}>
               We are committed to creating a culture where diversity is celebrated, inclusion is practiced, and every voice is valued.<br/>
By fostering equitable opportunities and embracing different perspectives, we empower individuals and organizations to achieve their full potential.
                    </p>



                    
                    <p className={styles.intro}>
Our approach ensures that people from all backgrounds feel respected, heard, and supported in their growth and development.<br/>
We integrate inclusive practices into every aspect of our operations, from leadership and decision-making to policies and programs.<br/>
By valuing diverse perspectives, we enhance collaboration, drive innovation, and strengthen organizational resilience.<br/>
Together, we build an environment where differences are embraced, talent thrives, and sustainable impact is achieved<br/>
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