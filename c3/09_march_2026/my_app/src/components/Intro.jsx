import React from "react";
import Hobbies from "./Hobbies";
function Intro({ name, age,  profession, hobby, goal}) {
  return (
    <div className="intro">
      <h1>Hello My Name is {name}</h1>
      <h2>I am {age} years old</h2>
      <h2>I am a {profession}</h2>
      <Hobbies hobby={hobby} goal={goal} />
    </div>
  );
}

export default Intro;
