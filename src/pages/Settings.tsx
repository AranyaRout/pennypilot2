import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear any stored user data/tokens
    localStorage.clear();
    sessionStorage.clear();
    
    // Show success message
    toast.success("Successfully signed out!");
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-6">
        <div className="pt-6 border-t">
          <Button 
            variant="destructive"
            onClick={handleSignOut}
            className="w-full sm:w-auto"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;