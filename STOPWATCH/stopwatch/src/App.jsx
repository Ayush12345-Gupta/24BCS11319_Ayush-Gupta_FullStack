import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  useEffect(() => {

    let interval;

    if(running){
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      },1000);
    }

    return () => clearInterval(interval);

  },[running]);


  const formatTime = () => {

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;


    return `${hours < 10 ? "0"+hours : hours}:
            ${minutes < 10 ? "0"+minutes : minutes}:
            ${seconds < 10 ? "0"+seconds : seconds}`;

  };


  const reset = () => {
    setTime(0);
    setRunning(false);
  };


  return (
    <div className="container">

      <h1>React Stopwatch</h1>

      <div className="display">
        {formatTime()}
      </div>


      <div>
        <button 
          onClick={()=>setRunning(true)}>
          Start
        </button>


        <button 
          onClick={()=>setRunning(false)}>
          Pause
        </button>


        <button 
          onClick={reset}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;