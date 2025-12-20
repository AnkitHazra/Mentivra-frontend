import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

export default function Subjects() {
  const { examId } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    api.get(`/subjects/${examId}`).then((res) => setSubjects(res.data));
  }, [examId]);

  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Subjects
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link key={subject._id} to={`/chapters/${subject._id}`}>
              <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-lg font-medium text-white">
                  {subject.name}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  View chapter-wise questions
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
