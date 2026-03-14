import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#1a0005]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center tracking-tight">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <a 
             href="mailto:contact@tzvibe.co.tz"
             className="group bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-[#CD1C18]/50 transition-all duration-300"
           >
             <div className="w-16 h-16 bg-[#CD1C18] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Mail size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
             <p className="text-gray-300 font-medium text-lg">contact@tzvibe.co.tz</p>
           </a>

           <a 
             href="https://wa.me/255652040391" target="_blank" rel="noopener noreferrer"
             className="group bg-[#25D366]/5 border border-[#25D366]/20 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300"
           >
             <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                <Phone size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">WhatsApp / Call</h3>
             <p className="text-gray-300 font-medium text-lg">+255 652 040 391</p>
           </a>
        </div>
      </div>
    </section>
  );
}
