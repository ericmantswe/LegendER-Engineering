import React, { useRef, useState, useEffect } from 'react';
import FlyingButton from './FlyingButton';

interface HeroProps {
  onContact: () => void;
  onServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContact, onServices }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 680);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          height: '100svh',
          minHeight: 440,
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
          padding: 'clamp(44px, 7vw, 88px) clamp(16px, 4vw, 24px)',
          borderBottom: '1px solid var(--color-border)',
          overflow: 'hidden',
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
              fontSize: 'clamp(2rem, 7vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '0.04em',
              wordSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              maxWidth: 820,
              marginBottom: 20,
            }}
          >
            We Engineer Solutions.<br />You Grow Your Business.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
              color: '#888',
              maxWidth: 520,
              marginBottom: isMobile ? 24 : 36,
              lineHeight: 1.7,
            }}
          >
            Automation, embedded electronics, CAD design, and software — built to cut costs and scale your operations.
          </p>

          <div
            style={{
              display: 'flex',
              gap: isMobile ? 14 : 20,
              alignItems: isMobile ? 'stretch' : 'flex-end',
              flexDirection: isMobile ? 'column' : 'row',
              position: 'relative',
              zIndex: 35,
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 35,
                width: isMobile ? '100%' : 'min(100%, 760px)',
                height: isMobile ? 360 : 520,
                marginTop: isMobile ? -316 : -476,
                maxWidth: '100%',
              }}
            >
              <FlyingButton
                id="hero-cta-contact"
                theme="dark"
                size={isMobile ? 'small' : 'medium'}
                align="left"
                alignOffset={0}
                altitude={isMobile ? 180 : 270}
                hoverTime={isMobile ? 2.4 : 2.8}
                jets={2}
                thrusters
                trigger="hover"
                carryCursor={!isMobile}
                smoke={isMobile ? 1.0 : 1.3}
                turbulence={isMobile ? 1.0 : 1.2}
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
            <div style={{ paddingBottom: isMobile ? 0 : 6, width: isMobile ? '100%' : 'auto' }}>
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
                  justifyContent: 'center',
                  width: isMobile ? '100%' : 'auto',
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
