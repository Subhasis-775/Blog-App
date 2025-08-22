import { useState, useEffect } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import { getArticles } from "./api/articleApi";

function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await getArticles();
    setArticles(res.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 Blog Platform</h1>
      <ArticleForm onSuccess={fetchArticles} />
      <ArticleList articles={articles} fetchArticles={fetchArticles} />
    </div>
  );
}
export default App;
