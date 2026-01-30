import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, Ban, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using OmniSuite. Free, open-source utilities with no warranties or guarantees.',
};

export default function TermsPage() {
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
            <FileText size={24} color="white" />
          </div>
          <h1 className="font-outfit" style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>Terms of Service</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            By accessing and using OmniSuite ("the Service"), you accept and agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Scale size={24} color="var(--accent-primary)" />
            2. Use License
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            OmniSuite grants you a personal, non-exclusive, non-transferable license to use the Service for lawful purposes. You may:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>Use all tools for personal or commercial projects</li>
            <li>Process unlimited data through the browser-based tools</li>
            <li>Share links to the Service with others</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Ban size={24} color="var(--accent-primary)" />
            3. Prohibited Uses
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            You agree NOT to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>Attempt to reverse-engineer, decompile, or hack the Service</li>
            <li>Use automated tools (bots, scrapers) to overload our infrastructure</li>
            <li>Redistribute the Service as your own product</li>
            <li>Use the Service for illegal activities or malicious purposes</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertTriangle size={24} color="var(--accent-primary)" />
            4. Disclaimer of Warranties
          </h2>
          <div style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
              <strong>IMPORTANT:</strong> The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, 
              either express or implied, including but not limited to:
            </p>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>Accuracy, reliability, or correctness of tool outputs</li>
            <li>Uninterrupted or error-free operation</li>
            <li>Fitness for a particular purpose</li>
            <li>Security or freedom from viruses</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem' }}>
            You use the Service at your own risk. Always verify critical outputs independently.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            OmniSuite and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your use or inability to use the Service, including but not limited to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '0.5rem' }}>
            <li>Loss of data or work product</li>
            <li>Business interruption</li>
            <li>Loss of profits or revenue</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>6. Service Availability</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted access. The Service may be temporarily 
            unavailable due to maintenance, updates, or circumstances beyond our control.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>7. Privacy</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Your use of the Service is also governed by our <Link href="/privacy" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Privacy Policy</Link>. 
            Please review it to understand how we handle data.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>8. Changes to Terms</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
            Your continued use of the Service constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>9. Contact</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Questions about these Terms? <Link href="/contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Contact us</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
