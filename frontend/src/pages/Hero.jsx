import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="dh-hero">
      {/* Circuit trace SVG — signature element */}
      <svg className="dh-circuit" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M100 300 H300 V150 H500 V300 H700 V450 H500 V300" stroke="#E8A4C0" strokeWidth="1" strokeOpacity="0.18" />
        <path d="M0 200 H150 V400 H350 V200 H550 V500 H750 V200 H900" stroke="#C4ADFF" strokeWidth="1" strokeOpacity="0.13" />
        <circle cx="300" cy="150" r="4" fill="#E8A4C0" fillOpacity="0.4" />
        <circle cx="500" cy="300" r="4" fill="#C4ADFF" fillOpacity="0.4" />
        <circle cx="700" cy="450" r="4" fill="#E8A4C0" fillOpacity="0.4" />
        <circle cx="150" cy="400" r="3" fill="#C4ADFF" fillOpacity="0.35" />
        <circle cx="550" cy="200" r="3" fill="#E8A4C0" fillOpacity="0.35" />
        <path d="M200 550 H400 V480 H600" stroke="#E8A4C0" strokeWidth="0.8" strokeOpacity="0.12" />
        <path d="M750 100 V250 H650 V350" stroke="#C4ADFF" strokeWidth="0.8" strokeOpacity="0.12" />
      </svg>

      <div className="dh-blob dh-blob--rose" />
      <div className="dh-blob dh-blob--lavender" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="dh-hero__inner"
      >
        <p className="dh-eyebrow">EEE Engineer &nbsp;·&nbsp; Embedded Systems &nbsp;·&nbsp; IoT &nbsp;·&nbsp; Full Stack</p>

        <h1 className="dh-hero__title">
          Heyy, I'm <span className="dh-gradient-text">Dharssiga</span> 👋
        </h1>

        <p className="dh-hero__sub">
          I design smart connected systems —<br />
          from microcontrollers to web platforms,<br />
          where hardware meets software.
        </p>

        <div className="dh-cta-row">
          <a href="#projects" className="dh-btn dh-btn--primary">Explore Projects</a>
          <a href="/resume.pdf" download className="dh-btn dh-btn--ghost">
            <Download size={15} />
            View Resume
          </a>
        </div>

        <div className="dh-socials">
          <a href="https://github.com/Dharssiga" target="_blank" rel="noreferrer" className="dh-social-link" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dharssiga-kathirvel" target="_blank" rel="noreferrer" className="dh-social-link" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/Dharssiga/" target="_blank" rel="noreferrer" className="dh-social-link" aria-label="LeetCode">
            <SiLeetcode size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}