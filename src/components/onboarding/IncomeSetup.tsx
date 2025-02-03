import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const IncomeSetup = () => {
  const [incomeType, setIncomeType] = useState<string>("pocket-money");
  const [amount, setAmount] = useState<string>("");

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <Label>What type of income do you have?</Label>
          <Select
            value={incomeType}
            onValueChange={(value) => setIncomeType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select income type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pocket-money">Pocket Money</SelectItem>
              <SelectItem value="part-time">Part-time Job</SelectItem>
              <SelectItem value="full-time">Full-time Job</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>How much do you receive monthly?</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            <Input
              type="number"
              placeholder="0.00"
              className="pl-8"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Continue
          </Button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="w-64 h-64">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            {/* Wallet */}
            <rect
              x="40"
              y="60"
              width="120"
              height="80"
              rx="10"
              fill="#9b87f5"
              className="animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            {/* Money bills */}
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x="50"
                y={70 + i * 15}
                width="100"
                height="10"
                rx="2"
                fill="#4CAF50"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            {/* Coins */}
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx={160 - i * 25}
                cy="130"
                r="12"
                fill="#FFD700"
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IncomeSetup;