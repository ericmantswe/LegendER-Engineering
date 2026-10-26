import React, { useState, useEffect } from 'react';
import { BRAND_DATA } from '../data/engineeringData';

interface ContactProps {
  prefilledService?: string;
}

const SERVICE_OPTIONS = [
  'Industrial Automation',
  'Process Optimisation',
  'Software & Web Applications',
  'Mechanical Design & CAD',
  'Electronics & Embedded',
  'System Integration',
  'Other / Not Sure',
];

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: prefilledService || SERVICE_OPTIONS[0],
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setForm(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required.';
    if (!form.message.trim()) e.message = 'Tell us about your project.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    const messageText = `*Project Enquiry - legendER engineering*
• *Name:* ${form.name.trim()}
• *Email:* ${form.email.trim()}
• *Service Area:* ${form.service}
• *Project Details:* ${form.message.trim()}`;

    const url = `https://wa.me/26772326496?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(url);
    setSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#111',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${
      errors[name] ? '#c0392b' : focused === name ? '#111' : 'rgba(0,0,0,0.2)'
    }`,
    borderRadius: 0,
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#999',
    display: 'block',
    marginBottom: 4,
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-surface-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
          borderBottom: '1px solid var(--color-border-light)',
          paddingTop: 'clamp(56px, 8vw, 88px)',
          paddingBottom: 48,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
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
            Contact
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
            Let's Talk.
          </h2>
        </div>
      </div>

      {/* Two-column */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          paddingBottom: 'clamp(56px, 8vw, 88px)',
        }}
        className="contact-grid"
      >
        {/* Left — contact info */}
        <div
          style={{
            paddingTop: 48,
            paddingRight: 64,
            borderRight: '1px solid var(--color-border-light)',
          }}
          className="contact-left"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: 48,
              maxWidth: 360,
            }}
          >
            Have a project in mind? Describe the problem and we'll get back to you within 24–48 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                label: 'WhatsApp (Direct)',
                value: `${BRAND_DATA.contactPlaceholder.phone} · Chat Now`,
                href: 'https://wa.me/26772326496',
                isWhatsApp: true,
              },
              {
                label: 'Phone / Call',
                value: BRAND_DATA.contactPlaceholder.phone,
                href: `tel:${BRAND_DATA.contactPlaceholder.phone.replace(/\s+/g, '')}`,
              },
              {
                label: 'Email',
                value: BRAND_DATA.contactPlaceholder.email,
                href: `mailto:${BRAND_DATA.contactPlaceholder.email}`,
              },
              {
                label: 'Location',
                value: BRAND_DATA.contactPlaceholder.location,
              },
              {
                label: 'Hours',
                value: BRAND_DATA.contactPlaceholder.workingHours,
              },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  padding: '20px 0',
                  borderTop: i === 0 ? '1px solid var(--color-border-light)' : 'none',
                  borderBottom: '1px solid var(--color-border-light)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: item.isWhatsApp ? '#128C7E' : '#bbb',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {item.isWhatsApp && (
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
                  )}
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: item.isWhatsApp ? '#075E54' : '#111',
                      fontWeight: item.isWhatsApp ? 600 : 400,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
                    onMouseLeave={e => (e.currentTarget.style.color = item.isWhatsApp ? '#075E54' : '#111')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: '#333',
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/26772326496"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 28,
              padding: '14px 22px',
              background: '#25D366',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              borderRadius: 4,
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#20ba5a';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#25D366';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat Directly on WhatsApp
          </a>
        </div>

        {/* Right — form */}
        <div
          style={{
            paddingTop: 48,
            paddingLeft: 64,
          }}
          className="contact-right"
        >
          {sent ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                height: '100%',
                gap: 16,
              }}
            >
              {/* WhatsApp Icon Box */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 6,
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid #25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                  color: '#25D366',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.6rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#111',
                  margin: 0,
                }}
              >
                Connecting to WhatsApp
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#666',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: 420,
                }}
              >
                We've formatted your enquiry and routed it directly to WhatsApp (<strong>{BRAND_DATA.contactPlaceholder.phone}</strong>). If the chat did not open automatically, tap below:
              </p>

              <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl || 'https://wa.me/26772326496'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#25D366',
                    color: '#fff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    padding: '12px 22px',
                    borderRadius: 4,
                  }}
                >
                  Open WhatsApp Chat →
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    color: '#555',
                    padding: '12px 18px',
                    borderRadius: 4,
                  }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={labelStyle}>Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
                {errors.name && (
                  <p style={{ fontFamily: 'var(--font-body)', color: '#c0392b', fontSize: '0.75rem', marginTop: 6 }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" style={labelStyle}>Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
                {errors.email && (
                  <p style={{ fontFamily: 'var(--font-body)', color: '#c0392b', fontSize: '0.75rem', marginTop: 6 }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="contact-service" style={labelStyle}>Service Area</label>
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{
                    ...inputStyle('service'),
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpolyline points='1,1 6,7 11,1' fill='none' stroke='%23999' stroke-width='1.2'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 4px center',
                    paddingRight: 24,
                  }}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                >
                  {SERVICE_OPTIONS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>Project Description</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe the problem you need solved..."
                  style={{
                    ...inputStyle('message'),
                    resize: 'none',
                    paddingTop: 12,
                  }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
                {errors.message && (
                  <p style={{ fontFamily: 'var(--font-body)', color: '#c0392b', fontSize: '0.75rem', marginTop: 6 }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  id="contact-submit"
                  type="submit"
                  style={{
                    background: '#111',
                    border: '1px solid #111',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    padding: '16px 28px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send Enquiry via WhatsApp →
                </button>

                <a
                  href="https://wa.me/26772326496"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '15px 22px',
                    background: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#128C7E',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    borderRadius: 4,
                    letterSpacing: '0.04em',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Direct WhatsApp Chat
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-left { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid var(--color-border-light); padding-top: 24px !important; padding-bottom: 24px !important; }
          .contact-right { padding-left: 0 !important; padding-top: 24px !important; }
          #contact-submit { width: 100% !important; justify-content: center !important; text-align: center !important; }
        }
        #contact input::placeholder,
        #contact textarea::placeholder {
          color: #ccc;
          font-family: var(--font-body);
        }
        #contact select option {
          background: #fff;
          color: #111;
        }
      `}</style>
    </section>
  );
};
