import { motion } from "framer-motion";

const data = [
  { year: "2024", title: "Started EEE ⚡",      desc: "Began my engineering journey, diving into circuit theory, electronics and the fundamentals of electrical systems." },
  { year: "2025", title: "IoT Development 🔌",   desc: "Built first embedded projects — smart irrigation, sensor networks and IoT prototyping with ESP32 and Arduino." },
  { year: "2025", title: "Hackathons 🚀",         desc: "Competed in Smart India Hackathon, reaching the Top 16 in the hardware track." },
  { year: "2026", title: "Mern Stack Dev 💻",     desc: "Expanded into MERN stack development, building full-stack web applications alongside hardware projects." },
];

export default function Journey() {
  return (
    <section id="journey" className="dh-section">
      <p className="dh-eyebrow">My path</p>
      <h2 className="dh-section-title">Journey</h2>

      <div className="dh-timeline">
        {data.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="dh-timeline__item"
          >
            <div className="dh-timeline__dot" />
            <div className="dh-timeline__year">{d.year}</div>
            <div className="dh-timeline__title">{d.title}</div>
            <div className="dh-timeline__desc">{d.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}