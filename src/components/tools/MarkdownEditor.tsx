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
    <div className="tool-layout">
      {/* Toolbar */}
      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setView('edit')}
            style={{ 
              background: view === 'edit' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'edit' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'
            }}
          >
            <FileEdit size={14} /> Edit
          </button>
          <button 
            onClick={() => setView('preview')}
            style={{ 
              background: view === 'preview' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'preview' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'
            }}
          >
            <Eye size={14} /> Preview
          </button>
          <button 
            className="hide-mobile"
            onClick={() => setView('split')}
            style={{ 
              background: view === 'split' ? 'rgba(255,255,255,0.1)' : 'transparent', 
              color: view === 'split' ? 'white' : 'var(--text-muted)',
              border: 'none', padding: '0.5rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'
            }}
          >
            <Layout size={14} /> Split
          </button>
        </div>

        <button 
          onClick={downloadMd}
          className="btn-primary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
        >
          <Download size={16} /> Export
        </button>
      </div>

      <div className={view === 'split' ? 'tool-grid h-600' : 'h-600'}>
        {/* Editor */}
        {(view === 'edit' || view === 'split') && (
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Source Editor</span>
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
                minHeight: '400px',
                background: 'transparent',
                border: 'none',
                padding: '1.25rem',
                color: 'var(--text-primary)',
                fontSize: '14px',
                lineHeight: '1.6',
                resize: 'none',
                outline: 'none',
                overflowY: 'auto',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            />
          </div>
        )}

        {/* Preview */}
        {(view === 'preview' || view === 'split') && (
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Live Architect Preview</span>
            </div>
            <div 
              className="markdown-preview"
              style={{ 
                flex: 1, 
                padding: '1.5rem', 
                overflowY: 'auto',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#e2e8f0',
                minHeight: '400px'
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
