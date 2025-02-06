import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Briefcase, GraduationCap, School, User } from "lucide-react";

const ProfessionSelection = () => {
  return (
    <div className="space-y-6">
      <Label className="text-lg font-semibold">Select your current status</Label>
      <RadioGroup defaultValue="school" className="space-y-4">
        <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-colors">
          <RadioGroupItem value="school" id="school" />
          <Label htmlFor="school" className="flex items-center space-x-2 cursor-pointer">
            <School className="w-5 h-5 text-primary animate-bounce" />
            <span>School</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-colors">
          <RadioGroupItem value="college" id="college" />
          <Label htmlFor="college" className="flex items-center space-x-2 cursor-pointer">
            <GraduationCap className="w-5 h-5 text-primary animate-float" />
            <span>College</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-colors">
          <RadioGroupItem value="early-career" id="early-career" />
          <Label htmlFor="early-career" className="flex items-center space-x-2 cursor-pointer">
            <User className="w-5 h-5 text-primary animate-pulse" />
            <span>Early Career</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-colors">
          <RadioGroupItem value="professional" id="professional" />
          <Label htmlFor="professional" className="flex items-center space-x-2 cursor-pointer">
            <Briefcase className="w-5 h-5 text-primary animate-bounce" />
            <span>Professional</span>
          </Label>
        </div>
      </RadioGroup>

      <div className="hidden md:block mt-8">
        <svg viewBox="0 0 200 100" className="w-full h-32">
          <path
            d="M20,80 Q50,20 100,50 T180,80"
            fill="none"
            stroke="#6A0DAD"
            strokeWidth="2"
            className="animate-path-progress"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <circle cx="20" cy="80" r="5" fill="#6A0DAD" className="animate-pulse" />
          <circle cx="100" cy="50" r="5" fill="#6A0DAD" className="animate-bounce" />
          <circle cx="180" cy="80" r="5" fill="#6A0DAD" className="animate-float" />
        </svg>
      </div>
    </div>
  );
};

export default ProfessionSelection;