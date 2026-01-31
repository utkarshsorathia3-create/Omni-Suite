"use client";

import React, { useState } from 'react';
import { Sliders, Image as ImageIcon, Copy, RefreshCw } from 'lucide-react';

const ImageFilterLab = () => {
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop');
  const [filters, setFilters] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hue: 0,
    invert: 0,
    saturate: 100,
    sepia: 0
  });

  const filterString = `blur(${filters.blur}px) brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) hue-rotate(${filters.hue}deg) invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`;

  const handleReset = () => setFilters({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hue: 0,
    invert: 0,
    saturate: 100,
    sepia: 0
  });

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Preview Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
             <ImageIcon size={18} className="text-gradient" />
             <input 
              type="text" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste image URL here..."
              style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: '0.9rem', outline: 'none' }}
             />
          </div>
          
          <div className="glass-panel" style={{ 
            height: 'auto',
            minHeight: '300px',
            aspectRatio: '4/3',
            borderRadius: '24px', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.4)',
            border: '4px solid rgba(255,255,255,0.03)',
            padding: '1rem'
          }}>
            <img 
              src={imageUrl} 
              alt="Preview" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
                filter: filterString,
                transition: 'filter 0.1s ease',
                borderRadius: '8px'
              }} 
            />
          </div>
        </div>

        {/* Controls Area */}
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
             <h3 className="font-outfit" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Sliders size={18} className="text-gradient" /> Filters</h3>
             <button onClick={handleReset} style={{ background: 'transparent', border: 'none', color: 'var(--accent-secondary)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.25rem' }}><RefreshCw size={14} /> RESET</button>
          </div>

          <div className="panel-stack" style={{ gap: '1rem' }}>
            {Object.entries(filters).map(([key, value]) => (
              <div key={key}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{key}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700 }}>{value}{key === 'blur' ? 'px' : key === 'hue' ? 'deg' : '%'}</span>
                </div>
                <input 
                  type="range" 
                  min={key === 'hue' ? 0 : 0} 
                  max={key === 'hue' ? 360 : key === 'blur' ? 20 : 200} 
                  value={value}
                  onChange={(e) => setFilters({...filters, [key]: parseInt(e.target.value)})}
                  style={{ width: '100%', accentColor: 'var(--accent-primary)', height: '1.5rem', cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', wordBreak: 'break-all', marginBottom: '1rem', lineHeight: '1.4' }}>
              filter: {filterString};
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText(`filter: ${filterString};`)}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <Copy size={16} /> Copy CSS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFilterLab;
