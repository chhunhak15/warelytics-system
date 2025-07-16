import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Warehouse, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      if (username === 'admin' && password === 'admin!@#123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify({
          username: 'admin',
          email: 'admin@warehouse.com',
          role: 'admin'
        }));
        toast({
          title: "Login successful",
          description: "Welcome to the Warehouse Management System"
        });
        navigate('/');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-6">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-xl border p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Warehouse className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Warehouse Management</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>

          {/* Default Admin Credentials */}
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-foreground mb-2">Default Admin Account:</p>
            <p className="text-sm text-muted-foreground">Username: <code className="bg-muted px-1 rounded">admin</code></p>
            <p className="text-sm text-muted-foreground">Password: <code className="bg-muted px-1 rounded">admin!@#123</code></p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full gap-2" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}