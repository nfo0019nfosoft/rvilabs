"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>

      <div className={styles.footerContainer}>

        {/* ABOUT */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>ABOUT COMPANY</h3>
          <p>
            We are a forward-thinking technology solutions provider delivering
            innovative services to help businesses scale and thrive.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>QUICK LINKS</h3>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link href="/" className={styles.listLink}>Home</Link></li>
              <li className={styles.listItem}><Link href="/insights" className={styles.listLink}>Insights</Link></li>
              <li className={styles.listItem}><Link href="/industries" className={styles.listLink}>Industries</Link></li>
              <li className={styles.listItem}><Link href="/services" className={styles.listLink}>Services</Link></li>
              <li className={styles.listItem}><Link href="/about" className={styles.listLink}>About Us</Link></li>
              <li className={styles.listItem}><Link href="/careers" className={styles.listLink}>Careers</Link></li>
              <li className={styles.listItem}><Link href="/news" className={styles.listLink}>News</Link></li>
              <li className={styles.listItem}><Link href="/investors" className={styles.listLink}>Investors</Link></li>
              <li className={styles.listItem}><Link href="/contact" className={styles.listLink}>Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* SERVICES */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>SERVICES</h3>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link href="/services/digitaltransformation" className={styles.listLink}>Digital Transformation</Link></li>
              <li className={styles.listItem}><Link href="/services/cloudservices" className={styles.listLink}>Cloud Services</Link></li>
              <li className={styles.listItem}><Link href="/services/data-ai"  className={styles.listLink}>Data & AI</Link></li>
              <li className={styles.listItem}><Link href="/services/cybersecurity" className={styles.listLink}>Cybersecurity</Link></li>
              <li className={styles.listItem}><Link href="/services/applicationdevelopment" className={styles.listLink}>Application Development</Link></li>
              <li className={styles.listItem}><Link href="/services/enterpriseplatform"  className={styles.listLink}>Enterprise Platforms</Link></li>
              <li className={styles.listItem}><Link href="/services/itconsulting"className={styles.listLink}>IT Consulting</Link></li>
              <li className={styles.listItem}><Link href="/services/infrastructure" className={styles.listLink}>Infrastructure Services</Link></li>
            </ul>
          </nav>
        </div>

        {/* CONTACT */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>GET IN TOUCH</h3>
          <p>123 Tech Avenue, Silicon Valley</p>
          <p>Email: info@company.com</p>

          <h3 className={`${styles.footerHeading} ${styles.followTitle}`}>
            FOLLOW US
          </h3>

          <div className={styles.footerSocial}>
            <a href="https://www.linkedin.com/company/rvinnovationlabs" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/Rvinnovationlabs" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/rvinnovationlabs/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="http://youtube.com/channel/UCA2L-a9-JWdX5d2rhKcXuQg" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://x.com/RvILabs" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        © 2026 Company Name. All rights reserved.
      </div>

    </footer>
  );
}