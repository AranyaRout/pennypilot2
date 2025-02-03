import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Smart Budgeting",
    description: "Track your expenses and create intelligent budgets.",
  },
  {
    title: "Investment Learning",
    description: "Learn about investments through interactive lessons.",
  },
  {
    title: "Financial Goals",
    description: "Set and achieve your financial goals with guidance.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins animate-float">
              PennyPilot
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Smart Money, Smart Future!
            </p>
            <p className="text-lg opacity-80">
              Your personal guide to financial literacy. Learn, track, and grow
              your wealth with our interactive platform.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="piggy-bank-container animate-float relative">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
              >
                {/* Piggy Bank Body */}
                <circle cx="100" cy="100" r="80" fill="#FF69B4" className="animate-bounce" />
                {/* Ears */}
                <circle cx="60" cy="50" r="15" fill="#FF69B4" />
                <circle cx="140" cy="50" r="15" fill="#FF69B4" />
                {/* Nose */}
                <circle cx="100" cy="90" r="20" fill="#FFB6C6" />
                {/* Eyes */}
                <circle cx="80" cy="70" r="8" fill="#333" />
                <circle cx="120" cy="70" r="8" fill="#333" />
                {/* Slot */}
                <rect x="85" y="40" width="30" height="5" fill="#333" />
                {/* Coins Animation */}
                <circle cx="50" cy="150" r="10" fill="gold" className="animate-bounce" style={{ animationDelay: "0.1s" }} />
                <circle cx="80" cy="160" r="10" fill="gold" className="animate-bounce" style={{ animationDelay: "0.2s" }} />
                <circle cx="110" cy="150" r="10" fill="gold" className="animate-bounce" style={{ animationDelay: "0.3s" }} />
                <circle cx="140" cy="160" r="10" fill="gold" className="animate-bounce" style={{ animationDelay: "0.4s" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;