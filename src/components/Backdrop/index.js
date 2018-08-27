import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ItemContainerConsumer } from "../List/Context";
import { BackdropProvider } from "./Context";

const KEYCODES = {
  ESCAPE: 27
};

const Overlay = styled.div.attrs({
  className: "container--overlay"
})`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Backdrop extends Component {
  state = {
    childRef: React.createRef()
  };
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
    document.addEventListener("keydown", this.onKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
    document.removeEventListener("keydown", this.onKeyPress, false);
  }

  onKeyPress = event => {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.onCloseRequest();
    }
  };

  handleOutsideClick = e => {
    const { childRef } = this.state;

    if (childRef && childRef.current) {
      if (!childRef.current.contains(e.target)) {
        if (this.onCloseRequest) {
          this.onCloseRequest();
        }
      }
    } else {
      this.onCloseRequest();
    }
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <ItemContainerConsumer>
        {value => {
          this.onCloseRequest = value ? value.onCloseRequest : () => {};
          return (
            <Overlay onClick={this.handleOutsideClick} {...rest}>
              {children && (
                <BackdropProvider value={this.state}>
                  {children}
                </BackdropProvider>
              )}
            </Overlay>
          );
        }}
      </ItemContainerConsumer>
    );
  }
}

Backdrop.defaultProps = {
  children: null
};

Backdrop.propTypes = {
  children: PropTypes.node
};

export default Backdrop;
