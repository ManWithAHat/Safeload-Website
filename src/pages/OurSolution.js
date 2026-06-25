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

const pillars = [
  {
    Icon: IdIcon,
    title: 'Identity Trust',
    desc: 'Verify the real driver before a load ever moves — biometric ID confirmation tied to the device.',
  },
  {
    Icon: RouteIcon,
    title: 'Movement Trust',
    desc: 'Confirm the right truck is at the right place at the right time, every step of the route.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Custody Proof',
    desc: 'Cryptographically signed handoffs at pickup and delivery — no more he-said-she-said disputes.',
  },
  {
    Icon: DollarIcon,
    title: 'Payment Trust',
    desc: 'Payments release only after verified delivery, automating reconciliation and eliminating chargebacks.',
  },
];

export default function OurSolution() {
  return (
    <>
      {/* Hero */}
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

      {/* Four Pillars */}
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
            {pillars.map(({ Icon, title, desc }) => (
              <motion.div key={title} className="sol-pillar-card" variants={child} whileHover={{ y: -3 }}>
                <div className="gap-card-icon"><Icon /></div>
                <div className="sol-pillar-title">{title}</div>
                <div className="sol-pillar-sub">{desc}</div>
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

      {/* CTA */}
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
