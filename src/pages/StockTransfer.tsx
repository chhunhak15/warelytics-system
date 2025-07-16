import { useState } from 'react';
import { ArrowUpFromLine, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';
import { sampleStockTransfers } from '@/data/sampleData';
import { StockTransfer } from '@/types/warehouse';
import { Button } from '@/components/ui/button';

export default function StockTransferPage() {
  const [transfers] = useState<StockTransfer[]>(sampleStockTransfers);

  const getStatusIcon = (status: StockTransfer['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-warning" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: StockTransfer['status']) => {
    switch (status) {
      case 'completed':
        return 'status-badge-success';
      case 'pending':
        return 'status-badge-warning';
      case 'cancelled':
        return 'status-badge-error';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Stock Transfer</h1>
          <p className="text-muted-foreground">
            Manage stock transfers to different locations and departments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Transfer
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ArrowUpFromLine className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Transfers</p>
              <p className="text-xl font-bold">{transfers.length}</p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-xl font-bold">
                {transfers.filter(t => t.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-xl font-bold">
                {transfers.filter(t => t.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cancelled</p>
              <p className="text-xl font-bold">
                {transfers.filter(t => t.status === 'cancelled').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers Table */}
      <div className="data-table">
        <div className="table-header">
          <span>Stock Transfers</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Product</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Receiver</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Quantity</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Transferred By</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((transfer) => (
                <tr key={transfer.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-6">
                    <p className="font-medium text-foreground">
                      {new Date(transfer.date).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-foreground">{transfer.productName}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {transfer.receiverName}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-primary">
                      {transfer.quantity}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(transfer.status)}
                      <span className={`status-badge ${getStatusBadge(transfer.status)}`}>
                        {transfer.status.charAt(0).toUpperCase() + transfer.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {transfer.transferredBy}
                  </td>
                  <td className="py-4 px-6 text-muted-foreground max-w-xs truncate">
                    {transfer.notes || 'No notes'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}