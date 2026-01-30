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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Controls */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} /> Color Analyzer
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Foreground</label>
                  <input 
                    type="color" 
                    value={fg} 
                    onChange={(e) => setFg(e.target.value)}
                    style={{ width: '100px', height: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', borderRadius: '8px' }}
                  />
                  <div style={{ marginTop: '0.5rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>{fg.toUpperCase()}</div>
               </div>
               <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
               <div style={{ textAlign: 'right' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Background</label>
                  <input 
                    type="color" 
                    value={bg} 
                    onChange={(e) => setBg(e.target.value)}
                    style={{ width: '100px', height: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', borderRadius: '8px' }}
                  />
                  <div style={{ marginTop: '0.5rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>{bg.toUpperCase()}</div>
               </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Contrast Ratio</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'white', fontFamily: 'Outfit' }}>{ratio.toFixed(2)} : 1</div>
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
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'inherit' }}>Live Preview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'inherit', opacity: 0.9 }}>
              This is a live preview of how your colors interact. Accessible design is inclusive design.
              Ensure that your text remains readable for everyone.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: getStatus(4.5) ? 'rgba(74, 222, 128, 0.05)' : 'rgba(248, 113, 113, 0.05)' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>WCAG AA (4.5:1)</span>
              {getStatus(4.5) ? <ShieldCheck size={20} color="#4ade80" /> : <ShieldAlert size={20} color="#f87171" />}
            </div>
            <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: getStatus(7) ? 'rgba(74, 222, 128, 0.05)' : 'rgba(248, 113, 113, 0.05)' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>WCAG AAA (7:1)</span>
              {getStatus(7) ? <ShieldCheck size={20} color="#4ade80" /> : <ShieldAlert size={20} color="#f87171" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastChecker;
