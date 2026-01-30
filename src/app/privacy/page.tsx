import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how OmniSuite protects your privacy. We process all data locally in your browser with zero server-side storage.',
};

export default function PrivacyPage() {
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
            <Shield size={24} color="white" />
          </div>
          <h1 className="font-outfit" style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Eye size={24} color="var(--accent-primary)" />
            Our Privacy Commitment
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            At OmniSuite, your privacy is our top priority. Unlike traditional web applications, all data processing happens 
            <strong> entirely in your browser</strong>. We never upload, store, or transmit your content to our servers.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Database size={24} color="var(--accent-primary)" />
            Data We Collect
          </h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>1. Analytics Data (via Google Analytics)</h3>
            <p>We use Google Analytics to understand how users interact with our platform. This includes:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Page views and navigation patterns</li>
              <li>Device type and browser information</li>
              <li>Geographic location (country/city level)</li>
              <li>Session duration and bounce rates</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Local Storage</h3>
            <p>Some tools may use your browser's local storage to save preferences or recent inputs. This data:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Never leaves your device</li>
              <li>Can be cleared at any time via browser settings</li>
              <li>Is not accessible to us or any third party</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. What We DON'T Collect</h3>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Your code snippets, JSON data, or any tool inputs</li>
              <li>Personal identification information (name, email, etc.)</li>
              <li>Payment information (all tools are free)</li>
              <li>IP addresses or precise geolocation</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Cookie size={24} color="var(--accent-primary)" />
            Cookies & Tracking
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            We use cookies solely for Google Analytics. You can disable analytics tracking by:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <li>Using browser extensions like uBlock Origin</li>
            <li>Enabling "Do Not Track" in your browser</li>
            <li>Blocking third-party cookies</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem' }}>
            For more details, see our <Link href="/cookies" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Cookie Policy</Link>.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Lock size={24} color="var(--accent-primary)" />
            Your Rights (GDPR Compliance)
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Under GDPR and similar privacy laws, you have the right to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <li><strong>Access:</strong> Request what data we have (which is minimal analytics only)</li>
            <li><strong>Deletion:</strong> Request deletion of your analytics profile</li>
            <li><strong>Opt-Out:</strong> Disable tracking via browser settings</li>
            <li><strong>Portability:</strong> Not applicable as we don't store personal data</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            If you have questions about this Privacy Policy, please <Link href="/contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>contact us</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
