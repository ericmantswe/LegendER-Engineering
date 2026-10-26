import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
        background: scrolled ? 'rgba(245,244,240,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              textDecoration: 'none',
            }}
          >
            <img
              src="/campany%20logo.png"
              alt="legendER engineering"
              style={{
                height: 36,
                width: 36,
                objectFit: 'contain',
                display: 'block',
                flexShrink: 0,
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.35s ease',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: scrolled ? '#111' : '#fff',
                transition: 'color 0.35s ease',
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
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: scrolled ? '#555' : 'rgba(255,255,255,0.85)',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#111' : '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#555' : 'rgba(255,255,255,0.85)')}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={onContact}
              style={{
                background: scrolled ? '#111' : 'rgba(255,255,255,0.18)',
                border: scrolled ? '1px solid #111' : '1px solid rgba(255,255,255,0.4)',
                backdropFilter: scrolled ? 'none' : 'blur(8px)',
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fff',
                padding: '8px 22px',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = scrolled ? '#333' : 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = scrolled ? '#111' : 'rgba(255,255,255,0.18)';
              }}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-mobile-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 1.5,
                  background: scrolled ? '#111' : '#fff',
                  transition: 'background 0.3s, transform 0.2s',
                }}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: '#f5f4f0',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '16px 32px 24px',
          }}
        >
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                display: 'block',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#444',
                padding: '12px 0',
                width: '100%',
                textAlign: 'left',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { setOpen(false); onContact(); }}
            style={{
              marginTop: 16,
              background: '#111',
              border: 'none',
              borderRadius: 100,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              padding: '12px 24px',
              width: '100%',
            }}
          >
            Let's Talk
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
