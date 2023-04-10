import AuthContext from "../../AuthContext/AuthContext";
import { useContext } from "react";
const EachAsteroidInfo = (props)=>{
    const ctx = useContext(AuthContext);

    const onMouseOverHandler = (e)=>{
        ctx.setShowName(props.name);
    }

    return(
        <div onMouseOver={onMouseOverHandler} className="hover:cursor-default flex space-x-3 space-y-0 p-3  justify-around text-xl hover:text-blue-500 hover:scale-105 duration-150">
            <div className="w-1/3 pointer-events-none">{props.name}</div>
            <div className="w-1/3 pointer-events-none">{props.distance}</div>
            <div className="w-1/3 pointer-events-none">{props.speed}</div>
        </div>
    )
}

export default EachAsteroidInfo;