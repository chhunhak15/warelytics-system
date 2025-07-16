import { useState } from 'react';
import { ArrowDownToLine, Plus, Package, Truck } from 'lucide-react';
import { sampleStockReceipts, sampleSuppliers, sampleProducts } from '@/data/sampleData';
import { StockReceipt } from '@/types/warehouse';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function StockReceive() {
  const [receipts] = useState<StockReceipt[]>(sampleStockReceipts);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Stock Receive</h1>
          <p className="text-muted-foreground">
            Record incoming stock from suppliers and update inventory
          </p>
        </div>
        <Button 
          className="gap-2"
          onClick={() => alert('New Receipt feature coming soon!')}
        >
          <Plus className="w-4 h-4" />
          New Receipt
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Today Received</p>
              <p className="text-xl font-bold">
                {receipts.filter(r => new Date(r.date).toDateString() === new Date().toDateString()).length}
              </p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ArrowDownToLine className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Receipts</p>
              <p className="text-xl font-bold">{receipts.length}</p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Suppliers</p>
              <p className="text-xl font-bold">{sampleSuppliers.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Receipts */}
      <div className="data-table">
        <div className="table-header">
          <span>Recent Stock Receipts</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Product</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Supplier</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Quantity</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Received By</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Notes</th>
                <th className="text-right py-3 px-6 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((receipt) => (
                <tr key={receipt.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-6">
                    <p className="font-medium text-foreground">
                      {new Date(receipt.date).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-foreground">{receipt.productName}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {receipt.supplierName}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-success">
                      +{receipt.quantity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {receipt.receivedBy}
                  </td>
                  <td className="py-4 px-6 text-muted-foreground max-w-xs truncate">
                    {receipt.notes || 'No notes'}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 justify-end">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => alert(`Viewing receipt #${receipt.id}`)}
                      >
                        View
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => alert(`Editing receipt #${receipt.id}`)}
                      >
                        Edit
                      </Button>
                    </div>
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