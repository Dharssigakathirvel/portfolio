import { motion } from "framer-motion";

const cards = [
  { icon: "⚡", title: "Embedded Systems", sub: "Arduino · ESP32 · Sensors · PIC" },
  { icon: "🔌", title: "IoT",              sub: "Smart Devices · Monitoring · Dashboards" },
  { icon: "💻", title: "Full Stack",        sub: "React · Node.js · Express · MongoDB" },
];

export default function About() {
  return (
    <section id="about" className="dh-section">
      <p className="dh-eyebrow">Who I am</p>
      <h2 className="dh-section-title">About Me</h2>

      <p style={{ color: "var(--text-dim)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 640 }}>
        As an Electrical and Electronics Engineering student who enjoys bringing ideas to life that traverses thru circuits and code. I like providing a simple solution for the complex real world problems with the product where hardware and software work together.
      </p>

      <div className="dh-about__grid">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="dh-card"
          >
            <div className="dh-about__card-icon">{c.icon}</div>
            <div className="dh-about__card-title">{c.title}</div>
            <div className="dh-about__card-sub">{c.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}