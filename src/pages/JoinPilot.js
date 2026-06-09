import React from 'react';
import { motion } from 'framer-motion';

export default function JoinPilot() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 68 }}>
      <div className="container" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        >
          Pilot Program
        </motion.p>
        <motion.h1
          style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 20 }}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join us in{' '}
          <span className="accent">securing freight</span>
        </motion.h1>
        <motion.p
          className="section-subtext"
          style={{ margin: '0 auto 36px' }}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're onboarding pilot partners who want to protect high-value shipments and
          reduce fraud risk. Pilot sign-up form coming soon.
        </motion.p>
        <motion.button
          className="btn-cta"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        >
          Request Early Access
        </motion.button>
      </div>
    </section>
  );
}
