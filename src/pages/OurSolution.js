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
function ShieldIcon() {
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
function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
    </svg>
  );
}

const industryErrors = [
  { title: 'No driver identity verification at pickup',     detail: 'Anyone with load info can claim a shipment' },
  { title: 'Phone calls used to confirm custody',           detail: 'Verbal confirmations are unverifiable and easily spoofed' },
  { title: 'Paperwork is easily forged or misread',         detail: 'BOLs and dispatch sheets offer no real protection' },
  { title: 'Dispatch info assumed to be accurate',          detail: 'No cross-check between the driver and the load' },
  { title: 'Double brokering goes undetected',              detail: 'Loads re-brokered without shipper knowledge' },
  { title: 'No geolocation confirmation at handoff',        detail: 'Driver location at pickup is never verified' },
];

const pillars = [
  { Icon: IdIcon,     title: 'Identity Trust',      sub: 'ID + selfie + device binding' },
  { Icon: RouteIcon,  title: 'Movement Trust',      sub: 'Route behavior + dwell analysis' },
  { Icon: ShieldIcon, title: 'Custody Proof Trust', sub: 'QR/OTP release + trailer verification' },
  { Icon: DollarIcon, title: 'Payment Trust',       sub: 'Release funds after verified execution' },
];

const riskTiers = [
  { dot: '#4ade80', label: 'STANDARD VERIFICATION',          title: 'Trusted Shipment',         outcome: 'Fast pickup. Minimal friction.',                          bg: 'rgba(22,101,52,0.25)',   border: 'rgba(74,222,128,0.3)' },
  { dot: '#facc15', label: 'ADDITIONAL VERIFICATION REQUIRED', title: 'Elevated Risk Shipment', outcome: 'Increased confidence before custody transfer.',           bg: 'rgba(113,63,18,0.3)',    border: 'rgba(250,204,21,0.3)' },
  { dot: '#f87171', label: 'SHIPMENT RELEASE BLOCKED',       title: 'High-Risk Shipment',       outcome: 'Unauthorized custody transfer prevented.',               bg: 'rgba(127,29,29,0.3)',    border: 'rgba(248,113,113,0.3)' },
];

const benefits = [
  { Icon: AlertIcon,  title: 'Prevent Fake Pickups & Double Brokering', desc: 'Verify the actual driver before cargo release.' },
  { Icon: RouteIcon,  title: 'Reduce Claims & Disputes',                desc: 'Timestamped proof at every handoff — audit-ready.' },
  { Icon: ShieldIcon, title: 'Increase Operational Trust',              desc: 'Automated verification at every custody transition.' },
  { Icon: DocIcon,    title: 'Industry Shift & Legal Exposure',         desc: 'Court decisions demand a verifiable chain of custody.' },
];


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
            <p className="section-subtext" style={{ maxWidth: 620, marginBottom: 48 }}>
              Pickup — the moment responsibility changes hands — still relies on assumed trust.
            </p>
          </motion.div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 32 }}
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            {industryErrors.map(({ title, detail }) => (
              <motion.div key={title} variants={child} style={{
                background: 'rgba(251, 113, 33, 0.07)',
                border: '1px solid rgba(251, 113, 33, 0.25)',
                borderRadius: 12,
                padding: '18px 20px',
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
              }}>
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(251,113,33,0.15)', border: '1px solid rgba(251,113,33,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: '#fb7121', marginTop: 1,
                }}>✕</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{detail}</div>
                </div>
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
            <p className="section-subtext" style={{ margin: '0 auto' }}>Four connected pillars of verified custody.</p>
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

      {/* ── AI Intelligence Layer ── */}
      <section className="sol-pillars" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeUp()}>
            <p className="section-eyebrow">Dynamic Verification Based on Risk</p>
            <h2 className="section-heading">SafeLoad Intelligence Layer</h2>
            <p className="section-subtext" style={{ maxWidth: 560, marginBottom: 48 }}>
              Verification requirements adjust automatically based on real-world risk signals.
            </p>
          </motion.div>
          <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {riskTiers.map(({ dot, label, title, outcome, bg, border }) => (
              <motion.div key={title} className="sol-pillar-card" variants={child} whileHover={{ y: -3 }}
                style={{ background: bg, borderColor: border }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-muted)' }}>{label}</span>
                </div>
                <div className="sol-pillar-title">{title}</div>
                <div className="sol-pillar-sub" style={{ color: dot, marginTop: 8 }}>{outcome}</div>
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
            <span className="accent">Fraud cases doubled YoY.</span>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="join-cta">
        <div className="container">
          <motion.div className="join-cta-inner" {...fadeUp()}>
            <h2 className="section-heading">Now onboarding pilot partners.</h2>
            <p className="section-subtext" style={{ margin: '0 auto 36px' }}>
              Preparing pilots with select brokers on high-value freight lanes.{' '}
              <span className="accent">Trust the handoff.</span>
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
