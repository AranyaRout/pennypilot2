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
        <img 
          src="/animations/money.gif" 
          alt="Money animation" 
          className="w-64 h-64 object-contain animate-bounce"
        />
      </div>
    </div>
  );
};

export default IncomeSetup;
