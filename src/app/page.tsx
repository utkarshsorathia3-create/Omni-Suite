import Link from 'next/link';
import { TOOLS } from "@/config/tools";
import { ArrowUpRight, Zap } from 'lucide-react';

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const filteredTools = q 
    ? TOOLS.filter(t => 
        t.name.toLowerCase().includes(q.toLowerCase()) || 
        t.description.toLowerCase().includes(q.toLowerCase()) ||
        t.category.toLowerCase().includes(q.toLowerCase())
      )
    : TOOLS;

  // Organization Schema for Homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OmniSuite",
    "url": "https://omnisuite.online",
    "logo": "https://omnisuite.online/logo.png",
    "description": "Premium browser-based utility tools for developers, designers, and content creators",
    "sameAs": [
      "https://github.com/utkarshsorathia3-create/Omni-Suite"
    ]
  };

  // WebSite Schema with Search Action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OmniSuite",
    "url": "https://omnisuite.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://omnisuite.online/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <header style={{ marginBottom: '4rem' }} className="animate-fade">
        <h1 className="font-outfit" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Welcome to <span className="text-gradient">OmniSuite</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
          Select a tool from the sidebar or browse the collection below to start your productive session.
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {filteredTools.map((tool, index) => (
          <Link 
            key={tool.slug} 
            href={`/tools/${tool.slug}`}
            className="glass-panel animate-fade"
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column',
              animationDelay: `${index * 0.05}s`,
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '1.5rem'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '10px', 
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <Zap size={20} />
              </div>
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            
            <h3 className="font-outfit" style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {tool.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {tool.description}
            </p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
