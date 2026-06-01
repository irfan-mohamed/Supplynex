import { FormEvent, useState } from "react";
import { Building2, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const contactEmail = "contact@supplynex.com";
const whatsappMessage = encodeURIComponent("Hi Supplynex, I would like to connect with your team.");

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}` : `https://wa.me/?text=${whatsappMessage}`;

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Supplynex contact request from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span>Contact Us</span>
        <h1>Let’s build stronger FMCG distribution networks.</h1>
        <p>
          Reach the Supplynex team for early access, partnerships, distributor onboarding, or brand expansion conversations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-panel">
          <h2>Talk to us</h2>
          <a href={`mailto:${contactEmail}`} className="contact-method">
            <Mail size={25} />
            <span>
              Email
              <strong>{contactEmail}</strong>
            </span>
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-method">
            <MessageCircle size={25} />
            <span>
              WhatsApp
              <strong>Chat with Supplynex</strong>
            </span>
          </a>
          <div className="contact-method">
            <MapPin size={25} />
            <span>
              Focus Region
              <strong>South India</strong>
            </span>
          </div>
          <div className="contact-method">
            <Building2 size={25} />
            <span>
              For
              <strong>FMCG manufacturers and distributors</strong>
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
          </label>
          <label>
            Company
            <input value={form.company} onChange={(event) => updateField("company", event.target.value)} required />
          </label>
          <label>
            Email
            <input value={form.email} onChange={(event) => updateField("email", event.target.value)} type="email" required />
          </label>
          <label>
            Message
            <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={5} required />
          </label>
          <button type="submit">
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
