"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { Eye, Settings, Users, Lightbulb } from "lucide-react";

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
            title: "Visionary Leadership",
            icon: <Eye size={28} />,
            desc1:

                "Our leadership is anchored in long-term thinking, market insight, and a relentless drive for innovation.",
            desc2:
                "We help organizations translate strategy into actionable plans, ensuring every initiative contributes to overarching business goals.",
            desc3:
            "By anticipating industry trends and disruptive technologies, we equip enterprises with the foresight needed to stay ahead in a rapidly evolving marketplace.",
        },
        {
            title: "Operational Excellence",
            icon: <Settings size={28} />,
            desc1:
                "Excellence in execution is at the core of everything we do.",
            desc2:
                "From large-scale digital initiatives to critical operational workflows, our teams ensure precision, reliability, and scalability at every stage.",
            desc3:
            "We implement rigorous governance, adopt best practices, and leverage cutting-edge tools to deliver outcomes that are both efficient and impactful.",
        },
        {
            title: "Trusted Collaboration",
            icon: <Users size={28} />,
            desc1:
                "True transformation requires partnership, not just consultancy.",
            desc2:
                "We work closely with executives and stakeholders, fostering relationships based on trust, transparency, and mutual accountability.",
            desc3:
               "Our collaborative approach ensures alignment across all levels of the organization, promoting shared ownership of success and sustainable results.",
        },
        {
            title: "Innovation & Foresight",
            icon: <Lightbulb size={28} />,
            desc1:
                "In a world defined by rapid change, staying ahead requires continuous innovation and strategic foresight.",
            desc2:
                "We empower organizations to embrace emerging technologies, anticipate market shifts, and adapt processes to remain competitive.",
            desc3:
            "By cultivating a culture of forward-thinking, we enable businesses to confidently navigate uncertainty and seize opportunities for growth and differentiation.",
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
                            <h1>Our Values</h1>

                            <p>
                           Principles that guide our decisions, shape our culture, and define how we partner with enterprises to deliver trusted, long-term impact.
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

                    <h2 className={styles.heading}>Our Values</h2>

                    <p className={styles.intro}>
               At the heart of our organization lies a commitment to visionary leadership and technological mastery.
We help enterprises navigate the complexities of digital transformation by integrating strategic foresight with hands-on expertise, ensuring every technology decision aligns with long-term business objectives.
                    </p>



                    
                    <p className={styles.intro}>
               Our teams focus on clarity, accountability, and execution excellence, working side by side with clients to modernize infrastructures, mitigate risks, and accelerate sustainable growth.
                    </p>





                    
                    <p className={styles.intro}>
                      By blending insight, innovation, and action, we enable organizations to build resilient, scalable, and future-ready digital foundations capable of thriving in an increasingly software-driven world.
                    </p>


                   
                    
                    <p className={styles.intro}>
                     Our approach is holistic: we consider technology, governance, culture, and operational realities, creating solutions that deliver measurable impact and foster long-term value.
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
                                <p>{item.desc3}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}