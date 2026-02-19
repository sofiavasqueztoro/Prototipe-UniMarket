import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusCircle, User } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Browse", to: "/browse", icon: Search },
  { label: "Sell", to: "/sell", icon: PlusCircle },
  { label: "Profile", to: "/profile", icon: User },
];

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-primary-foreground/10 safe-area-bottom">
      <div className="flex items-stretch">
        {navItems.map(({ label, to, icon: Icon }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-all ${
                active
                  ? "text-accent"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {to === "/sell" ? (
                <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-0.5 -mt-5 shadow-lg transition-all ${active ? "bg-accent" : "bg-accent/80 hover:bg-accent"}`}>
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
              ) : (
                <Icon className={`h-5 w-5 ${active ? "scale-110" : ""} transition-transform`} />
              )}
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
