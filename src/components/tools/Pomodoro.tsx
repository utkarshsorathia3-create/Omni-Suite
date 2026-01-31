"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Coffee, Brain, Volume2, VolumeX } from 'lucide-react';

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [muted, setMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          setIsActive(false);
          const nextMode = mode === 'work' ? 'break' : 'work';
          setMode(nextMode);
          setMinutes(nextMode === 'work' ? 25 : 5);
          setSeconds(0);
          if (!muted) {
            // alert('Session finished!');
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode, muted]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(mode === 'work' ? 25 : 5);
    setSeconds(0);
  };

  const switchMode = (newMode: 'work' | 'break') => {
    setIsActive(false);
    setMode(newMode);
    setMinutes(newMode === 'work' ? 25 : 5);
    setSeconds(0);
  };

  return (
    <div className="tool-layout">
      <div 
        className="glass-panel" 
        style={{ 
          padding: '2rem 1.5rem', 
          width: '100%', 
          maxWidth: '500px', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          margin: '0 auto'
        }}
      >
        {/* Glow Effect */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: mode === 'work' 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 50%)' 
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button 
              onClick={() => switchMode('work')}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: mode === 'work' ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                color: mode === 'work' ? 'var(--accent-primary)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Brain size={16} /> Work
            </button>
            <button 
              onClick={() => switchMode('break')}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: mode === 'break' ? 'rgba(236, 72, 153, 0.2)' : 'transparent',
                color: mode === 'break' ? 'var(--accent-secondary)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Coffee size={16} /> Break
            </button>
          </div>

          <div style={{ 
            fontSize: 'min(7rem, 20vw)', 
            fontWeight: 800, 
            fontFamily: 'Outfit, sans-serif', 
            letterSpacing: '-0.05em',
            marginBottom: '0.5rem',
            lineHeight: 1,
            color: 'white'
          }}>
            {String(minutes).padStart(2, '0')}<span style={{ opacity: 0.3, color: 'var(--text-muted)' }}>:</span>{String(seconds).padStart(2, '0')}
          </div>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem', fontWeight: 500 }}>
            {isActive ? 'Stay focused...' : 'Ready to start?'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', alignItems: 'center' }}>
            <button 
              onClick={resetTimer}
              className="menuButton"
              style={{ width: '48px', height: '48px' }}
            >
              <RotateCcw size={20} />
            </button>

            <button 
              onClick={toggleTimer}
              style={{ 
                width: '72px', 
                height: '72px', 
                borderRadius: '50%', 
                background: mode === 'work' ? 'var(--accent-primary)' : 'var(--accent-secondary)', 
                color: 'white', 
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: mode === 'work' 
                  ? '0 10px 30px -5px rgba(139, 92, 246, 0.5)' 
                  : '0 10px 30px -5px rgba(236, 72, 153, 0.5)',
                transform: isActive ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.3s var(--transition-bounce)'
              }}
            >
              {isActive ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" style={{ marginLeft: '4px' }} />}
            </button>

            <button 
              onClick={() => setMuted(!muted)}
              className="menuButton"
              style={{ width: '48px', height: '48px' }}
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
