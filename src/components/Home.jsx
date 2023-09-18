import Loader from "./Loader";

const Home = ({
  generateFact,
  setFactLimit,
  fact,
  loading,
  bookmarks,
  setBookmarks,
}) => {
  const addToBookmarks = (fact) => {
    if (!bookmarks.includes(fact)) {
      setBookmarks([...bookmarks, fact]);
    }
  };
  return (
    <div>
      <button onClick={generateFact} className="generate-btn">
        Generate
      </button>

      <div className="dropdown-container">
        <label htmlFor="facts" className="label">
          Choose Number of facts
        </label>
        <select
          name="facts"
          id="facts"
          onChange={(e) => setFactLimit(e.target.value)}
          className="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>

      {loading && <Loader />}

      <div className="fact-container">
        {fact?.map((f, i) => (
          <div className="fact" key={i}>
            <p>{f.fact}</p>
            <button
              onClick={() => addToBookmarks(f.fact)}
              className="fact-cta-btn"
            >
              BookMark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
