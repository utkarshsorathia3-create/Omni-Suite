"use client";

import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2, Settings, QrCode } from 'lucide-react';

const QrGenerator = () => {
  const [value, setValue] = useState('https://omni-suite.io');
  const [fgColor, setFgColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#8b5cf6');
  const [size, setSize] = useState(256);
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'omni-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Settings */}
        <div className="glass-panel">
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Settings size={18} className="text-gradient" /> Configuration
          </h3>
          
          <div className="panel-stack">
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 600 }}>URL or Text</label>
              <input 
                type="text" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter URL or text..."
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem 1rem', borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.9rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>Background</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '10px' }}>
                  <input 
                    type="color" 
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    style={{ width: '36px', height: '36px', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                  />
                  <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)' }}>{bgColor.toUpperCase()}</span>
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>Foreground</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '10px' }}>
                  <input 
                    type="color" 
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    style={{ width: '36px', height: '36px', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                  />
                  <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)' }}>{fgColor.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>Error Correction</label>
              <select 
                value={level}
                onChange={(e) => setLevel(e.target.value as any)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none', cursor: 'pointer' }}
              >
                <option value="L" style={{ background: '#111' }}>Low (7%)</option>
                <option value="M" style={{ background: '#111' }}>Medium (15%)</option>
                <option value="Q" style={{ background: '#111' }}>Quartile (25%)</option>
                <option value="H" style={{ background: '#111' }}>High (30%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            className="glass-panel"
            style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: bgColor,
              borderRadius: '24px',
              padding: '2rem',
              transition: 'all 0.4s ease',
              minHeight: '320px',
              border: '4px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <div ref={qrRef} style={{ 
              background: fgColor === '#ffffff' ? 'rgba(255,255,255,0.1)' : 'transparent',
              padding: '1.5rem',
              borderRadius: '20px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <QRCodeSVG 
                value={value} 
                size={Math.min(size, 240)} 
                includeMargin={false}
                level={level}
                fgColor={fgColor}
                bgColor="transparent"
                style={{ width: '100%', height: 'auto', maxWidth: '240px' }}
              />
            </div>
          </div>
          
          <button 
            onClick={downloadQR}
            className="btn-primary"
            style={{ 
              width: '100%', 
              padding: '1rem', 
              borderRadius: '12px', 
              fontWeight: 700,
              fontSize: '1rem'
            }}
          >
            <Download size={20} /> Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
