"use client";

import React, { useState } from 'react';
import { Type, Copy, RefreshCw, Layers } from 'lucide-react';

const LoremIpsum = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [type, setType] = useState<'standard' | 'techno' | 'startup'>('standard');
  const [generated, setGenerated] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const DICTIONARY = {
    standard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    techno: "Neural network propagation optimizes the distributed ledger parameters. Zero-knowledge proofs validate the recursive smart contract architecture. Scalability solutions leverage shard-based consensus bottlenecks. High-frequency algorithms execute binary transformations across low-latency fiber networks. Quantum entanglement facilitates instantaneous synchronization between decentralized nodes.",
    startup: "Disruptive synergies leverage minimum viable products to pivot towards scalable ecosystems. Monetization strategies focus on growth hacking and burn rate optimization. Seed round funding accelerates the unicorn trajectory within the hyper-local hyper-growth segment. Paradigm shifts enable agile workflows and cross-functional transparency across the stakeholders."
  };

  const generate = () => {
    let result = [];
    for (let i = 0; i < paragraphs; i++) {
       result.push(DICTIONARY[type]);
    }
    setGenerated(result.join('\n\n'));
  };

  const copyText = () => {
    navigator.clipboard.writeText(generated);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  React.useEffect(() => {
    generate();
  }, [paragraphs, type]);

  return (
    <div className="animate-fade">
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h3 className="font-outfit" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Type size={24} className="text-gradient" /> Placeholder Forge
          </h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <select 
              value={type} 
              onChange={(e) => setType(e.target.value as any)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: '10px', color: 'white', outline: 'none' }}
             >
                <option value="standard">Classic Lorem</option>
                <option value="techno">Techno Corporate</option>
                <option value="startup">Startup Buzzwords</option>
             </select>
             <input 
              type="number" 
              min="1" 
              max="20" 
              value={paragraphs} 
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              style={{ width: '80px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '10px', color: 'white', textAlign: 'center' }}
             />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '2rem', 
            borderRadius: '16px', 
            minHeight: '400px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            fontSize: '1rem',
            whiteSpace: 'pre-wrap'
          }}>
            {generated}
          </div>
          
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
             <button onClick={generate} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', padding: '0.5rem', color: 'var(--text-muted)' }}><RefreshCw size={18} /></button>
             <button 
              onClick={copyText}
              style={{ 
                background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', padding: '0.5rem 1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}
             >
                {isCopied ? 'Copied!' : <><Copy size={16} /> Copy Text</>}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsum;
