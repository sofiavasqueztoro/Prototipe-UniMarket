import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp, IoSearchSharp, IoAddCircleOutline, IoListSharp, IoPersonSharp } from "react-icons/io5";

// we still export the static items where appropriate (home, browse, listings, profile)
const navItems = [
  { label: "Home", to: "/", icon: IoHomeSharp },
  { label: "Browse", to: "/browse", icon: IoSearchSharp },
  // the middle action button is handled separately
  { label: "Listings", to: "/profile?view=listings", icon: IoListSharp },
  { label: "Profile", to: "/profile", icon: IoPersonSharp },
];

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (path === "/profile?view=listings") {
      return (
        location.pathname === "/profile" &&
        location.search.includes("view=listings")
      );
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[hsl(var(--white))] border-t border-border safe-area-bottom">
      <div className="flex items-center h-16 px-1">
        {/* 5 equal slots to guarantee fit on small screens */}
        {navItems.slice(0, 2).map(({ label, to, icon: Icon }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className={`w-1/5 flex items-center justify-center py-1 transition-all ${
                  active ? "text-accent" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
            >
              <div className="flex flex-col items-center">
                <Icon className={`h-6 w-6 ${active ? "scale-110" : ""} transition-transform`} />
                <span className="text-xs mt-1">{label}</span>
              </div>
            </Link>
          );
        })}

        {/* central large + button (direct to Sell) */}
        <Link to="/sell" className="w-1/5 flex items-center justify-center py-0">
          <div className="h-14 w-14 rounded-full flex items-center justify-center -mt-6 mb-0 bg-accent">
            <IoAddCircleOutline className="h-8 w-8 text-accent-foreground" />
          </div>
        </Link>

        {/* Listings and Profile */}
        {navItems.slice(2).map(({ label, to, icon: Icon }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className={`w-1/5 flex items-center justify-center py-1 transition-all ${
                  active ? "text-accent" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
            >
              <div className="flex flex-col items-center">
                <Icon className={`h-6 w-6 ${active ? "scale-110" : ""} transition-transform`} />
                <span className="text-xs mt-1">{label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
