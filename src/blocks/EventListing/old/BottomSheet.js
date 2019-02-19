import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Backdrop from "../../components/Backdrop";
import AuroraSheet from "../../components/BottomSheet";

const BottomSheet = (props) => (
<TransitionGroup component={Backdrop} appear>
  <CSSTransition
    classNames="bottom-sheet"
    timeout={300}
  >
    <AuroraSheet
      label={"On sale: MON \u2022 AUG 27 \u2022 10 AM"}
      labelVariant="positive"
      withCancelBtn={false}
    >
      {props.children}
    </AuroraSheet>
  </CSSTransition>
</TransitionGroup>
);

export default BottomSheet;
