import React, {PureComponent} from "react";
import styled, { css } from "styled-components";
import { string, func, bool } from "prop-types";

import AuroraChevron from "../../components/Icons/Chevron";

const Wrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  flex: 0;
  min-width: 48px;
  padding-left: 16px;
  padding-right: 8px;
  position: relative;

  && :focus {
    outline: none;
  }

  .screen-reader-text {
    visibility: hidden;
  }

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
  top: 26px;
`;

class Chevron extends PureComponent {
  render (){
    const { className, name, isOpen = false, id = null, onClick = null } = this.props;
    return (
      <Wrapper
        className={className}
        id={id}
        isOpen={isOpen}
        variant="transparent"
        onClick={onClick}
        
      >
        <p className="screen-reader-text">see details</p>
        <StyledComponent
          id={id}
          size={15}
          onClick={onClick}
          aria-labelledby="catTitle catDesc" role="img"
        >
           <title id="catTitle">Pixels, My Super-friendly Cat</title>
            <desc id="catDesc">An illustrated gray cat with bright green blinking eyes.</desc>
        </StyledComponent>
      </Wrapper>
    )
  }
}

Chevron.propTypes = {
  id: string.isRequired,
  isOpen: bool.isRequired,
  onClick: func.isRequired
};

export default Chevron;
