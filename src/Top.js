import top1 from "./assets/top/red-t-shirt.jpg";
import top2 from "./assets/top/blue-t-shirt.jpg";
import top3 from "./assets/top/alex-haigh-fEt6Wd4t4j0-unsplash.jpg";
import top4 from "./assets/top/faith-yarn-Wr0TpKqf26s-unsplash.jpg";
import top5 from "./assets/top/ryan-hoffman-6Nub980bI3I-unsplash.jpg";

const TOP_LIST = [top1, top2, top3, top4, top5];

function Top({ imgNo }) {
  // const src = TOP_LIST.t_shirt[0];
  console.log("Top");

  console.log("Top", imgNo);
  const forRendering = () => {
    const result = [];
    for (let i = 0; i < TOP_LIST.length; i++) {
      const src = TOP_LIST[i];
      result.push(<img src={src} alt={src} className="clothImg" />);
    }
    let a = imgNo % TOP_LIST.length;
    result.push(
      <img src={TOP_LIST[a]} alt={TOP_LIST[a]} className="clothImg" />
    );
    return result;
  };

  // return <div>wearTop</div>;
  // return <img src={src} alt={src} className="clothImg" />;
  return forRendering();
}

export default Top;
