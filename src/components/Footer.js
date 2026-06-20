import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ marginBottom: 12, display: 'inline-flex' }}>
              <img src="/safeload-lockup-reversed.svg" alt="SafeLoad AI" className="logo-img" />
            </Link>
            <p className="footer-tagline">Real-time custody verification for freight</p>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/solution">Our Solution</Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="footer-col-title">Product</div>
            <div className="footer-links">
              <Link to="/solution">Trust Pillars</Link>
              <Link to="/solution">Features</Link>
            </div>
          </div>

          {/* Get Started */}
          <div>
            <div className="footer-col-title">Get Started</div>
            <div className="footer-links">
              <Link to="/join">Join Pilot Program</Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SafeLoad AI. All rights reserved.</span>
          <span style={{ color: 'var(--text-muted)' }}>Building the missing layer in freight security.</span>
        </div>
      </div>
    </footer>
  );
}
