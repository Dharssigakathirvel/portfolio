import { motion } from "framer-motion";

const data = [
  {
    title: "CGPA 9.32 🎓",
    where: "B.E. EEE · Kongu Engineering College · 2024–2028",
    desc: "Maintaining a CGPA of 9.32 in B.E. Electrical & Electronics Engineering as the top 5% performers in the department.",
  },
  // {
  //   title: "Inplant Training 🏭",
  //   where: "Coral Manufacturing Works · Dec 2025",
  //   desc: "Hands-on industrial training covering stator and motor rewinding for windmill generators, electrical machine maintenance and assembly workflows in a live manufacturing environment.",
  // },
  {
    title: "SIH Pre-Finalist 🚀",
    where: "Smart India Hackathon 2025, KEC",
    desc: "Selected among the Top 16 hardware teams in Inter-College Level, at Smart India Hackathon 2025 — one of India's largest student innovation competitions.",
  },
  {
    title: "2nd Prize – TechnoTalk 🏆",
    where: "EKNA'25, Anna University Regional Campus, Coimbatore",
    desc: "Awarded 2nd Prize at TechnoTalk for a technical presentation on embedded systems and IoT applications.",
  },
  {
    title: "3rd Prize – Paper Presentation 🌱",
    where: "Vivere, Kongu Engineering College",
    desc: "Recognised for a paper on the Smart Irrigation System — presenting IoT-based precision agriculture to a national-level audience.",
  },
  {
    title: "IEF Coordinator 🤝",
    where: "Institution of Engineers Forum, EEE Dept · KEC · 2025–27",
    desc: "Coordinating IEF activities for the EEE department — organising technical events, guest lectures and industry interaction programmes for student members.",
  },
  {
    title: "Technical Member – EEE Association 🔧",
    where: "EEE Association · KEC · 2025–27",
    desc: "Active technical member driving workshops, symposiums and hands-on sessions that bridge classroom theory with real-world engineering practice.",
  },
  {
    title: "Technical Member – WDC 🌐",
    where: "Women Development Cell · KEC · 2025–27",
    desc: "Contributing to WDC initiatives that empower women in engineering through skill-building programmes, awareness events and mentorship activities.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="dh-section">
      <p className="dh-eyebrow">Recognition</p>
      <h2 className="dh-section-title">Academic Achievements and Positions of Responsibilities</h2>

      <div className="dh-achieve__grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {data.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="dh-card"
          >
            <h3 className="dh-achieve__title">{a.title}</h3>
            <p style={{ fontSize: "0.75rem", color: "var(--rose)", fontWeight: 600, letterSpacing: "0.05em", margin: "0.3rem 0 0.6rem" }}>
              {a.where}
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", lineHeight: 1.65 }}>{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}