import { useState } from "react";

function  Statexp(){
    const [text,settext] = useState('hello');
    return(
        <div>
            <p>{text}</p>
            <button onClick={function(){settext('welcom')}}>change</button>
        </div>
    ) 
}
export default Statexp