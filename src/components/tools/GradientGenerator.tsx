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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
        {/* Preview Area */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Canvas Preview</span>
           <div 
            className="glass-panel"
            style={{ 
              height: '400px', 
              background: `linear-gradient(${angle}deg, ${colors.join(', ')})`,
              borderRadius: '24px',
              border: '8px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ 
              background: 'rgba(0,0,0,0.3)', 
              backdropFilter: 'blur(10px)', 
              padding: '1rem 2rem', 
              borderRadius: '100px', 
              color: 'white',
              fontWeight: 600,
              fontSize: '1.2rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              Sample Text
            </div>
          </div>
        </div>

        {/* Configuration Area */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <div>
             <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Hexagon size={18} /> Gradient Forge
             </h3>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Angle Control */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Degree Angle</label>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{angle}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="360" 
                    value={angle} 
                    onChange={(e) => setAngle(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
                  />
                </div>

                {/* Color Slots */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Color Palette</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {colors.map((color, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <input 
                          type="color" 
                          value={color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          style={{ 
                            width: '48px', 
                            height: '48px', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'transparent',
                            cursor: 'pointer'
                          }}
                        />
                        {colors.length > 2 && (
                          <button 
                            onClick={() => removeColor(index)}
                            style={{ 
                              position: 'absolute', 
                              top: '-8px', 
                              right: '-8px', 
                              background: '#f87171', 
                              color: 'white', 
                              border: 'none', 
                              borderRadius: '50%', 
                              width: '20px', 
                              height: '20px', 
                              fontSize: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
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
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '12px', 
                        border: '2px dashed rgba(255,255,255,0.1)', 
                        background: 'transparent', 
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
             </div>
           </div>

           <div style={{ marginTop: 'auto' }}>
              <div 
                style={{ 
                  background: 'rgba(0,0,0,0.2)', 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: '1rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  wordBreak: 'break-all'
                }}
              >
                {cssCode}
              </div>
              <button 
                onClick={copyCode}
                style={{ 
                  width: '100%', 
                  background: 'var(--accent-primary)', 
                  color: 'white', 
                  border: 'none', 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Copy size={18} />
                {isCopied ? 'Copied to Clipboard!' : 'Copy CSS Code'}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
