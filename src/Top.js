import red_t_shirt from "./assets/top/red-t-shirt.jpg";
import blue_t_shirt from "./assets/top/blue-t-shirt.jpg";

const TOP_LIST = {
  t_shirt: [red_t_shirt, blue_t_shirt],
};

function Top() {
  const src = TOP_LIST.t_shirt[0];
  console.log("Top");
  // return <div>wearTop</div>;
  return <img src={src} alt={src} />;
}

export default Top;
