
import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './../styles/App.css';

const App = () => {

  let [selectedOption,setSelectedOption] = useState("")

console.log(selectedOption);

  function selectedOption1 (option){

    setSelectedOption(option)
  }
  
  return (
    <div className="parent">
       <h1>Parent Component</h1>
      <Child1 
      func1 = {selectedOption1}
      />
      <Child2
      func2 ={selectedOption1}
      />

      <h3>Selection Option : {selectedOption}</h3>
    </div>
  )
}

export default App
