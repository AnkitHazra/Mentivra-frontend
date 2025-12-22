import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function Questions() {
  const { chapterId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [openSolution, setOpenSolution] = useState(null);
  const [aiLoading, setAiLoading] = useState(null);
  const [aiExplanation, setAiExplanation] = useState({});

  // to store selected options per question
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    api
      .get(`/questions?chapterId=${chapterId}&page=${page}`)
      .then((res) => {
        setQuestions(res.data.questions);
        setPages(res.data.pages);
      });
  }, [chapterId, page]);

  function selectOption(qid, option, correctAnswer) {
    setSelectedAnswers({
      ...selectedAnswers,
      [qid]: {
        selected: option,
        correct: option === correctAnswer
      }
    });
  }

  async function askMentivraAI(question) {
    setAiLoading(question._id);

    try {
      const res = await api.post("/ai/explain", {
        questionText: question.questionText,
        options: question.options,
        correctAnswer: question.correctAnswer,
        exam: "JEE / NEET",
        subject: "Physics",
        chapter: question.chapter?.name || "Unknown",
      });
     


      setAiExplanation(prev => ({
        ...prev,
        [question._id]: res.data.explanation,
      }));

    } catch (err) {
      setAiExplanation(prev => ({
        ...prev,
        [question._id]: "Mentivra AI could not generate an explanation right now.",
      }));
    }

    setAiLoading(null);
  }



  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden mb-10">

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">

        {questions.map((q, index) => {

          const userAnswer = selectedAnswers[q._id];

          return (
            <div
              key={q._id}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
            >
              <p className="text-gray-400 text-sm mb-3 flex justify-between">

                <span>Question {index + 1}</span>

                {q.year && (
                  <span className="text-indigo-300">
                    Year: {q.year}
                  </span>
                )}

              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                {q.questionText}
              </p>

              {q.options?.length > 0 && (
                <div className="space-y-3 mb-6">

                  {q.options.map((opt, i) => {

                    const selected = userAnswer?.selected === opt;
                    const correct = q.correctAnswer === opt;

                    // apply visual style based on selection
                    let borderColor = "border-white/10";

                    if (selected) {
                      borderColor = userAnswer.correct
                        ? "border-green-400"
                        : "border-red-500";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() =>
                          selectOption(q._id, opt, q.correctAnswer)
                        }
                        className={`w-full text-left text-gray-300 text-sm 
                          border ${borderColor} rounded-lg p-3 
                          hover:border-indigo-400 transition`}
                      >
                        {opt}
                      </button>
                    );

                  })}

                </div>
              )}

              {/* Show feedback */}
              {userAnswer && (
                <p
                  className={`text-sm mb-3 ${userAnswer.correct ? "text-green-400" : "text-red-400"
                    }`}
                >
                  {userAnswer.correct ? "Correct!" : "Wrong!"}
                </p>
              )}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() =>
                    setOpenSolution(openSolution === q._id ? null : q._id)
                  }
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                >
                  {openSolution === q._id ? "Hide Solution" : "View Solution"}
                </button>

                <button
                  onClick={() => askMentivraAI(q)}
                  className="text-sm text-teal-400 hover:text-teal-300"
                >
                  Mentivra AI ✨
                </button>
              </div>

              {openSolution === q._id && (
                <div className="mt-4 text-gray-300 text-sm leading-relaxed border-l-2 border-indigo-400 pl-4">
                  {q.solution}
                </div>
              )}
              {aiLoading === q._id && (
                <div className="mt-4 text-sm text-gray-400">
                  Mentivra AI is thinking…
                </div>
              )}

              {aiExplanation[q._id] && (
                <div className="mt-4 p-5 rounded-xl bg-white/5 border border-teal-400/30 text-gray-200 text-sm leading-7 whitespace-pre-line">
                  <p className="text-teal-400 font-medium mb-2">
                    Mentivra AI Explanation
                  </p>
                  {aiExplanation[q._id]}
                </div>
              )}


            </div>
          );
        })}

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
