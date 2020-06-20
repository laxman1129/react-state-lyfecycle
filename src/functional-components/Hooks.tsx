import React, { useState, useEffect } from "react";

interface DemoProps {
  name: string;
}

const Hooks = (props: DemoProps) => {
  // Declare a new state variable, which we'll call "greeting"
  const [greeting, setGreeting] = useState("Hi");

  //This function is called when onClick event is triggered
  // it changes the greeting displayed on the page
  const onGreetingChange = () => {
    // get value from greeting
    const val = greeting === "Hi" ? "Hello" : "Hi";
    // get value to greeting
    setGreeting(val);
  };

  return (
    <div className="box">
      {greeting}, {props.name} !!! &nbsp;
      {/* this is the way to trigger event handler */}
      <button onClick={() => onGreetingChange()}>
        {/*Ternary operator */}
        {greeting === "Hi" ? "Hello" : "Hi"}
      </button>
    </div>
  );
};

export default Hooks;
