"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { 
  Search, 
  Terminal, 
  Palette, 
  Layout, 
  Clock, 
  Zap, 
  ChevronRight,
  Shield,
  Layers,
  Menu,
  X
} from 'lucide-react';
import { TOOLS, Tool } from '@/config/tools';
import styles from './Sidebar.module.css';

const categoryIcons = {
  developer: <Terminal size={18} />,
  design: <Palette size={18} />,
  content: <Layout size={18} />,
  productivity: <Clock size={18} />,
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Close sidebar on route change for mobile
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    
    // If we have a term, ensure we are on the home page to see global results
    if (term && pathname !== '/') {
      router.push(`/?${params.toString()}`);
    } else {
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['developer', 'design', 'content', 'productivity'] as const;

  return (
    <>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <Link href="/" className={styles.logoArea} style={{ marginBottom: 0 }}>
          <div className={styles.logoIcon} style={{ width: 32, height: 32 }}>
            <Zap size={18} fill="currentColor" />
          </div>
          <span className={styles.logoText + " font-outfit"} style={{ fontSize: '1.1rem' }}>OMNISUITE</span>
        </Link>
        <button 
          className={styles.menuButton} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Go to homepage">
            <div className={styles.logoArea} style={{ marginBottom: 0 }}>
              <div className={styles.logoIcon}>
                <Zap size={22} fill="currentColor" />
              </div>
              <span className={styles.logoText + " font-outfit"}>OMNISUITE</span>
            </div>
          </Link>
          <button 
            className={styles.menuButton} 
            onClick={() => setIsOpen(false)}
            style={{ display: isOpen ? 'flex' : 'none' }}
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={16} />
          <input 
            ref={searchInputRef}
            type="text" 
            placeholder="Search tools..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearch}
            aria-label="Search all tools"
          />
          <div className={styles.searchShortcut}>
            <span>{typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl+K'}</span>
          </div>
        </div>

        <nav className={styles.navSection}>
          {categories.map(category => {
            const categoryTools = filteredTools.filter(t => t.category === category);
            if (categoryTools.length === 0) return null;

            return (
              <div key={category}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                {categoryTools.map(tool => (
                  <Link 
                    key={tool.slug} 
                    href={`/tools/${tool.slug}`}
                    className={`${styles.toolLink} ${pathname === `/tools/${tool.slug}` ? styles.active : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {categoryIcons[category]}
                    <span>{tool.name}</span>
                  </Link>
                ))}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 95
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
