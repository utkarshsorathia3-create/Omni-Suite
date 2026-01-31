"use client";

import React, { useState, useEffect } from 'react';
import { Search, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

const RegexTester = () => {
  const [regex, setRegex] = useState('([a-z0-9_.-]+)@([\\da-z.-]+)\\.([a-z.]{2,6})');
  const [flags, setFlags] = useState('g');
  const [testText, setTestText] = useState('Contact us at support@omni-suite.io or hello_world@example.com');
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const re = new RegExp(regex, flags);
      const allMatches = Array.from(testText.matchAll(re));
      setMatches(allMatches);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setMatches([]);
    }
  }, [regex, flags, testText]);

  const highlightMatches = () => {
    if (error || matches.length === 0) return testText;
    
    let result = [];
    let lastIndex = 0;
    
    const re = new RegExp(regex, flags);
    const m = Array.from(testText.matchAll(re));

    m.forEach((match, i) => {
      const start = match.index!;
      const end = start + match[0].length;
      
      // Add preceding text
      result.push(testText.slice(lastIndex, start));
      // Add highlighted match
      result.push(
        <span 
          key={i} 
          style={{ 
            background: 'rgba(139, 92, 246, 0.3)', 
            borderBottom: '2px solid var(--accent-primary)',
            color: 'white',
            padding: '1px 0',
            borderRadius: '2px'
          }}
        >
          {match[0]}
        </span>
      );
      lastIndex = end;
    });
    
    result.push(testText.slice(lastIndex));
    return result;
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'block', fontWeight: 600 }}>Regular Expression</label>
            <div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 700, fontSize: '1.2rem' }}>/</span>
              <input 
                type="text" 
                value={regex}
                onChange={(e) => setRegex(e.target.value)}
                spellCheck={false}
                style={{ 
                  width: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,0.1)'}`, 
                  padding: '1rem 3.5rem 1rem 2.5rem', 
                  borderRadius: '12px', 
                  color: 'white', 
                  fontFamily: 'JetBrains Mono, monospace',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
              <div style={{ position: 'absolute', right: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 700 }}>/</span>
                <input 
                  type="text" 
                  value={flags}
                  onChange={(e) => setFlags(e.target.value)}
                  placeholder="gim"
                  style={{ 
                    width: '45px', 
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '0.4rem 0.2rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 800,
                    textAlign: 'center',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
            {error && <div style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(248,113,113,0.1)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <AlertTriangle size={14} /> {error}
            </div>}
          </div>
        </div>

        <div className="tool-grid">
          {/* Test String */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'block', fontWeight: 600 }}>Test String</label>
            <textarea 
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              spellCheck={false}
              style={{ 
                width: '100%', 
                minHeight: '250px', 
                background: 'rgba(0,0,0,0.2)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                padding: '1.25rem', 
                color: 'var(--text-primary)', 
                fontFamily: 'Inter, sans-serif',
                resize: 'none',
                outline: 'none',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Matches & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'block', fontWeight: 600 }}>Match Result ({matches.length})</label>
            <div style={{ 
              flex: 1, 
              minHeight: '250px',
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              padding: '1.25rem', 
              overflowY: 'auto',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              fontSize: '0.95rem'
            }}>
              {highlightMatches()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegexTester;
