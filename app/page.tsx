"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";



export default function Home() {

   const aboutRef = useRef<HTMLDivElement | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const strengthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aboutLeftRef = useRef<HTMLDivElement | null>(null);
const aboutRightRef = useRef<HTMLDivElement | null>(null);








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

[
  ...serviceRefs.current,
  ...storyRefs.current,
  ...strengthRefs.current,
  aboutRef.current,
  aboutLeftRef.current,
  aboutRightRef.current,
  ...document.querySelectorAll(".reveal"),
]
    .forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);



  const aboutData = [
    {
      title: "Who We Are",
      desc: "  We are a passionate team dedicated to delivering high-quality services that bring ideas to life. With a strong focus on creativity, innovation, and customer satisfaction, we turn every project into a meaningful experience.",
      img: "/hero.png"
    },
    {
      title: "Leadership",
      desc: "Our leadership team brings decades of experience in engineering and innovation. They are passionate about solving complex challenges, mentoring talent, and shaping future-ready solutions that make a real-world impact.",
      img: "/hero.png"
    },
    {
      title: "Our Values",
      desc: "Integrity, innovation, and excellence guide everything we build. These values shape our decisions, strengthen our partnerships, and ensure we create dependable, future-ready solutions that clients can trust and grow with.",
      img: "/hero.png"
    },
    {
      title: "Sustainability",
      desc: "We focus on long-term sustainability through responsible technology practices. From thoughtful system design to energy-efficient digital solutions, we are committed to creating technology that benefits businesses, users, and the planet.",
      img: "/hero.png"
    },
    {
      title: "Diversity & Inclusion",
      desc: "Empowering diverse voices and inclusive innovation. By embracing diversity in thought, background, and experience, we create stronger teams and more meaningful digital products that serve a global and inclusive audience.",
      img: "/hero.png"
    },
    {
      title: "Corporate Responsibility",
      desc: "Committed to ethical growth and social responsibility. By upholding strong governance, ethical standards, and community-focused initiatives, we strive to create lasting value while making a positive difference in society.",
      img: "/hero.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex(
      (currentIndex - 1 + aboutData.length) % aboutData.length
    );

  const next = () =>
    setCurrentIndex((currentIndex + 1) % aboutData.length);





  const services = [
    {
      title: "Digital Transformation",
      desc: "We help organizations modernize business models, operational processes, and customer experiences through innovation-led digital strategies. By leveraging emerging technologies, automation, and data-driven insights, we enable businesses to adapt quickly and stay competitive in a rapidly changing digital landscape.",
      img: "/hero.png",
        link: "/services/digitaltransformation",
    },
    {
      title: "Cloud Services",
      desc: "We design and implement secure, scalable cloud architectures that enable organizations to operate with greater agility and efficiency. Our cloud solutions help reduce infrastructure complexity, optimize operational costs, and support seamless scalability as business demands evolve. By leveraging modern cloud platforms and best practices, we ensure high availability, performance, and long-term reliability across enterprise environments.",
      img: "/hero.png",
        link: "/services/cloudservices",
    },
    {
      title: "Data & AI",
      desc: "Turning data into actionable intelligence through advanced analytics, intelligent automation, and AI-powered systems that support faster, smarter decision-making. We help organizations unlock the full value of their data by building scalable data platforms, predictive models, and insight-driven solutions that improve performance, efficiency, and long-term business outcomes.",
      img: "/hero.png",
        link: "/services/data-ai",
    },
    {
      title: "Cybersecurity",
      desc: "Protecting digital assets with advanced security frameworks, risk management, and proactive threat monitoring. Our cybersecurity solutions are designed to safeguard critical systems, sensitive data, and enterprise infrastructure against evolving threats. We implement industry-leading security practices, continuous monitoring, and compliance-driven strategies to reduce risk, strengthen resilience, and ensure business continuity across complex digital environments.",
      img: "/hero.png",
        link: "/services/cybersecurity",
    },
    {
      title: "Application Development",
      desc: "Designing and building high-performance web and mobile applications using modern architectures, scalable frameworks, and intuitive user experiences. We focus on clean code, optimized performance, and future-ready solutions that adapt as your business grows.",
      img: "/hero.png",
        link: "/services/applicationdevelopment",
    },
    {
      title: "Enterprise Platforms",
      desc: "Integrating and optimizing enterprise platforms to streamline operations, improve collaboration, and enhance data visibility across the organization. We design scalable platform ecosystems that connect systems, automate workflows, and support long-term business agility while ensuring reliability, security, and seamless performance at enterprise scale.",
      img: "/hero.png",
        link: "/services/enterpriseplatform",
    },
    {
      title: "IT Consulting",
      desc: "Strategic consulting services designed to align technology initiatives with long-term business goals and innovation roadmaps. We help organizations assess their current IT landscape, identify opportunities for optimization, and design future-ready strategies that improve efficiency, scalability, and decision-making. Our consultants work closely with leadership teams to ensure technology investments deliver measurable value and sustainable growth.",
      img: "/hero.png",
        link: "/services/itconsulting",
    },
    {
      title: "Infrastructure Services",
      desc: "Modernizing business models, processes, and customer experiences through innovation-led digital strategies. We help organizations adopt emerging technologies, streamline operations, and create agile digital ecosystems that drive measurable growth and long-term competitive advantage.",
      img: "/hero.png",
        link: "/services/infrastructure",
    },
  ];




     const strengths = [
  {
    title: "Deep Expertise",
    desc: "Industry-driven knowledge backed by real-world execution experience across complex enterprise environments, enabling us to deliver practical solutions that scale with confidence and consistency.",
    icon: <i className="bi bi-gear"></i>,
  },
  {
    title: "Strategic Thinking",
    desc: "Insight-led planning aligned with long-term business goals, scalable architectures, and measurable outcomes that support sustainable growth and informed decision-making.",
    icon: <i className="bi bi-bar-chart"></i>,
  },
  {
    title: "Reliability",
    desc: "Secure, stable, and dependable solutions engineered to support mission-critical operations, ensuring performance, resilience, and uninterrupted business continuity.",
    icon: <i className="bi bi-shield-check"></i>
  },
  {
    title: "Future Ready",
    desc: "Architected to evolve alongside emerging technologies and adapt seamlessly to future business demands, ensuring long-term relevance and sustained performance.",
    icon: <i className="bi bi-rocket"></i>,
  },
];






  return (
    <>
      <main className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          {/* LEFT TEXT (SEO PERFECT) */}
          <div className={styles.left}>
            <h1>Smart Software. Real Impact.</h1>

            <h2>
              Turning ideas into reliable, high-performance digital
              solutions  that scale with your business.
            </h2>


            <div className={styles.actions}>
              <a href="/services" className={styles.primary}>
                Our Services
              </a>
              <a href="/contact" className={styles.secondary}>
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT 3D */}
        <div className={styles.right}>
  <div className={styles.aiFlow}>

    {/* CENTER CORE */}
    <div className={styles.core}></div>

    {/* FLOATING ICONS */}
    <i className={`bi bi-hospital ${styles.icon}`}></i>
    <i className={`bi bi-bank ${styles.icon}`}></i>
    <i className={`bi bi-cart ${styles.icon}`}></i>
    <i className={`bi bi-cpu ${styles.icon}`}></i>
    <i className={`bi bi-cloud ${styles.icon}`}></i>
    <i className={`bi bi-shield-check ${styles.icon}`}></i>
    <i className={`bi bi-graph-up ${styles.icon}`}></i>

  </div>
</div>
       
        </div>
      </main>






      {/* ABOUT US TEXT */}
   <section className={styles.aboutUsSection} ref={aboutRef}>
        <div className={styles.aboutUsContainer}>
          <h2 className={styles.aboutUsTitle}>About Us</h2>
          <p className={styles.aboutUsDescription}>
            We are a technology-driven software company specializing in building scalable,
            secure, and high-performance digital solutions. Our team combines innovation,
            deep technical expertise, and strategic thinking to help businesses transform
            ideas into reliable software products.

            From custom software development to modern digital platforms, we focus on
            delivering solutions that are efficient, future-ready, and aligned with
            real-world business goals. We believe in long-term partnerships, transparent
            processes, and technology that creates measurable impact.


            By embracing modern frameworks, cloud technologies, and best engineering
            practices, we empower organizations to grow, adapt, and succeed in an
            ever-evolving digital landscape.


            Our approach is built on collaboration, precision, and continuous improvement.
            We work closely with our clients to understand their challenges, design
            thoughtful solutions, and deliver software that enhances performance,
            security, and user experience across every stage of development.
            <br /><br />

            Whether supporting startups on their growth journey or helping established
            enterprises modernize their systems, we are committed to delivering technology
            that drives innovation, strengthens operations, and creates long-term value.
          </p>
        </div>
      </section>

      {/* ABOUT CAROUSEL */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* LEFT */}
        <div className={styles.aboutLeft} ref={aboutLeftRef}>
            <div className={styles.imageWrapper}>
              <img src={aboutData[currentIndex].img} alt="about" />
            </div>

            <div className={styles.controls}>
              <button onClick={prev}>‹</button>

              <div className={styles.dots}>
                {aboutData.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={
                      i === currentIndex
                        ? `${styles.dot} ${styles.active}`
                        : styles.dot
                    }
                  />
                ))}
              </div>

              <button onClick={next}>›</button>
            </div>
          </div>

          {/* RIGHT */}
        <div className={styles.aboutRight} ref={aboutRightRef}>
            <div className={styles.aboutText}>
              <h3>{aboutData[currentIndex].title}</h3>
              <p>{aboutData[currentIndex].desc}</p>

              <div className={styles.actions}>
                <a href="/about" className={styles.btn}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className={styles.section}>
        <div className={styles.container}>

          <h2 className={styles.title}>Our Services</h2>

          <p className={styles.intro}>
            Enterprise-grade digital solutions engineered for scale, security, and long-term business impact. We combine strategic thinking, advanced engineering, and modern technologies to help organizations innovate faster, operate smarter, and build resilient digital foundations that support sustainable growth in a rapidly evolving global landscape.
          </p>

          {services.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
  if (el) serviceRefs.current[i] = el;
}}
              className={`${styles.card} ${i % 2 === 1 ? styles.reverse : ""}`}
            >

              {/* IMAGE */}
              <div className={styles.image}>
                <img src={item.img} alt={item.title} />
              </div>

              {/* ✅ FIXED CONTENT */}
              <div className={styles.serviceContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                {/* ✅ FIXED BUTTON */}
                <a href={item.link} className={styles.serviceBtn}>
  Read More
</a>
              
              </div>

            </div>
          ))}
        </div>
      </section>









      <section className={styles.storiesSection}>
        <div className={styles.storiesContainer}>

          {/* SEO HEADING */}
          <h2 className={styles.storiesTitle}>Inside Stories</h2>

          <p className={styles.storiesDesc}>
           
