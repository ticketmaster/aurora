import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
`;

const Backdrop = ({ children }) => <Overlay>{children}</Overlay>;

Backdrop.defaultProps = {
  children: null
};

Backdrop.propTypes = {
  children: PropTypes.node
};

export default Backdrop;
