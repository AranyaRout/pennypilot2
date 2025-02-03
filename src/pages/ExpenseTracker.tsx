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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Plus, DollarSign, PieChart, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { toast } from "sonner";

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

const categories = [
  "Food & Dining",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Bills & Utilities",
  "Education",
  "Healthcare",
  "Other"
];

const ExpenseTracker = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = () => {
    if (!category || !amount || !description) {
      toast.error("Please fill in all fields");
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      category,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
      description
    };

    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount("");
    setDescription("");
    toast.success("Expense added successfully!");
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const chartData = categories.map(cat => ({
    name: cat,
    amount: expenses
      .filter(exp => exp.category === cat)
      .reduce((acc, curr) => acc + curr.amount, 0)
  })).filter(data => data.amount > 0);

  return (
    <div className="space-y-8 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Expense Tracker</h2>
        <Card className="p-4 bg-primary/10">
          <div className="flex items-center space-x-2">
            <DollarSign className="text-primary" />
            <span className="font-semibold">Total: ${totalExpenses.toFixed(2)}</span>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Add New Expense</h3>
          <div className="space-y-4">
            <div>
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
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

            <div>
              <Label>Description</Label>
              <Input
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button onClick={handleAddExpense} className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Expense
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Spending Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#6A0DAD" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg"
            >
              <div className="space-y-1">
                <p className="font-semibold">{expense.category}</p>
                <p className="text-sm text-gray-500">{expense.description}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${expense.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  {new Date(expense.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExpenseTracker;