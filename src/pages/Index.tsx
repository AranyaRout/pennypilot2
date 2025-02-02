import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Smart Money,{" "}
            <span className="text-accent-cyan">Smart Future!</span>
          </h1>
          <p className="text-lg text-white/90">
            Join PennyPilot and start your journey to financial literacy. Learn,
            track expenses, earn rewards, and make smarter financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-black font-semibold"
              asChild
            >
              <Link to="/signup">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/login">Already have an account?</Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            <img
              src="/placeholder.svg"
              alt="Financial Growth"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;