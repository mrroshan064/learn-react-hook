import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setShowText(!showText);
        }}
      ></button>

      {showText && <h1>Hello World</h1>}
    </div>
  );
};
export default State;
