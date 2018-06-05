import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import { mediumAndUp, largeAndUp, xLargeAndUp } from "../../theme/mediaQueries";

const StyledVisibility = styled.div`
  display: ${props => (props.small ? props.display : "none")};
  ${mediumAndUp`
    display: ${props => (props.medium ? props.display : "none")}
  `};
  ${largeAndUp`
    display: ${props => (props.large ? props.display : "none")}
  `};
  ${xLargeAndUp`
    display: ${props => (props.xLarge ? props.display : "none")}
  `};
`;

export default class DisplayFor extends React.Component {
  static propTypes = {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xLarge: PropTypes.bool,
    display: PropTypes.oneOf(["block", "inline-block", "flex"]),
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    display: "block",
    small: false,
    medium: false,
    large: false,
    xLarge: false,
    children: null,
    className: null
  };

  render() {
    const { small, medium, large, xLarge, children } = this.props;
    return (
      <Consumer>
        {val => {
          /* istanbul ignore next */
          if (val.cssOnly) {
            return <StyledVisibility {...this.props} />;
          }

          /* istanbul ignore next */
          if (val.isSmall && small) return children;
          /* istanbul ignore next */
          if (val.isMedium && medium) return children;
          /* istanbul ignore next */
          if (val.isLarge && large) return children;
          /* istanbul ignore next */
          if (val.isXLarge && xLarge) return children;
          /* istanbul ignore next */
          return null;
        }}
      </Consumer>
    );
  }
}
