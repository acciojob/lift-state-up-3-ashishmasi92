
import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './../styles/App.css';

const App = () => {

  let [selectedOption, setSelectedOption] = useState("")


  function handleSelect(option) {

    setSelectedOption(option)
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child1
        onSelectOption={handleSelect}
      />
      <Child2
        onSelectOption={handleSelect}
      />

      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
