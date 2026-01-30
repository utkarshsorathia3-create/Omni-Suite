"use client";

import React, { useState, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Download, Copy, RefreshCw, Type, Maximize2, Palette } from 'lucide-react';

const THEMES = {
  glass: {
    name: 'Glassmorphism',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    container: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    blur: '20px'
  },
  dark: {
    name: 'Deep Dark',
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    container: '#020617',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    blur: '0px'
  },
  sunset: {
    name: 'Retrowave',
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    container: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    blur: '10px'
  },
  ocean: {
    name: 'Deep Ocean',
    bg: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
    container: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    blur: '12px'
  }
};

const CodeToImage = () => {
  const [code, setCode] = useState('function helloWorld() {\n  console.log("Welcome to Omni-Suite!");\n}\n\n// Try changing the theme or padding!');
  const [theme, setTheme] = useState<keyof typeof THEMES>('glass');
  const [padding, setPadding] = useState(60);
  const [language, setLanguage] = useState('javascript');
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const exportRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (exportRef.current === null) return;
    
    try {
      const dataUrl = await toPng(exportRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = `omni-code-snippet.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Controls Bar */}
      <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Palette size={16} />
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value as any)}
            style={{ background: 'transparent', color: 'white', border: 'none', outline: 'none', fontSize: '0.9rem' }}
          >
            {Object.entries(THEMES).map(([id, t]) => (
              <option key={id} value={id} style={{ background: '#1a1a1a' }}>{t.name}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Padding</span>
          <input 
            type="range" 
            min="20" 
            max="120" 
            value={padding} 
            onChange={(e) => setPadding(parseInt(e.target.value))}
            style={{ accentColor: 'var(--accent-primary)' }}
          />
        </div>

        <button 
          onClick={handleDownload}
          style={{ 
            marginLeft: 'auto',
            background: 'var(--accent-primary)', 
            color: 'white', 
            border: 'none', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600
          }}
        >
          <Download size={16} />
          Export PNG
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Editor Side */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Editor</span>
            <Type size={14} style={{ color: 'var(--text-muted)' }} />
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%',
              height: '300px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '1rem',
              color: 'var(--text-primary)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '14px',
              lineHeight: '1.5',
              resize: 'none',
              outline: 'none'
            }}
          />
        </div>

        {/* Preview Side */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Preview</span>
            <Maximize2 size={14} style={{ color: 'var(--text-muted)' }} />
          </div>
          
          <div 
            ref={exportRef}
            style={{ 
              background: THEMES[theme].bg,
              padding: `${padding}px`,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              transition: 'var(--transition-smooth)'
            }}
          >
            <div 
              style={{ 
                background: THEMES[theme].container,
                backdropFilter: THEMES[theme].blur,
                WebkitBackdropFilter: THEMES[theme].blur,
                border: THEMES[theme].border,
                borderRadius: '12px',
                padding: '1.5rem',
                minWidth: '350px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', gap: '6px', marginBottom: '1.25rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              
              <pre style={{ 
                margin: 0, 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '15px', 
                lineHeight: '1.6',
                color: '#e2e8f0',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
                {code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeToImage;
