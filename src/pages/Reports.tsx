import { BarChart3, TrendingUp, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Generate comprehensive reports and analyze warehouse performance
          </p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export Reports
        </Button>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Daily Reports</h3>
              <p className="text-sm text-muted-foreground">Stock movements & activities</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Weekly Reports</h3>
              <p className="text-sm text-muted-foreground">Performance summaries</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Monthly Reports</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analysis</p>
            </div>
          </div>
        </div>

        <div className="metric-card cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Yearly Reports</h3>
              <p className="text-sm text-muted-foreground">Annual overview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Placeholder */}
      <div className="data-table">
        <div className="table-header">
          <span>Reports Dashboard</span>
        </div>
        <div className="p-12 text-center">
          <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Reporting Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working on comprehensive reporting features with interactive charts, 
            customizable filters, and export capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}