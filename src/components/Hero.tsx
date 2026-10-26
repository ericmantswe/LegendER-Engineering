import React, { useRef, useState, useEffect } from 'react';
import FlyingButton from './FlyingButton';

interface HeroProps {
  onContact: () => void;
  onServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContact, onServices }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showUnmuteHint, setShowUnmuteHint] = useState(false);
  const isAudioActiveRef = useRef(false);
  const cleanupListenersRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 680);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getScrollVolume = (scrollY: number) => {
    const vh = window.innerHeight;
    // Sound is 100% on reload / top of page (scrollY <= 0)
    // Smooth acoustic cosine fade-out to 0 as user scrolls past the hero video
    const fadeStart = 0;
    const fadeEnd = vh * 0.88;

    if (scrollY <= fadeStart) return 1;
    if (scrollY >= fadeEnd) return 0;

    const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    const vol = 0.5 * (1 + Math.cos(progress * Math.PI));
    return Math.max(0, Math.min(1, Math.round(vol * 100) / 100));
  };

  const unlockAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const vol = getScrollVolume(scrollY);
    video.volume = vol;
    video.muted = vol <= 0.01;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (vol > 0.01) {
            video.muted = false;
          }
          isAudioActiveRef.current = true;
          setShowUnmuteHint(false);
          // Audio unlocked and playing!
          if (cleanupListenersRef.current) {
            cleanupListenersRef.current();
            cleanupListenersRef.current = null;
          }
        })
        .catch(() => {
          // Keep waiting for user gesture
        });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateAudioFade = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const vol = getScrollVolume(scrollY);
      video.volume = vol;

      if (vol <= 0.01) {
        video.muted = true;
      } else if (isAudioActiveRef.current) {
        video.muted = false;
      }
    };

    // 1. Attempt unmuted playback immediately on page reload
    video.muted = false;
    video.volume = getScrollVolume(window.scrollY || 0);
    const initialPlay = video.play();

    if (initialPlay !== undefined) {
      initialPlay
        .then(() => {
          // Playback with sound succeeded on reload!
          isAudioActiveRef.current = true;
          setShowUnmuteHint(false);
          updateAudioFade();
        })
        .catch(() => {
          // Browser autoplay policy requires user interaction first:
          // Start video muted so visual playback starts smoothly
          video.muted = true;
          video.play().catch(() => {});
          setShowUnmuteHint(true);

          const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'wheel', 'scroll'];
          const handleInteraction = () => {
            unlockAudio();
          };

          events.forEach(evt => window.addEventListener(evt, handleInteraction, { passive: true }));
          cleanupListenersRef.current = () => {
            events.forEach(evt => window.removeEventListener(evt, handleInteraction));
          };
        });
    }

    window.addEventListener('scroll', updateAudioFade, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateAudioFade);
      if (cleanupListenersRef.current) {
        cleanupListenersRef.current();
      }
    };
  }, []);

  return (
    <div ref={heroRef} id="hero-wrapper">
      {/* ── Pure full-screen video, zero overlaid text ── */}
      <section
        onClick={unlockAudio}
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: 440,
          overflow: 'hidden',
          background: '#000',
          cursor: showUnmuteHint ? 'pointer' : 'default',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
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

        {/* Browser autoplay notification badge if unmuted autoplay was blocked */}
        {showUnmuteHint && (
          <div
            onClick={e => {
              e.stopPropagation();
              unlockAudio();
            }}
            style={{
              position: 'absolute',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 30,
              background: 'rgba(15, 15, 15, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 64, 21, 0.5)',
              borderRadius: 100,
              padding: '10px 22px',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(255, 64, 21, 0.25)',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1.03)';
              e.currentTarget.style.background = 'rgba(25, 25, 25, 0.95)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
              e.currentTarget.style.background = 'rgba(15, 15, 15, 0.85)';
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#FF4015',
                boxShadow: '0 0 8px #FF4015',
                display: 'inline-block',
              }}
            />
            <span>Tap Anywhere For Sound</span>
          </div>
        )}

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
    </div>
  );
};
