import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Room } from "@/lib/data";
import { motion } from "framer-motion";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
        <div className="h-64 overflow-hidden">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-playfair text-xl font-bold mb-2">{room.name}</h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {room.amenities.map((amenity, index) => (
              <span key={index} className="bg-[hsl(var(--mountain-gray))] px-3 py-1 rounded-full text-sm">
                {amenity}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-playfair text-[hsl(var(--mountain-blue))] text-xl font-semibold">
              {room.price}
            </span>
            <Button 
              asChild
              className="bg-[hsl(var(--mountain-blue))] hover:bg-[hsl(var(--mountain-blue))] hover:opacity-80 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
