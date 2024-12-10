import React, { useState } from "react";
import { useRef } from "react";

const Refex = () => {
  const refcount = useRef(0);
  const [count, setCount] = useState(0);
  console.log("Rendering");
  if (refcount.current == 5) {
    alert("Refcount" + refcount.current);
  }
  return (
    <>
      <div>
        <h2>Refcouunt={refcount.current}</h2>
        <button
          onClick={() => {
            refcount.current++;
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Refex;
