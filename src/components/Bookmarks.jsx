import React from "react";

const Bookmarks = ({ bookmarks, setBookmarks }) => {
  const deleteFromBookmarks = (fact) => {
    let newBookmarks = bookmarks?.filter((b) => b !== fact);
    setBookmarks(newBookmarks);
  };
  return (
    <div>
      <h2 className="heading">Bookmarks</h2>
      <div className="fact-container">
        {bookmarks.map((fact, i) => (
          <div className="fact" key={i}>
            <p>{fact}</p>
            <button
              onClick={() => deleteFromBookmarks(fact)}
              className="fact-cta-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
