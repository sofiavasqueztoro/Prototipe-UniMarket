import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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

  if (location.pathname.startsWith("/profile")) return null;

  return (
    <div className="fixed top-6 right-6 z-40">
      <img
        src={`${import.meta.env.BASE_URL}Black and White Minimalist Fashion Store Logo.png`}
        alt="UniMarket"
        className="h-[80px] w-auto"
      />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Prototipe-UniMarket">
          <FixedLogo />
          <Navbar />
          <div className="pb-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;