import React, { useState } from 'react';
import { SERVICES } from '../data/engineeringData';

interface ServicesProps {
  onInquire: (service: string) => void;
}

/* Thin-line SVG icons matching FYLLA's geometric style */
const ServiceIcon: React.FC<{ id: string }> = ({ id }) => {
  const s: React.CSSProperties = { display: 'block' };
  switch (id) {
    case 'industrial-automation':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <circle cx="20" cy="20" r="14" stroke="#111" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="7" stroke="#111" strokeWidth="1.2" />
          <line x1="20" y1="6" x2="20" y2="1" stroke="#111" strokeWidth="1.2" />
          <line x1="20" y1="34" x2="20" y2="39" stroke="#111" strokeWidth="1.2" />
          <line x1="6" y1="20" x2="1" y2="20" stroke="#111" strokeWidth="1.2" />
          <line x1="34" y1="20" x2="39" y2="20" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    case 'process-optimisation':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <polyline points="4,30 14,18 22,24 36,8" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="36" y1="8" x2="36" y2="16" stroke="#111" strokeWidth="1.2" />
          <line x1="36" y1="8" x2="28" y2="8" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    case 'software-web-dev':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <rect x="4" y="8" width="32" height="24" rx="1" stroke="#111" strokeWidth="1.2" />
          <polyline points="13,17 9,20 13,23" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
          <polyline points="27,17 31,20 27,23" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="22" y1="15" x2="18" y2="25" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    case 'mechanical-design':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <rect x="4" y="4" width="32" height="32" stroke="#111" strokeWidth="1.2" />
          <line x1="4" y1="12" x2="36" y2="12" stroke="#111" strokeWidth="1.2" />
          <line x1="12" y1="4" x2="12" y2="36" stroke="#111" strokeWidth="1.2" />
          <line x1="20" y1="20" x2="36" y2="36" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    case 'electronics-embedded':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <rect x="12" y="12" width="16" height="16" stroke="#111" strokeWidth="1.2" />
          <line x1="12" y1="16" x2="4" y2="16" stroke="#111" strokeWidth="1.2" />
          <line x1="12" y1="24" x2="4" y2="24" stroke="#111" strokeWidth="1.2" />
          <line x1="28" y1="16" x2="36" y2="16" stroke="#111" strokeWidth="1.2" />
          <line x1="28" y1="24" x2="36" y2="24" stroke="#111" strokeWidth="1.2" />
          <line x1="16" y1="12" x2="16" y2="4" stroke="#111" strokeWidth="1.2" />
          <line x1="24" y1="12" x2="24" y2="4" stroke="#111" strokeWidth="1.2" />
          <line x1="16" y1="28" x2="16" y2="36" stroke="#111" strokeWidth="1.2" />
          <line x1="24" y1="28" x2="24" y2="36" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    case 'system-integration':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <circle cx="10" cy="10" r="5" stroke="#111" strokeWidth="1.2" />
          <circle cx="30" cy="10" r="5" stroke="#111" strokeWidth="1.2" />
          <circle cx="20" cy="30" r="5" stroke="#111" strokeWidth="1.2" />
          <line x1="15" y1="10" x2="25" y2="10" stroke="#111" strokeWidth="1.2" />
          <line x1="13" y1="14" x2="17" y2="25" stroke="#111" strokeWidth="1.2" />
          <line x1="27" y1="14" x2="23" y2="25" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
    default:
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
          <rect x="8" y="8" width="24" height="24" stroke="#111" strokeWidth="1.2" />
        </svg>
      );
  }
};

export const Services: React.FC<ServicesProps> = ({ onInquire }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      style={{
        background: 'var(--color-surface-light)',
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      {/* Section header — spans full width with dividers */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--color-border-light)',
          paddingTop: 'clamp(56px, 8vw, 88px)',
          paddingBottom: 48,
        }}
      >
        <div>
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
            What We Do
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
            }}
          >
            Our Services
          </h2>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: '#777',
            maxWidth: 340,
            lineHeight: 1.65,
            textAlign: 'right',
            paddingBottom: 4,
          }}
          className="services-desc-hide"
        >
          Practical engineering across automation, electronics, software, and mechanical design.
        </p>
      </div>

      {/* Services grid — 2 columns with thin borders */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
        }}
        className="services-grid"
      >
        {SERVICES.map((service, idx) => {
          const isLeft = idx % 2 === 0;
          const isLast2 = idx >= SERVICES.length - 2;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onInquire(service.title)}
              aria-label={`Service: ${service.title}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '48px 40px',
                borderRight: isLeft ? '1px solid var(--color-border-light)' : 'none',
                borderBottom: isLast2 ? 'none' : '1px solid var(--color-border-light)',
                borderTop: idx < 2 ? '1px solid var(--color-border-light)' : 'none',
                background: 'transparent',
                cursor: 'pointer',
                minHeight: 440,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Full-card image overlay — visibility: hidden / opacity: 0 by default, reveals on hover */}
              {service.image && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    overflow: 'hidden',
                    visibility: hovered === service.id ? 'visible' : 'hidden',
                    opacity: hovered === service.id ? 1 : 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: hovered === service.id ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              )}

              {/* Text content — visible by default, completely hidden on hover */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  opacity: hovered === service.id ? 0 : 1,
                  visibility: hovered === service.id ? 'hidden' : 'visible',
                  transition: 'opacity 0.3s ease, visibility 0.3s',
                  pointerEvents: hovered === service.id ? 'none' : 'auto',
                }}
              >
                {/* Icon + number row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 28,
                  }}
                >
                  <ServiceIcon id={service.id} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      color: '#bbb',
                      fontWeight: 700,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#111',
                    marginBottom: 12,
                    lineHeight: 1.15,
                  }}
                >
                  {service.title}
                </h3>

                {/* Thin divider */}
                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: '#ccc',
                    marginBottom: 24,
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: '#777',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 28,
                  }}
                >
                  {service.shortDescription}
                </p>

                {/* Capabilities */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  {service.capabilities.slice(0, 3).map(cap => (
                    <li
                      key={cap}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: '#999',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                    >
                      <span style={{ color: '#bbb', flexShrink: 0, marginTop: 1, fontWeight: 700 }}>—</span>
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  id={`service-inquire-${service.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquire(service.title);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid #111',
                    borderRadius: 0,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#111',
                    padding: '10px 20px',
                    alignSelf: 'flex-start',
                  }}
                >
                  Enquire →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 680px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-desc-hide { display: none; }
        }
        @media (hover: none) {
          .service-img-element {
            opacity: 0.95 !important;
            filter: grayscale(0%) !important;
          }
        }
      `}</style>
    </section>
  );
};
