import React from "react";
import Counter from "./Counter";
function B(props) {
    const {count,increment} = props
    return (
        <>
            <button onMouseOver={increment}>{count} B</button>
        </>
    )
}

export default Counter(B)