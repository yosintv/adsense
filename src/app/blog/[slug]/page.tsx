import { getPostBySlug, getAllPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";
import { ChevronLeft, Clock, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = marked.parse(post.content);

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to articles
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)] text-sm font-bold border border-[var(--color-cyber-blue)]/20 uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black font-sans mb-8 text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 border-y border-white/10 py-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>By YoSinTV Editorial</span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-12 rounded-3xl overflow-hidden glass-panel aspect-video">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div 
          className="prose prose-invert prose-lg max-w-none text-gray-300
            prose-headings:text-white prose-headings:font-black prose-headings:font-sans
            prose-a:text-[var(--color-cyber-blue)] hover:prose-a:text-[var(--color-cyber-green)]
            prose-strong:text-white prose-img:rounded-3xl prose-img:border prose-img:border-white/10
            prose-code:text-[var(--color-cyber-green)] prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        
        <div className="mt-20 p-8 md:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-cyber-blue)] to-[var(--color-cyber-green)]"></div>
          <h3 className="text-2xl font-black mb-4">Enjoying this article?</h3>
          <p className="text-gray-400 mb-8 max-w-lg">
            Join 50,000+ streaming enthusiasts and stay ahead of the curve with our exclusive weekly newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[var(--color-cyber-blue)] outline-none flex-grow transition-all"
            />
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-black hover:bg-[var(--color-cyber-blue)] hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
