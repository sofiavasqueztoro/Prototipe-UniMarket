import { Link, useLocation } from "react-router-dom";
import { Bell, ShoppingBag, User, Home, Search, PlusCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { label: "Home", to: "/", icon: Home },
  { label: "Browse", to: "/browse", icon: Search },
  { label: "Sell", to: "/sell", icon: PlusCircle },
  { label: "Profile", to: "/profile", icon: User },
];

const HangerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 19h18l-9-9-9 9z" />
    <path d="M12 10V6" />
    <path d="M9 6a3 3 0 0 1 6 0" />
    <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-sm">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-accent">
            <HangerIcon />
          </span>
          <span className="text-xl font-bold text-primary-foreground tracking-tight">
            Uni<span className="text-accent">Market</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(to)
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-primary-foreground hover:bg-white/10"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-accent text-accent-foreground border-0">
              3
            </Badge>
          </Button>

          <Link to="/profile">
            <Avatar className="h-8 w-8 cursor-pointer border-2 border-accent">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
              <AvatarFallback className="bg-sage text-primary-foreground text-xs font-semibold">AL</AvatarFallback>
            </Avatar>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <nav className="container py-3 flex flex-col gap-1">
            {navLinks.map(({ label, to, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(to)
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
