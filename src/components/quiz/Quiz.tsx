import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuizQuestion from "./QuizQuestion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface QuizProps {
  level: "beginner" | "intermediate" | "expert";
}

const Quiz = ({ level }: QuizProps) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const generateQuestions = async () => {
    // This is a mock implementation. Replace with actual AI API integration
    const questionsByLevel = {
      beginner: [
        {
          question: "What is a budget?",
          options: [
            "A financial plan for spending and saving",
            "A type of bank account",
            "A credit card limit",
            "A loan application"
          ],
          correctAnswer: "A financial plan for spending and saving"
        },
        // ... Add more questions
      ],
      intermediate: [
        {
          question: "What is compound interest?",
          options: [
            "Interest earned on both principal and accumulated interest",
            "A fixed interest rate",
            "A type of loan",
            "Monthly bank charges"
          ],
          correctAnswer: "Interest earned on both principal and accumulated interest"
        },
        // ... Add more questions
      ],
      expert: [
        {
          question: "What is a diversified investment portfolio?",
          options: [
            "A mix of different types of investments to reduce risk",
            "Investing all money in stocks",
            "A savings account with high interest",
            "A retirement plan"
          ],
          correctAnswer: "A mix of different types of investments to reduce risk"
        },
        // ... Add more questions
      ]
    };

    setQuestions(questionsByLevel[level]);
    setLoading(false);
  };

  useEffect(() => {
    generateQuestions();
  }, [level]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer!");
    }

    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      toast.success(`Quiz completed! Your score: ${score}/10`);
      setTimeout(() => navigate("/learn"), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" onClick={() => navigate("/learn")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learn
        </Button>
        <div className="text-sm font-medium">
          Question {currentQuestion + 1}/10
        </div>
      </div>

      <Progress value={(currentQuestion / 10) * 100} className="mb-6" />

      {questions[currentQuestion] && (
        <QuizQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          correctAnswer={questions[currentQuestion].correctAnswer}
          onAnswer={handleAnswer}
        />
      )}

      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">Current Score: {score}/10</p>
      </div>
    </div>
  );
};

export default Quiz;