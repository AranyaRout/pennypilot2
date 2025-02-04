import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent-pink to-accent-cyan">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Rocket size={40} className="animate-bounce text-white" />
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins">
                PennyPilot
              </h1>
            </div>
            <p className="text-xl lg:text-2xl opacity-90 flex items-center gap-2">
              Smart Money, Smart Future! <Sparkles className="animate-pulse" />
            </p>
            <p className="text-lg opacity-80">
              Your personal guide to financial literacy. Learn, track, and grow
              your wealth with our interactive platform.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
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
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/30 mb-4 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      <div className="h-2 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-2/3"></div>
                    </div>
                  ))}
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