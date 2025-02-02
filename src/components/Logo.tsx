import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-90 transition-opacity"
    >
      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-float">
        <span className="text-white text-xl font-black">P</span>
      </div>
      <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
        PennyPilot
      </span>
    </Link>
  );
};