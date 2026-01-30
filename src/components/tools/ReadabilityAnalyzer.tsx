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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '2rem' }}>
        {/* Input Area */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Content Laboratory</label>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '100%', height: '400px', background: 'transparent', border: 'none', color: 'white', fontSize: '1.2rem', lineHeight: '1.8', outline: 'none', resize: 'none' }}
            placeholder="Paste your content here..."
          />
        </div>

        {/* Sidebar Analytics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(139, 92, 246, 0.05)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                 <Activity size={18} color="var(--accent-primary)" />
                 <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>READABILITY</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>{stats.level}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Complexity score based on average word length.</p>
           </div>

           <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                 <Clock size={18} color="var(--accent-secondary)" />
                 <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>EST. TIME</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>{stats.readingTime} min</div>
           </div>

           <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Words</span>
                 <span style={{ color: 'white', fontWeight: 600 }}>{stats.words}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Characters</span>
                 <span style={{ color: 'white', fontWeight: 600 }}>{stats.chars}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sentences</span>
                 <span style={{ color: 'white', fontWeight: 600 }}>{stats.sentences}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReadabilityAnalyzer;
