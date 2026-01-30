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
    <div className="animate-fade">
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="font-outfit" style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Hash size={24} className="text-gradient" /> URL Slug Forge
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Input Title</label>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your title here..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '12px', color: 'white', fontSize: '1.1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
             <div style={{ flex: 1 }}>
               <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Separator</label>
               <div style={{ display: 'flex', gap: '0.5rem' }}>
                 {['-', '_', '.'].map(s => (
                   <button 
                    key={s}
                    onClick={() => setSeparator(s)}
                    style={{ 
                      flex: 1, padding: '0.75rem', borderRadius: '8px', 
                      background: separator === s ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                      border: 'none', color: 'white', fontWeight: 700
                    }}
                  >
                    {s}
                  </button>
                 ))}
               </div>
             </div>
             
             <div style={{ flex: 2 }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Generated Slug</label>
                <div style={{ 
                  background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '52px'
                }}>
                  <span className="font-mono" style={{ color: 'var(--accent-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{slug}</span>
                  <button onClick={copySlug} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    {isCopied ? <span style={{ color: '#4ade80', fontSize: '0.8rem' }}>Copied!</span> : <Copy size={18} />}
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
