"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileEdit, Eye, Layout, Type, Download } from 'lucide-react';

const MarkdownEditor = () => {
  const [content, setContent] = useState('# Hello World!\n\nThis is a **premium** markdown architect.\n\n### Features:\n- Live Preview\n- GFM Support\n- Glassmorphic UI\n\n```javascript\nconsole.log("Everything is awesome!");\n```');
  const [view, setView] = useState<'split' | 'edit' | 'preview'>('split');

  const downloadMd = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'omni-snippet.md';
    a.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      {/* Toolbar */}
      <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setView('edit')}
            style={{ 
              background: view === 'edit' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'edit' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <FileEdit size={16} /> Edit
          </button>
          <button 
            onClick={() => setView('preview')}
            style={{ 
              background: view === 'preview' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'preview' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <Eye size={16} /> Preview
          </button>
          <button 
            onClick={() => setView('split')}
            style={{ 
              background: view === 'split' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'split' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <Layout size={16} /> Split
          </button>
        </div>

        <button 
          onClick={downloadMd}
          style={{ 
            background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
        >
          <Download size={16} /> Export .md
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: view === 'split' ? '1fr 1fr' : '1fr', 
        gap: '2rem', 
        height: '650px',
        maxHeight: 'calc(100vh - 350px)'
      }}>
        {/* Editor */}
        {(view === 'edit' || view === 'split') && (
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Source Editor</span>
              <Type size={14} style={{ color: 'var(--text-muted)' }} />
            </div>
            <textarea
              className="font-mono"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1,
                width: '100%',
                background: 'transparent',
                border: 'none',
                padding: '1.5rem',
                color: 'var(--text-primary)',
                fontSize: '15px',
                lineHeight: '1.6',
                resize: 'none',
                outline: 'none',
                overflowY: 'auto'
              }}
            />
          </div>
        )}

        {/* Preview */}
        {(view === 'preview' || view === 'split') && (
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Architect Preview</span>
            </div>
            <div 
              className="markdown-preview"
              style={{ 
                flex: 1, 
                padding: '1.5rem 2rem', 
                overflowY: 'auto',
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#e2e8f0'
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
