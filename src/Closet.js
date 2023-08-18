import Cloth from "./Cloth";
// import Bottom from "./Bottom";
import { useState } from "react";
import "./Closet.css";

function Closet() {
  const [num, setNum] = useState(0);

  return (
    <div className="closet">
      <div className="top">
        <Cloth type="top" imgNo={num} />
        <div>
          <button onClick={() => setNum(num + 1)}>+</button>
          <p>{num}</p>
          <button onClick={() => setNum(num - 1)}>-</button>
        </div>
      </div>
      <div className="bottom">
        {/* <Bottom /> */}
        <Cloth type="bottom" imgNo={0} />
      </div>
    </div>
  );
}

export default Closet;
