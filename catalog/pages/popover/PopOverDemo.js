import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PopOver from "../../../src/components/PopOver";

const Container = styled.div`
  width: 95%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const PopOverButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  display: inline-block;
`;

class PopOverDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopOver: false,
      mouseX: 0,
      mouseY: 0
    };

    this.containerRef = React.createRef();
  }

  buttonSelect = e => {
    const { withinContainer } = this.props;
    const data = withinContainer
      ? PopOver.getDimensionsFromEvent(e, this.containerRef.current)
      : PopOver.getDimensionsFromEvent(e);
    const { showPopOver } = this.state;

    this.setState({
      showPopOver: !showPopOver,
      ...data
    });
  };

  render() {
    const { showPopOver, ...position } = this.state;
    const { inlineWithTarget, noBorders } = this.props;

    return (
      <Container ref={this.containerRef}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <PopOverButton onClick={this.buttonSelect} />
          <PopOverButton onClick={this.buttonSelect} />
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <PopOverButton onClick={this.buttonSelect} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <PopOverButton onClick={this.buttonSelect} />
          <PopOverButton onClick={this.buttonSelect} />
        </div>
        <PopOver
          isVisible={showPopOver}
          position={{ ...position }}
          reduceTop={76}
          inlineWithTarget={inlineWithTarget}
          noBorders={noBorders}
        >
          Some text to be rendered in the pop over component. Some text to be
          rendered in the pop over component.
        </PopOver>
      </Container>
    );
  }
}

PopOverDemo.propTypes = {
  withinContainer: PropTypes.bool,
  inlineWithTarget: PropTypes.bool,
  noBorders: PropTypes.bool
};

PopOverDemo.defaultProps = {
  withinContainer: false,
  inlineWithTarget: false,
  noBorders: false
};

export default PopOverDemo;
