import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import ItemDetail from "./pages/ItemDetail";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const FixedLogo = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/profile")) {
    return null;
  }

  return (
    <div className="fixed top-6 right-6 z-40">
      <Link to="/" className="block">
        <img
          src="/Black and White Minimalist Fashion Store Logo.png"
          alt="UniMarket"
          className="h-[80px] w-auto"
        />
      </Link>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FixedLogo />
        <Navbar />
        <div className="pb-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

