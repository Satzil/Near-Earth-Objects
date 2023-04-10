import AuthContext from "../AuthContext/AuthContext";
import { useContext } from "react";

const calc = (a, b, c, d, x) => {
  return a + (b - a) * ((x - c) / (d - c));
};

const Universe = (props) => {
  const size = props.data.map((key) => key.size);
  const mas = Math.max(...size);
  const mis = Math.min(...size);
  const distance = props.data.map((key) => key.distance);
  const mad = Math.max(...distance);
  const mid = Math.min(...distance);
  const velocity = props.data.map((key) => key.speed);
  const mav = Math.max(...velocity);
  const miv = Math.min(...velocity);
  const data = props.data.map((item) => {
    return {
      ...item,
      virdistance: calc(
        300,
        Math.min(props.height, props.width)+300,
        mid,
        mad,
        item.distance
      ),
      virsize: calc(10, 50, mis, mas, item.size),
      virspeed: calc(1000,10000,miv,mav,item.speed)
    };
  });

  const ctx = useContext(AuthContext);

 

  return (
    <div
      id="orbit"
      className="bg-black rounded-md w-2/3"
      style={{ height: `${props.height}px`, width: `100%`}}
    >
      <div id="earth" className="z-10"></div>
      {data.map((item) => {
        return (
          <div
            key = {item.name}
            id="spin"
            style={{
              height: `${item.virdistance}px`,
              width: `${item.virdistance}px`,
              animationDelay:`-1000000ms`,
              animationDuration: `${100000 - item.virspeed}ms`,
              pointerEvents:"none"
            }}
          >
            <div
              className="absolute left-0 top-0"
              
            >
              <img src={item.img} style={{ height: `${item.virsize}px`, width: `${item.virsize}px`}}/>
              <p className="res  translate-y-9" style={{animationDuration:`${100000- item.virspeed}ms`,animationDelay:`-1000000ms`}}>{item.name}</p>
            </div>
            <div id={ctx.showName === item.name ? `line`:''} style={{zIndex:-1}}>
              <p id="lineinfo" className=" text-xs text-violet-300" style={{animationDuration:`${100000- item.virspeed}ms`,animationDelay:`-1000000ms`}}>
                {ctx.showName === item.name ? `${item.distance} km` : ''}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Universe;
