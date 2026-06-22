import { motion } from "framer-motion";

const stacks = [
  { title: "Hardware ⚡",   items: ["Arduino", "ESP32", "PIC", "Sensors", "Proteus", "Electraical Machines"] },
  { title: "Embedded 🔌",  items: ["Embedded C", "Microcontrollers", "IoT Prototyping", "UART/SPI/I2C", "E-CAD"] },
  { title: "Software 💻",  items: ["C", "React", "Node.js", "Express", "Java", "Python", "MongoDB"] },
  { title: "IoT & Cloud 🌐", items: ["Blynk", "Weather APIs"] },
];

export default function EngineeringStack() {
  return (
    <section id="skills" className="dh-section">
      <p className="dh-eyebrow">What I work with</p>
      <h2 className="dh-section-title">Engineering Stack</h2>

      <div className="dh-skills__grid">
        {stacks.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="dh-card"
          >
            <div className="dh-skills__card-title">{s.title}</div>
            <div>
              {s.items.map((item) => (
                <span key={item} className="dh-pill">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}