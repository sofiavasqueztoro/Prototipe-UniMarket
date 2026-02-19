import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Recycle, Star, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featuredListings = [
  {
    id: 1,
    name: "Vintage Levi's Denim Jacket",
    price: 25,
    size: "M",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&h=500&fit=crop",
    seller: "Sofia R.",
    saved: false,
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 18,
    size: "S",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    seller: "Maria G.",
    saved: true,
  },
  {
    id: 3,
    name: "Cream Knit Sweater",
    price: 20,
    size: "L",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    seller: "Emma T.",
    saved: false,
  },
  {
    id: 4,
    name: "Black Slim Trousers",
    price: 15,
    size: "M",
    condition: "Fair",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4086?w=400&h=500&fit=crop",
    seller: "Ana L.",
    saved: false,
  },
  {
    id: 5,
    name: "Puffer Winter Jacket",
    price: 40,
    size: "XL",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&h=500&fit=crop",
    seller: "Laura P.",
    saved: false,
  },
];

const steps = [
  {
    icon: "📷",
    title: "Upload a Photo",
    desc: "Snap a picture of your item - our AI does the rest.",
  },
  {
    icon: "🤖",
    title: "AI Tags Your Item",
    desc: "Size, color, style, and condition detected automatically.",
  },
  {
    icon: "✨",
    title: "Get Discovered",
    desc: "Students on campus browse and buy directly from you.",
  },
];

const stats = [
  { value: 1240, label: "Items Exchanged", icon: Recycle, suffix: "+" },
  { value: 620, label: "kg CO₂ Saved", icon: Leaf, suffix: "kg" },
  { value: 380, label: "Students Involved", icon: Users, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-mustard">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Index() {
  const [savedItems, setSavedItems] = useState<Record<number, boolean>>(
    Object.fromEntries(featuredListings.map((l) => [l.id, l.saved]))
  );

  const toggleSave = (id: number) =>
    setSavedItems((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-deep-green">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sage -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-medium">
              🌱 Sustainable Fashion for Students
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Your Campus,
              <br />
              <span className="text-accent">Your Closet.</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-md mb-8">
              Buy, sell, and swap second-hand clothes with students from your university. AI-powered tagging. Zero effort. Real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link to="/browse">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-mustard/90 font-semibold px-8">
                  Browse Items <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sell">
                <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10 font-semibold px-8">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=600&h=700&fit=crop"
                alt="Second-hand fashion"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="text-xs font-semibold text-foreground">AI Tagged</p>
                  <p className="text-[10px] text-muted-foreground">Size M · Casual · Good</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl shadow-lg p-3">
                <p className="text-xs font-bold text-accent-foreground">$18</p>
                <p className="text-[10px] text-accent-foreground/80">Like New ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Counter ── */}
      <section className="bg-deep-green/80 py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label, icon: Icon, suffix }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-1">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <CountUp target={value} suffix={suffix} />
              <p className="text-primary-foreground/70 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-card/60 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yale mb-3">How It Works</h2>
            <p className="text-yale max-w-md mx-auto">
              Selling clothes has never been easier. Three steps is all it takes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-4 shadow-sm">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-0 hidden md:flex items-center last:hidden">
                  {i < steps.length - 1 && <ChevronRight className="h-6 w-6 text-muted-foreground" />}
                </div>
                <div className="text-xs font-bold text-yale mb-1">STEP {i + 1}</div>
                <h3 className="text-lg font-semibold text-yale mb-2">{step.title}</h3>
                <p className="text-sm text-yale">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Listings ── */}
      <section className="py-16 bg-card/40">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary">Featured Items</h2>
              <p className="text-muted-foreground text-sm mt-1">Fresh picks from your campus</p>
            </div>
            <Link to="/browse">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {featuredListings.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`} className="shrink-0 w-52">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group border-0 shadow-sm">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => { e.preventDefault(); toggleSave(item.id); }}
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Heart className={`h-4 w-4 ${savedItems[item.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                    </button>
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px]">
                      {item.condition}
                    </Badge>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">{item.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-lg font-bold text-accent">${item.price}</span>
                      <Badge variant="secondary" className="text-[10px]">Size {item.size}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.seller}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eco Mascot Banner ── */}
<section className="py-12">
  <div className="container">
    <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg border border-black/5">

      {/* Mascot */}
    <div className="relative shrink-0">
      <div className="absolute inset-0 rounded-3xl bg-dry-sage/30 blur-md" />
      
      <div className="relative bg-white rounded-3xl p-6 shadow-md">
        <img
          src="/llama.jpeg"
          alt="Eco mascot llama"
          className="h-40 w-40 object-contain"
        />
      </div>
    </div>



      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-dry-sage font-semibold text-sm mb-1">
          Meet Eco, your sustainability buddy!
        </p>

        <h3 className="text-2xl font-bold text-yale mb-2">
          Every swap makes a difference 🌍
        </h3>

        <p className="text-yale/70 text-sm max-w-md">
          I'm Eco -your guide to sustainable fashion. Earn points, level up,
          and get rewarded every time you buy, sell, or donate on UniMarket.
        </p>
      </div>

      {/* Button */}
      <Link to="/profile">
        <Button className="bg-yale text-white hover:bg-yale/90 font-semibold shrink-0">
          See My Rewards <Star className="ml-2 h-4 w-4" />
        </Button>
      </Link>

    </div>
  </div>
</section>

    </main>
  );
}
