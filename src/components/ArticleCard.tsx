import Link from 'next/link';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export default function ArticleCard({ article, featured = false }: { article: Article, featured?: boolean }) {
  return (
    <Link href={`/blog/${article.slug}`} className={`group block glass-panel rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:-translate-y-1 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`relative w-full ${featured ? 'h-64 md:h-80' : 'h-48'} bg-[var(--color-obsidian-light)] overflow-hidden`}>
        {/* Placeholder image using gradient for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
           {article.image && (
             <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity" />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-transparent to-transparent opacity-80" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)] border border-[var(--color-cyber-blue)]/20 backdrop-blur-md">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className={`p-4 md:p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center gap-3 text-[10px] md:text-xs text-gray-400 mb-2 md:mb-3 font-mono">
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>{article.readTime}</span>
        </div>
        <h3 className={`font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-cyber-blue)] group-hover:to-[var(--color-cyber-green)] transition-all ${featured ? 'text-xl md:text-3xl mb-3 md:mb-4' : 'text-lg md:text-xl mb-2 md:mb-3'} line-clamp-2`}>
          {article.title}
        </h3>
        <p className={`text-gray-400 line-clamp-2 md:line-clamp-3 ${featured ? 'text-sm md:text-lg' : 'text-xs md:text-sm'}`}>
          {article.excerpt}
        </p>
        
        <div className="mt-4 md:mt-6 flex items-center text-[var(--color-cyber-green)] text-xs md:text-sm font-medium group-hover:translate-x-2 transition-transform">
          Read Article <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}
