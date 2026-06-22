import { motion } from "framer-motion";

const competitions = [
  {
    emoji: "🚀",
    title: "SIH Pre-Finalist",
    event: "Smart India Hackathon (SIH) 2025",
    where: "Kongu Engineering College",
    desc: "Selected among the Top 16 hardware teams in Inter-College Level, at one of India's largest student innovation competitions.",
  },
  {
    emoji: "🏆",
    title: "2nd Prize – TechnoTalk",
    event: "EKNA'25",
    where: "Anna University Regional Campus, Coimbatore",
    desc: "Awarded 2nd Prize for a technical presentation on embedded systems and IoT applications.",
  },
  {
    emoji: "🌱",
    title: "3rd Prize – Paper Presentation",
    event: "Vivere",
    where: "Kongu Engineering College",
    desc: "Recognised for a paper on the Smart Irrigation System at a national-level engineering symposium.",
  },
];

const roles = [
  {
    emoji: "🤝",
    title: "IEF Coordinator",
    org: "Innovation and Entrepreneurship Forum · EEE Dept",
    where: "KEC · 2025–27",
    desc: "Organising technical events, guest lectures and industry interaction programmes for the EEE department.",
  },
  {
    emoji: "🔧",
    title: "Technical Member",
    org: "EEE Association",
    where: "KEC · 2025–27",
    desc: "Driving workshops, symposiums and hands-on sessions bridging classroom theory with real-world engineering.",
  },
  {
    emoji: "🌐",
    title: "Technical Member",
    org: "Women Development Cell (WDC)",
    where: "KEC · 2025–27",
    desc: "Contributing to skill-building programmes, awareness events and mentorship initiatives for women in engineering.",
  },
];

function AchieveCard({ item, i, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + i * 0.08 }}
      className="dh-card"
    >
      <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{item.emoji}</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, margin: "0 0 0.2rem" }}>
        {item.title}
      </h3>
      <p style={{ fontSize: "0.8rem", color: "var(--rose)", fontWeight: 600, margin: "0 0 0.15rem", letterSpacing: "0.04em" }}>
        {item.event || item.org}
      </p>
      <p style={{ fontSize: "0.72rem", color: "var(--text-dim)", margin: "0 0 0.75rem", letterSpacing: "0.03em" }}>
        {item.where}
      </p>
      <p style={{ color: "var(--text-dim)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.25rem",
};

export default function Achievements() {
  return (
    <section id="achievements" className="dh-section">
      <p className="dh-eyebrow">Recognition & Roles</p>
      <h2 className="dh-section-title">Achievements</h2>

      <h3 style={subTitle}>Competitions & Awards</h3>
      <div style={grid}>
        {competitions.map((item, i) => <AchieveCard key={i} item={item} i={i} delay={0} />)}
      </div>

      <hr style={divider} />

      <h3 style={subTitle}>Positions of Responsibility</h3>
      <div style={grid}>
        {roles.map((item, i) => <AchieveCard key={i} item={item} i={i} delay={0.05} />)}
      </div>
    </section>
  );
}