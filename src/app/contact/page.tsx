import { Metadata } from 'next';
import { Mail, MessageSquare, Github, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the OmniSuite team. Report bugs, request features, or ask questions.',
};

export default function ContactPage() {
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
            <Mail size={24} color="white" />
          </div>
          <h1 className="font-outfit" style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>Contact Us</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          We'd love to hear from you. Choose your preferred way to reach out.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Email Card */}
        <a 
          href="mailto:support@omnisuite.online"
          className="glass-panel"
          style={{ 
            padding: '2rem', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
          }}
        >
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
            <Send size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Email Support</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            For general inquiries, bug reports, or feature requests.
          </p>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>
            support@omnisuite.online
          </p>
        </a>

        {/* GitHub Card */}
        <a 
          href="https://github.com/utkarshsorathia3-create/Omni-Suite/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel"
          style={{ 
            padding: '2rem', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
          }}
        >
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
            <Github size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>GitHub Issues</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Report bugs, request features, or contribute to the project.
          </p>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>
            Open an Issue →
          </p>
        </a>

        {/* Community Card */}
        <div 
          className="glass-panel"
          style={{ 
            padding: '2rem',
            opacity: 0.6
          }}
        >
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
            <MessageSquare size={24} color="var(--accent-primary)" />
          </div>
          <h3 className="font-outfit" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Community Forum</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Coming soon! Join discussions and share tips with other users.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
            Launching Q2 2026
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
            What's the best way to report a bug?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Please use GitHub Issues for bug reports. Include your browser version, steps to reproduce, and any error messages you see.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
            Can I request a new tool?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Absolutely! Email us or open a GitHub issue with your idea. We prioritize tools that benefit the developer community.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
            How quickly will I get a response?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            We aim to respond to all inquiries within 48 hours. Critical bugs are addressed immediately.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
            Can I contribute code?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Yes! OmniSuite is open-source. Check our GitHub repository for contribution guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
