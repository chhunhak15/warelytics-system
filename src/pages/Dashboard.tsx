import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { LowStockAlert } from '@/components/dashboard/LowStockAlert';
import { sampleProducts, sampleStockReceipts, sampleStockTransfers } from '@/data/sampleData';
import { DashboardMetrics } from '@/types/warehouse';

export default function Dashboard() {
  // Calculate dashboard metrics
  const metrics: DashboardMetrics = {
    totalProducts: sampleProducts.length,
    totalStock: sampleProducts.reduce((sum, product) => sum + product.quantity, 0),
    lowStockItems: sampleProducts.filter(product => product.quantity <= product.stockAlert).length,
    pendingTransfers: sampleStockTransfers.filter(transfer => transfer.status === 'pending').length,
    todayReceived: sampleStockReceipts.filter(receipt => 
      new Date(receipt.date).toDateString() === new Date().toDateString()
    ).reduce((sum, receipt) => sum + receipt.quantity, 0),
    todayTransferred: sampleStockTransfers.filter(transfer => 
      new Date(transfer.date).toDateString() === new Date().toDateString() && 
      transfer.status === 'completed'
    ).reduce((sum, transfer) => sum + transfer.quantity, 0),
    monthlyReceived: sampleStockReceipts.reduce((sum, receipt) => sum + receipt.quantity, 0),
    monthlyTransferred: sampleStockTransfers
      .filter(transfer => transfer.status === 'completed')
      .reduce((sum, transfer) => sum + transfer.quantity, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening in your warehouse today.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Last updated</p>
          <p className="font-medium text-foreground">
            {new Date().toLocaleString()}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <DashboardStats metrics={metrics} />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="animate-slide-up">
          <RecentActivity 
            receipts={sampleStockReceipts} 
            transfers={sampleStockTransfers} 
          />
        </div>

        {/* Low Stock Alerts */}
        <div className="animate-slide-up">
          <LowStockAlert products={sampleProducts} />
        </div>
      </div>
    </div>
  );
}