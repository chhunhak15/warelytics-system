import { ArrowDownToLine, ArrowUpFromLine, Package, Clock } from 'lucide-react';
import { StockReceipt, StockTransfer } from '@/types/warehouse';

interface RecentActivityProps {
  receipts: StockReceipt[];
  transfers: StockTransfer[];
}

export const RecentActivity = ({ receipts, transfers }: RecentActivityProps) => {
  // Combine and sort recent activities
  const activities = [
    ...receipts.slice(0, 3).map((receipt, index) => ({
      id: `receipt-${receipt.id}`,
      type: 'receipt' as const,
      description: `Received ${receipt.quantity} ${receipt.productName}`,
      subtext: `From ${receipt.supplierName}`,
      time: receipt.date,
      icon: ArrowDownToLine,
      iconColor: 'text-success'
    })),
    ...transfers.slice(0, 3).map((transfer, index) => ({
      id: `transfer-${transfer.id}`,
      type: 'transfer' as const,
      description: `Transferred ${transfer.quantity} ${transfer.productName}`,
      subtext: `To ${transfer.receiverName}`,
      time: transfer.date,
      icon: ArrowUpFromLine,
      iconColor: transfer.status === 'completed' ? 'text-primary' : 'text-warning'
    }))
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 5);

  return (
    <div className="data-table">
      <div className="table-header">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Recent Activity</span>
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {activities.length === 0 ? (
          <div className="table-cell text-center text-muted-foreground py-8">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No recent activity</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="table-cell">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${activity.iconColor}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{activity.description}</p>
                  <p className="text-sm text-muted-foreground truncate">{activity.subtext}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    {new Date(activity.time).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};