import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProfessionSelection = () => {
  return (
    <div className="space-y-4">
      <Label>Select your current status</Label>
      <RadioGroup defaultValue="school">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="school" id="school" />
          <Label htmlFor="school">School</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="college" id="college" />
          <Label htmlFor="college">College</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="early-career" id="early-career" />
          <Label htmlFor="early-career">Early Career</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="professional" id="professional" />
          <Label htmlFor="professional">Professional</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ProfessionSelection;