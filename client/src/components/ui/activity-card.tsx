import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "@/lib/data";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const getBgColor = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-[hsl(var(--mountain-blue))]/20';
      case 'red': return 'bg-[hsl(var(--mountain-red))]/20';
      case 'earth': return 'bg-[hsl(var(--mountain-earth))]/20';
      case 'pine': return 'bg-[hsl(var(--mountain-gray))]';
      default: return 'bg-[hsl(var(--mountain-blue))]/20';
    }
  };

  const getTextColor = (color: string) => {
    switch(color) {
      case 'blue': return 'text-[hsl(var(--mountain-blue))]';
      case 'red': return 'text-[hsl(var(--mountain-red))]';
      case 'earth': return 'text-[hsl(var(--mountain-earth))]';
      case 'pine': return 'text-[hsl(var(--mountain-pine))]';
      default: return 'text-[hsl(var(--mountain-blue))]';
    }
  };

  const getCheckColor = (color: string) => {
    switch(color) {
      case 'blue': return 'text-[hsl(var(--mountain-red))]';
      case 'red': return 'text-[hsl(var(--mountain-blue))]';
      case 'earth': return 'text-[hsl(var(--mountain-blue))]';
      case 'pine': return 'text-[hsl(var(--mountain-red))]';
      default: return 'text-[hsl(var(--mountain-red))]';
    }
  };

  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
      <div className={`h-48 ${getBgColor(activity.color)} flex items-center justify-center`}>
        <i className={`fas fa-${activity.icon} text-7xl ${getTextColor(activity.color)}`}></i>
      </div>
      <CardContent className="p-6">
        <h3 className={`font-playfair text-xl font-bold mb-3 ${getTextColor(activity.color)}`}>
          {activity.seasonDisplay}
        </h3>
        <ul className="space-y-2">
          {activity.activities.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <i className={`fas fa-check-circle ${getCheckColor(activity.color)} mt-1`}></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
