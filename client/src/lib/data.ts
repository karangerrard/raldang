export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  price: string;
  imageMob?: string; // Optional mobile image
  image: string;
  images: string[];
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
    description: "Wake up to the chirping of Himalayan birds and breathtaking panoramic views of Raldang peak from your private balcony. These spacious rooms feature modern amenities for a comfortable mountain stay.",
    amenities: ["Panoramic Mountain View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker", "Bathroom Geyser"],
    price: "₹2,500/night",
    imageMob: "images/room_mountainview_1.avif",
    image: "images/room_mountainview_1.avif",
    images: ["images/room_mountainview_1.avif", "images/room_mountainview_2.avif", "images/room_mountainview_3.avif","images/room_mountainview_4.avif"]
  },
  {
    id: "garden-view",
    name: "Garden View Room",
    description: "Comfortable rooms with a private balcony overlooking our peaceful garden and apple orchard. Enjoy the tranquil atmosphere with partial mountain views and Apple garden views.",
    amenities: ["Garden View", "Private Balcony", "Free Wi-Fi", "Daily Breakfast", "Tea/Coffee Maker", "Room Service","Bathroom Geyser"],
    price: "₹2,200/night",
    imageMob: "images/room_gardenview_mobile_1.avif",
    image: "images/room_gardenview_1.avif",
    images: ["images/room_gardenview_1.avif", "images/room_gardenview_2.avif", "images/room_gardenview_3.avif", "images/room_gardenview_4.avif"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Good spacious rooms with a super view from the balcony , you can see Kinnaur Kailash as well as Raldang peak ."+
            "The rooms and bathrooms have all the facilities you would need there."+
            "Proper wi-fi to work"+
            "Heaters to keep you warm"+
            "Geysers for hot water in the bathrooms"+
            "Now talking about food , it was really amazing and homely just like someone is eating at their own home. You'll need to tell them in advance so they'll have the time to prepare food."+
            "Kalpa in itself is soo peaceful and this homestay is even more peaceful , it is located 10-15 minutes of walk from the main bazaar"+
            "And I would really like to thank the owners of the homestay for their hospitality . So this homestay is managed by mother , daughter duo who are amazing people and will keep you like their own family , they both are the best .",
    name: "Karandeep Singh",
    location: "Delhi, India",
    initial: "K"
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
    color: "blue",
    options: [
      {
        mode: "Best Time to Travel",
        duration: "March to June & October to November",
        description: "Winter months (December to February) can have road closures due to snow. Inner Line Permit required for some areas near the border."
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
    alt: "Kinnaur Monastery"
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
    alt: "Himalayan Sheep"
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
    alt: "Chaka Trail"
  },
  {
    id: "7",
    src: "images/gallery_9_cover.avif",
    fullSize: "images/gallery_9.avif",
    alt: "Kinnaur Suicide Point"
  },
  {
    id: "8",
    src: "images/gallery_8_cover.avif",
    fullSize: "images/gallery_8.avif",
    alt: "Raldang Peak"
  }
];
