import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Irrigation 🌱",
    type: "IoT Project",
    desc: "Automated irrigation system using soil moisture sensors and ESP32, with real-time monitoring via the Blynk dashboard.",
    tech: ["ESP32", "Sensors", "Blynk", "Embedded C"],
  },
  {
    title: "Dog Detection System 🐕",
    type: "Embedded System",
    desc: "Safety detection system using embedded vision and ultrasonic sensors to identify and alert on animal proximity.",
    tech: ["ESP32-CAM", "Sensors", "Embedded C"],
  },
  {
    title: "AquaVolt 💧",
    type: "R&D Project",
    desc: "Research on harvesting electrical energy from atmospheric moisture — exploring piezoelectric and hygroscopic materials.",
    tech: ["Arduino", "ESP32", "Research"],
  },
  {
    title: "EduBridge 🎓",
    type: "Full Stack",
    desc: "Scholarship discovery platform connecting students to funding opportunities with smart filtering and alerts.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Banking App 💳",
    type: "MERN Application",
    desc: "Secure banking simulation with user authentication, transaction history, and real-time balance management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="dh-section">
      <p className="dh-eyebrow">What I've built</p>
      <h2 className="dh-section-title">Projects</h2>

      <div className="dh-projects__grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="dh-card"
          >
            <p className="dh-project__type">{p.type}</p>
            <h3 className="dh-project__title">{p.title}</h3>
            <p className="dh-project__desc">{p.desc}</p>
            <div style={{ marginTop: "1rem" }}>
              {p.tech.map((t) => (
                <span key={t} className="dh-pill">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}