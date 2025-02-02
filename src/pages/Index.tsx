import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Gem, ChartBar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white animate-float">
              Penny
              <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
                Pilot
              </span>
            </h1>
            <p className="text-2xl text-white/90 animate-fade-in">
              Smart Money, <span className="text-accent-cyan">Smart Future!</span>
            </p>
            <p className="text-lg text-white/80">
              Join PennyPilot and start your journey to financial literacy. Learn,
              track expenses, earn rewards, and make smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent-cyan hover:bg-accent-cyan/90 text-black font-semibold group animate-fade-in"
                asChild
              >
                <Link to="/login">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 animate-fade-in"
                asChild
              >
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                {
                  icon: DollarSign,
                  text: "Track Expenses",
                },
                {
                  icon: Gem,
                  text: "Earn Rewards",
                },
                {
                  icon: ChartBar,
                  text: "View Progress",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-white p-4 rounded-lg bg-white/10 backdrop-blur-sm animate-fade-in"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <feature.icon className="w-8 h-8 text-accent-cyan" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;