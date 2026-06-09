import React from 'react';
import { motion } from 'framer-motion';

function EyeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5L3.5 5v5c0 4 3 6.5 6.5 7.5 3.5-1 6.5-3.5 6.5-7.5V5L10 2.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10l1.8 1.8 3-3.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M3 14l4.5-5 3.5 3 4.5-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6h4v4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const values = [
  {
    Icon: EyeIcon,
    title: 'Clear Vision',
    desc: 'Make every freight handoff verifiable, transparent, and fraud-resistant',
  },
  {
    Icon: ShieldIcon,
    title: 'Trust First',
    desc: 'Build confidence across every party in the freight network',
  },
  {
    Icon: TrendIcon,
    title: 'Operational Excellence',
    desc: 'Reduce fraud without slowing down operations',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Mission() {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission-grid">

          {/* Left — text */}
          <motion.div
            className="mission-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              The freight industry has built robust systems for identity verification and
              shipment tracking. But there's a critical gap:{' '}
              <span className="accent">
                custody verification at the moment a load changes hands.
              </span>
            </p>
            <p className="mission-text">
              Today, pickup — the very first handoff — still relies on phone calls,
              paperwork, and assumed trust. When custody is unclear, fraud, misrouting, and
              disputes enter the network before a load ever leaves the dock.
            </p>
            <p className="mission-text">
              SafeLoad closes that verification gap with real-time authentication at every
              custody transition, creating a{' '}
              <span className="accent">
                complete chain of trust from pickup through delivery.
              </span>
            </p>
          </motion.div>

          {/* Right — values card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.12 }}
          >
            <motion.div
              className="values-card"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {values.map(({ Icon, title, desc }) => (
                <motion.div key={title} className="value-item" variants={itemVariants}>
                  <div className="value-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="value-title">{title}</div>
                    <div className="value-desc">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
