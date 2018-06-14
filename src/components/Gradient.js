import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../theme/colors";
import { mediumAndUp, largeAndUp } from "../theme/mediaQueries";

const Gradient = styled.span`
  z-index: 1;
  background-image: ${props =>
    `linear-gradient(${props.deg.small}, ${props.from}, ${props.to})`};
  ${mediumAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.medium}, ${props.from}, ${props.to})`};
  `} ${largeAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.large}, ${props.from}, ${props.to})`};
  `};

  &.gradient--overlay:after {
    z-index: 2;
    height: 100%;
    content: "";
    opacity: 0.4;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-image: linear-gradient(77deg, rgba(0, 0, 0, 0), #000000);
    ${mediumAndUp`
        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);
      `};

    ${largeAndUp`
      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);
      `};
  }
`;

Gradient.propTypes = {
  deg: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
  }),
  from: PropTypes.string,
  to: PropTypes.string
};

Gradient.defaultProps = {
  deg: {
    small: "76deg",
    medium: "80deg",
    large: "81deg"
  },
  from: colors.defaultGradient.from,
  to: colors.defaultGradient.to
};

export default Gradient;
