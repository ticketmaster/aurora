import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";
import Loader from "./Loader";
import { ContentWrapper, Wrapper } from "./styles";

const ButtonWithLoading = ({ isLoading, children, ...props }) => {
  const { variant } = props;

  return (
    <Button {...props}>
      <Wrapper>
        <ContentWrapper isLoading={isLoading}>{children}</ContentWrapper>
        {isLoading && <Loader variant={variant} />}
      </Wrapper>
    </Button>
  );
};

ButtonWithLoading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

ButtonWithLoading.defaultProps = {
  isLoading: false
};

export default ButtonWithLoading;
