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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Input Areas */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Original Text</label>
          <textarea 
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            className="font-mono"
            style={{ width: '100%', height: '200px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', color: 'white', fontSize: '0.85rem', outline: 'none', resize: 'none' }}
          />
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Modified Text</label>
          <textarea 
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            className="font-mono"
            style={{ width: '100%', height: '200px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', color: 'white', fontSize: '0.85rem', outline: 'none', resize: 'none' }}
          />
        </div>
      </div>

      {/* Diff Output */}
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SIDE-BY-SIDE COMPARISON</span>
          <Split size={16} style={{ color: 'var(--accent-primary)' }} />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'rgba(0,0,0,0.3)', fontFamily: 'monospace', fontSize: '0.85rem', overflowX: 'auto' }}>
           {/* Original Half */}
           <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
             {originalLines.map((line, i) => {
               const isRemoved = !modifiedLines.includes(line);
               return (
                 <div key={i} style={{ display: 'flex', background: isRemoved ? 'rgba(248, 113, 113, 0.1)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                   <div style={{ width: '40px', padding: '0.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.03)', userSelect: 'none' }}>{i + 1}</div>
                   <div style={{ padding: '0.5rem 1rem', flex: 1, whiteSpace: 'pre', color: isRemoved ? '#fca5a5' : 'inherit' }}>{isRemoved ? '- ' : '  '}{line}</div>
                 </div>
               );
             })}
           </div>

           {/* Modified Half */}
           <div>
             {modifiedLines.map((line, i) => {
                const isAdded = !originalLines.includes(line);
                return (
                  <div key={i} style={{ display: 'flex', background: isAdded ? 'rgba(74, 222, 128, 0.1)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ width: '40px', padding: '0.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.03)', userSelect: 'none' }}>{i + 1}</div>
                    <div style={{ padding: '0.5rem 1rem', flex: 1, whiteSpace: 'pre', color: isAdded ? '#86efac' : 'inherit' }}>{isAdded ? '+ ' : '  '}{line}</div>
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
