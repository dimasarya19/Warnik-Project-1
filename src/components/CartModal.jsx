import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Minus, Plus, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [buyerName, setBuyerName] = React.useState('');
  const [note, setNote] = React.useState('');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (!buyerName) {
      alert('Silakan masukkan nama pembeli.');
      return;
    }

    const waNumber = '6285261328588';
    let message = `*PESANAN WARKOP NIKIKULA*\n`;
    message += `----------------------------\n`;
    message += `👤 Nama: ${buyerName}\n`;
    message += `📅 Tanggal: ${new Date().toLocaleDateString('id-ID')}\n\n`;
    message += `*Daftar Pesanan:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.quantity}x) @ ${formatPrice(item.price)}\n`;
    });

    message += `\n*Total Seluruhnya: ${formatPrice(cartTotal)}*\n`;
    message += `----------------------------\n`;
    if (note) message += `📝 Catatan: ${note}\n`;
    message += `\n_Mohon konfirmasi pesanan saya, Terima kasih!_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-warm-cream shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-white flex justify-between items-center border-b border-stone-200 shadow-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <ShoppingBag size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-black text-ink uppercase tracking-tighter">Keranjang</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400"
              >
                <X size={24} />
              </button>
            </div>

            {/* List Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-20 translate-y-[-10%]">
                  <ShoppingBag size={100} strokeWidth={0.5} className="mb-4 text-ink" />
                  <p className="text-xl font-black uppercase tracking-widest text-ink">Keranjang Kosong</p>
                  <button 
                    onClick={onClose}
                    className="mt-6 text-primary font-black text-xs uppercase tracking-widest underline decoration-2 underline-offset-8"
                  >
                    Mulai Eksplorasi
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="flex gap-4 bg-white p-4 rounded-[2rem] shadow-sm border border-stone-100"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-2xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-ink leading-tight uppercase text-xs tracking-wide">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-300 hover:text-primary transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-primary font-black text-base mt-1">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center gap-3 mt-auto pt-2">
                        <div className="flex items-center bg-stone-50 border border-stone-200 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-stone-200 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-stone-200 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">
                          Total: {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-stone-200 space-y-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-stone-400 tracking-[0.2em] mb-2 block">Nama Pembeli</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan nama Anda..."
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all font-bold text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-stone-400 tracking-[0.2em] mb-2 block">Catatan</label>
                    <textarea 
                      placeholder="Catatan tambahan..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={2}
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-dashed border-stone-200">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-stone-400">Subtotal</span>
                    <span className="text-3xl font-black text-ink">{formatPrice(cartTotal)}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="group w-full bg-secondary text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-secondary/20 hover:bg-primary transition-all duration-300"
                  >
                    Konfirmasi via WhatsApp
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                  <button 
                    onClick={clearCart}
                    className="w-full text-center text-[10px] font-black uppercase tracking-[0.2em] text-stone-300 mt-6 hover:text-primary transition-colors"
                  >
                    Bersihkan Keranjang
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
