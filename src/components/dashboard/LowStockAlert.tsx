import { AlertTriangle, Package } from 'lucide-react';
import { Product } from '@/types/warehouse';

interface LowStockAlertProps {
  products: Product[];
}

export const LowStockAlert = ({ products }: LowStockAlertProps) => {
  const lowStockProducts = products.filter(product => product.quantity <= product.stockAlert);

  return (
    <div className="data-table">
      <div className="table-header">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span>Low Stock Alerts</span>
          {lowStockProducts.length > 0 && (
            <span className="status-badge status-badge-warning ml-auto">
              {lowStockProducts.length} items
            </span>
          )}
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {lowStockProducts.length === 0 ? (
          <div className="table-cell text-center text-muted-foreground py-8">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>All items are well stocked</p>
          </div>
        ) : (
          lowStockProducts.map((product) => (
            <div key={product.id} className="table-cell">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{product.quantity} {product.unit}</p>
                  <p className="text-sm text-warning">Alert at {product.stockAlert}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};