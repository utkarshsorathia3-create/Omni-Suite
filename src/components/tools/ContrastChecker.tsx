"use client";

import React, { useState } from 'react';
import { Eye, ShieldCheck, ShieldAlert, Sparkles } from 'lucide-react';

const ContrastChecker = () => {
  const [fg, setFg] = useState('#ffffff');
  const [bg, setBg] = useState('#8b5cf6');

  // Luminance calculation
  const getLuminance = (hex: string) => {
    const rgb = hex.match(/[A-Za-z0-9]{2}/g)!.map(x => parseInt(x, 16) / 255);
    const [r, g, b] = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  const getStatus = (target: number) => ratio >= target;

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Controls */}
        <div className="glass-panel">
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} className="text-gradient" /> Color Analyzer
          </h3>
          
          <div className="panel-stack">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
               <div style={{ flex: 1, textAlign: 'center' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Foreground</label>
                  <input 
                    type="color" 
                    value={fg} 
                    onChange={(e) => setFg(e.target.value)}
                    style={{ width: '100%', maxWidth: '80px', height: '50px', background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none', padding: 0 }}
                  />
                  <div style={{ marginTop: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{fg.toUpperCase()}</div>
               </div>
               <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.05)' }} />
               <div style={{ flex: 1, textAlign: 'center' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Background</label>
                  <input 
                    type="color" 
                    value={bg} 
                    onChange={(e) => setBg(e.target.value)}
                    style={{ width: '100%', maxWidth: '80px', height: '50px', background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none', padding: 0 }}
                  />
                  <div style={{ marginTop: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{bg.toUpperCase()}</div>
               </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>Contrast Ratio</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', fontFamily: 'Outfit' }}>{ratio.toFixed(2)} : 1</div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            className="glass-panel" 
            style={{ 
              padding: '2rem', 
              background: bg, 
              color: fg, 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.05)',
              minHeight: '200px'
            }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'inherit' }}>Live Preview</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'inherit', opacity: 0.9 }}>
              This is a live preview of how your colors interact. Accessible design is inclusive design.
              Ensure that your text remains readable for everyone.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: getStatus(4.5) ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: getStatus(4.5) ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>WCAG AA</span>
              {getStatus(4.5) ? <ShieldCheck size={18} color="#4ade80" /> : <ShieldAlert size={18} color="#f87171" />}
            </div>
            <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: getStatus(7) ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: getStatus(7) ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>WCAG AAA</span>
              {getStatus(7) ? <ShieldCheck size={18} color="#4ade80" /> : <ShieldAlert size={18} color="#f87171" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastChecker;
