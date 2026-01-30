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
    <div className="animate-fade">
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <button onClick={() => handleCategoryChange('length')} style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', background: category === 'length' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Ruler size={18} /> Length</button>
          <button onClick={() => handleCategoryChange('weight')} style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', background: category === 'weight' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Scale size={18} /> Weight</button>
          <button onClick={() => handleCategoryChange('temp')} style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', background: category === 'temp' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Thermometer size={18} /> Temp</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
           <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>From</label>
              <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(parseFloat(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '2.5rem', fontWeight: 700, outline: 'none', marginBottom: '1.5rem' }}
              />
              <select 
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none' }}
              >
                {CONVERSIONS[category].units.map((u: string) => <option key={u} value={u} style={{ background: '#1a1a1a' }}>{u}</option>)}
              </select>
           </div>

           <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>To</label>
              <div style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', minHeight: '3.75rem', display: 'flex', alignItems: 'center' }}>
                {result}
              </div>
              <select 
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                style={{ width: '100%', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '0.75rem', borderRadius: '8px', color: 'white', outline: 'none' }}
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
