"use client";

import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Activity, FileText } from 'lucide-react';

const ReadabilityAnalyzer = () => {
  const [text, setText] = useState('Sustainable architecture focuses on the optimization of environmental efficiency through the integration of renewable energy systems and the utilization of recycled materials. This methodology significantly reduces the carbon footprint of structural developments while simultaneously enhancing the aesthetic quality of the built environment.');
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    sentences: 0,
    readingTime: 0,
    level: 'Moderate'
  });

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const readingTime = Math.ceil(words / 200); // Average 200 wpm
    
    let level = 'Easy';
    const avgWordLen = words > 0 ? chars / words : 0;
    if (avgWordLen > 6) level = 'Complex';
    else if (avgWordLen > 4.5) level = 'Intermediate';

    setStats({ words, chars, sentences, readingTime, level });
  }, [text]);

  return (
    <div className="tool-layout">
      <div className="tool-grid">
        {/* Input Area */}
        <div className="glass-panel">
          <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.25rem', display: 'block', fontWeight: 700 }}>Content Laboratory</label>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              width: '100%', 
              height: '350px', 
              background: 'transparent', 
              border: 'none', 
              color: 'white', 
              fontSize: 'min(1.2rem, 5vw)', 
              lineHeight: '1.7', 
              outline: 'none', 
              resize: 'none',
              fontFamily: 'Inter, sans-serif'
            }}
            placeholder="Paste your content here..."
          />
        </div>

        {/* Sidebar Analytics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
           <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(139, 92, 246, 0.08)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                 <Activity size={18} className="text-gradient" />
                 <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Readability</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>{stats.level}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Calculated complexity based on lexical density.</p>
           </div>

           <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(236, 72, 153, 0.05)', borderColor: 'rgba(236, 72, 153, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                 <Clock size={18} style={{ color: 'var(--accent-secondary)' }} />
                 <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Reading Time</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>{stats.readingTime} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>min</span></div>
           </div>

           <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Words</span>
                 <span style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>{stats.words.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Characters</span>
                 <span style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>{stats.chars.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sentences</span>
                 <span style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>{stats.sentences.toLocaleString()}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReadabilityAnalyzer;
