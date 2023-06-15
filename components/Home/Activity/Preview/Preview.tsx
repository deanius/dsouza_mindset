import React, { useState } from "react";

function Preview({ content }: any) {
  const [trimmed, setTrimmed] = useState(true);
  const words = content.split(" ");
  const trimmedWords = words.slice(0, 12);
  const joined = trimmedWords.join(" ");
  const stringWithoutBrTags = joined.replace(/<br>/gi, "");
  const result = stringWithoutBrTags + "...";

  const toggleTrimmed = () => {
    setTrimmed(!trimmed);
  };

  return (
    <div>
      <p>{trimmed ? result : content}</p>
      <h5 onClick={toggleTrimmed}>{trimmed ? "Show More" : "Show Less"}</h5>
    </div>
  );
}

export default Preview;
