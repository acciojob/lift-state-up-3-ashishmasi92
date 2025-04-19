
import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './../styles/App.css';

const App = () => {

  let [selectedOption,setSelectedOption] = useState(null)
  return (
    <div className="parent">
       <h1>Parent Component</h1>
      <Child1 
      func1 = {setSelectedOption}
      />
      <Child2
      func2 ={setSelectedOption}
      />

      <h3>Selection Option : {selectedOption}</h3>
    </div>
  )
}

export default App
