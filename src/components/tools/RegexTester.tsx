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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Regular Expression</label>
            <div style={{ display: 'flex', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontFamily: 'monospace' }}>/</span>
              <input 
                type="text" 
                value={regex}
                onChange={(e) => setRegex(e.target.value)}
                style={{ 
                  width: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,0.1)'}`, 
                  padding: '1rem 3rem', 
                  borderRadius: '12px', 
                  color: 'white', 
                  fontFamily: 'monospace',
                  outline: 'none'
                }}
              />
              <span style={{ position: 'absolute', right: '4.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontFamily: 'monospace' }}>/</span>
              <input 
                type="text" 
                value={flags}
                onChange={(e) => setFlags(e.target.value)}
                style={{ 
                  width: '60px', 
                  position: 'absolute', 
                  right: '0.5rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 800,
                  textAlign: 'center'
                }}
              />
            </div>
            {error && <div style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertTriangle size={14} /> {error}
            </div>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Test String */}
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Test String</label>
            <textarea 
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              style={{ 
                width: '100%', 
                height: '250px', 
                background: 'rgba(0,0,0,0.2)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                color: 'var(--text-primary)', 
                fontFamily: 'Inter, sans-serif',
                resize: 'none',
                outline: 'none',
                lineHeight: '1.6'
              }}
            />
          </div>

          {/* Matches & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Match Result ({matches.length})</label>
            <div style={{ 
              flex: 1, 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              padding: '1.5rem', 
              overflowY: 'auto',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap'
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
