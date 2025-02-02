import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-90 transition-opacity">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white text-lg">P</span>
      </div>
      <span>PennyPilot</span>
    </Link>
  );
};