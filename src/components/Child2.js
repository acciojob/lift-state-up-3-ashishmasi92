import React from "react";



const Child2 = (porps)=>{

    return <div className="child2">
        <h1>Child Component 2</h1>

        <input type="button" value="Option 2" onClick={(e)=>{
            porps.func2(e.target.value)
        }}/>

    </div>
}

export default Child2