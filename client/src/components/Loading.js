import React, { useEffect, useState } from 'react';

function Loading() {
  const [spanColor1, setSpanColor1] = useState("black");
  const [spanColor2, setSpanColor2] = useState("black");
  const [spanColor3, setSpanColor3] = useState("black");

  const spans = [setSpanColor1, setSpanColor2, setSpanColor3];
  let index = 0;

  const changeColor = () => {
    for (let i = 0; i < 3; i++) {
      if (i !== index) spans[i]("black");
    }

    spans[index]("green");
    index = (index + 1) % 3;
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, 1000); // Change color every 1 second

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="container">
      <span id="span-1" style={{ backgroundColor: spanColor1 }}></span>
      <span id="span-2" style={{ backgroundColor: spanColor2 }}></span>
      <span id="span-3" style={{ backgroundColor: spanColor3 }}></span>
    </div>
  );
}

export default Loading;
