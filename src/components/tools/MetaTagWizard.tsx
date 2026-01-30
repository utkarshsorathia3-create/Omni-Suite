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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Editor */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 className="font-outfit" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} /> Configuration
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Page Title</label>
              <input 
                type="text" 
                value={meta.title}
                onChange={(e) => setMeta({...meta, title: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Description</label>
              <textarea 
                value={meta.description}
                onChange={(e) => setMeta({...meta, description: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none', height: '100px', resize: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Canonical URL</label>
              <input 
                type="text" 
                value={meta.url}
                onChange={(e) => setMeta({...meta, url: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none' }}
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>OG Image URL</label>
              <input 
                type="text" 
                value={meta.image}
                onChange={(e) => setMeta({...meta, image: e.target.value})}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Google Preview */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Search Engine Result Preview</span>
            <div style={{ maxWidth: '600px' }}>
              <div style={{ color: '#dadce0', fontSize: '14px', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{meta.url}</div>
              <div style={{ color: '#8ab4f8', fontSize: '20px', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{meta.title}</div>
              <div style={{ color: '#bdc1c6', fontSize: '14px', lineHeight: '1.58' }}>{meta.description}</div>
            </div>
          </div>

          {/* Social Preview */}
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
             <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
               <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Social Sharing Preview</span>
             </div>
             <div style={{ width: '100%', height: '200px', background: `url(${meta.image}) center/cover no-repeat`, backgroundSize: 'cover' }}>
               {!meta.image && <div style={{ height: '100%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}><Share2 size={48} /></div>}
             </div>
             <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)' }}>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{new URL(meta.url || 'http://localhost').hostname}</div>
               <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{meta.title}</div>
               <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{meta.description}</div>
             </div>
          </div>
        </div>
      </div>

      {/* Code Export */}
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h4 className="font-outfit">Generated Meta Tags</h4>
          <button 
            onClick={copyToClipboard}
            style={{ 
              background: 'var(--accent-primary)', 
              color: 'white', 
              border: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            <Copy size={14} />
            {isCopied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>
        <pre style={{ 
          background: 'rgba(0,0,0,0.4)', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          fontSize: '13px', 
          color: '#8b5cf6',
          overflowX: 'auto',
          margin: 0,
          border: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
          {metaHtml}
        </pre>
      </div>
    </div>
  );
};

export default MetaTagWizard;
