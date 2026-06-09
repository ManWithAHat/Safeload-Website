import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LogoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 8.5v3.8l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ marginBottom: 12, display: 'inline-flex' }}>
              <span className="logo-icon" style={{ color: 'var(--accent)' }}>
                <LogoIcon />
              </span>
              <span style={{ fontWeight: 500 }}>Safe</span>
              <span style={{ fontWeight: 700 }}>Load</span>
              <span className="logo-tag">AI</span>
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
