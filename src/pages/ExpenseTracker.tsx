import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ExpenseTracker = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const data = [
    { name: "Food", amount: 300 },
    { name: "Transport", amount: 200 },
    { name: "Entertainment", amount: 150 },
    { name: "Shopping", amount: 250 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold">Expense Tracker</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Add Expense</h3>
          <div className="space-y-4">
            <div>
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Amount</Label>
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
            <Button className="w-full">Add Expense</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Spending Overview</h3>
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#6A0DAD" />
          </BarChart>
        </Card>
      </div>

      <div className="hidden md:block">
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="#D8BFD8"
            className="animate-bounce"
          />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={80 + i * 20}
              cy={60 + i * 10}
              r="10"
              fill="#FFD700"
              className="animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ExpenseTracker;