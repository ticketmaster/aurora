import React from "react";
import styled from "styled-components";
import { OverflowIcon } from "../../components/Icons";

const Button = styled.button`
  background: none;
  border: none;
  position: relative;

  .screen-reader-text {
    visibility: hidden;
    height:0;
    margin: 0;
  }

  && :focus {
    outline: none;
  }
`;

const Icon = styled(OverflowIcon)`
  color: #5d5d5d;
  height: 22px;
  min-width: 10px;
`;

const Ellipsis = ({className, id, onClick}) => (
  <React.Fragment>
    <Button
      id={id}
      onClick={onClick}
      className="cta-btn-ellipsis"
      role="button"
    />
    <Icon
      id={id} onClick={onClick} 
      className={className}
      color="#000"
      direction="right"
      size={15}
    />
  </React.Fragment>
)

export default Ellipsis;
