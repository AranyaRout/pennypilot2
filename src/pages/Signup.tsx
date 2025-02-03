import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 animate-fade-in">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-center">
              {steps[currentStep - 1]}
            </h1>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Step {currentStep} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
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

            <div className="hidden md:block">
              {currentStep === 1 && (
                <div className="coin-stack-animation">
                  <svg viewBox="0 0 200 200" className="w-full">
                    <circle cx="100" cy="150" r="30" fill="gold" className="animate-bounce" />
                    <circle cx="100" cy="120" r="30" fill="gold" className="animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <circle cx="100" cy="90" r="30" fill="gold" className="animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </svg>
                </div>
              )}
              {currentStep === 2 && (
                <div className="piggy-bank-animation">
                  <svg viewBox="0 0 200 200" className="w-full">
                    <circle cx="100" cy="100" r="60" fill="#FF69B4" className="animate-pulse" />
                    <circle cx="100" cy="90" r="15" fill="#FFB6C6" />
                    <circle cx="85" cy="80" r="5" fill="#333" />
                    <circle cx="115" cy="80" r="5" fill="#333" />
                  </svg>
                </div>
              )}
              {/* Add more step-specific animations here */}
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2" /> Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? "Complete" : "Next"} <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;