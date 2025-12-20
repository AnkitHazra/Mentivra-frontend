import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function Questions() {
  const { chapterId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [openSolution, setOpenSolution] = useState(null);

  useEffect(() => {
    api
      .get(`/questions?chapterId=${chapterId}&page=${page}`)
      .then((res) => {
        setQuestions(res.data.questions);
        setPages(res.data.pages);
      });
  }, [chapterId, page]);

  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {questions.map((q, index) => (
          <div
            key={q._id}
            className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
          >
            <p className="text-gray-400 text-sm mb-3">
              Question {index + 1}
            </p>

            <p className="text-white text-lg leading-relaxed mb-6">
              {q.questionText}
            </p>

            {q.options?.length > 0 && (
              <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    className="text-gray-300 text-sm border border-white/10 rounded-lg p-3"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() =>
                setOpenSolution(openSolution === q._id ? null : q._id)
              }
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              {openSolution === q._id
                ? "Hide Solution"
                : "View Solution"}
            </button>

            {openSolution === q._id && (
              <div className="mt-4 text-gray-300 text-sm leading-relaxed border-l-2 border-indigo-400 pl-4">
                {q.solution}
              </div>
            )}
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-between pt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded-md border border-white/20 text-gray-300 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-md border border-white/20 text-gray-300 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
