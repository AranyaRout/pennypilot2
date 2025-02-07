// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider"; // ✅ Importing shadcn slider
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";
// import { Plus, IndianRupee } from "lucide-react";
// import { toast } from "sonner";
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// interface Expense {
//   id: string;
//   category: string;
//   amount: number;
//   date: string;
//   description: string;
//   importance: number;
// }

// const categories = [
//   "Food & Dining",
//   "Transportation",
//   "Entertainment",
//   "Shopping",
//   "Bills & Utilities",
//   "Education",
//   "Healthcare",
//   "Other",
// ];

// const ExpenseTracker = () => {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [importance, setImportance] = useState(50); // Default importance level at 50%
//   const [expenses, setExpenses] = useState<Expense[]>([]);

//   const handleAddExpense = () => {
//     if (!category || !amount || !description) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     const newExpense: Expense = {
//       id: Date.now().toString(),
//       category,
//       amount: parseFloat(amount),
//       date: new Date().toISOString(),
//       description,
//       importance,
//     };
//     setExpenses([...expenses, newExpense]);
//     setCategory("");
//     setAmount("");
//     setDescription("");
//     setImportance(50); // Reset slider after adding an expense
//     toast.success("Expense added successfully!");
//   };

//   const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

//   const chartData = categories
//     .map((cat) => ({
//       name: cat,
//       amount: expenses
//         .filter((exp) => exp.category === cat)
//         .reduce((acc, curr) => acc + curr.amount, 0),
//     }))
//     .filter((data) => data.amount > 0);

//   // Function to get the background color based on importance
//   const getBgColorFromImportance = (importance: number) => {
//     let red = 255,
//       green = 255,
//       blue = 255;

//     if (importance < 33) {
//       // Dark red to light red gradient for low importance
//       red = Math.min(255, 139 + importance * 3.8); // Smoothly increase red
//       green = Math.max(0, 0 + importance * 2.5); // Gradually increase green
//       blue = 0;
//     } else if (importance < 66) {
//       // Yellow to orange gradient for moderate importance
//       red = 255;
//       green = Math.max(0, 255 - ((importance - 33) * 3.8)); // Gradually decrease green
//       blue = 0;
//     } else {
//       // Dark green to light green gradient for high importance
//       red = Math.max(0, 0 + ((importance - 66) * 3.8)); // Gradually increase red
//       green = Math.min(255, 139 + ((importance - 66) * 3.8)); // Smoothly increase green
//       blue = 0;
//     }

//     return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
//   };

//   // Colors for Pie Chart segments"
//   const COLORS = ["#FF5733", "#33C3FF", "#FFC300","#8D33FF" ," #33FF57"," #FF33A6","#3366FF"," #FF6F33" ];

//   return (
//     <div className="space-y-8 p-6 animate-fade-in">
//       <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold">Expense Tracker</h2>
//         <Card className="p-4 bg-primary/10">
//           <div className="flex items-center space-x-2">
//             <IndianRupee className="text-primary" />
//             <span className="font-semibold">Total: {totalExpenses.toFixed(2)}</span>
//           </div>
//         </Card>
//       </div>
//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Expense Tracker Section */}
//         <Card className="p-6 col-span-1">
//           <h3 className="text-xl font-semibold mb-4">Add New Expense</h3>
//           <div className="space-y-4">
//             <div>
//               <Label>Category</Label>
//               <Select value={category} onValueChange={setCategory}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((cat) => (
//                     <SelectItem key={cat} value={cat}>
//                       {cat}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label>Amount</Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
//                 <Input
//                   type="number"
//                   placeholder="0.00"
//                   className="pl-8"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div>
//               <Label>Description</Label>
//               <Input
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//             {/* 🔥 shadcn/ui Slider for Expense Importance (Below Description) */}
//             <div>
//               <Label>Importance: {importance}%</Label>
//               <Slider
//                 value={[importance]}
//                 onValueChange={(value) => setImportance(value[0])}
//                 max={100}
//                 step={1}
//                 className="w-full"
//               />
//             </div>
//             <Button onClick={handleAddExpense} className="w-full">
//               <Plus className="mr-2 h-4 w-4" /> Add Expense
//             </Button>
//           </div>
//         </Card>

//         {/* Spending Overview Section */}
//         <Card className="p-6 col-span-2">
//           <h3 className="text-xl font-semibold mb-4">Spending Overview</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={100}
//                 fill="#8884d8"
//                 dataKey="amount"
//                 label={({ name, percent }) =>
//                   `${name}: ${(percent * 100).toFixed(0)}%`
//                 }
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* Recent Expenses Section */}
//       <Card className="p-6">
//         <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
//         <div className="space-y-4">
//           {expenses.map((expense) => {
//             const borderColor = getBgColorFromImportance(expense.importance); // Get border color based on importance

