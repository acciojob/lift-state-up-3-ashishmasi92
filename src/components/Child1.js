import React from "react";



const Child1 = ({onSelectOption})=>{



    return <div className="child1">
        <h1>Child Component 1</h1>

       <button onClick={()=>{
      return  onSelectOption("Option 1")
       }}>
        select Option 1
       </button>
    </div>
}

export default Child1

