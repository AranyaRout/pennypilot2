import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import AccountCreation from "@/components/onboarding/AccountCreation";
import ProfileSetup from "@/components/onboarding/ProfileSetup";
import ProfessionSelection from "@/components/onboarding/ProfessionSelection";
import LearningPreferences from "@/components/onboarding/LearningPreferences";
import SkillLevel from "@/components/onboarding/SkillLevel";
import IncomeSetup from "@/components/onboarding/IncomeSetup";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const steps = [
  "Account Creation",
  "Profile Setup",
  "Profession",
  "Income Setup",
  "Learning Style",
  "Skill Level",
];

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  
  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success("Account created successfully!");
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-accent-pink/80 to-accent-cyan/90">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  {steps[currentStep - 1]}
                  <Sparkles className="text-primary animate-pulse" />
                </h1>
                <span className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {currentStep === 1 && <AccountCreation />}
                {currentStep === 2 && <ProfileSetup />}
                {currentStep === 3 && <ProfessionSelection />}
                {currentStep === 4 && <IncomeSetup />}
                {currentStep === 5 && <LearningPreferences />}
                {currentStep === 6 && <SkillLevel />}
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-pink rounded-lg blur opacity-75 animate-pulse"></div>
                  <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-lg p-6">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 transform hover:scale-105 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/20 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-primary/20 rounded"></div>
                            <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="mr-2" /> Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              >
                {currentStep === steps.length ? "Complete" : "Next"} <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;