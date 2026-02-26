import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddCircleOutline,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";

const navLinks = [
  { label: "Home", to: "/", icon: IoHomeOutline },
  { label: "Browse", to: "/browse", icon: IoSearchOutline },
  { label: "Sell", to: "/sell", icon: IoAddCircleOutline },
  { label: "Listings", to: "/profile?view=listings", icon: IoListOutline },
  { label: "Profile", to: "/profile", icon: IoPersonOutline },
];


export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    const [p, q] = path.split("?");
    if (p === "/") return location.pathname === "/";
    if (q && q.includes("view=listings")) {
      return location.pathname === "/profile" && location.search.includes("view=listings");
    }
    return location.pathname.startsWith(p);
  };

  return (
    <header className="hidden md:block w-full border-b border-primary/20 bg-[hsl(var(--white))]">
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
