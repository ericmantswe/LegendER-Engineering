import React from 'react';
import { FOUNDER_DATA, BRAND_DATA } from '../data/engineeringData';

export const AboutFounder: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        background: 'var(--color-surface-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      {/* Section label bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          borderBottom: '1px solid var(--color-border-light)',
          paddingTop: 'clamp(56px, 8vw, 88px)',
          paddingBottom: 48,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: 16,
          }}
        >
          About
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#111',
            margin: 0,
            maxWidth: 700,
          }}
        >
          Engineering for Business.
        </h2>
      </div>

      {/* Two-column content */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderBottom: '1px solid var(--color-border-light)',
        }}
        className="about-grid"
      >
        {/* Left — company description */}
        <div
          style={{
            padding: '48px 0',
            paddingRight: 48,
            borderRight: '1px solid var(--color-border-light)',
          }}
          className="about-left"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#444',
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            {BRAND_DATA.name} delivers practical automation, embedded electronics, mechanical design, and operational software — built to solve real problems and create measurable business value.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#777',
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Based in Botswana. Serving businesses across Southern Africa.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: 0,
              borderTop: '1px solid var(--color-border-light)',
            }}
          >
            {[
              { num: '6+', label: 'Service Areas' },
              { num: '100%', label: 'Client Focused' },
              { num: 'BWA', label: 'Headquarters' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: '28px 0',
                  paddingRight: 24,
                  borderRight: i < 2 ? '1px solid var(--color-border-light)' : 'none',
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.8rem',
                    color: '#111',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#999',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — founder */}
        <div
          style={{
            padding: '48px 0',
            paddingLeft: 48,
          }}
          className="about-right"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: 20,
            }}
          >
            Founder
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#111',
              lineHeight: 1.1,
              marginBottom: 4,
            }}
          >
            {FOUNDER_DATA.name}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: '#999',
              textTransform: 'uppercase',
              marginBottom: 28,
              borderBottom: '1px solid var(--color-border-light)',
              paddingBottom: 28,
            }}
          >
            {FOUNDER_DATA.title}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            {FOUNDER_DATA.bio}
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: '2px solid #111',
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#333',
                lineHeight: 1.65,
                quotes: 'none',
              }}
            >
              "{FOUNDER_DATA.quote}"
            </p>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-left { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid var(--color-border-light); }
          .about-right { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
};
