import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fact, setFact] = useState([]);
  const [loading, setLoading] = useState(false);
  const [factLimit, setFactLimit] = useState(1);

  // Get Bookmarks from local storage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Set Bookmarks to local storage evertime there is a change in Bookmarks
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Get request to get random facts
  const generateFact = async () => {
    setFact([]);
    setLoading(true);
    const config = {
      headers: {
        "X-Api-Key": "n3YwmPv4yCCCz3ggs/pYGg==zKfTfxjAu3BzaFkw",
      },
    };
    const url = `https://api.api-ninjas.com/v1/facts?limit=${factLimit}`;

    try {
      const res = await axios.get(url, config);
      setFact(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <h1 className="title">Get random facts</h1>

        <div className="nav-links">
          <h3
            className={`link ${currentPage === 0 && "active-link"}`}
            onClick={() => setCurrentPage(0)}
          >
            Home
          </h3>
          <h3
            className={`link ${currentPage === 1 && "active-link"}`}
            onClick={() => setCurrentPage(1)}
          >
            Bookmarks
          </h3>
        </div>
        {currentPage === 0 && (
          <Home
            generateFact={generateFact}
            setFactLimit={setFactLimit}
            fact={fact}
            loading={loading}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        )}

        {currentPage === 1 && (
          <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
        )}
      </div>
    </>
  );
}

export default App;
