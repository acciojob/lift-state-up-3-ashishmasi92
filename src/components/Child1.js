import React from "react";



const Child1 = (porps)=>{

    return <div className="child1">
        <h1>Child Component 1</h1>

        <input type="button" value="Option 1" onClick={(e)=>{
            porps.func1(e.target.value)
        }}/>
    </div>
}

export default Child1

