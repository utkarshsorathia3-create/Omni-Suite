"use client";

import React, { useState } from 'react';
import { Share2, Globe, Twitter, AlertCircle, Copy, Search } from 'lucide-react';

const MetaTagWizard = () => {
  const [meta, setMeta] = useState({
    title: 'My Awesome Project',
    description: 'A revolutionary new application built for performance and style.',
    url: 'https://example.com',
    image: 'https://example.com/og-image.jpg',
    author: 'Developer Name',
    keywords: 'nextjs, react, tools'
  });

  const [isCopied, setIsCopied] = useState(false);

  const metaHtml = `<!-- Primary Meta Tags -->
<title>${meta.title}</title>
<meta name="title" content="${meta.title}" />
<meta name="description" content="${meta.description}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${meta.url}" />
<meta property="og:title" content="${meta.title}" />
<meta property="og:description" content="${meta.description}" />
<meta property="og:image" content="${meta.image}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${meta.url}" />
<meta property="twitter:title" content="${meta.title}" />
<meta property="twitter:description" content="${meta.description}" />
<meta property="twitter:image" content="${meta.image}" />`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaHtml);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Editor */}
        <div className="glass-panel">
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} className="text-gradient" /> Configuration
          </h3>
          <div className="panel-stack">
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Page Title</label>
              <input 
                type="text" 
                value={meta.title}
                onChange={(e) => setMeta({...meta, title: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Description</label>
              <textarea 
                value={meta.description}
                onChange={(e) => setMeta({...meta, description: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none', height: '100px', resize: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>Canonical URL</label>
              <input 
                type="text" 
                value={meta.url}
                onChange={(e) => setMeta({...meta, url: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>OG Image URL</label>
              <input 
                type="text" 
                value={meta.image}
                onChange={(e) => setMeta({...meta, image: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Google Preview */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 700 }}>Search Engine Result Preview</span>
            <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
              <div style={{ color: '#dadce0', fontSize: '13px', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{meta.url}</div>
              <div style={{ color: '#8ab4f8', fontSize: '18px', marginBottom: '6px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{meta.title}</div>
              <div style={{ color: '#bdc1c6', fontSize: '13px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{meta.description}</div>
            </div>
          </div>

          {/* Social Preview */}
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
             <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
               <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Social Sharing Preview</span>
             </div>
             <div style={{ width: '100%', aspectRatio: '1.91/1', background: `url(${meta.image}) center/cover no-repeat`, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
               {!meta.image && <div style={{ height: '100%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}><Share2 size={48} /></div>}
             </div>
             <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)' }}>
               <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>{new URL(meta.url || 'http://localhost').hostname}</div>
               <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>{meta.title}</div>
               <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>{meta.description}</div>
             </div>
          </div>
        </div>
      </div>

      {/* Code Export */}
      <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
          <h4 className="font-outfit" style={{ fontSize: '0.95rem', fontWeight: 600 }}>Header Meta Tags</h4>
          <button 
            onClick={copyToClipboard}
            className="btn-primary"
            style={{ 
              padding: '0.5rem 1rem', 
              fontSize: '0.8rem'
            }}
          >
            <Copy size={14} />
            {isCopied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>
        <div style={{ padding: '1rem' }}>
          <pre style={{ 
            background: 'rgba(0,0,0,0.4)', 
            padding: '1.25rem', 
            borderRadius: '12px', 
            fontSize: '13px', 
            color: 'var(--accent-primary)',
            overflowX: 'auto',
            margin: 0,
            border: '1px solid rgba(139, 92, 246, 0.1)',
            fontFamily: 'JetBrains Mono, monospace',
            lineHeight: '1.5'
          }}>
            {metaHtml}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MetaTagWizard;
