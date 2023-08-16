import red_t_shirt from "./assets/top/red-t-shirt.jpg";
import blue_t_shirt from "./assets/top/blue-t-shirt.jpg";

const TOP_LIST = [red_t_shirt, blue_t_shirt];

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
