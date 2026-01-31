"use client";

import React, { useState } from 'react';
import { Layers, ArrowRightLeft, Copy, Trash2 } from 'lucide-react';

const Base64Converter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [isCopied, setIsCopied] = useState(false);

  const handleConvert = (val: string) => {
    setInput(val);
    try {
      if (mode === 'encode') {
        setOutput(btoa(val));
      } else {
        setOutput(atob(val));
      }
    } catch (e) {
      setOutput('Invalid input for ' + mode);
    }
  };

  const switchMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInput(output);
    setOutput(input);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(output);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', gap: '1.5rem', flexWrap: 'wrap' }}>
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={22} className="text-gradient" /> Base64 Laboratory
          </h3>
          <button 
            onClick={switchMode}
            className="btn-primary"
            style={{ 
              padding: '0.6rem 1.25rem', fontSize: '0.85rem', width: 'auto'
            }}
          >
            <ArrowRightLeft size={16} /> <span className="hide-mobile">Switch to {mode === 'encode' ? 'Decode' : 'Encode'}</span><span className="show-mobile-inline">Switch</span>
          </button>
        </div>

        <div className="tool-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 700 }}>Raw Input</label>
            <textarea 
              value={input}
              onChange={(e) => handleConvert(e.target.value)}
              placeholder="Enter text here..."
              style={{ 
                width: '100%',
                minHeight: '280px', 
                background: 'rgba(0,0,0,0.2)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                padding: '1.25rem', 
                color: 'white', 
                resize: 'none', 
                outline: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Base64 Result</label>
              <button 
                onClick={copyResult} 
                className="menuButton"
                style={{ width: '32px', height: '32px' }}
              >
                {isCopied ? <span style={{ color: '#4ade80', fontSize: '0.7rem' }}>Ok</span> : <Copy size={14} />}
              </button>
            </div>
            <textarea 
              value={output}
              readOnly
              placeholder="Conversion result..."
              style={{ 
                width: '100%',
                minHeight: '280px', 
                background: 'rgba(139, 92, 246, 0.03)', 
                border: '1px solid rgba(139, 92, 246, 0.1)', 
                borderRadius: '12px', 
                padding: '1.25rem', 
                color: 'var(--accent-primary)', 
                resize: 'none', 
                outline: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base64Converter;
