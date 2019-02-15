import React from "react";
import styled from "styled-components";
import { OverflowIcon } from "../../components/Icons";

const Button = styled.button`
  background: none;
  border: none;
  min-width: 48px;
  position: relative;

  && :focus {
    outline: none;
  }
`;

const Wrapper = styled(OverflowIcon)`
  color: #5d5d5d;
  height: 22px;
  min-width: 10px;
`;

const Ellipsis = ({className, id, onClick}) => (
  <Button id={id} onClick={onClick} className="cta-btn-ellipsis">
    <Wrapper
      id={id} onClick={onClick} 
      className={className}
      color="#000"
      direction="right"
      size={15}
    />
  </Button>
)

export default Ellipsis;
