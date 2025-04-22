import React from "react";



const Child2 = ({func2})=>{



    return <div className="child2">
        <h1>Child Component 2</h1>

       <button onClick={()=>{
     return   func2("Option 2")
       }}>slect Option 2</button>
    </div>
}

export default Child2