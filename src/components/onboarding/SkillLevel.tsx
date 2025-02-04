import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const navigate = useNavigate();

  const handleQuizStart = () => {
    navigate(`/quiz/${selectedLevel}`);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Select your financial knowledge level</Label>
        <RadioGroup 
          defaultValue="beginner" 
          onValueChange={(value) => setSelectedLevel(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="beginner" id="beginner" />
            <Label htmlFor="beginner">Beginner</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="intermediate" />
            <Label htmlFor="intermediate">Intermediate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expert" id="expert" />
            <Label htmlFor="expert">Expert</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full">
          Skip & Finish
        </Button>
        <Button 
          className="w-full bg-yellow-500 hover:bg-yellow-600"
          onClick={handleQuizStart}
        >
          Take Quick Quiz
        </Button>
      </div>
    </div>
  );
};

export default SkillLevel;