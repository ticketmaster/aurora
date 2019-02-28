import React from 'react';

const ModalTrigger = ({
  buttonRef,
  children,
  onOpen,
  onOpenSuccess
}) => (
  <React.Fragment>
    {children(onOpen, buttonRef, onOpenSuccess)}
  </React.Fragment>
);

export default ModalTrigger;