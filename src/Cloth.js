import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";
import "./Cloth.css";

function Cloth() {
  const [num, setNum] = useState(0);

  return (
    <div className="cloth">
      <div className="top">
        <Top imgNo={num} />
        <div>
          <button onClick={() => setNum(num + 1)}>+</button>
          <p>{num}</p>
          <button onClick={() => setNum(num - 1)}>-</button>
        </div>
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default Cloth;
