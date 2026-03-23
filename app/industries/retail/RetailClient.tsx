"use client";

import { useEffect, useRef } from "react";
import styles from "../../insights/hot-topics/hot-topics.module.css";
import { ShoppingCart, UserCheck, Truck, BarChart4 } from "lucide-react";

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
            title: "Digital Commerce & Omnichannel Platforms",
            icon: <ShoppingCart size={28} />,
            desc1:
                "We enable scalable, cloud-native commerce platforms that deliver consistent, personalized experiences across every customer touchpoint.",
            desc2:
                "Modern retail requires seamless integration across e-commerce, mobile, in-store, and partner ecosystems.",
        },
        {
            title: "Customer Experience & Personalization",
            icon: <UserCheck size={28} />,
            desc1:
                "Consumers expect relevant, engaging, and frictionless experiences across every interaction.",
            desc2:
                "Our approach leverages data, analytics, and AI to personalize journeys, strengthen brand loyalty, and increase lifetime value.",
        },
        {
            title: "Supply Chain & Operational Intelligence",
            icon: <Truck size={28} />,
            desc1:
                "Supply chain resilience and visibility are critical in a volatile, demand-driven market.",
            desc2:
                "We help organizations integrate data and platforms to improve forecasting, inventory optimization, and operational efficiency.",
        },
        {
            title: "Data, Analytics & Consumer Insights",
            icon: <BarChart4 size={28} />,
            desc1:
                "Data becomes a competitive advantage when transformed into actionable insight across merchandising, marketing, and operations.",
            desc2:
                "We enable advanced analytics and AI-driven intelligence that support smarter decisions, faster response, and sustained growth.",
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
                            <h1>Retail & Consumer Products</h1>

                            <p>
                           Empowering retailers and consumer products organizations to modernize digital commerce platforms, integrate supply chains, and deliver personalized, data-driven customer experiences across physical and digital channels in a rapidly evolving market landscape.
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
                    <span className={styles.tag}>Industries</span>

                    <h2 className={styles.heading}>Retail & Consumer Products</h2>

                    <p className={styles.intro}>
                 Retail and consumer products organizations operate in a fast-moving, customer-driven environment shaped by changing consumer behavior, digital disruption, and growing competitive pressure across physical and digital channels.<br/>
Brands must modernize commerce platforms, integrate supply chains, and activate real-time data—while delivering consistent, personalized experiences that build loyalty and drive long-term growth.
                    </p>



                    
                    <p className={styles.intro}>
Our Retail & Consumer Products expertise focuses on helping organizations balance speed with scalability, innovation with operational efficiency, and customer engagement with profitability across the entire value chain.
                    </p>





                    
                    <p className={styles.intro}>
        We work with retailers, manufacturers, and consumer brands to design secure, scalable, and future-ready digital foundations that support omnichannel commerce, intelligent operations, and data-driven decision-making in an increasingly experience-led market.
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