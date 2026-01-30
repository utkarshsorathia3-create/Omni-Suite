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
    <div className="animate-fade">
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h3 className="font-outfit" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Visual Timezone Mapper</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Real-time synchronization across world regions.</p>
          </div>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase' }}>Current Base: {formatTime(baseTime, 'UTC')}</span>
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {selectedZones.map((zone) => (
            <div 
              key={zone} 
              className="glass-panel" 
              style={{ 
                padding: '1.5rem 2rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: zone === 'UTC' ? 'rgba(139, 92, 246, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                borderColor: zone === 'UTC' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '14px', 
                  background: 'rgba(0,0,0,0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{zone.split('/').pop()?.replace('_', ' ')}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Offset: GMT {getOffset(zone)}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                  {formatTime(baseTime, zone).split(',').pop()?.trim().split(' ')[0]}
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 500 }}>
                    {formatTime(baseTime, zone).split(',').pop()?.trim().split(' ')[1]}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
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
