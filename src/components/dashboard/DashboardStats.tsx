import { Package, TrendingUp, AlertTriangle, ArrowDownToLine, ArrowUpFromLine, Clock } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { DashboardMetrics } from '@/types/warehouse';

interface DashboardStatsProps {
  metrics: DashboardMetrics;
}

export const DashboardStats = ({ metrics }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      <MetricCard
        title="Total Products"
        value={metrics.totalProducts}
        change={{ value: "+5% from last month", trend: "up" }}
        icon={Package}
      />
      
      <MetricCard
        title="Total Stock Units"
        value={metrics.totalStock.toLocaleString()}
        change={{ value: "+12% from last month", trend: "up" }}
        icon={TrendingUp}
      />
      
      <MetricCard
        title="Low Stock Items"
        value={metrics.lowStockItems}
        change={{ value: "2 critical", trend: "down" }}
        icon={AlertTriangle}
        className="border-l-4 border-l-warning"
      />
      
      <MetricCard
        title="Today Received"
        value={metrics.todayReceived}
        change={{ value: "3 deliveries", trend: "neutral" }}
        icon={ArrowDownToLine}
      />
      
      <MetricCard
        title="Today Transferred"
        value={metrics.todayTransferred}
        change={{ value: "5 transfers", trend: "neutral" }}
        icon={ArrowUpFromLine}
      />
      
      <MetricCard
        title="Pending Transfers"
        value={metrics.pendingTransfers}
        change={{ value: "Review required", trend: "neutral" }}
        icon={Clock}
        className="border-l-4 border-l-primary"
      />
    </div>
  );
};