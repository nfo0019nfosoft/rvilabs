"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>

      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/careers" className={styles.link}>Careers</Link>
          <Link href="/news" className={styles.link}>News</Link>
          <Link href="/investors" className={styles.link}>Investors</Link>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={styles.mainNavbar}>
        <div className={styles.navbarInner}>
          <div className={styles.navLeft}>

            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="RV Innovation Labs Logo" className={styles.logoImg} />
            </Link>

            <nav className={styles.navLinks}>

              {/* INSIGHTS */}
              <div
                className={`${styles.navItem} ${styles.mega}`}
                onMouseEnter={() => setActiveMenu("insights")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/insights" className={styles.link}>Insights</Link>

                <div className={`${styles.megaMenu} ${activeMenu === "insights" ? styles.show : ""}`}>
                  <div className={styles.megaLeft}>
                    <h3>Insights</h3>
                    <p>Explore our latest thought leadership, insights, and ideas shaping the future of business.</p>
                    <Link href="/insights" className={styles.megaBtn} onClick={() => setActiveMenu(null)}>
                      Learn more →
                    </Link>
                  </div>

                  <div className={styles.megaRight}>
                    <Link href="/insights/hot-topics" className={styles.link} onClick={() => setActiveMenu(null)}>Hot topics</Link>
                    <Link href="/insights/conversations-for-tomorrow" className={styles.link} onClick={() => setActiveMenu(null)}>Conversations for Tomorrow</Link>
                    <Link href="/insights/world-economic-forum" className={styles.link} onClick={() => setActiveMenu(null)}>World Economic Forum</Link>
                    <Link href="/insights/expert-perspectives" className={styles.link} onClick={() => setActiveMenu(null)}>Expert perspectives</Link>
                  </div>
                </div>
              </div>

              {/* INDUSTRIES */}
              <div
                className={`${styles.navItem} ${styles.mega}`}
                onMouseEnter={() => setActiveMenu("industries")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/industries" className={styles.link}>Industries</Link>

                <div className={`${styles.megaMenu} ${activeMenu === "industries" ? styles.show : ""}`}>
                  <div className={styles.megaLeft}>
                    <h3>Industries</h3>
                    <p>Discover how we help organizations across industries transform and grow in a digital-first world.</p>
                    <Link href="/industries" className={styles.megaBtn} onClick={() => setActiveMenu(null)}>
                      View all Industries →
                    </Link>
                  </div>

                  <div className={styles.megaRight}>
                    <Link href="/industries/banking" className={styles.link} onClick={() => setActiveMenu(null)}>Banking & Financial Services</Link>
                    <Link href="/industries/healthcare" className={styles.link} onClick={() => setActiveMenu(null)}>Healthcare & Life Sciences</Link>
                    <Link href="/industries/manufacturing" className={styles.link} onClick={() => setActiveMenu(null)}>Manufacturing</Link>
                    <Link href="/industries/retail" className={styles.link} onClick={() => setActiveMenu(null)}>Retail & Consumer Products</Link>
                  </div>
                </div>
              </div>

              {/* SERVICES */}
              <div
                className={`${styles.navItem} ${styles.mega}`}
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/services" className={styles.link}>Services</Link>

                <div className={`${styles.megaMenu} ${styles.servicesMenu} ${activeMenu === "services" ? styles.show : ""}`}>
                  <div className={styles.megaLeft}>
                    <h3>Services</h3>
                    <p>End-to-end services that help organizations innovate, transform, and grow at scale.</p>
                    <Link href="/services" className={styles.megaBtn} onClick={() => setActiveMenu(null)}>
                      Explore all services →
                    </Link>
                  </div>

                  <div className={`${styles.megaRight} ${styles.servicesRight}`}>
                    <div className={styles.servicesColumn}>
                      <Link href="/services/digitaltransformation" className={styles.link} onClick={() => setActiveMenu(null)}>Digital Transformation</Link>
                      <Link href="/services/cloudservices" className={styles.link} onClick={() => setActiveMenu(null)}>Cloud Services</Link>
                      <Link href="/services/data-ai" className={styles.link} onClick={() => setActiveMenu(null)}>Data & AI</Link>
                      <Link href="/services/cybersecurity" className={styles.link} onClick={() => setActiveMenu(null)}>Cybersecurity</Link>
                      <Link href="/services/applicationdevelopment" className={styles.link} onClick={() => setActiveMenu(null)}>Application Development</Link>
                      <Link href="/services/enterpriseplatform" className={styles.link} onClick={() => setActiveMenu(null)}>Enterprise Platform</Link>
                      <Link href="/services/itconsulting" className={styles.link} onClick={() => setActiveMenu(null)}>IT Consulting</Link>
                      <Link href="/services/infrastructure" className={styles.link} onClick={() => setActiveMenu(null)}>Infrastructure Services</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ABOUT */}
              <div
                className={`${styles.navItem} ${styles.mega}`}
                onMouseEnter={() => setActiveMenu("about")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/about" className={styles.link}>About Us</Link>

                <div className={`${styles.megaMenu} ${styles.aboutMenu} ${activeMenu === "about" ? styles.show : ""}`}>
                  <div className={styles.megaLeft}>
                    <h3>About Us</h3>
                    <p>Learn more about who we are, what we do, and how we create value for our clients.</p>
                    <Link href="/about" className={styles.megaBtn} onClick={() => setActiveMenu(null)}>
                      Discover more →
                    </Link>
                  </div>

                  <div className={styles.megaRight}>
                    <Link href="/about/who-we-are" className={styles.link} onClick={() => setActiveMenu(null)}>Who we are</Link>
                    <Link href="/about/leadership" className={styles.link} onClick={() => setActiveMenu(null)}>Leadership</Link>
                    <Link href="/about/ourvalues" className={styles.link} onClick={() => setActiveMenu(null)}>Our Values</Link>
                    <Link href="/about/sustainability" className={styles.link} onClick={() => setActiveMenu(null)}>Sustainability</Link>
                    <Link href="/about/diversity-inclusion" className={styles.link} onClick={() => setActiveMenu(null)}>Diversity & Inclusion</Link>
                    <Link href="/about/corporate-responsibility" className={styles.link} onClick={() => setActiveMenu(null)}>Corporate responsibility</Link>
                  </div>
                </div>
              </div>

            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <div className={styles.mobileNavbar}>
        <img src="/logo.png" alt="logo" className={styles.logoImg} />

        <div
          className={`${styles.mobileToggle} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

     <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
  <div className={styles.mobileNavLinks}>

    <Link href="/insights" onClick={() => setMenuOpen(false)} className={styles.link}>Insights</Link>
    <Link href="/industries" onClick={() => setMenuOpen(false)} className={styles.link}>Industries</Link>
    <Link href="/services" onClick={() => setMenuOpen(false)} className={styles.link}>Services</Link>
    <Link href="/about" onClick={() => setMenuOpen(false)} className={styles.link}>About Us</Link>
    <Link href="/blog" onClick={() => setMenuOpen(false)} className={styles.link}>Blog</Link>
    <Link href="/careers" onClick={() => setMenuOpen(false)} className={styles.link}>Careers</Link>
    <Link href="/news" onClick={() => setMenuOpen(false)} className={styles.link}>News</Link>
    <Link href="/investors" onClick={() => setMenuOpen(false)} className={styles.link}>Investors</Link>
    <Link href="/contact" onClick={() => setMenuOpen(false)} className={styles.link}>Contact Us</Link>

  </div>
</div>

    </div>
  );
}