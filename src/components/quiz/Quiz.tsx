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
        // ... 8 more beginner questions
        {
          question: "What is the purpose of saving money?",
          options: [
            "To achieve financial goals and security",
            "To spend more later",
            "To avoid using banks",
            "To pay more taxes"
          ],
          correctAnswer: "To achieve financial goals and security"
        },
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
        // ... 8 more intermediate questions
        {
          question: "What is a mutual fund?",
          options: [
            "A pool of money from multiple investors",
            "A savings account",
            "A type of credit card",
            "A government bond"
          ],
          correctAnswer: "A pool of money from multiple investors"
        },
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
        // ... 8 more expert questions
        {
          question: "What is market capitalization?",
          options: [
            "Total value of a company's outstanding shares",
            "Company's annual profit",
            "Stock market index",
            "Daily trading volume"
          ],
          correctAnswer: "Total value of a company's outstanding shares"
        },
      ]
    };

    // Generate 10 questions based on level
    const levelQuestions = questionsByLevel[level];
    setQuestions(levelQuestions.slice(0, 10));
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

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      toast.success(`Quiz completed! Your score: ${score}/${questions.length}`);
      setTimeout(() => navigate("/learn"), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
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
          Question {currentQuestion + 1}/{questions.length}
        </div>
      </div>

      <Progress value={(currentQuestion / questions.length) * 100} className="mb-6" />

      {questions[currentQuestion] && (
        <QuizQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          correctAnswer={questions[currentQuestion].correctAnswer}
          onAnswer={handleAnswer}
        />
      )}

      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">Current Score: {score}/{questions.length}</p>
      </div>
    </div>
  );
};

export default Quiz;