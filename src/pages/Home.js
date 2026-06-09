import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Shared animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const child   = {
  hidden: { opacity: 0, y: 20 },
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

const pillars = [
  { Icon: IdIcon,         title: 'Identity Trust',       sub: 'ID + selfie + device binding' },
  { Icon: RouteIcon,      title: 'Movement Trust',       sub: 'Route behavior + dwell analysis' },
  { Icon: ShieldCheckIcon,title: 'Custody Proof Trust',  sub: 'QR/OTP release + trailer verification' },
  { Icon: DollarIcon,     title: 'Payment Trust',        sub: 'Release funds after verified execution' },
];

const stats = [
  { value: '$500M+', label: 'Lost annually from double brokering and fake pickups' },
  { value: '2x',     label: 'Fraud cases doubled year over year' },
  { value: '1–3%',   label: 'Of broker invoices disputed or unpaid each year' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="hero-glow-left" />
        <div className="container">
          <motion.h1
            className="home-hero-title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          >
            The moment a load<br />changes hands —{' '}
            <span className="accent">verified.</span>
          </motion.h1>
          <motion.p
            className="home-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Real-time custody verification for freight.
          </motion.p>
          <motion.div
            className="home-hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/about" className="btn-primary">Learn More →</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/join" className="btn-ghost">Join Pilot Program</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section className="home-pillars">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">A new trust layer for freight execution</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Four connected pillars of verified custody
            </p>
          </motion.div>

          <motion.div
            className="pillars-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {pillars.map(({ Icon, title, sub }) => (
              <motion.div
                key={title}
                className="pillar-card"
                variants={child}
                whileHover={{ y: -4, borderColor: 'rgba(0,229,159,0.28)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div className="gap-card-icon"><Icon /></div>
                <div className="pillar-title">{title}</div>
                <div className="pillar-sub">{sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="section-center" {...fadeUp(0.1)}>
            <Link to="/solution" className="explore-link">
              Explore our complete solution →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Fraud Crisis ── */}
      <section className="home-fraud">
        <div className="container">
          <motion.div className="section-center" {...fadeUp()}>
            <h2 className="section-heading">The freight fraud crisis is real</h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              And it's getting worse every year
            </p>
          </motion.div>

          <motion.div
            className="stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stats.map(({ value, label }) => (
              <motion.div key={value} className="stat-card" variants={child}>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Pilot Partners CTA ── */}
      <section className="home-pilot">
        <div className="container">
          <motion.div className="home-pilot-inner" {...fadeUp()}>
            <h2 className="section-heading">Now onboarding pilot partners</h2>
            <p className="section-subtext" style={{ margin: '0 auto 32px' }}>
              SafeLoad is preparing pilots with select{' '}
              <span className="accent">brokers</span> on high-value freight lanes. We're{' '}
              <span className="accent">looking</span> to secure the most at-risk shipments
              with minimal operational friction.
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
