import type { LeadType } from "../components/LeadFormModal";

type LeadPayload = {
  type: LeadType;
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

const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined;

export async function submitLead(payload: LeadPayload) {
  if (!endpoint) {
    throw new Error("Google Sheets endpoint is not configured yet.");
  }

  const body = {
    timestamp: new Date().toISOString(),
    type: payload.type,
    company: payload.company,
    contact: payload.contact,
    designation: payload.designation,
    mobile: payload.mobile,
    email: payload.email,
    category: payload.category,
    region: payload.region,
    pin: payload.pin,
    challenge: payload.challenge,
    discoveryMethod: payload.discoveryMethod,
    earlyAccess: payload.earlyAccess,
    followUp: payload.followUp,
  };

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(body),
  });
}
