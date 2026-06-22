import { useState } from "react";
import axios from "axios";

const INITIAL = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("http://localhost:5000/api/messages", form);
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="dh-section">
      <p className="dh-eyebrow">Get in touch</p>
      <h2 className="dh-section-title">Contact</h2>

      <p style={{ color: "var(--text-dim)", marginBottom: "2rem", maxWidth: 480 }}>
        Have a project in mind or just want to connect? Send me a message — I'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="dh-contact__form">
        <input
          className="dh-input"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          disabled={status === "loading"}
        />
        <input
          className="dh-input"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
        />
        <textarea
          className="dh-input"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          required
          disabled={status === "loading"}
          style={{ resize: "vertical" }}
        />

        <button
          type="submit"
          className="dh-btn dh-btn--primary"
          disabled={status === "loading"}
          style={{ alignSelf: "flex-start", border: "none" }}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p style={{ color: "var(--rose)", fontSize: "0.9rem" }}>
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#f87171", fontSize: "0.9rem" }}>
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}