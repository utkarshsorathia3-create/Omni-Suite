import Link from 'next/link';
import { Github, Mail, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(10, 10, 15, 0.5)',
      backdropFilter: 'blur(20px)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 3rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem'
      }}>
        {/* Brand Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Zap size={18} fill="white" color="white" />
            </div>
            <span className="font-outfit" style={{ fontSize: '1.25rem', fontWeight: 700 }}>OmniSuite</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Premium browser-based utilities for developers, designers, and creators.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>About</Link>
            <Link href="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link>
          </nav>
        </div>

        {/* Tools Section */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Popular Tools</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/tools/json-master" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>JSON Master</Link>
            <Link href="/tools/code-to-image" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Code to Image</Link>
            <Link href="/tools/meta-tag-generator" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>SEO Meta Tags</Link>
            <Link href="/tools/regex-tester" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Regex Tester</Link>
          </nav>
        </div>

        {/* Legal Links */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Terms of Service</Link>
          </nav>
        </div>

        {/* Community Links */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Community</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://github.com/utkarshsorathia3-create/Omni-Suite" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Github size={16} /> GitHub
            </a>
            <Link href="/branding" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>Branding</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem 3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} OmniSuite. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Built with ❤️ for the Developer Community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
