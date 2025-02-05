
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles, Coins, ChartLineUp } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent-pink to-accent-cyan">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <Rocket size={48} className="animate-bounce text-white z-10" />
                <Coins size={32} className="absolute -bottom-2 -right-2 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins">
                PennyPilot
              </h1>
            </div>
            <p className="text-xl lg:text-2xl opacity-90 flex items-center gap-2">
              Master Your Money, Shape Your Future! <Sparkles className="animate-pulse" />
            </p>
            <p className="text-lg opacity-80">
              Join thousands of users who are taking control of their financial future 
              with PennyPilot's next-gen learning platform.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/signup">
                  Start Your Journey
                  <ArrowRight className="ml-2 animate-pulse" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 group">
                      <ChartLineUp className="w-12 h-12 text-green-400 mb-4 animate-bounce" />
                      <h3 className="text-white font-semibold">Track Growth</h3>
                      <p className="text-white/80 text-sm">Monitor your financial progress</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 delay-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 animate-spin"></div>
                      <h3 className="text-white font-semibold">Learn & Earn</h3>
                      <p className="text-white/80 text-sm">Interactive lessons with rewards</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 delay-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 animate-float"></div>
                      <h3 className="text-white font-semibold">Smart Goals</h3>
                      <p className="text-white/80 text-sm">Set and achieve milestones</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 delay-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mb-4 animate-pulse"></div>
                      <h3 className="text-white font-semibold">AI Insights</h3>
                      <p className="text-white/80 text-sm">Personalized financial advice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
