import styled from "styled-components";
import PropTypes from "prop-types";
import { mediumAndUp, largeAndUp, xLargeAndUp } from "../theme/mediaQueries";

const Visibility = styled.div`
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

Visibility.propTypes = {
  mediumAndUp: PropTypes.bool,
  largeAndUp: PropTypes.bool,
  xLargeAndUp: PropTypes.bool,
  display: PropTypes.oneOf(["block", "inline-block", "flex"])
};

Visibility.defaultProps = {
  display: "block",
  small: false,
  medium: false,
  large: false,
  xLarge: false
};

export default Visibility;
