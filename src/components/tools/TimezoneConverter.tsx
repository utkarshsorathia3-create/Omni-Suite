"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Clock, Plus, Trash2, MapPin } from 'lucide-react';

const TimezoneConverter = () => {
  const [selectedZones, setSelectedZones] = useState(['UTC', 'America/New_York', 'Asia/Kolkata', 'Europe/London']);
  const [baseTime, setBaseTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setBaseTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date, zone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getOffset = (zone: string) => {
    const date = new Date();
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const zoneDate = new Date(date.toLocaleString('en-US', { timeZone: zone }));
    const offset = Math.round((zoneDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60));
    return offset >= 0 ? `+${offset}` : `${offset}`;
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <h3 className="font-outfit" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Globe size={24} className="text-gradient" /> Visual Timezone Mapper
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Real-time synchronization across world regions.</p>
          </div>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)', minWidth: 'fit-content' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Base: {formatTime(baseTime, 'UTC')}</span>
          </div>
        </header>

        <div className="panel-stack" style={{ gap: '1rem' }}>
          {selectedZones.map((zone) => (
            <div 
              key={zone} 
              className="glass-panel" 
              style={{ 
                padding: '1.25rem 1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: zone === 'UTC' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                borderColor: zone === 'UTC' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1, minWidth: '200px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'rgba(0,0,0,0.3)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: zone === 'UTC' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.2rem', color: 'white' }}>{zone.split('/').pop()?.replace('_', ' ')}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>GMT {getOffset(zone)}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: 'white' }}>
                  {formatTime(baseTime, zone).split(',').pop()?.trim().split(' ')[0]}
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginLeft: '0.4rem', fontWeight: 600 }}>
                    {formatTime(baseTime, zone).split(',').pop()?.trim().split(' ')[1]}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.1rem' }}>
                  {formatTime(baseTime, zone).split(',')[0]}, {formatTime(baseTime, zone).split(',')[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimezoneConverter;
