import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import colors from "../../theme/colors";
import constants from "../../theme/constants";

const VARIANTS = {
  standard: {
    backgroundColor: colors.white.base
  },
  transparent: {
    backgroundColor: "transparent"
  }
};

const Card = styled.div.attrs({
  className: ({ variant }) =>
    classnames({
      card: true,
      [`card--${variant}`]: !!variant
    })
})`
  position: relative;
  overflow: hidden;
  border-radius: ${constants.borderRadius.large};
  background-color: ${({ variant }) => VARIANTS[variant].backgroundColor};
  ${({ variant }) =>
    variant !== "transparent" &&
    `
    box-shadow: '0 4px 4px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.16);
  ;`};
`;

Card.propTypes = {
  variant: PropTypes.string
};

Card.defaultProps = {
  variant: "standard"
};

export default Card;
