export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  name: string;
  location: string;
  initial: string;
}

export interface Activity {
  id: string;
  season: string;
  seasonDisplay: string;
  icon: string;
  color: string;
  activities: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const rooms: Room[] = [
  {
    id: "mountain-view",
    name: "Mountain View Room",
    description: "Wake up to breathtaking views of the Raldang peak from these spacious rooms featuring traditional Kinnauri décor and modern amenities.",
    amenities: ["Mountain View", "Private Bathroom", "Breakfast Included"],
    price: "₹3,500/night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Perfect for families, this spacious suite offers comfortable beds, a sitting area, and a private balcony overlooking our apple orchard.",
    amenities: ["Orchard View", "Private Balcony", "Fits 4 People"],
    price: "₹5,000/night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "heritage-cottage",
    name: "Heritage Cottage",
    description: "Experience authentic Kinnauri living in our standalone cottage with traditional architecture, modern amenities, and complete privacy.",
    amenities: ["Private Cottage", "Fireplace", "Garden Access"],
    price: "₹6,500/night",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Our stay at Kinnaur Valley Homestay was truly magical. The views of Raldang peak from our room were breathtaking, the home-cooked meals were incredibly delicious, and the warmth of our hosts made us feel like family. Walking through the apple orchard and learning about local traditions was a highlight of our Himachal trip.",
    name: "Aman & Priya",
    location: "Delhi, India",
    initial: "A"
  },
  {
    id: "2",
    text: "The apple orchard experience was unforgettable! We visited during harvest season and got to pick our own apples. The hosts prepared special apple desserts for us and taught us traditional recipes. A perfect authentic Himachali experience.",
    name: "Sarah & John",
    location: "London, UK",
    initial: "S"
  },
  {
    id: "3",
    text: "This homestay is a hidden gem. The perfect balance of traditional mountain living with modern comforts. The family's knowledge of local treks and spots made our exploration of Kinnaur and route to Spiti much more meaningful.",
    name: "Raj Sharma",
    location: "Mumbai, India",
    initial: "R"
  }
];

export const activities: Activity[] = [
  {
    id: "spring",
    season: "spring",
    seasonDisplay: "Spring (Mar-May)",
    icon: "seedling",
    color: "blue",
    activities: [
      "Apple blossom viewing and orchard walks",
      "Bird watching as migratory birds return",
      "Participate in local spring harvest festivals",
      "Guided nature walks to see wildflowers"
    ]
  },
  {
    id: "summer",
    season: "summer",
    seasonDisplay: "Summer (Jun-Aug)",
    icon: "sun",
    color: "red",
    activities: [
      "Trekking to nearby peaks and valleys",
      "River rafting in Sutlej river",
      "Visits to ancient monasteries and temples",
      "Picnics by mountain streams and waterfalls"
    ]
  },
  {
    id: "autumn",
    season: "autumn",
    seasonDisplay: "Autumn (Sep-Nov)",
    icon: "leaf",
    color: "earth",
    activities: [
      "Apple harvesting experience",
      "Traditional apple cider making",
      "Photography tours for fall colors",
      "Local handicraft workshops"
    ]
  },
  {
    id: "winter",
    season: "winter",
    seasonDisplay: "Winter (Dec-Feb)",
    icon: "snowflake",
    color: "pine",
    activities: [
      "Snow trekking and snowshoeing",
      "Traditional Kinnauri winter festivals",
      "Cooking classes for winter specialties",
      "Bonfire evenings with local folklore"
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Kinnaur Valley Panorama"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Homestay Exterior"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Apple Orchard in Spring"
  },
  {
    id: "4",
    src: "https://pixabay.com/get/g013420bcbdb71f86f48b80969185250acbd1b0b6755289d65c6ec7ea3868d6ca969c322fe46fb104fd6835cfb6b510f332e67051bfb46c94ada689c4012e4139_1280.jpg",
    alt: "Kinnaur Apples"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Cozy Room Interior"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Raldang Peak at Sunset"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Traditional Himachali Cuisine"
  },
  {
    id: "8",
    src: "https://pixabay.com/get/g1c27eb7b70849e7be20bbd0e6b97c4960acb6d9fa5ad07c3c181903a08852d2248dbd944e6bee808135789e601cab1bf2a7782e94dbf758632819715fbad7af4_1280.jpg",
    alt: "Gateway to Spiti Valley"
  }
];
