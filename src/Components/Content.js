import Universe from "./Universe";
import Analysis from "./Analysis/Analysis";
import asteroid from "../asteroid.svg";
import AuthContext from "../AuthContext/AuthContext";
import { useContext } from "react";

const Content = () => {
    const ctx = useContext(AuthContext);
    const arr = ctx.reqData.map((item)=>{
        return{
            name:item.name,
            size:item.size,
            distance:item.distance,
            speed: item.speed,
            img:asteroid
        }
    }); 
  return (
    <section>
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 justify-center items-center">
        <Analysis />
        <Universe height={900} width={700} data={arr} />
      </div>
    </section>
  );
};
export default Content;
