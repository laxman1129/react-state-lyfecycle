import React from "react";

import "./App.css";
import LifeCycle from "./class-based-components/Lifecycle";
import UsingState from "./class-based-components/UsingState";
import Hooks from "./functional-components/Hooks";
import HooksWithEffects from "./functional-components/HooksWithEffects";

function App() {
  return (
    <div className="container">
      <LifeCycle name="Hello, Lifecycle !!!" />
      <UsingState name=" State" />
      <Hooks name=" Hooks" />
      <HooksWithEffects name=" Hooks with Effects." />
    </div>
  );
}

export default App;
