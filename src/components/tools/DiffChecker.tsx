"use client";

import React, { useState } from 'react';
import { Split, ArrowRight, Trash2 } from 'lucide-react';

const DiffChecker = () => {
  const [original, setOriginal] = useState('{\n  "name": "Omni-Suite",\n  "version": "1.0.0",\n  "status": "beta"\n}');
  const [modified, setModified] = useState('{\n  "name": "Omni-Suite Pro",\n  "version": "1.2.0",\n  "status": "production",\n  "author": "Utkarsh"\n}');

  const originalLines = original.split('\n');
  const modifiedLines = modified.split('\n');
  const maxLines = Math.max(originalLines.length, modifiedLines.length);

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Input Areas */}
        <div className="glass-panel">
          <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Original Text</label>
          <textarea 
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            spellCheck={false}
            style={{ 
              width: '100%', 
              height: '200px', 
              background: 'rgba(0,0,0,0.2)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              padding: '1rem', 
              color: 'white', 
              fontSize: '0.85rem', 
              outline: 'none', 
              resize: 'none',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          />
        </div>

        <div className="glass-panel">
          <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Modified Text</label>
          <textarea 
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            spellCheck={false}
            style={{ 
              width: '100%', 
              height: '200px', 
              background: 'rgba(0,0,0,0.2)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              padding: '1rem', 
              color: 'white', 
              fontSize: '0.85rem', 
              outline: 'none', 
              resize: 'none',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          />
        </div>
      </div>

      {/* Diff Output */}
      <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SIDE-BY-SIDE COMPARISON</span>
          <Split size={16} className="text-gradient" />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', 
          background: 'rgba(0,0,0,0.3)', 
          fontFamily: 'JetBrains Mono, monospace', 
          fontSize: '0.8rem', 
          overflowX: 'auto' 
        }}>
           {/* Original Half */}
           <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', minWidth: 0 }}>
             {originalLines.map((line, i) => {
               const isRemoved = !modifiedLines.includes(line);
               return (
                 <div key={i} style={{ display: 'flex', background: isRemoved ? 'rgba(239, 68, 68, 0.15)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                   <div style={{ width: '35px', padding: '0.4rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.03)', userSelect: 'none', fontSize: '0.7rem' }}>{i + 1}</div>
                   <div style={{ padding: '0.4rem 0.75rem', flex: 1, whiteSpace: 'pre', color: isRemoved ? '#fca5a5' : 'inherit' }}>{isRemoved ? '- ' : '  '}{line}</div>
                 </div>
               );
             })}
           </div>

           {/* Modified Half */}
           <div style={{ minWidth: 0 }}>
             {modifiedLines.map((line, i) => {
                const isAdded = !originalLines.includes(line);
                return (
                  <div key={i} style={{ display: 'flex', background: isAdded ? 'rgba(34, 197, 94, 0.15)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ width: '35px', padding: '0.4rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.03)', userSelect: 'none', fontSize: '0.7rem' }}>{i + 1}</div>
                    <div style={{ padding: '0.4rem 0.75rem', flex: 1, whiteSpace: 'pre', color: isAdded ? '#86efac' : 'inherit' }}>{isAdded ? '+ ' : '  '}{line}</div>
                  </div>
                );
             })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DiffChecker;
