import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Room } from "@/lib/data";
import { motion } from "framer-motion";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
        <div className="h-64 overflow-hidden relative cursor-pointer group"
          onClick={() => setShowGallery(true)}
        >
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

        {/* Gallery indicator overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <i className="fas fa-images text-2xl mb-2"></i>
              <p className="text-sm">Click to view photos</p>
            </div>
          </div>

        </div>
        <div className="mt-2 text-center">
        <p className="text-sm text-gray-500">
          <i className="fas fa-search mr-1"></i>
          Click photo to view more
        </p>
        </div>
        <CardContent className="p-4">
          <h3 className="font-playfair text-xl font-bold mb-2">{room.name}</h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="mb-5">
            <h4 className="font-medium text-sm mb-2 text-gray-500">AMENITIES</h4>
            <div className="flex flex-wrap gap-2 min-h-[75px]">
              {room.amenities.map((amenity, index) => (
                <span key={index} className="bg-[hsl(var(--mountain-snow))]/30 border border-[hsl(var(--mountain-gold))]/30 px-3 py-1 rounded-full text-xs">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="font-playfair text-[hsl(var(--mountain-pine))] text-xl font-semibold">
              {room.price}
            </span>
            <Button
              //asChild
              className="bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-pine))] py-2 px-6 rounded-full transition-colors w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset for header
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card> 

    {showGallery && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    onClick={() => setShowGallery(false)}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="bg-white rounded-2xl p-6 max-w-[90vw] w-full max-h-[90vh] relative overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors z-10"
        onClick={() => setShowGallery(false)}
      >
        <span className="text-2xl text-gray-700">&times;</span>
      </button>

      <h2 className="font-playfair text-2xl font-bold mb-4 text-gray-800">
        {room.name} Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[calc(90vh-120px)]">
        {room.images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Room ${room.name} ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
)}
    </>
  );
}
