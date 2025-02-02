import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  BookOpen,
} from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome back, Pilot! 👋</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234.56</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Income</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,345.67</div>
              <p className="text-xs text-muted-foreground">
                +12.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,111.11</div>
              <p className="text-xs text-muted-foreground">
                -5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">
                $3,750 of $5,000 goal
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Daily Financial Tip</CardTitle>
              <CardDescription>Boost your financial knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">The 50/30/20 Rule</h3>
                  <p className="text-sm text-muted-foreground">
                    Allocate 50% of your income to needs, 30% to wants, and 20% to
                    savings and debt repayment for better financial management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest spending activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Grocery Shopping",
                    amount: -85.5,
                    date: "Today",
                  },
                  {
                    name: "Salary Deposit",
                    amount: 2500,
                    date: "Yesterday",
                  },
                  {
                    name: "Netflix Subscription",
                    amount: -15.99,
                    date: "2 days ago",
                  },
                ].map((transaction, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {transaction.date}
                      </div>
                    </div>
                    <div
                      className={
                        transaction.amount > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transaction.amount > 0 ? "+" : ""}$
                      {Math.abs(transaction.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;