Discover our latest insights and experiences that showcase the creativity, innovation, and expertise behind every project we undertake. Dive deep into the stories of how ideas transform into impactful solutions, exploring challenges, strategies, and outcomes. Each story highlights the passion, collaboration, and dedication that drives meaningful results. From cutting-edge technology to innovative design approaches, learn how we shape solutions that leave a lasting impression. Get an exclusive look inside our creative process and see the difference thoughtful execution can make. Every insight is crafted to inspire, inform, and spark new possibilities for your business or project.
          </p>

          <div className={styles.storiesGrid}>

            {/* CARD 1 */}
            <div
  ref={(el) => {
    if (el) storyRefs.current[0] = el;
  }}
              className={styles.storyCard}
            >
              <h3>A Journey Through Creativity</h3>
              <p>
                Explore how we turn ideas into stunning digital experiences that inspire. From innovative design concepts to strategic execution, every project is crafted to leave a lasting impact. Our stories showcase the creativity, effort, and passion behind each successful project, giving you an inside look at how we make ideas come alive.
              </p>
            </div>

            {/* CARD 2 */}
            <div
  ref={(el) => {
    if (el) storyRefs.current[1] = el;
  }}
              className={`${styles.storyCard} ${styles.rightCard}`}
            ><h3>Innovation in Action</h3>
              <p>
               See how our strategies are transforming businesses with cutting-edge solutions. We combine technology, creativity, and data-driven insights to deliver measurable results. Each story highlights the challenges faced, innovative approaches applied, and the impact achieved, giving you a deeper understanding of how innovation drives success in the real world.


              </p>
            </div>

          </div>
        </div>
      </section>





            

            

