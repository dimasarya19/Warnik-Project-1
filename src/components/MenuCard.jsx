import React from 'react';
import { motion } from 'motion/react';
import { Plus, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const MenuCard = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col gap-3 p-4"
    >
      <div className="relative aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-[10px] font-black text-primary shadow-sm">
           {formatPrice(product.price)}
        </div>
      </div>

      <div className="px-2 pb-2 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
           <span className="text-[9px] font-black uppercase tracking-widest text-primary/50">
             {product.category}
           </span>
        </div>
        <h3 className="text-lg font-black text-ink mb-1 group-hover:text-primary transition-colors leading-tight">{product.name}</h3>
        <p className="text-[10px] text-stone-400 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(product)}
            className="w-full bg-stone-50 border border-stone-200 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            + Tambah ke Keranjang
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
