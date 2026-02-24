import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusCircle, User } from "lucide-react";

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

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-primary/20 bg-[hsl(var(--white))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="container relative flex h-16 items-center gap-4 justify-center">
        {/* Nav - Always Visible */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isActive(to)
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
