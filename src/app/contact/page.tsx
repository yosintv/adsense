import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black font-sans mb-6 tracking-tight">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a partnership proposal, a technical question, or just want to talk about the future of cinema? We are here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-2 glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Send a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:bg-white/10 transition-all" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
              <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:bg-white/10 transition-all" placeholder="name@company.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:bg-white/10 transition-all appearance-none">
                <option className="bg-black">General Inquiry</option>
                <option className="bg-black">Partnership Opportunity</option>
                <option className="bg-black">Technical Support</option>
                <option className="bg-black">Media/Press</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
              <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:bg-white/10 transition-all resize-none" placeholder="Tell us what's on your mind..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="button" className="w-full md:w-auto px-12 py-5 rounded-2xl bg-white text-black font-black hover:bg-[var(--color-cyber-blue)] hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="space-y-6">
          {[
            { icon: Mail, title: "Email Us", info: "contact@yosintv.net", color: "blue" },
            { icon: Phone, title: "Call Us", info: "+1 (888) 2026-YOSIN", color: "green" },
            { icon: MapPin, title: "Headquarters", info: "101 Cyber Ave, Neo-Tokyo, JP", color: "purple" },
            { icon: MessageSquare, title: "Live Chat", info: "Average Response: 5 min", color: "blue" }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-white/20 transition-all">
              <div className={`p-4 rounded-2xl bg-white/5 text-white group-hover:text-[var(--color-cyber-${item.color})] transition-colors`}>
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">{item.title}</h3>
                <p className="text-sm font-bold text-white">{item.info}</p>
              </div>
            </div>
          ))}

          <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-[var(--color-cyber-blue)]/5 to-transparent">
            <h3 className="text-lg font-bold text-white mb-4">Follow the Future</h3>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all text-xs font-bold">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
