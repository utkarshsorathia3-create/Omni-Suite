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
    <div className="animate-fade">
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} /> Base64 Laboratory
          </h3>
          <button 
            onClick={switchMode}
            style={{ 
              background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)',
              padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <ArrowRightLeft size={16} /> Switch to {mode === 'encode' ? 'Decode' : 'Encode'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Raw Text</label>
            <textarea 
              value={input}
              onChange={(e) => handleConvert(e.target.value)}
              className="font-mono"
              style={{ flex: 1, minHeight: '300px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', color: 'white', resize: 'none', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Base64 Result</label>
              <button onClick={copyResult} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                {isCopied ? <span style={{ color: '#4ade80', fontSize: '0.7rem' }}>Copied!</span> : <Copy size={14} />}
              </button>
            </div>
            <textarea 
              value={output}
              readOnly
              className="font-mono"
              style={{ flex: 1, minHeight: '300px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.1)', borderRadius: '12px', padding: '1.5rem', color: 'var(--accent-primary)', resize: 'none', outline: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base64Converter;
