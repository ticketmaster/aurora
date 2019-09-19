import React from "react";
import PropTypes from "prop-types";

import { Dot, LoaderWrapper, ContentWrapper, DotsWrapper } from "./styles";
import { BUTTON_VARIANTS } from "../../constants";

const Loader = ({ children, isLoading, variant }) => (
  <LoaderWrapper>
    {isLoading && (
      <DotsWrapper data-bdd="loader">
        <Dot variant={variant} />
        <Dot variant={variant} />
        <Dot variant={variant} />
      </DotsWrapper>
    )}
    <ContentWrapper isLoading={isLoading}>{children}</ContentWrapper>
  </LoaderWrapper>
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(BUTTON_VARIANTS).isRequired,
  children: PropTypes.node.isRequired
};

Loader.defaultProps = {
  isLoading: false
};

export default Loader;
