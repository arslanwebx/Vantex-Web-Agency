import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="next-hero">
      {/* Multi-Layer Ambient Background System */}
      <div className="hero-ambient-wrap" aria-hidden="true">
        {/* Diagonal colour wash */}
        <div className="hero-wash-layer" />

        {/* Large aurora glows */}
        <div className="hero-aurora-glow hero-aurora-primary" />
        <div className="hero-aurora-glow hero-aurora-secondary" />
        <div className="hero-aurora-glow hero-aurora-accent" />
        <div className="hero-aurora-glow hero-aurora-fourth" />

        {/* Dot-grid pattern */}
        <div className="hero-dot-grid" />

        {/* Architectural hairline grid */}
        <div className="hero-grid-architectural" />

        {/* Concentric ambient rings */}
        <div className="hero-ambient-rings" />

        {/* Radial vignette fade */}
        <div className="hero-vignette" />

        {/* Bottom gradient bleed into trust bar */}
        <div className="hero-bottom-fade" />

        {/* Precision crosshairs */}
        <span className="hero-crosshair crosshair-top-left">+</span>
        <span className="hero-crosshair crosshair-top-right">+</span>
        <span className="hero-crosshair crosshair-mid-left">+</span>
        <span className="hero-crosshair crosshair-mid-right">+</span>
      </div>

      <div className="shell hero-centered">
        <div className="hero-copy">
          {/* Editorial Headline */}
          <h1 className="hero-mega-title">
            Turn More Website Visitors Into{" "}
            <span className="hero-editorial-accent">Real Paying Customers</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-lede">
            We craft custom high-performance websites engineered to command authority,
            accelerate trust, and convert high-value visitors into booked inquiries.
          </p>

          {/* CTA Actions */}
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
        </div>
      </div>
    </section>
  );
}
