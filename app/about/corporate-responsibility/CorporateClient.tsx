"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { ShieldCheck, Leaf, Users, Lightbulb } from "lucide-react";

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
            title: "Ethical Leadership",
            icon: <ShieldCheck size={28} />,
            desc1:
                " Leaders champion integrity, accountability, and responsible decision-making.",
            desc2:
                " Ethical leadership drives trust, transparency, and long-term positive impact.",
        },
        {
            title: "Sustainable Operations",
            icon: <Leaf size={28} />,
            desc1:
                "We implement processes that reduce environmental impact and promote efficiency. ",
            desc2:
                "Operations are designed to balance growth with social and environmental responsibility. ",
        },
        {
            title: "Collaborative Impact",
            icon: <Users size={28} />,
            desc1:
                "We work with partners, communities, and stakeholders to amplify social and environmental outcomes. ",
            desc2:
                "Collaboration ensures shared accountability and measurable, long-term impact. ",
        },
        {
            title: "Innovation for Responsibility",
            icon: <Lightbulb size={28} />,
            desc1:
                "We leverage innovation to develop solutions that are sustainable, ethical, and effective. ",
            desc2:
                " Responsible innovation ensures growth while creating positive societal change.",
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
                            <h1>Corporate responsibility</h1>

                            <p>
                            Driving responsible business practices that create lasting value for communities, stakeholders, and the environment.
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

                    <h2 className={styles.heading}>Corporate responsibility</h2>

                    <p className={styles.intro}>
                  We are committed to responsible business practices that create lasting value for communities, stakeholders, and the environment.<br/>
By integrating ethical standards, sustainable operations, and social impact into every initiative, we ensure long-term growth and trust.
                    </p>



                    
                    <p className={styles.intro}>

Our approach balances profitability, governance, and societal contribution, empowering organizations to act responsibly while achieving measurable outcomes.
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