import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Wand2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ProfileSetup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(25);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIAvatar = async () => {
    setIsGenerating(true);
    try {
      // Using DiceBear API for avatar generation as a placeholder
      // You can replace this with any other AI avatar generation API
      const seed = Math.random().toString(36).substring(7);
      const style = ["adventurer", "avataaars", "bottts", "personas"][Math.floor(Math.random() * 4)];
      const newAvatarUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
      setAvatarUrl(newAvatarUrl);
      toast.success("AI Avatar generated successfully!");
    } catch (error) {
      toast.error("Failed to generate AI avatar. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-primary/10">
            {fullName ? fullName.charAt(0).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-2">
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar-upload"
            onChange={handleAvatarUpload}
          />
          <Label
            htmlFor="avatar-upload"
            className="cursor-pointer flex items-center space-x-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md"
          >
            <Camera className="h-4 w-4" />
            <span>Upload Photo</span>
          </Label>
          <Button
            variant="outline"
            onClick={generateAIAvatar}
            disabled={isGenerating}
            className="flex items-center space-x-2"
          >
            <Wand2 className="h-4 w-4" />
            <span>{isGenerating ? "Generating..." : "Generate AI Avatar"}</span>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <Label>Age: {age}</Label>
        <Slider
          value={[age]}
          onValueChange={(value) => setAge(value[0])}
          min={13}
          max={65}
          step={1}
        />
      </div>
    </div>
  );
};

export default ProfileSetup;