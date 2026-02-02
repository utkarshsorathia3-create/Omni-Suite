import Link from 'next/link';
import { Zap, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }} className="animate-fade">
      <div style={{
        width: '80px',
        height: '80px',
        background: 'rgba(139, 92, 246, 0.1)',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        color: 'var(--accent-primary)'
      }}>
        <Zap size={40} fill="currentColor" />
      </div>
      
      <h1 className="font-outfit" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}>
        404
      </h1>
      <h2 className="font-outfit" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        Tool Not Found
      </h2>
      <p style={{ maxWidth: '500px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '3rem' }}>
        The tool or page you're looking for doesn't exist or has been moved to a new workshop. 
        Don't worry, our other tools are ready for you.
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: 'var(--accent-primary)',
          color: 'white',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'transform 0.2s'
        }}>
          <Home size={18} /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
