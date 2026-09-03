import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="next-hero">
      {/* Luxury Pure-CSS Multi-Layer Ambient Background */}
      <div className="hero-ambient-wrap" aria-hidden="true">
        <div className="hero-aurora-glow hero-aurora-primary" />
        <div className="hero-aurora-glow hero-aurora-secondary" />
        <div className="hero-aurora-glow hero-aurora-accent" />
        <div className="hero-grid-architectural" />
        <div className="hero-ambient-rings" />

        {/* Fine-line Architectural Precision Crosshairs */}
        <span className="hero-crosshair crosshair-top-left">+</span>
        <span className="hero-crosshair crosshair-top-right">+</span>
        <span className="hero-crosshair crosshair-mid-left">+</span>
        <span className="hero-crosshair crosshair-mid-right">+</span>
      </div>

      <div className="shell hero-centered">
        <div className="hero-copy">
          {/* Atelier Eyebrow Hallmark */}
          <div className="hero-badge">
            <span className="hero-badge-beacon" aria-hidden="true" />
            <span className="hero-badge-category">Bespoke Digital Atelier</span>
            <span className="hero-badge-sep" aria-hidden="true">/</span>
            <span className="hero-badge-label">Custom Web Design &amp; Development</span>
          </div>

          {/* Luxury Editorial Headline */}
          <h1 className="hero-mega-title">
            Turn More Website Visitors Into{" "}
            <span className="hero-editorial-accent">Real Paying Customers</span>
          </h1>

          {/* Elevated Subtitle */}
          <p className="hero-lede">
            We craft custom high-performance websites engineered to command authority,
            accelerate trust, and convert high-value visitors into booked inquiries.
          </p>

          {/* Luxury CTA Actions */}
          <div className="hero-actions">
            <Link href="/contact/#project-brief" className="button hero-primary">
              <span>Get My Free Website Quote</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/portfolio" className="button-secondary hero-secondary">
              <span>View Selected Work</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          {/* Reassurance Guarantee Line */}
          <div className="hero-note">
            <span className="hero-note-dot" aria-hidden="true" />
            <span>Bespoke Architecture</span>
            <span className="hero-note-sep" aria-hidden="true">·</span>
            <span>Zero Templates</span>
            <span className="hero-note-sep" aria-hidden="true">·</span>
            <span>Built Around Your Business</span>
          </div>

          {/* Floating Studio Showcase Frame */}
          <div className="hero-showcase">
            <div className="hero-showcase-frame">
              <div className="hero-showcase-bar">
                <div className="hero-showcase-controls">
                  <span className="control-dot red" />
                  <span className="control-dot yellow" />
                  <span className="control-dot green" />
                </div>
                <div className="hero-showcase-url">
                  <Lock size={12} className="url-lock-icon" aria-hidden="true" />
                  <span>sundirect.ca — Solar Energy Platform</span>
                </div>
                <span className="hero-showcase-badge">Featured Build</span>
              </div>
              <a
                href="https://sundirect.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-showcase-media"
                aria-label="View Sun Direct Renewable live website in new tab"
              >
                <Image
                  src="/portfolio/sun-direct-ca.webp"
                  alt="Sun Direct Renewable custom conversion platform engineered by VantexWeb"
                  width={1120}
                  height={620}
                  priority
                  className="hero-showcase-img"
                  sizes="(min-width: 1240px) 1120px, (min-width: 768px) 90vw, 95vw"
                />
                <div className="hero-showcase-hover-pill">
                  <span>Explore Live Client Build</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </a>
            </div>

            {/* Floating Luxury Metric Accents */}
            <div className="hero-metric-badge metric-badge-left">
              <div className="metric-badge-icon" aria-hidden="true">
                <ShieldCheck size={18} />
              </div>
              <div className="metric-badge-copy">
                <strong>+185%</strong>
                <span>Conversion Lift</span>
              </div>
            </div>

            <div className="hero-metric-badge metric-badge-right">
              <div className="metric-badge-icon" aria-hidden="true">
                <span className="metric-beacon-dot" />
              </div>
              <div className="metric-badge-copy">
                <strong>&lt; 0.8s</strong>
                <span>Production Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
