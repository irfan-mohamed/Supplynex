import { ArrowRight, Factory, Rocket, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { LeadFormModal, LeadType } from "../components/LeadFormModal";

export function HomePage() {
  const [selectedLeadType, setSelectedLeadType] = useState<LeadType | null>(null);

  return (
    <>
      <section className="hero-section">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="launch-pill">
          <Rocket size={29} />
          <span>Launching Soon</span>
        </div>

        <h1>
          Expand Distribution
          <span>Faster.</span>
        </h1>

        <div className="hero-copy">
          <p>
            Supplynex is building the future distribution network
            <br />
            for FMCG manufacturers and distributors.
            <span className="desktop-only-copy">
              <br />
              Discover partners, expand territories, and build
              <br />
              trusted distribution relationships.
            </span>
          </p>
          <p>
            Join our early access program and
            <br />
            help shape the future of FMCG distribution.
          </p>
        </div>

        <div className="cta-row">
          <button className="cta-card manufacturer-card" type="button" onClick={() => setSelectedLeadType("Manufacturer")}>
            <Factory size={60} strokeWidth={1.85} />
            <span>
              Register as
              <strong>Manufacturer</strong>
            </span>
            <ArrowRight size={50} strokeWidth={1.5} />
          </button>
          <button className="cta-card distributor-card" type="button" onClick={() => setSelectedLeadType("Distributor")}>
            <Truck size={58} strokeWidth={1.75} />
            <span>
              Register as
              <strong>Distributor</strong>
            </span>
            <ArrowRight size={50} strokeWidth={1.5} />
          </button>
        </div>

        <div className="validation-note">
          <ShieldCheck size={69} strokeWidth={1.9} />
          <p>
            Currently validating with FMCG manufacturers
            <br />
            and distributors across South India.
          </p>
        </div>
      </section>
      <LeadFormModal type={selectedLeadType} onClose={() => setSelectedLeadType(null)} />
    </>
  );
}
