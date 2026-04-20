import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from '../data/menuData';
import MenuCard from './MenuCard';
import { Search } from 'lucide-react';

const categories = ['Semua', 'Niki Kopi', 'Niki Bukan Kopi', 'Niki Cemilan', 'Menu Makanan', 'Toping'];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = useMemo(() => {
    return menuData.filter(item => {
      const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block mb-4">Pilihan Terbaik</span>
            <h2 className="text-5xl md:text-7xl font-black text-ink leading-[0.9]">Nikmati <span className="text-primary serif-playful">Warna</span> <br />Menu Kami.</h2>
          </motion.div>

          {/* Search Bar */}
          <div className="w-full lg:max-w-md relative">
             <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Cari menu favoritmu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-full pl-14 pr-8 py-4 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 transition-all shadow-sm font-bold text-sm text-ink"
                />
             </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-8">
          <div className="flex flex-wrap gap-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 border
                  ${activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-white text-stone-400 border-stone-200 hover:border-stone-300 hover:text-stone-600'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">
               {filteredMenu.length} Menu Tersedia
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} product={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMenu.length === 0 && (
           <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-bold italic">Waduh, menu yang kamu cari belum tersedia nih...</p>
           </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
