import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gem, Trophy, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Rewards</h2>
        <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
          <Gem className="text-primary" />
          <span className="font-semibold">1,234 gems</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Daily Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2">7 days</p>
            <p className="text-gray-600">Keep learning to earn more gems!</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              Available Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Unlock exclusive rewards in the shop!</p>
            <Button onClick={() => navigate("/shop")}>Visit Shop</Button>
          </CardContent>
        </Card>
      </div>

      <div className="hidden md:block">
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
          <polygon
            points="100,20 120,80 185,80 130,120 150,180 100,140 50,180 70,120 15,80 80,80"
            fill="#FFD700"
            className="animate-spin"
            style={{ transformOrigin: "center", animationDuration: "3s" }}
          />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={70 + i * 30}
              cy="100"
              r="10"
              fill="#6A0DAD"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Rewards;