import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const child = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ── Icons ── */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="5" y="2" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="10" cy="15" r="1" fill="currentColor"/>
    </svg>
  );
}
function DocIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function DispatchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function IdIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="7" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M11 9h4M11 11.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M7.5 9.5l2 2 3-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function RouteIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M3 10h14M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 6v8M8 8.5c0-1 .9-1.5 2-1.5s2 .5 2 1.5-1 1.5-2 1.5-2 .5-2 1.5.9 1.5 2 1.5 2-.5 2-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2a5 5 0 0 1 5 5c0 3.5-5 11-5 11S5 10.5 5 7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}
function QRIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="11" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="2" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M11 11h3v3h3M14 14v4M11 14h.01M11 17h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="1" y="6" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M13 9h4l2 4v3h-6V9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="15" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
    </svg>
  );
}

/* ── Data ── */
const gaps = [
  { Icon: PhoneIcon, title: 'Phone Calls',            desc: 'Unverified verbal confirmations' },
  { Icon: DocIcon,   title: 'Paperwork',              desc: 'Easily forged or misread documents' },
  { Icon: DispatchIcon, title: 'Dispatch Info',       desc: 'Assumed to be accurate' },
  { Icon: IdIcon,    title: 'Unverified Driver Identity', desc: 'No real-time confirmation' },
];

const pillars = [
  { Icon: IdIcon,      title: 'Identity Trust',       sub: 'ID + selfie + device binding' },
  { Icon: RouteIcon,   title: 'Movement Trust',       sub: 'Route behavior + dwell analysis' },
  { Icon: ShieldIcon,  title: 'Custody Proof Trust',  sub: 'QR/OTP release + trailer verification' },
  { Icon: DollarIcon,  title: 'Payment Trust',        sub: 'Release funds after verified execution' },
];

const pickupSteps = [
  { num: '1', Icon: DocIcon,      title: 'Broker Dispatches Load' },
  { num: '2', Icon: PhoneIcon,    title: 'Driver Receives Shipment in SafeLoad App' },
  { num: '3', Icon: IdIcon,       title: 'Driver Completes ID + Selfie Verification' },
  { num: '4', Icon: LocationIcon, title: 'Device + Geolocation Verification' },
  { num: '5', Icon: TruckIcon,    title: 'Trailer & Seal Confirmation Captured' },
  { num: '6', Icon: QRIcon,       title: 'Shipper Scans QR or Enters OTP to Authorize Release' },
  { num: '7', Icon: CheckIcon,    title: 'Broker Sees Verified Pickup Confirmation' },
];

const deliverySteps = [
  { num: '1', Icon: LocationIcon, title: 'Driver Arrives at Delivery Location' },
  { num: '2', Icon: RouteIcon,    title: 'Device + Geolocation Verification' },
  { num: '3', Icon: IdIcon,       title: 'Driver Completes ID + Selfie Verification' },
  { num: '4', Icon: QRIcon,       title: 'Receiver Scans QR or Enters OTP to Authorize Dropoff' },
  { num: '5', Icon: TruckIcon,    title: 'Trailer & Seal Verification Captured' },
  { num: '6', Icon: CheckIcon,    title: 'POD Captured — Broker Sees Verified Delivery Confirmation' },
];

const riskTiers = [
  {
    dot: '#4ade80',
    label: 'STANDARD VERIFICATION',
    title: 'Trusted Shipment',
    signals: ['Driver with 150+ verified transfers', 'Consistent device history', 'Known carrier', 'Normal pickup window'],
    outcome: 'Fast pickup. Minimal friction.',
    bg: 'rgba(22, 101, 52, 0.25)',
    border: 'rgba(74, 222, 128, 0.3)',
  },
  {
    dot: '#facc15',
    label: 'ADDITIONAL VERIFICATION REQUIRED',
    title: 'Elevated Risk Shipment',
    signals: ['New driver or device', 'High-value commodity', 'After-hours pickup', 'Secondary shipper approval'],
    outcome: 'Increased confidence before custody transfer.',
    bg: 'rgba(113, 63, 18, 0.3)',
    border: 'rgba(250, 204, 21, 0.3)',
  },
  {
    dot: '#f87171',
    label: 'SHIPMENT RELEASE BLOCKED',
    title: 'High-Risk Shipment',
    signals: ['Identity mismatch', 'Device mismatch', 'Geofence failure', 'Multiple OTP failures'],
    outcome: 'Unauthorized custody transfer prevented.',
    bg: 'rgba(127, 29, 29, 0.3)',
    border: 'rgba(248, 113, 113, 0.3)',
  },
];

