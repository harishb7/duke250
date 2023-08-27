import axios from "axios";
import { useEffect, useState } from "react";

function Call(){
    const[text,settext]=useState([]);
    useEffect ( ()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>(
            settext(res.data)
        ))
        .catch(()=>(
            settext([])
        ))
    },[])
    return(
        <div>
        <h1> HELLO </h1>
        {
            text.map((ele)=>{
                return <p>{ele.id}{ele.username}</p>
            })
        }
    
    </div>
    )
}
export default Call;