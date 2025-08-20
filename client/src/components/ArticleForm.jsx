import { useState } from "react"
import { createArticle } from "../api/articleApi";

const ArticleForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createArticle({ title, content, author });
    setTitle("");
    setContent("");
    setAuthor("");
    if (onSuccess) onSuccess();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto mb-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Create New Article</h2>
      
      <input 
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea 
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
      />

      <input 
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Create
      </button>
    </form>
  );
};

export default ArticleForm;
