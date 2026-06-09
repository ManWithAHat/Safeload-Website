import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const child   = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ── Icons ── */
function IdIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="7" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M11 9h4M11 11.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
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
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M7.5 9.5l2 2 3-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M3 14l4.5-5 3.5 3 4.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 6h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ScalesIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 3v14M10 3l-5 3 5 3M10 3l5 3-5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 17h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5.5 8l2 2 3-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Data ── */
const pillars = [
  {
    Icon: IdIcon,
    title: 'Identity Trust',
    sub: 'ID + selfie + device binding',
    bullets: [
      'Government-issued ID verification',
      'Live selfie matching with liveness detection',
      'Device fingerprinting and binding',
    ],
  },
  {
    Icon: RouteIcon,
    title: 'Movement Trust',
    sub: 'Route behavior + dwell analysis',
    bullets: [
      'Real-time GPS verification at pickup and delivery',
      'Route deviation detection and alerts',
      'Dwell time analysis for anomaly detection',
    ],
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Custody Proof Trust',
    sub: 'QR/OTP release + trailer verification',
    bullets: [
      'Shipper authorization via QR code or OTP',
      'Trailer number and seal photo capture',
      'Timestamped proof of delivery documentation',
    ],
  },
  {
    Icon: DollarIcon,
    title: 'Payment Trust',
    sub: 'Release funds after verified execution',
    bullets: [
      'Payment triggered by verified delivery completion',
      'Automated reconciliation with custody records',
      'Reduced chargebacks and disputes',
    ],
  },
];

const steps = [
  { num: '1',  Icon: IdIcon,          title: 'Broker Dispatches Load',                        desc: 'Load assignment sent to carrier with shipment details' },
  { num: '2',  Icon: RouteIcon,       title: 'Driver Receives Shipment in SafeLoad App',      desc: 'Driver opens mobile app or secure text-message workflow' },
  { num: '3',  Icon: IdIcon,          title: 'Driver Completes ID + Selfie Verification',     desc: 'Biometric verification with liveness detection' },
  { num: '4',  Icon: AlertIcon,       title: 'Device + Geolocation Verification',             desc: 'Confirms driver is at the correct pickup location' },
  { num: '5',  Icon: ShieldCheckIcon, title: 'Trailer & Seal Confirmation Captured',          desc: 'Photo verification of trailer number and seal integrity' },
  { num: '6',  Icon: TrendIcon,       title: 'Shipper Scans QR or Enters OTP to Authorize Release', desc: 'Final authorization before cargo leaves the dock' },
  { num: '7',  Icon: CheckCircleIcon, title: 'Broker Sees Verified Pickup Confirmation',      desc: 'Real-time notification with complete audit trail' },
];

const benefits = [
  { Icon: AlertIcon,       title: 'Prevent Fake Pickups & Double Brokering',   desc: 'Verify the actual driver before cargo release. No more loads leaving docks based on phone calls.' },
  { Icon: RouteIcon,       title: 'Reduce Claims & Disputes',                  desc: 'Create timestamped proof across the shipment lifecycle. Every handoff is documented and audit-ready.' },
  { Icon: TrendIcon,       title: 'Increase Operational Trust',                desc: 'Automated verification at every custody transition. No more relying on calls and paperwork at the dock.' },
  { Icon: ScalesIcon,      title: 'Industry Shift & Legal Exposure',           desc: 'Recent court decisions and rising litigation have increased focus on carrier selection, operational oversight, and shipment documentation.' },
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

export default function OurSolution() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="sol-hero">
        <div className="hero-glow-left" />
        <div className="container">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Solution
          </motion.p>
          <motion.h1
            className="sol-hero-title"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
          >
            Four pillars. One trusted<br />custody chain.
          </motion.h1>
          <motion.p
            className="sol-hero-sub"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            Complete verification from pickup through delivery — without slowing operations.
          </motion.p>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="sol-pillars">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">A new trust layer for freight execution</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Four connected pillars of verified custody
            </p>
          </motion.div>

          <motion.div
            className="sol-pillars-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {pillars.map(({ Icon, title, sub, bullets }) => (
              <motion.div key={title} className="sol-pillar-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="sol-pillar-title">{title}</div>
                <div className="sol-pillar-sub accent">{sub}</div>
                <ul className="sol-pillar-bullets">
                  {bullets.map(b => (
                    <li key={b}>
                      <span className="bullet-check"><CheckCircleIcon /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="gap-banner" {...fadeUp(0.1)}>
            Every pillar works independently — and together,{' '}
            <span className="accent" style={{ fontWeight: 600 }}>
              they close every gap in the custody chain.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Handoff Steps ── */}
      <section className="sol-steps">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Secure the handoff before the load moves</h2>
            <p className="section-subtext" style={{ margin: '0 auto 6px' }}>
              Seven verification gates. One trusted custody chain. Zero ambiguity at the dock.
            </p>
            <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
              Completed in under 60 seconds
            </p>
          </motion.div>

          <motion.div
            className="steps-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {steps.map(({ num, Icon, title, desc }) => (
              <motion.div key={num} className="step-item" variants={child} whileHover={{ x: 5 }}>
                <div className="step-num">{num}</div>
                <div className="step-icon-wrap"><Icon /></div>
                <div>
                  <div className="step-title">{title}</div>
                  <div className="step-desc">{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="gap-banner" {...fadeUp(0.1)} style={{ fontSize: 13 }}>
            Verified Driver → Verified Pickup → Custody Confirmed →{' '}
            <span className="accent" style={{ fontWeight: 600 }}>Shipper Authorized Release</span>
            {' '}→ Load is Live
          </motion.div>
        </div>
      </section>

      {/* ── Reduce Fraud ── */}
      <section className="sol-reduce">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">Reduce fraud without slowing operations</h2>
          </motion.div>

          <motion.div
            className="sol-benefits-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {benefits.map(({ Icon, title, desc }) => (
              <motion.div key={title} className="sol-benefit-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="sol-benefit-title">{title}</div>
                <div className="sol-benefit-desc">{desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="fraud-banner"
            {...fadeUp(0.1)}
          >
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
            <h2 className="section-heading">Designed for Operations</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Built to fit seamlessly into existing freight workflows
            </p>
          </motion.div>

          <div className="sol-ops-grid">
            {/* Why Adoption Works */}
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

            {/* Broker Benefits */}
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

      {/* ── Final CTA ── */}
      <section className="join-cta">
        <div className="container">
          <motion.div className="join-cta-inner" {...fadeUp()}>
            <h2 className="section-heading">Ready to secure your shipments?</h2>
            <p className="section-subtext" style={{ margin: '0 auto 36px' }}>
              Join select brokers in our pilot program and protect your{' '}
              <span className="accent">high-value freight lanes.</span>
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
