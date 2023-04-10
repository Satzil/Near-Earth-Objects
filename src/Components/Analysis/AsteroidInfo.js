import EachAsteroidInfo from "./EachAsteroidInfo";
import { useContext } from "react";
import AuthContext from "../../AuthContext/AuthContext";
const AsteroidInfo = ()=>{
    const ctx = useContext(AuthContext);
    return(
        <div className="md:p-5 ">
            <EachAsteroidInfo name={"Asteroid Name"} distance={"Distance"} speed={"Relative velocity"}/>
            <div className="border border-white"></div>
            {ctx.reqData.map((item)=>{
                return <EachAsteroidInfo key = {item.name} name={item.name} distance={item.distance + ' km'} speed={item.speed + ' kmph'}/>
            })}
        </div>
    )
}
export default AsteroidInfo;