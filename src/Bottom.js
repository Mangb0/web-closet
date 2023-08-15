import jeans from "./assets/bottom/jeans.jpg";
import skirt from "./assets/bottom/skirt.jpg";

const BOTTOM_LIST = {
  jeans: [jeans],
  skirt: [skirt],
};

function Bottom() {
  // const src = BOTTOM_LIST.jeans[0];
  console.log("Bottom");

  const forRendering = () => {
    const result = [];
    for (let elem in BOTTOM_LIST) {
      console.log(elem);
      for (let i = 0; i < BOTTOM_LIST[elem].length; i++) {
        console.log(elem, BOTTOM_LIST[elem][i]);
        const src = BOTTOM_LIST[elem][i];
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

export default Bottom;
