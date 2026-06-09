import React from 'react';
import { motion } from 'framer-motion';

function FraudIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3v14M5 7H3l2 4-2 4h4l-2-4 2-4zm10 0h2l-2 4 2 4h-4l2-4-2-4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7 9l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const items = [
  {
    Icon: FraudIcon,
    title: 'Rising Fraud Losses',
    desc: 'Over $500M lost annually from double brokering and fake pickups. Fraud cases have doubled year over year, with brokers reporting 1–3% of invoices disputed or unpaid each year.',
  },
  {
    Icon: LegalIcon,
    title: 'Increased Legal Exposure',
    desc: 'Recent court decisions and rising litigation have increased focus on carrier selection, operational oversight, and shipment documentation. Companies need verifiable proof of custody.',
  },
  {
    Icon: TechIcon,
    title: 'Technology Readiness',
    desc: 'Modern mobile devices, biometric verification, and real-time connectivity make it possible to verify custody in under 60 seconds without disrupting operations.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyNow() {
  return (
    <section className="why-now">
      <div className="container">

        <motion.div
          className="why-now-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Why now?</h2>
        </motion.div>

        <motion.div
          className="why-items"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              className="why-item"
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <div className="why-item-icon">
                <Icon />
              </div>
              <div>
                <div className="why-item-title">{title}</div>
                <div className="why-item-desc">{desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
