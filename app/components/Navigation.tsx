'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-accent transition-colors">
            SB
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === '/' ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform ${
                pathname === '/' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
            <Link
              href="/about"
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === '/about' ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              About
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform ${
                pathname === '/about' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
            <Link
              href="/work"
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === '/work' ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              Work
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform ${
                pathname === '/work' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
            <Link
              href="/blog"
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === '/blog' ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform ${
                pathname === '/blog' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
            <Link
              href="/shop"
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === '/shop' ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              Shop
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform ${
                pathname === '/shop' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 