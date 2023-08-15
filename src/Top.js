import red_t_shirt from "./assets/top/red-t-shirt.jpg";
import blue_t_shirt from "./assets/top/blue-t-shirt.jpg";

const TOP_LIST = {
  t_shirt: [red_t_shirt, blue_t_shirt],
};

function Top() {
  // const src = TOP_LIST.t_shirt[0];
  console.log("Top");

  const forRendering = () => {
    const result = [];
    for (let elem in TOP_LIST) {
      console.log(elem);
      for (let i = 0; i < TOP_LIST[elem].length; i++) {
        console.log(elem, TOP_LIST[elem][i]);
        const src = TOP_LIST[elem][i];
        result.push(<img src={src} alt={src} className="clothImg" />);
      }
      console.log("result", result);
    }
    return result;
  };

  // return <div>wearTop</div>;
  // return <img src={src} alt={src} className="clothImg" />;
  return forRendering();
}

export default Top;
