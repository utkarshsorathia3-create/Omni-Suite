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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        {/* Output Area */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '2rem', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px'
          }}>
            <span style={{ 
              fontSize: '2rem', 
              fontFamily: 'JetBrains Mono, monospace', 
              color: 'white', 
              letterSpacing: '0.1em',
              wordBreak: 'break-all',
              textAlign: 'center'
            }}>
              {password}
            </span>
          </div>
          <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.5rem' }}>
             <button onClick={generatePassword} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', padding: '0.75rem', color: 'white' }}><RefreshCw size={20} /></button>
             <button onClick={copyToClipboard} style={{ background: 'var(--accent-primary)', border: 'none', borderRadius: '8px', padding: '0.75rem', color: 'white' }}>
               {isCopied ? <Check size={20} /> : <Copy size={20} />}
             </button>
          </div>
        </div>

        {/* Strength Bar */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Security Level</span>
            <span style={{ fontSize: '0.9rem', color: strength.color, fontWeight: 700, textTransform: 'uppercase' }}>{strength.text}</span>
          </div>
          <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(strength.score / 5) * 100}%`, background: strength.color, transition: 'var(--transition-smooth)' }} />
          </div>
        </div>

        {/* Configuration */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
           <div>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
               <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password Length</label>
               <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{length}</span>
             </div>
             <input 
              type="range" 
              min="8" 
              max="64" 
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
             />
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {Object.entries(options).map(([key, value]) => (
                <button 
                  key={key}
                  onClick={() => setOptions({...options, [key]: !value})}
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: '10px', 
                    border: '1px solid',
                    borderColor: value ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                    background: value ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                    color: value ? 'white' : 'var(--text-muted)',
                    fontSize: '0.85rem',
                    textTransform: 'capitalize',
                    fontWeight: 600
                  }}
                >
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
