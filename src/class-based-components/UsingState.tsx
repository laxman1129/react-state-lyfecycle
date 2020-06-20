import React, { Component } from "react";
interface DemoProps {
  name: string;
}

interface DemoState {
  greeting: string;
}

class UsingState extends Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);
    this.state = { greeting: "Hello" };
  }

  //This function is called when onClick event is triggered
  // it changes the greeting displayed on the page
  onGreetingChange = () => {
    this.setState({ greeting: this.state.greeting === "Hi" ? "Hello" : "Hi" });
  };

  render() {
    return (
      <div className="box">
        {this.state.greeting}, {this.props.name} !!! &nbsp;
        {/* this is the way to trigger event handler */}
        <button onClick={() => this.onGreetingChange()}>
          {/*Ternary operator */}
          {this.state.greeting === "Hi" ? "Hello" : "Hi"}
        </button>
      </div>
    );
  }
}

export default UsingState;
