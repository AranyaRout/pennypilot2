import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LearningPreferences = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Learning Style Preferences</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="audio" />
            <Label htmlFor="audio">Audio Learning</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="visual" />
            <Label htmlFor="visual">Visual Learning</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="both" />
            <Label htmlFor="both">Both</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Daily Time Commitment</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">15 minutes</SelectItem>
            <SelectItem value="30">30 minutes</SelectItem>
            <SelectItem value="45">45 minutes</SelectItem>
            <SelectItem value="60">1 hour</SelectItem>
            <SelectItem value="more">More than 1 hour</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LearningPreferences;