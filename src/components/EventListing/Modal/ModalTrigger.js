import React from 'react';
import Ellipsis from "../Event/Ellipsis"

const ModalTrigger = ({
  buttonRef,
  onOpen,
  text,
  children
}) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>{children}</button>
);
{/*  */}

export default ModalTrigger;