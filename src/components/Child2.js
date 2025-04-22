import React from "react";



const Child2 = ({onSelectOption})=>{



    return <div className="child2">
        <h1>Child Component 2</h1>

       <button onClick={()=>{
     return   onSelectOption("Option 2")
       }}>slect Option 2</button>
    </div>
}

export default Child2