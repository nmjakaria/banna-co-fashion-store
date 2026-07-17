export const categories = [
  "All",
  "Panjabi",
  "Shirt",
  "T-Shirt",
  "Polo",
  "Kurta",
  "Jacket"
];

export const products = [
  {
    id: 1,
    name: "Midnight Onyx Silk Panjabi",
    category: "Panjabi",
    price: 120.00,
    oldPrice: 150.00,
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629884518719-743fc55c82db?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 124,
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "A premium silk blend Panjabi designed for evening wear. Features subtle embroidery around the collar and a tailored fit that blends traditional elegance with modern minimalism."
  },
  {
    id: 2,
    name: "Classic Ivory Cotton Panjabi",
    category: "Panjabi",
    price: 85.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1580526118228-444f2d348a07?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610444312674-633b375f46b4?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 89,
    colors: ["White", "Cream"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    isNew: false,
    description: "Breathable 100% organic cotton Panjabi perfect for daytime events. Features a lightweight feel, minimalist button detailing, and a relaxed silhouette."
  },
  {
    id: 3,
    name: "Oxford Button-Down Shirt",
    category: "Shirt",
    price: 65.00,
    oldPrice: 80.00,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810316428-56cb8a4a7ab5?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 210,
    colors: ["Light Blue", "White"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: false,
    description: "The essential Oxford shirt. Cut from durable, textured cotton that softens with every wash. A versatile staple for both office and weekend wear."
  },
  {
    id: 4,
    name: "Relaxed Linen Camp Shirt",
    category: "Shirt",
    price: 75.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1573382767087-2510255869a8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbea68cb?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 56,
    colors: ["Olive", "Beige", "Rust"],
    sizes: ["M", "L", "XL"],
    inStock: false,
    isNew: true,
    description: "Breezy linen camp-collar shirt meant for high summer. Garment-dyed for a rich, lived-in color with a boxy, modern drape."
  },
  {
    id: 5,
    name: "Heavyweight Boxy T-Shirt",
    category: "T-Shirt",
    price: 35.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 432,
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: false,
    description: "Constructed from 240gsm combed cotton, this t-shirt offers a structured, drop-shoulder fit that holds its shape all day."
  },
  {
    id: 6,
    name: "Graphic Typography Tee",
    category: "T-Shirt",
    price: 40.00,
    oldPrice: 50.00,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 78,
    colors: ["Off-White"],
    sizes: ["S", "M"],
    inStock: true,
    isNew: true,
    description: "Limited edition graphic tee featuring custom BANNA Co. typography. Soft hand-feel print on our signature everyday cotton blank."
  },
  {
    id: 7,
    name: "Merino Wool Knit Polo",
    category: "Polo",
    price: 95.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e222ee5b3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586363104862-3a5e222ee5b3?q=80&w=800&auto=format&fit=crop" // duplicated intentionally to simulate alternative angle
    ],
    rating: 4.9,
    reviewCount: 34,
    colors: ["Navy", "Forest Green"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "An elevated take on the classic polo. Knit from ultra-fine Merino wool for temperature regulation and a luxurious drape."
  },
  {
    id: 8,
    name: "Pique Cotton Sport Polo",
    category: "Polo",
    price: 45.00,
    oldPrice: 60.00,
    images: [
      "https://images.unsplash.com/photo-1574676185802-bd93e2b51206?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.4,
    reviewCount: 156,
    colors: ["White", "Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    isNew: false,
    description: "The everyday polo. Made with breathable pique cotton mesh, featuring a classic two-button placket and ribbed collar."
  },
  {
    id: 9,
    name: "Embroidered Festival Kurta",
    category: "Kurta",
    price: 110.00,
    oldPrice: 140.00,
    images: [
      "https://images.unsplash.com/photo-1664188741306-03c706d8a39b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733958-d25e07fac04f?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 62,
    colors: ["Mustard", "Teal"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "A striking festive piece featuring intricate tonal embroidery on the chest and cuffs. Cut from a rich viscose-blend fabric for a subtle sheen."
  },
  {
    id: 10,
    name: "Minimalist Daily Kurta",
    category: "Kurta",
    price: 70.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 112,
    colors: ["Earth Brown", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: false,
    description: "Designed for comfort and daily wear. This mid-length kurta features a mandarin collar, hidden side pockets, and a clean, straight hem."
  },
  {
    id: 11,
    name: "Café Racer Leather Jacket",
    category: "Jacket",
    price: 280.00,
    oldPrice: 350.00,
    images: [
      "https://images.unsplash.com/photo-1551028719-012574f40187?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 88,
    colors: ["Black", "Vintage Brown"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "Crafted from full-grain leather that will patina beautifully over time. Features a classic snap-tab collar, heavy-duty gunmetal zippers, and a tailored fit."
  },
  {
    id: 12,
    name: "Fleece-Lined Denim Trucker",
    category: "Jacket",
    price: 130.00,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 195,
    colors: ["Washed Indigo"],
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    isNew: false,
    description: "Your favorite denim jacket, winterized. Features a warm sherpa fleece lining through the body and collar, with smooth quilted lining in the sleeves for easy layering."
  }
];