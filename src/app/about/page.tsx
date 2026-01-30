import { Metadata } from 'next';
import Link from 'next/link';
import { Info, Zap, Code, Palette, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About OmniSuite',
  description: 'Learn about OmniSuite - a privacy-first, browser-based utility platform built for modern professionals.',
};

export default function AboutPage() {
  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }} className="animate-fade">
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <Zap size={32} fill="white" color="white" />
        </div>
        <h1 className="font-outfit text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          About OmniSuite
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
          A privacy-first, aesthetic utility platform designed for developers, designers, and content creators who value speed, security, and style.
        </p>
      </header>

      {/* Mission Section */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Target size={28} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '2rem', margin: 0 }}>Our Mission</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          In an era where every app wants your data, OmniSuite takes a different approach. We believe powerful tools shouldn't 
          come at the cost of your privacy. Every tool runs <strong>entirely in your browser</strong>—your code, your JSON, 
          your images never touch our servers. It's utility without compromise.
        </p>
      </div>

      {/* Core Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Info size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Privacy First</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Zero data collection. Zero server uploads. Your work stays on your device, always.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Palette size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Aesthetic Design</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Premium glassmorphic UI that feels as good as it looks. Tools should be beautiful.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Code size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Open Source</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Built in the open. Transparent, auditable, and community-driven development.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Code size={28} color="var(--accent-primary)" />
          Built With Modern Tech
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Framework</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Next.js 15 (App Router)</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Language</h4>
            <p style={{ color: 'var(--text-secondary)' }}>TypeScript</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Styling</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Vanilla CSS (Glassmorphism)</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Performance</h4>
            <p style={{ color: 'var(--text-secondary)' }}>95+ Lighthouse Score</p>
          </div>
        </div>
      </div>

      {/* Community */}
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Users size={28} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '2rem', margin: 0 }}>Join the Community</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
          OmniSuite is more than a tool collection—it's a community of builders who value privacy and craftsmanship. 
          Whether you're a developer, designer, or content creator, you're welcome here.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="https://github.com/utkarshsorathia3-create/Omni-Suite" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--accent-primary)',
              borderRadius: '10px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
          >
            View on GitHub
          </a>
          <Link 
            href="/contact"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
