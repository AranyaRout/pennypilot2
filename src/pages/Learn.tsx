import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      title: "Budgeting Basics",
      description: "Master the fundamentals of creating and maintaining a budget that works for you. Learn essential strategies for financial success.",
      type: "article",
      level: "beginner"
    },
    {
      title: "Investment 101",
      description: "Understand different investment options and how to build a strong investment portfolio for long-term growth.",
      type: "video",
      level: "intermediate"
    },
    {
      title: "Smart Saving Strategies",
      description: "Learn effective methods to save money, create emergency funds, and achieve your financial goals faster.",
      type: "article",
      level: "beginner"
    },
    {
      title: "Advanced Market Analysis",
      description: "Deep dive into market trends, technical analysis, and advanced investment strategies.",
      type: "article",
      level: "expert"
    },
    {
      title: "Digital Banking & Savings",
      description: "Explore modern banking tools and apps that can help automate your savings and maximize returns.",
      type: "video",
      level: "beginner"
    },
    {
      title: "Tax-Efficient Saving Methods",
      description: "Discover ways to save money while optimizing your tax benefits through various investment vehicles.",
      type: "article",
      level: "intermediate"
    }
  ];

  const handleStartQuiz = (level: string) => {
    navigate(`/quiz/${level}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Learn</h2>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg leading-tight">
                {article.type === "article" ? (
                  <BookOpen className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <Video className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="line-clamp-2">{article.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary capitalize">{article.level}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="hidden md:block">
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
          <rect
            x="40"
            y="60"
            width="120"
            height="80"
            rx="10"
            fill="#6A0DAD"
            className="animate-pulse"
          />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x="50"
              y={70 + i * 20}
              width="100"
              height="10"
              rx="2"
              fill="#D8BFD8"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Learn;