import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gem, ShoppingBag } from "lucide-react";

const Shop = () => {
  const items = [
    {
      title: "Premium Theme",
      price: 500,
      description: "Unlock exclusive app themes",
    },
    {
      title: "Custom Avatar",
      price: 300,
      description: "Create your unique avatar",
    },
    {
      title: "Special Badge",
      price: 1000,
      description: "Show off your achievements",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Shop</h2>
        <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
          <Gem className="text-primary" />
          <span className="font-semibold">1,234 gems</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Gem className="w-4 h-4 text-primary" />
                  <span>{item.price}</span>
                </div>
                <Button>Purchase</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="hidden md:block">
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
          <rect
            x="40"
            y="60"
            width="120"
            height="100"
            rx="10"
            fill="#6A0DAD"
            className="animate-bounce"
          />
          <path
            d="M100 40 L140 60 L100 80 L60 60 Z"
            fill="#D8BFD8"
            className="animate-pulse"
          />
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="#FFD700"
            className="animate-spin"
          />
        </svg>
      </div>
    </div>
  );
};

export default Shop;