

import { BookOpen, IndianRupee, PiggyBank, GraduationCap, Brain, Briefcase, LineChart, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Learn = () => {
  const navigate = useNavigate();
  const age = 25; // This would come from user context in a real app

  const getAgeGroup = (age: number) => {
    if (age < 20) return "Teens";
    if (age < 40) return "Adults";
    return "Seniors";
  };

  const handleStartQuiz = (level: string) => {
    navigate(`/quiz/${level}`);
  };

  // State to manage which section is expanded
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    // Collapse the section if it's already open, otherwise expand it
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gradient-to-br from-background to-background/80">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold bg-clip-text text-primary ">
          Learn Financial Management
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => handleStartQuiz("beginner")} variant="outline">
            Beginner Quiz
          </Button>
          <Button onClick={() => handleStartQuiz("intermediate")} variant="outline">
            Intermediate Quiz
          </Button>
          <Button onClick={() => handleStartQuiz("expert")} variant="outline">
            Expert Quiz
          </Button>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Budgeting Basics */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("budgeting")}
          >
            <BookOpen className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Budgeting Basics</h2>
            <span
              className={`ml-auto text-primary font-bold transition-transform ${
                expandedSection === "budgeting" ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </div>
          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedSection === "budgeting" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-black">
                <strong className="text-primary">What it is:</strong> This is the process of creating a plan to spend your money. This spending plan is called a budget. Creating this plan allows you to determine in advance whether you will have enough money to do the things you need to do or would like to do.
              </p>
              <p className="text-black">
                <strong className="text-primary">Why it matters:</strong> Helps you track income and expenses, avoid overspending, and ensure you’re saving for future goals.
              </p>
              <p className="text-black">
                <strong className="text-primary">How to start:</strong>
                <ul className="list-disc pl-4">
                  <li>Track your income and expenses.</li>
                  <li>Use the 50/30/20 rule: Allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment.</li>
                  <li>Use budgeting tools or apps to stay organized.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Investment Ideas */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("investment")}
          >
            <IndianRupee className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Investment Ideas</h2>
            <span
              className={`ml-auto text-primary font-bold transition-transform ${
                expandedSection === "investment" ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </div>
          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedSection === "investment" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-black">
                <strong className="text-primary">What it is:</strong> This is the act of allocating resources, usually money, with the expectation of generating an income or profit. You can invest in stocks, bonds, real estate, or start your own business.
              </p>
              <p className="text-black">
                <strong className="text-primary">Why it matters:</strong> Helps grow wealth and beat inflation.
              </p>
              <p className="text-black">
                <strong className="text-primary">How to start:</strong>
                <ul className="list-disc pl-4">
                  <li>Learn about different investment options (stocks, bonds, mutual funds, ETFs, real estate).</li>
                  <li>Start early to take advantage of compound interest.</li>
                  <li>Diversify your investments to reduce risk.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Saving Strategies */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("saving")}
          >
            <PiggyBank className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Saving Strategies</h2>
            <span
              className={`ml-auto text-primary font-bold transition-transform ${
                expandedSection === "saving" ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </div>
          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedSection === "saving" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-black">
                <strong className="text-primary">What it is:</strong> This involves setting aside money for future use. It is important for unexpected expenses, retirement, or large purchases. A good rule of thumb is to save at least 20% of your income.
              </p>
              <p className="text-black">
                <strong className="text-primary">Why it matters:</strong> Provides financial security and helps you achieve long-term goals.
              </p>
              <p className="text-black">
                <strong className="text-primary">How to start:</strong>
                <ul className="list-disc pl-4">
                  <li>Build an emergency fund (3–6 months of living expenses).</li>
                  <li>Save for short-term goals (e.g., vacations) and long-term goals (e.g., retirement).</li>
                  <li>Automate savings to make it consistent.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-semibold">Recommended for Students</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Financial Literacy 101</h3>
            </div>
            <p className="text-muted-foreground">
              Essential financial concepts every student should know.
            </p>
          </div>
          <div className="p-4 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Student Budget Planning</h3>
            </div>
            <p className="text-muted-foreground">
              Learn to manage your finances while studying.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-[#8B5CF6]" />
          Recommended for {getAgeGroup(age)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getAgeGroup(age) === "Adults" && (
            <>
              <div className="p-6 border rounded-lg bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/10 hover:from-[#8B5CF6]/20 hover:to-[#D946EF]/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <LineChart className="h-6 w-6 text-[#D946EF]" />
                  <h3 className="font-semibold text-[#8B5CF6]">Investment Basics</h3>
                </div>
                <p className="text-muted-foreground">
                  Start your investment journey with fundamental knowledge and practical strategies.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-gradient-to-br from-[#F97316]/10 to-[#0EA5E9]/10 hover:from-[#F97316]/20 hover:to-[#0EA5E9]/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <PieChart className="h-6 w-6 text-[#0EA5E9]" />
                  <h3 className="font-semibold text-[#F97316]">Career Financial Planning</h3>
                </div>
                <p className="text-muted-foreground">
                  Learn to align your financial goals with your career progression for optimal growth.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;