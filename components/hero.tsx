import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
        </div>
      </div>
    </section>
  );
}

