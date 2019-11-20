import React from "react";
// import { useTransition, animated } from "react-spring";

import "../scss/colorbar.scss";
import colors from "../scss/colors.scss";

export default function ColorBar(props) {
  // const [items, set] = useState([...]);
  //   const transitions = useTransition(items, item => item.key, {
  //     from: { transform: "translate3d(0,-40px,0)" },
  //     enter: { transform: "translate3d(0,0px,0)" },
  //     leave: { transform: "translate3d(0,-40px,0)" }
  //   });
  // return transitions.map(({ item, props, key }) =>
  // <animated.div key={key} style={props}>{item.text}</animated.div>
  // )

  const colorBlocks = Object.entries(colors).map((key, val) => (
    <div className="colorbar-block" style={{ backgroundColor: key[1] }}></div>
  ));

  return <div className="colorbar-container">{colorBlocks}</div>;
}
