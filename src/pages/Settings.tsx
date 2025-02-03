import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Settings as SettingsIcon, Moon, Sun } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold">Settings</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Display Name</Label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-sm text-gray-500">
                  Toggle dark mode appearance
                </p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive important updates
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden md:block">
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#6A0DAD"
            strokeWidth="4"
            className="animate-spin"
            style={{ transformOrigin: "center", animationDuration: "3s" }}
          />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={40 - i * 10}
              fill="none"
              stroke="#D8BFD8"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Settings;