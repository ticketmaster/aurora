import React from "react";
import PropTypes from "prop-types";

import { Dot, DotsWrapper } from "./styles";
import { BUTTON_VARIANTS, STANDARD } from "../../constants";

const Loader = ({ variant }) => (
  <DotsWrapper data-bdd="loader">
    <Dot variant={variant} />
    <Dot variant={variant} />
    <Dot variant={variant} />
  </DotsWrapper>
);

Loader.propTypes = {
  variant: PropTypes.oneOf(BUTTON_VARIANTS)
};

Loader.defaultProps = {
  variant: STANDARD
};

export default Loader;
