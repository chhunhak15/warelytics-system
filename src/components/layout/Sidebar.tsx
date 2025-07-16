import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  TruckIcon, 
  ArrowDownToLine, 
  BarChart3, 
  Settings,
  Warehouse,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard
  },
  {
    name: 'Inventory',
    href: '/inventory',
    icon: Package
  },
  {
    name: 'Stock Receive',
    href: '/receive',
    icon: ArrowDownToLine
  },
  {
    name: 'Stock Transfer',
    href: '/transfer',
    icon: TruckIcon
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: BarChart3
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings
  }
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div 
      className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col h-screen",
        collapsed ? "w-16" : "w-64"
      )}
      style={{ background: 'var(--gradient-sidebar)' }}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Warehouse className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-sidebar-foreground text-lg">WMS</h1>
                <p className="text-xs text-sidebar-foreground/60">Warehouse Management</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={cn(
                    "sidebar-nav-item",
                    isActive && "active"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">{item.name}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <button 
          className={cn(
            "flex items-center gap-3 w-full text-left hover:bg-sidebar-accent rounded-lg p-2 transition-colors",
            collapsed && "justify-center"
          )}
          onClick={() => {
            if (confirm('Are you sure you want to sign out?')) {
              localStorage.removeItem('isAuthenticated');
              localStorage.removeItem('currentUser');
              navigate('/login');
            }
          }}
        >
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary">A</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Admin User</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">admin@warehouse.com</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};