import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { context } from "./context";


function App() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=all&apiKey=8356a3176673446d9993b1ec3a8233cd`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news. Please try again later.');
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <context.Provider value={articles}>
        <Header />
        <div className="container mt-4">
          <Home />
        </div>
      </context.Provider>
    </>
  );
}

export default App;
