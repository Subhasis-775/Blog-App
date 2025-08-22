import { useEffect, useState } from "react";
import { getArticles, deleteArticle } from "../api/articleApi";



export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await getArticles();
      console.log("Fetched from API:", res.data); // 👀 Debug log
      setArticles(res.data);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      fetchArticles(); // refresh list after delete
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="space-y-4 mt-6">
      {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((a) => (
          <div
            key={a._id}
            className="bg-white shadow-md p-4 rounded-xl border flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="text-gray-700">{a.content}</p>
            <p className="text-sm text-gray-500">
              <b>Author:</b> {a.author}
            </p>
            <button
              onClick={() => handleDelete(a._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md w-fit"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No articles yet. Add one!</p>
      )}
    </div>
  );
}