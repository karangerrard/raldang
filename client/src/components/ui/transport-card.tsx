import { Card, CardContent } from "@/components/ui/card";
import { TransportOption, TransportDetail } from "@/lib/data";
import { motion } from "framer-motion";

interface TransportCardProps {
  option: TransportOption;
}

export function TransportCard({ option }: TransportCardProps) {
  const getBgColor = (color: string) => {
    switch(color) {
      case 'gold': return 'bg-[hsl(var(--mountain-gold))]/20';
      case 'sunset': return 'bg-[hsl(var(--mountain-sunset))]/20';
      case 'blue': return 'bg-[hsl(var(--mountain-blue))]/20';
      case 'snow': return 'bg-[hsl(var(--mountain-snow))]/20';
      default: return 'bg-[hsl(var(--mountain-blue))]/20';
    }
  };

  const getTextColor = (color: string) => {
    switch(color) {
      case 'gold': return 'text-[hsl(var(--mountain-gold))]';
      case 'sunset': return 'text-[hsl(var(--mountain-sunset))]';
      case 'blue': return 'text-[hsl(var(--mountain-blue))]';
      case 'snow': return 'text-[hsl(var(--mountain-pine))]';
      default: return 'text-[hsl(var(--mountain-blue))]';
    }
  };

  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
      <div className={`h-20 ${getBgColor(option.color)} flex items-center justify-center`}>
        <div className="flex items-center gap-3">
          <i className={`fas fa-${option.icon} text-3xl ${getTextColor(option.color)}`}></i>
          <h3 className={`font-playfair text-xl font-bold ${getTextColor(option.color)}`}>
            {option.from}
          </h3>
        </div>
      </div>
      <CardContent className="p-6">
        <ul className="space-y-5">
          {option.options.map((item: TransportDetail, index: number) => (
            <li key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <i className={`fas fa-${item.mode.toLowerCase().includes('bus') ? 'bus' : 
                                       item.mode.toLowerCase().includes('train') ? 'train' : 
                                       item.mode.toLowerCase().includes('air') ? 'plane' :
                                       item.mode.toLowerCase().includes('taxi') ? 'taxi' :
                                       item.mode.toLowerCase().includes('drive') ? 'car' : 
                                       item.mode.toLowerCase().includes('time') ? 'calendar-alt' : 
                                       'info-circle'} 
                                       ${getTextColor(option.color)}`}></i>
                </div>
                <div>
                  <h4 className="font-medium text-base">{item.mode}</h4>
                  <div className="text-sm font-medium text-gray-500 mb-1">{item.duration}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}