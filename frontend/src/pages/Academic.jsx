import { motion } from "framer-motion";

const education = [
  {
    icon: "🎓",
    title: "B.E. Electrical & Electronics Engineering",
    where: "Kongu Engineering College · 2024–2028",
    highlight: "CGPA 9.32",
    desc: "Specialising in Embedded Systems, IoT and Smart Energy. Been recogonised as the top 5% best performers in the department.",
  },
  {
    icon: "📚",
    title: "Higher Secondary – State Board",
    where: "2024",
    highlight: "85.67%",
    desc: "Completed higher secondary with a strong foundation in Physics, Chemistry and Mathematics.",
  },
];

const experience = [
  {
    icon: "🏭",
    title: "Inplant Trainee",
    where: "Coral Manufacturing Works · Dec 2025",
    highlight: "Industrial Training",
    desc: "Hands-on exposure to stator and motor rewinding for windmill generators, electrical machine maintenance and assembly workflows in a live manufacturing environment.",
  },
];

function Card({ item, i, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + i * 0.1 }}
      className="dh-card"
      style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
    >
      <div style={{
        fontSize: "1.6rem",
        minWidth: "2.5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(232,164,192,0.08)",
        borderRadius: "12px",
        border: "1px solid rgba(232,164,192,0.15)",
      }}>
        {item.icon}
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, margin: 0 }}>
            {item.title}
          </h3>
          <span style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            padding: "0.2rem 0.7rem",
            borderRadius: "50px",
            background: "linear-gradient(120deg, rgba(232,164,192,0.18), rgba(196,173,255,0.18))",
            color: "var(--rose)",
            border: "1px solid rgba(232,164,192,0.25)",
          }}>
            {item.highlight}
          </span>
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--rose)", fontWeight: 600, margin: "0.3rem 0 0.5rem", letterSpacing: "0.04em" }}>
          {item.where}
        </p>
        <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
      </div>
    </motion.div>
  );
}

const subTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.3rem",
  fontWeight: 600,
  margin: "0 0 1.25rem",
  color: "var(--warm-white)",
};

const divider = {
  border: "none",
  borderTop: "1px solid rgba(232,164,192,0.1)",
  margin: "2.5rem 0",
};

export default function Academic() {
  return (
    <section id="academic" className="dh-section">
      <p className="dh-eyebrow">Education & Experience</p>
      <h2 className="dh-section-title">Academic</h2>

      <h3 style={subTitle}>Education</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
        {education.map((item, i) => <Card key={i} item={item} i={i} delay={0} />)}
      </div>

      <hr style={divider} />

      <h3 style={subTitle}>Work Experience</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
        {experience.map((item, i) => <Card key={i} item={item} i={i} delay={0.05} />)}
      </div>
    </section>
  );
}