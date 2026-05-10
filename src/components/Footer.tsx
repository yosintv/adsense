import Link from 'next/link';
import { Send, Camera, Video, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--color-obsidian-light)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-sans tracking-tighter inline-block mb-4">
              <span className="text-white">YoSinTV</span>
              <span className="text-gradient ml-1">Blogs</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Your premier destination for the future of streaming, entertainment technology, and cord-cutting guides.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyber-blue)] transition-all" aria-label="Twitter">
                <Send size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyber-blue)] transition-all" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyber-blue)] transition-all" aria-label="YouTube">
                <Video size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><Link href="/blog?category=trends" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Streaming Trends</Link></li>
              <li><Link href="/blog?category=guides" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">How-To Guides</Link></li>
              <li><Link href="/blog?category=reviews" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Tech Reviews</Link></li>
              <li><Link href="/blog?category=cinema" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Global Cinema</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/blog?category=security" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Security & Privacy</Link></li>
              <li><Link href="/blog?category=sports" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Sports & Broadcasts</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-500 text-xs">
              &copy; {currentYear} YoSinTV Blogs. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/policies/privacy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy</Link>
              <Link href="/policies/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms</Link>
              <Link href="/policies/cookies" className="text-gray-500 hover:text-white text-xs transition-colors">Cookies</Link>
              <Link href="/policies/disclaimer" className="text-gray-500 hover:text-white text-xs transition-colors">Disclaimer</Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <Mail size={14} /> contact@yosintv.net
          </p>
        </div>
      </div>
    </footer>
  );
}
