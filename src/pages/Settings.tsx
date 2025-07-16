import { Settings as SettingsIcon, Users, Shield, Database, Bell } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Configure system preferences and manage user access
        </p>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">User Management</h3>
              <p className="text-sm text-muted-foreground">Create, edit, and manage user accounts</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Role Management</h3>
              <p className="text-sm text-muted-foreground">Configure user roles and permissions</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">System Configuration</h3>
              <p className="text-sm text-muted-foreground">Warehouse locations and preferences</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Alert Settings</h3>
              <p className="text-sm text-muted-foreground">Configure stock alerts and notifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Placeholder */}
      <div className="data-table">
        <div className="table-header">
          <span>Settings Panel</span>
        </div>
        <div className="p-12 text-center">
          <SettingsIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Settings Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Comprehensive user management, role-based access control, and system configuration 
            features are in development.
          </p>
        </div>
      </div>
    </div>
  );
}