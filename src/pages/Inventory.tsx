import { useState } from 'react';
import { Package, Search, Plus, Edit, Trash2, AlertTriangle } from 'lucide-react';
import { sampleProducts } from '@/data/sampleData';
import { Product } from '@/types/warehouse';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Inventory() {
  const [products] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockStatus = (product: Product) => {
    if (product.quantity === 0) return { status: 'out-of-stock', label: 'Out of Stock', color: 'status-badge-error' };
    if (product.quantity <= product.stockAlert) return { status: 'low-stock', label: 'Low Stock', color: 'status-badge-warning' };
    return { status: 'in-stock', label: 'In Stock', color: 'status-badge-success' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground">
            Manage your product inventory and track stock levels
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search products by name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Products</p>
              <p className="text-xl font-bold">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Stock</p>
              <p className="text-xl font-bold">{products.filter(p => p.quantity > p.stockAlert).length}</p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Low Stock</p>
              <p className="text-xl font-bold">{products.filter(p => p.quantity <= p.stockAlert && p.quantity > 0).length}</p>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Out of Stock</p>
              <p className="text-xl font-bold">{products.filter(p => p.quantity === 0).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="data-table">
        <div className="table-header">
          <span>Products ({filteredProducts.length})</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Product</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Category</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Stock</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-6 font-medium text-muted-foreground">Supplier</th>
                <th className="text-right py-3 px-6 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product);
                return (
                  <tr key={product.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="status-badge bg-accent text-accent-foreground">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium">{product.quantity} {product.unit}</p>
                        <p className="text-sm text-muted-foreground">Alert at {product.stockAlert}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`status-badge ${stockStatus.color}`}>
                        {stockStatus.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {product.supplier}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 justify-end">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}