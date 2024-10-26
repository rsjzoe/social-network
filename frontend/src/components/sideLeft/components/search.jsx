import { useState } from "react";

export function Search(props) {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div className="list">
        <img src="search-svgrepo-com.svg" alt="" />
        {showInput ? (
          <div className="span-input">
            <input type="text" />
            <img
              src="close-sm-svgrepo-com.svg"
              className="close"
              onClick={() => {
                setShowInput(false);
              }}
            />
          </div>
        ) : (
          <span
            onClick={() => {
              setShowInput(true);
            }}
            className="span-search"
          >
            Search
          </span>
        )}
      </div>
    </>
  );
}
