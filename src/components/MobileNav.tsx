"use client";

import Link from 'next/link';
import { Home, Newspaper, Info, Mail, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Articles', icon: Newspaper, path: '/blog' },
    { name: 'Search', icon: Search, path: '#' },
    { name: 'About', icon: Info, path: '/about' },
    { name: 'Contact', icon: Mail, path: '/contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <nav className="glass-panel border border-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-around p-2 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-[var(--color-cyber-blue)]/20 text-[var(--color-cyber-blue)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'scale-110' : ''} />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
