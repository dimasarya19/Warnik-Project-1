# Warkop NikiKula Website

Website resmi **Warkop NikiKula** — Warung kopi dengan nuansa bambu tradisional yang modern dan cozy di Purwokerto.

## ✨ Fitur Utama
- **Katalog Menu Lengkap**: Terbagi dalam kategori (Kopi, Bukan Kopi, Cemilan, Makanan, Toping).
- **Sistem Keranjang**: Tambah, hapus, dan atur jumlah pesanan dengan mudah.
- **Integrasi WhatsApp**: Pesanan langsung diteruskan ke WhatsApp admin dengan format pesan yang rapi.
- **Responsif & Animatif**: Dioptimalkan untuk perangkat mobile dengan animasi yang halus menggunakan Framer Motion.

## 🛠️ Teknologi yang Digunakan
- **React 18** (Vite)
- **Tailwind CSS 4** (Styling)
- **Framer Motion** (Animasi UI/UX)
- **Lucide React** (Ikon)
- **React Context API** (State Management)

## 🚀 Cara Menjalankan Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Menjalankan Development Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

3. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

## ⚙️ Kustomisasi

### Mengganti Nomor WhatsApp
Buka file `src/components/CartModal.jsx` dan `src/pages/Home.jsx`, lalu cari dan ganti string nomor `62895386934881` dengan nomor WhatsApp Anda (Gunakan format kode negara tanpa '+', contoh: `628123456789`).

### Menambah Foto Produk Sendiri
Ganti URL gambar pada `src/data/menuData.js` dengan link gambar produk Anda atau letakkan file gambar di folder `public/` dan panggil dengan path relatif (contoh: `/images/kopi.jpg`).

## 📦 Cara Deploy ke Vercel

1. **Hubungkan ke GitHub**: Upload project ini ke repository GitHub.
2. **Login ke Vercel**: Masuk ke [Vercel Dashboard](https://vercel.com/dashboard).
3. **Impor Project**: Pilih repository GitHub tadi.
4. **Konfigurasi**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Klik tombol `Deploy`.

---
*Dibuat dengan ❤️ untuk Warkop NikiKula.*
