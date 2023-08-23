import Cloth from "./Cloth";
// import Bottom from "./Bottom";
import { useState } from "react";
import "./Closet.css";

function Closet() {
  const [num, setNum] = useState(0);
  const [type, setType] = useState("top");

  return (
    <div className="closet">
      <div className="btns">
        <button onClick={() => setType("top")}>Top</button>
        <button onClick={() => setType("bottom")}>Bottom</button>
      </div>
      <div className="top">
        <Cloth type={type} imgNo={num} />
        <div>
          <button onClick={() => setNum(num + 1)}>+</button>
          <p>{num}</p>
          <button onClick={() => setNum(num - 1)}>-</button>
        </div>
      </div>
      <div className="bottom">
        {/* <Bottom /> */}
        {/* <Cloth type="bottom" imgNo={0} /> */}
      </div>
    </div>
  );
}

export default Closet;
