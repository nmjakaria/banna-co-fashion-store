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
      "https://deshibesh.com/cdn/shop/files/high-quality-unique-boutique-designer-panjabi-5757778.jpg?q=80&w=800&auto=format&fit=crop",
      "https://images.pexels.com/photos/19329277/pexels-photo-19329277.jpeg?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 1250,
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
    price: 1320,
    oldPrice: 1500,
    images: [
      "https://images.pexels.com/photos/18344096/pexels-photo-18344096.jpeg?q=80&w=800&auto=format&fit=crop",
      "https://images.pexels.com/photos/36981453/pexels-photo-36981453.jpeg?q=80&w=800&auto=format&fit=crop"
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
    price: 650,
    oldPrice: 800,
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642764873654-9eef0467b342?q=80&w=800&auto=format&fit=crop"
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
    price: 600,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1713881587420-113c1c43e28a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1708531378330-b42fa44a882d?q=80&w=800&auto=format&fit=crop"
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
    price: 550,
    oldPrice: null,
    images: [
      "https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1716541424935-e28adbd63ca3?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 432,
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    isNew: false,
    description: "Constructed from 240gsm combed cotton, this t-shirt offers a structured, drop-shoulder fit that holds its shape all day."
  },
  {
    id: 6,
    name: "Graphic Typography Tee",
    category: "T-Shirt",
    price: 490,
    oldPrice: 650,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 78,
    colors: ["Off-White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    isNew: true,
    description: "Limited edition graphic tee featuring custom BANNA Co. typography. Soft hand-feel print on our signature everyday cotton blank."
  },
  {
    id: 7,
    name: "Merino Wool Knit Polo",
    category: "Polo",
    price: 950,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1711355249709-1733df63e028?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1689214105217-48a71e03281b?q=80&w=800&auto=format&fit=crop",// duplicated intentionally to simulate alternative angle
      "https://images.unsplash.com/photo-1759229874709-a8d0de083b91?q=80&w=800&auto=format&fit=crop" // duplicated intentionally to simulate alternative angle
    ],
    rating: 4.9,
    reviewCount: 34,
    colors: ["Navy", "Gray", "White", "Brown"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "An elevated take on the classic polo. Knit from ultra-fine Merino wool for temperature regulation and a luxurious drape."
  },
  {
    id: 8,
    name: "Pique Cotton Sport Polo",
    category: "Polo",
    price: 1050,
    oldPrice: 1260,
    images: [
      "https://images.pexels.com/photos/7648278/pexels-photo-7648278.jpeg?q=80&w=800&auto=format&fit=crop",
      "https://images.pexels.com/photos/7648388/pexels-photo-7648388.jpeg?q=80&w=800&auto=format&fit=crop",
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
    price: 1100,
    oldPrice: 1400,
    images: [
      "https://images.unsplash.com/photo-1710242350089-65eef7e49364?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627999344883-83852549b823?q=80&w=800&auto=format&fit=crop"
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
    price: 1270,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1770359993283-a2c2f386584e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1772736243289-872f9ac73cf8?q=80&w=800&auto=format&fit=crop"
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
    price: 2800,
    oldPrice: 2350,
    images: [
      "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 88,
    colors: ["Black", "Brown"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description: "Crafted from full-grain leather that will patina beautifully over time. Features a classic snap-tab collar, heavy-duty gunmetal zippers, and a tailored fit."
  },
  {
    id: 12,
    name: "Fleece-Lined Denim Trucker",
    category: "Jacket",
    price: 1300,
    oldPrice: null,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 195,
    colors: ["Indigo", "Washed"],
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    isNew: false,
    description: "Your favorite denim jacket, winterized. Features a warm sherpa fleece lining through the body and collar, with smooth quilted lining in the sleeves for easy layering."
  }
];