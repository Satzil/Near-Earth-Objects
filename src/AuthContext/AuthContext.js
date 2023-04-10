import React from "react";
import { useState,useEffect,useCallback } from "react";
const AuthContext = React.createContext({
    test:"vudsia",
    date:"",
    reqData:[],
    showName:'',
    setShowName:()=>{},
    error:false,
    isLoading:false
});

export const AuthContextProvider = (props)=>{
    const [date,setDate] = useState("2015-09-08");
    const [reqData,setReqData] = useState([]);
    const [data,setData] = useState();
    const [showName,setShowName] =useState('');
    const [error,setError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    
    const getData = useCallback(async ()=>{
        try{
            setIsLoading(true);
            const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+date + "&end_date="+date+"&api_key=tIJKGVGhm53baDhZ1ZEgtceieeL3M53iC63GXIQd";
            const res = await fetch(url);
            if(!res.ok) throw new Error("Not Available");
            const data = await res.json();
            const bait = data.near_earth_objects[date].map((item)=>{
                return(
                    {
                        name:item.name,
                        size:Math.floor(item.absolute_magnitude_h),
                        speed:Math.floor(item['close_approach_data'][0]['relative_velocity']['kilometers_per_hour']),
                        distance:Math.floor(item['close_approach_data'][0]['miss_distance']['kilometers'])
                    }
                )
            });
            setData(data);
            setReqData(bait);
            setError(false);
        }catch(err){
            console.log({error:err.message});
            setError(true);
        }
        setIsLoading(false);
    },[date]);

    useEffect(()=>{
        getData();
    },[getData]);

    const contextValue = {
        data:data,
        setDate:setDate,
        date:date,
        reqData:reqData,
        showName:showName,
        setShowName:setShowName,
        error:error,
        isLoading:isLoading
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;