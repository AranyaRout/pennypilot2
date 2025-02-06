import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Briefcase, GraduationCap, School, User } from "lucide-react";

const ProfessionSelection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
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
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img 
          src="/animations/career-path.gif" 
          alt="Career path roadmap animation" 
          className="w-64 h-64 object-contain animate-float"
        />
      </div>
    </div>
  );
};

export default ProfessionSelection;