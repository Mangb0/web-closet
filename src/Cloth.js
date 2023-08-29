import top1 from "./assets/top/red-t-shirt.jpg";
import top2 from "./assets/top/blue-t-shirt.jpg";
import top3 from "./assets/top/alex-haigh-fEt6Wd4t4j0-unsplash.jpg";
import top4 from "./assets/top/faith-yarn-Wr0TpKqf26s-unsplash.jpg";
import top5 from "./assets/top/ryan-hoffman-6Nub980bI3I-unsplash.jpg";

import btm1 from "./assets/bottom/jeans.jpg";
import btm2 from "./assets/bottom/skirt.jpg";

const TOP_LIST = {
  top: [top1, top2, top3, top4, top5],
  bottom: [btm1, btm2],
};

function Cloth({ type = "top", imgNo }) {
  // const src = TOP_LIST.t_shirt[0];
  console.log(type, imgNo);
  console.log(TOP_LIST[type][imgNo]);

  console.log("Top", imgNo);
  const forRendering = () => {
    const result = [];
    for (let i = 0; i < TOP_LIST[type].length; i++) {
      const src = TOP_LIST[type][i];
      result.push(
        <div className="item">
          <img src={src} alt={src} key={type + i} className="itemImg" />
          <h2>itemName</h2>
          <p>itemDescription</p>
          <button>+</button>
        </div>
      );
    }
    // let a = imgNo % TOP_LIST[type].length;
    // result.push(
    //   <img
    //     src={TOP_LIST[type][a]}
    //     alt={TOP_LIST[type][a]}
    //     className="clothImg"
    //   />
    // );
    return result;
  };

  // return <div>wearTop</div>;
  // return <img src={src} alt={src} className="clothImg" />;
  return <ul className="cloth-list">{forRendering()}</ul>;
}

export default Cloth;
