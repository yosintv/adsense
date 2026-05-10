import { getAllPosts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import { ArrowRight, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  const featuredArticles = posts.slice(0, 6);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Featured Posts Bento Grid */}
      <section id="featured" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black font-sans uppercase tracking-tighter">Featured <span className="text-gradient">Stories</span></h2>
            <Link href="/blog" className="flex items-center text-sm font-bold text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
              VIEW ALL <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black font-sans uppercase tracking-tighter">Latest <span className="text-gradient">Insights</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.slice(6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/blog" className="inline-flex items-center px-8 py-4 rounded-2xl glass-panel border border-white/10 text-white font-bold hover:bg-white/5 transition-all group">
              Browse Entire Archive <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Topics */}
      <section className="py-20 bg-[var(--color-obsidian-light)] border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-sans mb-12 text-center">Explore Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link href="/blog?category=streaming" className="glass-panel p-6 md:p-8 rounded-2xl group hover:-translate-y-2 transition-transform">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)] flex items-center justify-center mb-4 md:mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-[var(--color-cyber-blue)] transition-colors">Streaming Trends</h3>
              <p className="text-sm md:text-base text-gray-400">Discover the latest algorithms, immersive experiences, and AI innovations.</p>
            </Link>
            
            <Link href="/blog?category=cinema" className="glass-panel p-6 md:p-8 rounded-2xl group hover:-translate-y-2 transition-transform">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--color-cyber-green)]/10 text-[var(--color-cyber-green)] flex items-center justify-center mb-4 md:mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-[var(--color-cyber-green)] transition-colors">Global Cinema</h3>
              <p className="text-sm md:text-base text-gray-400">Dive into the international hits and regional powerhouses breaking boundaries.</p>
            </Link>
            
            <Link href="/blog?category=tech" className="glass-panel p-6 md:p-8 rounded-2xl group hover:-translate-y-2 transition-transform">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 md:mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-purple-400 transition-colors">Tech & Security</h3>
              <p className="text-sm md:text-base text-gray-400">Hardware reviews, connectivity breakthroughs, and protecting your data.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-cyber-blue)] to-transparent opacity-20 absolute top-1/2"></div>
         </div>
        <div className="container mx-auto px-4 relative z-10 max-w-2xl text-center glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold font-sans mb-3 md:mb-4">Stay Ahead of the Stream</h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
            Join 50,000+ subscribers getting the latest updates on streaming tech and industry news.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-cyber-blue)] transition-colors"
              required
            />
            <button type="submit" className="w-full px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-[var(--color-cyber-blue)] hover:text-white transition-all shadow-lg shadow-white/5">
              Subscribe Now
            </button>
          </form>
          <p className="text-[10px] text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}
