import { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, ToggleLeft, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about the cookies used by OmniSuite and how to control them.',
};

export default function CookiesPage() {
  return (
    <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }} className="animate-fade">
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Cookie size={24} color="white" />
          </div>
          <h1 className="font-outfit" style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>Cookie Policy</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Info size={24} color="var(--accent-primary)" />
            What Are Cookies?
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Cookies are small text files stored on your device by your web browser. They help websites remember your preferences 
            and understand how you interact with the site.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Cookies We Use</h2>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>1. Analytics Cookies (Google Analytics)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              <strong>Purpose:</strong> Track page views, session duration, and user behavior to improve the Service.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              <strong>Duration:</strong> Up to 2 years
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <strong>Third Party:</strong> Google LLC
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>2. Local Storage (Browser-Based)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              <strong>Purpose:</strong> Save your tool preferences and recent inputs locally on your device.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
              <strong>Duration:</strong> Until manually cleared
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <strong>Note:</strong> This data never leaves your device and is not accessible to us.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Cookies We DON'T Use</h2>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>Advertising or tracking cookies</li>
            <li>Social media cookies</li>
            <li>Third-party marketing cookies</li>
            <li>Authentication cookies (we don't have user accounts)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ToggleLeft size={24} color="var(--accent-primary)" />
            How to Control Cookies
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            You have full control over cookies. Here's how to manage them:
          </p>

          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Browser Settings</h3>
            <p>Most browsers allow you to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies after each session</li>
              <li>View and delete existing cookies</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Opt-Out of Google Analytics</h3>
            <p>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Google Analytics Opt-out Browser Add-on</a>.</p>

            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Use Privacy Extensions</h3>
            <p>Browser extensions like uBlock Origin, Privacy Badger, or Ghostery can block analytics cookies automatically.</p>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Impact of Disabling Cookies</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Disabling analytics cookies will not affect the functionality of OmniSuite tools. All tools will continue to work perfectly 
            since they process data locally in your browser.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Questions?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            For more information, see our <Link href="/privacy" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Privacy Policy</Link> or <Link href="/contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>contact us</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
