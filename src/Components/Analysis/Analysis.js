import { useContext, useState } from "react";
import AuthContext from "../../AuthContext/AuthContext";
import AsteroidInfo from "./AsteroidInfo";

const Analysis = ()=>{
    const ctx = useContext(AuthContext);
    const [date,setDate] = useState(ctx.date);
    
    const onDateChange = (e)=>{
        setDate(e.target.value);
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        ctx.setDate(date);
    }
    return(
        <div className="text-center md:w-3/5 bg-black text-white p-5">
            <form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 justify-center items-center space-y-6 space-x-0">
                <input type="text" value={date} onChange={onDateChange} placeholder="YYYY-MM-DD" className="w-2/3 rounded-sm px-6 py-3 text-center text-xl border font-thin trackin bg-black  text-white focus:outline-none "/>
                <button type='submit' className="hover:bg-white hover:text-black duration-150 px-6 py-3 rounded-md font-medium ">Submit</button>
            </form>
            {!ctx.isLoading && ctx.error && <p className="text-red-500 font-medium text-center mt-5 text-2xl ">Not Available</p>}
            {ctx.isLoading && <p className="text-white font-medium text-center mt-5 text-2xl ">...Loading</p>}
            <AsteroidInfo/>
        </div>
    )
}
export default Analysis;