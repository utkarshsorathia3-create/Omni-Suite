import { Metadata } from 'next';
import { Zap, Palette, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Branding | OmniSuite',
  description: 'OmniSuite brand guidelines, logos, and assets.',
};

export default function BrandingPage() {
  const colors = [
    { name: 'Accent Primary', hex: '#8b5cf6', variable: '--accent-primary' },
    { name: 'Accent Secondary', hex: '#d946ef', variable: '--accent-secondary' },
    { name: 'Background', hex: '#050508', variable: '--bg-primary' },
    { name: 'Card Background', hex: 'rgba(255, 255, 255, 0.03)', variable: '--glass-bg' },
  ];

  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }} className="animate-fade">
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="font-outfit text-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
          Brand Guidelines
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
          Our identity is built around the concept of "Glassmorphic Productivity"—simple, fast, and aesthetically pleasing.
        </p>
      </header>

      <section className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Zap size={24} color="var(--accent-primary)" />
          The Logo
        </h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Zap size={60} fill="white" color="white" />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The OmniSuite logo features a lightning bolt within a rounded square. 
              The bolt represents speed and efficiency, while the gradient mirrors 
              our vibrant, modern toolkit.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Palette size={24} color="var(--accent-primary)" />
          Color Palette
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {colors.map(color => (
            <div key={color.name}>
              <div style={{ 
                height: '100px', 
                background: color.hex.startsWith('rgba') ? 'var(--accent-primary)' : color.hex,
                opacity: color.hex.startsWith('rgba') ? 0.3 : 1,
                borderRadius: '12px',
                marginBottom: '1rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{color.name}</h4>
              <code style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{color.hex}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel" style={{ padding: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Shield size={24} color="var(--accent-primary)" />
          Usage Principles
        </h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
          <li>Always maintain the glassmorphic aesthetic (low opacity, high blur).</li>
          <li>Use the Outfit font for headings and Inter for body text.</li>
          <li>Keep margins generous and layouts breathing.</li>
          <li>Never use data-heavy tracking elements.</li>
        </ul>
      </section>
    </div>
  );
}
