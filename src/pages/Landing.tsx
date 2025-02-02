import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
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
                className="text-white border-white hover:bg-white/10"
              >
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/placeholder.svg"
              alt="Financial Growth"
              className="w-full max-w-lg mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;