import * as React from "react";

class Toggleable extends React.PureComponent {
  constructor() {
    super();
    this.state = { show: false };
  }

  toggle = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    return this.props.children(this.state.show, this.toggle);
  }
}

export default Toggleable;