const benefits = [
  { Icon: AlertIcon,  title: 'Prevent Fake Pickups & Double Brokering', desc: 'Verify the actual driver before cargo release. No more loads leaving docks based on phone calls.' },
  { Icon: RouteIcon,  title: 'Reduce Claims & Disputes',                desc: 'Create timestamped custody proof across the shipment lifecycle. Every handoff is documented and audit-ready.' },
  { Icon: ShieldIcon, title: 'Increase Operational Trust',              desc: 'Automated verification at every custody transition. No more relying on calls and paperwork at the dock.' },
  { Icon: DocIcon,    title: 'Industry Shift & Legal Exposure',         desc: 'Recent court decisions and rising litigation have increased focus on carrier selection and shipment documentation.' },
];

const whyAdoption = [
  'Verification completed in under 60 seconds',
  'Mobile app or secure text-message workflow',
  'No carrier onboarding required',
  'No hardware, scanners, or infrastructure changes',
  'No changes to existing TMS workflows',
  'Works with owner-operators and large fleets',
  'Automated audit trail and custody records',
];

const brokerBenefits = [
  'Fewer pickup verification calls',
  'Less manual investigation work',
  'Faster dispute resolution',
  'Greater confidence on high-value shipments',
];

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5.5 8l2 2 3-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function OurSolution() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="sol-hero">
        <div className="hero-glow-left" />
        <div className="container">
          <motion.p className="section-eyebrow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Our Solution
          </motion.p>
          <motion.h1 className="sol-hero-title"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}>
            The Digital Custody<br />Layer for Freight
          </motion.h1>
          <motion.p className="sol-hero-sub"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}>
            Identity. Location. Release. Delivery. Verified.
          </motion.p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="custody-gap" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div {...fadeUp()}>
            <h2 className="section-heading">Freight has visibility.<br />It still lacks verified custody.</h2>
            <p className="section-subtext" style={{ maxWidth: 680, marginBottom: 48 }}>
              Identity systems verify carriers before dispatch. Tracking systems monitor trucks in transit.
              But pickup — the moment responsibility changes hands — still relies on assumed trust.
            </p>
          </motion.div>
          <motion.div className="gap-cards"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {gaps.map(({ Icon, title, desc }) => (
              <motion.div key={title} className="gap-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="gap-card-title">{title}</div>
                <div className="gap-card-subtitle">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="gap-banner" {...fadeUp(0.1)}>
            Freight fraud and cargo theft continue rising across high-value freight lanes.
          </motion.div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="sol-pillars">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">A new trust layer for freight execution.</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Four connected pillars of verified custody.
            </p>
          </motion.div>
          <motion.div className="sol-pillars-grid"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {pillars.map(({ Icon, title, sub }) => (
              <motion.div key={title} className="sol-pillar-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="sol-pillar-title">{title}</div>
                <div className="sol-pillar-sub accent">{sub}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="gap-banner" {...fadeUp(0.1)}>
            Every pillar works independently — and together,{' '}
            <span className="accent" style={{ fontWeight: 600 }}>they close every gap in the custody chain.</span>
          </motion.div>
        </div>
      </section>

      {/* ── Pickup Flow ── */}
      <section className="sol-steps">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Secure the handoff before the load moves.</h2>
            <p className="section-subtext" style={{ margin: '0 auto 6px' }}>
              Seven verification gates. One trusted custody chain. Zero ambiguity at the dock.
            </p>
            <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>Completed in under 60 seconds</p>
          </motion.div>
          <motion.div className="steps-list"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {pickupSteps.map(({ num, Icon, title }) => (
              <motion.div key={num} className="step-item" variants={child} whileHover={{ x: 5 }}>
                <div className="step-num">{num}</div>
                <div className="step-icon-wrap"><Icon /></div>
                <div className="step-title">{title}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="gap-banner" {...fadeUp(0.1)} style={{ fontSize: 13 }}>
            Verified Driver → Verified Pickup → Custody Confirmed →{' '}
            <span className="accent" style={{ fontWeight: 600 }}>Shipper Authorized Release</span> → Load is Live
          </motion.div>
        </div>
      </section>

      {/* ── Delivery Flow ── */}
      <section className="sol-steps" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Verified Delivery. Verified Completion.</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              The shipment isn't complete until custody is confirmed at delivery.
            </p>
          </motion.div>
          <motion.div className="steps-list"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {deliverySteps.map(({ num, Icon, title }) => (
              <motion.div key={num} className="step-item" variants={child} whileHover={{ x: 5 }}>
                <div className="step-num">{num}</div>
                <div className="step-icon-wrap"><Icon /></div>
                <div className="step-title">{title}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="gap-banner" {...fadeUp(0.1)}>
            <span className="accent" style={{ fontWeight: 600 }}>Pickup Created Trust → Delivery Closes the Loop.</span>
          </motion.div>
        </div>
      </section>

      {/* ── AI Intelligence Layer ── */}
      <section className="sol-pillars">
        <div className="container">
          <motion.div {...fadeUp()}>
            <p className="section-eyebrow">Dynamic Verification Based on Risk</p>
            <h2 className="section-heading">SafeLoad Intelligence Layer</h2>
            <p className="section-subtext" style={{ maxWidth: 620, marginBottom: 48 }}>
              SafeLoad doesn't apply the same controls to every shipment. It dynamically adjusts
              verification requirements based on real-world risk signals.
            </p>
          </motion.div>
          <motion.div className="sol-pillars-grid"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {riskTiers.map(({ dot, label, title, signals, outcome, bg, border }) => (
              <motion.div key={title} className="sol-pillar-card" variants={child} whileHover={{ y: -3 }}
                style={{ background: bg, borderColor: border }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-muted)' }}>{label}</span>
                </div>
                <div className="sol-pillar-title">{title}</div>
                <ul style={{ margin: '10px 0 12px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {signals.map(s => (
                    <li key={s} style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                      <span style={{ color: dot, marginTop: 2 }}>›</span> {s}
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: 13, fontWeight: 600, color: dot }}>{outcome}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Reduce Fraud ── */}
      <section className="sol-reduce">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Reduce fraud without slowing operations.</h2>
          </motion.div>
          <motion.div className="sol-benefits-grid"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {benefits.map(({ Icon, title, desc }) => (
              <motion.div key={title} className="sol-benefit-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="sol-benefit-title">{title}</div>
                <div className="sol-benefit-desc">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="fraud-banner" {...fadeUp(0.1)}>
            <span className="accent">⚠</span>{' '}
            $500M+ lost annually from double brokering and fake pickups.{' '}
            <span className="accent">Fraud cases doubled YoY.</span>{' '}
            Brokers report 1–3% of invoices disputed or unpaid each year.
          </motion.div>
        </div>
      </section>

      {/* ── Designed for Operations ── */}
      <section className="sol-ops">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Designed for Operations.</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Built to fit seamlessly into existing freight workflows.
            </p>
          </motion.div>
          <div className="sol-ops-grid">
            <motion.div {...fadeUp(0)}>
              <h3 className="sol-ops-col-title">Why Adoption Works</h3>
              <ul className="adoption-list">
                {whyAdoption.map(item => (
                  <li key={item}>
                    <span className="adoption-check accent"><CheckCircleIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <h3 className="sol-ops-col-title">Broker Benefits</h3>
              <div className="broker-benefits">
                {brokerBenefits.map(b => (
                  <div key={b} className="broker-benefit-item">{b}</div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div className="gap-banner" {...fadeUp(0.15)} style={{ fontWeight: 600, fontSize: 15 }}>
            <span className="accent">Reduce fraud.</span> Not productivity.
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="join-cta">
        <div className="container">
          <motion.div className="join-cta-inner" {...fadeUp()}>
            <h2 className="section-heading">Now onboarding pilot partners.</h2>
            <p className="section-subtext" style={{ margin: '0 auto 36px' }}>
              SafeLoad is preparing pilots with select brokers on high-value freight lanes.
              We're looking to secure the most at-risk shipments with minimal operational friction.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/join" className="btn-cta">Join the Pilot Program</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
