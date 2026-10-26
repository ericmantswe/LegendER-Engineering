import React, { useRef, useState } from 'react';
import FlyingButton from './FlyingButton';

interface HeroProps {
  onContact: () => void;
  onServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContact, onServices }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      {/* ── Pure full-screen video, zero overlaid text ── */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 500,
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src="/Papers_covering_logo_exploding_o…_20261019173522.mp4" type="video/mp4" />
        </video>

        {/* Subtle bottom fade so the next section blends in */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, #0d0d0d)',
            pointerEvents: 'none',
          }}
        />

        {/* Only UI control: mute toggle, bottom-right */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            zIndex: 2,
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: '#aaa',
            padding: '6px 10px',
          }}
        >
          {muted ? 'SOUND OFF' : 'SOUND ON'}
        </button>
      </section>

      {/* ── Headline + CTAs BELOW the video ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'var(--color-bg)',
          padding: 'clamp(56px, 8vw, 88px) 24px',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 20 }}>
          <p className="label" style={{ marginBottom: 16 }}>
            Engineering Solutions · Botswana
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '0.04em',
              wordSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            We Engineer Solutions.<br />You Grow Your Business.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
              color: '#888',
              maxWidth: 500,
              marginBottom: 36,
              lineHeight: 1.7,
            }}
          >
            Automation, embedded electronics, CAD design, and software — built to cut costs and scale your operations.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 20,
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 35,
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 35,
                width: 'clamp(360px, 92vw, 760px)',
                height: 520,
                marginTop: -476,
                maxWidth: '100%',
              }}
            >
              <FlyingButton
                id="hero-cta-contact"
                theme="dark"
                size="medium"
                align="left"
                alignOffset={0}
                altitude={270}
                hoverTime={2.8}
                jets={2}
                thrusters
                trigger="hover"
                carryCursor
                smoke={1.3}
                turbulence={1.2}
                wobble={1}
                ramp={false}
                radius={4}
                buttonColor="#FF4015"
                textColor="#ffffff"
                thrustColor="#ff9944"
                smokeColor="#787a8c"
                onClick={onContact}
              >
                Discuss Your Project →
              </FlyingButton>
            </div>
            <div style={{ paddingBottom: 6 }}>
              <button
                id="hero-cta-services"
                onClick={onServices}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: '#bbb',
                  height: 44,
                  padding: '0 28px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#bbb';
                }}
              >
                See What We Offer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
