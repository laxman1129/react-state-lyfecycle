import React, { useState, useEffect } from "react";

interface DemoProps {
  name: string;
}

const HooksWithEffects = (props: DemoProps) => {
  // Declare a new state variable, which we'll call "greeting"
  const [greeting, setGreeting] = useState("Hi");
  const [count, setCount] = useState(0);

  // if dependency array is empty then the useEffect hook will be called only once.
  useEffect(() => {
    console.log("Calling useEffect, before mounting the component.");
  }, []);

  // if dependency array is not provided, then the useEffect hook will be called every time the component updates.
  useEffect(() => {
    console.log("Calling useEffect, before updating the component.");
  });

  // useEffect hook will be called every time the "count" updates.
  useEffect(() => {
    console.log("Calling useEffect, only when count is updated.");
  }, [count]);

  // useEffect hook with return is called for cleanup.
  useEffect(() => {
    return () => {
      console.log("Calling useEffect, for cleanup.");
    };
  }, []);

  //TODO : try combining the above effects in a single useEffect hook

  //This function is called when onClick event is triggered
  // it changes the greeting displayed on the page
  const onGreetingChange = () => {
    // get value from greeting
    const val = greeting === "Hi" ? "Hello" : "Hi";
    // get value to greeting
    setGreeting(val);

    //Update count to check functionality of useEffect hook
    if (val === "Hi") {
      setCount(count + 1);
    }
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

export default HooksWithEffects;
