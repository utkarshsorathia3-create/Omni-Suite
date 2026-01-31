"use client";

import React, { useState } from 'react';
import { MousePointer2, Layout, Copy, Download, Code } from 'lucide-react';

const SvgPreviewer = () => {
  const [path, setPath] = useState('M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z');
  const [viewBox, setViewBox] = useState('0 0 24 24');
  const [fill, setFill] = useState('#8b5cf6');
  const [stroke, setStroke] = useState('#ffffff');
  const [strokeWidth, setStrokeWidth] = useState(0.5);

  const fullSvg = `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">\n  <path d="${path}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />\n</svg>`;

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Editor Side */}
        <div className="glass-panel">
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={18} className="text-gradient" /> Path Architect
          </h3>
          
          <div className="panel-stack">
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 600 }}>SVG Path Data (d attribute)</label>
              <textarea 
                value={path}
                onChange={(e) => setPath(e.target.value)}
                spellCheck={false}
                style={{ 
                  width: '100%', 
                  height: '140px', 
                  background: 'rgba(0,0,0,0.2)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '12px', 
                  padding: '1rem', 
                  color: 'white', 
                  fontFamily: 'JetBrains Mono, monospace',
                  outline: 'none',
                  resize: 'none',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>ViewBox</label>
                <input 
                  type="text" 
                  value={viewBox}
                  onChange={(e) => setViewBox(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Stroke Width</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
               <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Fill Color</label>
                <input 
                  type="color" 
                  value={fill}
                  onChange={(e) => setFill(e.target.value)}
                  style={{ width: '100%', height: '44px', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Stroke Color</label>
                <input 
                  type="color" 
                  value={stroke}
                  onChange={(e) => setStroke(e.target.value)}
                  style={{ width: '100%', height: '44px', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            className="glass-panel"
            style={{ 
              flex: 1, 
              minHeight: '350px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              padding: '2rem'
            }}
          >
            <div style={{ width: '100%', maxWidth: '280px' }}>
              <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))' }}>
                <path d={path} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
              </svg>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '0' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>SVG Source</span>
               <button 
                 onClick={() => navigator.clipboard.writeText(fullSvg)} 
                 className="menuButton"
                 style={{ width: '32px', height: '32px' }}
               >
                 <Copy size={14} />
               </button>
            </div>
            <div style={{ padding: '1rem' }}>
              <pre style={{ 
                margin: 0, 
                fontSize: '0.75rem', 
                color: 'var(--text-secondary)', 
                fontFamily: 'JetBrains Mono, monospace',
                background: 'rgba(0,0,0,0.2)',
                padding: '1rem',
                borderRadius: '8px',
                overflowX: 'auto',
                lineHeight: '1.5',
                maxHeight: '150px'
              }}>
                {fullSvg}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgPreviewer;
