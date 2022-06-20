import React,{useState} from "react";
import "./App.css";


function App(){

  const [count, setCount]= useState(0)



  return (
    
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>RESET COUNTER</button>
      <button onClick={()=> (count >10 ? "" :setCount(count + 1))}>INCREASE COUNTER</button>
      <button onClick={()=> (count <1 ? "" : setCount(count - 1))}>DECREASE COUNTER</button>
    </div>
    
  );
};
export default App;