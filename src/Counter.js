import React,{useState} from "react";


const Counter = (WrappedComponent)=>{
    function Counter (){
        const [count,setCount] = useState(0);
    
        const increment = ()=>{
            setCount(count+1)
        }
    
        return(
            <>
              <WrappedComponent count={count} increment={increment}/>
            </>
        )
    }
    return Counter
}

export default Counter