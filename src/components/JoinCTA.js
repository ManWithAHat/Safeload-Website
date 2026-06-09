import React from 'react';
import { motion } from 'framer-motion';

export default function JoinCTA() {
  return (
    <section className="join-cta">
      <div className="container">
        <motion.div
          className="join-cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="section-heading">Join us in securing freight</h2>
          <p className="section-subtext">
            We're onboarding pilot partners who want to protect high-value shipments and
            reduce fraud risk.
          </p>
          <motion.button
            className="btn-cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Join the Pilot Program
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
