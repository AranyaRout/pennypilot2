import { useParams } from "react-router-dom";
import Quiz from "@/components/quiz/Quiz";

const QuizPage = () => {
  const { level } = useParams<{ level: string }>();
  
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Financial Knowledge Quiz - {level?.charAt(0).toUpperCase() + level?.slice(1)}
      </h1>
      <Quiz level={level as "beginner" | "intermediate" | "expert"} />
    </div>
  );
};

export default QuizPage;