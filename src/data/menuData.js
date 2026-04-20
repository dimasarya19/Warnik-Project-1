/**
 * Data Menu Warkop NikiKula
 * Format rapih vertical biar gampang diedit
 */

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  isAvailable: boolean
}

export const menuData: MenuItem[] = [
  // ==========================================
  // NIKI KOPI
  // ==========================================
  {
    id: 'americano',
    name: 'Americano',
    price: 15000,
    category: 'Niki Kopi',
    description: 'Kopi hitam murni dengan cita rasa otentik.',
    image: 'https://ibb.co.com/7xf9zpTQ=400',
    isAvailable: true,
  },
  {
    id: 'kopi-butter',
    name: 'Kopi Butter',
    price: 15000,
    category: 'Niki Kopi',
    description: 'Sensasi gurih mentega berpadu dengan kopi pilihan.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    isAvailable: true,
  },
  {
    id: 'kopi-cokelat',
    name: 'Kopi Cokelat',
    price: 15000,
    category: 'Niki Kopi',
    description: 'Perpaduan manis cokelat dan pahit kopi yang seimbang.',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400',
    isAvailable: true,
  },
  {
    id: 'kopi-susu-gula-aren',
    name: 'Kopi Susu Gula Aren',
    price: 15000,
    category: 'Niki Kopi',
    description: 'Best seller! Manis legit gula aren dan susu creamy.',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400',
    isAvailable: true,
  },
  {
    id: 'kopi-susu-krimi',
    name: 'Kopi Susu Krimi',
    price: 18000,
    category: 'Niki Kopi',
    description: 'Kopi susu dengan tekstur yang sangat lembut dan kental.',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400',
    isAvailable: true,
  },
  {
    id: 'kopi-sanger',
    name: 'Kopi Sanger',
    price: 10000,
    category: 'Niki Kopi',
    description: 'Kopi hitam dengan sedikit susu, nikmat tiada tara.',
    image: 'https://images.unsplash.com/photo-1544787210-2213d2424855?w=400',
    isAvailable: true,
  },
  {
    id: 'kopi-tubruk',
    name: 'Kopi Tubruk',
    price: 10000,
    category: 'Niki Kopi',
    description: 'Kopi seduh tradisional khas Nusantara.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    isAvailable: true,
  },
  {
    id: 'v60',
    name: 'V60',
    price: 15000,
    category: 'Niki Kopi',
    description: 'Teknik manual brew untuk rasa kopi yang lebih bersih.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    isAvailable: true,
  },

  // ==========================================
  // NIKI BUKAN KOPI
  // ==========================================
  {
    id: 'matcha',
    name: 'Matcha',
    price: 18000,
    category: 'Niki Bukan Kopi',
    description: 'Bubuk green tea asli dengan susu segar.',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400', // Fix: ganti dari Google Drive ke Unsplash
    isAvailable: true,
  },
  {
    id: 'leci-tea',
    name: 'Leci Tea',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Teh segar dengan buah leci asli.',
    image: 'https://images.unsplash.com/photo-1541658428464-1e0e8544e311?w=400',
    isAvailable: true,
  },
  {
    id: 'coklat',
    name: 'Coklat',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Minuman cokelat premium yang kaya rasa.',
    image: 'https://images.unsplash.com/photo-1544787210-2213d2424855?w=400',
    isAvailable: true,
  },
  {
    id: 'teh-tarik-ulur',
    name: 'Teh Tarik Ulur',
    price: 13000,
    category: 'Niki Bukan Kopi',
    description: 'Teh susu dengan buih yang melimpah.',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4586d5d7?w=400',
    isAvailable: true,
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Segarnya lemon bercampur dengan teh berkualitas.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400',
    isAvailable: true,
  },
  {
    id: 'bikin-rucuh-mbawang',
    name: 'Bikin Rucuh (Mbawang)',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Minuman tradisional khas dengan rasa unik.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400',
    isAvailable: true,
  },
  {
    id: 'bikin-rucuh-asem-kamal',
    name: 'Bikin Rucuh (Asem Kamal)',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Kesegaran asam kamal yang menyehatkan.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400',
    isAvailable: true,
  },
  {
    id: 'wedang-banteng',
    name: 'Wedang Banteng',
    price: 15000,
    category: 'Niki Bukan Kopi',
    description: 'Minuman jahe hangat dengan rempah rahasia.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=400',
    isAvailable: true,
  },
  {
    id: 'teh-manis',
    name: 'Teh Manis',
    price: 5000,
    category: 'Niki Bukan Kopi',
    description: 'Teh manis standar kesukaan sejuta umat.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400',
    isAvailable: true,
  },
  {
    id: 'teh-tawar',
    name: 'Teh Tawar',
    price: 3500,
    category: 'Niki Bukan Kopi',
    description: 'Teh murni tanpa gula.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400',
    isAvailable: true,
  },
  {
    id: 'air-mineral',
    name: 'Air Mineral',
    price: 5000,
    category: 'Niki Bukan Kopi',
    description: 'Air mineral kemasan dingin/biasa.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400',
    isAvailable: true,
  },

  // ==========================================
  // NIKI CEMILAN
  // ==========================================
  {
    id: 'bakwan',
    name: 'Bakwan',
    price: 10000,
    category: 'Niki Cemilan',
    description: 'Gorengan sayur renyah isi 3-4 pcs.',
    image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=400',
    isAvailable: true,
  },
  {
    id: 'baso-tahu',
    name: 'Baso Tahu',
    price: 10000,
    category: 'Niki Cemilan',
    description: 'Tahu bakso goreng dengan sambal kacang.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400',
    isAvailable: true,
  },
  {
    id: 'churros',
    name: 'Churros',
    price: 12000,
    category: 'Niki Cemilan',
    description: 'Cemilan manis ala Spanyol dengan cocolan cokelat.',
    image: 'https://images.unsplash.com/photo-1571506504933-a22f258c0670?w=400',
    isAvailable: true,
  },
  {
    id: 'roti-bakar-coklat-keju',
    name: 'Roti Bakar Coklat Keju',
    price: 12000,
    category: 'Niki Cemilan',
    description: 'Roti bakar empuk dengan topping melimpah.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400',
    isAvailable: true,
  },
  {
    id: 'roti-bakar-susu-milo',
    name: 'Roti Bakar Susu Milo',
    price: 12000,
    category: 'Niki Cemilan',
    description: 'Varian unik roti bakar rasa Milo.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400',
    isAvailable: true,
  },
  {
    id: 'pisgor-mandi-madu',
    name: 'Pisgor Mandi Madu',
    price: 10000,
    category: 'Niki Cemilan',
    description: 'Pisang goreng manis dengan karamel madu.',
    image: 'https://images.unsplash.com/photo-1591556158230-6f29638971f1?w=400',
    isAvailable: true,
  },
  {
    id: 'kentang-goreng',
    name: 'Kentang Goreng',
    price: 10000,
    category: 'Niki Cemilan',
    description: 'French fries renyah dengan bumbu gurih.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400',
    isAvailable: true,
  },

  // ==========================================
  // MENU MAKANAN
  // ==========================================
  {
    id: 'nasi-telor-sambel-tongkol',
    name: 'Nasi Telor Sambel Tongkol',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Nasi hangat + telor + sambal tongkol pedas.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    isAvailable: true,
  },
  {
    id: 'nasi-telor-sambel-cumi',
    name: 'Nasi Telor Sambel Cumi',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Nasi hangat + telor + sambal cumi gurih.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-nyemek',
    name: 'Nikimi Nyemek',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Mie goreng dengan sedikit kuah yang kental.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-mawut',
    name: 'Nikimi Mawut',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Campuran mie dan nasi goreng khas Warnik.',
    image: 'https://images.unsplash.com/photo-1512058560566-42ce2a57736c?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-goreng-telor',
    name: 'Nikimi Goreng Telor',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Mie goreng spesial dengan tambahan telor.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-kuah-baso',
    name: 'Nikimi Kuah Baso',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Mie kuah segar dengan topping baso.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-rambu',
    name: 'Nikimi Rambu',
    price: 13000,
    category: 'Menu Makanan',
    description: 'Varian mie pedas khas Banyumas.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-telor-mandi',
    name: 'Nikimi Telor Mandi',
    price: 15000,
    category: 'Menu Makanan',
    description: 'Mie kuah banjir dengan telor orak-arik.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    isAvailable: true,
  },
  {
    id: 'nikimi-geprek',
    name: 'Nikimi Geprek',
    price: 13000,
    category: 'Menu Makanan',
    description: 'Mie goreng dengan sambal geprek super pedas.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    isAvailable: true,
  },

  // ==========================================
  // TOPING
  // ==========================================
  {
    id: 'sosis',
    name: 'Sosis',
    price: 5000,
    category: 'Toping',
    description: 'Tambahan sosis goreng/rebus.',
    image: 'https://images.unsplash.com/photo-1541048611057-a9310705a69f?w=400',
    isAvailable: true,
  },
  {
    id: 'bakso',
    name: 'Bakso',
    price: 5000,
    category: 'Toping',
    description: 'Tambahan butiran bakso gurih.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400',
    isAvailable: true,
  },
  {
    id: 'telor-dadar-ceplok',
    name: 'Telor Dadar / Ceplok',
    price: 5000,
    category: 'Toping',
    description: 'Telor tambahan sesuai selera.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
    isAvailable: true,
  },
  {
    id: 'nuget',
    name: 'Nuget',
    price: 5000,
    category: 'Toping',
    description: 'Tambahan nuget ayam renyah.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    isAvailable: true,
  },
]

// Kategori untuk filter
export const categories = [
  'Semua',
  'Niki Kopi',
  'Niki Bukan Kopi',
  'Niki Cemilan',
  'Menu Makanan',
  'Toping',
]
