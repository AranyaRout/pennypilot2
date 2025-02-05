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
        {
          question: "What is the difference between needs and wants?",
          options: [
            "Needs are essential, wants are desired but not essential",
            "Needs are cheaper, wants are more expensive",
            "Needs are for adults, wants are for children",
            "Needs are short-term, wants are long-term"
          ],
          correctAnswer: "Needs are essential, wants are desired but not essential"
        },
        {
          question: "What is the importance of tracking your expenses?",
          options: [
            "To know where your money is going",
            "To impress your friends",
            "To avoid paying taxes",
            "To get a better credit score"
          ],
          correctAnswer: "To know where your money is going"
        },
        {
          question: "What is the first step in creating a budget?",
          options: [
            "Calculate your income",
            "List all your expenses",
            "Set financial goals",
            "Open a savings account"
          ],
          correctAnswer: "Calculate your income"
        },
        {
          question: "What is an emergency fund?",
          options: [
            "Money set aside for unexpected expenses",
            "A fund for vacations",
            "A retirement account",
            "A fund for buying a house"
          ],
          correctAnswer: "Money set aside for unexpected expenses"
        },
        {
          question: "What is the 50/30/20 rule?",
          options: [
            "50% needs, 30% wants, 20% savings",
            "50% savings, 30% needs, 20% wants",
            "50% investments, 30% savings, 20% needs",
            "50% wants, 30% savings, 20% needs"
          ],
          correctAnswer: "50% needs, 30% wants, 20% savings"
        },
        {
          question: "What is the benefit of paying bills on time?",
          options: [
            "Avoid late fees and maintain a good credit score",
            "Get discounts on future purchases",
            "Earn reward points",
            "Win a lottery"
          ],
          correctAnswer: "Avoid late fees and maintain a good credit score"
        },
        {
          question: "What is the difference between saving and investing?",
          options: [
            "Saving is for short-term goals, investing is for long-term goals",
            "Saving is riskier than investing",
            "Saving earns higher returns than investing",
            "Saving is only for emergencies"
          ],
          correctAnswer: "Saving is for short-term goals, investing is for long-term goals"
        },
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
        {
          question: "What is a credit score?",
          options: [
            "A number that reflects your creditworthiness",
            "A type of bank account",
            "A credit card limit",
            "A loan application"
          ],
          correctAnswer: "A number that reflects your creditworthiness"
        },
        {
          question: "What is diversification in investing?",
          options: [
            "Spreading investments across different assets",
            "Investing only in stocks",
            "Investing only in bonds",
            "Investing in a single company"
          ],
          correctAnswer: "Spreading investments across different assets"
        },
        {
          question: "What is the stock market?",
          options: [
            "A place where stocks are bought and sold",
            "A farmers market",
            "A flea market",
            "A place to buy groceries"
          ],
          correctAnswer: "A place where stocks are bought and sold"
        },
        {
          question: "What is a bond?",
          options: [
            "A debt instrument issued by governments or corporations",
            "A type of stock",
            "A savings account",
            "A credit card"
          ],
          correctAnswer: "A debt instrument issued by governments or corporations"
        },
        {
          question: "What is inflation?",
          options: [
            "The rate at which the general level of prices for goods and services is rising",
            "A type of investment",
            "A government policy",
            "A type of loan"
          ],
          correctAnswer: "The rate at which the general level of prices for goods and services is rising"
        },
        {
          question: "What is a Roth IRA?",
          options: [
            "A retirement account with tax-free withdrawals",
            "A type of savings account",
            "A credit card",
            "A loan"
          ],
          correctAnswer: "A retirement account with tax-free withdrawals"
        },
        {
          question: "What is the difference between a stock and a bond?",
          options: [
            "Stocks represent ownership in a company, bonds are loans to a company or government",
            "Stocks are safer than bonds",
            "Bonds are riskier than stocks",
            "Stocks pay fixed interest, bonds do not"
          ],
          correctAnswer: "Stocks represent ownership in a company, bonds are loans to a company or government"
        },
        {
          question: "What is dollar-cost averaging?",
          options: [
            "Investing a fixed amount of money at regular intervals",
            "Investing all your money at once",
            "Investing only when the market is high",
            "Investing only when the market is low"
          ],
          correctAnswer: "Investing a fixed amount of money at regular intervals"
        },
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
        {
          question: "What is an ETF (Exchange Traded Fund)?",
          options: [
            "A type of investment fund that trades on stock exchanges",
            "A savings account",
            "A credit card",
            "A loan"
          ],
          correctAnswer: "A type of investment fund that trades on stock exchanges"
        },
        {
          question: "What is the Sharpe Ratio?",
          options: [
            "A measure of risk-adjusted return",
            "A type of stock",
            "A type of bond",
            "A measure of inflation"
          ],
          correctAnswer: "A measure of risk-adjusted return"
        },
        {
          question: "What is beta in finance?",
          options: [
            "A measure of a stock's volatility in relation to the market",
            "A type of investment strategy",
            "A type of financial statement",
            "A measure of a company's profit"
          ],
          correctAnswer: "A measure of a stock's volatility in relation to the market"
        },
        {
          question: "What is the Capital Asset Pricing Model (CAPM)?",
          options: [
            "A model used to determine the expected rate of return for an asset",
            "A type of savings account",
            "A credit card",
            "A loan"
          ],
          correctAnswer: "A model used to determine the expected rate of return for an asset"
        },
        {
          question: "What is the efficient market hypothesis?",
          options: [
            "The theory that asset prices fully reflect all available information",
            "A type of investment strategy",
            "A type of financial statement",
            "A measure of a company's profit"
          ],
          correctAnswer: "The theory that asset prices fully reflect all available information"
        },
        {
          question: "What is a hedge fund?",
          options: [
            "A private investment fund that uses a variety of strategies to generate returns",
            "A type of savings account",
            "A credit card",
            "A loan"
          ],
          correctAnswer: "A private investment fund that uses a variety of strategies to generate returns"
        },
        {
          question: "What is quantitative easing?",
          options: [
            "A monetary policy used by central banks to increase the money supply",
            "A type of investment strategy",
            "A type of financial statement",
            "A measure of a company's profit"
          ],
          correctAnswer: "A monetary policy used by central banks to increase the money supply"
        },
        {
          question: "What is behavioral finance?",
          options: [
            "The study of how psychology influences financial decisions",
            "A type of investment strategy",
            "A type of financial statement",
            "A measure of a company's profit"
          ],
          correctAnswer: "The study of how psychology influences financial decisions"
        },
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