<section className={styles.strengthsSection}>
  <div className={styles.strengthsContainer}>
    
    <h2 className={styles.strengthsTitle}>Our Strengths</h2>

    <p className={styles.strengthsDesc}>
Core capabilities that define how we deliver consistent value, strategic precision, and measurable long-term impact across every engagement.
    </p>

    <div className={styles.strengthsGrid}>
      {strengths.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
  if (el) strengthRefs.current[i] = el;
}}
          className={`${styles.strengthCard} ${
            i % 2 === 0 ? styles.up : styles.down
          }`}
        >
          <div className={styles.icon}>{item.icon}</div>

          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>












<section className={styles.industriesSection}>

  <div className={styles.industriesContainer}>

    <h2 className="reveal">Industries We Serve</h2>

    <div className={styles.industriesGrid}>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-hospital"></i></div>
        <h3>Healthcare Solutions</h3>
        <h3>AI-driven healthcare systems and digital transformation solutions.</h3>
      </div>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-graduation-cap"></i></div>
        <h3>Education Technology</h3>
        <h3>Modern e-learning platforms and scalable systems.</h3>
      </div>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-shopping-cart"></i></div>
        <h3>E-Commerce & Retail</h3>
        <h3>High-performance platforms with seamless UX.</h3>
      </div>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-industry"></i></div>
        <h3>Manufacturing</h3>
        <h3>Automation and predictive maintenance systems.</h3>
      </div>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-cloud"></i></div>
        <h3>Cloud & SaaS</h3>
        <h3>Scalable cloud-native applications and SaaS systems.</h3>
      </div>

      <div className={`${styles.industryCard} reveal`}>
        <div className={styles.icon}><i className="fas fa-shield-alt"></i></div>
        <h3>Cybersecurity</h3>
        <h3>Advanced protection and compliance solutions.</h3>
      </div>

    </div>

  </div>

</section>





























    </>

  );
}









