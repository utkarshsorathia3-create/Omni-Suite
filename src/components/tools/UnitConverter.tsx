"use client";

import React, { useState, useEffect } from 'react';
import { Ruler, Scale, Thermometer, Zap } from 'lucide-react';

const CONVERSIONS: any = {
  length: {
    units: ['Meters', 'Kilometers', 'Miles', 'Feet', 'Inches'],
    factors: {
      Meters: 1, Kilometers: 0.001, Miles: 0.000621371, Feet: 3.28084, Inches: 39.3701
    }
  },
  weight: {
    units: ['Kilograms', 'Grams', 'Pounds', 'Ounces'],
    factors: {
      Kilograms: 1, Grams: 1000, Pounds: 2.20462, Ounces: 35.274
    }
  },
  temp: {
    units: ['Celsius', 'Fahrenheit', 'Kelvin'],
    custom: true // Temperature needs special logic
  }
};

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState('Meters');
  const [toUnit, setToUnit] = useState('Kilometers');
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (category === 'temp') {
      let celsius = value;
      if (fromUnit === 'Fahrenheit') celsius = (value - 32) * 5/9;
      if (fromUnit === 'Kelvin') celsius = value - 273.15;

      let res = celsius;
      if (toUnit === 'Fahrenheit') res = (celsius * 9/5) + 32;
      if (toUnit === 'Kelvin') res = celsius + 273.15;
      setResult(parseFloat(res.toFixed(4)));
    } else {
      const baseValue = value / CONVERSIONS[category].factors[fromUnit];
      const res = baseValue * CONVERSIONS[category].factors[toUnit];
      setResult(parseFloat(res.toFixed(4)));
    }
  }, [value, category, fromUnit, toUnit]);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setFromUnit(CONVERSIONS[cat].units[0]);
    setToUnit(CONVERSIONS[cat].units[1]);
  };

  return (
    <div className="tool-layout">
      <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => handleCategoryChange('length')} style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: category === 'length' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}><Ruler size={16} /> Length</button>
          <button onClick={() => handleCategoryChange('weight')} style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: category === 'weight' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}><Scale size={16} /> Weight</button>
          <button onClick={() => handleCategoryChange('temp')} style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: category === 'temp' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}><Thermometer size={16} /> Temp</button>
        </div>

        <div className="tool-grid" style={{ gap: '1.5rem' }}>
           <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>From</label>
              <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(parseFloat(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '2rem', fontWeight: 700, outline: 'none', marginBottom: '1.5rem', padding: '0.5rem 0' }}
              />
              <select 
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none', cursor: 'pointer' }}
              >
                {CONVERSIONS[category].units.map((u: string) => <option key={u} value={u} style={{ background: '#1a1a1a' }}>{u}</option>)}
              </select>
           </div>

           <div className="glass-panel" style={{ background: 'rgba(139, 92, 246, 0.05)', borderColor: 'rgba(139, 92, 246, 0.2)', display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>To</label>
              <div style={{ color: 'var(--accent-primary)', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', minHeight: '3.5rem', display: 'flex', alignItems: 'center', borderBottom: '2px solid rgba(139, 92, 246, 0.1)', padding: '0.5rem 0' }}>
                {result}
              </div>
              <select 
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                style={{ width: '100%', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '0.75rem', borderRadius: '10px', color: 'white', outline: 'none', cursor: 'pointer' }}
              >
                {CONVERSIONS[category].units.map((u: string) => <option key={u} value={u} style={{ background: '#1a1a1a' }}>{u}</option>)}
              </select>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
