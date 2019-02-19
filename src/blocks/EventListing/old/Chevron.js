import React, { PureComponent } from "react";
import styled, { css } from "styled-components";
import { string, func, bool } from "prop-types";

import AuroraChevron from "../../components/Icons/Chevron";

const Wrapper = styled.div`
  position: relative;
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
    const {
      className,
      name,
      isOpen = false,
      id = null,
      onClick = null
    } = this.props;
    return (
      <Wrapper className={className} isOpen={isOpen} variant="transparent">
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
