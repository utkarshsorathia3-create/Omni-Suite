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
    "logo": "https://omnisuite.online/icon.png",
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
    <div className="tool-container">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <header style={{ marginBottom: '3rem' }} className="animate-fade">
        <h1 className="font-outfit tool-title" style={{ fontWeight: 800 }}>
          Welcome to <span className="text-gradient">OmniSuite</span>
        </h1>
        <p className="tool-description" style={{ textAlign: 'left', margin: '0' }}>
          Select a tool from the sidebar or browse the collection below to start your productive session.
        </p>
      </header>

      <div className="responsive-grid">
        {filteredTools.map((tool, index) => (
          <Link 
            key={tool.slug} 
            href={`/tools/${tool.slug}`}
            className="glass-card animate-fade"
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column',
              animationDelay: `${index * 0.05}s`,
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'var(--transition-smooth)'
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
