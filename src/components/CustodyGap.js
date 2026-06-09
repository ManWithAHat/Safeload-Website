import React from 'react';
import { motion } from 'framer-motion';

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3.5 17c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M3 10h14M13 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CustodyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L4 4.5V9.5C4 13 6.5 15.8 10 17c3.5-1.2 6-4 6-7.5V4.5L10 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.5l2 2 3-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    Icon: PersonIcon,
    title: 'Identity Trust',
    subtitle: 'Can I trust this carrier or driver?',
    note: 'Established before dispatch',
    highlighted: false,
  },
  {
    Icon: RouteIcon,
    title: 'Movement Trust',
    subtitle: 'Where is the shipment and what is it doing?',
    note: 'Monitored during transit',
    highlighted: false,
  },
  {
    Icon: CustodyIcon,
    title: 'Custody Proof',
    subtitle: 'Who physically took the load and did the shipper authorize release?',
    note: 'No clear industry standard — SafeLoad layer',
    highlighted: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function CustodyGap() {
  return (
    <section className="custody-gap">
      <div className="container">

        {/* Header */}
        <motion.div
          className="custody-gap-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">The custody verification gap</h2>
          <p className="section-subtext">
            The freight industry has identity systems and tracking systems. But custody
            verification — proof of who physically took the load and whether the shipper
            authorized release — has no clear industry standard.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="gap-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map(({ Icon, title, subtitle, note, highlighted }) => (
            <motion.div
              key={title}
              className={`gap-card${highlighted ? ' highlighted' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="gap-card-icon">
                <Icon />
              </div>
              <div className="gap-card-title">{title}</div>
              <div className="gap-card-subtitle">{subtitle}</div>
              <div className="gap-card-note">{note}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          className="gap-banner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Most platforms establish trust before dispatch or during transit.{' '}
          SafeLoad establishes trust at{' '}
          <span className="accent" style={{ fontWeight: 600 }}>
            the moment a shipment changes hands.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
