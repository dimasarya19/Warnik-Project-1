import React from 'react';
import { motion } from 'motion/react';
import { Info, Leaf, Coffee, Users } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800"
                alt="Warkop NikiKula Interior"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Visual Accents */}
            <div className="absolute -bottom-6 -right-6 cream-surface p-8 rounded-[2.5rem] shadow-xl hidden md:block max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-bamboo rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Leaf size={24} />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-bamboo">Eco Bamboo</span>
              </div>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">Konsep tradisional bernuansa bambu yang menenangkan jiwa.</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">Tentang Kami</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-ink mb-10 leading-[0.9]">
              Merawat Tradisi <br /> <span className="serif-playful text-primary underline decoration-secondary decoration-4 underline-offset-8">Banyumas.</span>
            </h2>

            <div className="cream-surface p-10 rounded-[3rem] border border-stone-200 shadow-sm relative overflow-hidden">
               {/* Decorative Element */}
               <div className="absolute top-0 right-0 p-8 text-stone-100 -mr-4 -mt-4 select-none">
                  <Coffee size={120} strokeWidth={0.5} />
               </div>
               
               <div className="space-y-6 text-stone-700 leading-relaxed text-base relative z-10">
                <motion.p variants={itemVariants}>
                  Warkop <span className="font-black text-primary">NikiKula</span> merupakan unit usaha dari Kopi Mbekayu yang secara khusus berfokus pada penjualan kopi kemasan berkualitas serta menyediakan tempat yang nyaman untuk menikmati kopi secara langsung.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Kami mengusung konsep tradisional bernuansa bambu dengan dominasi warna coklat yang lembut, menciptakan suasana hangat, tenang, dan penuh keakraban. Setiap detail desain dirancang untuk menghadirkan pengalaman ngopi yang autentik dan menenangkan.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Lebih dari sekadar kedai kopi, Warkop NikiKula memiliki misi mulia: mengenalkan serta menumbuhkan kecintaan generasi muda terhadap budaya Banyumas. Melalui cita rasa kopi yang khas, produk unggulan, dan suasana yang kental dengan nilai-nilai lokal, kami berupaya menjadi jembatan antara warisan budaya dan generasi penerus.
                </motion.p>
              </div>
            </div>

            {/* Icon Boxes */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div variants={itemVariants} className="bg-white/80 border border-stone-200 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-red-50 rounded-2xl text-primary"><Coffee size={24} /></div>
                    <span className="font-black text-xs uppercase tracking-widest text-stone-700">Kopi Otentik</span>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white/80 border border-stone-200 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-green-50 rounded-2xl text-bamboo"><Users size={24} /></div>
                    <span className="font-black text-xs uppercase tracking-widest text-stone-700">Ruang Sosial</span>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
