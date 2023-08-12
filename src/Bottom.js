import jeans from "./assets/bottom/jeans.jpg";
import skirt from "./assets/bottom/skirt.jpg";

const BOTTOM_LIST = {
  jeans: [jeans],
  skirt: [skirt],
};

function Bottom() {
  const src = BOTTOM_LIST.jeans[0];
  console.log("Bottom");
  // return <div>wearTop</div>;
  return <img src={src} alt={src} />;
}

export default Bottom;
