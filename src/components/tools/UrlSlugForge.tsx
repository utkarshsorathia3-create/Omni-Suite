"use client";

import React, { useState, useEffect } from 'react';
import { Link, Copy, Hash, RefreshCcw } from 'lucide-react';

const UrlSlugForge = () => {
  const [input, setInput] = useState('Build a Beautiful SaaS Dashboard with Next.js');
  const [slug, setSlug] = useState('');
  const [separator, setSeparator] = useState('-');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const res = input
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, separator)
      .replace(/^-+|-+$/g, '');
    setSlug(res);
  }, [input, separator]);

  const copySlug = () => {
    navigator.clipboard.writeText(slug);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Hash size={24} className="text-gradient" /> URL Slug Forge
        </h3>

        <div className="panel-stack" style={{ gap: '2rem' }}>
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 700 }}>Input Title</label>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your title here..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', alignItems: 'end' }}>
             <div>
               <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 700 }}>Separator</label>
               <div style={{ display: 'flex', gap: '0.5rem' }}>
                 {['-', '_', '.'].map(s => (
                   <button 
                    key={s}
                    onClick={() => setSeparator(s)}
                    style={{ 
                      flex: 1, padding: '0.75rem', borderRadius: '10px', 
                      background: separator === s ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                      border: 'none', color: 'white', fontWeight: 800,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s}
                  </button>
                 ))}
               </div>
             </div>
             
             <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 700 }}>Generated Slug</label>
                <div style={{ 
                  background: 'rgba(139, 92, 246, 0.05)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '48px', gap: '1rem'
                }}>
                  <span className="font-mono" style={{ color: 'var(--accent-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.95rem', fontWeight: 600 }}>{slug}</span>
                  <button onClick={copySlug} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0 }}>
                    {isCopied ? <span style={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 700 }}>Copied!</span> : <Copy size={18} />}
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlSlugForge;
