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
    amenities: ["Panoramic Mountain View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker", "Room Service"],
    price: "₹4,500/night",
    image: "images/room_mountain.avif"
  },
  {
    id: "garden-view",
    name: "Garden View Room",
    description: "Comfortable rooms with a private balcony overlooking our peaceful garden and apple orchard. Enjoy the tranquil atmosphere with partial mountain views and cozy Himachali interior design.",
    amenities: ["Garden View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker", "Room Service"],
    price: "₹3,500/night",
    image: "images/room_gardenview.avif"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Our stay at Raldang View Homestay was truly magical. The views of Raldang peak from our room were breathtaking, the home-cooked meals were incredibly delicious, and the warmth of our hosts made us feel like family. Walking through the apple orchard and learning about local traditions was a highlight of our Himachal trip.",
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
    src: "images/gallery_1_cover.avif",
    fullSize: "images/gallery_1.avif",
    alt: "Kinnaur Temple"
  },
  {
    id: "2",
    src: "images/gallery_2_cover.avif",
    fullSize: "images/gallery_2.avif",
    alt: "Kinnaur monastery"
  },
  {
    id: "3",
    src: "images/gallery_3_cover.avif",
    fullSize: "images/gallery_3.avif",
    alt: "Tibetan Prayer Flags"
  },
  {
    id: "4",
    src: "images/gallery_4_cover.avif",
    fullSize: "images/gallery_4.avif",
    alt: "Himalayan sheeps"
  },
  {
    id: "5",
    src: "images/gallery_5_cover.avif",
    fullSize: "images/gallery_5.avif",
    alt: "Raldang Peak"
  },
  {
    id: "6",
    src: "images/gallery_6_cover.avif",
    fullSize: "images/gallery_6.avif",
    alt: "Snow road to Kinnaur"
  },
  {
    id: "7",
    src: "images/gallery_9_cover.avif",
    fullSize: "images/gallery_9.avif",
    alt: "Kinnaur suicide point"
  },
  {
    id: "8",
    src: "images/gallery_8_cover.avif",
    fullSize: "images/gallery_8.avif",
    alt: "Kinnaur Himalayas"
  }
];
