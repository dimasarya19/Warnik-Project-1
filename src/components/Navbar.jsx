import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = ({ onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Lokasi', href: '#location' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled ? 'bg-warm-cream/90 backdrop-blur-xl border-b border-stone-300 shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
          <div className="relative">
            <motion.div
              src="C:\Users\user\Downloads\WhatsApp Image 2026-04-07 at 09.25.50.jpeg
              alt="WARKOP NIKIKULA"
              className="w-12 h-12 object-contain"
           >
      
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black leading-tight tracking-tighter text-xl",
              isScrolled ? "text-ink" : "text-white"
            )}>
              WARKOP <span className="text-primary">NIKIKULA</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold text-sm tracking-wide transition-colors hover:text-primary",
                isScrolled ? "text-stone-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCart}
              className={cn(
                "relative p-3 rounded-full transition-all bg-white shadow-sm border border-stone-200",
                "text-primary"
              )}
            >
              <ShoppingCart size={18} strokeWidth={2.5} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button className="bg-secondary text-white px-6 py-2 rounded-full font-black text-sm shadow-md hover:scale-105 transition-transform">
              Pesan Sekarang
            </button>
          </div>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className={cn(
              "relative p-2 rounded-full",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B60404] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-[#B60404] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/6285261328588"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold mt-2"
              >
                <MessageCircle size={20} />
                WhatsApp Pesan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
