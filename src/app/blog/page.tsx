import { getAllPosts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black font-sans mb-6">Latest <span className="text-gradient">Articles</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Stay informed with our latest insights on streaming technology, home theater setup, and global entertainment trends.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {['All', 'Trends', 'Guides', 'Reviews', 'Cinema', 'Security', 'Sports'].map((cat) => (
            <Link 
              key={cat}
              href={cat === 'All' ? '/blog' : `/blog?category=${cat.toLowerCase()}`}
              className="px-6 py-2 rounded-full glass-panel border border-white/10 text-sm font-bold hover:border-[var(--color-cyber-blue)] hover:text-[var(--color-cyber-blue)] transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <ArticleCard key={post.slug} article={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 glass-panel rounded-3xl">
            <p className="text-gray-400 text-lg">No articles found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
