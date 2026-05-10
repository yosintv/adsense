import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-sans tracking-tighter">
          <span className="text-white">YoSinTV</span>
          <span className="text-gradient ml-1">Blogs</span>
        </Link>
        
        <nav className="hidden lg:flex gap-6">
          <Link href="/blog?category=trends" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Trends</Link>
          <Link href="/blog?category=guides" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Guides</Link>
          <Link href="/blog?category=reviews" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Reviews</Link>
          <Link href="/blog?category=cinema" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Cinema</Link>
          <Link href="/blog?category=security" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Security</Link>
          <Link href="/blog?category=sports" className="text-xs font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors uppercase tracking-wider">Sports</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-300 hover:text-[var(--color-cyber-green)] transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
