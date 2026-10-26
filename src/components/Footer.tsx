import React from 'react';
import { BRAND_DATA } from '../data/engineeringData';

interface FooterProps {
  onContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContact }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#111',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 0 32px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="/campany%20logo.png"
              alt="legendER engineering"
              style={{
                height: 32,
                width: 32,
                objectFit: 'contain',
                display: 'block',
                flexShrink: 0,
                filter: 'brightness(0) invert(1)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: '#fff',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: 5,
              }}
            >
              <span>legend<span style={{ fontWeight: 800 }}>ER</span></span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 400,
                  opacity: 0.65,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                engineering
              </span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['services', 'about'].map(id => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                {id}
              </button>
            ))}
            <button
              onClick={onContact}
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                padding: '7px 18px',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget;
                btn.style.borderColor = 'rgba(255,255,255,0.7)';
                btn.style.color = '#fff';
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget;
                btn.style.borderColor = 'rgba(255,255,255,0.3)';
                btn.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.08em',
            }}
          >
            © {year} {BRAND_DATA.name}. Botswana.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.06em',
            }}
          >
            Engineering Solutions · Southern Africa
          </p>
        </div>
      </div>
    </footer>
  );
};
