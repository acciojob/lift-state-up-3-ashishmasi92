import React from "react";



const Child1 = ({func1})=>{



    return <div className="child1">
        <h1>Child Component 1</h1>

       <button onClick={()=>{
      return  func1("Option 1")
       }}>
        select Option 1
       </button>
    </div>
}

export default Child1

