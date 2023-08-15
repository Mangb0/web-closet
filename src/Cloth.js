import Top from "./Top";
import Bottom from "./Bottom";

import "./Cloth.css";

function Cloth() {
  return (
    <div className="cloth">
      <div className="top">
        <Top />
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default Cloth;
