import React, { PureComponent } from "react";
import styled, { css } from "styled-components";
import { string, func, bool } from "prop-types";

import AuroraChevron from "../Icons/Chevron";

const Wrapper = styled.div`
  position: relative;
  width: 46px;
  
  ${({ isOpen }) =>
    isOpen &&
    css`
      > svg {
        transform: rotate(-180deg);
      }
    `};
`;

const StyledComponent = styled(AuroraChevron)`
  transition: all 0.1s linear;
  position: absolute;
  left: 17px;
  top: 12px;
`;

class Chevron extends PureComponent {
  render() {
    const {isOpen = false} = this.props;
    return (
      <Wrapper isOpen={isOpen} variant="transparent">
        <StyledComponent size={15} />
      </Wrapper>
    );
  }
}

Chevron.propTypes = {
  id: string.isRequired,
  isOpen: bool.isRequired,
  onClick: func.isRequired
};

export default Chevron;
