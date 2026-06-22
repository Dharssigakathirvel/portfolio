import { motion } from "framer-motion";

const stacks = [
  { title: "Hardware ⚡",   items: ["Arduino", "ESP32", "PIC", "Sensors", "E-CAD", "Ki-CAD", "Electraical Machines"] },
  { title: "Embedded 🔌",  items: ["8051 uC", "PIC uC", "Microcontrollers", "IoT Prototyping", "UART/SPI/I2C", "Proteus"] },
  { title: "Software 💻",  items: ["Embedded C", "C", "React", "Node.js", "Express", "Java", "Python"] },
  { title: "IoT & Cloud 🌐", items: ["Blynk", "Weather APIs", "MongoDB"] },
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