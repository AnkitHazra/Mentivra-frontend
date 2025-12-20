import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

export default function Chapters() {
  const { subjectId } = useParams();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    api.get(`/chapters/${subjectId}`).then((res) => setChapters(res.data));
  }, [subjectId]);

  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Chapters
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Link key={chapter._id} to={`/questions/${chapter._id}`}>
              <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-lg font-medium text-white">
                  {chapter.name}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Practice previous year questions
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
