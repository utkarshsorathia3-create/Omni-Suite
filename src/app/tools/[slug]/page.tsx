import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOOLS } from '@/config/tools';
import { TOOL_COMPONENTS } from '@/components/tools/ToolRegistry';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) return {};

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.keywords.join(', '),
    alternates: {
      canonical: `/tools/${slug}`,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      type: 'website',
      url: `/tools/${slug}`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = TOOL_COMPONENTS[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": tool.category === 'developer' ? 'DeveloperTool' : 'MultimediaApplication',
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="container-padding animate-fade" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
        <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dashboard</Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{tool.name}</span>
      </nav>

      <header style={{ marginBottom: '3.5rem' }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '0.4rem 1rem', 
          background: 'rgba(139, 92, 246, 0.1)', 
          color: 'var(--accent-primary)',
          borderRadius: '100px',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
          border: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
          {tool.category} Professional
        </div>
        <h1 className="font-outfit text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
          {tool.name}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
          {tool.description}
        </p>
      </header>

      <section style={{ minHeight: '600px', marginBottom: '6rem' }}>
        {ToolComponent ? (
          <ToolComponent />
        ) : (
          <div className="glass-panel" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
            <h2 style={{ opacity: 0.5, fontSize: '1.5rem' }}>Initializing Studio Interface...</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>This experimental tool is currently being optimized for high performance.</p>
          </div>
        )}
      </section>

      {/* SEO Content Section */}
      <section style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 className="font-outfit" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Why use {tool.name}?</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              In a digital-first world, efficiency is everything. Our {tool.name} provides a seamless, 
              local-first experience. No data is sent to our servers, ensuring 100% privacy and blazing-fast performance 
              for all your {tool.category} needs.
            </p>
          </div>
          <div>
            <h2 className="font-outfit" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Key Features</h2>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.2rem' }}>
              <li>Instant Browser-Based Processing</li>
              <li>Privacy-Focused (No Data Collection)</li>
              <li>Premium Glassmorphic Interface</li>
              <li>SEO Optimized Output</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
