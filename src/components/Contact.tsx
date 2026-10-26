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
                label: 'Phone',
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
                    color: '#bbb',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: '#111',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#777')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#111')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: '#333' }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
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
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: '1px solid #111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polyline points="4,12 10,18 20,6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                Message Sent
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#777',
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                We'll review your enquiry and get back to you within 24–48 hours.
              </p>
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

              <button
                id="contact-submit"
                type="submit"
                style={{
                  background: '#111',
                  border: '1px solid #111',
                  borderRadius: 0,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  padding: '16px 32px',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Send Enquiry →
              </button>
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
