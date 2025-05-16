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

export interface TransportOption {
  id: string;
  from: string;
  icon: string;
  color: string;
  options: TransportDetail[];
}

export interface TransportDetail {
  mode: string;
  duration: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  fullSize: string;
}

export const rooms: Room[] = [
  {
    id: "mountain-view",
    name: "Mountain Balcony Room",
    description: "Wake up to breathtaking panoramic views of the Raldang peak from your private balcony. These spacious rooms feature traditional Kinnauri décor and modern amenities for a comfortable mountain stay.",
    amenities: ["Panoramic Mountain View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker"],
    price: "₹4,500/night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "garden-view",
    name: "Garden View Room",
    description: "Comfortable rooms with a private balcony overlooking our peaceful garden and apple orchard. Enjoy the tranquil atmosphere with partial mountain views and cozy Himachali interior design.",
    amenities: ["Garden View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker"],
    price: "₹3,500/night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
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

export const transportOptions: TransportOption[] = [
  {
    id: "delhi",
    from: "From Delhi",
    icon: "route",
    color: "gold",
    options: [
      {
        mode: "By Air",
        duration: "1.5 hours + 8 hours drive",
        description: "Fly from Delhi to Shimla Airport (Jubbarhatti), then hire a taxi to Kinnaur Valley (approx. 8 hours)."
      },
      {
        mode: "By Train",
        duration: "8 hours + 8 hours drive",
        description: "Take Kalka Shatabdi from Delhi to Kalka, connect to the toy train to Shimla (UNESCO heritage), then taxi to Kinnaur."
      },
      {
        mode: "By Bus",
        duration: "14-16 hours",
        description: "HRTC Volvo buses run daily from Delhi ISBT Kashmere Gate to Shimla/Reckong Peo. From Shimla, connect to local bus or taxi to Kinnaur."
      },
      {
        mode: "Self-Drive",
        duration: "14-15 hours (570 km)",
        description: "Delhi → Chandigarh → Shimla → Narkanda → Kinnaur. Good roads, but challenging mountain driving in the final stretch."
      }
    ]
  },
  {
    id: "shimla",
    from: "From Shimla",
    icon: "mountain",
    color: "sunset",
    options: [
      {
        mode: "By Taxi",
        duration: "7-8 hours (220 km)",
        description: "Private taxis available from Shimla to Kinnaur. Most comfortable option with flexibility to stop at viewpoints."
      },
      {
        mode: "By Bus",
        duration: "8-9 hours",
        description: "Regular HRTC buses from Shimla to Reckong Peo/Kalpa, passing through beautiful Kinnaur Valley. Economical but less comfortable."
      },
      {
        mode: "Shared Taxi",
        duration: "8 hours",
        description: "Shared taxis depart from Shimla's New Bus Stand to various Kinnaur destinations. More economical than private taxis."
      }
    ]
  },
  {
    id: "chandigarh",
    from: "From Chandigarh",
    icon: "road",
    color: "blue",
    options: [
      {
        mode: "By Taxi",
        duration: "10-11 hours (350 km)",
        description: "Direct taxis available from Chandigarh Airport or city to Kinnaur. Convenient but expensive option."
      },
      {
        mode: "By Bus",
        duration: "12 hours",
        description: "HRTC buses connect Chandigarh to Shimla, then change to another bus to Kinnaur. Budget-friendly option."
      }
    ]
  },
  {
    id: "special",
    from: "Special Note",
    icon: "info-circle",
    color: "snow",
    options: [
      {
        mode: "Best Time to Travel",
        duration: "April to October",
        description: "Winter months (November to March) can have road closures due to snow. Inner Line Permit required for some areas near the border."
      },
      {
        mode: "Transport Arrangement",
        duration: "On Request",
        description: "We can arrange pickup from Shimla or Chandigarh for a hassle-free journey. Contact us for rates and availability."
      }
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Kinnaur Valley Panorama"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Homestay Exterior"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Apple Orchard in Spring"
  },
  {
    id: "4",
    src: "/images/kinnaur-mountain-view.jpg",
    fullSize: "/images/kinnaur-mountain-view.jpg",
    alt: "Raldang Peak View from Homestay"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Cozy Room Interior"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Mountain Sunset"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Traditional Himachali Cuisine"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    fullSize: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=100",
    alt: "Gateway to Spiti Valley"
  }
];
