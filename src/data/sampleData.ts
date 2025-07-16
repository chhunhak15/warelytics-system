import { Product, StockReceipt, StockTransfer, User, Supplier } from '../types/warehouse';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Widget A',
    sku: 'WID-001',
    category: 'Electronics',
    quantity: 150,
    stockAlert: 20,
    unit: 'pieces',
    supplier: 'Tech Suppliers Inc',
    createdDate: '2024-01-15',
    updatedDate: '2024-07-15'
  },
  {
    id: '2',
    name: 'Component B',
    sku: 'CMP-002',
    category: 'Hardware',
    quantity: 8,
    stockAlert: 25,
    unit: 'pieces',
    supplier: 'Hardware Co',
    createdDate: '2024-02-01',
    updatedDate: '2024-07-14'
  },
  {
    id: '3',
    name: 'Cable Assembly',
    sku: 'CAB-003',
    category: 'Electronics',
    quantity: 75,
    stockAlert: 15,
    unit: 'meters',
    supplier: 'Cable Solutions',
    createdDate: '2024-01-20',
    updatedDate: '2024-07-16'
  },
  {
    id: '4',
    name: 'Safety Valve',
    sku: 'SAF-004',
    category: 'Industrial',
    quantity: 12,
    stockAlert: 10,
    unit: 'pieces',
    supplier: 'Industrial Parts Ltd',
    createdDate: '2024-03-01',
    updatedDate: '2024-07-13'
  },
  {
    id: '5',
    name: 'Power Supply Unit',
    sku: 'PSU-005',
    category: 'Electronics',
    quantity: 32,
    stockAlert: 5,
    unit: 'pieces',
    supplier: 'Tech Suppliers Inc',
    createdDate: '2024-02-15',
    updatedDate: '2024-07-16'
  }
];

export const sampleSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Tech Suppliers Inc',
    contact: 'John Smith',
    email: 'john@techsuppliers.com',
    phone: '+1-555-0123',
    address: '123 Tech Street, Silicon Valley, CA 94000'
  },
  {
    id: '2',
    name: 'Hardware Co',
    contact: 'Sarah Johnson',
    email: 'sarah@hardwareco.com',
    phone: '+1-555-0456',
    address: '456 Industrial Ave, Detroit, MI 48000'
  },
  {
    id: '3',
    name: 'Cable Solutions',
    contact: 'Mike Wilson',
    email: 'mike@cablesolutions.com',
    phone: '+1-555-0789',
    address: '789 Cable Rd, Austin, TX 73000'
  },
  {
    id: '4',
    name: 'Industrial Parts Ltd',
    contact: 'Lisa Brown',
    email: 'lisa@industrialparts.com',
    phone: '+1-555-0321',
    address: '321 Factory Blvd, Chicago, IL 60000'
  }
];

export const sampleStockReceipts: StockReceipt[] = [
  {
    id: '1',
    supplierName: 'Tech Suppliers Inc',
    productId: '1',
    productName: 'Widget A',
    quantity: 50,
    date: '2024-07-15',
    notes: 'Quality batch, well packaged',
    receivedBy: 'John Doe'
  },
  {
    id: '2',
    supplierName: 'Hardware Co',
    productId: '2',
    productName: 'Component B',
    quantity: 25,
    date: '2024-07-14',
    notes: 'Urgent delivery for production',
    receivedBy: 'Jane Smith'
  },
  {
    id: '3',
    supplierName: 'Cable Solutions',
    productId: '3',
    productName: 'Cable Assembly',
    quantity: 100,
    date: '2024-07-13',
    notes: 'Standard delivery',
    receivedBy: 'Bob Wilson'
  }
];

export const sampleStockTransfers: StockTransfer[] = [
  {
    id: '1',
    receiverName: 'Production Line A',
    productId: '1',
    productName: 'Widget A',
    quantity: 20,
    date: '2024-07-16',
    status: 'completed',
    notes: 'For morning shift production',
    transferredBy: 'John Doe'
  },
  {
    id: '2',
    receiverName: 'Quality Control',
    productId: '2',
    productName: 'Component B',
    quantity: 5,
    date: '2024-07-15',
    status: 'pending',
    notes: 'Testing samples required',
    transferredBy: 'Jane Smith'
  },
  {
    id: '3',
    receiverName: 'Assembly Department',
    productId: '3',
    productName: 'Cable Assembly',
    quantity: 15,
    date: '2024-07-14',
    status: 'completed',
    notes: 'Project X requirements',
    transferredBy: 'Bob Wilson'
  }
];

export const sampleUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@warehouse.com',
    role: 'admin',
    permissions: ['all'],
    createdDate: '2024-01-01',
    lastLogin: '2024-07-16'
  },
  {
    id: '2',
    username: 'manager1',
    email: 'manager@warehouse.com',
    role: 'manager',
    permissions: ['inventory', 'reports', 'users'],
    createdDate: '2024-01-15',
    lastLogin: '2024-07-15'
  },
  {
    id: '3',
    username: 'staff1',
    email: 'staff@warehouse.com',
    role: 'staff',
    permissions: ['inventory', 'receive', 'transfer'],
    createdDate: '2024-02-01',
    lastLogin: '2024-07-16'
  }
];