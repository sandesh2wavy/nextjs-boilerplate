'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            SB
          </Link>
          <div className="flex items-center space-x-1">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link href="/work" className={`nav-link ${isActive('/work') ? 'active' : ''}`}>
              Work
            </Link>
            <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
              Blog
            </Link>
            <Link href="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 