//             return (
//               <div
//                 key={expense.id}
//                 className="flex items-center justify-between p-4 rounded-lg"
//                 style={{ borderLeft: `4px solid ${borderColor}` }} // Add left border with dynamic color
//               >
//                 <div className="space-y-1">
//                   <p className="font-semibold">{expense.category}</p>
//                   <p className="text-sm">{expense.description}</p>
//                   <p className="text-xs">Importance: {expense.importance}%</p>
//                 </div>
//                 <div className="text-right">
//                   {/* Highlight the amount with the importance color */}
//                   <p
//                     className="font-semibold"
//                     style={{ color: borderColor }}
//                   >
//                     ₹{expense.amount.toFixed(2)}
//                   </p>
//                   <p className="text-sm">
//                     {new Date(expense.date).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ExpenseTracker;

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"; // ✅ Importing shadcn slider
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Plus, IndianRupee } from "lucide-react";
import { toast } from "sonner";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  importance: number;
}

const categories = [
  "Food & Dining",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Bills & Utilities",
  "Education",
  "Healthcare",
  "Other",
];

const ExpenseTracker = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(50); // Default importance level at 50%
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
      description,
      importance,
    };
    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount("");
    setDescription("");
    setImportance(50); // Reset slider after adding an expense
    toast.success("Expense added successfully!");
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const chartData = categories
    .map((cat) => ({
      name: cat,
      amount: expenses
        .filter((exp) => exp.category === cat)
        .reduce((acc, curr) => acc + curr.amount, 0),
    }))
    .filter((data) => data.amount > 0);

  // Function to get the background color based on importance
  const getBgColorFromImportance = (importance: number) => {
    let red = 255,
      green = 255,
      blue = 255;

    if (importance < 33) {
      // Dark red to light red gradient for low importance
      red = Math.min(255, 139 + importance * 3.8); // Smoothly increase red
      green = Math.max(0, 0 + importance * 2.5); // Gradually increase green
      blue = 0;
    } else if (importance < 66) {
      // Yellow to orange gradient for moderate importance
      red = 255;
      green = Math.max(0, 255 - ((importance - 33) * 3.8)); // Gradually decrease green
      blue = 0;
    } else {
      // Dark green to light green gradient for high importance
      red = Math.max(0, 0 + ((importance - 66) * 3.8)); // Gradually increase red
      green = Math.min(255, 139 + ((importance - 66) * 3.8)); // Smoothly increase green
      blue = 0;
    }

    return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
  };

  // Colors for Pie Chart segments
  const COLORS = ["#FF5733", "#33C3FF", "#FFC300", "#8D33FF", "#33FF57", "#FF33A6", "#3366FF", "#FF6F33"];

  // Function to get category-specific colors
  const getCategoryColor = (categoryName: string) => {
    const categoryColors: { [key: string]: string } = {
      "Food & Dining": "#FF5733",
      "Transportation": "#33C3FF",
      "Entertainment": "#FFC300",
      "Shopping": "#8D33FF",
      "Bills & Utilities": "#33FF57",
      "Education": "#FF33A6",
      "Healthcare": "#3366FF",
      "Other": "#FF6F33",
    };
    return categoryColors[categoryName] || "#000000"; // Default to black if category not found
  };

  return (
    <div className="space-y-8 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Expense Tracker</h2>
        <Card className="p-4 bg-primary/10">
          <div className="flex items-center space-x-2">
            <IndianRupee className="text-primary" />
            <span className="font-semibold">Expense: {totalExpenses.toFixed(2)}</span>
          </div>
        </Card>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Expense Tracker Section */}
        <Card className="p-6 col-span-1">
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
                <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
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
            {/* 🔥 shadcn/ui Slider for Expense Importance (Below Description) */}
            <div>
              <Label>Importance: {importance}%</Label>
              <Slider
                value={[importance]}
                onValueChange={(value) => setImportance(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <Button onClick={handleAddExpense} className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Expense
            </Button>
          </div>
        </Card>
        {/* Spending Overview Section */}
        <Card className="p-6 col-span-2">
          <h3 className="text-xl font-semibold mb-4">Spending Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="amount"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
      {/* Recent Expenses Section */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
        <div className="space-y-4">
          {expenses.map((expense) => {
            const borderColor = getBgColorFromImportance(expense.importance); // Get border color based on importance
            const categoryColor = getCategoryColor(expense.category); // Get category-specific color

            return (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 rounded-lg"
                style={{ borderLeft: `4px solid ${borderColor}` }} // Add left border with dynamic color
              >
                <div className="space-y-1">
                  {/* Apply category-specific color to the category name */}
                  <p className="font-semibold" style={{ color: categoryColor }}>
                    {expense.category}
                  </p>
                  <p className="text-sm">{expense.description}</p>
                  <p className="text-xs">Importance: {expense.importance}%</p>
                </div>
                <div className="text-right">
                  {/* Highlight the amount with the importance color */}
                  <p
                    className="font-semibold"
                    style={{ color: borderColor }}
                  >
                    ₹{expense.amount.toFixed(2)}
                  </p>
                  <p className="text-sm">
                    {new Date(expense.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default ExpenseTracker;