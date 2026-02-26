import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Donate() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Donate Items</h1>
      <p className="text-center text-sm text-muted-foreground max-w-md">
        This is where users will be able to donate clothing or accessories they no
        longer need. (Page stub)
      </p>
      <Button
        className="mt-6"
        onClick={() => window.alert('Redirect to donation flow (not implemented)')}
      >
        Start Donating
      </Button>
    </main>
  );
}