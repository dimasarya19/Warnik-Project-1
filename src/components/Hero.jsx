import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920"
          alt="Warkop Bamboo Vibe"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B60404]/90 via-[#B60404]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-white text-[10px] font-black rounded-full mb-6 tracking-[0.2em] uppercase">
              EST. 2024 • PURWOKERTO
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6">
              Hidup penuh <br />
              <span className="text-secondary serif-playful">warna.</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-semibold italic">
              “Karena hidup penuh dengan warna”
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="group flex items-center justify-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                Eksplor Menu
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/62885261328588"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-primary border border-white/20 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/80 transition-all transform hover:scale-105 active:scale-95"
              >
                Pesan Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Decor Element */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="w-48 h-48 border-4 border-[#F79327]/30 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 bg-[#F79327]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#F79327] font-black text-center p-4">
              KOPI <br /> MBEKAYU
          </div>
        </div>
      </motion.div>

      {/* Floating Accent */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#F5EDE3] to-transparent z-20" />
    </section>
  );
};

export default Hero;
