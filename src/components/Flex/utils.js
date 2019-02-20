const FlexDirection = ({
    column,
    columnReverse,
    rowReverse,
    inherit,
    initial,
    unset
  }) => (
    column 
     ? "column"
    : rowReverse
      ? "row-reverse"
    : columnReverse
      ? "column-reverse"
    : initial
      ? "initial"
    : inherit
      ? "initial"
    : unset
      ? "unset"
    : "row"
);

const FlexWrap = ({wrap, noWrap, wrapReverse}) =>
    wrap
      ? "wrap"
    : noWrap
      ? "nowrap"
    : wrapReverse
      ? "wrap-reverse"
    : null
;

const JustifyContent = ({
  justifyStart,
  justifyEnd,
  justifyEvenly,
  justifyAround,
  justifyBetween,
  justifyCenter
}) =>
  justifyStart
    ? "flex-start"
  : justifyEnd
    ? "flex-end"
  : justifyEvenly
    ? "space-evenly"
  : justifyAround
    ? "space-around"
  : justifyBetween
    ? "space-between"
  : justifyCenter
    ? "center"
  : null
;


const AlignItems = ({
  alignStart,
  alignEnd,
  alignBaseLine,
  alignStretch,
  alignCenter
  }) =>
  alignStart
    ? "flex-start"
  : alignEnd
    ? "flex-end"
  : alignBaseLine
    ? "baseline"
  : alignStretch
    ? "stretch"
  : alignCenter
    ? "center"
  : null
;


const AlignSelf = ({
  selfStart,
  selfEnd,
  selfBaseLine,
  selfStretch,
  selfCenter
  }) =>
  selfStart
    ? "flex-start"
  : selfEnd
    ? "flex-end"
  : selfBaseLine
    ? "baseline"
  : selfStretch
    ? "stretch"
  : selfCenter
    ? "center"
  : null
;


const AlignContent = ({
  contentStart,
  contentEnd,
  contentBetween,
  contentStretch,
  contentCenter
}) =>
  contentStart
    ? "flex-start"
  : contentEnd
    ? "flex-end"
  : contentBetween
    ? "between"
  : contentStretch
    ? "stretch"
  : contentCenter
    ? "center"
  : null
;

const Grow = ({grow}) =>
  grow || null;

const Shrink = ({shrink}) =>
  shrink || null;

const Display = ({inline}) => 
  inline
    ? "inline-flex"
  : "flex"
;

export {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexWrap,
  Grow,
  JustifyContent,
  Shrink
}