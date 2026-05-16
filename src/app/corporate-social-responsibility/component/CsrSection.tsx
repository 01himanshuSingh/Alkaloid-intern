"use client";

import Container from "@/components/shared/Container";
import { useEffect, useRef } from "react";

// ─── Styles ───────────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  :root {
    --apl-cream:  #faf8f5;
    --apl-lav:    #ede9f8;
    --apl-blue:   #e8eff9;
    --apl-blush:  #f5eff8;
    --apl-gold:   #b89a6a;
    --apl-ink:    #1c1c2e;
    --apl-slate:  #4a4a6a;
    --apl-muted:  #7a7a9a;
  }

  @keyframes floatY {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-14px); }
  }
  @keyframes glowPulse {
    0%,100% { opacity: .45; transform: scale(1); }
    50%      { opacity: .70; transform: scale(1.06); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes lineGrow  { from { width: 0; } to { width: 48px; } }
  @keyframes lineGrowFull { from { width: 0; } to { width: 100%; } }
  @keyframes meshDrift {
    0%   { background-position: 0%   50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0%   50%; }
  }
  @keyframes ringRotate    { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes ringRotateCCW { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }

  /* ── section shell ── */
  .apl-section {
    font-family: 'Geologica', sans-serif;
    background: #ffffff;
    position: relative;
    overflow: hidden;
    padding: 7rem 0;
  }

  /* animated mesh bg */
  .apl-mesh {
   display: none;
  }

  /* grain noise */
  .apl-noise {
   display: none;
  }

  /* grid */
  .apl-inner {
    position: relative; z-index: 2;
    max-width: 1600px;
     margin: 0 auto; padding: 0 2.5rem;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 5rem;
  }

  /* ── LEFT ── */
  .apl-left { display: flex; flex-direction: column; gap: 1.8rem; }

  .apl-eyebrow {
    display: flex; align-items: center; gap: .75rem;
    opacity: 0;
    animation: slideRight .7s cubic-bezier(.22,1,.36,1) .2s forwards;
  }
  .apl-eyebrow-line {
    height: 1.5px;
    background: linear-gradient(90deg, var(--apl-gold), transparent);
    width: 0;
    animation: lineGrow .6s cubic-bezier(.22,1,.36,1) .5s forwards;
  }
  .apl-eyebrow-text {
    font-size: .7rem; font-weight: 500;
    letter-spacing: .22em; text-transform: uppercase;
    color: var(--apl-gold);
  }

  .apl-heading {
    font-family: 'Geologica', sans-serif;
    font-size: clamp(2.6rem, 4.5vw, 3.6rem);
    font-weight: 600; line-height: 1.08;
    color: #0B67B2;
    letter-spacing: -.02em;
   opacity: 0;
     animation: fadeUp .8s cubic-bezier(.22,1,.36,1) .35s forwards;
  }
  .apl-heading span {
    background: linear-gradient(135deg, var(--apl-ink) 40%, #6b5bab 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .apl-divider {
    height: 2px; width: 0; border-radius: 99px;
    background: linear-gradient(90deg, var(--apl-gold) 0%, #c9a0dc 60%, transparent 100%);
    animation: lineGrow .7s cubic-bezier(.22,1,.36,1) .6s forwards;
  }

  .apl-body {
  font-family: 'Libre_Baskerville', serif;
   
    color: var(--apl-slate); font-weight: 300;
    max-width: 520px; letter-spacing: .01em;
    opacity: 0;
    animation: fadeUp .8s cubic-bezier(.22,1,.36,1) .5s forwards;
  }

  /* focus-area pills */
  .apl-tags {
    display: flex; flex-wrap: wrap; gap: .6rem;
    opacity: 0;
    animation: fadeUp .8s cubic-bezier(.22,1,.36,1) .65s forwards;
  }
  .apl-tag {
    padding: .35rem 1rem; border-radius: 99px;
    font-size: .72rem; font-weight: 500;
    letter-spacing: .06em; text-transform: uppercase;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(180,160,220,.25);
    transition: all .3s ease; cursor: default;
  }
  .apl-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    border-color: rgba(180,160,220,.5);
  }
  .tag-edu { background: rgba(237,233,248,.7); color: #6b5bab; }
  .tag-hlt { background: rgba(232,239,249,.7); color: #3b6cb0; }
  .tag-wmn { background: rgba(245,239,248,.7); color: #9b5e9e; }
  .tag-san { background: rgba(232,248,240,.7); color: #2d8a5e; }
  .tag-anm { background: rgba(254,243,226,.7); color: #a0723a; }

  /* CTA */
  .apl-cta {
    display: inline-flex; align-items: center; gap: .55rem;
    font-weight: 500;
    letter-spacing: .08em; text-transform: uppercase;
    color: #0B67B2;  text-decoration: none;
    opacity: 0;
    animation: fadeUp .8s cubic-bezier(.22,1,.36,1) .8s forwards;
    transition: gap .3s ease; width: fit-content;
  }
  .apl-cta:hover { gap: .9rem; }
  .apl-cta svg  { transition: transform .3s ease; }
  .apl-cta:hover svg { transform: translateX(4px); }

  /* ── RIGHT ── */
  .apl-right {
    display: flex; justify-content: center; align-items: center;
    opacity: 0;
    animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .4s forwards;
  }

 .apl-img-wrap {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 5;
}

  /* glow auras */
  .apl-glow-outer,
.apl-glow-mid {
  display: none;
}

  /* deco rings */
 .apl-ring-1,
.apl-ring-2 {
  display: none;
}

  /* circle */
  .apl-circle {
      position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 24px;
    overflow: hidden;
    box-shadow:
     0 4px 20px rgba(0,0,0,0.06);
      0 24px 64px rgba(59,108,176,.10),
      0 2px  8px  rgba(0,0,0,.04),
      inset 0 0 0 2px rgba(255,255,255,.65);
    background: linear-gradient(145deg,#ede9f8,#e8eff9);
  }
  .apl-circle img {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: saturate(.6) brightness(1.05) contrast(1.02);
    mix-blend-mode: multiply;
    display: block;
  }
  /* placeholder when no imageSrc */
  .apl-placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(145deg,
      rgba(237,233,248,1) 0%, rgba(232,239,249,1) 40%,
      rgba(245,239,248,1) 70%, rgba(255,250,245,1) 100%);
    display: flex; align-items: center;
    justify-content: center; flex-direction: column; gap: 1rem;
  }
  .apl-placeholder svg  { opacity: .22; }
  .apl-placeholder p {
    font-size: .7rem; letter-spacing: .14em;
    text-transform: uppercase; color: var(--apl-muted); font-weight: 500;
  }

  /* shine overlay */
  .apl-shine {
    position: absolute; inset: 0; z-index: 3; border-radius: 50%;
    background: linear-gradient(145deg, rgba(255,255,255,.28) 0%, transparent 50%, rgba(180,160,220,.08) 100%);
    pointer-events: none;
  }

  /* stat chips */
  .apl-stat {
    position: absolute; z-index: 4;
    background: rgba(255,255,255,.82);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 14px; padding: .6rem 1rem;
    box-shadow: 0 8px 24px rgba(107,91,171,.10);
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .apl-stat:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 14px 32px rgba(107,91,171,.16);
  }
  .apl-stat-num {
    font-family: Geologica, sans-serif;
    font-size: 1.35rem; font-weight: 700; color: var(--apl-ink); line-height: 1;
  }
  .apl-stat-lbl {
    font-size: .62rem; font-weight: 500;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--apl-muted); margin-top: .2rem;
  }
  .stat-a { top: 12%;    right: -6%; }
  .stat-b { bottom: 16%; left:  -6%; }

  /* ── responsive ── */
  @media (max-width: 900px) {
    .apl-inner {
      grid-template-columns: 1fr;
      gap: 3.5rem; padding: 0 1.5rem;
    }
    .apl-right { order: 2; }
    .apl-left  { order: 1; }
    .apl-img-wrap { width: min(320px, 75vw); }
    .stat-a { right: 0; }
    .stat-b { left:  0; }
  }
  @media (max-width: 480px) {
    .apl-section { padding: 4.5rem 0; }
    .apl-heading { font-size: 2.2rem; }
    .apl-body    { font-size: .97rem; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function CSRSection({ imageSrc }: { imageSrc?: string }) {
  const sectionRef = useRef(null);

  const tags = [
    { label: "Education",           cls: "tag-edu" },
    { label: "Healthcare",          cls: "tag-hlt" },
    { label: "Women's Empowerment", cls: "tag-wmn" },
    { label: "Sanitation",          cls: "tag-san" },
    { label: "Animal Welfare",      cls: "tag-anm" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section ref={sectionRef} className="apl-section" aria-label="CSR Initiatives">
        <Container>

        
        <div className="apl-mesh"  aria-hidden="true" />
        <div className="apl-noise" aria-hidden="true" />

        <div className="apl-inner">

          {/* ── LEFT COLUMN ── */}
          <div className="apl-left">

            {/* eyebrow */}


            {/* heading */}
            <h2 className="apl-heading" style={{ color: "#0B67B2" }}> 
             CSR Initiatives
            </h2>

            {/* accent line */}
         

            {/* body copy */}
            <p className="apl-body line-height-[1.9] text-15px lg:text-[17px] 2xl:text-[20px]">
              At APL, we see CSR as a mission to uplift underprivileged communities.
              Spanning Education, Healthcare, Women&rsquo;s Empowerment, Sanitation
              and Animal Welfare, the CSR initiatives at APL are driven by investments
              in infrastructure development and financial aid. By singularly focusing on
              these areas, it is our aim to foster long-term positive change and
              contribute to the betterment of society.
            </p>

            {/* focus-area pills */}
            {/* <div className="apl-tags">
              {tags.map((t) => (
                <span key={t.label} className={`apl-tag ${t.cls}`}>
                  {t.label}
                </span>
              ))}
            </div> */}

            {/* CTA */}
            <a href="#" className="apl-cta text-xs lg:text-sm 2xl:text-base">
              Explore Our Impact
              <svg
                width="16" height="16" viewBox="0 0 16 16"
                fill="none" aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="apl-right">
            <div className="apl-img-wrap">

              {/* glow layers */}
              <div className="apl-glow-outer" aria-hidden="true" />
              <div className="apl-glow-mid"   aria-hidden="true" />

              {/* decorative rings */}
              <div className="apl-ring-1" aria-hidden="true" />
              <div className="apl-ring-2" aria-hidden="true" />

              {/* circular image */}
              <div className="apl-circle">
                {imageSrc ? (
                  <img src={imageSrc} alt="APL CSR community outreach" />
                ) : (
                  <div className="apl-placeholder">
                    <svg
                      width="72" height="72" viewBox="0 0 72 72"
                      fill="none" aria-hidden="true"
                    >
                      <circle
                        cx="36" cy="26" r="14"
                        stroke="#6b5bab" strokeWidth="1.5"
                      />
                      <path
                        d="M8 64c0-15.464 12.536-28 28-28s28 12.536 28 28"
                        stroke="#6b5bab" strokeWidth="1.5" strokeLinecap="round"
                      />
                    </svg>
                   
                  </div>
                )}
                <div className="apl-shine" aria-hidden="true" />
              </div>

              {/* floating stat chips */}
            
              

            </div>
          </div>
        </div>
        </Container>
      </section>
    </>
  );
}