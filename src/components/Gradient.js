import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../theme/colors";
import { mediumAndUp, largeAndUp } from "../theme/mediaQueries";

const Gradient = styled.span`
  background-image: ${props =>
    `linear-gradient(${props.deg.small}, ${props.from}, ${props.to})`};
  ${mediumAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.medium}, ${props.from}, ${props.to})`};
  `} ${largeAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.large}, ${props.from}, ${props.to})`};
  `};
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
