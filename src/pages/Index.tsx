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
                <Link to="/signup">
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
          <div className="hidden lg:block relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Financial Growth"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;