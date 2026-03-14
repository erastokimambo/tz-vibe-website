import { Compass, Users, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-[#38000A] to-[#1a0005]">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">The Pulse of Tanzania Nightlife</h2>
          <p className="text-gray-300 md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            TzVibe was born to simplify how you experience the night. From the hottest clubs in Dar to the most exclusive garden weddings in Arusha, we connect you to the best vibes in Tanzania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl flex flex-col items-center text-center hover:border-[#CD1C18]/50 transition-colors">
              <div className="w-14 h-14 bg-[#CD1C18]/10 rounded-2xl flex items-center justify-center text-[#CD1C18] mb-6">
                 <Compass size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discover</h3>
              <p className="text-gray-400 font-medium">Curated venues and hidden gems across the country.</p>
           </div>
           
           <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl flex flex-col items-center text-center hover:border-[#CD1C18]/50 transition-colors">
              <div className="w-14 h-14 bg-[#CD1C18]/10 rounded-2xl flex items-center justify-center text-[#CD1C18] mb-6">
                 <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
              <p className="text-gray-400 font-medium">Follow your favorite DJs and track their live gigs tonight.</p>
           </div>

           <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl flex flex-col items-center text-center hover:border-[#CD1C18]/50 transition-colors">
              <div className="w-14 h-14 bg-[#CD1C18]/10 rounded-2xl flex items-center justify-center text-[#CD1C18] mb-6">
                 <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Simplify</h3>
              <p className="text-gray-400 font-medium">Instant RSVPs and direct Bolt rides to the venue.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
