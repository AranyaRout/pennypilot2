import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Award } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to PennyPilot</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <DollarSign className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Balance</h3>
                <p className="text-2xl font-bold">$1,234.56</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Savings Goal</h3>
                <p className="text-2xl font-bold">$5,000.00</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Rewards</h3>
                <p className="text-2xl font-bold">1,234 pts</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <p className="text-muted-foreground">No recent transactions</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Financial Tips</h2>
            <p className="text-muted-foreground">Check back later for personalized tips!</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;