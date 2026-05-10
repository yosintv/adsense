import { Globe, Shield, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)] text-xs font-bold mb-6 border border-[var(--color-cyber-blue)]/20">
          SINCE 2024 • THE VOICE OF THE FUTURE
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-sans mb-6 tracking-tight">
          About <span className="text-gradient">YoSinTV Blogs</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We are the premier destination for deep insights into the rapidly evolving landscape of 2026 streaming technology and digital entertainment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="glass-panel p-10 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-cyber-blue)]/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            In a world saturated with content, finding clarity is the ultimate luxury. YoSinTV Blogs was founded with a singular purpose: to provide the most comprehensive, technical, and unbiased analysis of the streaming revolution.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            From decoding AI-driven recommendation engines to reviewing the latest MicroLED hardware, we bridge the gap between high-level tech and your living room experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Users, label: '50K+', sub: 'Subscribers' },
            { icon: Zap, label: '200+', sub: 'Tech Guides' },
            { icon: Globe, label: '100%', sub: 'Global Coverage' },
            { icon: Shield, label: 'Trusted', sub: 'Tech Reviews' }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl text-center border border-white/5 hover:border-white/10 transition-colors">
              <stat.icon className="mx-auto mb-4 text-[var(--color-cyber-blue)]" size={32} />
              <div className="text-2xl font-black text-white">{stat.label}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">Why Trust Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Expert Editorial", text: "Our team consists of industry veterans with decades of experience in broadcasting and software engineering." },
            { title: "Unbiased Reviews", text: "We never accept paid placements. Our hardware reviews are based on rigorous, independent laboratory testing." },
            { title: "Future Focused", text: "While others report on today, we analyze the 5G, 6G, and AI trends that will define tomorrow." }
          ].map((card, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-cyber-green)]">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center glass-panel p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
        <h2 className="text-3xl font-black mb-6">Join the Revolution</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Stay informed with our weekly newsletter featuring exclusive deep-dives that never make it to the public blog.
        </p>
        <button className="px-10 py-4 rounded-2xl bg-white text-black font-black hover:bg-[var(--color-cyber-blue)] hover:text-white transition-all shadow-xl shadow-white/5">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
