"use client";

import React, { useState, useEffect } from 'react';
import { Shield, RefreshCw, Copy, Check, Info } from 'lucide-react';

const PasswordLab = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [strength, setStrength] = useState({ score: 0, text: 'Very Weak', color: '#f87171' });
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    const charset = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    let characters = '';
    if (options.uppercase) characters += charset.uppercase;
    if (options.lowercase) characters += charset.lowercase;
    if (options.numbers) characters += charset.numbers;
    if (options.symbols) characters += charset.symbols;

    if (characters === '') return;

    let res = '';
    for (let i = 0; i < length; i++) {
      res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(res);
  };

  useEffect(() => {
    generatePassword();
  }, []); // Initial load

  useEffect(() => {
    // Basic strength calculation
    let score = 0;
    if (password.length > 8) score++;
    if (password.length > 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels = [
      { text: 'Very Weak', color: '#f87171' },
      { text: 'Weak', color: '#fb923c' },
      { text: 'Moderate', color: '#facc15' },
      { text: 'Strong', color: '#4ade80' },
      { text: 'Uncrackable', color: '#22d3ee' }
    ];

    setStrength({
      score: score,
      text: levels[Math.min(score, 4)].text,
      color: levels[Math.min(score, 4)].color
    });
  }, [password]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel">
        {/* Output Area */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '2rem 1.5rem', 
            borderRadius: '20px', 
            border: '2px solid rgba(255,255,255,0.03)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '120px',
            position: 'relative'
          }}>
            <span style={{ 
              fontSize: 'min(2rem, 6vw)', 
              fontFamily: 'JetBrains Mono, monospace', 
              color: 'white', 
              letterSpacing: '0.05em',
              wordBreak: 'break-all',
              textAlign: 'center',
              lineHeight: '1.4',
              padding: '0 1rem'
            }}>
              {password}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            marginTop: '1.5rem',
            justifyContent: 'center'
          }}>
             <button 
              onClick={generatePassword} 
              className="menuButton"
              style={{ width: '45px', height: '45px' }}
             >
               <RefreshCw size={20} />
             </button>
             <button 
              onClick={copyToClipboard} 
              className="btn-primary"
              style={{ padding: '0 1.5rem', borderRadius: '12px', height: '45px' }}
             >
               {isCopied ? <Check size={20} /> : <Copy size={20} />}
               <span style={{ marginLeft: '0.5rem' }}>{isCopied ? 'Copied' : 'Copy'}</span>
             </button>
          </div>
        </div>

        {/* Strength Bar */}
        <div style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Security Strength</span>
            <span style={{ fontSize: '0.85rem', color: strength.color, fontWeight: 800, textTransform: 'uppercase' }}>{strength.text}</span>
          </div>
          <div style={{ height: '10px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', padding: '2px' }}>
            <div style={{ height: '100%', width: `${(strength.score / 5) * 100}%`, background: strength.color, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', borderRadius: '10px' }} />
          </div>
        </div>

        {/* Configuration */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
           <div>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
               <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Password Length</label>
               <span style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '1.1rem' }}>{length}</span>
             </div>
             <input 
              type="range" 
              min="8" 
              max="64" 
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-primary)', height: '1.5rem', cursor: 'pointer' }}
             />
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem' }}>
              {Object.entries(options).map(([key, value]) => (
                <button 
                  key={key}
                  onClick={() => setOptions({...options, [key]: !value})}
                  style={{ 
                    padding: '0.8rem', 
                    borderRadius: '12px', 
                    border: '1px solid',
                    borderColor: value ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.05)',
                    background: value ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.02)',
                    color: value ? 'white' : 'var(--text-muted)',
                    fontSize: '0.85rem',
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: value ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)' }} />
                  {key}
                </button>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLab;
