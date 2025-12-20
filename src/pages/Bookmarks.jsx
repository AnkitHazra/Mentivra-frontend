import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    api.get("/bookmarks").then((res) => setBookmarks(res.data));
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Bookmarked Questions
        </h1>

        {bookmarks.length === 0 ? (
          <p className="text-gray-400">
            You haven’t bookmarked any questions yet.
          </p>
        ) : (
          <div className="space-y-6">
            {bookmarks.map((b, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6"
              >
                <p className="text-white leading-relaxed">
                  {b.question.questionText}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
