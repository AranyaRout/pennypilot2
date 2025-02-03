import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video } from "lucide-react";

const Learn = () => {
  const articles = [
    {
      title: "Budgeting Basics",
      description: "Learn the fundamentals of creating a budget",
      type: "article",
    },
    {
      title: "Investment 101",
      description: "Understanding different investment options",
      type: "video",
    },
    {
      title: "Saving Strategies",
      description: "Smart ways to save money effectively",
      type: "article",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold">Learn</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {article.type === "article" ? (
                  <BookOpen className="w-5 h-5" />
                ) : (
                  <Video className="w-5 h-5" />
                )}
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{article.description}</p>
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