import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import CartModal from '../components/CartModal';
import { motion } from 'motion/react';
import { MapPin, Instagram, Clock, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-[#B60404] selection:text-white">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        
        {/* Location Section */}
        <section id="location" className="py-24 bg-white/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-stone-100">
               {/* Content */}
               <div className="p-10 lg:p-20 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[2px] bg-primary"></span>
                    <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">Lokasi Kami</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-ink mb-12 leading-[0.9]">Rumah Bambu di <br /> <span className="serif-playful text-secondary">Purwokerto.</span></h2>
                  
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-warm-cream rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h4 className="font-black text-ink text-xs uppercase tracking-widest mb-1">Alamat Utama</h4>
                        <p className="text-stone-500 font-medium leading-relaxed">Gang Volly, Mangunjaya, Kec. Purwokerto Timur, Jawa Tengah</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-warm-cream rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h4 className="font-black text-ink text-xs uppercase tracking-widest mb-1">Jam Operasional</h4>
                        <p className="text-stone-500 font-medium leading-relaxed">Setiap Hari (11:00 - 01:00)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 flex flex-col sm:flex-row gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://maps.app.goo.gl/iRRXFdFZanbME8Qg8"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20"
                    >
                      Buka Google Maps
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://instagram.com/warkopnikikula"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-white border border-stone-200 text-ink px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-sm"
                    >
                      <Instagram size={18} className="text-primary" />
                      @warkopnikikula
                    </motion.a>
                  </div>
               </div>
               
               {/* Map Placeholder/Visual */}
               <div className="lg:w-1/2 h-[500px] lg:h-auto relative bg-stone-100 p-8">
                  <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-inner border-4 border-white">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.402447470654!2d109.2551523!3d-7.4206583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65596489379669%3A0xe9f7957e8bece21!2sWarkop%20NikiKula!5e0!3m2!1sid!2sid!4v1713512345678!5m2!1sid!2sid" 
                      className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-2xl italic font-serif">W</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tighter leading-tight">WARKOP <span className="text-primary">NIKIKULA</span></span>
                  <span className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase">Est. 2024</span>
                </div>
              </div>
              <p className="text-white/40 text-xs font-medium max-w-xs leading-relaxed">
                Menjaga warisan budaya Banyumas melalui seduhan kopi terbaik dan suasana bambu yang hangat.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-2">Navigasi</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-xs font-black uppercase tracking-widest">
                <a href="#home" className="hover:text-primary transition-colors">Beranda</a>
                <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
                <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
                <a href="#location" className="hover:text-primary transition-colors">Lokasi</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><MessageCircle size={18} /></a>
              </div>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
                © 2024 WARKOP NIKIKULA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/62895386934881"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200 animate-bounce"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -left-2 bg-[#B60404] text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap hidden md:block">Pesan Yuk!</span>
      </motion.a>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Home;
