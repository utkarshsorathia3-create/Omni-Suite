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
    <div className="tool-layout">
      <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', gap: '1.5rem', flexWrap: 'wrap' }}>
          <h3 className="font-outfit" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Type size={24} className="text-gradient" /> Placeholder Forge
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
             <select 
              value={type} 
              onChange={(e) => setType(e.target.value as any)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: '10px', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
             >
                <option value="standard" style={{ background: '#111' }}>Classic Lorem</option>
                <option value="techno" style={{ background: '#111' }}>Techno Corporate</option>
                <option value="startup" style={{ background: '#111' }}>Startup Buzzwords</option>
             </select>
             <input 
              type="number" 
              min="1" 
              max="20" 
              value={paragraphs} 
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              style={{ width: '70px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '10px', color: 'white', textAlign: 'center', outline: 'none' }}
             />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '2rem 1.5rem', 
            borderRadius: '20px', 
            minHeight: '300px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            fontSize: '1rem',
            whiteSpace: 'pre-wrap',
            border: '2px solid rgba(255,255,255,0.02)'
          }}>
            {generated}
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            justifyContent: 'flex-end',
            marginTop: '1.5rem'
          }}>
             <button 
              onClick={generate} 
              className="menuButton"
              style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.03)' }}
             >
               <RefreshCw size={18} />
             </button>
             <button 
              onClick={copyText}
              className="btn-primary"
              style={{ 
                padding: '0 1.5rem', borderRadius: '12px', height: '45px'
              }}
             >
                {isCopied ? 'Copied!' : <><Copy size={16} /> <span className="hide-mobile">Copy Text</span><span className="show-mobile-inline">Copy</span></>}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsum;
