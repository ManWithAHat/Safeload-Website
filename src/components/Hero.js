import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow-left" />
      <div className="hero-glow-right" />

      <div className="container">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          About SafeLoad
        </motion.p>

        <motion.h1
          className="hero-title hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
        >
          Building the missing layer in{' '}
          <span className="accent">freight security</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          SafeLoad fills the gap that identity and visibility tools leave behind
          — <span className="accent">verified custody at every handoff.</span>
        </motion.p>
      </div>
    </section>
  );
}
