import React from "react";
import { useState } from "react";
import Intro from "./components/Intro";
import './App.css'
import Button from "./components/Button";
function App() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(num + 1);
  };
  return (
    <>
      <Intro name="Harsh" age={25} profession="Web developer" hobby="Coding" goal="Full Stack Developer" />
      <Intro name="John" age={22} profession="Java Developer" hobby="Gaming" goal="Java Developer" />
      <p>Number is {num}</p>
      <Button onClick={handleClick} />
    </>
  );
}

export default App;
