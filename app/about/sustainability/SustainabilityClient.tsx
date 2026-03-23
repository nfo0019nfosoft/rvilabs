"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { UserCheck, Leaf, Users, Sparkles, } from "lucide-react";

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
            title: "Responsible Leadership",
            icon: <UserCheck size={28} />,
            desc1:
                " Our leadership fosters a culture of responsibility, accountability, and ethical decision-making.  ",
            desc2:
                "  We inspire organizations to embed sustainability in every level of governance and strategy. By aligning business objectives with social and environmental priorities, we create lasting impact. ",
            desc3:
                " Our leaders anticipate trends in sustainability and help enterprises adapt proactively.  ",
            desc4:
                "  Ethical leadership ensures every initiative benefits stakeholders, society, and the environment. We integrate sustainable thinking into corporate strategy, risk management, and performance metrics. ",
            desc5:
                " Our vision balances innovation, profitability, and positive societal impact.  ",
            desc6:
                "We help organizations lead responsibly in a world that values transparency and purpose.",
        },
        {
            title: "Operational Sustainability",
            icon: <Leaf size={28} />,
            desc1:
                " Sustainable operations are critical to long-term success and resource efficiency.  ",
            desc2:
                " We implement processes and technologies that minimize waste, reduce energy consumption, and optimize supply chains. Our teams ensure that sustainability is embedded in project delivery, performance management, and organizational practices.  ",
            desc3:
                " We help enterprises track impact metrics and continuously improve sustainable performance.  ",
            desc4:
                " Operations are designed to balance environmental responsibility with business growth.  ",
            desc5:
                "  By adopting circular economy principles, we enable long-term resilience and value creation. Our approach ensures that every initiative supports both financial and environmental sustainability. ",
            desc6:
                " Operational excellence combined with sustainable practices drives measurable, lasting impact.",
        },
        {
            title: "Collaborative Impact",
            icon: <Users size={28} />,
            desc1:
                "  Sustainability is a collective effort that requires collaboration with stakeholders, communities, and partners. ",
            desc2:
                " We work closely with organizations to foster shared responsibility for social and environmental outcomes.  ",
            desc3:
                " Collaboration drives innovation in sustainable products, services, and processes. We align organizational goals with global sustainability standards and frameworks.   ",
            desc4:
                "  Partnerships enable measurable change and amplify positive societal impact. ",
            desc5:
                "  By encouraging transparency and joint accountability, we strengthen trust and credibility. Our approach ensures that sustainability becomes an integrated part of organizational culture. ",
            desc6:
                "  Through collaboration, enterprises achieve greater environmental, social, and economic impact.",
        },
        {
            title: "Innovation for Sustainability",
            icon: <Sparkles size={28} />,
            desc1:
                "  Innovation is the key to achieving lasting sustainable outcomes. ",
            desc2:
                "  We leverage emerging technologies to develop solutions that minimize environmental impact and enhance efficiency. ",
            desc3:
                "  Sustainable innovation drives both growth and positive societal change. Our teams explore creative approaches to energy, materials, and operations to achieve measurable results. ",
            desc4:
                "  We design solutions that are scalable, adaptable, and aligned with long-term sustainability goals. ",
            desc5:
                " By anticipating market trends and regulatory shifts, we help organizations remain competitive responsibly.  ",
            desc6:
                " Innovation ensures that sustainability is integrated into the DNA of every product, service, and process. We empower enterprises to lead the transition to a more sustainable, resilient, and inclusive future.  ",
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
                            <h1>Sustainability</h1>

                            <p>
                                Guiding Principles for Sustainable Impact and Trusted Partnerships
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

                    <h2 className={styles.heading}>Sustainability</h2>

                    <p className={styles.intro}>
                        Sustainability is at the core of everything we do.<br />
                        We guide organizations to make decisions that balance business growth, social responsibility, and environmental stewardship.<br />
                        Our teams integrate sustainable practices into every initiative, ensuring long-term value creation for clients, communities, and the planet.
                    </p>




                    <p className={styles.intro}>
                        By combining insight, innovation, and action, we help enterprises reduce their environmental footprint while enhancing operational efficiency.

                    </p>






                    <p className={styles.intro}>
                        Our holistic approach considers governance, culture, technology, and societal impact, creating solutions that are responsible, resilient, and future-ready.
                        Through collaboration and strategic foresight, we empower organizations to embed sustainability into their core business strategies.
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
                                <p>{item.desc4}</p>
                                <p>{item.desc5}</p>
                                <p>{item.desc6}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}