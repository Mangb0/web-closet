// 옷의 정보를 담고 있는 Component를 불러오는 Component를 만들어야 함

import Top from "./Top";
import Bottom from "./Bottom";

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
