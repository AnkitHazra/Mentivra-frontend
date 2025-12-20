import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Dashboard() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    api.get("/exams").then((res) => setExams(res.data));
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Your Dashboard
          </h1>
          <p className="text-gray-400 max-w-xl">
            Select an exam to begin structured practice using previous year
            questions.
          </p>
        </div>

        {/* Exam Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {exams.map((exam) => (
            <Link key={exam._id} to={`/subjects/${exam._id}`}>
              <div className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-white/10 transition">
                <h2 className="text-2xl font-medium text-white mb-2">
                  {exam.name}
                </h2>

                <p className="text-gray-400 mb-6">
                  Topic-wise PYQs with clear solutions and calm study flow.
                </p>

                <div className="flex items-center text-indigo-400 group-hover:text-indigo-300">
                  <span className="text-sm">Start practicing</span>
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
