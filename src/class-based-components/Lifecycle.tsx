import * as React from "react";

interface DemoProps {
  name: string;
}

interface DemoState {
  date: Date;
  clickedStatus: boolean;
  list: string[];
}

class LifeCycle extends React.Component<DemoProps, DemoState> {
  // used for initialization
  // initialize props and state
  constructor(props: DemoProps) {
    super(props);
    this.state = {
      date: new Date(),
      clickedStatus: false,
      list: [],
    };
  }

  // called before rendering
  // do not do anything here
  // all setting state and calling API can be done in next method
  // called only once during component lifetime
  componentWillMount() {
    console.log("Component will mount!");
  }

  // called after component is mounted on the DOM by render method
  // We can make API calls and update the state with the API response.
  // called only once during component lifetime
  componentDidMount() {
    console.log("Component did mount!");
    this.getList();
  }

  // set state
  getList = () => {
    console.log("make api calls!");
    // try commenting this and check console
    this.setState({
      list: ["initialization", "mounting", "updating", "unmounting"],
    });
  };

  //after mounting stage update stages start.

  // This method determines whether the component should be updated or not
  // default is true
  // re-render the component on some condition
  shouldComponentUpdate(nextProps: DemoProps, nextState: DemoState) {
    return this.state.list !== nextState.list;
  }

  // have access to current state and next state before render
  // can compare, log, call third party integation etc. here before rendering.
  // should not call setState method here
  componentWillUpdate(nextProps: DemoProps, nextState: DemoState) {
    console.log("Component will update!");
    const list = nextState.list.map((item: string) => item.toUpperCase());
    console.log(list);
    // try calling setState here
    // this.setState({ ...this.state, list }); //ES6 Destructuring
  }

  // have access to current state and prev state before render
  // can compare, log, call third party integation etc. here after rendering.
  // should not call setState method here
  componentDidUpdate(prevProps: DemoProps, prevState: DemoState) {
    console.log("Component did update!");
    // try calling setState here
    // this.setState({ list: [] });
  }

  // called for mounting the component to the DOM once
  // called when there is any change to the state
  render() {
    console.log("rendering !!!");
    const { list } = this.state;
    //looping to create listItems
    const listItems = list.map((e) => <li key={e}>{e}</li>);
    return (
      <>
        <div>
          <h3>Lifecycle Methods!</h3>
        </div>
        {/* adding listItems to ul */}
        <ul>{listItems}</ul>
      </>
    );
  }
}

export default LifeCycle;
