"use client";

import React, { useState } from 'react';
import { Copy, RefreshCw, Plus, Trash2, Hexagon } from 'lucide-react';

const GradientGenerator = () => {
  const [colors, setColors] = useState(['#8b5cf6', '#ec4899']);
  const [angle, setAngle] = useState(135);
  const [isCopied, setIsCopied] = useState(false);

  const cssCode = `background: linear-gradient(${angle}deg, ${colors.join(', ')});`;
  
  const addColor = () => setColors([...colors, '#3b82f6']);
  const removeColor = (index: number) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
    }
  };

  const updateColor = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(cssCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Preview Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Canvas Preview</span>
           <div 
            className="glass-panel"
            style={{ 
              height: 'auto',
              minHeight: '280px',
              aspectRatio: '16/10',
              background: `linear-gradient(${angle}deg, ${colors.join(', ')})`,
              borderRadius: '24px',
              border: '4px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              transition: 'background 0.3s ease'
            }}
          >
            <div style={{ 
              background: 'rgba(0,0,0,0.4)', 
              backdropFilter: 'blur(12px)', 
              WebkitBackdropFilter: 'blur(12px)',
              padding: '0.75rem 1.5rem', 
              borderRadius: '100px', 
              color: 'white',
              fontWeight: 700,
              fontSize: 'min(1.1rem, 4vw)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              Interactive Preview
            </div>
          </div>
        </div>

        {/* Configuration Area */}
        <div className="glass-panel">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <h3 className="font-outfit" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RefreshCw size={18} className="text-gradient" /> Gradient Forge
             </h3>
             
             <div className="panel-stack" style={{ gap: '1.5rem' }}>
                {/* Angle Control */}
                <div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                     <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Rotation</label>
                     <span style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.9rem' }}>{angle}°</span>
                   </div>
                   <input 
                    type="range" 
                    min="0" 
                    max="360" 
                    value={angle} 
                    onChange={(e) => setAngle(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                   />
                </div>

                {/* Color Slots */}
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 700 }}>Color Sequence</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {colors.map((color, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <input 
                          type="color" 
                          value={color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          style={{ 
                            width: '44px', 
                            height: '44px', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'transparent',
                            cursor: 'pointer',
                            padding: '0'
                          }}
                        />
                        {colors.length > 2 && (
                          <button 
                            onClick={() => removeColor(index)}
                            className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white"
                            style={{ 
                              position: 'absolute', 
                              top: '-8px', 
                              right: '-8px', 
                              border: 'none', 
                              borderRadius: '50%', 
                              width: '20px', 
                              height: '20px', 
                              fontSize: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              zIndex: 1,
                              backdropFilter: 'blur(4px)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      onClick={addColor}
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        border: '2px dashed rgba(139, 92, 246, 0.4)', 
                        background: 'rgba(139, 92, 246, 0.05)', 
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
             </div>

             <div style={{ marginTop: '1rem' }}>
                <div 
                  style={{ 
                    background: 'rgba(0,0,0,0.3)', 
                    padding: '1.25rem', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '1rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    wordBreak: 'break-all',
                    lineHeight: '1.5'
                  }}
                >
                  {cssCode}
                </div>
                <button 
                  onClick={copyCode}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem' }}
                >
                  <Copy size={18} />
                  {isCopied ? 'Copied to Clipboard!' : 'Copy CSS3 Code'}
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
