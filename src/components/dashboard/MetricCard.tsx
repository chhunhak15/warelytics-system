import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon: LucideIcon;
  className?: string;
}

export const MetricCard = ({ title, value, change, icon: Icon, className }: MetricCardProps) => {
  return (
    <div className={cn("metric-card animate-fade-in", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                change.trend === 'up' && "text-success",
                change.trend === 'down' && "text-destructive",
                change.trend === 'neutral' && "text-muted-foreground"
              )}>
                {change.value}
              </span>
            </div>
          )}
        </div>
        <div className="metric-card-icon">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};