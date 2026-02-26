import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Swap() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Swap Items</h1>
      <p className="text-center text-sm text-muted-foreground max-w-md">
        This is where students can arrange swaps with each other. (Page stub)
      </p>
      <Button
        className="mt-6"
        onClick={() => window.alert('Swap workflow not implemented yet')}
      >
        Find Swap Partners
      </Button>
    </main>
  );
}