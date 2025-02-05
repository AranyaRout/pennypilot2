
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, IndianRupee, Coins } from "lucide-react";

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
            <p className="text-xl lg:text-2xl opacity-90">
              Smart Money, Smart Future!
            </p>
            <p className="text-lg opacity-80">
              Join thousands of users who are taking control of their financial future 
              with PennyPilot's next-gen learning platform.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/signup">
                  Start Your Journey
                  <ArrowRight className="ml-2 animate-pulse" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-lg">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <Rocket className="w-12 h-12 text-white animate-bounce" />
                      <Coins className="w-8 h-8 absolute -bottom-2 -right-2 text-yellow-400 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Get Started</h3>
                      <p className="text-white/80 text-sm">Begin your financial journey</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <IndianRupee className="w-12 h-12 text-green-400 animate-bounce" />
                    <div>
                      <h3 className="text-white font-semibold">Track Growth</h3>
                      <p className="text-white/80 text-sm">Monitor your progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-spin flex items-center justify-center">
                      <Coins className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Learn & Earn</h3>
                      <p className="text-white/80 text-sm">Interactive lessons with rewards</p>
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
