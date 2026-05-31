import { FormEvent, useMemo, useState } from "react";
import { X } from "lucide-react";
import { submitLead } from "../services/leadService";

export type LeadType = "Manufacturer" | "Distributor";

type LeadFormModalProps = {
  type: LeadType | null;
  onClose: () => void;
};

type LeadFormState = {
  company: string;
  contact: string;
  designation: string;
  mobile: string;
  email: string;
  category: string;
  region: string;
  pin: string;
  challenge: string;
  discoveryMethod: string;
  earlyAccess: string;
  followUp: string;
};

const initialForm: LeadFormState = {
  company: "",
  contact: "",
  designation: "",
  mobile: "",
  email: "",
  category: "",
  region: "",
  pin: "",
  challenge: "",
  discoveryMethod: "",
  earlyAccess: "Yes",
  followUp: "Yes",
};

export function LeadFormModal({ type, onClose }: LeadFormModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const title = useMemo(() => (type ? `Register as ${type}` : "Early Access"), [type]);

  if (!type) {
    return null;
  }

  const updateField = (field: keyof LeadFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      await submitLead({ type, ...form });
      setStatus("success");
      setMessage("Thanks. Your early access request has been recorded.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit right now.");
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-form-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close form" onClick={onClose}>
          <X size={22} />
        </button>
        <h2 id="lead-form-title">{title}</h2>
        <form className="lead-form" onSubmit={handleSubmit}>
          <label>
            Company
            <input value={form.company} onChange={(event) => updateField("company", event.target.value)} required />
          </label>
          <label>
            Contact Person
            <input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} required />
          </label>
          <label>
            Designation
            <input value={form.designation} onChange={(event) => updateField("designation", event.target.value)} required />
          </label>
          <label>
            Mobile
            <input value={form.mobile} onChange={(event) => updateField("mobile", event.target.value)} inputMode="tel" required />
          </label>
          <label>
            Email
            <input value={form.email} onChange={(event) => updateField("email", event.target.value)} type="email" required />
          </label>
          <label>
            Category
            <input value={form.category} onChange={(event) => updateField("category", event.target.value)} placeholder="Snacks, beverages, personal care..." required />
          </label>
          <label>
            Region
            <input value={form.region} onChange={(event) => updateField("region", event.target.value)} placeholder="Kerala, Tamil Nadu..." required />
          </label>
          <label>
            Location Pin
            <input value={form.pin} onChange={(event) => updateField("pin", event.target.value)} inputMode="numeric" pattern="[0-9]{4,10}" placeholder="679324" required />
          </label>
          <label className="form-span">
            Challenge
            <textarea value={form.challenge} onChange={(event) => updateField("challenge", event.target.value)} rows={3} required />
          </label>
          <label>
            Discovery Method
            <select value={form.discoveryMethod} onChange={(event) => updateField("discoveryMethod", event.target.value)} required>
              <option value="">Select one</option>
              <option>Trade Fair</option>
              <option>Referral</option>
              <option>LinkedIn</option>
              <option>Google Search</option>
              <option>WhatsApp</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Early Access
            <select value={form.earlyAccess} onChange={(event) => updateField("earlyAccess", event.target.value)}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <label>
            Follow-up
            <select value={form.followUp} onChange={(event) => updateField("followUp", event.target.value)}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <button className="form-submit" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
          {message ? <p className={`form-status ${status}`}>{message}</p> : null}
        </form>
      </section>
    </div>
  );
}
