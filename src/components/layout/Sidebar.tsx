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
  Layers
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
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const searchInputRef = useRef<HTMLInputElement>(null);

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
    <aside className={styles.sidebar}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <Zap size={22} fill="currentColor" />
          </div>
          <span className={styles.logoText + " font-outfit"}>OMNISUITE</span>
        </div>
      </Link>

      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} size={16} />
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search tools..." 
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearch}
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
  );
};

export default Sidebar;
