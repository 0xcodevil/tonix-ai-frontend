import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Button } from "@/components/button";
import { Menu, X, Home, Image } from "lucide-react";
import { LoginButton } from '@telegram-auth/react';
import { useAuth } from "@/contexts/AuthProvider";
import { toast } from "sonner";

const Navigation = () => {
  const user = useAuth();
  const [params] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "AI Generation", path: "/ai-generation", icon: Image },
  ];
  
  useEffect(() => {
    const login = params.get('login');
    if (login === 'success' && user) toast.success(`Welcome, ${user.telegram.firstName}! 🎉`);
    else if (login === 'failed') toast.error('Failed to login.');
  }, [params, user]);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img src="/imgs/logo.png" alt="" />
            </div>
            <span className="text-xl font-space font-bold gradient-text">TONIXAI</span>
          </Link>

          <div className="flex items-center justify-center space-x-2 md:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {user ?
              <img src={user.telegram.photoUrl} alt="" className="w-10 h-10 rounded-full border border-slate-500" /> :
              <LoginButton
                botUsername="tonix_ai_bot"
                authCallbackUrl="/api/v1/auth/login"
                buttonSize="large"
                cornerRadius={5}
                showAvatar={false}
                lang="en"
              />}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Button className="w-full mt-4 bg-gradient-to-r from-tonix-blue to-tonix-cyan hover:from-tonix-cyan hover:to-tonix-blue text-white">
                Launch App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
