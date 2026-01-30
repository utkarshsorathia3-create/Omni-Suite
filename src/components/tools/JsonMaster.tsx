"use client";

import React, { useState, useEffect } from 'react';
import { JsonView, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { Copy, FileJson, Trash2, CheckCircle, XCircle } from 'lucide-react';

const JsonMaster = () => {
  const [input, setInput] = useState('{\n  "project": "Omni-Suite",\n  "status": "active",\n  "tools": 20,\n  "features": [\n    "Premium UI",\n    "SEO Optimized",\n    "Fast Performance"\n  ],\n  "author": {\n    "name": "Utkarsh",\n    "role": "Developer"\n  }\n}');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    try {
      const parsed = JSON.parse(input);
      setData(parsed);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setData(null);
    }
  }, [input]);

  const handleCopy = (mode: 'pretty' | 'minify') => {
    if (!data) return;
    const text = mode === 'pretty' ? JSON.stringify(data, null, 2) : JSON.stringify(data);
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const clearInput = () => {
    setInput('');
    setData(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Actions */}
      <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: error ? '#f87171' : '#4ade80' }}>
          {error ? <XCircle size={18} /> : <CheckCircle size={18} />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
            {error ? 'Invalid JSON' : 'Valid JSON'}
          </span>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
          <button 
            onClick={() => handleCopy('pretty')}
            disabled={!!error}
            className="tool-btn"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px',
              opacity: error ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Copy size={16} />
            {isCopied ? 'Copied!' : 'Copy Pretty'}
          </button>
          <button 
            onClick={() => handleCopy('minify')}
            disabled={!!error}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px',
              opacity: error ? 0.5 : 1
            }}
          >
            Minify
          </button>
          <button 
            onClick={clearInput}
            style={{ 
              background: 'rgba(248,113,113,0.1)', 
              color: '#f87171', 
              border: '1px solid rgba(248,113,113,0.2)', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px'
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', height: '600px' }}>
        {/* Input Area */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Input Raw JSON</span>
            <FileJson size={14} style={{ color: 'var(--text-muted)' }} />
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            style={{
              flex: 1,
              width: '100%',
              background: 'transparent',
              border: 'none',
              padding: '1.5rem',
              color: 'var(--text-primary)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '14px',
              lineHeight: '1.6',
              resize: 'none',
              outline: 'none',
              overflowY: 'auto'
            }}
          />
        </div>

        {/* Tree Visualizer */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Interactive Tree View</span>
          </div>
          <div style={{ 
            flex: 1, 
            padding: '1.5rem', 
            overflowY: 'auto',
            background: 'rgba(0,0,0,0.2)' 
          }}>
            {data ? (
              <JsonView 
                data={data} 
                shouldExpandNode={() => true} 
                style={darkStyles} 
              />
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                <div>
                  <XCircle size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                  <p>{error || 'Waiting for valid JSON input...'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonMaster;
