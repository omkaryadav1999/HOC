import React from "react";
import Counter from "./Counter";

function A(props) {
     const {count,increment} = props
    return (
        <>
            <button onClick={increment}>{count} A</button>
        </>
    )
}

export default Counter(A)