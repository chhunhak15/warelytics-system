export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  stockAlert: number;
  unit: string;
  supplier: string;
  createdDate: string;
  updatedDate: string;
}

export interface StockReceipt {
  id: string;
  supplierName: string;
  productId: string;
  productName: string;
  quantity: number;
  date: string;
  notes: string;
  receivedBy: string;
}

export interface StockTransfer {
  id: string;
  receiverName: string;
  productId: string;
  productName: string;
  quantity: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
  notes: string;
  transferredBy: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'staff' | 'viewer';
  permissions: string[];
  createdDate: string;
  lastLogin: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
}

export interface DashboardMetrics {
  totalProducts: number;
  totalStock: number;
  lowStockItems: number;
  pendingTransfers: number;
  todayReceived: number;
  todayTransferred: number;
  monthlyReceived: number;
  monthlyTransferred: number;
}

export interface ReportData {
  date: string;
  received: number;
  transferred: number;
  stockLevel: number;
}