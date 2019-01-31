import styled, { css, keyframes } from "styled-components";
import React, {
  Children,
  PureComponent,
  Component,
  Fragment,
  createContext,
  createRef
} from "react";
import PropTypes, { PropTypes as PropTypes$1 } from "prop-types";
import classNames from "classnames";
import ReactDOM from "react-dom";
import { Transition, CSSTransition } from "react-transition-group";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    })
  );
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// DIRECTIONS
var TOP = "top";
var BOTTOM = "bottom";
var LEFT = "left";
var RIGHT = "right";
var DIRECTIONS = [TOP, BOTTOM, LEFT, RIGHT]; // VARIANTS

var LIGHT = "light";
var DARK = "dark";
var VARIANTS = [LIGHT, DARK]; // BUTTON_VARIANTS

var STANDARD = "standard";
var SPECIAL = "special";
var OUTLINE = "outline";
var OUTLINE_GRAY = "outlineGray";
var TRANSPARENT = "transparent";
var BUTTON_VARIANTS = [STANDARD, SPECIAL, OUTLINE, OUTLINE_GRAY, TRANSPARENT]; // SIZES

var SMALL = "small";
var REGULAR = "regular";
var LARGE = "large";
var SIZES = [SMALL, REGULAR, LARGE];
var SIZES_SL = [SMALL, LARGE];
var SIZES_SR = [SMALL, REGULAR];

var spacing = {
  slim: "4px",
  cozy: "8px",
  moderate: "16px",
  normal: "24px",
  comfy: "32px",
  shakira: "32px",
  // NOTE: this constant is deprecated. It will be removed in the future.
  spacious: "48px",
  giant: "64px",
  colossal: "88px",
  gutters: {
    tiny: 8,
    small: 16,
    mediumAndUp: 24,
    largeAndUp: 32
  }
};

var typography = {
  weight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    extraBold: 800
  },
  lineHeight: {
    body: "1.5",
    header: "1.25"
  },
  size: {
    mini: "10px",
    uno: "12px",
    hecto: "14px",
    kilo: "16px",
    giga: "20px",
    tera: "24px",
    zetta: "32px",
    bronto: "46px"
  }
};

var global$1 = {
  brand: "#026cdf",
  primary: {
    base: "#026cdf",
    lightBase: "rgba(2, 108, 223, 0.1)",
    medium: "#0150a7",
    dark: "#013670",
    light: "#ebf4fd",
    muted: "#d6e7fa"
  },
  special: {
    base: "#1bab1e",
    medium: "#23702c",
    dark: "#265333"
  },
  darkFill: "#1f262d",
  accent01: {
    base: "#c56bff",
    dark: "#904eba",
    light: "#f0daff"
  },
  accent02: {
    base: "#962d94",
    dark: "#6d236c",
    light: "#e4cbe3"
  },
  accent03: {
    base: "#14a1a3",
    dark: "#0a7e80",
    light: "#20c4c7"
  },
  accent04: "#00ffff",
  gray01: "#262626",
  gray02: "#999999",
  gray03: "#bfbfbf",
  gray04: "#ebebeb",
  gray05: "#f6f6f6",
  error: {
    base: "#d93a3a",
    dark: "#a22b2b",
    light: "#f3c3c3"
  },
  caution: {
    base: "#f2bd2a",
    dark: "#b98800",
    light: "#fae5aa"
  },
  success: {
    base: "#1bab1e",
    dark: "#148016",
    light: "#bae5bb"
  },
  transparent: "transparent",
  onyx: {
    base: "rgba(38, 38, 38, 1)",
    light: "rgba(38, 38, 38, 0.6)",
    muted: "rgba(38, 38, 38, 0.4)"
  },
  white: {
    base: "rgba(255, 255, 255, 1)",
    lighter: "rgba(255, 255, 255, 0.2)",
    light: "rgba(255, 255, 255, 0.7)",
    muted: "rgba(255, 255, 255, 0.5)"
  }
};
var themes = {
  global: global$1,
  tm: global$1,
  lne: _objectSpread({}, global$1, {
    brand: "#e11d39",
    primary: {
      base: "#2cb3ad",
      medium: "#239893",
      dark: "#1f8783",
      light: "#e9f7f6",
      muted: "#d5f0ef"
    }
  })
};

var tm = themes.tm;
var colors = {
  // Deprecated colors. Should be removed
  azure: {
    dark: tm.primary.base,
    base: tm.primary.base,
    light: "rgba(2, 108, 223, 0.2)",
    muted: tm.primary.lightBase,
    restrained: "rgba(2, 108, 223, 0.4)",
    hover: tm.primary.medium,
    hoverLight: tm.primary.light,
    pressed: tm.primary.dark,
    pressedLight: tm.primary.muted
  },
  emerald: _objectSpread({}, tm.success, {
    hover: tm.special.medium,
    pressed: tm.special.dark,
    muted: "rgba(27, 171, 30, 0.4)",
    restrained: "rgba(27, 171, 30, 0.2)"
  }),
  outlined: {
    hover: "#ECF4FD",
    pressed: "#D9E8F9"
  },
  transparent: tm.transparent,
  summerSky: "#3AC7FF",
  blackPearl: tm.darkFill,
  slate: tm.gray02,
  moonstone: "#D1D1D1",
  shale: "#E6E6E6",
  quartz: tm.gray05,
  lightGray: "#E0E0E0",
  aquamarine: tm.accent04,
  turquoise: tm.accent03,
  ruby: {
    base: tm.error.base,
    darkRuby: tm.error.dark,
    lightRuby: tm.error.light
  },
  amber: {
    base: tm.caution.base,
    darkAmber: tm.caution.dark,
    lightAmber: tm.caution.light
  },
  moonrock: tm.gray03,
  diatomite: tm.gray04,
  heliotrope: _objectSpread({}, tm.accent01, {
    muted: "#F3E1FF"
  }),
  cruz: _objectSpread({}, tm.accent02, {
    muted: "#e3cae3"
  }),
  alert: {
    base: tm.error.base,
    dark: "#AE393A",
    light: "#EC9C9C",
    muted: "#F5CDCD"
  },
  caution: tm.caution,
  positive: {
    base: tm.success.base,
    dark: "#208E25",
    light: "#8DD58E",
    muted: "#C5E9C6"
  },
  defaultGradient: {
    from: tm.primary.base,
    to: "#3ac7ff"
  },
  // Onyx and white are specific for typography. Should not be removed
  onyx: tm.onyx,
  white: tm.white
};

var zIndex = {
  default: 0,
  reset: 1,
  unset: -1,
  shared: {
    autocomplete: 1
  },
  searchsuggest: {
    base: 4,
    fields: 5
  },
  layout: {
    feedback: 1,
    ads: 2,
    header: 3,
    menu: 4,
    overlay: 9
  },
  drawer: {
    overlay: 3,
    content: 4
  },
  filter: {
    panel: 5
  }
};

var constants = {
  MAX_COLUMNS: 12,
  borderRadius: {
    small: "2px",
    large: "4px"
  },
  breakpoints: {
    small: "(max-width: 767px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 1024px)",
    xLarge: "(min-width: 1440px)",
    xSmallAndDown: "(max-width: 479px)",
    smallAndUp: "(min-width: 480px)",
    mediumAndUp: "(min-width: 768px)",
    largeAndUp: "(min-width: 1024px)",
    xLargeAndUp: "(min-width: 1440px)"
  },
  easing: {
    easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    exit: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  }
};
var cardBoxShadow =
  "0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12)";
var popContainersBoxShadow = "0 4px 4px 0 rgba(0, 0, 0, 0.12)";
var popContainersSharpBoxShadow = "0 2px 8px 0 rgba(159, 159, 159, 0.5)";

var colorVariants = {
  standard: function standard(theme) {
    return {
      color: theme.white.base,
      backgroundColor: theme.primary.base,
      backgroundColorHover: theme.primary.medium,
      backgroundColorPressed: theme.primary.dark,
      borderColor: theme.transparent
    };
  },
  standardDisabled: function standardDisabled(theme) {
    return {
      color: theme.white.base,
      backgroundColor: theme.primary.base,
      borderColor: theme.transparent
    };
  },
  special: function special(theme) {
    return {
      color: theme.white.base,
      backgroundColor: theme.special.base,
      backgroundColorHover: theme.special.medium,
      backgroundColorPressed: theme.special.dark,
      borderColor: theme.transparent
    };
  },
  specialDisabled: function specialDisabled(theme) {
    return {
      color: theme.white.base,
      backgroundColor: theme.special.base,
      borderColor: theme.transparent
    };
  },
  outline: function outline(theme) {
    return {
      color: theme.primary.base,
      backgroundColor: theme.white.base,
      backgroundColorHover: theme.primary.light,
      backgroundColorPressed: theme.primary.muted,
      borderColor: theme.primary.base
    };
  },
  outlineDisabled: function outlineDisabled(theme) {
    return {
      color: theme.primary.base,
      backgroundColor: theme.transparent,
      borderColor: theme.primary.base
    };
  },
  transparent: function transparent(theme) {
    return {
      color: theme.primary.base,
      backgroundColor: theme.transparent,
      backgroundColorHover: theme.primary.light,
      backgroundColorPressed: theme.primary.muted,
      borderColor: theme.transparent
    };
  },
  transparentDisabled: function transparentDisabled(theme) {
    return {
      color: theme.primary.base,
      backgroundColor: theme.transparent,
      borderColor: theme.transparent
    };
  },
  outlineGray: function outlineGray(theme) {
    return {
      color: theme.darkFill,
      backgroundColor: theme.white.base,
      backgroundColorHover: theme.white.base,
      backgroundColorPressed: theme.white.base,
      borderColor: theme.gray04
    };
  },
  outlineGrayDisabled: function outlineGrayDisabled(theme) {
    return {
      color: theme.primary.base,
      backgroundColor: theme.transparent,
      borderColor: theme.gray02
    };
  }
};
var SIZES$1 = {
  small: {
    padding: "10px",
    lineHeight: 1.84,
    fontSize: typography.size.uno
  },
  regular: {
    padding: "12px",
    lineHeight: 2.43,
    fontSize: typography.size.hecto
  },
  large: {
    padding: "14px",
    lineHeight: 2.63,
    fontSize: typography.size.kilo
  }
};

var getPadding = function getPadding(_ref) {
  var size = _ref.size;
  return SIZES$1[size].padding;
};

var StyledButton = styled.button.withConfig({
  displayName: "Basestyles__StyledButton",
  componentId: "sc-1xbk9id-0"
})(
  [
    "font-weight:",
    ";font-size:",
    ";line-height:",
    ";width:100%;padding:0 ",
    " 0 ",
    ";min-width:60px;text-align:center;",
    " border-radius:",
    ";cursor:pointer;color:",
    ";background-color:",
    ";border:1px solid ",
    ";transition:transform 0.1s linear;transition:background-color 0.3s ",
    ";&:focus{outline:none;box-shadow:",
    ";}&:hover{background-color:",
    ";}&:active{transform:scale(0.98,0.98) translate(0,1px);background-color:",
    ";}&:disabled{transform:none;color:",
    ";background-color:",
    ";border:1px solid ",
    ";",
    ";}"
  ],
  typography.weight.semiBold,
  function(_ref2) {
    var size = _ref2.size;
    return SIZES$1[size].fontSize;
  },
  function(_ref3) {
    var size = _ref3.size;
    return SIZES$1[size].lineHeight;
  },
  getPadding,
  getPadding,
  function(_ref4) {
    var noTransform = _ref4.noTransform;
    return noTransform ? "" : "text-transform: capitalize;";
  },
  constants.borderRadius.small,
  function(_ref5) {
    var variant = _ref5.variant,
      themeName = _ref5.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).color;
  },
  function(_ref6) {
    var variant = _ref6.variant,
      themeName = _ref6.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).backgroundColor;
  },
  function(_ref7) {
    var variant = _ref7.variant,
      themeName = _ref7.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).borderColor;
  },
  constants.easing.easeInOutQuad,
  function(_ref8) {
    var themeName = _ref8.theme.themeName;
    var buttonTheme = themes[themeName];
    return "0 0 5px 0 ".concat(buttonTheme.primary.base);
  },
  function(_ref9) {
    var variant = _ref9.variant,
      themeName = _ref9.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).backgroundColorHover;
  },
  function(_ref10) {
    var variant = _ref10.variant,
      themeName = _ref10.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).backgroundColorPressed;
  },
  function(_ref11) {
    var variant = _ref11.variant,
      themeName = _ref11.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).color;
  },
  function(_ref12) {
    var variant = _ref12.variant,
      themeName = _ref12.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants["".concat(variant, "Disabled")](buttonTheme)
      .backgroundColor;
  },
  function(_ref13) {
    var variant = _ref13.variant,
      themeName = _ref13.theme.themeName;
    var buttonTheme = themes[themeName];
    return colorVariants["".concat(variant, "Disabled")](buttonTheme)
      .borderColor;
  },
  function(_ref14) {
    var variant = _ref14.variant;
    return variant === SPECIAL ? "opacity: 0.4;" : "opacity: 0.2;";
  }
);
StyledButton.defaultProps = {
  theme: {
    themeName: "tm"
  }
};
var StyledButtonLink = styled(StyledButton).withConfig({
  displayName: "Basestyles__StyledButtonLink",
  componentId: "sc-1xbk9id-1"
})(["display:block;text-decoration:none;"]);

/**
 * getRelByTarget overrides the anchor tag's rel attribute to "noopener" when the target attribute equals "_blank"
 * Prevents a security vulnerability and improves performance: https://developers.google.com/web/tools/lighthouse/audits/noopener
 * @param { String } target - Specifies where to open the linked document (e.g. _blank, _self, _parent, _top, framename)
 * @param { String } rel - Specifies the relationship between the current document and the linked document (e.g. alternate, author, noopener, etc.)
 * @returns { String } rel
 */
var getRelByTarget = function getRelByTarget(target, rel) {
  return target === "_blank" ? "noopener" : rel;
};
var getAsProp = function getAsProp(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick;
  if (href && href.length)
    return {
      as: "a"
    };
  if (!href && onClick && typeof onClick === "function")
    return {
      as: "button"
    };
  return {
    as: "span"
  };
};

var Button = function Button(_ref) {
  var variant = _ref.variant,
    size = _ref.size,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["variant", "size", "children"]);

  var href = rest.href;

  if (href) {
    var rel = rest.rel,
      target = rest.target;
    var validatedRel = getRelByTarget(target, rel);
    return React.createElement(
      StyledButtonLink,
      _extends(
        {
          variant: variant,
          size: size,
          rel: validatedRel,
          as: "a"
        },
        rest
      ),
      children
    );
  }

  return React.createElement(
    StyledButton,
    _extends(
      {
        variant: variant,
        size: size
      },
      rest
    ),
    children
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES),
  children: PropTypes.node.isRequired
};
Button.defaultProps = {
  size: REGULAR,
  variant: STANDARD
};

var HEIGHT = "36px";
var VARIANTS$1 = {
  standard: {
    color: colors.white.base,
    backgroundColor: colors.azure.base,
    borderColor: colors.azure.base
  },
  standardDisabled: {
    color: colors.white.base,
    backgroundColor: colors.azure.light,
    borderColor: colors.azure.light
  },
  outline: {
    color: colors.azure.base,
    backgroundColor: colors.white.base,
    borderColor: colors.azure.base
  },
  outlineDisabled: {
    color: colors.azure.light,
    backgroundColor: colors.white.base,
    borderColor: colors.azure.light
  },
  transparent: {
    color: colors.white.base,
    backgroundColor: "transparent",
    borderColor: colors.white.base
  },
  transparentDisabled: {
    color: colors.white.muted,
    backgroundColor: "transparent",
    borderColor: colors.white.muted
  }
};
var GenericButton = styled.button.withConfig({
  displayName: "Badgestyles__GenericButton",
  componentId: "sc-14oidxf-0"
})(
  [
    "height:",
    ";width:100%;min-width:100px;font-weight:",
    ";text-align:center;border-radius:",
    ";color:",
    ";background-color:",
    ";border:1px solid ",
    ";cursor:pointer;text-transform:capitalize;&:disabled{color:",
    ";background-color:",
    ";border:1px solid ",
    ";cursor:not-allowed;}"
  ],
  HEIGHT,
  typography.weight.semiBold,
  constants.borderRadius.small,
  function(_ref) {
    var variant = _ref.variant;
    return VARIANTS$1[variant].color;
  },
  function(_ref2) {
    var variant = _ref2.variant;
    return VARIANTS$1[variant].backgroundColor;
  },
  function(_ref3) {
    var variant = _ref3.variant;
    return VARIANTS$1[variant].borderColor;
  },
  function(_ref4) {
    var variant = _ref4.variant;
    return VARIANTS$1["".concat(variant, "Disabled")].color;
  },
  function(_ref5) {
    var variant = _ref5.variant;
    return VARIANTS$1["".concat(variant, "Disabled")].backgroundColor;
  },
  function(_ref6) {
    var variant = _ref6.variant;
    return VARIANTS$1["".concat(variant, "Disabled")].borderColor;
  }
);
var StyledBadge = styled(GenericButton).withConfig({
  displayName: "Badgestyles__StyledBadge",
  componentId: "sc-14oidxf-1"
})(
  [
    "font-size:",
    ";display:flex;flex-flow:row;align-items:center;justify-content:center;max-width:45px;min-width:45px;height:20px;"
  ],
  typography.size.uno
);

var Badge = function Badge(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    props = _objectWithoutProperties(_ref, ["children", "variant"]);

  return React.createElement(
    StyledBadge,
    _extends(
      {
        variant: variant
      },
      props
    ),
    children
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES)
};
Badge.defaultProps = {
  size: REGULAR,
  variant: STANDARD
};

var StarIcon = function StarIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 11 10",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      fillRule: "evenodd",
      d:
        "M5.5 7.7L2.267 9.95l1.14-3.77L.27 3.8l3.938-.08L5.5 0l1.293 3.72 3.938.08-3.139 2.38 1.14 3.77z"
    })
  );
};

StarIcon.displayName = "StarIcon";
StarIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};
StarIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

var StyledBadgeRating = styled(StyledBadge).withConfig({
  displayName: "RatingBadge__StyledBadgeRating",
  componentId: "kdpays-0"
})(["padding:0;"]);
var ContentWrapper = styled.span.withConfig({
  displayName: "RatingBadge__ContentWrapper",
  componentId: "kdpays-1"
})([
  "display:flex;flex-flow:row;justify-content:center;align-items:center;width:100%;height:100%;"
]);
var Container = styled.span.withConfig({
  displayName: "RatingBadge__Container",
  componentId: "kdpays-2"
})(["padding-left:2px;"]);
var StyledStarIcon = styled(StarIcon).withConfig({
  displayName: "RatingBadge__StyledStarIcon",
  componentId: "kdpays-3"
})(["flex:0 0 auto;line-height:1;"]);

var RatingBadge = function RatingBadge(_ref) {
  var variant = _ref.variant,
    children = _ref.children,
    ratingValue = _ref.ratingValue,
    bestRating = _ref.bestRating,
    ratingCount = _ref.ratingCount,
    props = _objectWithoutProperties(_ref, [
      "variant",
      "children",
      "ratingValue",
      "bestRating",
      "ratingCount"
    ]);

  return React.createElement(
    StyledBadgeRating,
    _extends(
      {
        itemProp: "aggregateRating",
        itemScope: true,
        itemType: "https://schema.org/AggregateRating",
        variant: variant
      },
      props
    ),
    React.createElement(
      ContentWrapper,
      null,
      React.createElement(StyledStarIcon, {
        size: 12
      }),
      React.createElement(Container, null, children),
      ratingValue &&
        React.createElement("meta", {
          itemProp: "ratingValue",
          content: ratingValue
        }),
      bestRating &&
        React.createElement("meta", {
          itemProp: "bestRating",
          content: bestRating
        }),
      ratingCount &&
        React.createElement("meta", {
          itemProp: "ratingCount",
          content: ratingCount
        })
    )
  );
};

RatingBadge.propTypes = {
  children: PropTypes.node.isRequired,
  ratingValue: PropTypes.string.isRequired,
  bestRating: PropTypes.string,
  ratingCount: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES)
};
RatingBadge.defaultProps = {
  variant: STANDARD,
  size: REGULAR,
  bestRating: "5"
};

var StyledIconButton = styled(GenericButton).withConfig({
  displayName: "IconButton__StyledIconButton",
  componentId: "efz4ez-0"
})(
  [
    "font-size:",
    ";min-width:",
    "px;max-width:",
    "px;height:",
    "px;width:",
    "px;border:none;&:focus{outline:none;}> *{pointer-events:none;}"
  ],
  typography.size.hecto,
  function(props) {
    return props.size;
  },
  function(props) {
    return props.size;
  },
  function(props) {
    return props.size;
  },
  function(props) {
    return props.size;
  }
);

var IconButton = function IconButton(_ref) {
  var children = _ref.children,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, ["children", "size"]);

  return React.createElement(
    StyledIconButton,
    _extends(
      {
        size: size,
        variant: "transparent"
      },
      props
    ),
    children
  );
};

IconButton.defaultProps = {
  size: 45
};
IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number
};

var themeShape = {
  themeName: PropTypes.string.isRequired
};
var themeTm = {
  themeName: "tm"
};
/**
 * This function allows to retrieve a value from the themes object.
 * The first function accepts path as a list of strings.
 * The second function accepts a theme object. It's provided in styled components
 * automatically.
 */

var getThemeValue = function() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return function() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$theme = _ref.theme;

    _ref$theme = _ref$theme === void 0 ? {} : _ref$theme;
    var _ref$theme$themeName = _ref$theme.themeName,
      themeName = _ref$theme$themeName === void 0 ? "tm" : _ref$theme$themeName;
    return args.reduce(function(acc, el) {
      if (acc[el] === undefined) {
        throw new ReferenceError("value is not defined");
      }

      return acc[el];
    }, themes[themeName]);
  };
};

var composeHandler = function composeHandler() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return function(e) {
    args.forEach(function(fn) {
      return fn && fn(e);
    });
  };
};

var omitKeys = function omitKeys() {
  var keys =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(obj).reduce(function(acc, key) {
    if (keys.includes(key)) return acc;
    acc[key] = obj[key];
    return acc;
  }, {});
};

var sluggify = function sluggify() {
  var text =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return text.replace(/\s/g, "").toLowerCase();
};

var getFontHue = function getFontHue(_ref) {
  var fontColor = _ref.fontColor,
    primary = _ref.primary,
    secondary = _ref.secondary,
    disabled = _ref.disabled,
    variant = _ref.variant,
    themed = _ref.themed;
  if (typeof fontColor === "string") return themed ? "" : fontColor;
  var fontHues = themed
    ? {
        primary: variant === "accent" ? "dark" : "base",
        secondary: variant === "accent" ? "base" : "light",
        disabled: variant === "accent" ? "light" : "muted"
      }
    : {
        primary: variant === "accent" ? fontColor.dark : fontColor.base,
        secondary: fontColor.light,
        disabled: fontColor.muted
      };

  switch (true) {
    case primary:
      return fontHues.primary;

    case secondary:
      return fontHues.secondary;

    case disabled:
      return fontHues.disabled;

    default:
      return fontHues.primary;
  }
};
var getFontColor = function getFontColor(_ref2) {
  var variant = _ref2.variant,
    accent = _ref2.accent,
    primary = _ref2.primary,
    secondary = _ref2.secondary,
    disabled = _ref2.disabled;
  var fontColors = {
    dark: colors.onyx,
    light: colors.white,
    accent: colors[accent]
  };
  var fontColor = fontColors[variant] || fontColors.dark;
  return getFontHue({
    fontColor: fontColor,
    primary: primary,
    secondary: secondary,
    disabled: disabled,
    variant: variant,
    themed: false
  });
};
var getThemedFontColor = function getThemedFontColor(_ref3) {
  var theme = _ref3.theme,
    variant = _ref3.variant,
    accent = _ref3.accent,
    primary = _ref3.primary,
    secondary = _ref3.secondary,
    disabled = _ref3.disabled;

  if (!theme.themeName) {
    return getFontColor({
      variant: variant,
      accent: accent,
      primary: primary,
      secondary: secondary,
      disabled: disabled
    });
  }

  var fontColors = {
    dark: "onyx",
    light: "white",
    accent: accent
  };
  var fontColor = getThemeValue(fontColors[variant] || "onyx")({
    theme: theme
  });
  var fontHue = getFontHue({
    fontColor: fontColor,
    primary: primary,
    secondary: secondary,
    disabled: disabled,
    variant: variant,
    themed: true
  });
  return fontColor[fontHue] || fontColor;
};
var labelsColorMap = {
  alert: themes.global.error.base,
  positive: themes.global.success.base,
  positiveDark: themes.global.success.dark,
  accent: themes.global.accent01.dark,
  caution: themes.global.caution.dark,
  neutral: themes.global.onyx.light
};
var getLabelTextColor = function getLabelTextColor(_ref4) {
  var variant = _ref4.variant;
  return labelsColorMap[variant] || "inherit";
};

var DAY_TILE_CLASS = "day-tile";
var DAY_TILE_NO_BORDER_RADIUS_CLASS = "".concat(
  DAY_TILE_CLASS,
  "--no-border-radius"
);
var DayTile = styled.div
  .attrs({
    className: function className(_ref) {
      var noBorderRadius = _ref.noBorderRadius;
      return classNames(
        DAY_TILE_CLASS,
        _defineProperty({}, DAY_TILE_NO_BORDER_RADIUS_CLASS, noBorderRadius)
      );
    }
  })
  .withConfig({
    displayName: "DayTile",
    componentId: "akx4x4-0"
  })(
  [
    "position:relative;display:flex;flex-flow:column nowrap;height:100%;min-height:192px;border:solid 1px ",
    ";overflow:hidden;background-color:",
    ";border-radius:",
    ";&.",
    "{border-radius:0;}"
  ],
  getThemeValue("gray04"),
  getThemeValue("white", "base"),
  constants.borderRadius.small,
  DAY_TILE_NO_BORDER_RADIUS_CLASS
);
DayTile.Header = styled.header.withConfig({
  displayName: "DayTile__Header",
  componentId: "akx4x4-1"
})([
  "z-index:1;position:absolute;top:0;left:0;right:30px;display:flex;flex-flow:row nowrap;pointer-events:none;"
]);

var StyledText = styled.div.withConfig({
  displayName: "StyledText",
  componentId: "k4y7h7-0"
})(["font-size:", ";"], function(props) {
  return props.fontSize || typography.size.hecto;
});

var PrimaryStyledText = styled(StyledText).withConfig({
  displayName: "PrimaryText__PrimaryStyledText",
  componentId: "sc-1sslb8r-0"
})(
  ["color:", ";@media only screen and ", "{font-size:", ";}"],
  colors.onyx.base,
  constants.breakpoints.smallAndUp,
  typography.size.kilo
);

var PrimaryText = function PrimaryText(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(PrimaryStyledText, props, children);
};

PrimaryText.propTypes = {
  children: PropTypes.string.isRequired
};

var SecondaryStyledText = styled(StyledText).withConfig({
  displayName: "SecondaryText__SecondaryStyledText",
  componentId: "sc-1wv26om-0"
})(["color:", ";"], colors.onyx.light);

var SecondaryText = function SecondaryText(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(SecondaryStyledText, props, children);
};

SecondaryText.propTypes = {
  children: PropTypes.string.isRequired
};

var smallAndUp = function smallAndUp() {
  return css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.smallAndUp,
    css.apply(void 0, arguments)
  );
};
var mediumAndUp = function mediumAndUp() {
  return css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.mediumAndUp,
    css.apply(void 0, arguments)
  );
};
var largeAndUp = function largeAndUp() {
  return css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.largeAndUp,
    css.apply(void 0, arguments)
  );
};
var xLargeAndUp = function xLargeAndUp() {
  return css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.xLargeAndUp,
    css.apply(void 0, arguments)
  );
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BoldStyledText = styled(StyledText).withConfig({
  displayName: "BoldText__BoldStyledText",
  componentId: "llmkzj-0"
})(
  ["color:", ";font-weight:", ";", ";"],
  function(props) {
    return props.color;
  },
  typography.weight.semiBold,
  mediumAndUp(_templateObject(), typography.size.uno)
);

var BoldText = function BoldText(_ref) {
  var color = _ref.color,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["color", "children"]);

  return React.createElement(
    BoldStyledText,
    _extends(
      {
        color: color
      },
      rest
    ),
    children
  );
};

BoldText.defaultProps = {
  color: colors.blackPearl
};
BoldText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var responsiveSizeMixin = function responsiveSizeMixin(size) {
  return size
    ? css(
        ["font-size:", ";", ";", ";", ";", ";"],
        typography.size[typeof size === "string" ? size : size.xSmall],
        size.small &&
          smallAndUp(_templateObject$1(), typography.size[size.small]),
        size.medium &&
          mediumAndUp(_templateObject2(), typography.size[size.medium]),
        size.large &&
          largeAndUp(_templateObject3(), typography.size[size.large]),
        size.xLarge &&
          xLargeAndUp(_templateObject4(), typography.size[size.xLarge])
      )
    : "";
};
var getResponsiveSize = function getResponsiveSize(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "hecto" : _ref$size,
    _ref$responsiveSize = _ref.responsiveSize,
    responsiveSize =
      _ref$responsiveSize === void 0 ? null : _ref$responsiveSize;
  return responsiveSize
    ? {
        xSmall: responsiveSize.xSmall || responsiveSize.small || size,
        small: responsiveSize.small,
        medium: responsiveSize.medium,
        large: responsiveSize.large,
        xLarge: responsiveSize.xLarge
      }
    : size;
};

var Base = styled.span.withConfig({
  displayName: "Basestyles__Base",
  componentId: "sc-1tnb9cm-0"
})(
  [
    "",
    ";font-weight:",
    ";line-height:",
    ";text-transform:",
    ";",
    ";color:",
    ";"
  ],
  function(_ref) {
    var size = _ref.size;
    return responsiveSizeMixin(size);
  },
  function(_ref2) {
    var weight = _ref2.weight;
    return typography.weight[weight];
  },
  typography.lineHeight.body,
  function(_ref3) {
    var allCaps = _ref3.allCaps;
    return allCaps ? "uppercase" : "none";
  },
  function(_ref4) {
    var monospace = _ref4.monospace;
    return monospace ? 'font-feature-settings: "tnum"' : "";
  },
  function(_ref5) {
    var theme = _ref5.theme,
      themed = _ref5.themed,
      variant = _ref5.variant,
      accent = _ref5.accent,
      primary = _ref5.primary,
      secondary = _ref5.secondary,
      disabled = _ref5.disabled;
    return theme && themed
      ? getThemedFontColor({
          theme: theme,
          variant: variant,
          accent: accent,
          primary: primary,
          secondary: secondary,
          disabled: disabled
        })
      : getFontColor({
          variant: variant,
          accent: accent,
          primary: primary,
          secondary: secondary,
          disabled: disabled
        });
  }
);

var ALLOWED_SIZES = ["mini", "uno", "hecto", "kilo", "giga", "tera", "zetta"];
var variant = PropTypes.oneOf(["accent", "dark", "light"]);
var accent = PropTypes.oneOf([
  "", // traditional
  "aquamarine",
  "azure",
  "alert",
  "caution",
  "cruz",
  "heliotrope",
  "positive",
  "summerSky",
  "turquoise", // themed
  "brand",
  "primary",
  "special",
  "accent01",
  "accent02",
  "accent03",
  "accent04",
  "gray01",
  "gray02",
  "gray03",
  "gray04",
  "gray05",
  "error",
  "caution",
  "success",
  "transparent"
]);
var size = PropTypes.oneOf(ALLOWED_SIZES);
var responsiveSize = PropTypes.shape({
  xSmall: size,
  small: size,
  medium: size,
  large: size,
  xLarge: size
});
var defaultResponsiveSize = null;
var weight = PropTypes.oneOf(["regular", "semiBold"]);

var LinkBase = styled(Base).withConfig({
  displayName: "Link__LinkBase",
  componentId: "sc-1konlqf-0"
})(
  [
    "text-decoration:none;transition:color 0.3s ease;&:focus,&:active,&:visited,&:hover{color:",
    ";}&:hover{color:",
    ";}"
  ],
  function(props) {
    return getFontColor(props);
  },
  colors.azure.hover
);
var LinkButtonBase = styled(LinkBase).withConfig({
  displayName: "Link__LinkButtonBase",
  componentId: "sc-1konlqf-1"
})([
  "appearance:none;border:0;outline:0;background:transparent;padding:0;cursor:pointer;"
]);
var LinkSpanBase = styled(LinkBase).withConfig({
  displayName: "Link__LinkSpanBase",
  componentId: "sc-1konlqf-2"
})(["cursor:pointer;"]);

var getElement = function getElement(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick;
  if (href && href.length) return LinkBase;
  if (!href && onClick && typeof onClick === "function") return LinkButtonBase;
  return LinkSpanBase;
};

var Link = function Link(_ref2) {
  var href = _ref2.href,
    onClick = _ref2.onClick,
    children = _ref2.children,
    weight$$1 = _ref2.weight,
    size$$1 = _ref2.size,
    responsiveSize$$1 = _ref2.responsiveSize,
    variant$$1 = _ref2.variant,
    accent$$1 = _ref2.accent,
    primary = _ref2.primary,
    props = _objectWithoutProperties(_ref2, [
      "href",
      "onClick",
      "children",
      "weight",
      "size",
      "responsiveSize",
      "variant",
      "accent",
      "primary"
    ]);

  var target = props.target,
    rel = props.rel;
  var Elm = getElement({
    href: href,
    onClick: onClick
  });
  var asProp = getAsProp({
    href: href,
    onClick: onClick
  });
  var validatedRel = getRelByTarget(target, rel);
  return React.createElement(
    Elm,
    _extends({}, props, asProp, {
      size: getResponsiveSize({
        size: size$$1,
        responsiveSize: responsiveSize$$1
      }),
      primary: primary,
      variant: variant$$1,
      accent: accent$$1,
      href: href,
      rel: validatedRel,
      weight: weight$$1,
      onClick: onClick
    }),
    children
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  primary: PropTypes.bool,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  variant: variant,
  accent: accent
};
Link.defaultProps = {
  target: "",
  onClick: null,
  href: null,
  rel: "_self",
  size: "hecto",
  responsiveSize: defaultResponsiveSize,
  weight: "regular",
  variant: "accent",
  accent: "azure",
  primary: true
};

var LinkCtaBase = styled.a.withConfig({
  displayName: "LinkCta__LinkCtaBase",
  componentId: "rsiat0-0"
})(
  [
    "text-decoration:none;transition:color 0.3s ease;transition:text-decoration 0.3s ease;transition:transform 0.1s linear;font-weight:",
    ";",
    ";line-height:",
    ";color:",
    ";display:inline-block;&:focus{outline:none;text-decoration:underline;}&:active{transform:scale(0.98,0.98) translate(0,1px);color:",
    ";}&:hover{color:",
    ";}"
  ],
  typography.weight.semiBold,
  function(_ref) {
    var size$$1 = _ref.size;
    return responsiveSizeMixin(size$$1);
  },
  typography.lineHeight.header,
  getThemeValue("primary", "base"),
  getThemeValue("primary", "dark"),
  getThemeValue("primary", "medium")
);
var LinkCtaButtonBase = styled(LinkCtaBase).withConfig({
  displayName: "LinkCta__LinkCtaButtonBase",
  componentId: "rsiat0-1"
})([
  "appearance:none;border:0;outline:0;background:transparent;padding:0;cursor:pointer;"
]);
var LinkCtaSpanBase = styled(LinkCtaBase).withConfig({
  displayName: "LinkCta__LinkCtaSpanBase",
  componentId: "rsiat0-2"
})(["cursor:pointer;"]);

var getElement$1 = function getElement(_ref2) {
  var href = _ref2.href,
    onClick = _ref2.onClick;
  if (href && href.length) return LinkCtaBase;
  if (!href && onClick && typeof onClick === "function")
    return LinkCtaButtonBase;
  return LinkCtaSpanBase;
};

var LinkCta = function LinkCta(_ref3) {
  var href = _ref3.href,
    onClick = _ref3.onClick,
    children = _ref3.children,
    size$$1 = _ref3.size,
    responsiveSize$$1 = _ref3.responsiveSize,
    props = _objectWithoutProperties(_ref3, [
      "href",
      "onClick",
      "children",
      "size",
      "responsiveSize"
    ]);

  var target = props.target,
    rel = props.rel;
  var Elm = getElement$1({
    href: href,
    onClick: onClick
  });
  var asProp = getAsProp({
    href: href,
    onClick: onClick
  });
  var validatedRel = getRelByTarget(target, rel);
  return React.createElement(
    Elm,
    _extends({}, props, asProp, {
      size: getResponsiveSize({
        size: size$$1,
        responsiveSize: responsiveSize$$1
      }),
      href: href,
      onClick: onClick,
      rel: validatedRel
    }),
    children
  );
};

LinkCta.propTypes = {
  size: PropTypes.string,
  responsiveSize: responsiveSize,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string
};
LinkCta.defaultProps = {
  size: null,
  onClick: null,
  responsiveSize: defaultResponsiveSize,
  href: null,
  target: "_self",
  rel: ""
};
LinkCta.displayName = "LinkCta";

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SectionHeading = styled.span.withConfig({
  displayName: "SectionHeading",
  componentId: "sc-1q26shc-0"
})(
  ["font-size:", ";font-weight:", ";", ";"],
  typography.size.kilo,
  typography.weight.semiBold,
  smallAndUp(_templateObject$2(), typography.size.giga)
);

var AVAILABLE_TAGS = ["div", "span", "p", "h3", "h4", "h5", "h6"];

var TextBase = function TextBase(_ref) {
  var _classnames;

  var tag = _ref.tag,
    variant$$1 = _ref.variant,
    accent$$1 = _ref.accent,
    primary = _ref.primary,
    secondary = _ref.secondary,
    disabled = _ref.disabled,
    size$$1 = _ref.size,
    responsiveSize$$1 = _ref.responsiveSize,
    weight$$1 = _ref.weight,
    className = _ref.className,
    allCaps = _ref.allCaps,
    children = _ref.children,
    theme = _ref.theme,
    themed = _ref.themed,
    props = _objectWithoutProperties(_ref, [
      "tag",
      "variant",
      "accent",
      "primary",
      "secondary",
      "disabled",
      "size",
      "responsiveSize",
      "weight",
      "className",
      "allCaps",
      "children",
      "theme",
      "themed"
    ]);

  var isThemed = themed && theme && theme.themeName;
  var classes = classNames(
    ((_classnames = {
      text: true
    }),
    _defineProperty(_classnames, "text--".concat(variant$$1), !!variant$$1),
    _defineProperty(
      _classnames,
      "text--".concat(accent$$1),
      variant$$1 === "accent"
    ),
    _defineProperty(_classnames, "text-".concat(isThemed), isThemed),
    _defineProperty(
      _classnames,
      "text--primary",
      !!primary || (!secondary && !disabled && !accent$$1)
    ),
    _defineProperty(_classnames, "text--secondary", !!secondary),
    _defineProperty(_classnames, "text--disabled", !!disabled),
    _defineProperty(_classnames, className, !!className),
    _classnames)
  );
  return React.createElement(
    Base,
    _extends(
      {
        className: classes,
        size: getResponsiveSize({
          size: size$$1,
          responsiveSize: responsiveSize$$1
        }),
        weight: weight$$1,
        variant: variant$$1,
        accent: accent$$1,
        primary: primary,
        secondary: secondary,
        disabled: disabled,
        allCaps: allCaps,
        as: tag,
        themed: themed
      },
      props
    ),
    children
  );
};

TextBase.propTypes = {
  tag: PropTypes.oneOf(AVAILABLE_TAGS),
  variant: variant,
  accent: accent,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  allCaps: PropTypes.bool,
  monospace: PropTypes.bool,
  theme: PropTypes.shape(themeShape),
  themed: PropTypes.bool
};
TextBase.defaultProps = {
  tag: "div",
  variant: "dark",
  accent: "",
  size: "hecto",
  responsiveSize: defaultResponsiveSize,
  weight: "regular",
  className: "",
  primary: false,
  secondary: false,
  disabled: false,
  allCaps: false,
  monospace: false,
  theme: themeTm,
  themed: false
};
TextBase.displayName = "Text";

var DayTileDateContainer = styled.div.withConfig({
  displayName: "DayTileDate__DayTileDateContainer",
  componentId: "sc-9bknqq-0"
})(
  [
    "display:flex;width:30px;height:30px;justify-content:center;align-items:center;background-color:",
    ";"
  ],
  getThemeValue("white", "base")
);
var DayTileDateText = styled(TextBase)
  .attrs({
    size: "kilo",
    weight: "semiBold",
    className: function className(_ref) {
      var isAccent = _ref.isAccent;
      return classNames("day-tile-date__text", {
        "day-tile-date__text--accent": isAccent
      });
    }
  })
  .withConfig({
    displayName: "DayTileDate__DayTileDateText",
    componentId: "sc-9bknqq-1"
  })(
  ["color:", ";&.day-tile-date__text--accent{color:", ";}"],
  getThemeValue("gray02"),
  getThemeValue("accent01", "dark")
);

var DayTileDate = function DayTileDate(_ref2) {
  var children = _ref2.children,
    accent = _ref2.accent;
  return React.createElement(
    DayTileDateContainer,
    null,
    React.createElement(
      DayTileDateText,
      {
        isAccent: accent
      },
      children
    )
  );
};

DayTileDate.propTypes = {
  children: PropTypes.node.isRequired,
  accent: PropTypes.bool
};
DayTileDate.defaultProps = {
  accent: false
};

var DAY_TILE_ITEM_CLASS_HIGHLIGHTED = "day-tile-item--highlighted";
var DayTileItem = styled.article
  .attrs({
    className: function className(_ref) {
      var highlighted = _ref.highlighted;
      return classNames(
        _defineProperty({}, DAY_TILE_ITEM_CLASS_HIGHLIGHTED, highlighted)
      );
    }
  })
  .withConfig({
    displayName: "DayTileItem",
    componentId: "sc-19tza86-0"
  })(
  [
    "flex:0 0 auto;display:flex;flex-flow:column nowrap;min-height:190px;&.",
    "{background-color:",
    ";}"
  ],
  DAY_TILE_ITEM_CLASS_HIGHLIGHTED,
  getThemeValue("primary", "lightBase")
);
DayTileItem.propTypes = {
  highlighted: PropTypes.bool
};
DayTileItem.defaultProps = {
  highlighted: false
};
DayTileItem.Header = styled.header.withConfig({
  displayName: "DayTileItem__Header",
  componentId: "sc-19tza86-1"
})(["display:flex;flex-flow:row nowrap;padding-left:30px;min-height:30px;"]);
DayTileItem.Content = styled.div.withConfig({
  displayName: "DayTileItem__Content",
  componentId: "sc-19tza86-2"
})(["flex:auto;display:flex;flex-flow:row nowrap;"]);
DayTileItem.ContentColumn = styled.div.withConfig({
  displayName: "DayTileItem__ContentColumn",
  componentId: "sc-19tza86-3"
})(["padding:", " ", " ", ";"], spacing.cozy, spacing.cozy, spacing.slim);
DayTileItem.Footer = styled.footer.withConfig({
  displayName: "DayTileItem__Footer",
  componentId: "sc-19tza86-4"
})(["margin-top:auto;"]);
DayTileItem.Divider = styled.div.withConfig({
  displayName: "DayTileItem__Divider",
  componentId: "sc-19tza86-5"
})(
  ["margin:", " ", ";border-bottom:solid 1px ", ";"],
  spacing.slim,
  spacing.cozy,
  getThemeValue("gray04")
);

var DayTileItemGroup = function DayTileItemGroup(_ref2) {
  var children = _ref2.children;
  return Children.map(children, function(child, index) {
    if (index === 0) {
      return child;
    }

    return [React.createElement(DayTileItem.Divider, null), child];
  });
};

var DayTileItemBaseText = styled(TextBase)
  .attrs(function() {
    return {
      size: "uno"
    };
  })
  .withConfig({
    displayName: "DayTileItem__DayTileItemBaseText",
    componentId: "sc-19tza86-6"
  })(["width:100%;word-break:break-word;"]);
var DayTileItemLabel = styled(DayTileItemBaseText)
  .attrs(function() {
    return {
      weight: "semiBold"
    };
  })
  .withConfig({
    displayName: "DayTileItem__DayTileItemLabel",
    componentId: "sc-19tza86-7"
  })(["text-transform:uppercase;color:", ";"], getLabelTextColor);
var DayTileItemTitle = DayTileItemBaseText;

var DayTileItemSubTitle = function DayTileItemSubTitle(props) {
  return React.createElement(
    DayTileItemBaseText,
    _extends(
      {
        secondary: true
      },
      props
    )
  );
};

DayTileItem.Group = DayTileItemGroup;
DayTileItem.Title = DayTileItemTitle;
DayTileItem.SubTitle = DayTileItemSubTitle;
DayTileItem.Label = DayTileItemLabel;

var DayTileButtonGroup = styled.div.withConfig({
  displayName: "DayTileButton__DayTileButtonGroup",
  componentId: "ulhi48-0"
})(["padding:0 ", " ", ";"], spacing.cozy, spacing.cozy);
var DayTileButtonContainer = styled.div.withConfig({
  displayName: "DayTileButton__DayTileButtonContainer",
  componentId: "ulhi48-1"
})(["", " > & + &{margin-top:", ";}"], DayTileButtonGroup, spacing.cozy);

var DayTileButton = function DayTileButton(props) {
  return React.createElement(
    DayTileButtonContainer,
    null,
    React.createElement(
      Button,
      _extends(
        {
          noTransform: true,
          size: "small"
        },
        props
      )
    )
  );
};

DayTileButton.Group = DayTileButtonGroup;

var DayTileMoreButtonContainer = styled.div.withConfig({
  displayName: "DayTileMoreButton__DayTileMoreButtonContainer",
  componentId: "cdbjbu-0"
})(["padding:0 ", " ", ";"], spacing.cozy, spacing.cozy);
var DayTileMoreButtonLink = styled(Link)
  .attrs({
    size: "uno"
  })
  .withConfig({
    displayName: "DayTileMoreButton__DayTileMoreButtonLink",
    componentId: "cdbjbu-1"
  })(
  ["display:block;width:100%;padding:3px ", ";text-align:center;"],
  spacing.cozy
);

var DayTileMoreButton = function DayTileMoreButton(props) {
  return React.createElement(
    DayTileMoreButtonContainer,
    null,
    React.createElement(DayTileMoreButtonLink, props)
  );
};

var CAIcon = function CAIcon(_ref) {
  var height = _ref.height,
    width = _ref.width,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["height", "width", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      height: height,
      width: width,
      viewBox: "0 0 640 480"
    }),
    children,
    React.createElement(
      "g",
      {
        transform: "translate(74.118) scale(.9375)"
      },
      React.createElement("path", {
        fill: "#fff",
        d: "M81.137 0h362.276v512H81.137z"
      }),
      React.createElement("path", {
        fill: "#bf0a30",
        d:
          "M-100 0H81.138v512H-100zm543.413 0H624.55v512H443.414zM135.31 247.41l-14.067 4.808 65.456 57.446c4.95 14.764-1.72 19.116-5.97 26.86l71.06-9.02-1.85 71.512 14.718-.423-3.21-70.918 71.13 8.432c-4.402-9.297-8.32-14.233-4.247-29.098l65.414-54.426-11.447-4.144c-9.36-7.222 4.044-34.784 6.066-52.178 0 0-38.195 13.135-40.698 6.262l-9.727-18.685-34.747 38.17c-3.796.91-5.413-.6-6.304-3.808l16.053-79.766-25.42 14.297c-2.128.91-4.256.125-5.658-2.355l-24.45-49.06-25.21 50.95c-1.9 1.826-3.803 2.037-5.382.796l-24.204-13.578 14.53 79.143c-1.156 3.14-3.924 4.025-7.18 2.324l-33.216-37.737c-4.345 6.962-7.29 18.336-13.033 20.885-5.744 2.387-24.98-4.823-37.873-7.637 4.404 15.895 18.176 42.302 9.46 50.957z"
      })
    )
  );
};

CAIcon.displayName = "CAIcon";
CAIcon.defaultProps = {
  children: null
};
CAIcon.propTypes = {
  height: PropTypes$1.number.isRequired,
  width: PropTypes$1.number.isRequired,
  children: PropTypes$1.node
};

var CampsiteIcon = function CampsiteIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        stroke: "#262626",
        strokeWidth: ".25",
        d:
          "M15.788 17.398l-3.721-6.058-3.737 6.058h7.458zm-10.347.01c.706 0 1.362-.004 2.019.004.141.001.218-.046.291-.165 1.323-2.152 2.65-4.301 3.977-6.45.2-.324.482-.32.682.006 1.325 2.157 2.65 4.314 3.973 6.473.059.095.12.136.237.135.621-.006 1.243-.003 1.865-.003.05 0 .1-.007.184-.012L12.06 6.65 5.441 17.408zM4.026 18c-.064-.392-.01-.59.162-.591.387-.004.002-.007.389.003.14.003.218-.044.292-.164 2.253-3.67 4.51-7.338 6.769-11.003.069-.113.06-.19-.007-.298-.496-.795-.986-1.594-1.476-2.393-.167-.272-.145-.374.109-.554h.14c.086.093.187.176.253.281.41.656.813 1.317 1.22 1.975.053.088.11.175.18.288.053-.08.088-.13.12-.183.427-.694.852-1.39 1.284-2.08.066-.106.168-.188.253-.281h.14c.255.182.275.282.108.553-.49.8-.98 1.599-1.475 2.395-.067.107-.076.183-.006.297 2.265 3.675 4.527 7.353 6.787 11.032.06.097.122.136.237.134.37-.008.01 0 .379-.004.116-.002.145.196.087.593H4.026z"
      })
    )
  );
};

CampsiteIcon.displayName = "CampsiteIcon";
CampsiteIcon.defaultProps = {
  color: "currentColor",
  children: null
};
CampsiteIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var DIRECTION = ["up", "down", "left", "right"];

var getChevronStyle = function getChevronStyle(_ref) {
  var direction = _ref.direction;

  switch (direction) {
    case "up":
      return {
        transform: "rotate(-180deg)"
      };

    case "left":
      return {
        transform: "rotate(90deg)"
      };

    case "right":
      return {
        transform: "rotate(-90deg)"
      };

    default:
      return {};
  }
};

var ChevronIcon = function ChevronIcon(_ref2) {
  var size = _ref2.size,
    color = _ref2.color,
    direction = _ref2.direction,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, [
      "size",
      "color",
      "direction",
      "children"
    ]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      style: getChevronStyle({
        direction: direction
      }),
      viewBox: "0 0 15 7",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M13.974.132a.614.614 0 0 0-.762 0L7.17 5.341 1.12.132C.916-.044.563-.037.376.125a.398.398 0 0 0-.167.332c0 .058.012.116.036.17a.385.385 0 0 0 .12.155l6.427 5.54a.568.568 0 0 0 .378.135.568.568 0 0 0 .377-.135l6.427-5.54a.422.422 0 0 0 .156-.325.42.42 0 0 0-.156-.325z"
    })
  );
};

ChevronIcon.displayName = "ChevronIcon";
ChevronIcon.defaultProps = {
  direction: "down",
  children: null,
  color: "currentColor"
};
ChevronIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.oneOf(DIRECTION)
};

var ClubIcon = function ClubIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "defs",
      null,
      React.createElement("path", {
        id: "a",
        d: "M0 0h15.931v15.937H0z"
      })
    ),
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement(
        "g",
        {
          transform: "translate(4 4)"
        },
        React.createElement(
          "mask",
          {
            id: "b",
            fill: "#fff"
          },
          React.createElement("use", {
            xlinkHref: "#a"
          })
        ),
        React.createElement("path", {
          fill: color,
          stroke: "#262626",
          strokeWidth: ".25",
          d:
            "M.514 12.722H3.46v-.401H.514v.4zm11.094-.005h2.93v-.405h-2.93v.405zm2.315-9.375a.848.848 0 0 0-.847-.836.85.85 0 0 0-.835.848c.002.453.38.832.83.835a.843.843 0 0 0 .852-.847zM1.982 2.506a.844.844 0 0 0-.843.839.843.843 0 0 0 .853.844.858.858 0 0 0 .84-.846.861.861 0 0 0-.85-.837zM12.807 4.69l-.408 7.09h1.367l-.41-7.09h-.549zm-11.096 0l-.41 7.095H2.67L2.26 4.69h-.55zM15 13.001c-.131.186-.311.258-.539.257-.917-.005-1.835-.001-2.753-.002-.41 0-.61-.2-.612-.606v-.297c.005-.33.21-.541.542-.557.08-.003.16 0 .255 0l.184-3.11c-1.186 1.473-2.677 2.257-4.534 2.258-1.855 0-3.347-.776-4.547-2.202l.176 3.053c.103 0 .183-.003.263 0 .313.016.52.217.537.529.007.139.008.279 0 .418-.02.303-.227.51-.532.511-.97.006-1.94.006-2.91 0-.312 0-.517-.215-.527-.529A7.542 7.542 0 0 1 0 12.376c.006-.368.206-.572.57-.58.235-.005.226.04.243-.237l.303-4.833c.045-.719.091-1.437.127-2.156.003-.063-.056-.143-.109-.191-.387-.356-.549-.792-.442-1.305.106-.512.427-.857.927-1.014a1.343 1.343 0 0 1 1.558.62 1.316 1.316 0 0 1-.264 1.652c-.123.112-.154.219-.142.375.074.932.138 1.864.208 2.796a.57.57 0 0 0 .057.215 5.108 5.108 0 0 0 4.96 2.708c1.835-.173 3.2-1.083 4.11-2.68a.506.506 0 0 0 .066-.21c.06-.957.113-1.913.173-2.87.009-.131-.02-.217-.127-.31a1.334 1.334 0 0 1-.084-1.941 1.345 1.345 0 0 1 1.934-.006c.536.544.507 1.42-.075 1.941-.109.097-.136.186-.128.327.07 1.119.13 2.238.193 3.357l.208 3.687c.001.017.007.033.016.075.277-.028.538.015.717.263V13z",
          mask: "url(#b)"
        })
      )
    )
  );
};

ClubIcon.displayName = "ClubIcon";
ClubIcon.defaultProps = {
  color: "currentColor",
  children: null
};
ClubIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var CrossIcon = function CrossIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 12 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M6.563 6.203l4.523 4.516a.384.384 0 0 1 .117.281c0 .11-.039.203-.117.281a.378.378 0 0 1-.137.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.136-.09L6 6.766 1.484 11.28a.378.378 0 0 1-.136.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.137-.09A.384.384 0 0 1 .797 11c0-.11.039-.203.117-.281l4.524-4.516L.913 1.68a.384.384 0 0 1-.117-.282c0-.109.039-.203.117-.28A.388.388 0 0 1 1.2 1c.112 0 .207.04.285.117L6 5.633l4.516-4.516A.388.388 0 0 1 10.8 1c.112 0 .207.04.285.117a.384.384 0 0 1 .117.281c0 .11-.039.204-.117.282L6.562 6.203z"
    })
  );
};

CrossIcon.displayName = "CrossIcon";
CrossIcon.defaultProps = {
  color: "currentColor",
  children: null
};
CrossIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var Concession = function Concession(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        fill: "#E0E0E0",
        fillRule: "nonzero",
        d:
          "M13 25.85c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0 1c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M7.797 20.053a.384.384 0 0 1-.281-.117.393.393 0 0 1-.118-.29v-.796c0-.276.053-.535.157-.777a2.02 2.02 0 0 1 1.066-1.067c.242-.104.501-.156.777-.156.334 0 .618-.117.852-.352a1.16 1.16 0 0 0 .352-.851 1.974 1.974 0 0 1 .586-1.41c.182-.18.394-.323.636-.43.242-.107.502-.16.778-.16.328 0 .609-.117.843-.352a1.15 1.15 0 0 0 .352-.843c0-.276.053-.536.16-.778.107-.242.25-.454.43-.636a1.974 1.974 0 0 1 1.41-.586c.333 0 .617-.118.851-.352A1.16 1.16 0 0 0 17 9.248v-.796c0-.11.04-.204.117-.282a.384.384 0 0 1 .281-.117c.11 0 .204.04.282.117a.384.384 0 0 1 .117.282v.796c0 .276-.052.536-.156.778a2.054 2.054 0 0 1-.426.637 1.974 1.974 0 0 1-1.418.586c-.328 0-.61.117-.844.351a1.16 1.16 0 0 0-.351.852c0 .276-.053.535-.157.777a2.02 2.02 0 0 1-1.066 1.066 1.946 1.946 0 0 1-.777.157 1.16 1.16 0 0 0-.852.351 1.15 1.15 0 0 0-.352.844 1.974 1.974 0 0 1-.585 1.418c-.183.18-.395.321-.637.426a1.946 1.946 0 0 1-.778.156c-.328 0-.609.117-.843.351a1.16 1.16 0 0 0-.352.852v.797c0 .114-.039.21-.117.289a.393.393 0 0 1-.29.117zM20.203 9.248c0 .334-.056.654-.168.961a2.701 2.701 0 0 1-.488.836c.14.188.285.461.433.82.149.36.223.82.223 1.383 0 .188-.02.383-.058.586-.04.204-.097.416-.172.637-.076.221-.17.45-.285.688-.115.237-.248.48-.399.73a11.935 11.935 0 0 1-.953 1.356 16.83 16.83 0 0 1-1.867 1.968c-.224.2-.45.39-.676.57-.227.18-.453.35-.68.512a8.707 8.707 0 0 1-.675.438 7.134 7.134 0 0 1-1.418.687 4.09 4.09 0 0 1-.637.172 3.317 3.317 0 0 1-.586.055c-.563 0-1.024-.073-1.383-.219-.36-.146-.63-.289-.812-.43a2.89 2.89 0 0 1-.844.48 2.785 2.785 0 0 1-.961.169 2.772 2.772 0 0 1-1.977-.82 2.684 2.684 0 0 1-.61-.903c-.14-.34-.21-.699-.21-1.074 0-.333.056-.654.168-.96.112-.308.275-.587.488-.837-.14-.182-.285-.453-.433-.812C5.074 15.88 5 15.418 5 14.85c0-.188.02-.383.059-.586.039-.203.096-.415.171-.637.076-.221.171-.449.286-.683.114-.235.247-.48.398-.735.135-.218.283-.442.441-.671.16-.23.33-.458.512-.684A16.83 16.83 0 0 1 8.73 8.889a14.741 14.741 0 0 1 1.36-1.082c.226-.159.452-.306.676-.441.25-.151.493-.284.73-.399.237-.114.465-.21.684-.285.218-.075.43-.133.633-.172.203-.039.398-.058.585-.058.568 0 1.032.072 1.391.218.36.146.63.29.813.43a2.786 2.786 0 0 1 1.796-.648 2.791 2.791 0 0 1 1.985.82c.26.266.462.568.605.906.144.339.215.695.215 1.07zm-11.57.836c-.432.427-.823.861-1.172 1.301-.349.44-.646.869-.89 1.285A7.251 7.251 0 0 0 6 13.854c-.135.372-.203.704-.203.996 0 .417.047.757.14 1.02.094.263.188.464.282.605l8.804-8.805a2.846 2.846 0 0 0-.605-.28c-.263-.095-.603-.142-1.02-.142-.291 0-.623.068-.996.204a7.122 7.122 0 0 0-1.18.57 11.48 11.48 0 0 0-1.28.89c-.44.35-.877.74-1.31 1.172zM7.797 20.85a1.97 1.97 0 0 0 1.414-.586l9.601-9.601a1.983 1.983 0 0 0 .586-1.415 1.983 1.983 0 0 0-.586-1.414 1.983 1.983 0 0 0-1.414-.586c-.265 0-.52.051-.765.153-.245.101-.461.246-.649.433l-9.601 9.602a1.983 1.983 0 0 0-.586 1.414 1.983 1.983 0 0 0 1.238 1.848c.242.101.496.152.762.152zm8.773-2.836c.427-.427.815-.86 1.164-1.3.35-.44.648-.87.895-1.286.247-.417.437-.81.57-1.18.133-.37.2-.703.2-1 0-.411-.046-.75-.137-1.015a2.537 2.537 0 0 0-.278-.602l-8.804 8.797c.14.094.342.188.605.281.263.094.6.141 1.012.141.297 0 .631-.066 1.004-.2a6.73 6.73 0 0 0 1.18-.57 11.9 11.9 0 0 0 1.28-.894c.44-.349.877-.74 1.31-1.172z"
      })
    )
  );
};

Concession.displayName = "ConcessionIcon";
Concession.defaultProps = {
  color: "currentColor",
  children: null
};
Concession.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var DonationIcon = function DonationIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        stroke: "#262626",
        strokeWidth: ".25",
        transform: "translate(5 3) scale(0.8 0.8)",
        d:
          "M18.5 5h-3.001c0.315-0.418 0.501-0.938 0.501-1.5 0-1.378-1.122-2.5-2.5-2.5-1.39 0-2.556 1.101-3.127 1.758-0.346 0.397-0.644 0.823-0.873 1.235-0.229-0.412-0.527-0.837-0.873-1.235-0.571-0.656-1.737-1.758-3.127-1.758-1.378 0-2.5 1.122-2.5 2.5 0 0.562 0.187 1.082 0.501 1.5h-3.001c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h0.5v9.5c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-9.5h0.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5zM11.127 3.414c0.782-0.899 1.647-1.414 2.373-1.414 0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5h-3.378c0.173-0.442 0.523-1.032 1.005-1.586zM11 19h-3v-13h3v13zM4 3.5c0-0.827 0.673-1.5 1.5-1.5 0.726 0 1.591 0.515 2.373 1.414 0.482 0.554 0.832 1.144 1.005 1.586h-3.378c-0.827 0-1.5-0.673-1.5-1.5zM1 6h6v2h-6v-2zM2 18.5v-9.5h5v10h-4.5c-0.276 0-0.5-0.224-0.5-0.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-4.5v-10h5v9.5zM18 8h-6v-2h6v2z"
      })
    )
  );
};

DonationIcon.displayName = "DonationIcon";
DonationIcon.defaultProps = {
  color: "currentColor",
  children: null
};
DonationIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var FacebookIcon = function FacebookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 7 14",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M6.418 4.38H4.232V2.978c0-.528.357-.65.608-.65h1.543V.007L4.258 0C1.9 0 1.364 1.73 1.364 2.836V4.38H0V6.77h1.364v6.76h2.868V6.77h1.936l.25-2.39z"
    })
  );
};

FacebookIcon.displayName = "FacebookIcon";
FacebookIcon.defaultProps = {
  color: "currentcolor",
  children: null
};
FacebookIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};

var GeneralIcon = function GeneralIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 27 26"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement(
        "g",
        {
          transform: "translate(4 4) scale(0.8 0.8)"
        },
        React.createElement("path", {
          fill: color,
          strokeWidth: ".25",
          d:
            "M7.5 19.085c-0.401 0-0.778-0.156-1.061-0.438l-5.086-5.086c-0.283-0.283-0.438-0.659-0.438-1.061s0.156-0.778 0.438-1.061l8.586-8.586c0.487-0.487 1.372-0.854 2.061-0.854h4.5c0.827 0 1.5 0.673 1.5 1.5v4.5c0 0.688-0.367 1.574-0.853 2.061l-8.586 8.586c-0.283 0.283-0.659 0.438-1.061 0.438zM12 3c-0.415 0-1.060 0.267-1.353 0.561l-8.586 8.586c-0.094 0.094-0.145 0.219-0.145 0.354s0.052 0.26 0.145 0.353l5.086 5.086c0.094 0.094 0.219 0.145 0.354 0.145s0.26-0.052 0.354-0.145l8.586-8.586c0.293-0.293 0.561-0.939 0.561-1.354v-4.5c0-0.276-0.224-0.5-0.5-0.5h-4.5z"
        }),
        React.createElement("path", {
          fill: color,
          strokeWidth: ".25",
          d:
            "M14.5 7c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
        })
      )
    )
  );
};

GeneralIcon.displayName = "GeneralIcon";
GeneralIcon.defaultProps = {
  color: "currentColor",
  children: null
};
GeneralIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var InstagramIcon = function InstagramIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 14 14",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement(
      "g",
      {
        fill: color,
        fillRule: "nonzero"
      },
      React.createElement("path", {
        d:
          "M7.056 3.486c-1.96 0-3.584 1.565-3.584 3.514 0 1.949 1.596 3.514 3.584 3.514S10.64 8.922 10.64 7c0-1.922-1.624-3.514-3.584-3.514zm0 5.765C5.796 9.251 4.76 8.235 4.76 7c0-1.235 1.036-2.251 2.296-2.251 1.26 0 2.296 1.016 2.296 2.251 0 1.235-1.036 2.251-2.296 2.251z"
      }),
      React.createElement("ellipse", {
        cx: "10.78",
        cy: "3.404",
        rx: "1",
        ry: "1"
      }),
      React.createElement("path", {
        d:
          "M12.88 1.345C12.152.604 11.116.22 9.94.22H4.172C1.736.22.112 1.812.112 4.2v5.627c0 1.18.392 2.197 1.176 2.938.756.713 1.764 1.07 2.912 1.07h5.712c1.204 0 2.212-.384 2.94-1.07.756-.714 1.148-1.73 1.148-2.91V4.2c0-1.153-.392-2.141-1.12-2.855zm-.168 8.51c0 .85-.252 1.537-.756 2.004-.504.466-1.204.714-2.044.714H4.2c-.84 0-1.54-.248-2.044-.714-.504-.494-.756-1.18-.756-2.032V4.2c0-.824.252-1.51.756-2.004.476-.467 1.204-.714 2.044-.714h5.768c.84 0 1.54.247 2.044.742.476.494.756 1.18.756 1.976v5.655h-.056z"
      })
    )
  );
};

InstagramIcon.displayName = "InstagramIcon";
InstagramIcon.defaultProps = {
  color: "currentcolor",
  children: null
};
InstagramIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};

var Hotel = function Hotel(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M18 18.203h-.797a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29c0-.109.039-.202.117-.28a.393.393 0 0 1 .29-.118H18c.11 0 .203.04.281.118a.384.384 0 0 1 .117.28c0 .115-.039.212-.117.29a.384.384 0 0 1-.281.117zm-12 0h-.797a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29c0-.109.039-.202.117-.28a.393.393 0 0 1 .29-.118H6c.11 0 .203.04.281.118a.384.384 0 0 1 .117.28c0 .115-.039.212-.117.29a.384.384 0 0 1-.281.117zm12.93-5.289c.073.23.136.507.191.832.055.326.082.61.082.856v1.601c0 .328-.117.61-.351.844a1.16 1.16 0 0 1-.852.351H5.203a1.16 1.16 0 0 1-.851-.351A1.15 1.15 0 0 1 4 16.203v-1.601c0-.245.026-.53.078-.856.052-.325.117-.603.195-.832l1.891-5.68c.083-.24.228-.449.434-.629.205-.18.433-.3.683-.363a.667.667 0 0 1 .024-.113l.03-.106c.095-.27.208-.442.34-.515A.726.726 0 0 1 8 5.398h3.203c.047 0 .107.01.18.032a.52.52 0 0 1 .219.14.525.525 0 0 1 .214-.14.66.66 0 0 1 .184-.032h3.203c.083 0 .192.037.324.11.133.073.244.245.332.515a.626.626 0 0 1 .036.106c.007.034.016.072.027.113.25.063.478.184.683.363.206.18.348.39.426.63l1.899 5.68zm-6.805-6.71a1.812 1.812 0 0 0-.082.3A2.476 2.476 0 0 0 12 7c0 .193.014.358.043.496.029.138.056.238.082.3h2.953c.026-.062.054-.162.082-.3.029-.138.043-.303.043-.496s-.014-.358-.043-.496a1.812 1.812 0 0 0-.082-.3h-2.953zm-4 0a1.812 1.812 0 0 0-.082.3A2.476 2.476 0 0 0 8 7c0 .193.014.358.043.496.029.138.056.238.082.3h2.953c.026-.062.054-.162.082-.3.029-.138.043-.303.043-.496s-.014-.358-.043-.496a1.812 1.812 0 0 0-.082-.3H8.125zM6.289 9.397h10.625l-.64-1.914a.576.576 0 0 0-.106-.183.979.979 0 0 0-.168-.16c-.005.156-.02.306-.043.449a2.148 2.148 0 0 1-.098.387c-.088.27-.199.442-.332.515a.726.726 0 0 1-.324.11H12a.66.66 0 0 1-.184-.032.525.525 0 0 1-.214-.14.52.52 0 0 1-.22.14.683.683 0 0 1-.179.032H8a.726.726 0 0 1-.324-.11c-.133-.073-.246-.245-.34-.515a2.739 2.739 0 0 1-.09-.387 3.504 3.504 0 0 1-.043-.45.979.979 0 0 0-.168.16.576.576 0 0 0-.105.184l-.64 1.914zm-1.258 3.766c-.01.042-.022.083-.035.125a1.634 1.634 0 0 0-.035.133l.117-.016c.042-.005.083-.008.125-.008H18c.042 0 .082.003.121.008l.121.016a1.634 1.634 0 0 0-.078-.258l-.984-2.96H6.023l-.992 2.96zm13.367 1.438c0-.11-.039-.204-.117-.282a.384.384 0 0 0-.281-.117H5.203c-.114 0-.21.04-.289.117a.384.384 0 0 0-.117.282v1.601c0 .11.039.203.117.281a.393.393 0 0 0 .29.118H18c.11 0 .203-.04.281-.118a.384.384 0 0 0 .117-.28v-1.602z"
      })
    )
  );
};

Hotel.displayName = "HotelIcon";
Hotel.defaultProps = {
  color: "currentColor",
  children: null
};
Hotel.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var Meal = function Meal(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M10.398 4.203c0 .474.038.915.114 1.324.075.41.152.78.23 1.114.104.448.175.847.211 1.199.037.351-.05.66-.258.926-.156.198-.384.346-.683.445-.3.099-.694.159-1.184.18.021.557.056 1.095.106 1.613a43.664 43.664 0 0 0 .367 2.871c.07.438.14.857.207 1.258.088.526.165 1.009.23 1.449.065.44.106.836.121 1.188a3.75 3.75 0 0 1-.058.921 1.509 1.509 0 0 1-.309.668c-.12.146-.272.256-.457.328-.185.073-.397.11-.637.11s-.45-.037-.632-.11a1.17 1.17 0 0 1-.461-.328A1.476 1.476 0 0 1 7 18.691a4.024 4.024 0 0 1-.059-.921c.013-.352.054-.747.122-1.184.067-.438.145-.922.234-1.453.068-.396.137-.814.207-1.254a43.664 43.664 0 0 0 .367-2.875c.05-.518.085-1.056.106-1.613-.495-.021-.891-.082-1.188-.184-.297-.102-.523-.249-.68-.441a1.244 1.244 0 0 1-.257-.93c.036-.354.104-.755.203-1.203.078-.328.155-.697.23-1.106.076-.409.113-.85.113-1.324 0-.114.04-.21.118-.289a.384.384 0 0 1 .28-.117c.115 0 .212.039.29.117a.393.393 0 0 1 .117.29c0 .26-.012.508-.035.745-.023.237-.053.465-.09.684a15.04 15.04 0 0 1-.242 1.18 13.02 13.02 0 0 0-.176.898c-.039.255-.014.44.074.555.073.093.215.168.426.222.211.055.491.09.84.106V5c0-.11.04-.203.117-.281a.384.384 0 0 1 .281-.117c.11 0 .204.039.282.117A.384.384 0 0 1 8.797 5v3.203c0 .063.001.126.004.192.002.065.004.131.004.199.343-.016.62-.051.832-.106.21-.054.355-.129.433-.222.089-.11.114-.293.075-.551-.04-.258-.1-.556-.184-.895a28.843 28.843 0 0 0-.121-.558 9.13 9.13 0 0 1-.117-.621 12.382 12.382 0 0 1-.086-.688 7.707 7.707 0 0 1-.035-.75c0-.114.039-.21.117-.289A.384.384 0 0 1 10 3.797c.11 0 .203.039.281.117a.393.393 0 0 1 .117.29zM8.883 18.836c.094-.104.15-.27.172-.496.02-.227.018-.498-.008-.813-.026-.315-.07-.665-.133-1.05l-.195-1.211c-.052-.308-.106-.625-.16-.954-.055-.328-.108-.669-.16-1.023a90.873 90.873 0 0 1-.313 1.977c-.073.422-.14.825-.2 1.21-.06.386-.102.736-.128 1.051a4.758 4.758 0 0 0-.008.813c.02.226.076.392.164.496a.52.52 0 0 0 .149.11c.067.036.18.054.335.054.157 0 .27-.018.34-.055a.406.406 0 0 0 .145-.11zm7.82-3.703c.089.526.167 1.009.235 1.449.067.44.108.836.12 1.188.014.351-.006.658-.058.921a1.476 1.476 0 0 1-.305.668 1.17 1.17 0 0 1-.46.328c-.183.073-.394.11-.633.11-.24 0-.452-.037-.637-.11a1.104 1.104 0 0 1-.457-.328 1.509 1.509 0 0 1-.309-.668 3.75 3.75 0 0 1-.058-.921c.015-.352.056-.747.12-1.184a85.058 85.058 0 0 1 .36-2.215c.044-.263.087-.534.129-.812.042-.28.083-.564.125-.856.042-.292.078-.594.11-.906h-1.782a.414.414 0 0 1-.172-.035.416.416 0 0 1-.14-.106.441.441 0 0 1-.079-.156.384.384 0 0 1-.007-.172l.172-.824c.104-.503.257-1.119.46-1.848.204-.729.456-1.51.758-2.344.302-.833.654-1.604 1.055-2.312a.416.416 0 0 1 .453-.188c.089.027.16.075.215.145a.39.39 0 0 1 .082.246v4c0 .682.022 1.34.066 1.973a39.08 39.08 0 0 0 .395 3.469c.083.523.164 1.02.242 1.488zM13.688 11h1.382a25.688 25.688 0 0 0 .094-1.36c.01-.234.02-.47.027-.71.008-.24.012-.482.012-.727V5.945a19.69 19.69 0 0 0-.55 1.477c-.165.5-.31.976-.438 1.43-.128.453-.235.865-.32 1.238-.086.372-.155.676-.207.91zm2.398 7.836c.088-.104.143-.27.164-.496.02-.227.018-.498-.008-.813a14.883 14.883 0 0 0-.129-1.05c-.06-.386-.126-.79-.199-1.211a92.24 92.24 0 0 1-.312-1.977c-.053.354-.106.695-.16 1.024l-.16.953-.196 1.21c-.063.386-.106.736-.129 1.051a5.364 5.364 0 0 0-.008.813c.018.226.074.392.168.496a.406.406 0 0 0 .145.11c.07.036.183.054.34.054.156 0 .268-.018.335-.055a.52.52 0 0 0 .149-.11z"
      })
    )
  );
};

Meal.displayName = "MealIcon";
Meal.defaultProps = {
  color: "currentColor",
  children: null
};
Meal.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var Membership = function Membership(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M15.836 7.625L15.39 9l.445 1.375-1.172.852-.266.82v7.351a.417.417 0 0 1-.054.207.336.336 0 0 1-.156.145.458.458 0 0 1-.188.047.44.44 0 0 1-.219-.063l-2.18-1.453-2.18 1.453a.385.385 0 0 1-.202.067.408.408 0 0 1-.211-.051.369.369 0 0 1-.153-.145.396.396 0 0 1-.058-.207v-7.351l-.266-.82-1.164-.852L7.813 9l-.446-1.375 1.164-.852.453-1.375h1.446l1.172-.851 1.171.851h1.446l.445 1.375 1.172.852zm-4.016 9.844l1.782 1.187v-6.054h-.829l-1.171.851-1.172-.851h-.828v6.054l1.773-1.187a.383.383 0 0 1 .445 0zm3.078-7.399L14.547 9l.351-1.07-.914-.664-.343-1.07h-1.133l-.906-.665-.915.664H9.563l-.344 1.07-.914.665L8.648 9l-.343 1.07.914.664.344 1.07h1.124l.915.665.906-.664h1.094v-.008h.039l.343-1.063.914-.664z"
      })
    )
  );
};

Membership.displayName = "MembershipIcon";
Membership.defaultProps = {
  color: "currentColor",
  children: null
};
Membership.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var Merchandise = function Merchandise(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M10.797 17.398a.396.396 0 0 1-.235-.078.385.385 0 0 1-.148-.21.37.37 0 0 1 .035-.301.396.396 0 0 1 .239-.192l5.601-1.601a.386.386 0 0 1 .309.035.367.367 0 0 1 .183.238c.032.11.021.212-.031.309a.357.357 0 0 1-.242.183l-5.602 1.602a.415.415 0 0 1-.11.016zm7.601-.43a.369.369 0 0 1-.07.262.368.368 0 0 1-.226.153l-8.797 2.406a.36.36 0 0 0-.051.004.57.57 0 0 1-.145-.004.243.243 0 0 1-.086-.031L5.82 18.156a.384.384 0 0 1-.168-.16.412.412 0 0 1-.05-.23l.796-10.399.004-.02a.403.403 0 0 1 .11-.223.42.42 0 0 1 .199-.116l2.336-.516a8.77 8.77 0 0 1 .203-.941c.078-.279.167-.522.266-.73.198-.423.415-.699.652-.829.237-.13.447-.195.629-.195.12 0 .262.038.426.113.164.076.324.233.48.473a.362.362 0 0 1 .059.297.409.409 0 0 1-.168.258.416.416 0 0 1-.305.054.36.36 0 0 1-.25-.172.648.648 0 0 0-.14-.172c-.042-.03-.076-.046-.102-.046-.177 0-.344.148-.5.445-.156.297-.292.716-.406 1.258l.82-.188c.11-.02.21-.001.305.059.093.06.15.142.171.246a.38.38 0 0 1-.05.305.369.369 0 0 1-.246.171l-3.086.688 1.476.992 1.969-.398a1.558 1.558 0 0 0 .016-.227c.041-.484.093-.927.156-1.328.062-.401.138-.758.226-1.07.089-.313.19-.582.305-.809.115-.226.242-.413.383-.559.12-.125.254-.22.402-.289.149-.067.304-.101.465-.101.198 0 .382.064.55.191.17.128.324.32.462.578.138.258.263.584.375.977.112.393.212.858.3 1.394a8.357 8.357 0 0 1 .079.5l1.008-.203-.555-.273a.394.394 0 0 1-.2-.234.4.4 0 0 1 .02-.305.366.366 0 0 1 .23-.2.408.408 0 0 1 .31.02l1.593.797c.068.031.12.077.156.137.037.06.06.123.07.191l.797 9.602zM12.906 4.75a1.46 1.46 0 0 0-.203.29c-.078.134-.157.328-.238.581-.08.253-.156.573-.227.961-.07.388-.129.866-.175 1.434l2.124-.422a9.388 9.388 0 0 1-.042-.266 9.388 9.388 0 0 0-.043-.266 12.24 12.24 0 0 0-.211-1.05 5.75 5.75 0 0 0-.25-.785c-.1-.25-.19-.417-.27-.5-.08-.084-.137-.125-.168-.125a.438.438 0 0 0-.129.023.427.427 0 0 0-.168.125zM7.148 8.11l-.726 9.453 2.375 1.187V9.21l-1.649-1.1zm2.454 10.765l7.968-2.172-.734-8.82-1.766.351c.047.427.08.787.098 1.079.018.291.03.447.035.468a.388.388 0 0 1-.105.29.386.386 0 0 1-.278.132.388.388 0 0 1-.289-.105.386.386 0 0 1-.133-.278l-.023-.414c-.016-.27-.047-.61-.094-1.015l-2.265.453a25.217 25.217 0 0 0-.024 1.742.4.4 0 0 1-.39.414h-.008a.39.39 0 0 1-.281-.113.37.37 0 0 1-.118-.278l-.008-.476c-.005-.302 0-.677.016-1.125l-1.601.32v9.547z"
      })
    )
  );
};

Merchandise.displayName = "MerchandiseIcon";
Merchandise.defaultProps = {
  color: "currentColor",
  children: null
};
Merchandise.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var getWidth = function getWidth(size) {
  return size / 4;
};

var OverflowIcon = function OverflowIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 5 21",
      width: getWidth(size),
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M0 2.5C0 1.81.242 1.22.727.732A2.394 2.394 0 0 1 2.492 0a2.42 2.42 0 0 1 1.773.732C4.755 1.221 5 1.81 5 2.5s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 5C1.8 5 1.212 4.756.727 4.268A2.418 2.418 0 0 1 0 2.5zm0 8.008c0-.692.242-1.283.727-1.773A2.39 2.39 0 0 1 2.492 8c.692 0 1.283.245 1.773.735S5 9.815 5 10.508a2.39 2.39 0 0 1-.735 1.765A2.43 2.43 0 0 1 2.492 13c-.692 0-1.28-.242-1.765-.727A2.403 2.403 0 0 1 0 10.508zM0 18.5c0-.69.242-1.28.727-1.768A2.394 2.394 0 0 1 2.492 16a2.42 2.42 0 0 1 1.773.732c.49.489.735 1.078.735 1.768s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 21c-.692 0-1.28-.244-1.765-.732A2.418 2.418 0 0 1 0 18.5z"
    })
  );
};

OverflowIcon.displayName = "OverflowIcon";
OverflowIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};
OverflowIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

var ParkingIcon = function ParkingIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 26"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M8.948 16.302c-.369 0-.685-.132-.949-.396a1.305 1.305 0 0 1-.395-.958c0-.369.131-.685.395-.949.264-.264.58-.395.95-.395.374 0 .694.131.957.395.264.264.396.58.396.95 0 .374-.132.694-.396.957a1.305 1.305 0 0 1-.958.396zm0-1.802a.432.432 0 0 0-.316.132.432.432 0 0 0-.132.316c0 .123.044.229.132.317a.432.432 0 0 0 .316.131.432.432 0 0 0 .317-.131.432.432 0 0 0 .131-.317.432.432 0 0 0-.131-.316.432.432 0 0 0-.317-.132zm8.104 1.802c-.375 0-.695-.132-.958-.396a1.305 1.305 0 0 1-.396-.958c0-.369.132-.685.396-.949.263-.264.583-.395.958-.395.369 0 .685.131.949.395.264.264.395.58.395.95 0 .374-.131.694-.395.957-.264.264-.58.396-.95.396zm0-1.802a.432.432 0 0 0-.317.132.432.432 0 0 0-.131.316c0 .123.043.229.131.317a.432.432 0 0 0 .317.131.432.432 0 0 0 .316-.131.432.432 0 0 0 .132-.317.432.432 0 0 0-.132-.316.432.432 0 0 0-.316-.132zm2.575-1.573c.187.199.33.43.426.694.097.264.145.557.145.879v2.25c0 .293-.085.555-.255.787a1.36 1.36 0 0 1-.641.487V19a.863.863 0 0 1-.264.633.873.873 0 0 1-.642.263H17.5a.863.863 0 0 1-.633-.263.863.863 0 0 1-.263-.633v-.896H9.396V19a.863.863 0 0 1-.263.633.863.863 0 0 1-.633.263h-.896a.873.873 0 0 1-.642-.263.863.863 0 0 1-.264-.633v-.976a1.36 1.36 0 0 1-.641-.487 1.296 1.296 0 0 1-.255-.787V14.5c0-.205.02-.401.061-.589.041-.187.1-.36.176-.518a.468.468 0 0 1 .264-.22.414.414 0 0 1 .343.026.443.443 0 0 1 .224.264.45.45 0 0 1-.022.343 1.07 1.07 0 0 0-.115.312 1.909 1.909 0 0 0-.035.382v2.25c0 .123.044.229.132.316a.432.432 0 0 0 .316.132h11.708a.432.432 0 0 0 .316-.132.432.432 0 0 0 .132-.316V14.5c0-.404-.109-.722-.325-.954-.217-.231-.572-.414-1.064-.549a7.976 7.976 0 0 0-.874-.158c-.32-.041-.665-.072-1.038-.092-.372-.02-.772-.034-1.2-.04a99.014 99.014 0 0 0-1.353-.009.432.432 0 0 1-.316-.132.432.432 0 0 1-.132-.316c0-.123.044-.229.132-.316a.432.432 0 0 1 .316-.132c.492 0 .96.003 1.402.009.442.005.86.019 1.253.04.392.02.758.052 1.098.096a7.35 7.35 0 0 1 1.072.215l-.153-.782a18.882 18.882 0 0 0-.18-.818c-.065-.263-.13-.506-.198-.729a3.892 3.892 0 0 0-.198-.536c-.076-.152-.3-.32-.672-.501-.372-.182-.936-.328-1.692-.44a.422.422 0 0 1-.295-.18.452.452 0 0 1-.083-.338.473.473 0 0 1 .184-.29c.1-.076.211-.103.334-.08.287.042.586.099.897.172.31.073.606.167.887.281.282.115.532.252.752.413.22.162.385.35.497.567.105.205.206.48.303.827.096.345.184.703.263 1.072.08.369.148.719.207 1.05.059.331.103.587.132.77.07.046.136.094.198.144a1.5 1.5 0 0 1 .171.163zM8.5 18.104h-.896V19H8.5v-.896zm9.896.896v-.896H17.5V19h.896zM8.052 10.896a.432.432 0 0 1-.317-.131.432.432 0 0 1-.131-.317v-4.5c0-.123.043-.228.131-.316a.432.432 0 0 1 .317-.132h1.344c.252 0 .487.047.704.14a1.824 1.824 0 0 1 .958.959c.093.216.14.45.14.703 0 .246-.047.479-.14.698-.094.22-.223.41-.387.572-.164.16-.355.29-.571.386a1.707 1.707 0 0 1-.704.146H8.5v1.344a.432.432 0 0 1-.132.317.432.432 0 0 1-.316.131zM8.5 8.198h.896a.873.873 0 0 0 .642-.263.863.863 0 0 0 .264-.633.873.873 0 0 0-.264-.642.873.873 0 0 0-.642-.264H8.5v1.802zm.448 4.5c-.68 0-1.32-.129-1.92-.386a4.978 4.978 0 0 1-1.573-1.06A5.026 5.026 0 0 1 4.39 9.675 4.801 4.801 0 0 1 4 7.75c0-.68.13-1.321.391-1.925a4.978 4.978 0 0 1 2.637-2.637c.6-.257 1.24-.386 1.92-.386.686 0 1.329.129 1.93.386.6.258 1.124.611 1.573 1.06.448.448.801.974 1.059 1.577.258.604.386 1.245.386 1.925 0 .68-.128 1.321-.386 1.925a4.965 4.965 0 0 1-1.06 1.577 4.978 4.978 0 0 1-1.573 1.06c-.6.257-1.243.386-1.929.386zm0-9c-.556 0-1.08.107-1.573.321a4.128 4.128 0 0 0-1.288.87 4.128 4.128 0 0 0-.87 1.288 3.905 3.905 0 0 0-.32 1.573c0 .557.106 1.081.32 1.573.214.492.504.922.87 1.288.367.366.796.656 1.288.87.492.214 1.017.32 1.573.32.557 0 1.081-.106 1.573-.32a4.128 4.128 0 0 0 1.288-.87c.366-.366.656-.796.87-1.288.214-.492.321-1.016.321-1.573 0-.557-.107-1.081-.32-1.573a4.128 4.128 0 0 0-.87-1.288 4.128 4.128 0 0 0-1.289-.87 3.905 3.905 0 0 0-1.573-.32z"
      })
    )
  );
};

ParkingIcon.displayName = "ParkingIcon";
ParkingIcon.defaultProps = {
  color: "currentColor",
  children: null
};
ParkingIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var SpecialIcon = function SpecialIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        stroke: "#262626",
        strokeWidth: ".2",
        d:
          "M16 3.15c.552 0 1.072.105 1.559.316a4.026 4.026 0 0 1 2.129 2.129c.208.485.312 1.003.312 1.555a3.92 3.92 0 0 1-.313 1.559 4.014 4.014 0 0 1-.855 1.273 4.014 4.014 0 0 1-1.273.856A3.92 3.92 0 0 1 16 11.15a4.035 4.035 0 0 1-1.504-.29 3.874 3.874 0 0 1-.66-.343 4.107 4.107 0 0 1-.578-.453l-5.89 5.89 1.312 1.313a.388.388 0 0 1 .117.285.4.4 0 0 1-.68.285l-1.32-1.32-.633.633 1.32 1.32a.384.384 0 0 1 .118.282c0 .109-.04.203-.118.28a.378.378 0 0 1-.136.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.137-.09L5.602 17.72l-.922.914a.313.313 0 0 1-.13.09.437.437 0 0 1-.304 0 .313.313 0 0 1-.129-.09.384.384 0 0 1-.117-.28c0-.11.04-.204.117-.282l8.61-8.617A3.963 3.963 0 0 1 12 7.15c0-.552.104-1.07.313-1.555a4.026 4.026 0 0 1 2.128-2.129A3.879 3.879 0 0 1 16 3.15zm2.266 6.266c.15-.151.283-.314.398-.489.115-.174.212-.358.293-.55a3.173 3.173 0 0 0-.293-2.997 3.26 3.26 0 0 0-.887-.89 3.022 3.022 0 0 0-.55-.293 3.365 3.365 0 0 0-.598-.18 3.16 3.16 0 0 0-1.258 0 3.365 3.365 0 0 0-.598.18 3.022 3.022 0 0 0-.55.293 3.26 3.26 0 0 0-.887.89 3.454 3.454 0 0 0-.293.547 3.078 3.078 0 0 0-.246 1.223 3.16 3.16 0 0 0 .246 1.227c.08.192.178.376.293.55.115.175.247.338.398.489.151.15.314.285.489.402.174.117.358.215.55.293.193.078.392.138.598.18a3.16 3.16 0 0 0 1.258 0c.206-.042.405-.102.598-.18.192-.078.376-.176.55-.293a3.26 3.26 0 0 0 .489-.402z"
      })
    )
  );
};

SpecialIcon.displayName = "SpecialIcon";
SpecialIcon.defaultProps = {
  color: "currentColor",
  children: null
};
SpecialIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};

var Transportation = function Transportation(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 27"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M20 12.21c0 .11-.038.203-.113.278a.406.406 0 0 1-.278.121 1.988 1.988 0 0 1 .39 1.188c.001.276-.051.535-.155.777a2.02 2.02 0 0 1-1.067 1.067 1.946 1.946 0 0 1-.777.156 1.968 1.968 0 0 1-1.203-.399 2.048 2.048 0 0 1-.438-.449 1.796 1.796 0 0 1-.273-.574 1.416 1.416 0 0 0-.063.281.404.404 0 0 1-.132.246.385.385 0 0 1-.266.098h-4.852a.389.389 0 0 1-.261-.098.397.397 0 0 1-.137-.246 2.247 2.247 0 0 0-.11-.453 2.463 2.463 0 0 1-.867 1.145A2.372 2.372 0 0 1 8 15.797a2.368 2.368 0 0 1-1.398-.45 2.463 2.463 0 0 1-.868-1.144 2.188 2.188 0 0 0-.109.453.397.397 0 0 1-.137.246.389.389 0 0 1-.261.098h-.829A.4.4 0 0 1 4 14.602c0-.391.022-.762.066-1.114.045-.351.11-.682.196-.992a5.33 5.33 0 0 1 .32-.867c.128-.268.277-.514.45-.738.098-.12.201-.235.308-.344.107-.11.217-.211.332-.305.052-.104.138-.264.258-.48a5.23 5.23 0 0 1 .484-.707 5.71 5.71 0 0 1 .582-.617 5.32 5.32 0 0 1 .645-.504c.224-.149.458-.278.703-.387.245-.11.497-.195.758-.258a8.926 8.926 0 0 1 1.37-.223c.498-.044.985-.063 1.462-.058.476.005.912.034 1.308.086.396.052.7.122.914.21.12.053.281.178.485.376.203.198.46.59.773 1.18.099.187.188.367.266.538.078.172.143.313.195.422 1.344.104 2.18.192 2.508.262.328.07.526.124.594.16.24.12.427.278.562.473.135.195.237.393.305.594.067.2.11.382.129.546.018.165.027.273.027.325v.03zM9.297 8.063a3.922 3.922 0 0 0-.738.266 4.109 4.109 0 0 0-1.13.797c-.15.151-.286.3-.406.445.214-.057.434-.1.66-.129a5.7 5.7 0 0 1 .715-.043h.016l.43.02 1.11.05a302.26 302.26 0 0 1 3.367.18 778.146 778.146 0 0 0 1.64.11 5.566 5.566 0 0 0-.121-.258l-.137-.273c-.27-.516-.478-.84-.621-.973a2.152 2.152 0 0 0-.238-.207c-.157-.068-.41-.123-.758-.164-.349-.042-.74-.065-1.176-.07a13.94 13.94 0 0 0-1.344.05c-.46.04-.884.106-1.27.2zM8 15a1.609 1.609 0 0 0 1.477-.977 1.558 1.558 0 0 0 .109-.82 2.458 2.458 0 0 0-.727-.441 2.322 2.322 0 0 0-.859-.16c-.302 0-.589.053-.86.16-.27.106-.512.254-.726.441a1.114 1.114 0 0 0-.016.195c0 .224.042.433.125.625a1.62 1.62 0 0 0 .856.852c.195.083.402.125.621.125zm7.305-.797c.078-.312.202-.605.37-.879a3.2 3.2 0 0 1 .622-.73c.057-.052.117-.103.18-.153a2.02 2.02 0 0 1 .195-.136l.004-.004c.002-.003.006-.004.012-.004a3.02 3.02 0 0 1 .699-.332c.247-.08.501-.132.761-.152h.016a1.486 1.486 0 0 1 .234-.016h.75a2.09 2.09 0 0 0-.168-.469.773.773 0 0 0-.355-.367 1.448 1.448 0 0 0-.254-.066 10.63 10.63 0 0 0-.781-.11c-.383-.044-.92-.095-1.61-.152a176.163 176.163 0 0 0-4.48-.285 347.95 347.95 0 0 0-3.11-.145c-.692 0-1.265.119-1.718.356a2.992 2.992 0 0 0-1.082.925 3.71 3.71 0 0 0-.574 1.286 7.972 7.972 0 0 0-.211 1.433h.093c.073-.276.18-.538.32-.785a3.16 3.16 0 0 1 .516-.676.122.122 0 0 1 .024-.031c.01-.01.023-.02.039-.031l.047-.047a.209.209 0 0 1 .054-.04 3.11 3.11 0 0 1 .977-.59 3.152 3.152 0 0 1 2.25 0c.365.139.69.336.977.59.026.016.049.035.07.055l.066.067c.003.002.007.004.012.004.203.208.378.437.523.687.146.25.256.516.329.797h4.203zM18 15c.328 0 .61-.117.848-.352.237-.234.355-.518.355-.851 0-.297-.098-.557-.293-.781a1.193 1.193 0 0 0-.73-.407c-.193.021-.377.062-.551.121-.175.06-.34.14-.496.239-.11.11-.193.235-.25.379a1.198 1.198 0 0 0-.086.449c0 .333.117.617.351.851.235.235.519.352.852.352z"
      })
    )
  );
};

Transportation.displayName = "TransportationIcon";
Transportation.defaultProps = {
  color: "currentColor",
  children: null
};
Transportation.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var TwitterIcon = function TwitterIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 14 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M14 1.353a5.704 5.704 0 0 1-1.65.454A2.89 2.89 0 0 0 13.613.211c-.555.33-1.17.57-1.824.7A2.862 2.862 0 0 0 9.693 0 2.879 2.879 0 0 0 6.82 2.885c0 .226.025.446.074.657A8.141 8.141 0 0 1 .975.528a2.881 2.881 0 0 0-.39 1.45c0 1.001.508 1.884 1.279 2.402a2.852 2.852 0 0 1-1.301-.361v.037c0 1.397.99 2.563 2.304 2.828a2.87 2.87 0 0 1-1.298.05 2.877 2.877 0 0 0 2.683 2.003A5.746 5.746 0 0 1 0 10.132a8.103 8.103 0 0 0 4.403 1.297c5.283 0 8.172-4.397 8.172-8.21 0-.124-.002-.249-.008-.373A5.846 5.846 0 0 0 14 1.353z"
    })
  );
};

TwitterIcon.displayName = "TwitterIcon";
TwitterIcon.defaultProps = {
  color: "currentcolor",
  children: null
};
TwitterIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};

var USIcon = function USIcon(_ref) {
  var width = _ref.width,
    height = _ref.height,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["width", "height", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      height: height,
      width: width,
      viewBox: "0 0 640 480"
    }),
    children,
    React.createElement(
      "g",
      {
        fillRule: "evenodd",
        transform: "scale(.9375)"
      },
      React.createElement(
        "g",
        {
          strokeWidth: "1pt"
        },
        React.createElement("path", {
          d:
            "M0 0h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z",
          fill: "#bd3d44"
        }),
        React.createElement("path", {
          d:
            "M0 39.385h972.81V78.77H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z",
          fill: "#fff"
        })
      ),
      React.createElement("path", {
        fill: "#192f5d",
        d: "M0 0h389.12v275.69H0z"
      }),
      React.createElement(
        "g",
        {
          fill: "#fff"
        },
        React.createElement("path", {
          d:
            "M32.427 11.8l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 39.37l3.54 10.896h11.458L70.583 57l3.542 10.897-9.27-6.734-9.269 6.734L59.126 57l-9.269-6.734h11.458zm64.852 0l3.54 10.896h11.457L135.435 57l3.54 10.897-9.268-6.734-9.27 6.734L123.978 57l-9.27-6.734h11.458zm64.855 0l3.54 10.896h11.458L200.29 57l3.541 10.897-9.27-6.734-9.268 6.734L188.833 57l-9.269-6.734h11.457zm64.855 0l3.54 10.896h11.458L265.145 57l3.541 10.897-9.269-6.734-9.27 6.734L253.69 57l-9.27-6.734h11.458zm64.852 0l3.54 10.896h11.457L329.997 57l3.54 10.897-9.268-6.734-9.27 6.734L318.54 57l-9.27-6.734h11.458zM32.427 66.939l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 94.508l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zM32.427 122.078l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 149.647l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458z"
        }),
        React.createElement(
          "g",
          null,
          React.createElement("path", {
            d:
              "M32.427 177.217l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 204.786l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458z"
          })
        ),
        React.createElement(
          "g",
          null,
          React.createElement("path", {
            d:
              "M32.427 232.356l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458z"
          })
        )
      )
    )
  );
};

USIcon.displayName = "USIcon";
USIcon.defaultProps = {
  children: null
};
USIcon.propTypes = {
  width: PropTypes$1.number.isRequired,
  height: PropTypes$1.number.isRequired,
  children: PropTypes$1.node
};

var VenueIcon = function VenueIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 26"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M15.602 9.398a1.16 1.16 0 0 1-.852-.351 1.15 1.15 0 0 1-.352-.844c0-.333.118-.617.352-.851A1.16 1.16 0 0 1 15.602 7c.328 0 .609.117.843.352.235.234.352.518.352.851 0 .328-.117.61-.352.844a1.15 1.15 0 0 1-.843.351zm0-1.601c-.11 0-.204.039-.282.117a.393.393 0 0 0-.117.29c0 .109.04.202.117.28a.384.384 0 0 0 .282.118c.109 0 .203-.04.28-.118a.384.384 0 0 0 .118-.28c0-.115-.04-.212-.117-.29a.384.384 0 0 0-.281-.117zm0 6.406a.417.417 0 0 1-.305-.14 22.005 22.005 0 0 1-.406-.516c-.256-.328-.534-.76-.836-1.297-.209-.365-.39-.723-.547-1.074a9.25 9.25 0 0 1-.39-1.035 7.811 7.811 0 0 1-.24-.993 5.657 5.657 0 0 1-.081-.945c0-.39.074-.755.223-1.094.148-.338.348-.634.601-.886.253-.253.55-.453.89-.602a2.702 2.702 0 0 1 1.09-.223c.386 0 .748.075 1.086.223.339.149.636.35.891.602s.456.548.602.886c.146.339.218.703.218 1.094 0 .307-.026.623-.078.945-.052.323-.13.654-.234.993a9.25 9.25 0 0 1-.39 1.035c-.157.351-.34.71-.548 1.074-.307.536-.588.969-.843 1.297-.256.328-.388.5-.399.515a.538.538 0 0 1-.14.102.362.362 0 0 1-.164.04zm0-8c-.276 0-.536.052-.778.156a2.054 2.054 0 0 0-.636.426 1.974 1.974 0 0 0-.586 1.418c0 .505.074 1.01.222 1.512.149.502.328.972.54 1.41.21.438.43.832.66 1.184.229.351.421.631.578.84.156-.209.347-.489.574-.84.226-.352.445-.748.656-1.188.211-.44.392-.91.543-1.41a5.19 5.19 0 0 0 .227-1.508 1.974 1.974 0 0 0-.586-1.418 2.054 2.054 0 0 0-.637-.426 1.946 1.946 0 0 0-.777-.156zm3.195-2.406c.333 0 .617.117.851.351.235.235.352.519.352.852v13.602c0 .328-.117.609-.352.843a1.16 1.16 0 0 1-.851.352H5.203a1.16 1.16 0 0 1-.851-.352A1.15 1.15 0 0 1 4 18.602V5c0-.333.117-.617.352-.852a1.16 1.16 0 0 1 .851-.351h13.594zM9.203 18.203c.11 0 .203.04.281.117a.384.384 0 0 1 .118.282V19h1.601V4.602H9.602V5c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.117.393.393 0 0 1-.29-.117A.384.384 0 0 1 8.797 5v-.398H7.203V19h1.594v-.398c0-.11.039-.204.117-.282a.393.393 0 0 1 .29-.117zm-2.805-1.601v-.805H4.797v.805h1.601zM12 15.797v.805h7.203v-.805H12zM19.203 5c0-.11-.039-.203-.117-.281a.393.393 0 0 0-.29-.117H12V15h7.203V5zm-14-.398c-.114 0-.21.039-.289.117A.384.384 0 0 0 4.797 5v10h1.601V4.602H5.203zm-.406 14c0 .109.039.203.117.28a.393.393 0 0 0 .29.118h1.194v-1.602H4.797v1.204zm14 .398c.114 0 .21-.04.289-.117a.384.384 0 0 0 .117-.281v-1.204H12V19h6.797zM9.203 7.797a.393.393 0 0 1-.289-.117.384.384 0 0 1-.117-.282v-.796c0-.11.039-.204.117-.282a.393.393 0 0 1 .29-.117c.109 0 .202.04.28.117a.384.384 0 0 1 .118.282v.796c0 .11-.04.204-.118.282a.384.384 0 0 1-.28.117zm0 2.406a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29V9c0-.11.039-.203.117-.281a.393.393 0 0 1 .29-.117c.109 0 .202.039.28.117A.384.384 0 0 1 9.602 9v.797c0 .114-.04.21-.118.289a.384.384 0 0 1-.28.117zm0 2.399a.393.393 0 0 1-.289-.118.384.384 0 0 1-.117-.28v-.806c0-.109.039-.203.117-.28a.393.393 0 0 1 .29-.118c.109 0 .202.04.28.117a.384.384 0 0 1 .118.281v.805c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.118zm0 2.398a.393.393 0 0 1-.289-.117.384.384 0 0 1-.117-.281v-.805c0-.11.039-.203.117-.281a.393.393 0 0 1 .29-.118c.109 0 .202.04.28.118a.384.384 0 0 1 .118.28v.806c0 .109-.04.203-.118.28a.384.384 0 0 1-.28.118zm.399 1.203V17c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.117.393.393 0 0 1-.29-.117.384.384 0 0 1-.117-.281v-.797c0-.114.039-.21.117-.289a.393.393 0 0 1 .29-.117c.109 0 .202.039.28.117a.393.393 0 0 1 .118.29z"
      })
    )
  );
};

VenueIcon.displayName = "VenueIcon";
VenueIcon.defaultProps = {
  color: "currentColor",
  children: null
};
VenueIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var VipIcon = function VipIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 26 26"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React.createElement("path", {
        fill: color,
        d:
          "M19.203 9.797c0 .302-.099.565-.297.789-.198.224-.44.357-.726.398-.073.302-.187.783-.34 1.442a54.47 54.47 0 0 0-.867 4.691 16.86 16.86 0 0 0-.176 2.281.398.398 0 0 1-.29.387.52.52 0 0 1-.198.004.337.337 0 0 1-.09-.031 3.182 3.182 0 0 0-.707-.227 11.24 11.24 0 0 0-1.067-.176c-.406-.049-.851-.087-1.336-.113-.484-.026-.987-.039-1.507-.039-.526 0-1.032.013-1.516.04-.484.025-.928.063-1.332.112-.404.05-.76.109-1.066.176a3.18 3.18 0 0 0-.711.227.396.396 0 0 1-.579-.36c0-.671-.057-1.432-.171-2.28a47.28 47.28 0 0 0-.403-2.49 54.47 54.47 0 0 0-.46-2.202c-.154-.66-.268-1.14-.34-1.442a1.158 1.158 0 0 1-.731-.398A1.162 1.162 0 0 1 4 9.796c0-.327.117-.608.352-.843a1.16 1.16 0 0 1 .851-.351c.328 0 .61.117.844.351.234.235.351.516.351.844 0 .224-.054.427-.164.61-.109.182-.252.325-.43.429a74.312 74.312 0 0 1 .86 3.922c.11.578.206 1.161.29 1.75.234-.084.51-.155.827-.215.318-.06.656-.11 1.016-.152-.01-.532-.044-1.17-.102-1.914A89.46 89.46 0 0 0 8.496 12a201.513 201.513 0 0 0-.379-3.438 1.155 1.155 0 0 1-.656-.417 1.165 1.165 0 0 1-.258-.747c0-.328.117-.609.352-.843a1.15 1.15 0 0 1 .843-.352c.334 0 .618.117.852.352.234.234.352.515.352.843 0 .24-.064.457-.192.653a1.17 1.17 0 0 1-.496.433c.037.308.09.773.16 1.395s.142 1.3.215 2.031c.073.732.14 1.47.2 2.215.06.745.094 1.393.105 1.945.27-.02.541-.036.812-.047.271-.01.537-.018.797-.023V6.133a1.205 1.205 0 0 1-.578-.434A1.152 1.152 0 0 1 10.398 5c0-.333.118-.617.352-.852a1.16 1.16 0 0 1 .852-.351c.328 0 .609.117.843.351.235.235.352.519.352.852 0 .26-.074.493-.223.7-.148.205-.34.35-.574.433V16c.26.005.526.013.797.023.27.01.539.026.805.047.015-.552.052-1.2.109-1.945.057-.745.122-1.483.195-2.215.073-.732.146-1.409.219-2.031l.164-1.395a1.17 1.17 0 0 1-.496-.433 1.167 1.167 0 0 1-.191-.653c0-.328.117-.609.351-.843a1.15 1.15 0 0 1 .844-.352c.333 0 .617.117.851.352.235.234.352.515.352.843 0 .282-.087.53-.262.747a1.171 1.171 0 0 1-.652.418c-.037.302-.091.765-.164 1.39a124.006 124.006 0 0 0-.418 4.273c-.06.745-.093 1.383-.098 1.915.354.041.69.092 1.008.152.318.06.596.131.836.215.083-.589.18-1.172.29-1.75.108-.578.217-1.121.323-1.63.107-.507.209-.96.305-1.358l.223-.934a1.213 1.213 0 0 1-.43-.43 1.162 1.162 0 0 1-.164-.61c0-.327.117-.608.351-.843A1.16 1.16 0 0 1 18 8.602c.333 0 .617.117.852.351.234.235.351.516.351.844zM14.797 7c-.11 0-.203.04-.281.117a.384.384 0 0 0-.118.281c0 .11.04.204.118.282a.384.384 0 0 0 .28.117c.115 0 .212-.04.29-.117a.384.384 0 0 0 .117-.282c0-.109-.039-.203-.117-.28a.393.393 0 0 0-.29-.118zM8.398 7c-.109 0-.203.04-.28.117A.384.384 0 0 0 8 7.398c0 .11.04.204.117.282a.384.384 0 0 0 .281.117c.11 0 .204-.04.282-.117a.384.384 0 0 0 .117-.282c0-.109-.04-.203-.117-.28A.384.384 0 0 0 8.398 7zm3.204-2.398c-.11 0-.204.039-.282.117a.384.384 0 0 0-.117.281c0 .11.04.203.117.281a.384.384 0 0 0 .282.117c.109 0 .203-.039.28-.117A.384.384 0 0 0 12 5c0-.11-.04-.203-.117-.281a.384.384 0 0 0-.281-.117zM4.797 9.797c0 .114.039.21.117.289a.393.393 0 0 0 .29.117c.109 0 .202-.039.28-.117a.393.393 0 0 0 .118-.29c0-.109-.04-.202-.118-.28a.384.384 0 0 0-.28-.118c-.115 0-.212.04-.29.118a.384.384 0 0 0-.117.28zm6.805 8.601c.37 0 .756.008 1.16.024.403.016.8.04 1.187.074.388.034.76.078 1.114.133.354.055.671.124.953.207a19.058 19.058 0 0 1 .125-1.516 4.056 4.056 0 0 0-.735-.215c-.307-.065-.659-.12-1.054-.164a26.146 26.146 0 0 0-2.75-.145c-.506 0-.993.014-1.461.04-.47.026-.901.061-1.297.105-.396.045-.748.1-1.055.164-.307.066-.55.137-.726.215l.074.778c.023.252.04.498.05.738.277-.083.592-.152.946-.207.354-.055.726-.1 1.117-.133.39-.034.786-.058 1.188-.074.4-.016.789-.024 1.164-.024zM18 10.203c.11 0 .203-.039.281-.117a.393.393 0 0 0 .117-.29c0-.109-.039-.202-.117-.28A.384.384 0 0 0 18 9.398c-.11 0-.203.04-.281.118a.384.384 0 0 0-.117.28c0 .115.039.212.117.29a.384.384 0 0 0 .281.117z"
      })
    )
  );
};

VipIcon.displayName = "VipIcon";
VipIcon.defaultProps = {
  color: "currentColor",
  children: null
};
VipIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

var YoutubeIcon = function YoutubeIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 17 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M6.761 8.464V3.44l4.444 2.512L6.76 8.464zm9.884-6.605A2.13 2.13 0 0 0 15.142.355C13.816 0 8.5 0 8.5 0S3.184 0 1.858.355A2.13 2.13 0 0 0 .355 1.86C0 3.185 0 5.952 0 5.952s0 2.767.355 4.093a2.13 2.13 0 0 0 1.503 1.504c1.326.355 6.642.355 6.642.355s5.316 0 6.642-.355a2.13 2.13 0 0 0 1.503-1.504C17 8.72 17 5.952 17 5.952s0-2.767-.355-4.093z"
    })
  );
};

YoutubeIcon.displayName = "YoutubeIcon";
YoutubeIcon.defaultProps = {
  color: "currentcolor",
  children: null
};
YoutubeIcon.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};

var LinkedinIcon = function LinkedinIcon(_ref) {
  var color = _ref.color,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["color", "size", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 19 18",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M14.78 5.917c-3.138 0-3.559 1.887-3.559 1.887l.004-1.874H6.99v11.648h4.236v-6.353s0-2.133 1.8-2.133c1.013 0 1.378.947 1.378 2.133v6.353h4.234v-6.353c0-3.315-1.441-5.308-3.857-5.308zM.637 17.577h4.219V5.918H.636v11.66zM2.747.638c-1.166 0-2.11.949-2.11 2.12 0 1.171.944 2.12 2.11 2.12 1.164 0 2.109-.949 2.109-2.12 0-1.171-.945-2.12-2.11-2.12z"
    })
  );
};

LinkedinIcon.displayName = "LinkedinIcon";
LinkedinIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};
LinkedinIcon.defaultProps = {
  color: colors.white.base,
  children: null
};

var HeartIcon = function HeartIcon(_ref) {
  var size = _ref.size,
    children = _ref.children,
    opacity = _ref.opacity,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, [
      "size",
      "children",
      "opacity",
      "color"
    ]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 51.997 51.997",
        stroke: color,
        fill: color,
        fillOpacity: opacity
      },
      props
    ),
    children,
    React.createElement("path", {
      d:
        "M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25 c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826 c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514 c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
    })
  );
};

HeartIcon.displayName = "HeartIcon";
HeartIcon.defaultProps = {
  children: null,
  color: "currentColor",
  opacity: 1
};
HeartIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  opacity: PropTypes.number
};

var AppleIcon = function AppleIcon(_ref) {
  var color = _ref.color,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["color", "size", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 13 16",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d:
        "M10.41 8.703c-.018-1.969 1.584-2.927 1.658-2.972-.908-1.346-2.315-1.53-2.809-1.544-1.18-.127-2.326.72-2.928.72-.614 0-1.54-.708-2.538-.687-1.285.02-2.488.778-3.147 1.953-1.36 2.396-.345 5.918.957 7.855.653.949 1.414 2.009 2.412 1.971.976-.04 1.34-.633 2.518-.633 1.167 0 1.509.633 2.526.61 1.047-.018 1.706-.954 2.336-1.912.753-1.087 1.056-2.158 1.068-2.213-.025-.008-2.034-.788-2.053-3.148M9.49 2.415c.587-.646.988-1.523.877-2.415-.85.033-1.911.517-2.523 1.148-.542.556-1.025 1.468-.9 2.325.954.063 1.934-.424 2.546-1.058"
    })
  );
};

AppleIcon.displayName = "AppleIcon";
AppleIcon.defaultProps = {
  color: colors.white.base,
  children: null
};
AppleIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

var GooglePlayIcon = function GooglePlayIcon(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 48 48",
      width: size,
      height: size
    }),
    React.createElement(
      "g",
      {
        id: "surface1"
      },
      React.createElement("path", {
        fill: "#4DB6AC",
        d:
          "M 7.703125 4.042969 C 7.292969 4.148438 7 4.507813 7 5.121094 C 7 6.921875 7 23.914063 7 23.914063 C 7 23.914063 7 42.28125 7 43.089844 C 7 43.535156 7.195313 43.835938 7.5 43.945313 L 27.679688 23.882813 Z "
      }),
      React.createElement("path", {
        fill: "#DCE775",
        d:
          "M 33.238281 18.359375 L 24.929688 13.5625 C 24.929688 13.5625 9.683594 4.761719 8.789063 4.242188 C 8.402344 4.019531 8.019531 3.960938 7.703125 4.042969 L 27.683594 23.882813 Z "
      }),
      React.createElement("path", {
        fill: "#D32F2F",
        d:
          "M 8.417969 43.800781 C 8.949219 43.492188 23.699219 34.976563 33.28125 29.445313 L 27.679688 23.882813 L 7.5 43.945313 C 7.746094 44.039063 8.066406 44.003906 8.417969 43.800781 Z "
      }),
      React.createElement("path", {
        fill: "#FBC02D",
        d:
          "M 41.398438 23.070313 C 40.601563 22.640625 33.296875 18.394531 33.296875 18.394531 L 33.238281 18.359375 L 27.679688 23.882813 L 33.28125 29.445313 C 37.714844 26.886719 41.042969 24.964844 41.339844 24.792969 C 42.285156 24.246094 42.195313 23.5 41.398438 23.070313 Z "
      })
    )
  );
};

GooglePlayIcon.displayName = "GooglePlayIcon";
GooglePlayIcon.defaultProps = {
  children: null
};
GooglePlayIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

var types = ["outline", "filled"];
var allSizes = ["small", "regular", "large"];
var smallLarge = ["small", "large"];

var errorIcons = {
  outline: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "19",
          viewBox: "0 0 18 19"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h18v19H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M16.822 9.697a.274.274 0 0 0 0-.373l-7.636-8.06a.24.24 0 0 0-.353 0l-7.635 8.06a.274.274 0 0 0 0 .373l7.663 8.06a.24.24 0 0 0 .353-.001l7.608-8.059zm-6.81 8.897a1.324 1.324 0 0 1-1.945.004l-7.663-8.06a1.51 1.51 0 0 1-.001-2.054L8.037.425a1.324 1.324 0 0 1 1.945 0l7.635 8.06a1.51 1.51 0 0 1 .002 2.05l-7.608 8.059zm-1.002-3.74c.466 0 .843-.399.843-.89 0-.492-.377-.891-.843-.891-.466 0-.844.399-.844.89 0 .492.378.891.844.891zm0-2.969a.844.844 0 0 0 .843-.843V5.604a.844.844 0 0 0-1.688 0l.001 5.438c0 .466.378.843.844.843z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "25",
          viewBox: "0 0 24 25"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M22.585 12.969a.333.333 0 0 0 0-.471l-10.35-10.35a.333.333 0 0 0-.471 0L1.415 12.497a.333.333 0 0 0 0 .471l10.387 10.35c.13.13.341.13.471-.001l10.312-10.348zm-9.603 11.054a1.333 1.333 0 0 1-1.886.003L.71 13.676a1.334 1.334 0 0 1-.002-1.886L11.057 1.44c.52-.52 1.365-.52 1.885 0l10.35 10.35c.52.52.52 1.362.001 1.883L12.982 24.023zM12 19.733a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "37",
          viewBox: "0 0 36 37"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M33.878 19.086a.5.5 0 0 0-.001-.706L18.353 2.856a.5.5 0 0 0-.707 0L2.123 18.379a.5.5 0 0 0 0 .707l15.58 15.524a.5.5 0 0 0 .707 0l15.468-15.524zm-14.76 16.229a1.5 1.5 0 0 1-2.12.004L1.417 19.795a1.5 1.5 0 0 1-.002-2.123L16.939 2.149a1.5 1.5 0 0 1 2.121 0l15.524 15.524a1.5 1.5 0 0 1 .002 2.12L19.118 35.314zM18 28.733a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-6a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 1 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
          })
        )
      );
    }
  },
  filled: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "17",
          viewBox: "0 0 16 17"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M8.34 16.082l7.01-7.035a.444.444 0 0 0 0-.628L8.314 1.383a.444.444 0 0 0-.629 0L.65 8.418a.444.444 0 0 0 0 .63l7.062 7.036a.444.444 0 0 0 .629-.002zM8 13.177a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333zm0-2.666a.667.667 0 0 0 .667-.667V5.399a.667.667 0 1 0-1.333 0v4.445c0 .368.298.667.666.667z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M12.51 22.798L22.8 12.471a.667.667 0 0 0 0-.942L12.47 1.201a.667.667 0 0 0-.942 0L1.2 11.528a.667.667 0 0 0 0 .943l10.366 10.33a.667.667 0 0 0 .943-.003zM12 18.536a.98.98 0 1 0 0-1.961.98.98 0 0 0 0 1.96zm0-3.922a.98.98 0 0 0 .98-.98V7.098a.98.98 0 0 0-1.96 0v6.536c0 .541.438.98.98.98z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "37",
          viewBox: "0 0 36 37"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 .733h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M18.767 35.27L34.54 19.44a1 1 0 0 0-.002-1.413L18.706 2.195a1 1 0 0 0-1.414 0l-15.83 15.83a1 1 0 0 0 .002 1.415l15.888 15.832a1 1 0 0 0 1.415-.003zM18 28.732a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-6a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 1 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
          })
        )
      );
    }
  }
};

var ErrorIcon = function ErrorIcon(_ref) {
  var type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["type", "size", "children"]);

  return errorIcons[type][size](themes.global.error.base, children, props);
};

ErrorIcon.displayName = "ErrorIcon";
ErrorIcon.defaultProps = {
  size: allSizes[0],
  type: types[0],
  children: null
};
ErrorIcon.propTypes = {
  size: PropTypes$1.oneOf(allSizes),
  type: PropTypes$1.oneOf(types),
  children: PropTypes$1.node
};

var alertIcons = {
  outline: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M1.968 12.524a.384.384 0 0 0-.055.198.4.4 0 0 0 .405.393h11.364a.415.415 0 0 0 .204-.053.387.387 0 0 0 .146-.538L8.35 3.08a.413.413 0 0 0-.7 0l-5.682 9.444zm-.788-.446L6.86 2.634a1.341 1.341 0 0 1 1.803-.46c.196.111.36.27.474.46l5.682 9.444c.367.61.155 1.392-.474 1.748a1.35 1.35 0 0 1-.664.174H2.318C1.59 14 1 13.428 1 12.722c0-.226.062-.449.18-.644zM8 11.831a.685.685 0 1 0 0-1.37.685.685 0 0 0 0 1.37zm0-2.255a.684.684 0 0 0 .684-.684v-2.17a.684.684 0 1 0-1.369 0v2.17c0 .378.307.684.685.684z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M2.041 19.13a.612.612 0 0 0-.085.313.63.63 0 0 0 .637.623h18.814a.648.648 0 0 0 .32-.084.615.615 0 0 0 .231-.851L12.551 3.245a.645.645 0 0 0-1.103 0L2.042 19.131zm-.827-.467l9.407-15.886a1.613 1.613 0 0 1 2.757 0l9.407 15.886c.441.744.181 1.697-.58 2.127a1.62 1.62 0 0 1-.798.21H2.593C1.713 21 1 20.303 1 19.443c0-.274.074-.543.214-.78zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1V8.5a1 1 0 0 0-2 0V13a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M2.111 30.88a.957.957 0 0 0-.127.478c0 .535.44.969.983.969h30.066c.17 0 .337-.044.484-.126a.96.96 0 0 0 .371-1.32L18.856 4.754a.992.992 0 0 0-1.711 0L2.11 30.88zm-.855-.477L16.288 4.278a1.983 1.983 0 0 1 3.423 0l15.033 26.125c.536.93.204 2.113-.742 2.64a1.99 1.99 0 0 1-.97.252H2.968C1.881 33.295 1 32.428 1 31.358c0-.335.088-.664.256-.955zM18 29.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-4.908a1.5 1.5 0 0 0 1.5-1.5V13.5a1.5 1.5 0 0 0-3 0v9.592a1.5 1.5 0 0 0 1.5 1.5z"
          })
        )
      );
    }
  },
  filled: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M1.05 13.33L7.617 2.195a.444.444 0 0 1 .766 0L14.95 13.33a.444.444 0 0 1-.383.67H1.433a.444.444 0 0 1-.383-.67zM8 12.443a.783.783 0 0 0 .787-.778.783.783 0 0 0-.787-.779.783.783 0 0 0-.787.779c0 .43.352.778.787.778zM8 9.85a.787.787 0 0 0 .787-.787V6.484a.787.787 0 1 0-1.574 0v2.578c0 .434.352.787.787.787z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M1.074 19.997l10.35-17.7a.667.667 0 0 1 1.151 0l10.35 17.7A.667.667 0 0 1 22.35 21H1.65a.667.667 0 0 1-.576-1.003zM12 18.65c.578 0 1.047-.464 1.047-1.036 0-.573-.469-1.037-1.047-1.037s-1.047.464-1.047 1.037c0 .572.469 1.036 1.047 1.036zm0-4.127c.578 0 1.047-.469 1.047-1.047v-5.16a1.047 1.047 0 1 0-2.093 0v5.16c0 .578.468 1.047 1.046 1.047z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M1.107 31.504L17.132 3.455a1 1 0 0 1 1.736 0l16.025 28.049A1 1 0 0 1 34.024 33H1.975a1 1 0 0 1-.868-1.496zM18 29.894a1.56 1.56 0 0 0 1.566-1.554A1.56 1.56 0 0 0 18 26.787a1.56 1.56 0 0 0-1.566 1.553A1.56 1.56 0 0 0 18 29.894zm0-5.178c.865 0 1.566-.701 1.566-1.566V12.82a1.566 1.566 0 1 0-3.132 0v10.33c0 .865.701 1.566 1.566 1.566z"
          })
        )
      );
    }
  }
};

var AlertIcon = function AlertIcon(_ref) {
  var type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["type", "size", "children"]);

  return alertIcons[type][size](themes.global.caution.base, children, props);
};

AlertIcon.displayName = "AlertIcon";
AlertIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};
AlertIcon.propTypes = {
  type: PropTypes$1.oneOf(types),
  size: PropTypes$1.oneOf(allSizes),
  children: PropTypes$1.node
};

var successIcons = {
  outline: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM6.537 9.738l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 0 1 .943-.943l1.899 1.899z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.758-8.343l6.364-6.364a1 1 0 0 1 1.414 1.414l-7.071 7.071a1 1 0 0 1-1.414 0L5.98 13.223a1 1 0 0 1 1.414-1.414l2.848 2.848z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm-2.637-12.818l9.546-9.546a1.5 1.5 0 1 1 2.121 2.121L16.424 25.364a1.5 1.5 0 0 1-2.122 0L8.97 20.032a1.5 1.5 0 1 1 2.121-2.122l4.272 4.272z"
          })
        )
      );
    }
  },
  filled: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM6.813 9.584l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 1 1 .943-.943l1.899 1.899z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-1.549-8.388l6.364-6.364a.998.998 0 0 1 1.412-.003.998.998 0 0 1-.003 1.412l-7.071 7.07a.998.998 0 0 1-1.412.004l-3.54-3.541a.998.998 0 0 1 .002-1.412.998.998 0 0 1 1.412-.003l2.836 2.837z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17zm-2.314-12.829l9.546-9.546c.586-.586 1.556-.565 2.167.046.612.612.632 1.582.046 2.168L16.84 25.445c-.586.586-1.556.566-2.168-.046l-5.564-5.564c-.611-.612-.632-1.582-.046-2.168.585-.586 1.556-.565 2.167.046l4.458 4.458z"
          })
        )
      );
    }
  }
};

var SuccessIcon = function SuccessIcon(_ref) {
  var type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["type", "size", "children"]);

  return successIcons[type][size](themes.global.success.base, children, props);
};

SuccessIcon.displayName = "SuccessIcon";
SuccessIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};
SuccessIcon.propTypes = {
  type: PropTypes$1.oneOf(types),
  size: PropTypes$1.oneOf(allSizes),
  children: PropTypes$1.node
};

var infoIcons = {
  outline: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm0-24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11A1.5 1.5 0 0 0 18 28z"
          })
        )
      );
    }
  },
  filled: {
    small: function small(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React.createElement("path", {
            fill: color,
            d:
              "M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17zm0-24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11A1.5 1.5 0 0 0 18 28z"
          })
        )
      );
    }
  }
};

var InfoIcon = function InfoIcon(_ref) {
  var type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["type", "size", "children"]);

  return infoIcons[type][size](themes.global.primary.base, children, props);
};

InfoIcon.displayName = "InfoIcon";
InfoIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};
InfoIcon.propTypes = {
  type: PropTypes$1.oneOf(types),
  size: PropTypes$1.oneOf(allSizes),
  children: PropTypes$1.node
};

var infoDotIcon = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              d:
                "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
            }
          )
        )
      )
    );
  },
  regular: function regular(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              d:
                "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h36v36H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              d:
                "M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm0-24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11A1.5 1.5 0 0 0 18 28z"
            }
          )
        )
      )
    );
  }
};

var InfoDotIcon = function InfoDotIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return infoDotIcon[size] ? infoDotIcon[size](color, children, props) : null;
};

InfoDotIcon.displayName = "InfoDotIcon";
InfoDotIcon.defaultProps = {
  size: allSizes[0],
  children: null,
  color: themes.global.gray01
};
InfoDotIcon.propTypes = {
  size: PropTypes$1.oneOf(allSizes),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var backIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M4.869 8l6.678 6.678a.774.774 0 0 1-1.094 1.095L3.227 8.547a.774.774 0 0 1 0-1.094L10.453.227a.774.774 0 0 1 1.094 1.095L4.87 8z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M17.542 22.692a.766.766 0 1 1-1.084 1.084L5.224 12.542c-.299-.3-.299-.785 0-1.084L16.458.224a.766.766 0 0 1 1.084 1.084L6.85 12l10.692 10.692z"
            }
          )
        )
      )
    );
  }
};

var BackIcon = function BackIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return backIcons[size](color, children, props);
};

BackIcon.displayName = "BackIcon";
BackIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
BackIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var forwardIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M10.905 8l-6.678 6.678a.774.774 0 0 0 1.095 1.095l7.225-7.226a.774.774 0 0 0 0-1.094L5.322.227a.774.774 0 0 0-1.095 1.095L10.905 8z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M6.224 22.692a.766.766 0 1 0 1.084 1.084l11.234-11.234c.299-.3.299-.785 0-1.084L7.308.224a.766.766 0 0 0-1.084 1.084L16.917 12 6.224 22.692z"
            }
          )
        )
      )
    );
  }
};

var ForwardIcon = function ForwardIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return forwardIcons[size](color, children, props);
};

ForwardIcon.displayName = "ForwardIcon";
ForwardIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
ForwardIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var upIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M8 4.869l-6.678 6.678a.774.774 0 0 1-1.095-1.094l7.226-7.226a.774.774 0 0 1 1.094 0l7.226 7.226a.774.774 0 0 1-1.095 1.094L8 4.87z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M22.692 17.542a.766.766 0 1 0 1.084-1.084L12.542 5.224c-.3-.299-.785-.299-1.084 0L.224 16.458a.766.766 0 1 0 1.084 1.084L12 6.85l10.692 10.692z"
            }
          )
        )
      )
    );
  }
};

var UpIcon = function UpIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return upIcons[size](color, children, props);
};

UpIcon.displayName = "UpIcon";
UpIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
UpIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var downIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M8 10.768l6.678-6.679a.774.774 0 1 1 1.095 1.095L8.547 12.41a.774.774 0 0 1-1.094 0L.227 5.184A.774.774 0 0 1 1.322 4.09L8 10.768z"
          }
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M22.692 7.224a.778.778 0 0 1 1.084 0c.299.293.299.768 0 1.061L12.542 19.283a.778.778 0 0 1-1.084 0L.224 8.285a.739.739 0 0 1 0-1.06.778.778 0 0 1 1.084 0L12 17.691 22.692 7.224z"
          }
        )
      )
    );
  }
};

var DownIcon = function DownIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return downIcons[size](color, children, props);
};

DownIcon.displayName = "DownIcon";
DownIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
DownIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var closeIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M8 6.905L14.678.227a.774.774 0 0 1 1.095 1.095L9.095 8l6.678 6.678a.774.774 0 0 1-1.095 1.095L8 9.095l-6.678 6.678a.774.774 0 0 1-1.095-1.095L6.905 8 .227 1.322A.774.774 0 0 1 1.322.227L8 6.905z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M12 10.869L22.634.234a.8.8 0 1 1 1.132 1.132L13.13 12l10.635 10.634a.8.8 0 1 1-1.132 1.132L12 13.13 1.366 23.766a.8.8 0 1 1-1.132-1.132L10.87 12 .234 1.366A.8.8 0 1 1 1.366.234L12 10.87z"
            }
          )
        )
      )
    );
  }
};

var CloseIcon = function CloseIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return closeIcons[size](color, children, props);
};

CloseIcon.displayName = "CloseIcon";
CloseIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
CloseIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var deleteIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M6 0h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V1a1 1 0 0 1 1-1zM3.5 4h9a.5.5 0 0 1 .498.545l-.959 10.546a1 1 0 0 1-.996.909H4.957a1 1 0 0 1-.996-.91L3.002 4.546A.5.5 0 0 1 3.5 4zm.548 1l.909 10h6.086l.91-10H4.047zM2.5 2h11a1.5 1.5 0 0 1 0 3h-11a1.5 1.5 0 0 1 0-3zm0 1a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1h-11zM10 1H6v1h4V1zM9 7.5a.5.5 0 0 1 1 0v5a.5.5 0 1 1-1 0v-5zm-2 0a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0v-5z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M5.03 7H3.5a1.5 1.5 0 0 1 0-3H7V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h3.5a1.5 1.5 0 0 1 0 3h-1.53l-.942 15.062a1 1 0 0 1-.998.938H6.97a1 1 0 0 1-.998-.938L5.03 7zM14 10.5a.5.5 0 1 1 1 0v8a.5.5 0 1 1-1 0v-8zm-4 0a.5.5 0 1 0-1 0v8a.5.5 0 1 0 1 0v-8zM16 2H8v2h8V2zM3.5 5a.5.5 0 0 0 0 1h17a.5.5 0 1 0 0-1h-17zm2.532 2l.938 15h10.06l.938-15H6.032z"
            }
          )
        )
      )
    );
  }
};

var DeleteIcon = function DeleteIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return deleteIcons[size](color, children, props);
};

DeleteIcon.displayName = "DeleteIcon";
DeleteIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
DeleteIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var calendarIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M15 5V3.5a.5.5 0 0 0-.5-.5h-1.585a1.5 1.5 0 0 1-2.83 0h-4.17a1.5 1.5 0 0 1-2.83 0H1.5a.5.5 0 0 0-.5.5V5h14zm0 1H1v8.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6zm-5-4v-.5a1.5 1.5 0 0 1 3 0V2h1.5A1.5 1.5 0 0 1 16 3.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-11A1.5 1.5 0 0 1 1.5 2H3v-.5a1.5 1.5 0 0 1 3 0V2h4zM3 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1.5-4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5zm7 0a.5.5 0 0 0 .5-.5v-1a.5.5 0 1 0-1 0v1a.5.5 0 0 0 .5.5zM3 8v2h2V8H3z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M6 3v-.5a1.5 1.5 0 0 1 3 0V3h6v-.5a1.5 1.5 0 0 1 3 0V3h3.5A1.5 1.5 0 0 1 23 4.5v17a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 21.5v-17A1.5 1.5 0 0 1 2.5 3H6zm0 1H2.5a.5.5 0 0 0-.5.5V8h20V4.5a.5.5 0 0 0-.5-.5H18v.5a1.5 1.5 0 0 1-3 0V4H9v.5a1.5 1.5 0 0 1-3 0V4zM2 9v12.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V9H2zm3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 1v2h2v-2H5zm11.5-7a.5.5 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5zm-9 0a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5z"
            }
          )
        )
      )
    );
  }
};

var CalendarIcon = function CalendarIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return calendarIcons[size](color, children, props);
};

CalendarIcon.displayName = "CalendarIcon";
CalendarIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
CalendarIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var homeIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M2.598 9.167a1.546 1.546 0 0 1-2.171-.073 1.533 1.533 0 0 1 .06-2.167l7.17-6.79a.5.5 0 0 1 .686 0l7.178 6.788c.617.588.64 1.558.056 2.17a1.553 1.553 0 0 1-2.178.07L8 4.18 2.598 9.167zM8 1.188L1.174 7.653a.533.533 0 0 0-.02.753.546.546 0 0 0 .766.026l5.74-5.3a.5.5 0 0 1 .68 0l5.738 5.298a.553.553 0 0 0 .775-.025.532.532 0 0 0-.018-.752L8 1.188zM2 8.58a.5.5 0 0 1 .16-.367l5.5-5.08a.5.5 0 0 1 .68 0l5.5 5.08a.5.5 0 0 1 .16.367V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.58zm1 .219V15h10V8.799L8 4.18 3 8.799zM7 15.5a.5.5 0 1 1-1 0V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.5a.5.5 0 1 1-1 0V11H7v4.5z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M12 5.207l-8.396 8.397a1.56 1.56 0 0 1-2.208-2.208l10.25-10.25a.5.5 0 0 1 .708 0l10.25 10.25a1.56 1.56 0 0 1-2.208 2.208L12 5.207zm-9.896 6.897a.56.56 0 1 0 .792.792l8.75-8.75a.5.5 0 0 1 .708 0l8.75 8.75a.56.56 0 0 0 .792-.792L12 2.207l-9.896 9.897zM4 12a.5.5 0 0 1 .146-.354l7.5-7.5a.5.5 0 0 1 .708 0l7.5 7.5A.5.5 0 0 1 20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12zm1 .207V22h14v-9.793l-7-7-7 7zM10 22.5a.5.5 0 1 1-1 0V16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6.5a.5.5 0 1 1-1 0V16h-4v6.5z"
            }
          )
        )
      )
    );
  }
};

var HomeIcon = function HomeIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return homeIcons[size](color, children, props);
};

HomeIcon.displayName = "HomeIcon";
HomeIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
HomeIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var searchIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-.564 4.229l4.418 4.417a.5.5 0 0 1-.708.708l-4.417-4.418a6.5 6.5 0 1 1 .707-.707z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".5"
            },
            {
              fillRule: "nonzero",
              d:
                "M18 9.5a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0zm-1.438 6.355l7.292 7.291a.5.5 0 0 1-.708.708l-7.291-7.292a9.5 9.5 0 1 1 .707-.707z"
            }
          )
        )
      )
    );
  }
};

var SearchIcon = function SearchIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return searchIcons[size] ? searchIcons[size](color, children, props) : null;
};

SearchIcon.displayName = "SearchIcon";
SearchIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};
SearchIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};

var BookmarkIcon = function BookmarkIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }),
    children,
    React.createElement(
      "path",
      _extends(
        {
          fill: color
        },
        color !== "currentColor" && {
          fillOpacity: ".5"
        },
        {
          fillRule: "nonzero",
          d:
            "M13 1H3v13.29l3.957-2.229a2 2 0 0 1 1.946-.01L13 14.309V1zM3 0h10a1 1 0 0 1 1 1v15l-5.58-3.072a1 1 0 0 0-.973.005L2 16V1a1 1 0 0 1 1-1z"
        }
      )
    )
  );
};

BookmarkIcon.displayName = "BookmarkIcon";
BookmarkIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
BookmarkIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var ClearIcon = function ClearIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm3.89-15.596a.5.5 0 0 1 .706.707l-8.485 8.485a.5.5 0 0 1-.707-.707l8.485-8.485zm-8.486.707a.5.5 0 0 1 .707-.707l8.485 8.485a.5.5 0 0 1-.707.707L7.404 8.111z"
          }
        )
      )
    )
  );
};

ClearIcon.displayName = "ClearIcon";
ClearIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
ClearIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var EditIcon = function EditIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M5.054 22.487l4.854-3.205L18.952 3.62S17.44 2.745 14.418 1L5.375 16.663l-.321 5.824zM4 23.425l.382-6.936a.5.5 0 0 1 .066-.223L13.553.5a1 1 0 0 1 1.365-.365l4.535 2.618c.477.278.64.887.365 1.366l-9.103 15.766a.5.5 0 0 1-.157.168L4.776 23.87A.5.5 0 0 1 4 23.425zm6.031-3.357l-5.4-3.118c-.577-.334-.077-1.2.5-.867l5.4 3.118c.578.334.078 1.2-.5.867zm7.015-12.15l-5.4-3.118c-.577-.334-.077-1.2.5-.866l5.4 3.118c.577.333.077 1.199-.5.866zM4.5 24a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1h-15z"
          }
        )
      )
    )
  );
};

EditIcon.displayName = "EditIcon";
EditIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
EditIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FeedbackIcon = function FeedbackIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M5 22.293l4.146-4.147A.5.5 0 0 1 9.5 18h10a3.5 3.5 0 0 0 3.5-3.5v-10A3.5 3.5 0 0 0 19.5 1h-15A3.5 3.5 0 0 0 1 4.5v10A3.5 3.5 0 0 0 4.5 18a.5.5 0 0 1 .5.5v3.793zM9.707 19l-4.853 4.854A.5.5 0 0 1 4 23.5v-4.527A4.5 4.5 0 0 1 0 14.5v-10A4.5 4.5 0 0 1 4.5 0h15A4.5 4.5 0 0 1 24 4.5v10a4.5 4.5 0 0 1-4.5 4.5H9.707zM5.5 6a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0 4a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0 4a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7z"
          }
        )
      )
    )
  );
};

FeedbackIcon.displayName = "FeedbackIcon";
FeedbackIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
FeedbackIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FilterIcon = function FilterIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M10.5 16v2h3v-2h-3zm2-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v3.5a.5.5 0 1 1-1 0V19h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1V1.5a.5.5 0 1 1 1 0V15zm6.5-1.5a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9zm0-12a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9zM18 11v2h3v-2h-3zm0-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 6v2h3V6H3zm2-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5v13.5a.5.5 0 1 1-1 0V9H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1V1.5a.5.5 0 0 1 1 0V5z"
          }
        )
      )
    )
  );
};

FilterIcon.displayName = "FilterIcon";
FilterIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
FilterIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var LocationIcon = function LocationIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M12.373 23.833a.5.5 0 0 1-.746 0C5.883 17.413 3 12.495 3 9c0-5.276 3.724-9 9-9s9 3.724 9 9c0 3.495-2.883 8.414-8.627 14.833zM20 9c0-4.724-3.276-8-8-8S4 4.276 4 9c0 3.1 2.66 7.707 8 13.748C17.34 16.708 20 12.1 20 9zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          }
        )
      )
    )
  );
};

LocationIcon.displayName = "LocationIcon";
LocationIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
LocationIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var TicketIcon = function TicketIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M24 0H0v24h24z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M18.006 4.528a1.03 1.03 0 0 0 1.457 1.457l.332-.332a.5.5 0 0 1 .707 0l3.14 3.14a1 1 0 0 1 0 1.414L10.207 23.642a1 1 0 0 1-1.415 0L.307 15.156a1 1 0 0 1 0-1.414L13.742.307a1 1 0 0 1 1.414 0l3.182 3.182a.5.5 0 0 1 0 .707l-.332.332zM14.45 1.014L1.014 14.45 9.5 22.935 22.935 9.499l-2.786-2.785a2.03 2.03 0 0 1-2.871-2.871l-2.829-2.829zM10.56 4.196a.5.5 0 1 1 .707-.707L13.39 5.61a.5.5 0 1 1-.708.708l-2.12-2.122zM7.732 14.803a.5.5 0 1 1-.707-.707l4.95-4.95a.5.5 0 1 1 .706.707l-4.95 4.95zm4.242 0a.5.5 0 1 1-.707-.707l2.829-2.829a.5.5 0 1 1 .707.707l-2.829 2.829zm2.122-7.071a.5.5 0 1 1 .707-.707l2.121 2.12a.5.5 0 1 1-.707.708l-2.121-2.121zm3.535 3.535a.5.5 0 1 1 .707-.707l2.122 2.121a.5.5 0 1 1-.707.708l-2.122-2.122z"
          }
        )
      )
    )
  );
};

TicketIcon.displayName = "TicketIcon";
TicketIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
TicketIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var TicketsIcon = function TicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M24 0H0v24h24z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M17.978 4.5a1.03 1.03 0 0 0 1.457 1.457l.332-.332a.5.5 0 0 1 .707 0l3.14 3.14a1 1 0 0 1 0 1.413L10.177 23.613a1 1 0 0 1-1.414 0L.28 15.128a1 1 0 0 1 0-1.414L13.714.279a1 1 0 0 1 1.414 0L18.31 3.46a.5.5 0 0 1 0 .707l-.332.332zM14.42.986L.986 14.421l8.485 8.485L22.906 9.471 20.12 6.685a2.03 2.03 0 0 1-2.87-2.87L14.42.986zm-3.889 3.182a.5.5 0 0 1 .707-.707l2.121 2.121a.5.5 0 1 1-.707.707l-2.121-2.121zM7.704 14.775a.5.5 0 1 1-.708-.707l4.95-4.95a.5.5 0 0 1 .707.707l-4.95 4.95zm4.242 0a.5.5 0 1 1-.707-.707l2.829-2.829a.5.5 0 0 1 .707.707l-2.829 2.829zm2.122-7.071a.5.5 0 0 1 .707-.708l2.121 2.122a.5.5 0 1 1-.707.707l-2.121-2.121zM5.91 3.984l1.403.511a.5.5 0 0 1-.342.94l-1.403-.51-2.792 7.67a.5.5 0 0 1-.94-.341L4.77 4.192a.503.503 0 0 1 .058-.16L6.076.607A1 1 0 0 1 7.358.008l3.232 1.176a.5.5 0 0 1 .3.641l-.233.639a.82.82 0 0 0 .49 1.05.5.5 0 1 1-.343.939 1.819 1.819 0 0 1-1.087-2.331l.062-.169L7.016.948 5.911 3.985zm11.692 7.255a.5.5 0 0 1 .707-.707l2.121 2.121a.5.5 0 1 1-.707.707l-2.12-2.12z"
          }
        )
      )
    )
  );
};

TicketsIcon.displayName = "TicketsIcon";
TicketsIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
TicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var UserIcon = function UserIcon(_ref) {
  var children = _ref.children,
    size = _ref.size,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "size", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M24 0H0v24h24z"
      }),
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "nonzero",
            d:
              "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 7.5a.5.5 0 1 1-1 0V19a6 6 0 1 1 12 0v1.5a.5.5 0 1 1-1 0V19a5 5 0 0 0-10 0v1.5z"
          }
        )
      )
    )
  );
};

UserIcon.displayName = "UserIcon";
UserIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string,
  size: PropTypes$1.number
};
UserIcon.defaultProps = {
  children: null,
  color: themes.global.gray01,
  size: 24
};

var SearchIconDeprecated = function SearchIconDeprecated(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 16 16",
      width: size,
      height: size,
      fill: color
    }),
    React.createElement("title", null, "Search Icon"),
    React.createElement("path", {
      d:
        "M11.491 6.048c0 .672-.135 1.31-.404 1.897a5.01 5.01 0 0 1-1.102 1.552 5.273 5.273 0 0 1-1.632 1.05 5.39 5.39 0 0 1-3.987 0 5.283 5.283 0 0 1-1.632-1.05 5.01 5.01 0 0 1-1.102-1.552 4.531 4.531 0 0 1-.404-1.897c0-.666.135-1.302.404-1.892.269-.592.64-1.114 1.102-1.552A5.304 5.304 0 0 1 4.366 1.56a5.207 5.207 0 0 1 1.994-.384c.706 0 1.376.13 1.993.384.62.256 1.17.607 1.632 1.045.462.438.833.96 1.102 1.552a4.54 4.54 0 0 1 .404 1.892m4.346 8.977l-4.744-4.93a6.36 6.36 0 0 0 .62-.774 5.913 5.913 0 0 0 .89-2.115 5.893 5.893 0 0 0-.004-2.346 5.543 5.543 0 0 0-.361-1.128 5.98 5.98 0 0 0-.588-1.036 6.49 6.49 0 0 0-.794-.925A6.37 6.37 0 0 0 8.794.461 6.82 6.82 0 0 0 7.61.116a6.742 6.742 0 0 0-2.5 0A6.82 6.82 0 0 0 3.925.46a6.44 6.44 0 0 0-2.064 1.313 6.491 6.491 0 0 0-.793.923 5.98 5.98 0 0 0-.588 1.036c-.16.361-.28.741-.36 1.128a5.954 5.954 0 0 0 0 2.376c.08.388.2.768.36 1.13a6.182 6.182 0 0 0 1.381 1.959c.298.288.624.544.97.764a6.44 6.44 0 0 0 2.279.894 6.77 6.77 0 0 0 3.363-.224 6.296 6.296 0 0 0 1.708-.873l4.749 4.925a.56.56 0 0 0 .215.145.701.701 0 0 0 .453.011.514.514 0 0 0 .2-.114.561.561 0 0 0 .039-.828"
    })
  );
};

SearchIconDeprecated.propTypes = {
  size: PropTypes$1.number.isRequired,
  color: PropTypes$1.string,
  children: PropTypes$1.node
};
SearchIconDeprecated.defaultProps = {
  children: null,
  color: "currentColor"
};

var listIcons = {
  small: function small(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "13",
        viewBox: "0 0 20 13"
      }),
      children,
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "evenodd",
            d:
              "M19.502 12.002h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm-17.998.996a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 1.505C0 1.087.146.732.44.439A1.45 1.45 0 0 1 1.503 0c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 6.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 5c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 11.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 10c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147z"
          }
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "17",
        viewBox: "0 0 24 17"
      }),
      children,
      React.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".5"
          },
          {
            fillRule: "evenodd",
            d:
              "M19.502 12.002h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm-17.998.996a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 1.505C0 1.087.146.732.44.439A1.45 1.45 0 0 1 1.503 0c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 6.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 5c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 11.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 10c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147z"
          }
        )
      )
    );
  }
};

var ListIcon = function ListIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return listIcons[size](color, children, props);
};

ListIcon.displayName = "ListIcon";
ListIcon.propTypes = {
  size: PropTypes$1.oneOf(smallLarge),
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
ListIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

var WarningIcon = function WarningIcon(_ref) {
  var size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "children"]);

  return React.createElement(
    "svg",
    _extends(
      {
        width: size,
        height: size,
        viewBox: "0 0 36 36"
      },
      props
    ),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React.createElement("path", {
        d: "M0 0h36v36H0z"
      }),
      React.createElement("path", {
        fill: "#F2BD2A",
        d:
          "M1.38 32.54L16.652 2.992a1 1 0 0 1 1.766-.02L34.59 32.52a1 1 0 0 1-.877 1.48H2.268a1 1 0 0 1-.889-1.46z"
      }),
      React.createElement("circle", {
        cx: "17.5",
        cy: "29.5",
        r: "1.5",
        fill: "#FFF"
      }),
      React.createElement("path", {
        fill: "#FFF",
        d:
          "M17.5 25a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
      })
    )
  );
};

WarningIcon.defaultProps = {
  children: null
};
WarningIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

var VenueSearchIcon = function VenueSearchIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 1024 1024"
    }),
    children,
    React.createElement("path", {
      fill: color,
      d:
        "M1012.992 10.906c-5.888-5.939-13.312-9.37-21.76-10.394-8.192-0.922-15.974 0.512-23.552 4.608l-948.326 549.376c-7.424 3.994-12.954 10.086-16.384 18.074-3.379 8.192-3.84 16.384-1.536 23.552 1.946 8.448 6.451 15.36 13.414 20.582 6.758 5.12 14.336 7.68 22.63 7.68h362.086v361.984c0 8.704 2.56 16.486 7.68 23.040 5.12 6.502 11.776 11.008 19.456 13.312 2.253 0.717 4.608 1.024 7.014 1.024h3.226c6.656 0 12.902-1.536 18.637-4.608 5.939-3.226 10.752-7.834 14.080-13.824l549.12-948.89c4.403-7.322 6.042-15.36 4.813-23.757-1.178-8.090-4.608-15.258-10.598-21.658zM463.872 560.64c-7.168-7.168-16.538-11.008-26.931-11.008h-259.789l706.406-409.344-408.781 706.918v-260.25c0-10.086-3.789-19.2-10.957-26.368z"
    })
  );
};

VenueSearchIcon.displayName = "VenueSearchIcon";
VenueSearchIcon.propTypes = {
  children: PropTypes$1.node,
  color: PropTypes$1.string
};
VenueSearchIcon.defaultProps = {
  children: null,
  color: colors.moonrock
};

var DayTileOverflowButtonContainer = styled.div.withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowButtonContainer",
  componentId: "sc-3j854i-0"
})(["margin-left:auto;"]);
var DayTileOverflowIconButton = styled(IconButton).withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowIconButton",
  componentId: "sc-3j854i-1"
})(
  ["display:block;padding:", " ", " 0;border:0;color:", ";"],
  spacing.cozy,
  spacing.cozy,
  getThemeValue("gray02")
);
var DayTileOverflowIcon = styled(OverflowIcon).withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowIcon",
  componentId: "sc-3j854i-2"
})(
  ["", ":hover &{color:", ";fill:currentColor;}"],
  DayTileOverflowIconButton,
  getThemeValue("primary", "base")
);

var DayTileOverflowButton = function DayTileOverflowButton(props) {
  return React.createElement(
    DayTileOverflowButtonContainer,
    null,
    React.createElement(
      DayTileOverflowIconButton,
      _extends(
        {
          size: 30,
          role: "button"
        },
        props
      ),
      React.createElement(DayTileOverflowIcon, {
        size: 21
      })
    )
  );
};

var Container$1 = styled.div
  .attrs({
    className: "container-block"
  })
  .withConfig({
    displayName: "Blockstyles__Container",
    componentId: "ns8xgs-0"
  })(
  [
    "position:relative;overflow:hidden;background-color:",
    ";border-radius:",
    ";border:1px solid ",
    ";padding:",
    ";"
  ],
  themes.global.white.base,
  constants.borderRadius.large,
  themes.global.gray03,
  spacing.moderate
);
Container$1.propTypes = {
  children: PropTypes.node.isRequired
};
Container$1.displayName = "ContainerBlock";

var Card = styled(Container$1).withConfig({
  displayName: "Card",
  componentId: "sc-163dftv-0"
})(
  [
    "border-radius:",
    ";background-color:",
    ";box-shadow:",
    ";padding:",
    ";border:none;"
  ],
  constants.borderRadius.large,
  themes.global.white.base,
  cardBoxShadow,
  spacing.moderate
);
Card.displayName = "Card";

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral([
    "\n    padding-right: ",
    "px;\n    padding-left: ",
    "px;\n    ",
    "\n  "
  ]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var getColumnValue = function getColumnValue() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return args.filter(function(el) {
    return el !== null;
  })[0];
};

var getSize = function getSize(val) {
  return (val / constants.MAX_COLUMNS) * 100;
};

var getFlexProps = function getFlexProps(val) {
  return val === 12
    ? "\n      flex: 0 0 100%;\n    "
    : "\n      flex: 0 0 ".concat(getSize(val), "%;\n    ");
};

var getDisplayProp = function getDisplayProp(val) {
  return val === 0 ? "none" : "block";
}; // returns styles based on Column value

var getColumnStylesMixin = function getColumnStylesMixin(columnValue) {
  return "\n  max-width: "
    .concat(getSize(columnValue), "%;\n  display: ")
    .concat(getDisplayProp(columnValue), ";\n  ")
    .concat(getFlexProps(columnValue), "\n");
};

var Column = styled.div.withConfig({
  displayName: "Column",
  componentId: "sc-14nwyy3-0"
})(
  [
    "box-sizing:border-box;padding-right:",
    "px;padding-left:",
    "px;",
    " ",
    " ",
    " ",
    ""
  ],
  spacing.gutters.small / 2,
  spacing.gutters.small / 2,
  function(_ref) {
    var small = _ref.small;
    return getColumnStylesMixin(small);
  },
  mediumAndUp(
    _templateObject$3(),
    spacing.gutters.mediumAndUp / 2,
    spacing.gutters.mediumAndUp / 2,
    function(_ref2) {
      var medium = _ref2.medium,
        small = _ref2.small;
      return getColumnStylesMixin(getColumnValue(medium, small));
    }
  ),
  largeAndUp(_templateObject2$1(), function(_ref3) {
    var large = _ref3.large,
      medium = _ref3.medium,
      small = _ref3.small;
    return getColumnStylesMixin(getColumnValue(large, medium, small));
  }),
  xLargeAndUp(_templateObject3$1(), function(_ref4) {
    var xLarge = _ref4.xLarge,
      large = _ref4.large,
      medium = _ref4.medium,
      small = _ref4.small;
    return getColumnStylesMixin(getColumnValue(xLarge, large, medium, small));
  })
);

var PropTypePositiveInt = function PropTypePositiveInt(
  props,
  propName,
  componentName
) {
  if (props[propName] >= 0) return null;
  return new Error(
    "Invalid value in "
      .concat(propName, " supplied to ")
      .concat(componentName, " should be a positive integer")
  );
};

Column.propTypes = {
  small: PropTypePositiveInt,
  medium: PropTypePositiveInt,
  large: PropTypePositiveInt,
  xLarge: PropTypePositiveInt
};
Column.defaultProps = {
  small: 12,
  medium: null,
  large: null,
  xLarge: null
};
Column.displayName = "Column";

function _templateObject$4() {
  var data = _taggedTemplateLiteral([
    "\n    padding-left: ",
    "px;\n    padding-right: ",
    "px;\n  "
  ]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$2 = styled.div.withConfig({
  displayName: "Container",
  componentId: "sc-4qgiu-0"
})(
  [
    "margin:0 auto;max-width:",
    ";width:100%;padding-left:",
    "px;padding-right:",
    "px;box-sizing:border-box;",
    ";"
  ],
  function() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

    return theme.maxWidth || "1440px";
  },
  spacing.gutters.small,
  spacing.gutters.small,
  mediumAndUp(
    _templateObject$4(),
    spacing.gutters.mediumAndUp,
    spacing.gutters.mediumAndUp
  )
);
Container$2.displayName = "Container";

var _SIZES;
var SIZES$2 = ((_SIZES = {}),
_defineProperty(_SIZES, SMALL, {
  borderWidth: "2px",
  marginValue: "4px",
  outerRingLength: "48px",
  middleRingLength: "36px",
  innerRingLength: "24px"
}),
_defineProperty(_SIZES, REGULAR, {
  borderWidth: "3px",
  marginValue: "7px",
  outerRingLength: "80px",
  middleRingLength: "60px",
  innerRingLength: "40px"
}),
_SIZES);
var Rotate = keyframes([
  "from{transform:rotate(0deg);}to{transform:rotate(360deg);}"
]);
var LoadingContainer = styled.div.withConfig({
  displayName: "LoaderRing__LoadingContainer",
  componentId: "sc-1d8pyqg-0"
})(
  [
    "display:",
    ";> div{box-sizing:border-box;display:block;position:absolute;border-radius:100%;animation:",
    " 2s cubic-bezier(0.5,0,0.5,1) infinite;:nth-child(1){animation-delay:-0.45s;}:nth-child(2){animation-delay:-0.3s;}:nth-child(3){animation-delay:-0.15s;}}"
  ],
  function(_ref) {
    var display = _ref.display;
    return display;
  },
  Rotate
);
var OuterRing = styled(LoadingContainer).withConfig({
  displayName: "LoaderRing__OuterRing",
  componentId: "sc-1d8pyqg-1"
})(
  [
    "> div{left:calc(50% - ",
    " / 2);width:",
    ";height:",
    ";margin:0px;border:",
    " solid ",
    ";border-color:",
    " transparent transparent transparent;}"
  ],
  function(_ref2) {
    var size = _ref2.size;
    return SIZES$2[size].outerRingLength;
  },
  function(_ref3) {
    var size = _ref3.size;
    return SIZES$2[size].outerRingLength;
  },
  function(_ref4) {
    var size = _ref4.size;
    return SIZES$2[size].outerRingLength;
  },
  function(_ref5) {
    var size = _ref5.size;
    return SIZES$2[size].borderWidth;
  },
  themes.global.accent01.dark,
  themes.global.accent01.dark
);
var MiddleRing = styled(LoadingContainer).withConfig({
  displayName: "LoaderRing__MiddleRing",
  componentId: "sc-1d8pyqg-2"
})(
  [
    "> div{width:",
    ";height:",
    ";margin-top:",
    ";margin-left:",
    ";border:",
    " solid ",
    ";border-color:",
    " transparent transparent transparent;}"
  ],
  function(_ref6) {
    var size = _ref6.size;
    return SIZES$2[size].middleRingLength;
  },
  function(_ref7) {
    var size = _ref7.size;
    return SIZES$2[size].middleRingLength;
  },
  function(_ref8) {
    var size = _ref8.size;
    return SIZES$2[size].marginValue;
  },
  function(_ref9) {
    var size = _ref9.size;
    return SIZES$2[size].marginValue;
  },
  function(_ref10) {
    var size = _ref10.size;
    return SIZES$2[size].borderWidth;
  },
  themes.global.accent03.light,
  themes.global.accent03.light
);
var InnerRing = styled(LoadingContainer).withConfig({
  displayName: "LoaderRing__InnerRing",
  componentId: "sc-1d8pyqg-3"
})(
  [
    "> div{width:",
    ";height:",
    ";margin-top:",
    ";margin-left:",
    ";border:",
    " solid ",
    ";border-color:",
    " transparent transparent transparent;}"
  ],
  function(_ref11) {
    var size = _ref11.size;
    return SIZES$2[size].innerRingLength;
  },
  function(_ref12) {
    var size = _ref12.size;
    return SIZES$2[size].innerRingLength;
  },
  function(_ref13) {
    var size = _ref13.size;
    return SIZES$2[size].marginValue;
  },
  function(_ref14) {
    var size = _ref14.size;
    return SIZES$2[size].marginValue;
  },
  function(_ref15) {
    var size = _ref15.size;
    return SIZES$2[size].borderWidth;
  },
  themes.global.brand,
  themes.global.brand
);

var LoaderRing = function LoaderRing(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      OuterRing,
      props,
      React.createElement("div", null),
      React.createElement("div", null),
      React.createElement("div", null),
      React.createElement(
        MiddleRing,
        props,
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement(
          InnerRing,
          props,
          React.createElement("div", null),
          React.createElement("div", null),
          React.createElement("div", null)
        )
      )
    )
  );
};

LoaderRing.displayName = "LoaderRing";
LoaderRing.propTypes = {
  size: PropTypes.oneOf(SIZES_SR),
  display: PropTypes.oneOf(["block", "inline-block"])
};
LoaderRing.defaultProps = {
  size: REGULAR,
  display: "block"
};

var _React$createContext = React.createContext({
    isOpen: false
  }),
  Provider = _React$createContext.Provider,
  Consumer = _React$createContext.Consumer;

var DrawerContainer = styled.div.withConfig({
  displayName: "Drawerstyles__DrawerContainer",
  componentId: "sc-11s7di8-0"
})(
  [
    "background-color:",
    ";color:",
    ";height:100%;position:fixed;top:0;left:0;bottom:0;right:0;visibility:hidden;transform:translateY(-100%);opacity:0;transition:opacity 300ms ",
    ";overflow:hidden;z-index:-1;&.drawer__content--open{transform:translateY(0);visibility:visible;opacity:1;}"
  ],
  getThemeValue("onyx", "base"),
  getThemeValue("white", "base"),
  constants.easing.easeInOutQuad
);
var DrawerContent = styled.div.withConfig({
  displayName: "Drawerstyles__DrawerContent",
  componentId: "sc-11s7di8-1"
})([
  "display:flex;flex-direction:column;position:relative;width:100%;height:100vh;overflow-y:scroll;-webkit-overflow-scrolling:touch;overflow-x:hidden;"
]);
var HeaderContent = styled.div.withConfig({
  displayName: "Drawerstyles__HeaderContent",
  componentId: "sc-11s7di8-2"
})(
  [
    "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:60px;padding-left:",
    ";position:relative;z-index:5;"
  ],
  spacing.moderate
);
var CloseButton = styled.button.withConfig({
  displayName: "Drawerstyles__CloseButton",
  componentId: "sc-11s7di8-3"
})(
  [
    "appearance:none;cursor:pointer;border:0;outline:0;background:transparent;display:flex;align-items:center;height:60px;padding:0 ",
    ";"
  ],
  spacing.moderate
);
var ContentWrapper$1 = styled.div.withConfig({
  displayName: "Drawerstyles__ContentWrapper",
  componentId: "sc-11s7di8-4"
})([
  "&.drawer--open{overflow:hidden;}display:flex;flex:1 0 auto;flex-direction:column;"
]);

var Portal =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Portal, _React$Component);

    function Portal() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Portal);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Portal)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          rootSelector: null,
          container: null
        }
      );

      return _this;
    }

    _createClass(Portal, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var rootSelector = document.getElementById("modal-root");
          var container = document.createElement("div");
          rootSelector.appendChild(container); // we need to do it in componentDidMount for Portal to work correctly with SSR
          // eslint-disable-next-line

          this.setState({
            rootSelector: rootSelector,
            container: container
          });
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.rootSelector) {
            this.state.rootSelector.removeChild(this.state.container);
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$state = this.state,
            rootSelector = _this$state.rootSelector,
            container = _this$state.container;

          if (!rootSelector) {
            return null;
          }

          return ReactDOM.createPortal(this.props.children, container);
        }
      }
    ]);

    return Portal;
  })(React.Component);

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

var DrawerProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DrawerProvider, _React$Component);

    function DrawerProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DrawerProvider);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DrawerProvider)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "contentContainer",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "scrollPosition",
        0
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "setContent",
        function(content) {
          return _this.setState(function() {
            return {
              content: content
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleDrawer",
        function() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$shouldRestoreScr = _ref.shouldRestoreScroll,
            shouldRestoreScroll =
              _ref$shouldRestoreScr === void 0 ? true : _ref$shouldRestoreScr;

          _this.setState(function(_ref2) {
            var isOpen = _ref2.isOpen;

            /* istanbul ignore else */
            if (typeof window !== "undefined" && !isOpen) {
              _this.scrollPosition = shouldRestoreScroll
                ? window.pageYOffset
                : null;
            }

            return {
              isOpen: !isOpen
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isOpen: false,
          toggleDrawer: _this.toggleDrawer,
          setContent: _this.setContent,
          content: null
        }
      );

      return _this;
    }

    _createClass(DrawerProvider, [
      {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(prevProps, prevState) {
          return (
            prevState.isOpen !== this.state.isOpen ||
            prevState.content !== this.state.content ||
            prevProps.children !== this.props.children
          );
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(_, prevState) {
          if (prevState.isOpen === false) return;
          if (this.state.isOpen === true) return;

          if (
            typeof window !== "undefined" &&
            typeof window.scrollTo === "function" &&
            this.scrollPosition !== null
          ) {
            window.scrollTo(0, this.scrollPosition);
            this.scrollPosition = 0;
          }

          this.shouldRestoreScroll = true;
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children;
          var _this$state = this.state,
            isOpen = _this$state.isOpen,
            content = _this$state.content;
          return React.createElement(
            Provider,
            {
              value: this.state
            },
            React.createElement(
              ContentWrapper$1,
              {
                className: classNames(
                  {
                    "drawer--open": isOpen
                  },
                  className
                ),
                ref: this.contentContainer
              },
              Children.only(children),
              content && React.createElement(Portal, null, content)
            )
          );
        }
      }
    ]);

    return DrawerProvider;
  })(React.Component);

_defineProperty(DrawerProvider, "propTypes", {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
});

_defineProperty(DrawerProvider, "defaultProps", {
  className: ""
});

var SpotLight = function SpotLight(_ref) {
  var className = _ref.className;
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 1440 218",
      preserveAspectRatio: "xMinYMid meet",
      className: className
    },
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          id: "a",
          x1: "61.654%",
          x2: "3.355%",
          y1: "100%",
          y2: "0%"
        },
        React.createElement("stop", {
          offset: "0%",
          stopColor: "#024691"
        }),
        React.createElement("stop", {
          offset: "52.996%",
          stopColor: "#BADBFE"
        }),
        React.createElement("stop", {
          offset: "100%",
          stopColor: "#C56BFF"
        })
      ),
      React.createElement(
        "linearGradient",
        {
          id: "c",
          x1: "74.395%",
          x2: ".532%",
          y1: "129.212%",
          y2: "-28.101%"
        },
        React.createElement("stop", {
          offset: "0%",
          stopOpacity: "0"
        }),
        React.createElement("stop", {
          offset: "100%",
          stopOpacity: ".4"
        }),
        React.createElement("stop", {
          offset: "100%"
        }),
        React.createElement("stop", {
          offset: "100%",
          stopOpacity: ".4"
        })
      ),
      React.createElement("path", {
        id: "b",
        d: "M0 .748h138.365l1325.043 217.52H413.554z"
      })
    ),
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero",
        opacity: ".102",
        transform: "translate(-20)"
      },
      React.createElement("use", {
        fill: "url(#a)",
        xlinkHref: "#b"
      }),
      React.createElement("use", {
        fill: "url(#c)",
        xlinkHref: "#b"
      })
    )
  );
};

SpotLight.propTypes = {
  className: PropTypes.string
};
SpotLight.defaultProps = {
  className: ""
};
var SpotLight$1 = styled(SpotLight).withConfig({
  displayName: "SpotLight",
  componentId: "sc-1hl5jt0-0"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:100%;"]);

var Angle = function Angle(_ref) {
  var className = _ref.className;
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 476 218",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMaxYMid meet",
      className: className
    },
    React.createElement(
      "defs",
      null,
      React.createElement(
        "linearGradient",
        {
          x1: "21.6784013%",
          y1: "112.586732%",
          x2: "53.474493%",
          y2: "23.9282924%",
          id: "Angle-linearGradient-1"
        },
        React.createElement("stop", {
          stopColor: "#000000",
          stopOpacity: "0",
          offset: "0%"
        }),
        React.createElement("stop", {
          stopColor: "#000000",
          offset: "100%"
        }),
        React.createElement("stop", {
          stopColor: "#000000",
          offset: "100%"
        })
      )
    ),
    React.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        opacity: "0.0490513393"
      },
      React.createElement(
        "g",
        {
          transform: "translate(-1016.000000, -184.000000)",
          fill: "url(#Angle-linearGradient-1)",
          fillRule: "nonzero"
        },
        React.createElement(
          "g",
          {
            transform: "translate(52.000000, 184.000000)"
          },
          React.createElement(
            "g",
            {
              transform: "translate(-20.000000, 0.000000)"
            },
            React.createElement("polygon", {
              transform:
                "translate(1222.334169, 109.000000) scale(-1, 1) translate(-1222.334169, -109.000000) ",
              points: "984.668337 0 1460 218 984.668337 218"
            })
          )
        )
      )
    )
  );
};

Angle.propTypes = {
  className: PropTypes.string
};
Angle.defaultProps = {
  className: ""
};
var Angle$1 = styled(Angle).withConfig({
  displayName: "Angle",
  componentId: "ebngwr-0"
})(["position:absolute;right:0;bottom:0;height:100%;width:auto;"]);

var StyledImageSeo = styled.img
  .attrs({
    className: "image image--seo image--hidden"
  })
  .withConfig({
    displayName: "Seostyles__StyledImageSeo",
    componentId: "sc-163fjlj-0"
  })(["position:absolute;visibility:hidden;height:0;width:0;top:0;left:0;"]);

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      background-image: ", ";\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      background-image: ", ";\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([
    "\n      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    "\n        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background-image: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n      background-image: ", ";\n    "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral([
    "box-shadow: inset 0 1px 40px 10px rgba(0, 0, 0, 0.15);"
  ]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    background-image: ", ";\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    background-image: ", ";\n  "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var SPOTLIGHT_STOPS = [
  "rgb(0, 45, 161)",
  "".concat(colors.azure.base, " 55%"),
  "rgb(0, 45, 161)"
];
var SPOTLIGHT_DEG = {
  small: "256deg",
  medium: "260deg",
  large: "262deg"
};
var GradientStyles = styled.span.withConfig({
  displayName: "Gradient__GradientStyles",
  componentId: "h1gc6-0"
})(
  [
    "z-index:1;width:100%;background-image:",
    ";",
    " ",
    ';&.gradient--overlay:after,&.gradient--underlay:after{height:100%;content:"";top:0;left:0;right:0;position:absolute;}&.gradient--spotlight{',
    ";}&.gradient--underlay.gradient--spotlight:after{z-index:-1;opacity:0.8;background-image:",
    ";",
    " ",
    ";}&:not(.gradient--spotlight).gradient--overlay:after{z-index:2;opacity:0.4;background-image:linear-gradient(77deg,rgba(0,0,0,0),#000000);",
    ";",
    ";}&:not(.gradient--spotlight).gradient--underlay:after{z-index:-1;opacity:0.8;background-image:",
    ";",
    " ",
    ";}"
  ],
  function(props) {
    return "linear-gradient("
      .concat(props.deg.small, ", ")
      .concat(props.stops.join(","), ")");
  },
  mediumAndUp(_templateObject$5(), function(props) {
    return "linear-gradient("
      .concat(props.deg.medium, ", ")
      .concat(props.stops.join(","), ")");
  }),
  largeAndUp(_templateObject2$2(), function(props) {
    return "linear-gradient("
      .concat(props.deg.large, ", ")
      .concat(props.stops.join(","), ")");
  }),
  largeAndUp(_templateObject3$2()),
  function(props) {
    return "linear-gradient("
      .concat(props.deg.small, ", ")
      .concat(props.stops.join(","), ")");
  },
  mediumAndUp(_templateObject4$1(), function(props) {
    return "linear-gradient("
      .concat(props.deg.medium, ", ")
      .concat(props.stops.join(","), ")");
  }),
  largeAndUp(_templateObject5(), function(props) {
    return "linear-gradient("
      .concat(props.deg.large, ", ")
      .concat(props.stops.join(","), ")");
  }),
  mediumAndUp(_templateObject6()),
  largeAndUp(_templateObject7()),
  function(props) {
    return "linear-gradient("
      .concat(props.deg.small, ", ")
      .concat(props.stops.join(","), ")");
  },
  mediumAndUp(_templateObject8(), function(props) {
    return "linear-gradient("
      .concat(props.deg.medium, ", ")
      .concat(props.stops.join(","), ")");
  }),
  largeAndUp(_templateObject9(), function(props) {
    return "linear-gradient("
      .concat(props.deg.large, ", ")
      .concat(props.stops.join(","), ")");
  })
);
var SpotLightWrapper = styled.div.withConfig({
  displayName: "Gradient__SpotLightWrapper",
  componentId: "h1gc6-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;"]);

var Gradient =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Gradient, _PureComponent);

    function Gradient() {
      _classCallCheck(this, Gradient);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Gradient).apply(this, arguments)
      );
    }

    _createClass(Gradient, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            src = _this$props.src,
            children = _this$props.children,
            className = _this$props.className,
            stops = _this$props.stops,
            deg = _this$props.deg,
            imageRef = _this$props.imageRef,
            backgroundRef = _this$props.backgroundRef,
            props = _objectWithoutProperties(_this$props, [
              "src",
              "children",
              "className",
              "stops",
              "deg",
              "imageRef",
              "backgroundRef"
            ]);

          var hasSpotLight = className.includes("gradient--spotlight");
          var gradientStops = hasSpotLight ? SPOTLIGHT_STOPS : stops;
          var gradientDeg = hasSpotLight ? SPOTLIGHT_DEG : deg;
          return React.createElement(
            GradientStyles,
            _extends({}, props, {
              stops: gradientStops,
              deg: gradientDeg,
              className: className,
              ref: backgroundRef
            }),
            src &&
              imageRef &&
              React.createElement(StyledImageSeo, {
                src: src,
                ref: imageRef
              }),
            hasSpotLight &&
              React.createElement(
                SpotLightWrapper,
                null,
                React.createElement(SpotLight$1, null),
                React.createElement(Angle$1, null)
              ),
            children
          );
        }
      }
    ]);

    return Gradient;
  })(PureComponent);

Gradient.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  deg: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
  }),
  stops: PropTypes.arrayOf(PropTypes.string),
  imageRef: PropTypes.shape({
    current: PropTypes.object
  }),
  backgroundRef: PropTypes.shape({
    current: PropTypes.object
  }),
  src: PropTypes.string
};
Gradient.defaultProps = {
  children: null,
  className: "",
  deg: {
    small: "76deg",
    medium: "80deg",
    large: "81deg"
  },
  stops: [colors.defaultGradient.from, colors.defaultGradient.to],
  imageRef: {
    current: null
  },
  backgroundRef: {
    current: null
  },
  src: ""
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral([
    "\n    margin-left: ",
    "px;\n    margin-right: ",
    "px;\n  "
  ]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1l8q06l-0"
})(
  [
    "display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;box-sizing:border-box;margin-left:",
    "px;margin-right:",
    "px;",
    ";.row--gutterless{flex:0 1 100%;margin-left:0;margin-right:0;}"
  ],
  (spacing.gutters.small / 2) * -1,
  (spacing.gutters.small / 2) * -1,
  mediumAndUp(
    _templateObject$6(),
    (spacing.gutters.mediumAndUp / 2) * -1,
    (spacing.gutters.mediumAndUp / 2) * -1
  )
);
Row.displayName = "Row";

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    min-height: 218px;\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    min-height: 140px;\n  "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderStyles = styled.header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "qifgyx-0"
})(["width:100%;display:flex;position:relative;"]);
var HeaderGradient = styled(Gradient).withConfig({
  displayName: "Header__HeaderGradient",
  componentId: "qifgyx-1"
})(
  [
    "display:flex;position:relative;align-items:flex-end;min-height:122px;z-index:1;",
    " ",
    ";"
  ],
  smallAndUp(_templateObject$7()),
  mediumAndUp(_templateObject2$3())
);
var HeaderContainer = styled(Container$2).withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "qifgyx-2"
})(["padding-top:60px;z-index:2;"]);

var Header = function Header(_ref) {
  var deg = _ref.deg,
    stops = _ref.stops,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    withOverlay = _ref.withOverlay,
    withSpotLight = _ref.withSpotLight;
  return React.createElement(
    HeaderStyles,
    {
      role: "heading",
      "aria-level": "1"
    },
    React.createElement(
      HeaderGradient,
      {
        tagName: "header",
        deg: deg,
        stops: stops,
        style: style,
        className: classNames(
          {
            "gradient--overlay": withOverlay,
            "gradient--spotlight": withSpotLight
          },
          className
        )
      },
      React.createElement(
        HeaderContainer,
        null,
        React.createElement(Row, null, children)
      )
    )
  );
};

Header.propTypes = _objectSpread({}, Gradient.propTypes, {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  withOverlay: PropTypes.bool,
  withSpotLight: PropTypes.bool
});
Header.defaultProps = {
  className: null,
  style: {},
  withOverlay: false,
  withSpotLight: false
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n      padding-top: 60px;\n    "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var GradientBackground = styled(Gradient).withConfig({
  displayName: "WithImage__GradientBackground",
  componentId: "rx5jg1-0"
})([
  "position:absolute;top:0;left:0;right:0;z-index:1;min-height:218px;max-height:218px;"
]);
var ImageBackground = styled(GradientBackground).withConfig({
  displayName: "WithImage__ImageBackground",
  componentId: "rx5jg1-1"
})(["background-size:cover;background-repeat:no-repeat;"]);
var Wrapper = styled.header.withConfig({
  displayName: "WithImage__Wrapper",
  componentId: "rx5jg1-2"
})(["width:100%;position:relative;"]);
var ContainerWrapper = styled(Container$2).withConfig({
  displayName: "WithImage__ContainerWrapper",
  componentId: "rx5jg1-3"
})(["padding-top:60px;z-index:2;"]);
var ContainerRow = styled(Row).withConfig({
  displayName: "WithImage__ContainerRow",
  componentId: "rx5jg1-4"
})(["align-items:center;position:relative;z-index:2;"]);
var ImageWrapper = styled.div.withConfig({
  displayName: "WithImage__ImageWrapper",
  componentId: "rx5jg1-5"
})(["", ";"], mediumAndUp(_templateObject$8()));

var ImageHeader = function ImageHeader(_ref) {
  var children = _ref.children,
    stops = _ref.stops,
    deg = _ref.deg,
    backgroundImage = _ref.backgroundImage,
    backgroundImageProps = _ref.backgroundImageProps,
    withOverlay = _ref.withOverlay,
    withUnderlay = _ref.withUnderlay,
    withSpotLight = _ref.withSpotLight,
    props = _objectWithoutProperties(_ref, [
      "children",
      "stops",
      "deg",
      "backgroundImage",
      "backgroundImageProps",
      "withOverlay",
      "withUnderlay",
      "withSpotLight"
    ]);

  var _backgroundImageProps = backgroundImageProps.style,
    backgroundImageStyle =
      _backgroundImageProps === void 0 ? {} : _backgroundImageProps,
    imageRef = backgroundImageProps.imageRef,
    backgroundRef = backgroundImageProps.backgroundRef,
    otherBackgroundImageProps = _objectWithoutProperties(backgroundImageProps, [
      "style",
      "imageRef",
      "backgroundRef"
    ]);

  return React.createElement(
    Wrapper,
    _extends({}, props, {
      role: "heading",
      "aria-level": "1"
    }),
    backgroundImage
      ? React.createElement(
          ImageBackground,
          _extends(
            {
              style: _objectSpread({}, backgroundImageStyle, {
                backgroundImage: "url(".concat(backgroundImage, ")")
              }),
              src: backgroundImage,
              imageRef: imageRef,
              backgroundRef: backgroundRef
            },
            otherBackgroundImageProps,
            {
              className: classNames({
                "gradient--overlay": !withSpotLight && withOverlay,
                "gradient--underlay": withUnderlay,
                "gradient--spotlight": withSpotLight
              }),
              "aria-hidden": true
            }
          )
        )
      : React.createElement(GradientBackground, {
          stops: stops,
          deg: deg,
          className: classNames({
            "gradient--overlay": !withSpotLight && withOverlay,
            "gradient--underlay": !withSpotLight && withUnderlay,
            "gradient--spotlight": withSpotLight
          }),
          style: backgroundImageStyle
        }),
    React.createElement(
      ContainerWrapper,
      null,
      React.createElement(ContainerRow, null, children)
    )
  );
};

ImageHeader.propTypes = _objectSpread({}, Gradient.propTypes, {
  backgroundImage: PropTypes.string,
  backgroundImageProps: PropTypes.objectOf(PropTypes.any),
  withOverlay: PropTypes.bool,
  withUnderlay: PropTypes.bool,
  withSpotLight: PropTypes.bool
});
ImageHeader.defaultProps = {
  backgroundImage: null,
  backgroundImageProps: {},
  withOverlay: false,
  withUnderlay: false,
  withSpotLight: false
};
ImageHeader.ImageWrapper = ImageWrapper;

var Span = styled.span.withConfig({
  displayName: "Heading__Span",
  componentId: "f34eb5-0"
})(["font-weight:", ";"], typography.weight.light);
var Strong = styled(Span).withConfig({
  displayName: "Heading__Strong",
  componentId: "f34eb5-1"
})(["font-weight:", ";"], typography.weight.extraBold);
var Margins = styled.span.withConfig({
  displayName: "Heading__Margins",
  componentId: "f34eb5-2"
})(
  [
    "",
    ";margin-top:0;margin-bottom:0;padding-bottom:",
    ";line-height:",
    ";color:",
    ";font-weight:",
    ";",
    ";"
  ],
  function(_ref) {
    var monospace = _ref.monospace;
    return monospace ? 'font-feature-settings: "tnum"' : "";
  },
  spacing.cozy,
  function(_ref2) {
    var lineHeight = _ref2.lineHeight;
    return typography.lineHeight[lineHeight];
  },
  function(p) {
    return p.color ? p.color : colors.white.base;
  },
  function(_ref3) {
    var weight = _ref3.weight;
    return typography.weight[weight];
  },
  function(_ref4) {
    var size = _ref4.size;
    return responsiveSizeMixin(size);
  }
);
var levels = ["h1", "h2", "h3", "h4", "h5"];

var Heading = function Heading(_ref5) {
  var level = _ref5.level,
    size = _ref5.size,
    responsiveSize = _ref5.responsiveSize,
    children = _ref5.children,
    props = _objectWithoutProperties(_ref5, [
      "level",
      "size",
      "responsiveSize",
      "children"
    ]);

  var tag = levels[level - 1];
  return React.createElement(
    Margins,
    _extends({}, props, {
      as: tag,
      size: getResponsiveSize({
        size: size,
        responsiveSize: {
          small: responsiveSize.small || size || "tera",
          medium:
            responsiveSize.medium || responsiveSize.small || size || "zetta",
          large:
            responsiveSize.large ||
            responsiveSize.medium ||
            responsiveSize.small ||
            size ||
            "bronto"
        }
      })
    }),
    children
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  size: PropTypes.oneOf(Object.keys(typography.size)),
  responsiveSize: PropTypes.shape({
    small: PropTypes.oneOf(Object.keys(typography.size)),
    medium: PropTypes.oneOf(Object.keys(typography.size)),
    large: PropTypes.oneOf(Object.keys(typography.size))
  }),
  weight: PropTypes.oneOf(["light", "regular", "extraBold"]),
  lineHeight: PropTypes.oneOf(Object.keys(typography.lineHeight)),
  monospace: PropTypes.bool,
  children: PropTypes.node
};
Heading.defaultProps = {
  level: 2,
  size: null,
  responsiveSize: {},
  lineHeight: "header",
  weight: "regular",
  monospace: false,
  children: null
};
Heading.Span = Span; // NOTE: deprecated

Heading.Strong = Strong; // NOTE: deprecated

Heading.displayName = "Heading";

var CardWithoutPadding = styled(Card).withConfig({
  displayName: "ImageCard__CardWithoutPadding",
  componentId: "c7avku-0"
})(["padding:0;"]);
var Image = styled.img.withConfig({
  displayName: "ImageCard__Image",
  componentId: "c7avku-1"
})(["width:100%;max-width:100%;flex:none;"]); //  come back

var Overlay = styled.div.withConfig({
  displayName: "ImageCard__Overlay",
  componentId: "c7avku-2"
})([
  "position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-end;"
]);
var CaptionContainer = styled.div.withConfig({
  displayName: "ImageCard__CaptionContainer",
  componentId: "c7avku-3"
})(
  [
    "position:relative;color:",
    ";background-color:",
    ";border-radius:",
    ";padding:",
    " ",
    ";margin-left:",
    ";margin-bottom:",
    ";font-style:",
    ";font-stretch:",
    ";line-height:",
    ";letter-spacing:",
    ";"
  ],
  colors.white.base,
  function(props) {
    return props.half ? "none" : "rgba(31, 38, 45, 0.8)";
  },
  constants.borderRadius.large,
  spacing.slim,
  spacing.cozy,
  spacing.cozy,
  spacing.cozy,
  function(props) {
    return props.half ? "normal" : "inherit";
  },
  function(props) {
    return props.half ? "normal" : "inherit";
  },
  function(props) {
    return props.half ? "normal" : "inherit";
  },
  function(props) {
    return props.half ? "normal" : "inherit";
  }
);
var HalfCard = styled(CardWithoutPadding).withConfig({
  displayName: "ImageCard__HalfCard",
  componentId: "c7avku-4"
})(["width:50%;"]);
var Title = styled.span.withConfig({
  displayName: "ImageCard__Title",
  componentId: "c7avku-5"
})(
  [
    "display:block;width:100%;font-size:",
    ";font-weight:",
    ";> .image-card__title--half > span{font-size:",
    ";color:",
    ";}"
  ],
  typography.size.kilo,
  typography.weight.semiBold,
  typography.size.hecto,
  colors.azure.base
);
var SubTitle = styled.span.withConfig({
  displayName: "ImageCard__SubTitle",
  componentId: "c7avku-6"
})(
  [
    "font-size:",
    ";font-weight:",
    ";> .image-card__subtitle--half > span{color:",
    ';letter-spacing:"normal";}'
  ],
  typography.size.hecto,
  typography.weight.regular,
  colors.blackPearl
);
var Container$3 = styled.div.withConfig({
  displayName: "ImageCard__Container",
  componentId: "c7avku-7"
})(["display:flex;flex-direction:column;position:relative;"]);
var RowContainer = styled(Container$3).withConfig({
  displayName: "ImageCard__RowContainer",
  componentId: "c7avku-8"
})(["flex-direction:row;align-items:center;"]);

var ImageCard = function ImageCard(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    title = _ref.title,
    type = _ref.type,
    cardTitle = _ref.cardTitle,
    cardSubtitle = _ref.cardSubtitle,
    overlayProps = _ref.overlayProps,
    containerProps = _ref.containerProps,
    captionContainerProps = _ref.captionContainerProps,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "src",
      "alt",
      "title",
      "type",
      "cardTitle",
      "cardSubtitle",
      "overlayProps",
      "containerProps",
      "captionContainerProps",
      "children"
    ]);

  var titleToShow = cardTitle;
  var subtitleToShow = cardSubtitle;
  var childrenToShow = children;

  if (!cardTitle && !cardSubtitle) {
    var _Children$toArray = Children.toArray(children || []);

    var _Children$toArray2 = _toArray(_Children$toArray);

    titleToShow = _Children$toArray2[0];
    subtitleToShow = _Children$toArray2[1];
    childrenToShow = _Children$toArray2.slice(2);
  }

  var img =
    props.image ||
    React.createElement(Image, {
      src: src,
      alt: alt,
      title: title
    });

  if (type === "half") {
    return React.createElement(
      RowContainer,
      props,
      React.createElement(HalfCard, null, img),
      React.createElement(
        CaptionContainer,
        _extends({}, captionContainerProps, {
          half: true
        }),
        React.createElement(
          Title,
          null,
          React.createElement(
            TextBase,
            {
              className: "image-card__title--half"
            },
            titleToShow
          )
        ),
        React.createElement(
          SubTitle,
          {
            half: true
          },
          React.createElement(
            TextBase,
            {
              className: "image-card__subtitle--half"
            },
            subtitleToShow
          )
        )
      )
    );
  }

  return React.createElement(
    CardWithoutPadding,
    props,
    React.createElement(
      Container$3,
      containerProps,
      img,
      React.createElement(
        Overlay,
        overlayProps,
        (titleToShow || subtitleToShow) &&
          React.createElement(
            CaptionContainer,
            captionContainerProps,
            titleToShow,
            subtitleToShow
          )
      )
    ),
    childrenToShow
  );
};

ImageCard.propTypes = {
  type: PropTypes.oneOf(["full", "half"]),
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.element,
  cardTitle: PropTypes.element,
  cardSubtitle: PropTypes.element,
  overlayProps: PropTypes.shape({}),
  containerProps: PropTypes.shape({}),
  captionContainerProps: PropTypes.shape({}),
  children: PropTypes.node
};
ImageCard.defaultProps = {
  type: "full",
  alt: "",
  title: "",
  src: "",
  image: null,
  cardTitle: null,
  cardSubtitle: null,
  overlayProps: {},
  containerProps: {},
  captionContainerProps: {},
  children: null
};
ImageCard.Title = Title;
ImageCard.SubTitle = SubTitle;

var _variantsIcons;
var variants = ["error", "success", "alert", "info"];
var variantsIcons = ((_variantsIcons = {}),
_defineProperty(_variantsIcons, variants[0], ErrorIcon),
_defineProperty(_variantsIcons, variants[1], SuccessIcon),
_defineProperty(_variantsIcons, variants[2], AlertIcon),
_defineProperty(_variantsIcons, variants[3], InfoIcon),
_variantsIcons);

var Link$1 = styled(LinkCta).withConfig({
  displayName: "Bannerstyles__Link",
  componentId: "d0w563-0"
})(["color:#0064e6;padding-left:4px;&:visited{color:#0064e6;}"]);
var Container$4 = styled.div.withConfig({
  displayName: "Bannerstyles__Container",
  componentId: "d0w563-1"
})(
  [
    "padding:",
    ";position:relative;border:1px solid ",
    ";border-radius:",
    ";display:flex;overflow:hidden;max-height:500px;transition:max-height 0.3s ",
    ",opacity 0.3s ",
    ";background-color:",
    ";box-sizing:border-box;opacity:0;&.visible-banner{transition:max-height 0.3s ",
    ",opacity 0.3s ",
    ";opacity:1;}&.collapsed{max-height:56px;}&.banner-variant-error{background-color:",
    ";border-color:",
    ";}&.banner-variant-success{background-color:",
    ";border-color:",
    ";}&.banner-variant-alert{background-color:rgba(242,189,42,0.2);border-color:",
    ";}&.banner-variant-info{background-color:rgba(2,108,223,0.1);border-color:",
    ";}"
  ],
  spacing.moderate,
  getThemeValue("onyx", "muted"),
  constants.borderRadius.large,
  constants.easing.easeInOutQuad,
  constants.easing.easeInQuad,
  getThemeValue("white", "muted"),
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("error", "light"),
  getThemeValue("error", "base"),
  getThemeValue("success", "light"),
  getThemeValue("success", "base"),
  getThemeValue("caution", "base"),
  getThemeValue("primary", "base")
);
var ContentSection = styled.div.withConfig({
  displayName: "Bannerstyles__ContentSection",
  componentId: "d0w563-2"
})(["font-family:Averta,Courier,monospace;"]);
var Content = styled(TextBase).withConfig({
  displayName: "Bannerstyles__Content",
  componentId: "d0w563-3"
})(
  [
    "padding-top:12px;opacity:1;transition:opacity 0.3s ",
    " 0.1s;line-height:1.29;.collapsed &{transition:opacity 0.1s ",
    ";opacity:0;}"
  ],
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad
);
var CloseButton$1 = styled.button.withConfig({
  displayName: "Bannerstyles__CloseButton",
  componentId: "d0w563-4"
})(
  [
    "background-color:transparent;border:none;padding:0;cursor:pointer;position:absolute;top:6px;right:7px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;&:active{transform:scale(0.98,0.98) translate(0,1px);}&:focus{outline:none;box-shadow:0 0 5px 0 ",
    ";border-radius:1px;}"
  ],
  getThemeValue("primary", "base")
);
var CloseIcon$1 = styled(CloseIcon)
  .attrs({
    color: "currentColor"
  })
  .withConfig({
    displayName: "Bannerstyles__CloseIcon",
    componentId: "d0w563-5"
  })(["color:", ";"], getThemeValue("onyx", "muted"));
var IconSection = styled.div.withConfig({
  displayName: "Bannerstyles__IconSection",
  componentId: "d0w563-6"
})(["padding-right:", ";"], spacing.moderate);

var Banner =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Banner, _Component);

    function Banner() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Banner);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Banner)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isExpanded: _this.props.isExpanded
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleContent",
        function() {
          var onButtonClick = _this.props.onButtonClick;

          _this.setState(function(_ref) {
            var isExpanded = _ref.isExpanded;
            return {
              isExpanded: !isExpanded
            };
          });

          if (onButtonClick) {
            onButtonClick();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderControl",
        function() {
          var _this$props = _this.props,
            href = _this$props.href,
            linkText = _this$props.linkText,
            expandedText = _this$props.expandedText,
            collapsedText = _this$props.collapsedText,
            linkProps = _this$props.linkProps,
            buttonProps = _this$props.buttonProps;
          var isExpanded = _this.state.isExpanded;

          if (!linkText && !expandedText && !collapsedText) {
            return null;
          }

          var props = href
            ? _objectSpread({}, linkProps, {
                href: href
              })
            : _objectSpread({}, buttonProps, {
                onClick: _this.toggleContent
              });
          var text = linkText || (isExpanded ? expandedText : collapsedText);
          return React.createElement(
            Link$1,
            _extends(
              {
                size: "hecto"
              },
              props
            ),
            text
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderCloseButton",
        function() {
          var _this$props2 = _this.props,
            onRequestClose = _this$props2.onRequestClose,
            closeButtonTitleText = _this$props2.closeButtonTitleText;

          if (!onRequestClose) {
            return null;
          }

          return React.createElement(
            CloseButton$1,
            {
              onClick: onRequestClose
            },
            React.createElement(
              CloseIcon$1,
              {
                size: "small"
              },
              React.createElement("title", null, closeButtonTitleText)
            )
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderIcon",
        function() {
          var _this$props3 = _this.props,
            variant = _this$props3.variant,
            icon = _this$props3.icon;

          if (!variant && !icon) {
            return null;
          }

          var Icon = variantsIcons[variant];
          return (
            icon ||
            React.createElement(Icon, {
              type: "filled",
              size: "regular"
            })
          );
        }
      );

      return _this;
    }

    _createClass(Banner, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props4 = this.props,
            isOpen = _this$props4.isOpen,
            heading = _this$props4.heading,
            content = _this$props4.content,
            variant = _this$props4.variant,
            style = _this$props4.style;
          var isExpanded = this.state.isExpanded;
          return React.createElement(
            Transition,
            {
              in: isOpen,
              timeout: isOpen ? 0 : 300, // allows to animate fade in after render correctly
              mountOnEnter: true,
              unmountOnExit: true
            },
            function(state) {
              var _classnames;

              return React.createElement(
                Container$4,
                {
                  className: classNames(
                    ((_classnames = {
                      collapsed: !isExpanded
                    }),
                    _defineProperty(
                      _classnames,
                      "banner-variant-".concat(variant),
                      variant
                    ),
                    _defineProperty(
                      _classnames,
                      "visible-banner",
                      state === "entered"
                    ),
                    _classnames)
                  ),
                  style: _objectSpread({}, style)
                },
                React.createElement(IconSection, null, _this2.renderIcon()),
                React.createElement(
                  ContentSection,
                  null,
                  React.createElement(
                    TextBase,
                    {
                      tag: "span",
                      weight: "semiBold"
                    },
                    heading
                  ),
                  _this2.renderControl(),
                  React.createElement(Content, null, content)
                ),
                _this2.renderCloseButton()
              );
            }
          );
        }
      }
    ]);

    return Banner;
  })(Component);

_defineProperty(Banner, "propTypes", {
  isExpanded: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  href: PropTypes.string,
  linkText: PropTypes.string,
  expandedText: PropTypes.string,
  collapsedText: PropTypes.string,
  onButtonClick: PropTypes.func,
  onRequestClose: PropTypes.func,
  linkProps: PropTypes.shape(),
  buttonProps: PropTypes.shape(),
  style: PropTypes.shape(),
  variant: PropTypes.oneOf(variants),
  icon: PropTypes.node,
  closeButtonTitleText: PropTypes.string
});

_defineProperty(Banner, "defaultProps", {
  isExpanded: false,
  content: "",
  href: "",
  linkText: "",
  expandedText: "",
  collapsedText: "",
  onButtonClick: null,
  onRequestClose: null,
  linkProps: {},
  buttonProps: {},
  style: {},
  variant: null,
  icon: null,
  closeButtonTitleText: "Close banner"
});

var _variantsIcons$1;
var variants$1 = ["error", "success", "alert"];
var variantsIcons$1 = ((_variantsIcons$1 = {}),
_defineProperty(_variantsIcons$1, variants$1[0], ErrorIcon),
_defineProperty(_variantsIcons$1, variants$1[1], SuccessIcon),
_defineProperty(_variantsIcons$1, variants$1[2], AlertIcon),
_variantsIcons$1);

var Link$2 = styled(LinkCta).withConfig({
  displayName: "FeedbackInlinestyles__Link",
  componentId: "sc-1cnecgr-0"
})(["color:", ";"], getThemeValue("primary", "base"));
var Container$5 = styled.div.withConfig({
  displayName: "FeedbackInlinestyles__Container",
  componentId: "sc-1cnecgr-1"
})(
  [
    "position:relative;display:inline-flex;overflow:hidden;max-height:500px;transition:max-height 0.3s ",
    ";box-sizing:border-box;&.collapsed{max-height:38px;}"
  ],
  constants.easing.easeInOutQuad
);
var ContentSection$1 = styled.div.withConfig({
  displayName: "FeedbackInlinestyles__ContentSection",
  componentId: "sc-1cnecgr-2"
})(["font-family:Averta,Courier,monospace;"]);
var Content$1 = styled(TextBase).withConfig({
  displayName: "FeedbackInlinestyles__Content",
  componentId: "sc-1cnecgr-3"
})(
  [
    "padding-top:",
    ";opacity:1;transition:opacity 0.3s ",
    " 0.1s;line-height:",
    ";.collapsed &{transition:opacity 0.1s ",
    ";opacity:0;}"
  ],
  spacing.cozy,
  constants.easing.easeInOutQuad,
  typography.lineHeight.header,
  constants.easing.easeInOutQuad
);
var IconSection$1 = styled.div.withConfig({
  displayName: "FeedbackInlinestyles__IconSection",
  componentId: "sc-1cnecgr-4"
})(["padding:", " ", " 0 0;"], spacing.cozy, spacing.cozy);
var Heading$1 = styled(TextBase).withConfig({
  displayName: "FeedbackInlinestyles__Heading",
  componentId: "sc-1cnecgr-5"
})(["line-height:", ";"], typography.lineHeight.header);

function contentValidator(props, propName, componentName) {
  // if content prop is provided collapsedText and expandedText should be provided as well
  if (
    props[propName] &&
    typeof props[propName] === "string" &&
    (!props.collapsedText || !props.expandedText)
  ) {
    return new Error(
      ""
        .concat(propName, " is supplied to ")
        .concat(
          componentName,
          " but collapsedText or expandedText props or both are not supplied"
        )
    );
  }

  if (
    typeof props[propName] === "string" ||
    typeof props[propName] === "undefined"
  ) {
    return null;
  }

  return new Error(
    "Invalid prop `"
      .concat(propName, "` supplied to `")
      .concat(componentName, "`, expected `string`")
  );
}

var FeedbackInline =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(FeedbackInline, _Component);

    function FeedbackInline() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, FeedbackInline);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(FeedbackInline)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isExpanded: _this.props.isExpanded
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleContent",
        function() {
          var onButtonClick = _this.props.onButtonClick;

          _this.setState(function(_ref) {
            var isExpanded = _ref.isExpanded;
            return {
              isExpanded: !isExpanded
            };
          });

          if (onButtonClick) {
            onButtonClick();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderControl",
        function() {
          var _this$props = _this.props,
            expandedText = _this$props.expandedText,
            collapsedText = _this$props.collapsedText,
            buttonProps = _this$props.buttonProps;
          var isExpanded = _this.state.isExpanded;
          return React.createElement(
            Link$2,
            _extends(
              {
                size: "hecto",
                onClick: _this.toggleContent
              },
              buttonProps
            ),
            isExpanded ? expandedText : collapsedText
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderIcon",
        function() {
          var _this$props2 = _this.props,
            variant = _this$props2.variant,
            icon = _this$props2.icon;

          if (!variant && !icon) {
            return null;
          }

          var Icon = variantsIcons$1[variant];
          return (
            icon ||
            React.createElement(Icon, {
              type: "filled",
              size: "regular"
            })
          );
        }
      );

      return _this;
    }

    _createClass(FeedbackInline, [
      {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
            heading = _this$props3.heading,
            content = _this$props3.content,
            variant = _this$props3.variant,
            style = _this$props3.style;
          var isExpanded = this.state.isExpanded;
          return React.createElement(
            Container$5,
            {
              className: classNames(
                _defineProperty(
                  {
                    collapsed: !isExpanded
                  },
                  "banner-variant--".concat(variant),
                  variant
                )
              ),
              style: _objectSpread({}, style)
            },
            React.createElement(IconSection$1, null, this.renderIcon()),
            React.createElement(
              ContentSection$1,
              null,
              React.createElement(
                Heading$1,
                {
                  tag: "div",
                  weight: "semiBold"
                },
                heading
              ),
              this.renderControl(),
              React.createElement(Content$1, null, content)
            )
          );
        }
      }
    ]);

    return FeedbackInline;
  })(Component);

_defineProperty(FeedbackInline, "propTypes", {
  heading: PropTypes.string.isRequired,
  content: contentValidator,
  isExpanded: PropTypes.bool,
  expandedText: PropTypes.string,
  collapsedText: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonProps: PropTypes.shape(),
  style: PropTypes.shape(),
  variant: PropTypes.oneOf(variants$1),
  icon: PropTypes.node
});

_defineProperty(FeedbackInline, "defaultProps", {
  isExpanded: false,
  content: "",
  expandedText: "",
  collapsedText: "",
  onButtonClick: null,
  buttonProps: {},
  style: {},
  variant: null,
  icon: null
});

var _React$createContext$1 = React.createContext(),
  Provider$1 = _React$createContext$1.Provider,
  Consumer$1 = _React$createContext$1.Consumer;

var _React$createContext$2 = React.createContext({
    isSmall: true
  }),
  Provider$2 = _React$createContext$2.Provider,
  Consumer$2 = _React$createContext$2.Consumer;
var withDeviceSize = function withDeviceSize(Component$$1) {
  return function(props) {
    return React.createElement(Consumer$2, null, function(value) {
      return React.createElement(
        Component$$1,
        _extends(
          {
            deviceSize: value
          },
          props
        )
      );
    });
  };
};

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledVisibility = styled.div.withConfig({
  displayName: "DeviceSize__StyledVisibility",
  componentId: "p0uh9r-0"
})(
  ["display:", ";", ";", ";", ";"],
  function(props) {
    return props.small ? props.display : "none";
  },
  mediumAndUp(_templateObject$9(), function(props) {
    return props.medium ? props.display : "none";
  }),
  largeAndUp(_templateObject2$4(), function(props) {
    return props.large ? props.display : "none";
  }),
  xLargeAndUp(_templateObject3$3(), function(props) {
    return props.xLarge ? props.display : "none";
  })
);

var DisplayFor =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DisplayFor, _React$Component);

    function DisplayFor() {
      _classCallCheck(this, DisplayFor);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(DisplayFor).apply(this, arguments)
      );
    }

    _createClass(DisplayFor, [
      {
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props = this.props,
            small = _this$props.small,
            medium = _this$props.medium,
            large = _this$props.large,
            xLarge = _this$props.xLarge,
            children = _this$props.children;
          return React.createElement(Consumer$2, null, function(val) {
            /* istanbul ignore next */
            if (val.cssOnly) {
              return React.createElement(StyledVisibility, _this.props);
            }
            /* istanbul ignore next */

            if (val.isSmall && small) return children;
            /* istanbul ignore next */

            if (val.isMedium && medium) return children;
            /* istanbul ignore next */

            if (val.isLarge && large) return children;
            /* istanbul ignore next */

            if (val.isXLarge && xLarge) return children;
            /* istanbul ignore next */

            return null;
          });
        }
      }
    ]);

    return DisplayFor;
  })(React.Component);

_defineProperty(DisplayFor, "propTypes", {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xLarge: PropTypes.bool,
  display: PropTypes.oneOf(["block", "inline-block", "flex"]),
  children: PropTypes.node,
  className: PropTypes.string
});

_defineProperty(DisplayFor, "defaultProps", {
  display: "block",
  small: false,
  medium: false,
  large: false,
  xLarge: false,
  children: null,
  className: null
});

var _React$createContext$3 = React.createContext(),
  Provider$3 = _React$createContext$3.Provider,
  Consumer$3 = _React$createContext$3.Consumer;

var KEYCODES = {
  ESCAPE: 27
};
var Overlay$1 = styled.div
  .attrs({
    className: "container--overlay"
  })
  .withConfig({
    displayName: "Backdrop__Overlay",
    componentId: "y5ndp6-0"
  })([
  "height:100%;width:100%;position:fixed;left:0;top:0;background-color:rgba(0,0,0,0.75);z-index:4;display:flex;justify-content:center;align-items:center;"
]);

var Backdrop =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Backdrop, _Component);

    function Backdrop() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Backdrop);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Backdrop)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          childRef: React.createRef()
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onKeyPress",
        function(event) {
          if (event.keyCode === KEYCODES.ESCAPE) {
            _this.onCloseRequest();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleOutsideClick",
        function(e) {
          var childRef = _this.state.childRef;

          if (childRef && childRef.current) {
            if (!childRef.current.contains(e.target)) {
              if (_this.onCloseRequest) {
                _this.onCloseRequest();
              }
            }
          } else {
            _this.onCloseRequest();
          }
        }
      );

      return _this;
    }

    _createClass(Backdrop, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("click", this.handleOutsideClick, false);
          document.addEventListener("keydown", this.onKeyPress, false);
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("click", this.handleOutsideClick, false);
          document.removeEventListener("keydown", this.onKeyPress, false);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            rest = _objectWithoutProperties(_this$props, ["children"]);

          return React.createElement(Consumer$1, null, function(value) {
            _this2.onCloseRequest = value
              ? value.onCloseRequest
              : function() {};
            return React.createElement(
              Overlay$1,
              _extends(
                {
                  onClick: _this2.handleOutsideClick
                },
                rest
              ),
              children &&
                React.createElement(
                  Provider$3,
                  {
                    value: _this2.state
                  },
                  children
                )
            );
          });
        }
      }
    ]);

    return Backdrop;
  })(Component);

Backdrop.defaultProps = {
  children: null
};
Backdrop.propTypes = {
  children: PropTypes.node
};

var badgeProps = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};
var badgeDefault = {
  color: themes.global.primary.base
};

var StyledBadge$1 = styled.div.withConfig({
  displayName: "StatusBadge__StyledBadge",
  componentId: "sc-5vd09v-0"
})(
  [
    "padding:",
    " ",
    ";font-weight:",
    ";text-align:center;color:",
    ";font-size:",
    ";line-height:1.2;border-radius:",
    ";letter-spacing:0.25;text-transform:uppercase;background-color:",
    ";"
  ],
  spacing.slim,
  spacing.cozy,
  typography.weight.semiBold,
  function(_ref) {
    var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? DARK : _ref$variant;
    return variant === LIGHT ? themes.global.gray01 : themes.global.white.base;
  },
  typography.size.mini,
  constants.borderRadius.small,
  function(_ref2) {
    var color = _ref2.color;
    return color;
  }
);

var StatusBadge = function StatusBadge(_ref3) {
  var variant = _ref3.variant,
    color = _ref3.color,
    label = _ref3.label,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, [
      "variant",
      "color",
      "label",
      "className"
    ]);

  return React.createElement(
    StyledBadge$1,
    _extends(
      {
        className: classNames(className, "badge"),
        variant: variant,
        color: color
      },
      rest
    ),
    label
  );
};

StatusBadge.propTypes = _objectSpread({}, badgeProps, {
  variant: PropTypes.oneOf(VARIANTS),
  className: PropTypes.string
});
StatusBadge.defaultProps = _objectSpread({}, badgeDefault, {
  variant: DARK,
  className: ""
});
StatusBadge.displayName = "StatusBadge";

var StyledTooltip = styled.div.withConfig({
  displayName: "Tooltipstyles__StyledTooltip",
  componentId: "sc-7r1g1c-0"
})(
  [
    "background-color:",
    ";border:",
    ";border-radius:",
    ";box-shadow:",
    ";position:absolute;max-width:260px;color:",
    ";padding:",
    ";display:",
    ";font-size:",
    ";transition:opacity 0.1s ",
    ",transform 0.1s ",
    ';:before{content:"";position:absolute;transition:opacity 0.1s ',
    ",scale 0.1s ",
    ";display:",
    ";border-right:",
    ";border-bottom:",
    ";border-top-left-radius:100%;width:12px;height:12px;transform:translateY(-50%) rotate(-135deg);background-color:",
    ";",
    ";}&.open-enter,&.open-enter:before{transition:opacity 0.3s ",
    ";display:block;opacity:0;}&.open-enter{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";transform:scale(0.7);}&.open-enter-active,&.open-enter-active:before{transition:opacity 0.3s ",
    ";display:block;opacity:1;}&.open-enter-active{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";transform:scale(1);}&.open-enter-done,&.open-enter-active:before{transition:opacity 0.3s ",
    ";display:block;opacity:1;}&.open-enter-done{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";transform:scale(1);}&.open-exit,&.open-exit:before{display:block;opacity:1;}&.open-exit{transform:scale(1);}&.open-exit-active,&.open-exit-active:before{display:block;opacity:0;}&.open-exit-active{transform:scale(0.7);}"
  ],
  function(_ref) {
    var variant = _ref.variant;
    return variant === DARK ? themes.global.darkFill : themes.global.white.base;
  },
  function(_ref2) {
    var variant = _ref2.variant;
    return variant === DARK
      ? "1px solid ".concat(themes.global.darkFill)
      : "1px solid ".concat(themes.global.gray02);
  },
  constants.borderRadius.large,
  popContainersBoxShadow,
  function(_ref3) {
    var variant = _ref3.variant;
    return variant === DARK ? themes.global.white.base : themes.global.gray01;
  },
  spacing.cozy,
  function(_ref4) {
    var isVisible = _ref4.isVisible;
    return isVisible ? "block" : "none";
  },
  typography.size.uno,
  constants.easing.easeInQuad,
  constants.easing.easeInQuad,
  constants.easing.easeInQuad,
  constants.easing.easeInQuad,
  function(_ref5) {
    var isVisible = _ref5.isVisible;
    return isVisible ? "inline-block" : "none";
  },
  function(_ref6) {
    var variant = _ref6.variant;
    return variant === LIGHT ? "1px solid ".concat(themes.global.gray02) : "";
  },
  function(_ref7) {
    var variant = _ref7.variant;
    return variant === LIGHT ? "1px solid ".concat(themes.global.gray02) : "";
  },
  function(_ref8) {
    var variant = _ref8.variant;
    return variant === DARK ? themes.global.darkFill : themes.global.white.base;
  },
  function(_ref9) {
    var direction = _ref9.direction;

    switch (direction) {
      case TOP:
        return "left: calc(50% - 6px); bottom: -13px; transform: translateY(-50%) rotate(45deg);";

      case BOTTOM:
        return "left: calc(50% - 6px); top: -1px; transform: translateY(-50%) rotate(-135deg);";

      case LEFT:
        return "top: 10px; right: -7px; transform: translateY(0%) rotate(-45deg);";

      case RIGHT:
        return "top: 10px; left: -7px; transform: translateY(0%) rotate(135deg);";

      default:
        return "left: calc(50% - 6px); top: -1px; transform: translateY(-50%) rotate(-135deg);";
    }
  },
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad
);
var SeatDataStyled = styled.div.withConfig({
  displayName: "Tooltipstyles__SeatDataStyled",
  componentId: "sc-7r1g1c-1"
})(
  [
    "display:flex;justify-content:space-between;padding:",
    ";border-bottom:",
    ";line-height:1;"
  ],
  function(_ref10) {
    var size = _ref10.size;
    return size === LARGE ? spacing.moderate : spacing.cozy;
  },
  function(_ref11) {
    var isLast = _ref11.isLast;
    return isLast ? "1px solid ".concat(themes.global.gray02) : "none";
  }
);
var SeatDataColumn = styled.div.withConfig({
  displayName: "Tooltipstyles__SeatDataColumn",
  componentId: "sc-7r1g1c-2"
})([
  "display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;text-align:center;&:first-child{text-align:left;}&:last-child{text-align:right;}"
]);
var ColumnHeading = styled.div.withConfig({
  displayName: "Tooltipstyles__ColumnHeading",
  componentId: "sc-7r1g1c-3"
})(
  ["font-size:", ";text-transform:uppercase;margin-bottom:", ";color:", ";"],
  function(_ref12) {
    var size = _ref12.size;
    return size === LARGE ? typography.size.hecto : typography.size.uno;
  },
  function(_ref13) {
    var size = _ref13.size;
    return size === LARGE ? spacing.cozy : spacing.cozy;
  },
  themes.global.gray02
);
var ColumnText = styled.div.withConfig({
  displayName: "Tooltipstyles__ColumnText",
  componentId: "sc-7r1g1c-4"
})(
  ["font-size:", ";font-weight:", ";color:", ";"],
  function(_ref14) {
    var size = _ref14.size;
    return size === LARGE ? typography.size.kilo : typography.size.hecto;
  },
  typography.weight.semiBold,
  function(_ref15) {
    var variant = _ref15.variant;
    return variant === DARK ? themes.global.white.base : themes.global.gray01;
  }
);
var AdditionalData = styled.div.withConfig({
  displayName: "Tooltipstyles__AdditionalData",
  componentId: "sc-7r1g1c-5"
})(
  ["padding:", ";font-size:", ";color:", ";"],
  function(_ref16) {
    var size = _ref16.size;
    return size === LARGE ? spacing.moderate : spacing.cozy;
  },
  function(_ref17) {
    var size = _ref17.size;
    return size === LARGE ? typography.size.hecto : typography.size.uno;
  },
  function(_ref18) {
    var variant = _ref18.variant;
    return variant === DARK ? themes.global.white.base : themes.global.gray01;
  }
);

var SPACE_FROM_MOUSE = 20;

var Tooltip =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Tooltip, _Component);

    _createClass(Tooltip, null, [
      {
        key: "calculatePosition",

        /*
     * Function that determines Tooltip position.
     * @position(object) - top and bottom position of the elemt that triggers showing Tooltip;
     * Mouse horizontal position on the sreen - so we can center the Tooltip;
     * Additional container position and size
     * @size(object) - Tooltip width and height;
     */
        value: function calculatePosition(direction, position, size) {
          var width = size.width,
            height = size.height;
          var elBottom = position.elBottom,
            elTop = position.elTop,
            elLeft = position.elLeft,
            elRight = position.elRight,
            elHorizontalCenter = position.elHorizontalCenter;
          var bottomPosition = elBottom + SPACE_FROM_MOUSE;
          var topPosition = elTop - SPACE_FROM_MOUSE - height;

          switch (direction) {
            case TOP:
              return {
                x: elHorizontalCenter - width / 2,
                y: topPosition
              };

            case BOTTOM:
              return {
                x: elHorizontalCenter - width / 2,
                y: bottomPosition
              };

            case LEFT:
              return {
                x: elLeft - width - SPACE_FROM_MOUSE,
                y: elTop
              };

            case RIGHT:
              return {
                x: elRight + SPACE_FROM_MOUSE,
                y: elTop
              };

            default:
              return {
                x: elHorizontalCenter - width / 2,
                y: topPosition
              };
          }
        }
      }
    ]);

    function Tooltip(props) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Tooltip).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateSize",
        function() {
          var _this$size = _this.size,
            width = _this$size.width,
            height = _this$size.height;
          var size = {};

          if (_this.myRef.current) {
            var _this$myRef$current = _this.myRef.current,
              clientWidth = _this$myRef$current.clientWidth,
              clientHeight = _this$myRef$current.clientHeight;

            if (width !== clientWidth && clientWidth) {
              size.width = clientWidth;
            }

            if (height !== clientHeight && clientHeight) {
              size.height = clientHeight;
            }
          }

          if (size.width || size.height) {
            _this.size = _objectSpread({}, _this.size, size);
            return true;
          }

          return false;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "tooltipEnter",
        function() {
          var _this$props = _this.props,
            isVisible = _this$props.isVisible,
            position = _this$props.position,
            direction = _this$props.direction;

          if (isVisible) {
            _this.updateSize();

            _this.pos = Tooltip.calculatePosition(
              direction,
              position,
              _this.size
            );
          }

          _this.myRef.current.style.top = "".concat(_this.pos.y, "px");
          _this.myRef.current.style.left = "".concat(_this.pos.x, "px");
        }
      );

      _this.myRef = React.createRef();
      _this.size = {};
      _this.pos = {
        x: 0,
        y: 0
      };
      return _this;
    }

    _createClass(
      Tooltip,
      [
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            /*
       * This causes force update of the tooltip position if we use only one tooltip and we transiotion from
       * one zone that triggers the tooltip to another that triggers the same tooltip but with different place to display
       */
            var _this$props2 = this.props,
              _this$props2$position = _this$props2.position,
              elHorizontalCenter = _this$props2$position.elHorizontalCenter,
              elVerticalCenter = _this$props2$position.elVerticalCenter,
              isVisible = _this$props2.isVisible,
              direction = _this$props2.direction,
              position = _this$props2.position;

            if (
              (prevProps.position.elHorizontalCenter !== elHorizontalCenter ||
                prevProps.position.elVerticalCenter !== elVerticalCenter) &&
              isVisible &&
              prevProps.isVisible === isVisible
            ) {
              this.updateSize();
              this.pos = Tooltip.calculatePosition(
                direction,
                position,
                this.size
              );
              this.myRef.current.style.top = "".concat(this.pos.y, "px");
              this.myRef.current.style.left = "".concat(this.pos.x, "px");
            }
          }
          /*
     * Static function that needs to be called from the parent -> Tooltip.getDimensionsFromEvent
     * The parent should pass the click event which will trigger showing the Tooltip.
     * By default the Tooltip is shown withing the view port. If we need to show it inside
     * certain element we should pass the html element as second parameter.
     * The function will return an object that should be provided to the Tooltip as props.
     */
        },
        {
          key: "render",
          value: function render() {
            var _this$props3 = this.props,
              children = _this$props3.children,
              isVisible = _this$props3.isVisible,
              direction = _this$props3.direction,
              variant = _this$props3.variant,
              rest = _objectWithoutProperties(_this$props3, [
                "children",
                "isVisible",
                "direction",
                "variant"
              ]);

            return React.createElement(
              CSSTransition,
              {
                in: isVisible,
                key: "tooltip-animation",
                timeout: 300,
                classNames: "open",
                onEnter: this.tooltipEnter,
                variant: variant
              },
              React.createElement(
                StyledTooltip,
                _extends(
                  {
                    ref: this.myRef,
                    isVisible: isVisible,
                    direction: direction
                  },
                  rest
                ),
                children
              )
            );
          }
        }
      ],
      [
        {
          key: "getDimensionsFromEvent",
          value: function getDimensionsFromEvent(e) {
            var _e$currentTarget = e.currentTarget,
              elTop = _e$currentTarget.offsetTop,
              elHeight = _e$currentTarget.clientHeight,
              elWidth = _e$currentTarget.clientWidth,
              elLeft = _e$currentTarget.offsetLeft;
            return {
              elHorizontalCenter: elLeft + elWidth / 2,
              elVerticalCenter: elTop + elHeight / 2,
              elTop: elTop,
              elBottom: elTop + elHeight,
              elLeft: elLeft,
              elRight: elLeft + elWidth
            };
          }
        }
      ]
    );

    return Tooltip;
  })(Component);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  direction: PropTypes.oneOf(DIRECTIONS),
  position: PropTypes.shape({
    elHorizontalCenter: PropTypes.number,
    elVerticalCenter: PropTypes.number,
    elTop: PropTypes.number,
    elBottom: PropTypes.number,
    elLeft: PropTypes.number
  }),
  variant: PropTypes.oneOf(VARIANTS)
};
Tooltip.defaultProps = {
  isVisible: false,
  direction: BOTTOM,
  variant: LIGHT,
  position: {
    elHorizontalCenter: 0,
    elVerticalCenter: 0,
    elTop: 0,
    elBottom: 0,
    elLeft: 0
  }
};
Tooltip.displayName = "Tooltip";

var StatusBadgeContainer = styled.div.withConfig({
  displayName: "StatusBadgeGroup__StatusBadgeContainer",
  componentId: "sc-3jq26g-0"
})(
  [
    "display:flex;.badge{margin-left:",
    ";&:first-child,&.hidden{margin-left:0;}&.hidden{margin-top:",
    ";:first-child{margin-top:0;}}}"
  ],
  spacing.cozy,
  spacing.cozy
);
var HiddenBadgesCount = styled(StyledBadge$1).withConfig({
  displayName: "StatusBadgeGroup__HiddenBadgesCount",
  componentId: "sc-3jq26g-1"
})(
  ["background:", ";color:", ";"],
  themes.global.transparent,
  themes.global.onyx.light
);
var BadgeTooltip = styled(Tooltip).withConfig({
  displayName: "StatusBadgeGroup__BadgeTooltip",
  componentId: "sc-3jq26g-2"
})(["padding:8px;"]);

var StatusBadgeGroup =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(StatusBadgeGroup, _Component);

    function StatusBadgeGroup(props) {
      var _this;

      _classCallCheck(this, StatusBadgeGroup);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(StatusBadgeGroup).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderBadges",
        function(badges, variant, additionalClass) {
          return badges.map(function(item) {
            return React.createElement(
              StatusBadge,
              _extends(
                {
                  className: additionalClass
                },
                item,
                {
                  variant: variant,
                  key: item.label
                }
              )
            );
          });
        }
      );

      _this.state = {
        isOpen: false
      };
      _this.mouseLeave = _this.mouseLeave.bind(
        _assertThisInitialized(_assertThisInitialized(_this))
      );
      _this.elementHovered = _this.elementHovered.bind(
        _assertThisInitialized(_assertThisInitialized(_this))
      );
      return _this;
    }

    _createClass(StatusBadgeGroup, [
      {
        key: "mouseLeave",
        value: function mouseLeave() {
          this.setState({
            isOpen: false
          });
        }
      },
      {
        key: "elementHovered",
        value: function elementHovered(e) {
          var data = Tooltip.getDimensionsFromEvent(e);
          this.setState(
            _objectSpread(
              {
                isOpen: true
              },
              data
            )
          );
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            visibleBadges = _this$props.visibleBadges,
            hiddenBadges = _this$props.hiddenBadges,
            tooltipDirection = _this$props.tooltipDirection,
            variant = _this$props.variant;

          var _this$state = this.state,
            isOpen = _this$state.isOpen,
            position = _objectWithoutProperties(_this$state, ["isOpen"]);

          return React.createElement(
            StatusBadgeContainer,
            null,
            this.renderBadges(visibleBadges, variant),
            hiddenBadges &&
              hiddenBadges.length &&
              React.createElement(
                HiddenBadgesCount,
                {
                  onMouseEnter: this.elementHovered,
                  onMouseLeave: this.mouseLeave
                },
                "+".concat(hiddenBadges.length, " more")
              ),
            React.createElement(
              BadgeTooltip,
              {
                direction: tooltipDirection,
                position: _objectSpread({}, position),
                isVisible: isOpen
              },
              this.renderBadges(hiddenBadges, variant, "hidden")
            )
          );
        }
      }
    ]);

    return StatusBadgeGroup;
  })(Component);

StatusBadgeGroup.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  visibleBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
  hiddenBadges: PropTypes.arrayOf(PropTypes.shape(badgeProps)),
  tooltipDirection: PropTypes.oneOf(DIRECTIONS)
};
StatusBadgeGroup.defaultProps = {
  variant: DARK,
  visibleBadges: [],
  hiddenBadges: [],
  tooltipDirection: "bottom"
};
StatusBadgeGroup.displayName = "StatusBadgeGroup";

var LabelText = styled(TextBase).withConfig({
  displayName: "BottomSheetLabel__LabelText",
  componentId: "sc-1l2xlw3-0"
})(["text-transform:uppercase;"]);

var BottomSheetLabel = function BottomSheetLabel(_ref) {
  var variant = _ref.variant,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, ["variant", "children"]);

  if (!children) {
    return null;
  }

  var StatusBadgeColor = getLabelTextColor({
    variant: variant
  });

  if (StatusBadgeColor !== "inherit") {
    return React.createElement(
      StatusBadge,
      _extends({}, restProps, {
        label: children,
        color: StatusBadgeColor
      })
    );
  }

  return React.createElement(
    LabelText,
    _extends({}, restProps, {
      primary: true
    }),
    " ",
    children
  );
};

BottomSheetLabel.defaultProps = {
  variant: "default",
  children: ""
};
BottomSheetLabel.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  children: PropTypes.string
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral([
    "\n    padding-left: ",
    ";\n\n    &.row__button--cancel {\n      padding-right: calc(",
    " + ",
    "px);\n    }\n  "
  ]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var noop = function noop() {};

var CANCEL_BUTTON_SIZE = 28;
var CANCEL_BUTTON_ICON_SIZE = Math.floor(CANCEL_BUTTON_SIZE / 2);
var BottomSheetContent = styled.div.withConfig({
  displayName: "BottomSheet__BottomSheetContent",
  componentId: "ogyl10-0"
})(
  [
    "background-color:white;width:100%;z-index:8;max-height:calc(100% - 60px);border-top-left-radius:",
    ";border-top-right-radius:",
    ";position:fixed;bottom:0;left:0;padding-right:",
    ";padding-left:",
    ";.bottom-sheet-enter &{transform:translateY(100%);}.bottom-sheet-leave &,.bottom-sheet-exit &{transform:translateY(0);}.bottom-sheet-appear &{transform:translateY(100%);}.bottom-sheet-enter.bottom-sheet-enter-active &{transform:translateY(0);transition:transform 300ms ease-in-out;}.bottom-sheet-leave.bottom-sheet-leave-active &,.bottom-sheet-exit.bottom-sheet-exit-active &{transform:translateY(100%);transition:transform 300ms ease-in-out;}.bottom-sheet-appear.bottom-sheet-appear-active &{transform:translateY(0);transition:transform 300ms ease-in-out;}"
  ],
  constants.borderRadius.large,
  constants.borderRadius.large,
  spacing.cozy,
  spacing.cozy
);
var HeaderRow = styled(Row).withConfig({
  displayName: "BottomSheet__HeaderRow",
  componentId: "ogyl10-1"
})(
  [
    "position:relative;padding:",
    " ",
    " 0;align-items:center;&.row__button--cancel{padding-right:calc(",
    " + ",
    "px);min-height:calc(",
    " + ",
    "px);}",
    ";"
  ],
  spacing.moderate,
  spacing.normal,
  spacing.normal,
  CANCEL_BUTTON_SIZE,
  spacing.moderate,
  CANCEL_BUTTON_SIZE,
  mediumAndUp(
    _templateObject$a(),
    spacing.comfy,
    spacing.comfy,
    CANCEL_BUTTON_SIZE
  )
);
var CancelButton = styled(IconButton).withConfig({
  displayName: "BottomSheet__CancelButton",
  componentId: "ogyl10-2"
})(
  ["position:absolute;top:", ";right:", ";padding:0;"],
  spacing.moderate,
  spacing.moderate
);

var BottomSheet = function BottomSheet(_ref) {
  var label = _ref.label,
    labelVariant = _ref.labelVariant,
    withCancelBtn = _ref.withCancelBtn,
    withHeader = _ref.withHeader,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "label",
      "labelVariant",
      "withCancelBtn",
      "withHeader",
      "children"
    ]);

  return React.createElement(Consumer$3, null, function(backdropValue) {
    return React.createElement(
      BottomSheetContent, // this class name is for automation purposes please do not remove or modify the name
      _extends(
        {
          className: "content__bottom-sheet",
          ref: backdropValue ? backdropValue.childRef : null,
          role: "dialog",
          "aria-modal": true
        },
        props
      ),
      withHeader &&
        React.createElement(
          HeaderRow,
          {
            className: classNames("row__header", {
              "row__button--cancel": withCancelBtn // this class name is for automation purposes please do not remove or modify the name
            })
          },
          React.createElement(
            BottomSheetLabel,
            {
              variant: labelVariant
            },
            label
          ),
          withCancelBtn &&
            React.createElement(Consumer$1, null, function(value) {
              return React.createElement(
                CancelButton,
                {
                  className: "button--cancel",
                  size: CANCEL_BUTTON_SIZE,
                  "aria-label": "Close BottomSheet",
                  role: "button",
                  onClick: value ? value.onCloseRequest : noop
                },
                React.createElement(CrossIcon, {
                  size: CANCEL_BUTTON_ICON_SIZE,
                  style: {
                    pointerEvent: "none"
                  },
                  color: colors.onyx.base
                })
              );
            })
        ),
      children
    );
  });
};

BottomSheet.defaultProps = {
  label: BottomSheetLabel.defaultProps.children,
  labelVariant: BottomSheetLabel.defaultProps.variant,
  withCancelBtn: true,
  withHeader: true,
  children: null
};
BottomSheet.propTypes = {
  label: BottomSheetLabel.propTypes.children,
  labelVariant: BottomSheetLabel.propTypes.variant,
  withCancelBtn: PropTypes.bool,
  withHeader: PropTypes.bool,
  children: PropTypes.node
};

var ModalContainer = styled.div.withConfig({
  displayName: "Modal__ModalContainer",
  componentId: "sj711c-0"
})(
  [
    "width:fit-content;min-width:400px;max-width:640px;position:relative;background-color:",
    ";border-radius:",
    ";box-shadow:0 16px 16px 0 rgba(0,0,0,0.06),0 0 16px 0 rgba(0,0,0,0.12);border:solid 1px rgba(0,0,0,0.04);padding:0;overflow-y:auto;overflow-x:hidden;max-height:calc(100% - 96px);z-index:100;.modal-enter &{opacity:0;transform:scale(0.7);}.modal-leave &,.modal-exit &{opacity:1;transform:scale(1);}.modal-appear &{opacity:0;transform:scale(0.7);}.modal-enter.modal-enter-active &{opacity:1;transform:scale(1);transition:all 0.3s ease-in-out;}.modal-leave.modal-leave-active &,.modal-exit.modal-exit-active &{opacity:0;transition:all 0.1s ease-in-out;transform:scale(0.7);}.modal-appear.modal-appear-active &{opacity:1;transform:scale(1);transition:all 0.3s ease-in-out;}"
  ],
  colors.white.base,
  constants.borderRadius.large
);
var ModalContent = styled.div.withConfig({
  displayName: "Modal__ModalContent",
  componentId: "sj711c-1"
})(["padding:", ";"], function(props) {
  return props.padding
    ? props.padding
    : "0 ".concat(spacing.comfy, " ").concat(spacing.comfy);
});
var CancelButtonContainer = styled(Row).withConfig({
  displayName: "Modal__CancelButtonContainer",
  componentId: "sj711c-2"
})(
  ["justify-content:flex-end;align-items:flex-end;padding-right:", ";"],
  spacing.moderate
);

var Modal = function Modal(_ref) {
  var children = _ref.children,
    containerProps = _ref.containerProps,
    contentProps = _ref.contentProps,
    props = _objectWithoutProperties(_ref, [
      "children",
      "containerProps",
      "contentProps"
    ]);

  return React.createElement(Consumer$3, null, function(backdropValue) {
    return React.createElement(
      ModalContainer,
      _extends(
        {
          small: 4,
          role: "dialog",
          "aria-modal": true,
          ref: backdropValue ? backdropValue.childRef : null
        },
        containerProps
      ),
      props.withCloseIcon &&
        React.createElement(
          CancelButtonContainer,
          null,
          React.createElement(Consumer$1, null, function(value) {
            return React.createElement(
              IconButton,
              {
                className: "button--close",
                size: 45,
                "aria-label": "Close Modal",
                role: "button",
                onClick: value ? value.onCloseRequest : function() {}
              },
              React.createElement(CrossIcon, {
                size: 12,
                style: {
                  pointerEvent: "none"
                },
                color: colors.onyx.base
              })
            );
          })
        ),
      React.createElement(ModalContent, contentProps, children)
    );
  });
};

Modal.defaultProps = {
  children: null,
  withCloseIcon: true,
  containerProps: null,
  contentProps: null
};
Modal.propTypes = {
  children: PropTypes.node,
  withCloseIcon: PropTypes.bool,
  containerProps: PropTypes.shape({}),
  contentProps: PropTypes.shape({})
};

var updateOpenIndexSingle = function updateOpenIndexSingle(
  openIndex,
  dataIndex
) {
  if (openIndex === dataIndex) return -1;
  return dataIndex;
};
var updateOpenIndexMultiple = function updateOpenIndexMultiple(
  openIndex,
  dataIndex
) {
  var openIndexArr = Array.isArray(openIndex) ? openIndex : [];
  var currentOpenDataIndex = openIndexArr.indexOf(dataIndex);
  if (currentOpenDataIndex === -1) return openIndexArr.concat([dataIndex]);
  if (currentOpenDataIndex === 0) return openIndexArr.slice(1);
  var openIndexArrLen = openIndexArr.length;
  if (currentOpenDataIndex === openIndexArrLen - 1)
    return openIndexArr.slice(0, openIndexArrLen - 1);
  return openIndexArr
    .slice(0, currentOpenDataIndex)
    .concat(openIndexArr.slice(currentOpenDataIndex + 1));
};
var updateOpenIndex = function updateOpenIndex(
  expandMultiple,
  openIndex,
  dataIndex
) {
  return expandMultiple
    ? updateOpenIndexMultiple(openIndex, dataIndex)
    : updateOpenIndexSingle(openIndex, dataIndex);
};
var determineIfOpen = function determineIfOpen(
  expandMultiple,
  openIndex,
  index
) {
  return expandMultiple
    ? Array.isArray(openIndex) && openIndex.includes(index)
    : openIndex === index;
};

var noop$1 = function noop() {};

var Container$6 = styled.div.withConfig({
  displayName: "Container",
  componentId: "pwpktv-0"
})(["width:100%;"]);
var ITEMS_COLLAPSED = -1;

var ListContainer =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(ListContainer, _Component);

    function ListContainer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ListContainer);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ListContainer)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          openIndex: ITEMS_COLLAPSED,
          expandMultiple: _this.props.expandMultiple,
          mobilePortalContent: null,
          desktopPortalContent: null,
          portalContentData: null,
          onCloseRequest: noop$1,
          // eslint-disable-line
          renderIntoPortal: noop$1,
          // eslint-disable-line
          resetOpenIndex: noop$1 // eslint-disable-line
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onCloseRequest",
        function() {
          if (_this.state.desktopPortalContent) {
            _this.setState({
              desktopPortalContent: null
            });

            _this.props.onModalClose();
          }

          if (_this.state.mobilePortalContent) {
            _this.setState({
              openIndex: ITEMS_COLLAPSED
            });

            _this.props.onRowCollapse();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onExpandOrCollapse",
        function(event) {
          var _event$target = event.target,
            className = _event$target.className,
            dataset = _event$target.dataset;
          var index = dataset.index;

          if (!className || className.constructor !== String) {
            return null;
          }

          if (
            className.includes("button--expand-or-collapse") ||
            className.includes("button--more-info") ||
            (className.includes("link--row-options") &&
              !determineIfOpen(
                _this.state.expandMultiple,
                _this.state.openIndex,
                parseInt(index, 10)
              ))
          ) {
            event.preventDefault();
            var _this$state = _this.state,
              openIndex = _this$state.openIndex,
              expandMultiple = _this$state.expandMultiple;
            var dataIndex = parseInt(index, 10);

            if (dataIndex > -1) {
              return _this.setState({
                openIndex: updateOpenIndex(expandMultiple, openIndex, dataIndex)
              });
            }
          }

          return null;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "resetOpenIndex",
        function() {
          return _this.setState({
            openIndex: ITEMS_COLLAPSED
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderIntoPortal",
        function(_ref) {
          var children = _ref.children,
            contentType = _ref.contentType,
            portalContentData = _ref.data;
          return contentType === "mobile"
            ? _this.setState({
                mobilePortalContent: children,
                portalContentData: portalContentData
              })
            : _this.setState({
                desktopPortalContent: children,
                portalContentData: portalContentData
              });
        }
      );

      return _this;
    }

    _createClass(ListContainer, [
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          this.setState({
            renderIntoPortal: this.renderIntoPortal,
            // eslint-disable-line
            onCloseRequest: this.onCloseRequest,
            // eslint-disable-line
            resetOpenIndex: this.resetOpenIndex // eslint-disable-line
          });
        } // Only used by modal on mobile devices
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            rest = _objectWithoutProperties(_this$props, ["children"]);

          var _this$state2 = this.state,
            mobilePortalContent = _this$state2.mobilePortalContent,
            desktopPortalContent = _this$state2.desktopPortalContent,
            openIndex = _this$state2.openIndex,
            portalContentData = _this$state2.portalContentData;
          var isBottomSheetOpen =
            openIndex !== ITEMS_COLLAPSED && !!mobilePortalContent;

          var _ref2 = portalContentData || {},
            label = _ref2.label,
            labelVariant = _ref2.labelVariant;

          return React.createElement(
            Container$6,
            _extends(
              {
                onClick: this.onExpandOrCollapse
              },
              rest
            ),
            React.createElement(
              Provider$1,
              {
                value: this.state
              },
              children,
              React.createElement(
                DisplayFor,
                {
                  small: true
                },
                React.createElement(
                  Portal,
                  null,
                  React.createElement(
                    CSSTransition,
                    {
                      classNames: "bottom-sheet",
                      timeout: 300,
                      in: isBottomSheetOpen,
                      appear: true,
                      unmountOnExit: true,
                      mountOnEnter: true
                    },
                    React.createElement(
                      Backdrop,
                      null,
                      React.createElement(
                        BottomSheet,
                        {
                          index: openIndex,
                          label: label,
                          labelVariant: labelVariant
                        },
                        mobilePortalContent
                      )
                    )
                  )
                )
              ),
              React.createElement(
                DisplayFor,
                {
                  medium: true,
                  large: true,
                  xLarge: true
                },
                React.createElement(
                  Portal,
                  null,
                  React.createElement(
                    CSSTransition,
                    {
                      classNames: "modal",
                      timeout: {
                        enter: 300,
                        exit: 100
                      },
                      in: !!desktopPortalContent,
                      appear: true,
                      unmountOnExit: true,
                      mountOnEnter: true
                    },
                    React.createElement(
                      Backdrop,
                      null,
                      React.createElement(Modal, null, desktopPortalContent)
                    )
                  )
                )
              )
            )
          );
        }
      }
    ]);

    return ListContainer;
  })(Component);

ListContainer.defaultProps = {
  onRowCollapse: noop$1,
  onModalClose: noop$1,
  expandMultiple: false
};
ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRowCollapse: PropTypes.func,
  onModalClose: PropTypes.func,
  expandMultiple: PropTypes.bool
};

var ROW_CONTAINER_VERTICAL_PADDING = "12px";
var ROW_LINK_VERTICAL_PADDING = "2px";
var ROW_LINK_HORIZONTAL_PADDING = "4px";
var ROW_DATE_SMALL_WIDTH = "101px";
var ROW_DATE_MEDIUM_WIDTH = "116px";
var ROW_BUTTON_WIDTH = "102px";
var CHEVRON_ICON_SIZE = 15;
var CHEVRON_ICON_PADDING = spacing.moderate;
var staticProps = {
  defaultResponsiveSize: {
    xSmall: "hecto",
    medium: "kilo"
  }
};

function _templateObject$b() {
  var data = _taggedTemplateLiteral([
    "\n    display: block;\n    &.button--expanded,\n    &.button--collapsed {\n      transition: all 0.1s linear;\n    }\n    &.button--expanded {\n      transform: rotate(-180deg);\n    }\n  "
  ]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var IconButton$1 = styled.button
  .attrs({
    role: "button",
    type: "button"
  })
  .withConfig({
    displayName: "RowToggler__IconButton",
    componentId: "qbg1jq-0"
  })(
  [
    "border:0;padding:0 ",
    ";outline:0;background:transparent;appearance:none;cursor:pointer;-webkit-tap-highlight-color:transparent;&:focus{outline:none;}&.icon-button--last{padding-left:",
    ";padding-right:0;}> *{pointer-events:none;}"
  ],
  CHEVRON_ICON_PADDING,
  spacing.moderate
);
var IconWrapper = styled(IconButton$1)
  .attrs({
    size: 45
  })
  .withConfig({
    displayName: "RowToggler__IconWrapper",
    componentId: "qbg1jq-1"
  })(["display:none;", ";"], mediumAndUp(_templateObject$b()));

var RowToggler =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(RowToggler, _React$PureComponent);

    function RowToggler() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RowToggler);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(RowToggler)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleClick",
        function() {
          var _this$props = _this.props,
            isOpen = _this$props.isOpen,
            index = _this$props.index,
            onExpandItem = _this$props.onExpandItem,
            onCollapseItem = _this$props.onCollapseItem;

          if (isOpen) {
            onCollapseItem({
              index: index
            });
          } else {
            onExpandItem({
              index: index
            });
          }
        }
      );

      return _this;
    }

    _createClass(RowToggler, [
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            isOpen = _this$props2.isOpen,
            index = _this$props2.index;
          return React.createElement(
            IconWrapper,
            {
              "aria-label": isOpen ? "Collapse Row" : "Expand Row",
              "aria-expanded": isOpen,
              "data-index": index,
              className: classNames("button--expand-or-collapse", {
                "button--expanded": isOpen,
                "button--collapsed": !isOpen
              }),
              onClick: this.handleClick
            },
            React.createElement(ChevronIcon, {
              size: CHEVRON_ICON_SIZE,
              color: colors.blackPearl
            })
          );
        }
      }
    ]);

    return RowToggler;
  })(React.PureComponent);

_defineProperty(RowToggler, "propTypes", {
  isOpen: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,

  /**
   * Property onExpandItem is called whenever user clicks chevron on the collapsed item
   */
  onExpandItem: PropTypes.func,

  /**
   * Property onCollapseItem is called whenever user clicks chevron on the expanded item
   */
  onCollapseItem: PropTypes.func
});

_defineProperty(RowToggler, "defaultProps", {
  onExpandItem: function onExpandItem() {},
  onCollapseItem: function onCollapseItem() {}
});

function _templateObject3$4() {
  var data = _taggedTemplateLiteral([
    "\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n\n    &.row__label--hidden {\n      transition: opacity 0.1s ",
    ";\n      opacity: 0;\n    }\n\n    &.row__label--active {\n      transition: opacity 0.3s ",
    " 0.2s;\n      opacity: 1;\n    }\n\n    &.row__label--expanded {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      max-width: 100%;\n      transform: translateX(-50%);\n    }\n  "
  ]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-left: calc(",
    "px + ",
    " + ",
    " + ",
    ");\n    padding-right: calc(",
    " - ",
    "px);\n    font-size: ",
    ";\n  "
  ]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var rowMarginRight = spacing.gutters.small / 2;
var Content$2 = styled(Row).withConfig({
  displayName: "RowLabel__Content",
  componentId: "sc-1vih5h1-0"
})(
  ["width:100%;padding-left:", ";padding-top:", ";font-size:11px;", ";"],
  ROW_DATE_SMALL_WIDTH,
  spacing.cozy,
  mediumAndUp(
    _templateObject$c(),
    ROW_CONTAINER_VERTICAL_PADDING,
    CHEVRON_ICON_SIZE,
    CHEVRON_ICON_PADDING,
    CHEVRON_ICON_PADDING,
    ROW_DATE_MEDIUM_WIDTH,
    ROW_BUTTON_WIDTH,
    rowMarginRight,
    typography.size.hecto
  )
);
var ContentColumn = styled(Column).withConfig({
  displayName: "RowLabel__ContentColumn",
  componentId: "sc-1vih5h1-1"
})([
  "position:relative;display:flex;justify-content:flex-start;align-items:center;"
]);
var MobileWrapper = styled.div.withConfig({
  displayName: "RowLabel__MobileWrapper",
  componentId: "sc-1vih5h1-2"
})(
  ["display:inline-block;max-width:100%;", ";"],
  mediumAndUp(_templateObject2$5())
);
var DesktopWrapper = styled.div.withConfig({
  displayName: "RowLabel__DesktopWrapper",
  componentId: "sc-1vih5h1-3"
})(
  ["display:none;", ";"],
  mediumAndUp(
    _templateObject3$4(),
    constants.easing.easeInQuad,
    constants.easing.easeInOutQuad
  )
);
var LabelText$1 = styled(TextBase).withConfig({
  displayName: "RowLabel__LabelText",
  componentId: "sc-1vih5h1-4"
})(
  [
    "font-size:",
    ";font-weight:",
    ";color:",
    ";text-transform:uppercase;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"
  ],
  typography.size.uno,
  typography.weight.semiBold,
  function(_ref) {
    var sentiment = _ref.sentiment;
    return getLabelTextColor({
      variant: sentiment
    });
  }
);

var renderLabel = function renderLabel(label, variant) {
  switch (variant) {
    case "alert":
      return React.createElement(StatusBadge, {
        label: label,
        color: themes.global.error.base
      });

    case "positive":
      return React.createElement(
        LabelText$1,
        {
          primary: true,
          sentiment: "positive",
          variant: "accent"
        },
        label
      );

    case "accent":
      return React.createElement(
        LabelText$1,
        {
          primary: true,
          sentiment: "accent",
          variant: "accent"
        },
        label
      );

    case "caution":
      return React.createElement(StatusBadge, {
        label: label,
        color: themes.global.caution.dark
      });

    case "neutral":
      return React.createElement(StatusBadge, {
        label: label,
        color: themes.global.onyx.light
      });

    default:
      return React.createElement(
        LabelText$1,
        {
          primary: true
        },
        label
      );
  }
};

var RowLabel = function RowLabel(_ref2) {
  var isOpen = _ref2.isOpen,
    index = _ref2.index,
    variant = _ref2.variant,
    children = _ref2.children,
    restProps = _objectWithoutProperties(_ref2, [
      "isOpen",
      "index",
      "variant",
      "children"
    ]);

  if (!children) {
    return null;
  }

  var content = renderLabel(children, variant);
  return React.createElement(
    Content$2,
    restProps,
    React.createElement(
      ContentColumn,
      null,
      React.createElement(
        MobileWrapper,
        {
          className: "row__label row__label--mobile",
          "data-index": index
        },
        content
      ),
      React.createElement(
        DesktopWrapper,
        {
          key: "collapsed",
          "data-index": index,
          className: classNames("row__label", "row__label--desktop", {
            "row__label--active": !isOpen,
            "row__label--hidden": isOpen
          })
        },
        content
      ),
      React.createElement(
        DesktopWrapper,
        {
          key: "expanded",
          "data-index": index,
          className: classNames(
            "row__label",
            "row__label--expanded",
            "row__label--desktop",
            {
              "row__label--active": isOpen,
              "row__label--hidden": !isOpen
            }
          )
        },
        content
      )
    )
  );
};

RowLabel.defaultProps = {
  index: 0,
  variant: "default",
  isOpen: false,
  children: ""
};
RowLabel.propTypes = {
  index: PropTypes.number,
  variant: PropTypes.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  isOpen: PropTypes.bool,
  children: PropTypes.string
};

var rowDataShape = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dateTitle: PropTypes.string.isRequired,
  url: PropTypes.string,
  dateSubTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(BUTTON_VARIANTS),
  variant: PropTypes.oneOf(["standard", "withLink"]).isRequired,
  label: RowLabel.propTypes.children,
  labelVariant: RowLabel.propTypes.variant,
  linkTitle: PropTypes.string,
  linkUrl: PropTypes.string,
  linkSubTitle: PropTypes.string,
  dateColor: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
var sectionItemShape = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      icon: PropTypes.node.isRequired,
      onItemClick: PropTypes.func
    })
  ).isRequired
};

function _templateObject3$5() {
  var data = _taggedTemplateLiteral([
    "\n    display: inline-block;\n    \n    &.link--hidden {\n      opacity 0;\n      transition: opacity 0.1s ",
    ";\n    }\n  "
  ]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral([
    "\n    padding-bottom: ",
    ";\n    padding-left: calc(",
    "px + ",
    " + ",
    " + ",
    ");\n  "
  ]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var Content$3 = styled(Row).withConfig({
  displayName: "RowOptionsLink__Content",
  componentId: "sc-1rt9ucs-0"
})(
  ["width:100%;padding-left:", ";padding-bottom:", ";", ";"],
  ROW_DATE_SMALL_WIDTH,
  spacing.cozy,
  mediumAndUp(
    _templateObject$d(),
    ROW_CONTAINER_VERTICAL_PADDING,
    CHEVRON_ICON_SIZE,
    CHEVRON_ICON_PADDING,
    CHEVRON_ICON_PADDING,
    ROW_DATE_MEDIUM_WIDTH
  )
);
var MobileLink = styled(Link).withConfig({
  displayName: "RowOptionsLink__MobileLink",
  componentId: "sc-1rt9ucs-1"
})(
  ["display:inline-block;line-height:1.1;", ";"],
  mediumAndUp(_templateObject2$6())
);
var DesktopLink = styled(Link).withConfig({
  displayName: "RowOptionsLink__DesktopLink",
  componentId: "sc-1rt9ucs-2"
})(
  [
    "display:none;line-height:1.1;opacity:1;transition:opacity 0.3s ",
    " 0.2s;",
    ";"
  ],
  constants.easing.easeInOutQuad,
  mediumAndUp(_templateObject3$5(), constants.easing.easeInQuad)
);

var RowOptionsLink = function RowOptionsLink(_ref) {
  var variant = _ref.variant,
    isOpen = _ref.isOpen,
    url = _ref.url,
    index = _ref.index,
    onClick = _ref.onClick,
    children = _ref.children;
  return (
    variant === "withLink" &&
    React.createElement(
      Content$3,
      null,
      React.createElement(
        Column,
        null,
        React.createElement(
          MobileLink,
          {
            linkUrl: url,
            "data-index": index,
            onClick: onClick,
            className: "link--row-options"
          },
          children
        ),
        React.createElement(
          DesktopLink,
          {
            href: url,
            "data-index": index,
            className: classNames({
              "link--row-options": !url.length,
              "link--hidden": isOpen
            })
          },
          children
        )
      )
    )
  );
};

RowOptionsLink.defaultProps = {
  index: 0,
  isOpen: false,
  variant: "",
  url: "",
  onClick: function onClick() {},
  children: null
};
RowOptionsLink.propTypes = {
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  variant: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([
    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "
  ]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral([
    "\n    border-top: 1px solid ",
    ";\n\n    &.container__overflow--expanded {\n      background-color: ",
    ";\n      max-height: 600px;\n      transition: max-height 0.3s ",
    ", opacity 0.3s ",
    " 0.2s;\n      opacity: 1;\n    }\n\n    &.container__overflow--collapsed {\n      transition: max-height 0.3s ",
    ", opacity 0.1s ",
    ";\n      opacity: 0;\n    }\n  "
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteral([
    "\n      padding: 0 calc(",
    " + ",
    "px);\n    "
  ]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral([
    "\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  \n  &.column__content--expanded {\n    transition: opacity 0.1s ",
    ";\n    opacity: 0;\n  }\n  \n  &.column__content--collapsed {\n    transition: opacity 0.3s ",
    " 0.2s;\n    opacity: 1;\n  }\n\n  &.column__content--fixed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n\n    ",
    ";\n  }\n"
  ]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    width: 32.7%;\n  "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral([
    "\n    width: 26.8%;\n    max-width: ",
    ";\n  "
  ]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    width: 31.1%;\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral([
    "\n    &:hover {\n      background-color: ",
    ";\n    }\n  "
  ]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral([
    "\n    border-radius: 4px;\n    &.row__wrapper--expanded {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 4px 10px 0 rgba(0, 0, 0, 0.19);\n      margin-bottom: 12px;\n    }\n    \n    &.row__wrapper--collapsed {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0;\n      margin-bottom: 0;\n    }\n  "
  ]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var RowWrapper = styled.div.withConfig({
  displayName: "RowContent__RowWrapper",
  componentId: "hqtov9-0"
})(
  ["background-color:", ";border-bottom:1px solid ", ";", ";"],
  colors.white.base,
  colors.lightGray,
  mediumAndUp(
    _templateObject$e(),
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  )
);
var ListContainer$1 = styled.div.withConfig({
  displayName: "RowContent__ListContainer",
  componentId: "hqtov9-1"
})(
  [
    "background-color:",
    ";align-items:stretch;display:flex;padding-top:",
    ";padding-bottom:",
    ";",
    ";"
  ],
  colors.white.base,
  function(props) {
    return props.rowLabel ? "1px" : "calc(12px + ".concat(spacing.cozy, ")");
  },
  function(props) {
    return props.rowVariant === "withLink"
      ? "1px"
      : "calc(12px + ".concat(spacing.cozy, ")");
  },
  mediumAndUp(
    _templateObject2$7(),
    function(props) {
      return props.rowLabel ? "0" : ROW_CONTAINER_VERTICAL_PADDING;
    },
    function(props) {
      return props.rowVariant === "withLink"
        ? "0"
        : ROW_CONTAINER_VERTICAL_PADDING;
    }
  )
);
var LinkWrapper = styled.a.withConfig({
  displayName: "RowContent__LinkWrapper",
  componentId: "hqtov9-2"
})(
  [
    "text-decoration:none;display:flex;padding:",
    " ",
    ";margin-left:-",
    ";min-height:49px;justify-content:horizontal;width:100%;cursor:pointer;border-radius:2px;",
    ";"
  ],
  ROW_LINK_VERTICAL_PADDING,
  ROW_LINK_HORIZONTAL_PADDING,
  ROW_LINK_HORIZONTAL_PADDING,
  mediumAndUp(_templateObject3$6(), colors.azure.hoverLight)
);
var DateWrapper = styled.div.withConfig({
  displayName: "RowContent__DateWrapper",
  componentId: "hqtov9-3"
})(
  [
    "display:flex;flex-direction:column;justify-content:center;width:61.6%;max-width:",
    ";",
    " ",
    ";",
    ";"
  ],
  ROW_DATE_SMALL_WIDTH,
  smallAndUp(_templateObject4$2()),
  mediumAndUp(_templateObject5$1(), ROW_DATE_MEDIUM_WIDTH),
  largeAndUp(_templateObject6$1())
);
var ContentColumn$1 = styled(Column).withConfig({
  displayName: "RowContent__ContentColumn",
  componentId: "hqtov9-4"
})(
  ["display:none;", ";"],
  mediumAndUp(
    _templateObject7$1(),
    constants.easing.easeInQuad,
    constants.easing.easeInOutQuad,
    mediumAndUp(
      _templateObject8$1(),
      spacing.moderate,
      spacing.gutters.mediumAndUp / 2
    )
  )
);
var MobileOnlyColumn = styled(Column).withConfig({
  displayName: "RowContent__MobileOnlyColumn",
  componentId: "hqtov9-5"
})(["", ";"], mediumAndUp(_templateObject9$1()));
var ListRowButton = styled(StyledButton).withConfig({
  displayName: "RowContent__ListRowButton",
  componentId: "hqtov9-6"
})(
  [
    "min-width:",
    ";max-width:",
    ";height:41px;display:flex;justify-content:center;align-items:center;line-height:1.4;padding:18px 0;"
  ],
  ROW_BUTTON_WIDTH,
  ROW_BUTTON_WIDTH
);
var OverflowDesktopContainer = styled(Column).withConfig({
  displayName: "RowContent__OverflowDesktopContainer",
  componentId: "hqtov9-7"
})(
  ["max-height:0;overflow:hidden;", ";"],
  mediumAndUp(
    _templateObject10(),
    colors.lightGray,
    colors.white.base,
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  )
);
var DesktopContainer = styled.div.withConfig({
  displayName: "RowContent__DesktopContainer",
  componentId: "hqtov9-8"
})(
  ["display:none;padding-left:", ";position:relative;", ";"],
  spacing.cozy,
  mediumAndUp(_templateObject11())
);
var MobileContainer = styled.div.withConfig({
  displayName: "RowContent__MobileContainer",
  componentId: "hqtov9-9"
})(
  ["display:flex;align-items:stretch;", ";"],
  mediumAndUp(_templateObject12())
);
var MultilineText = styled(TextBase).withConfig({
  displayName: "RowContent__MultilineText",
  componentId: "hqtov9-10"
})([
  "display:-webkit-box;width:100%;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;"
]);
var SingleLineText = styled(TextBase).withConfig({
  displayName: "RowContent__SingleLineText",
  componentId: "hqtov9-11"
})([
  "display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;line-height:1.2;"
]);
var AbsoluteContent = styled.div.withConfig({
  displayName: "RowContent__AbsoluteContent",
  componentId: "hqtov9-12"
})([
  "width:100%;position:absolute;left:0;top:100%;display:flex;justify-content:center;"
]);
var ContentRow = styled(Row).withConfig({
  displayName: "RowContent__ContentRow",
  componentId: "hqtov9-13"
})(["width:100%;position:relative;"]);

var ListRowContent =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(ListRowContent, _Component);

    function ListRowContent() {
      _classCallCheck(this, ListRowContent);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(ListRowContent).apply(this, arguments)
      );
    }

    _createClass(ListRowContent, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.isOpen && this.props.index !== prevProps.index) {
            this.props.resetOpenIndex();
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.isOpen) {
            this.props.resetOpenIndex();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            _this$props$rowItem = _this$props.rowItem,
            title = _this$props$rowItem.title,
            subTitle = _this$props$rowItem.subTitle,
            dateTitle = _this$props$rowItem.dateTitle,
            dateSubTitle = _this$props$rowItem.dateSubTitle,
            buttonText = _this$props$rowItem.buttonText,
            _this$props$rowItem$b = _this$props$rowItem.buttonVariant,
            buttonVariant =
              _this$props$rowItem$b === void 0
                ? "standard"
                : _this$props$rowItem$b,
            variant = _this$props$rowItem.variant,
            label = _this$props$rowItem.label,
            labelVariant = _this$props$rowItem.labelVariant,
            linkTitle = _this$props$rowItem.linkTitle,
            _this$props$rowItem$l = _this$props$rowItem.linkUrl,
            linkUrl =
              _this$props$rowItem$l === void 0 ? "" : _this$props$rowItem$l,
            linkSubTitle = _this$props$rowItem.linkSubTitle,
            dateColor = _this$props$rowItem.dateColor,
            onClick = _this$props$rowItem.onClick,
            url = _this$props$rowItem.url,
            isOpen = _this$props.isOpen,
            index = _this$props.index,
            onOverflowClick = _this$props.onOverflowClick,
            onExpandShow = _this$props.onExpandShow,
            children = _this$props.children,
            onExpandItem = _this$props.onExpandItem,
            onCollapseItem = _this$props.onCollapseItem,
            rest = _objectWithoutProperties(_this$props, [
              "rowItem",
              "isOpen",
              "index",
              "onOverflowClick",
              "onExpandShow",
              "children",
              "onExpandItem",
              "onCollapseItem"
            ]);

          return React.createElement(
            RowWrapper,
            _extends(
              {
                variant: variant,
                className: classNames({
                  row__wrapper: true,
                  "row__wrapper--expanded": isOpen,
                  "row__wrapper--collapsed": !isOpen
                })
              },
              rest
            ),
            React.createElement(
              RowLabel,
              {
                isOpen: isOpen,
                index: index,
                variant: labelVariant
              },
              label
            ),
            React.createElement(
              ListContainer$1,
              {
                className: "list__container",
                rowVariant: variant,
                rowLabel: label
              },
              React.createElement(RowToggler, {
                isOpen: isOpen,
                index: index,
                onExpandItem: onExpandItem,
                onCollapseItem: onCollapseItem,
                className: "row__toggler"
              }),
              React.createElement(
                LinkWrapper,
                {
                  role: "link",
                  "aria-label": buttonText,
                  onClick: onClick,
                  href: url, // this class name is for automation purposes please do not remove or modify the name
                  className: "link__wrapper"
                },
                React.createElement(
                  DateWrapper,
                  {
                    className: "date__wrapper"
                  },
                  React.createElement(
                    TextBase,
                    _extends(
                      {
                        className: "date--text",
                        allCaps: true,
                        responsiveSize: staticProps.defaultResponsiveSize,
                        weight: "semiBold"
                      },
                      dateColor
                        ? {
                            accent: "heliotrope",
                            variant: "accent",
                            primary: true
                          }
                        : {}
                    ),
                    dateTitle
                  ),
                  React.createElement(
                    SingleLineText,
                    {
                      size: "hecto",
                      variant: "dark",
                      secondary: true,
                      className: "day-time--text"
                    },
                    dateSubTitle
                  )
                ),
                React.createElement(
                  ContentRow,
                  {
                    className: "row__content"
                  },
                  React.createElement(
                    MobileOnlyColumn,
                    {
                      className: "column__mobile-only"
                    },
                    React.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize,
                        className: "list-row__title"
                      },
                      title
                    ),
                    React.createElement(
                      SingleLineText,
                      {
                        size: "hecto",
                        variant: "dark",
                        secondary: true,
                        className: "list-row--subtitle"
                      },
                      subTitle
                    )
                  ),
                  React.createElement(
                    ContentColumn$1,
                    {
                      key: "primary-collapsed",
                      medium: 6,
                      className: classNames({
                        column__content: true,
                        "list-row__title": true,
                        "column__content--expanded": isOpen,
                        "column__content--collapsed": !isOpen
                      })
                    },
                    React.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize
                      },
                      title
                    )
                  ),
                  React.createElement(
                    ContentColumn$1,
                    {
                      key: "secondary-collapsed",
                      medium: 6,
                      className: classNames({
                        column__content: true,
                        "list-row__title": true,
                        "column__content--expanded": isOpen,
                        "column__content--collapsed": !isOpen
                      })
                    },
                    React.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize,
                        className: classNames({
                          subtitle: true,
                          "list-row--subtitle": true,
                          // this class name is for automation purposes please do not remove or modify the name
                          "subtitle--collapsed": true
                        })
                      },
                      subTitle
                    )
                  ),
                  React.createElement(
                    ContentColumn$1,
                    {
                      key: "primary-expanded",
                      className: classNames({
                        column__content: true,
                        "list-row__title": true,
                        "column__content--fixed": true,
                        "column__content--expanded": !isOpen,
                        "column__content--collapsed": isOpen
                      })
                    },
                    React.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize,
                        className: "subtitle"
                      },
                      isOpen && onExpandShow === "title" ? title : subTitle
                    )
                  )
                ),
                React.createElement(
                  DesktopContainer,
                  null,
                  React.createElement(
                    ListRowButton,
                    {
                      "aria-label": buttonText,
                      role: "button",
                      width: ROW_BUTTON_WIDTH,
                      variant: buttonVariant,
                      size: "regular",
                      as: "span",
                      rowVariant: variant
                    },
                    buttonText
                  ),
                  variant === "withLink" &&
                    React.createElement(
                      AbsoluteContent,
                      null,
                      React.createElement(
                        SingleLineText,
                        {
                          size: "uno",
                          variant: "dark",
                          secondary: true
                        },
                        linkSubTitle
                      )
                    )
                )
              ),
              React.createElement(
                MobileContainer,
                null,
                React.createElement(
                  IconButton$1,
                  {
                    className: "button--more-info icon-button--last",
                    "data-index": index,
                    "aria-label": "More Info",
                    onClick: onOverflowClick
                  },
                  React.createElement(OverflowIcon, {
                    size: 22,
                    color: colors.onyx.light
                  })
                )
              )
            ),
            React.createElement(
              RowOptionsLink,
              {
                variant: variant,
                isOpen: isOpen,
                url: linkUrl,
                index: index,
                onClick: onOverflowClick
              },
              linkTitle
            ),
            React.createElement(
              OverflowDesktopContainer,
              {
                className: classNames({
                  container__overflow: true,
                  "container__overflow--expanded": isOpen,
                  "container__overflow--collapsed": !isOpen
                })
              },
              children
            )
          );
        }
      }
    ]);

    return ListRowContent;
  })(Component);

ListRowContent.defaultProps = {
  isOpen: false,
  onExpandShow: "subTitle",
  children: null,
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};
ListRowContent.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes.func.isRequired
};

var ListRow = function ListRow(_ref) {
  var children = _ref.children,
    rowItem = _ref.rowItem,
    index = _ref.index,
    _onOverflowClick = _ref.onOverflowClick,
    onExpandItem = _ref.onExpandItem,
    onCollapseItem = _ref.onCollapseItem,
    props = _objectWithoutProperties(_ref, [
      "children",
      "rowItem",
      "index",
      "onOverflowClick",
      "onExpandItem",
      "onCollapseItem"
    ]);

  return React.createElement(Consumer$1, null, function(_ref2) {
    var openIndex = _ref2.openIndex,
      expandMultiple = _ref2.expandMultiple,
      renderIntoPortal = _ref2.renderIntoPortal,
      restItemContainerProps = _objectWithoutProperties(_ref2, [
        "openIndex",
        "expandMultiple",
        "renderIntoPortal"
      ]);

    return React.createElement(
      ListRowContent,
      _extends(
        {
          rowItem: rowItem,
          isOpen: determineIfOpen(expandMultiple, openIndex, index),
          index: index,
          onOverflowClick: function onOverflowClick() {
            renderIntoPortal({
              children: children,
              contentType: "mobile",
              data: rowItem
            });

            _onOverflowClick();
          },
          onExpandItem: onExpandItem,
          onCollapseItem: onCollapseItem
        },
        restItemContainerProps,
        props
      ),
      children
    );
  });
};

ListRow.defaultProps = {
  children: null,
  onExpandShow: "subTitle",
  onExpandItem: ListRowContent.defaultProps.onExpandItem,
  onCollapseItem: ListRowContent.defaultProps.onCollapseItem
};
ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  onExpandItem: ListRowContent.propTypes.onExpandItem,
  onCollapseItem: ListRowContent.propTypes.onCollapseItem
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral([
    "\n    margin-left: 0;\n    margin-right: 0;\n  "
  ]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral([
    "\n    border-top: 1px solid ",
    ";\n    padding: 0;\n\n    &.container__overflow--expanded {\n      background-color: ",
    ";\n      max-height: 600px;\n      transition: max-height 0.3s ",
    ", opacity 0.3s ",
    " 0.2s;\n      opacity: 1;\n    }\n\n    &.container__overflow--collapsed {\n      transition: max-height 0.3s ",
    ", opacity 0.1s ",
    ";\n      opacity: 0;\n    }\n  "
  ]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral([
    "\n    padding: 0 ",
    ";\n    &.row__wrapper--expanded {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      margin-bottom: 3px;\n      margin-top: 3px;\n      border-radius: 4px;\n      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);\n      border: 1px solid #ebebeb;\n      overflow: hidden;\n    }\n    \n    &.row__wrapper--collapsed {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0;\n      margin-bottom: -1px;\n    }\n  "
  ]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var RowWrapper$1 = styled.div.withConfig({
  displayName: "PureRowContent__RowWrapper",
  componentId: "sc-1phjkr-0"
})(
  [
    "background-color:",
    ";border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;border-right:1px solid #fff;border-left:1px solid #fff;margin-bottom:-1px;padding:0 ",
    ";&:first-child{border-top:0px;}",
    ";.button--expand-or-collapse{margin-right:",
    ";margin-left:",
    ";}"
  ],
  colors.white.base,
  spacing.cozy,
  mediumAndUp(
    _templateObject$f(),
    spacing.normal,
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  ),
  function(props) {
    return props.rowTriggerPosition === "right" ? "-16px" : "0";
  },
  function(props) {
    return props.rowTriggerPosition === "left" ? "-16px" : "0";
  }
);
var ListContainer$2 = styled.div.withConfig({
  displayName: "PureRowContent__ListContainer",
  componentId: "sc-1phjkr-1"
})(
  [
    "background-color:",
    ";align-items:stretch;display:flex;padding-top:",
    ";padding-bottom:",
    ";"
  ],
  colors.white.base,
  spacing.normal,
  spacing.normal
);
var OverflowDesktopContainer$1 = styled(Column).withConfig({
  displayName: "PureRowContent__OverflowDesktopContainer",
  componentId: "sc-1phjkr-2"
})(
  ["max-height:0;overflow:hidden;padding:0;", ";"],
  mediumAndUp(
    _templateObject2$8(),
    colors.lightGray,
    colors.white.base,
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  )
);
var MobileContainer$1 = styled.div.withConfig({
  displayName: "PureRowContent__MobileContainer",
  componentId: "sc-1phjkr-3"
})(
  ["display:flex;align-items:stretch;", ";"],
  mediumAndUp(_templateObject3$7())
);
var ContentRow$1 = styled(Row).withConfig({
  displayName: "PureRowContent__ContentRow",
  componentId: "sc-1phjkr-4"
})(
  ["width:100%;position:relative;margin-left:0;margin-right:0;", ";"],
  mediumAndUp(_templateObject4$3())
);

var PureListRowContent =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(PureListRowContent, _Component);

    function PureListRowContent() {
      _classCallCheck(this, PureListRowContent);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(PureListRowContent).apply(this, arguments)
      );
    }

    _createClass(PureListRowContent, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.isOpen && this.props.index !== prevProps.index) {
            this.props.resetOpenIndex();
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.isOpen) {
            this.props.resetOpenIndex();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            isOpen = _this$props.isOpen,
            index = _this$props.index,
            onOverflowClick = _this$props.onOverflowClick,
            children = _this$props.children,
            onExpandItem = _this$props.onExpandItem,
            onCollapseItem = _this$props.onCollapseItem,
            rowTriggerPosition = _this$props.rowTriggerPosition,
            header = _this$props.header,
            rest = _objectWithoutProperties(_this$props, [
              "isOpen",
              "index",
              "onOverflowClick",
              "children",
              "onExpandItem",
              "onCollapseItem",
              "rowTriggerPosition",
              "header"
            ]);

          return React.createElement(
            RowWrapper$1,
            _extends(
              {
                className: classNames({
                  row__wrapper: true,
                  "row__wrapper--expanded": isOpen,
                  "row__wrapper--collapsed": !isOpen
                }),
                rowTriggerPosition: rowTriggerPosition
              },
              rest
            ),
            React.createElement(
              ListContainer$2,
              {
                className: "list__container"
              },
              rowTriggerPosition === "left" &&
                React.createElement(RowToggler, {
                  isOpen: isOpen,
                  index: index,
                  onExpandItem: onExpandItem,
                  onCollapseItem: onCollapseItem,
                  className: "row__toggler"
                }),
              React.createElement(
                ContentRow$1,
                {
                  rowTriggerPosition: rowTriggerPosition,
                  className: "row__content"
                },
                header
              ),
              React.createElement(
                MobileContainer$1,
                null,
                React.createElement(
                  IconButton$1,
                  {
                    className: "button--more-info icon-button--last",
                    "data-index": index,
                    "aria-label": "More Info",
                    onClick: onOverflowClick
                  },
                  React.createElement(OverflowIcon, {
                    size: 22,
                    color: colors.onyx.light
                  })
                )
              ),
              rowTriggerPosition === "right" &&
                React.createElement(RowToggler, {
                  isOpen: isOpen,
                  index: index,
                  onExpandItem: onExpandItem,
                  onCollapseItem: onCollapseItem,
                  className: "row__toggler"
                })
            ),
            React.createElement(
              OverflowDesktopContainer$1,
              {
                className: classNames({
                  container__overflow: true,
                  "container__overflow--expanded": isOpen,
                  "container__overflow--collapsed": !isOpen
                })
              },
              children
            )
          );
        }
      }
    ]);

    return PureListRowContent;
  })(Component);

PureListRowContent.defaultProps = {
  isOpen: false,
  children: null,
  rowTriggerPosition: "right",
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};
PureListRowContent.propTypes = {
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes.func.isRequired,
  rowTriggerPosition: PropTypes.oneOf(["right", "left"])
};

var PureListRow = function PureListRow(_ref) {
  var children = _ref.children,
    index = _ref.index,
    _onOverflowClick = _ref.onOverflowClick,
    onExpandItem = _ref.onExpandItem,
    onCollapseItem = _ref.onCollapseItem,
    props = _objectWithoutProperties(_ref, [
      "children",
      "index",
      "onOverflowClick",
      "onExpandItem",
      "onCollapseItem"
    ]);

  return React.createElement(Consumer$1, null, function(_ref2) {
    var openIndex = _ref2.openIndex,
      expandMultiple = _ref2.expandMultiple,
      renderIntoPortal = _ref2.renderIntoPortal,
      restItemContainerProps = _objectWithoutProperties(_ref2, [
        "openIndex",
        "expandMultiple",
        "renderIntoPortal"
      ]);

    return React.createElement(
      PureListRowContent,
      _extends(
        {
          isOpen: determineIfOpen(expandMultiple, openIndex, index),
          index: index,
          onOverflowClick: function onOverflowClick() {
            renderIntoPortal({
              children: children,
              contentType: "mobile"
            });

            _onOverflowClick();
          },
          onExpandItem: onExpandItem,
          onCollapseItem: onCollapseItem
        },
        restItemContainerProps,
        props
      ),
      children
    );
  });
};

PureListRow.defaultProps = {
  children: null,
  onExpandItem: PureListRowContent.defaultProps.onExpandItem,
  onCollapseItem: PureListRowContent.defaultProps.onCollapseItem
};
PureListRow.propTypes = {
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  onExpandItem: PureListRowContent.propTypes.onExpandItem,
  onCollapseItem: PureListRowContent.propTypes.onCollapseItem
};

var ListUnstyled = styled.ol.withConfig({
  displayName: "Unstyledstyles__ListUnstyled",
  componentId: "sc-1503ajg-0"
})(["list-style-type:none;margin:0;padding:0;"]);

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", ";\n  "]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var OverflowRow = styled(Row).withConfig({
  displayName: "Overflow__OverflowRow",
  componentId: "sc-1cqzhhr-0"
})(
  ["overflow:hidden;", ";"],
  mediumAndUp(_templateObject$g(), spacing.moderate)
);

var ListRowOverflow = function ListRowOverflow(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(OverflowRow, props, children);
};

ListRowOverflow.defaultProps = {
  children: null
};
ListRowOverflow.propTypes = {
  children: PropTypes.node
};

function _templateObject$h() {
  var data = _taggedTemplateLiteral([
    "\n    border: none;\n    padding-left: ",
    ";\n    padding-right: ",
    ";\n  "
  ]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var SectionContainer = styled(Column).withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-7rwpqw-0"
})(
  ["padding:", " ", ";border-bottom:1px solid ", ";", ";"],
  spacing.moderate,
  spacing.normal,
  colors.lightGray,
  mediumAndUp(_templateObject$h(), spacing.moderate, spacing.moderate)
);
var TitleContainer = styled(Row).withConfig({
  displayName: "Section__TitleContainer",
  componentId: "sc-7rwpqw-1"
})(
  ["padding-bottom:", ";&&{flex:0 1 100%;margin-left:0;margin-right:0;}"],
  spacing.moderate
);
var TitleText = styled(BoldText).withConfig({
  displayName: "Section__TitleText",
  componentId: "sc-7rwpqw-2"
})(
  ["font-size:", ";color:", ";text-transform:uppercase;"],
  typography.size.uno,
  colors.onyx.light
);

var Section = function Section(_ref) {
  var title = _ref.title,
    titleStyle = _ref.titleStyle,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["title", "titleStyle", "children"]);

  return React.createElement(
    SectionContainer,
    rest,
    React.createElement(
      TitleContainer,
      {
        className: "container__title"
      },
      React.createElement(
        TitleText,
        {
          style: titleStyle,
          className: "text__title"
        },
        title
      )
    ),
    children
  );
};

Section.defaultProps = {
  titleStyle: {},
  children: null
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node
};

var ItemContainer = styled.div
  .attrs({
    className: "section-item"
  })
  .withConfig({
    displayName: "SectionItem__ItemContainer",
    componentId: "sc-18zkmdl-0"
  })(
  [
    "display:flex;flex-direction:row;align-items:flex-start;cursor:",
    ";&:not(:last-of-type){margin-bottom:",
    ";}"
  ],
  function(props) {
    return props.onItemClick ? "pointer" : "text";
  },
  spacing.moderate
);
var IconContainer = styled.div.withConfig({
  displayName: "SectionItem__IconContainer",
  componentId: "sc-18zkmdl-1"
})(["padding-right:", ";"], spacing.cozy);
/* stylelint-disable */

var MultiLineLink = styled.div
  .attrs({
    className: "section-item-link"
  })
  .withConfig({
    displayName: "SectionItem__MultiLineLink",
    componentId: "sc-18zkmdl-2"
  })(
  [
    "color:",
    ";text-decoration:none;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;"
  ],
  function(_ref) {
    var color = _ref.color;
    return color || colors.azure.base;
  }
);
/* stylelint-enable */

var handleItemClick = function handleItemClick(
  children,
  value,
  event,
  onItemClick
) {
  if (children && value) {
    value.renderIntoPortal({
      children: children,
      contentType: "desktop"
    });
  }

  if (onItemClick) {
    onItemClick(event);
  }
};

var SectionItem = function SectionItem(_ref2) {
  var _ref2$item = _ref2.item,
    icon = _ref2$item.icon,
    title = _ref2$item.title,
    subTitle = _ref2$item.subTitle,
    onItemClick = _ref2$item.onItemClick,
    url = _ref2$item.url,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, ["item", "children"]);

  var isMultiline = onItemClick || url;
  var Title = isMultiline ? MultiLineLink : SecondaryText;
  var itemContainerProps = url
    ? _objectSpread({}, props, {
        as: Link
      })
    : props;
  return React.createElement(Consumer$1, null, function(value) {
    return React.createElement(
      ItemContainer,
      _extends(
        {
          key: title,
          role: "link",
          "aria-label": "Section Item",
          onClick: function onClick(event) {
            return handleItemClick(children, value, event, onItemClick);
          },
          onItemClick: onItemClick,
          href: url
        },
        itemContainerProps
      ),
      icon && React.createElement(IconContainer, null, icon),
      React.createElement(
        "div",
        null,
        React.createElement(Title, null, title),
        subTitle && React.createElement(SecondaryText, null, subTitle)
      )
    );
  });
};

SectionItem.defaultProps = {
  children: null
};
SectionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.node,
    onItemClick: PropTypes.func
  }).isRequired,
  children: PropTypes.node
};

var LinkRow = styled.div
  .attrs({
    className: "links links__row",
    role: "menubar"
  })
  .withConfig({
    displayName: "Row__LinkRow",
    componentId: "acv6qu-0"
  })([".list-container{position:relative;}"]);

var _React$createContext$4 = React.createContext({}),
  Provider$4 = _React$createContext$4.Provider,
  Consumer$4 = _React$createContext$4.Consumer;

var Container$7 = styled.div
  .attrs({
    className: "links links__list"
  })
  .withConfig({
    displayName: "List__Container",
    componentId: "sc-16g2wmd-0"
  })(
  [
    "display:none;flex-direction:column;position:absolute;width:205px;overflow:hidden;background-color:",
    ";border-radius:",
    ";box-shadow:0 2px 4px 0 rgba(0,0,0,0.12);.list-container--open &{display:block;}&.links__list--open{display:block;}"
  ],
  colors.white.base,
  constants.borderRadius.small
);
var Wrapper$1 = styled.div.withConfig({
  displayName: "List__Wrapper",
  componentId: "sc-16g2wmd-1"
})(
  ["padding:", ";&.wrapper--has-after{padding:", " ", " 0 ", ";}"],
  spacing.cozy,
  spacing.cozy,
  spacing.cozy,
  spacing.cozy
);
var AfterWrapper = styled.div.withConfig({
  displayName: "List__AfterWrapper",
  componentId: "sc-16g2wmd-2"
})(
  ["padding:0 ", ";border-top:1px solid ", ";color:", ";"],
  spacing.cozy,
  colors.diatomite,
  colors.blackPearl
);

var LinkList =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(LinkList, _Component);

    function LinkList() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LinkList);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(LinkList)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          onItemClick:
            /* istanbul ignore next */
            function onItemClick() {},
          // eslint-disable-line
          selectedIndex: _this.props.selectedIndex // eslint-disable-line
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onItemClick",
        function(_ref) {
          var index = _ref.index;

          _this.setState({
            selectedIndex: index
          }); // eslint-disable-line

          _this.props.onItemClick({
            selectedIndex: index
          });
        }
      );

      return _this;
    }

    _createClass(LinkList, [
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          this.setState({
            onItemClick: this.onItemClick // eslint-disable-line
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            renderAfter = _this$props.renderAfter,
            rest = _objectWithoutProperties(_this$props, [
              "children",
              "renderAfter"
            ]);

          return React.createElement(
            Provider$4,
            {
              value: this.state
            },
            React.createElement(
              Container$7,
              rest,
              React.createElement(
                Wrapper$1,
                {
                  className: classNames({
                    "wrapper--has-after": !!renderAfter
                  })
                },
                children
              ),
              renderAfter &&
                React.createElement(AfterWrapper, null, renderAfter)
            )
          );
        }
      }
    ]);

    return LinkList;
  })(Component);

LinkList.defaultProps = {
  selectedIndex: -1,
  onItemClick:
    /* istanbul ignore next */
    function onItemClick() {},
  renderAfter: null
};
LinkList.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func,
  selectedIndex: PropTypes.number,
  renderAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

var StyledLink = styled.a.withConfig({
  displayName: "Item__StyledLink",
  componentId: "l3gsar-0"
})(
  [
    'display:inline-block;text-decoration:none;outline:0;border:0;position:relative;.links__list &{width:100%;text-align:left;}&:focus,&:hover{outline:0;}&.link--has-other.link--open:after{content:"";display:inline-block;border-bottom:4px solid ',
    ";position:absolute;left:0;right:0;bottom:0;}"
  ],
  colors.azure.base
);

var LinkItem =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(LinkItem, _React$Component);

    function LinkItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LinkItem);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(LinkItem)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          open: false,
          touchEventsExist: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "open",
        function() {
          return (
            _this.hasOther &&
            _this.setState(function() {
              return {
                open: true
              };
            })
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "close",
        function() {
          return (
            _this.hasOther &&
            _this.setState(function() {
              return {
                open: false
              };
            })
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggle",
        function() {
          return (
            _this.hasOther &&
            _this.setState(function(_ref) {
              var open = _ref.open;
              return {
                open: !open
              };
            })
          );
        }
      );

      return _this;
    }

    _createClass(LinkItem, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ("ontouchstart" in document.documentElement) {
            this.setState({
              touchEventsExist: true
            }); // eslint-disable-line
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            rel = _this$props.rel,
            target = _this$props.target,
            role = _this$props.role,
            className = _this$props.className,
            props = _objectWithoutProperties(_this$props, [
              "children",
              "rel",
              "target",
              "role",
              "className"
            ]);

          var _Children$toArray = Children.toArray(children),
            _Children$toArray2 = _toArray(_Children$toArray),
            label = _Children$toArray2[0],
            other = _Children$toArray2.slice(1);

          this.hasOther = other && other.length > 0;
          var aria = this.hasOther
            ? {
                "aria-haspopup": this.hasOther,
                "aria-expanded": this.state.open
              }
            : {};
          var classes = classNames(
            {
              link: true,
              "link--has-other": this.hasOther,
              "link--open": this.state.open
            },
            className
          );
          var content = props.href
            ? React.createElement(
                StyledLink,
                _extends(
                  {},
                  props,
                  {
                    target: target,
                    rel: getRelByTarget(target, rel),
                    role: role || "link"
                  },
                  aria,
                  {
                    className: classes
                  }
                ),
                label
              )
            : React.createElement(
                StyledLink,
                _extends(
                  {},
                  props,
                  {
                    role: role || "button"
                  },
                  aria,
                  {
                    className: classes,
                    as: "button"
                  }
                ),
                label
              );
          return React.createElement(
            "span",
            {
              className: this.state.open
                ? "list-container list-container--open"
                : "list-container list-container--closed",
              onClick: this.toggle,
              onMouseEnter: this.state.touchEventsExist ? null : this.open,
              onMouseLeave: this.close,
              role: "none"
            },
            content,
            other
          );
        }
      }
    ]);

    return LinkItem;
  })(React.Component);

_defineProperty(LinkItem, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  role: PropTypes.string
});

_defineProperty(LinkItem, "defaultProps", {
  children: null,
  className: "",
  href: null,
  target: "_self",
  rel: null,
  role: null
});

var ItemContainer$1 = styled.div
  .attrs({
    className: "links__list__item"
  })
  .withConfig({
    displayName: "ListItem__ItemContainer",
    componentId: "ah3k0k-0"
  })(
  [
    "padding:0 12px;height:36px;display:flex;color:",
    ";align-items:center;font-size:",
    ";font-weight:",
    ";border-radius:",
    ";&.links__list__item--selected{background-color:",
    ";}&:hover{background-color:",
    ";color:",
    ";}&:not(:last-of-type){margin-bottom:",
    ";}"
  ],
  colors.blackPearl,
  typography.size.kilo,
  typography.weight.regular,
  constants.borderRadius.small,
  colors.shale,
  colors.azure.base,
  colors.white.base,
  spacing.slim
);
var LinkItemContainer = styled(ItemContainer$1).withConfig({
  displayName: "ListItem__LinkItemContainer",
  componentId: "ah3k0k-1"
})(["text-decoration:none;"]);

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
    index = _ref.index,
    onClick = _ref.onClick,
    href = _ref.href,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "index",
      "onClick",
      "href"
    ]);

  return React.createElement(Consumer$4, null, function(_ref2) {
    var onItemClick = _ref2.onItemClick,
      selectedIndex = _ref2.selectedIndex;
    return href
      ? React.createElement(
          LinkItemContainer,
          _extends(
            {
              onClick: onClick,
              href: href,
              as: "a"
            },
            rest
          ),
          children
        )
      : React.createElement(
          ItemContainer$1,
          _extends(
            {
              className: classNames({
                "links__list__item--selected": index === selectedIndex
              }),
              onClick: composeHandler(function() {
                return onItemClick({
                  index: index
                });
              }, onClick)
            },
            rest
          ),
          children
        );
  });
};

ListItem.defaultProps = {
  index: 0,
  onClick: function onClick() {},
  href: null,
  children: null
};
ListItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string
};

var LinkRow$1 = styled(LinkRow).withConfig({
  displayName: "Links__LinkRow",
  componentId: "sc-1qd1aa5-0"
})(["height:60px;"]);
var LinkList$1 = styled(LinkList)
  .attrs({
    role: "menu"
  })
  .withConfig({
    displayName: "Links__LinkList",
    componentId: "sc-1qd1aa5-1"
  })(["top:60px;left:-74%;"]);
var Link$3 = styled(LinkItem).withConfig({
  displayName: "Links__Link",
  componentId: "sc-1qd1aa5-2"
})(
  [
    "background-color:transparent;padding:19px ",
    "px 19px ",
    "px;color:",
    ";font-size:",
    ";font-weight:",
    ";text-shadow:1px 0px 0px transparent;transition:all 300ms ",
    ";.nav--inverted &,.links__list &{color:",
    ";font-weight:",
    ";}&:visited,&:active{color:",
    ";.nav--inverted &,.links__list &{color:",
    " !important;}}&:focus,&:hover{outline:0;background-color:rgba(38,38,38,0.1);.nav--inverted &,.links__list &{background-color:",
    ";}}"
  ],
  spacing.gutters.small,
  spacing.gutters.small,
  colors.white.base,
  typography.size.kilo,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  colors.onyx.base,
  typography.weight.regular,
  colors.white.base,
  colors.onyx.base,
  colors.shale
);
var Links = {
  Link: Link$3,
  LinkList: LinkList$1,
  LinkListItem: ListItem,
  LinkRow: LinkRow$1
};

function _templateObject$i() {
  var data = _taggedTemplateLiteral([
    "\n    padding-right: ",
    "px;\n    padding-left: ",
    "px;\n\n    &.nav-button--last {\n        padding-right: ",
    "px;\n    }\n\n    &.nav-button--first {\n        padding-left: ",
    "px;\n    }\n  "
  ]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var BaseButton = styled.button.withConfig({
  displayName: "ButtonBase__BaseButton",
  componentId: "sc-4jqmbn-0"
})(
  [
    "backface-visibility:hidden;display:flex;align-items:center;flex:0 1 auto;background-color:transparent;text-decoration:none;border:0;height:60px;outline:0;appearance:none;padding-right:",
    "px;padding-left:",
    "px;color:",
    ";font-size:",
    ";font-weight:",
    ";transition:all 0.3ms ",
    ";.nav--inverted &{color:",
    ";font-weight:",
    ";}&.nav-button--last{padding-right:",
    "px;}&.nav-button--first{padding-left:",
    "px;}",
    ";"
  ],
  spacing.gutters.small / 2,
  spacing.gutters.small / 2,
  colors.white.base,
  typography.size.kilo,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  colors.onyx.base,
  typography.weight.regular,
  spacing.gutters.small,
  spacing.gutters.small,
  smallAndUp(
    _templateObject$i(),
    parseInt(spacing.normal, 10) / 2,
    parseInt(spacing.normal, 10) / 2,
    spacing.gutters.mediumAndUp,
    spacing.gutters.mediumAndUp
  )
);

var Button$1 = function Button(_ref) {
  var children = _ref.children,
    href = _ref.href,
    target = _ref.target,
    rel = _ref.rel,
    className = _ref.className,
    isFirst = _ref.isFirst,
    isLast = _ref.isLast,
    props = _objectWithoutProperties(_ref, [
      "children",
      "href",
      "target",
      "rel",
      "className",
      "isFirst",
      "isLast"
    ]);

  if (href) {
    return React.createElement(
      BaseButton,
      _extends({}, props, {
        className: classNames(
          {
            "nav-button--first": isFirst,
            "nav-button--last": isLast
          },
          className
        ),
        href: href,
        target: target,
        rel: getRelByTarget(target, rel),
        as: "a"
      }),
      children
    );
  }

  return React.createElement(
    BaseButton,
    _extends(
      {
        type: "button"
      },
      props,
      {
        className: className
      }
    ),
    children
  );
};

Button$1.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  className: PropTypes.string
};
Button$1.defaultProps = {
  children: null,
  href: null,
  isFirst: false,
  isLast: false,
  target: "_self",
  rel: null,
  className: ""
};

var MenuIcon = function MenuIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 20 17",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React.createElement("path", {
      d: "M 0 0 H 20 V 3 H 0 z M 0 7 H 20 V 10 H 0 z M 0 14 H 20 V 17 H 0 z"
    })
  );
};

MenuIcon.displayName = "MenuIcon";
MenuIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};
MenuIcon.defaultProps = {
  size: 24,
  color: "currentcolor",
  children: null
};

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", "px;\n  "]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral([
    "\n    padding-left: ",
    "px;\n    padding-right: ",
    "px;\n  "
  ]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var LogoBtn = styled(Button$1).withConfig({
  displayName: "Buttons__LogoBtn",
  componentId: "s6wlak-0"
})(
  ["padding-left:", "px;padding-right:", "px;", " ", ";"],
  spacing.gutters.small / 2,
  spacing.gutters.small / 2,
  smallAndUp(
    _templateObject$j(),
    spacing.gutters.mediumAndUp / 2,
    spacing.gutters.mediumAndUp / 2
  ),
  mediumAndUp(_templateObject2$9(), spacing.gutters.mediumAndUp)
);

var LogoContainer = function LogoContainer(_ref) {
  var children = _ref.children,
    href = _ref.href,
    props = _objectWithoutProperties(_ref, ["children", "href"]);

  return React.createElement(
    LogoBtn,
    _extends(
      {
        href: href
      },
      props
    ),
    children
  );
};

LogoContainer.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};
LogoContainer.defaultProps = {
  children: null,
  href: null
};

var MenuButton = function MenuButton(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, ["children"]);

  return React.createElement(
    Button$1,
    _extends(
      {
        isFirst: true
      },
      props
    ),
    React.createElement(MenuIcon, {
      size: 20
    }),
    children
  );
};

MenuButton.propTypes = {
  children: PropTypes.node
};
MenuButton.defaultProps = {
  children: null
};

var SearchButton = function SearchButton(_ref3) {
  var children = _ref3.children,
    props = _objectWithoutProperties(_ref3, ["children"]);

  return React.createElement(
    Button$1,
    props,
    React.createElement(SearchIconDeprecated, {
      size: 21
    }),
    children
  );
};

SearchButton.propTypes = {
  children: PropTypes.node
};
SearchButton.defaultProps = {
  children: null
};

var UserButton = function UserButton(_ref4) {
  var children = _ref4.children,
    iconProps = _ref4.iconProps,
    props = _objectWithoutProperties(_ref4, ["children", "iconProps"]);

  return React.createElement(
    Button$1,
    props,
    React.createElement(
      UserIcon,
      _extends(
        {
          size: 24
        },
        iconProps
      )
    ),
    children
  );
};

UserButton.propTypes = {
  children: PropTypes.node,
  iconProps: PropTypes.objectOf(PropTypes.string)
};
UserButton.defaultProps = {
  children: null,
  iconProps: null
};

var TextButton = function TextButton(_ref5) {
  var children = _ref5.children,
    props = _objectWithoutProperties(_ref5, ["children"]);

  return React.createElement(Button$1, props, children);
};

TextButton.propTypes = {
  children: PropTypes.node
};
TextButton.defaultProps = {
  children: null
};
var Buttons = {
  Button: Button$1,
  LogoContainer: LogoContainer,
  MenuButton: MenuButton,
  SearchButton: SearchButton,
  UserButton: UserButton,
  TextButton: TextButton
};

var HamburgerContent = styled.span.withConfig({
  displayName: "HamburgerIcon__HamburgerContent",
  componentId: "sc-1j3ukq5-0"
})(
  [
    "border-radius:",
    ";overflow:hidden;height:3px;background-color:",
    ";width:100%;display:block;transition:all 300ms ",
    ';&:before,&:after{content:"";border-radius:',
    ";height:3px;background-color:",
    ";width:100%;display:block;position:absolute;transform:rotate(0deg);transform-origin:right center;transition:transform 300ms ",
    ",background-color 300ms ",
    ";}&:before{top:0;left:0;}&:after{bottom:0;left:0;}.nav--inverted &{background-color:",
    ";&:before,&:after{background-color:",
    ";}}.hamburger--opened &{background-color:transparent;&:before{transform:rotate(-45deg);}&:after{transform:rotate(45deg);}}"
  ],
  constants.borderRadius.small,
  getThemeValue("white", "base"),
  constants.easing.easeInOutQuad,
  constants.borderRadius.small,
  getThemeValue("white", "base"),
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("onyx", "base"),
  getThemeValue("onyx", "base")
);
var HamburgerIconWrapper = styled.span.withConfig({
  displayName: "HamburgerIcon__HamburgerIconWrapper",
  componentId: "sc-1j3ukq5-1"
})([
  "height:17px;width:20px;position:relative;display:flex;align-items:center;"
]);

var HamburgerIcon = function HamburgerIcon(props) {
  return React.createElement(
    HamburgerIconWrapper,
    props,
    React.createElement(HamburgerContent, null)
  );
};

var MenuButton$1 = function MenuButton(_ref) {
  var iconClassName = _ref.iconClassName,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, ["iconClassName", "className"]);

  return React.createElement(
    Button$1,
    _extends({}, props, {
      className: classNames("menu-button", className)
    }),
    React.createElement(HamburgerIcon, {
      className: iconClassName
    })
  );
};

MenuButton$1.propTypes = {
  isLast: PropTypes.bool,
  className: PropTypes.string
};
MenuButton$1.defaultProps = {
  isLast: true,
  className: ""
};

var Drawer =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Drawer);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Drawer)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getHeaderContent",
        function(props) {
          var header = _this.props.header;
          if (typeof header === "function") return header(props);

          if (typeof header === "string") {
            return React.createElement(
              TextBase,
              {
                size: "kilo",
                variant: "light",
                primary: true,
                weight: "semiBold"
              },
              header
            );
          }

          return header;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderChildren",
        function(props) {
          var children = _this.props.children;
          if (typeof children === "function") return children(props);
          return children;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderHeader",
        function(_ref) {
          var toggleDrawer = _ref.toggleDrawer,
            isOpen = _ref.isOpen;
          return React.createElement(
            Gradient,
            {
              className: "gradient--spotlight",
              style: {
                height: "60px",
                position: "relative"
              }
            },
            React.createElement(
              HeaderContent,
              null,
              React.createElement(
                "div",
                null,
                _this.getHeaderContent({
                  toggleDrawer: toggleDrawer,
                  isOpen: isOpen
                })
              ),
              React.createElement(
                CloseButton,
                {
                  type: "button",
                  onClick: toggleDrawer
                },
                React.createElement(HamburgerIcon, {
                  className: classNames({
                    hamburger: true,
                    "hamburger--opened": isOpen,
                    "hamburger--closed": !isOpen
                  })
                })
              )
            )
          );
        }
      );

      return _this;
    }

    _createClass(Drawer, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            className = _this$props.className,
            rest = _objectWithoutProperties(_this$props, ["className"]);

          return React.createElement(Consumer, null, function(_ref2) {
            var isOpen = _ref2.isOpen,
              toggleDrawer = _ref2.toggleDrawer;
            return React.createElement(
              DrawerContainer,
              _extends({}, omitKeys(["children", "header"], rest), {
                className: classNames(
                  {
                    "drawer__content--open": isOpen
                  },
                  className
                )
              }),
              React.createElement(
                DrawerContent,
                null,
                _this2.renderHeader({
                  toggleDrawer: toggleDrawer,
                  isOpen: isOpen
                }),
                _this2.renderChildren({
                  toggleDrawer: toggleDrawer,
                  isOpen: isOpen
                })
              )
            );
          });
        }
      }
    ]);

    return Drawer;
  })(React.Component);

_defineProperty(Drawer, "propTypes", {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func
  ]),
  header: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ])
});

_defineProperty(Drawer, "defaultProps", {
  children: null,
  header: null
});

var noop$2 = function noop() {};

var DrawerMenu =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DrawerMenu, _React$Component);

    function DrawerMenu() {
      _classCallCheck(this, DrawerMenu);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(DrawerMenu).apply(this, arguments)
      );
    }

    _createClass(DrawerMenu, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props = this.props,
            children = _this$props.children,
            rest = _objectWithoutProperties(_this$props, ["children"]);

          this.props.setContent(
            React.createElement(
              Drawer,
              omitKeys(
                ["onClick", "toggleDrawer", "isOpen", "setContent"],
                rest
              ),
              children
            )
          );
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            onClick = _this$props2.onClick,
            toggleDrawer = _this$props2.toggleDrawer,
            isOpen = _this$props2.isOpen,
            rest = _objectWithoutProperties(_this$props2, [
              "onClick",
              "toggleDrawer",
              "isOpen"
            ]);

          return React.createElement(
            MenuButton$1,
            _extends(
              {
                onClick: composeHandler(toggleDrawer, onClick),
                iconClassName: classNames({
                  hamburger: true,
                  "hamburger--opened": isOpen,
                  "hamburger--closed": !isOpen
                })
              },
              rest
            )
          );
        }
      }
    ]);

    return DrawerMenu;
  })(React.Component);

_defineProperty(DrawerMenu, "propTypes", {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func
  ]),
  setContent: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
});

_defineProperty(DrawerMenu, "defaultProps", {
  onClick: noop$2,
  children: null
});

var DrawerMenuWrapper = function DrawerMenuWrapper(props) {
  return React.createElement(Consumer, null, function() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$setContent = _ref.setContent,
      setContent = _ref$setContent === void 0 ? noop$2 : _ref$setContent,
      _ref$toggleDrawer = _ref.toggleDrawer,
      toggleDrawer = _ref$toggleDrawer === void 0 ? noop$2 : _ref$toggleDrawer;

    return React.createElement(
      DrawerMenu,
      _objectSpread({}, props, {
        isOpen: isOpen,
        setContent: setContent,
        toggleDrawer: toggleDrawer
      })
    );
  });
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["width: 50%;"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 44px;\n  "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n  "]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral([
    "\n      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral([
    "\n        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var Nav = styled.nav
  .attrs({
    role: "navigation"
  })
  .withConfig({
    displayName: "NavBar__Nav",
    componentId: "sc-97sk6i-0"
  })(
  [
    "top:0;left:0;right:0;min-height:60px;width:100%;font-size:",
    ";background-color:transparent;color:",
    ";font-weight:",
    ";transition:all 300ms ",
    ";&.nav--relative{position:relative;}&.nav--absolute{position:absolute;}&.nav--fixed{position:fixed;}&.nav--inverted{background-color:",
    ';box-shadow:0 2px 4px 0 rgba(0,0,0,0.12);}&.nav--overlay:after{content:"";opacity:0.4;top:0;left:0;right:0;position:absolute;height:60px;z-index:4;background-image:linear-gradient(77deg,rgba(0,0,0,0),#000000);',
    ";",
    ";}"
  ],
  typography.size.kilo,
  colors.white.base,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  colors.white.base,
  smallAndUp(_templateObject$k()),
  mediumAndUp(_templateObject2$a())
);
var Container$8 = styled.div.withConfig({
  displayName: "NavBar__Container",
  componentId: "sc-97sk6i-1"
})(
  [
    "width:100%;height:60px;position:relative;display:flex;flex-direction:row;align-items:center;align-content:center;z-index:5;",
    ";",
    ";"
  ],
  mediumAndUp(_templateObject3$8()),
  xLargeAndUp(_templateObject4$4())
);
var Right = styled.div.withConfig({
  displayName: "NavBar__Right",
  componentId: "sc-97sk6i-2"
})(["display:flex;flex:1 0 auto;justify-content:flex-end;height:60px;"]);
var Left = styled.div.withConfig({
  displayName: "NavBar__Left",
  componentId: "sc-97sk6i-3"
})(
  [
    "flex:0 1 auto;width:310px;min-width:310px;max-width:310px;align-items:center;height:60px;display:flex;padding-left:",
    "px;",
    ";"
  ],
  parseInt(spacing.normal, 10) / 2,
  mediumAndUp(_templateObject5$2())
);
var MessageContainer = styled.div.withConfig({
  displayName: "NavBar__MessageContainer",
  componentId: "sc-97sk6i-4"
})(
  [
    "background-color:rgba(0,0,0,0.2);text-align:center;font-size:",
    ";font-weight:",
    ";padding-top:2px;padding-bottom:2px;"
  ],
  typography.size.hecto,
  typography.weight.regular
);

var NavBar = function NavBar(_ref) {
  var children = _ref.children,
    position = _ref.position,
    invert = _ref.invert,
    className = _ref.className,
    backgroundColor = _ref.backgroundColor,
    style = _ref.style,
    message = _ref.message,
    props = _objectWithoutProperties(_ref, [
      "children",
      "position",
      "invert",
      "className",
      "backgroundColor",
      "style",
      "message"
    ]);

  return React.createElement(
    Nav,
    _extends({}, props, {
      className: classNames(
        position && "nav--".concat(position),
        invert && "nav--inverted",
        !!backgroundColor && "nav--overlay",
        className
      ),
      invert: invert,
      style: _objectSpread({}, style, {
        backgroundColor: backgroundColor
      })
    }),
    message
      ? React.createElement(
          MessageContainer,
          null,
          React.createElement(
            Row,
            null,
            React.createElement(
              Column,
              {
                role: "note"
              },
              message
            )
          )
        )
      : null,
    React.createElement(Container$8, null, children)
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["relative", "absolute", "fixed"]),
  invert: PropTypes.bool,
  message: PropTypes.node,
  backgroundColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
};
NavBar.defaultProps = {
  className: null,
  children: null,
  position: "relative",
  invert: false,
  message: null,
  backgroundColor: null,
  style: {}
};
NavBar.MenuButton = Buttons.MenuButton;
NavBar.DrawerMenu = DrawerMenuWrapper;
NavBar.SearchButton = Buttons.SearchButton;
NavBar.UserButton = Buttons.UserButton;
NavBar.TextButton = Buttons.TextButton;
NavBar.LinkRow = Links.LinkRow;
NavBar.LinkList = Links.LinkList;
NavBar.LinkListItem = Links.LinkListItem;
NavBar.Link = Links.Link;
NavBar.Right = Right;
NavBar.Left = Left;
NavBar.LogoContainer = Buttons.LogoContainer;

var Input = styled.input
  .attrs({
    type: "search"
  })
  .withConfig({
    displayName: "Search__Input",
    componentId: "sc-1ab6igg-0"
  })(
  [
    "display:inline-block;width:100%;padding:",
    ";background-color:transparent;color:",
    ";border:0;font-size:",
    ";&:focus{background-color:",
    ";color:",
    ";&::placeholder{color:#26262699;}outline:0;}&::placeholder{color:",
    ";}&::-ms-clear{display:none;}&::-webkit-search-cancel-button{display:none;}"
  ],
  function(props) {
    return props.slim
      ? "9px 12px 9px calc(12px + 12px + 10px)"
      : "14px 16px 14px calc(16px + 16px + 8px)";
  },
  function(props) {
    return props.invert ? colors.onyx.base : colors.white.base;
  },
  function(props) {
    return props.slim ? typography.size.hecto : typography.size.kilo;
  },
  colors.white.base,
  colors.onyx.base,
  function(props) {
    return props.invert ? "#26262699" : colors.white.base;
  }
);
var Container$9 = styled.div.withConfig({
  displayName: "Search__Container",
  componentId: "sc-1ab6igg-1"
})(
  [
    "position:relative;width:100%;height:",
    ";border-radius:",
    ";overflow:hidden;outline:0;border:",
    ";color:",
    ";background-color:",
    ";"
  ],
  function(props) {
    return props.slim ? "36px" : "auto";
  },
  function(props) {
    return props.slim
      ? constants.borderRadius.large
      : constants.borderRadius.small;
  },
  function(props) {
    return props.invert ? "1px solid #bfbfbf" : "0";
  },
  function(props) {
    return props.invert ? colors.onyx.base : colors.white.base;
  },
  function(props) {
    return props.invert ? colors.white.base : colors.white.lighter;
  }
);
var IconContainer$1 = styled.div.withConfig({
  displayName: "Search__IconContainer",
  componentId: "sc-1ab6igg-2"
})(
  [
    "position:absolute;top:0;bottom:0;display:flex;align-items:center;padding-left:",
    ";color:",
    ";.search--focus &{color:",
    ";}"
  ],
  function(props) {
    return props.slim ? "12px" : "16px";
  },
  function(props) {
    return props.invert ? colors.onyx.base : colors.white.base;
  },
  colors.onyx.base
);

var SearchInput =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(SearchInput, _React$Component);

    function SearchInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SearchInput);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(SearchInput)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isFocused: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onBlur",
        function() {
          return _this.setState(function() {
            return {
              isFocused: false
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onFocus",
        function() {
          return _this.setState(function() {
            return {
              isFocused: true
            };
          });
        }
      );

      return _this;
    }

    _createClass(SearchInput, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            slim = _this$props.slim,
            invert = _this$props.invert,
            className = _this$props.className,
            iconProps = _this$props.iconProps,
            props = _objectWithoutProperties(_this$props, [
              "slim",
              "invert",
              "className",
              "iconProps"
            ]);

          return React.createElement(
            Container$9,
            {
              slim: slim,
              invert: invert,
              className: classNames(
                {
                  "search--focus": this.state.isFocused
                },
                className
              )
            },
            React.createElement(
              IconContainer$1,
              {
                slim: slim,
                invert: invert
              },
              React.createElement(
                SearchIcon,
                _extends(
                  {
                    size: "small"
                  },
                  iconProps
                )
              )
            ),
            React.createElement(
              Input,
              _objectSpread({}, props, {
                onBlur: composeHandler(this.onBlur, props.onBlur),
                onFocus: composeHandler(this.onFocus, props.onFocus),
                slim: slim,
                invert: invert
              })
            )
          );
        }
      }
    ]);

    return SearchInput;
  })(React.Component);

_defineProperty(SearchInput, "propTypes", {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  slim: PropTypes.bool,
  invert: PropTypes.bool,
  className: PropTypes.string,
  iconProps: PropTypes.objectOf(PropTypes.string)
});

_defineProperty(SearchInput, "defaultProps", {
  onBlur: null,
  onFocus: null,
  slim: false,
  invert: false,
  className: null,
  iconProps: null
});

var SEARCH_HEIGHT = {
  small: "36px",
  large: "44px"
};
var getSearchHeight = function getSearchHeight(variant) {
  return SEARCH_HEIGHT[variant] || SEARCH_HEIGHT.large;
};
var SearchMinWidth = "320px";
var SuggestMaxHeight = "700px";

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    max-height: ", ";\n  "]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral([
    "\n    width: 40px;\n    justify-content: left;\n  "
  ]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var SearchContainer = styled.div.withConfig({
  displayName: "Searchstyles__SearchContainer",
  componentId: "vkrxgh-0"
})(
  [
    "display:flex;box-sizing:border-box;align-items:center;height:",
    ";max-width:100%;min-width:",
    ";border:",
    ";border-radius:",
    ";background-color:",
    ";",
    ";&.hidden{visibility:hidden;> *{visibility:hidden;}}"
  ],
  function(_ref) {
    var variant = _ref.variant;
    return getSearchHeight(variant);
  },
  SearchMinWidth,
  function(_ref2) {
    var isFocused = _ref2.isFocused;
    return isFocused ? "1px solid ".concat(themes.global.gray02) : "none";
  },
  constants.borderRadius.small,
  function(_ref3) {
    var isFocused = _ref3.isFocused;
    return isFocused ? themes.global.white.base : themes.global.white.muted;
  },
  function(_ref4) {
    var isSuggestOpened = _ref4.isSuggestOpened;
    return isSuggestOpened
      ? "border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
      : "";
  }
);
var StyledSearchIcon = styled.button.withConfig({
  displayName: "Searchstyles__StyledSearchIcon",
  componentId: "vkrxgh-1"
})(
  [
    "height:100%;display:flex;align-items:center;color:",
    ";padding:0;border:none;background:transparent;outline:none;.hidden &{visibility:visible;}"
  ],
  function(_ref5) {
    var isFocused = _ref5.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.gray02;
  }
);
var OpenSearch = styled(StyledSearchIcon).withConfig({
  displayName: "Searchstyles__OpenSearch",
  componentId: "vkrxgh-2"
})(["position:absolute;left:0;width:56px;"]);
var SearchIconContainer = styled.div.withConfig({
  displayName: "Searchstyles__SearchIconContainer",
  componentId: "vkrxgh-3"
})(["position:relative;"]);
var StyledInput = styled.input
  .attrs({
    type: "text",
    autoComplete: "off"
  })
  .withConfig({
    displayName: "Searchstyles__StyledInput",
    componentId: "vkrxgh-4"
  })(
  [
    "font-size:",
    ";height:100%;color:",
    ";padding:0;border:none;background:none;flex-grow:1;&::placeholder{color:",
    ";}:focus{outline:none;}"
  ],
  function(_ref6) {
    var variant = _ref6.variant;
    return variant === SMALL ? typography.size.hecto : typography.size.kilo;
  },
  function(_ref7) {
    var isFocused = _ref7.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.gray01;
  },
  function(_ref8) {
    var isFocused = _ref8.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.onyx.muted;
  }
);
var Icon = styled(SearchIcon).withConfig({
  displayName: "Searchstyles__Icon",
  componentId: "vkrxgh-5"
})(["margin:0 ", ";"], spacing.moderate);
var Cancel = styled.button.withConfig({
  displayName: "Searchstyles__Cancel",
  componentId: "vkrxgh-6"
})(
  [
    "border:none;background:transparent;outline:none;display:flex;align-items:center;margin-left:",
    ";color:",
    ";padding:0 ",
    " 0 0;height:100%;",
    ";"
  ],
  spacing.cozy,
  function(_ref9) {
    var isFocused = _ref9.isFocused;
    return isFocused ? themes.global.primary.base : themes.global.white.base;
  },
  spacing.moderate,
  mediumAndUp(_templateObject$l())
);
var Clear = styled.button.withConfig({
  displayName: "Searchstyles__Clear",
  componentId: "vkrxgh-7"
})(
  [
    "background:transparent;outline:none;border:none;padding:0;height:100%;width:44px;margin-left:",
    ";display:",
    ";justify-content:center;align-items:center;cursor:default;color:",
    ";",
    ";"
  ],
  spacing.cozy,
  function(_ref10) {
    var value = _ref10.value;
    return value ? "flex" : "none";
  },
  function(_ref11) {
    var isFocused = _ref11.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.gray02;
  },
  mediumAndUp(_templateObject2$b())
);
var SearchSuggest = styled.div.withConfig({
  displayName: "Searchstyles__SearchSuggest",
  componentId: "vkrxgh-8"
})(
  [
    "max-width:100%;height:100%;max-height:100%;border:1px solid ",
    ";border-top:none;border-bottom-left-radius:",
    ";border-bottom-right-radius:",
    ";padding:",
    ";background-color:",
    ";box-shadow:",
    ";overflow-y:auto;box-sizing:border-box;",
    ";"
  ],
  themes.global.gray02,
  constants.borderRadius.small,
  constants.borderRadius.small,
  spacing.moderate,
  themes.global.white.base,
  cardBoxShadow,
  mediumAndUp(_templateObject3$9(), SuggestMaxHeight)
);
SearchSuggest.displayName = "SearchSuggest";

var SearchInput$1 =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(SearchInput, _Component);

    function SearchInput(props) {
      var _this;

      _classCallCheck(this, SearchInput);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(SearchInput).call(this, props)
      );
      _this.state = {
        isFocused: !props.hasBackground
      };
      _this.inputRef = React.createRef();
      _this.inputBlur = _this.inputBlur.bind(
        _assertThisInitialized(_assertThisInitialized(_this))
      );
      _this.inputFocused = _this.inputFocused.bind(
        _assertThisInitialized(_assertThisInitialized(_this))
      );
      return _this;
    }

    _createClass(SearchInput, [
      {
        key: "inputBlur",
        value: function inputBlur() {
          var _this$props = this.props,
            hasBackground = _this$props.hasBackground,
            onBlur = _this$props.onBlur;

          if (hasBackground) {
            this.setState({
              isFocused: false
            });
          }

          onBlur();
        }
      },
      {
        key: "inputFocused",
        value: function inputFocused() {
          var _this$props2 = this.props,
            onFocus = _this$props2.onFocus,
            hasBackground = _this$props2.hasBackground;

          if (hasBackground) {
            this.setState({
              isFocused: true
            });
          }

          onFocus();
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
            variant = _this$props3.variant,
            placeholder = _this$props3.placeholder,
            value = _this$props3.value,
            onChange = _this$props3.onChange,
            clearText = _this$props3.clearText,
            cancelCallback = _this$props3.cancelCallback,
            searchIconSelect = _this$props3.searchIconSelect,
            className = _this$props3.className,
            isInputVisible = _this$props3.isInputVisible,
            searchBtnAreaLabel = _this$props3.searchBtnAreaLabel,
            clearBtnAreaLabel = _this$props3.clearBtnAreaLabel,
            cancelBtnAreaLabel = _this$props3.cancelBtnAreaLabel,
            inputAreaLabel = _this$props3.inputAreaLabel,
            isSuggestOpened = _this$props3.isSuggestOpened,
            hasBackground = _this$props3.hasBackground,
            rest = _objectWithoutProperties(_this$props3, [
              "variant",
              "placeholder",
              "value",
              "onChange",
              "clearText",
              "cancelCallback",
              "searchIconSelect",
              "className",
              "isInputVisible",
              "searchBtnAreaLabel",
              "clearBtnAreaLabel",
              "cancelBtnAreaLabel",
              "inputAreaLabel",
              "isSuggestOpened",
              "hasBackground"
            ]);

          var isFocused = this.state.isFocused;
          var isStyleForFocusedUsed = !hasBackground || isFocused;
          return React.createElement(
            SearchContainer,
            _extends(
              {
                variant: variant,
                isFocused: isStyleForFocusedUsed,
                isSuggestOpened: isSuggestOpened
              },
              rest,
              {
                className: classNames("search--container", className, {
                  hidden: !isInputVisible,
                  "search--container-focused": isStyleForFocusedUsed
                })
              }
            ),
            React.createElement(
              StyledSearchIcon,
              {
                variant: variant,
                isFocused: isStyleForFocusedUsed,
                onClick: searchIconSelect,
                "aria-label": searchBtnAreaLabel,
                className: "search--search-icon"
              },
              React.createElement(Icon, {
                size: variant,
                color: "currentColor"
              })
            ),
            React.createElement(StyledInput, {
              variant: variant,
              placeholder: placeholder,
              value: value,
              onChange: onChange,
              onFocus: this.inputFocused,
              onBlur: this.inputBlur,
              isFocused: isStyleForFocusedUsed,
              ref: this.inputRef,
              "aria-label": inputAreaLabel,
              className: classNames("search--input", {
                "search--input-focused": isStyleForFocusedUsed
              })
            }),
            React.createElement(
              Clear,
              {
                onClick: clearText,
                value: value,
                "aria-label": clearBtnAreaLabel,
                className: "search--clear-icon",
                isFocused: isStyleForFocusedUsed
              },
              React.createElement(ClearIcon, {
                color: "currentColor"
              })
            ),
            React.createElement(
              Cancel,
              {
                isFocused: isStyleForFocusedUsed,
                onClick: cancelCallback,
                "aria-label": cancelBtnAreaLabel,
                className: "search--cancel-icon"
              },
              "Cancel"
            )
          );
        }
      }
    ]);

    return SearchInput;
  })(Component);

SearchInput$1.propTypes = {
  variant: PropTypes.oneOf(SIZES_SL),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  searchBtnAreaLabel: PropTypes.string,
  clearBtnAreaLabel: PropTypes.string,
  cancelBtnAreaLabel: PropTypes.string,
  inputAreaLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchIconSelect: PropTypes.func,
  clearText: PropTypes.func,
  cancelCallback: PropTypes.func,
  hasBackground: PropTypes.bool,
  isInputVisible: PropTypes.bool,
  isSuggestOpened: PropTypes.bool
};
SearchInput$1.defaultProps = {
  variant: LARGE,
  placeholder: "",
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  clearText: function clearText() {},
  searchIconSelect: function searchIconSelect() {},
  cancelCallback: function cancelCallback() {},
  hasBackground: false,
  isInputVisible: true,
  className: "",
  searchBtnAreaLabel: "Search button",
  clearBtnAreaLabel: "Clear button",
  cancelBtnAreaLabel: "Cancel button",
  inputAreaLabel: "Search input",
  isSuggestOpened: false
};
SearchInput$1.displayName = "SearchComponent";

function _templateObject4$5() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}

var getSpacing = function getSpacing(val) {
  return spacing[val] || val || 0;
};

var Spacing = styled.div.withConfig({
  displayName: "Spacing",
  componentId: "sc-1pugd1t-0"
})(
  ["width:100%;padding-top:", ";padding-bottom:", ";", ";", ";", ";", ";"],
  function(_ref) {
    var top = _ref.top;
    return getSpacing(top.xSmall);
  },
  function(_ref2) {
    var bottom = _ref2.bottom;
    return getSpacing(bottom.xSmall);
  },
  smallAndUp(
    _templateObject$m(),
    function(_ref3) {
      var top = _ref3.top;
      return getSpacing(top.small || top.xSmall);
    },
    function(_ref4) {
      var bottom = _ref4.bottom;
      return getSpacing(bottom.small || bottom.xSmall);
    }
  ),
  mediumAndUp(
    _templateObject2$c(),
    function(_ref5) {
      var top = _ref5.top;
      return getSpacing(top.medium || top.small || top.xSmall);
    },
    function(_ref6) {
      var bottom = _ref6.bottom;
      return getSpacing(bottom.medium || bottom.small || bottom.xSmall);
    }
  ),
  largeAndUp(
    _templateObject3$a(),
    function(_ref7) {
      var top = _ref7.top;
      return getSpacing(top.large || top.medium || top.small || top.xSmall);
    },
    function(_ref8) {
      var bottom = _ref8.bottom;
      return getSpacing(
        bottom.large || bottom.medium || bottom.small || bottom.xSmall
      );
    }
  ),
  xLargeAndUp(
    _templateObject4$5(),
    function(_ref9) {
      var top = _ref9.top;
      return getSpacing(
        top.xLarge || top.large || top.medium || top.small || top.xSmall
      );
    },
    function(_ref10) {
      var bottom = _ref10.bottom;
      return getSpacing(
        bottom.xLarge ||
          bottom.large ||
          bottom.medium ||
          bottom.small ||
          bottom.xSmall
      );
    }
  )
);
var spacingShape = PropTypes.shape({
  xSmall: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  xLarge: PropTypes.string
});
Spacing.propTypes = {
  top: spacingShape,
  bottom: spacingShape
};
Spacing.defaultProps = {
  top: {},
  bottom: {}
};
Spacing.displayName = "Spacing";

var spanStyles = css(["cursor:text;&:hover{color:currentColor;}"]);
var StyledLink$1 = styled(Link).withConfig({
  displayName: "BreadcrumbItem__StyledLink",
  componentId: "x7eejr-0"
})(["", ";"], function(props) {
  return getAsProp(props).as === "span" ? spanStyles : "";
});

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var position = _ref.position,
    children = _ref.children,
    href = _ref.href,
    size$$1 = _ref.size,
    weight$$1 = _ref.weight,
    variant$$1 = _ref.variant,
    primary = _ref.primary,
    props = _objectWithoutProperties(_ref, [
      "position",
      "children",
      "href",
      "size",
      "weight",
      "variant",
      "primary"
    ]);

  return React.createElement(
    "li",
    {
      style: {
        whiteSpace: "nowrap"
      }
    },
    React.createElement(
      StyledLink$1,
      _extends({}, props, {
        size: size$$1,
        weight: weight$$1,
        variant: variant$$1,
        primary: primary,
        accent: null,
        href: href || null
      }),
      children
    )
  );
};

BreadcrumbItem.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  variant: variant,
  primary: PropTypes.bool
};
BreadcrumbItem.defaultProps = {
  href: "",
  variant: "light",
  size: "uno",
  weight: "semiBold",
  primary: true,
  responsiveSize: null
};

var StyledBreadcrumb = styled(ListUnstyled).withConfig({
  displayName: "Breadcrumbstyles__StyledBreadcrumb",
  componentId: "sc-1524r0x-0"
})(
  [
    "font-weight:",
    ";display:flex;flex-flow:row;",
    " align-items:center;&.breadcrumb--none{color:inherit;}&.breadcrumb--light{color:",
    ";}&.breadcrumb--dark{color:",
    ";}&.breadcrumb--accent{color:",
    ";}li:last-of-type{min-width:0;overflow:hidden;text-overflow:ellipsis;}li:not(:last-of-type):after{padding:0 ",
    ';content:"/";}'
  ],
  typography.weight.semiBold,
  function(_ref) {
    var childrenLen = _ref.childrenLen;
    return childrenLen > 0
      ? "\n    flex: 0 1 ".concat(Math.floor(100 / childrenLen), "%;\n  ")
      : "";
  },
  getThemeValue("white", "base"),
  getThemeValue("onyx", "base"),
  getThemeValue("primary", "base"),
  spacing.slim
);

var Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children,
    className = _ref.className,
    variant = _ref.variant,
    props = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "variant"
    ]);

  return React.createElement(
    "nav",
    {
      style: {
        overflow: "hidden",
        maxWidth: "100%"
      }
    },
    React.createElement(
      StyledBreadcrumb,
      _extends({}, props, {
        className: classNames(className, "breadcrumb--".concat(variant)),
        childrenLen: React.Children.count(children)
      }),
      children
    )
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark", "accent", "none"])
};
Breadcrumb.defaultProps = {
  variant: "light",
  className: null
};

Breadcrumb.Item = BreadcrumbItem;

var StyledResponsiveImage = styled.div
  .attrs({
    className: "image image--responsive"
  })
  .withConfig({
    displayName: "Responsivestyles__StyledResponsiveImage",
    componentId: "w01vsr-0"
  })(
  [
    "position:relative;height:0;width:100%;padding-top:",
    ";background-image:",
    ";background-repeat:no-repeat;background-size:cover;"
  ],
  function(_ref) {
    var height = _ref.height,
      width = _ref.width;
    return "".concat((height / width) * 100, "%");
  },
  function(_ref2) {
    var image = _ref2.image;
    return "url(".concat(image, ")");
  }
);
StyledResponsiveImage.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

var ResponsiveImage =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ResponsiveImage, _PureComponent);

    function ResponsiveImage() {
      _classCallCheck(this, ResponsiveImage);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(ResponsiveImage).apply(this, arguments)
      );
    }

    _createClass(ResponsiveImage, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            loader = _this$props.loader,
            src = _this$props.src,
            alt = _this$props.alt,
            height = _this$props.height,
            width = _this$props.width,
            children = _this$props.children,
            imageRef = _this$props.imageRef,
            backgroundRef = _this$props.backgroundRef,
            rest = _objectWithoutProperties(_this$props, [
              "loader",
              "src",
              "alt",
              "height",
              "width",
              "children",
              "imageRef",
              "backgroundRef"
            ]);

          return (
            loader ||
            React.createElement(
              StyledResponsiveImage,
              _extends(
                {
                  image: src,
                  height: height,
                  width: width,
                  ref: backgroundRef
                },
                rest
              ),
              React.createElement(StyledImageSeo, {
                src: src,
                alt: alt,
                height: height,
                width: width,
                ref: imageRef
              }),
              children
            )
          );
        }
      }
    ]);

    return ResponsiveImage;
  })(PureComponent);

ResponsiveImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
  imageRef: PropTypes.shape({
    current: PropTypes.object
  }),
  backgroundRef: PropTypes.shape({
    current: PropTypes.object
  })
};
ResponsiveImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1,
  children: null,
  imageRef: {
    current: null
  },
  backgroundRef: {
    current: null
  }
};

var StyledStaticImage = styled.img
  .attrs({
    className: "image image--static"
  })
  .withConfig({
    displayName: "Staticstyles__StyledStaticImage",
    componentId: "pm1g26-0"
  })(["position:relative;width:100%;max-width:100%;"]);
StyledStaticImage.propTypes = {
  src: PropTypes.string.isRequired
};

var StaticImage =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(StaticImage, _PureComponent);

    function StaticImage() {
      _classCallCheck(this, StaticImage);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(StaticImage).apply(this, arguments)
      );
    }

    _createClass(StaticImage, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            loader = _this$props.loader,
            src = _this$props.src,
            alt = _this$props.alt,
            height = _this$props.height,
            width = _this$props.width,
            imageRef = _this$props.imageRef,
            props = _objectWithoutProperties(_this$props, [
              "loader",
              "src",
              "alt",
              "height",
              "width",
              "imageRef"
            ]);

          return (
            loader ||
            React.createElement(
              StyledStaticImage,
              _extends(
                {
                  src: src,
                  alt: alt,
                  height: height,
                  width: width,
                  ref: imageRef
                },
                props
              )
            )
          );
        }
      }
    ]);

    return StaticImage;
  })(PureComponent);

StaticImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  imageRef: PropTypes.shape({
    current: PropTypes.object
  })
};
StaticImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1,
  imageRef: {
    current: null
  }
};

var RoundContainer = styled.div.withConfig({
  displayName: "ThumbnailCircle__RoundContainer",
  componentId: "mid6me-0"
})(
  [
    "border:solid 1px ",
    ";align-items:center;justify-content:center;width:",
    "px;height:",
    "px;border-radius:50%;overflow:hidden;"
  ],
  colors.lightGray,
  function(props) {
    return props.size;
  },
  function(props) {
    return props.size;
  }
);
var Image$1 = styled.img.withConfig({
  displayName: "ThumbnailCircle__Image",
  componentId: "mid6me-1"
})(["width:100%;height:100%;"]);

var ThumbnailCircle = function ThumbnailCircle(_ref) {
  var size = _ref.size,
    src = _ref.src,
    alt = _ref.alt,
    props = _objectWithoutProperties(_ref, ["size", "src", "alt"]);

  return React.createElement(
    RoundContainer,
    {
      size: size
    },
    props.image ||
      React.createElement(Image$1, {
        src: src,
        alt: alt
      })
  );
};

ThumbnailCircle.defaultProps = {
  alt: "",
  src: "",
  image: null,
  size: 40
};
ThumbnailCircle.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.element
};

var DeviceSizeProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DeviceSizeProvider, _React$Component);

    function DeviceSizeProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DeviceSizeProvider);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DeviceSizeProvider)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        DeviceSizeProvider.initialState
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "setSize",
        function() {
          if (_this.props.cssOnly) {
            _this.setState(function() {
              return {
                cssOnly: true
              };
            });

            return;
          }

          _this.setState(function() {
            return {
              isInitialized: true,
              isXSmall: _this.xSmallMedia.matches,
              isSmall: _this.smallMedia.matches && !_this.mediumMedia.matches,
              isMedium: _this.mediumMedia.matches && !_this.largeMedia.matches,
              isLarge: _this.largeMedia.matches && !_this.xLargeMedia.matches,
              isXLarge: _this.xLargeMedia.matches,
              cssOnly: false
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "unsubscribe",
        function() {
          if (_this.xSmallMedia)
            _this.xSmallMedia.removeListener(_this.setSize);
          if (_this.smallMedia) _this.smallMedia.removeListener(_this.setSize);
          if (_this.mediumMedia)
            _this.mediumMedia.removeListener(_this.setSize);
          if (_this.largeMedia) _this.largeMedia.removeListener(_this.setSize);
          if (_this.xLargeMedia)
            _this.xLargeMedia.removeListener(_this.setSize);
        }
      );

      return _this;
    }

    _createClass(
      DeviceSizeProvider,
      [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            if (
              typeof window === "undefined" ||
              typeof window.matchMedia !== "function"
            )
              return;

            if (this.props.cssOnly) {
              this.setSize();
              return;
            }

            this.xSmallMedia = window.matchMedia(
              constants.breakpoints.xSmallAndDown
            );
            this.smallMedia = window.matchMedia(constants.breakpoints.small);
            this.mediumMedia = window.matchMedia(constants.breakpoints.medium);
            this.largeMedia = window.matchMedia(constants.breakpoints.large);
            this.xLargeMedia = window.matchMedia(constants.breakpoints.xLarge);
            this.xSmallMedia.addListener(this.setSize);
            this.smallMedia.addListener(this.setSize);
            this.mediumMedia.addListener(this.setSize);
            this.largeMedia.addListener(this.setSize);
            this.xLargeMedia.addListener(this.setSize);
            this.setSize();
          }
        },
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            if (!this.props.cssOnly) return;
            this.unsubscribe();
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unsubscribe();
          }
        },
        {
          key: "render",
          value: function render() {
            return React.createElement(
              Provider$2,
              {
                value: this.state
              },
              this.props.children
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            if (
              !state.isInitialized &&
              typeof props.fallbackDetection === "function"
            ) {
              var fallbackDetectionResult = props.fallbackDetection();

              if (
                _typeof(fallbackDetectionResult) === "object" &&
                fallbackDetectionResult !== null
              ) {
                return _objectSpread({}, fallbackDetectionResult);
              }
            }

            return null;
          }
        }
      ]
    );

    return DeviceSizeProvider;
  })(React.Component);

_defineProperty(DeviceSizeProvider, "propTypes", {
  children: PropTypes.node.isRequired,
  // https://github.com/yannickcr/eslint-plugin-react/issues/1751
  // eslint-disable-next-line
  fallbackDetection: PropTypes.func,
  cssOnly: PropTypes.bool
});

_defineProperty(DeviceSizeProvider, "defaultProps", {
  fallbackDetection: null,
  cssOnly: false
});

_defineProperty(DeviceSizeProvider, "initialState", {
  isInitialized: false,
  isXSmall: false,
  isSmall: true,
  isMedium: false,
  isLarge: false,
  isXLarge: false,
  cssOnly: false
});

var _React$createContext$5 = React.createContext(),
  Consumer$5 = _React$createContext$5.Consumer,
  Provider$5 = _React$createContext$5.Provider;

var ScrollObserverProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ScrollObserverProvider, _React$Component);

    function ScrollObserverProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ScrollObserverProvider);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ScrollObserverProvider)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          scrollY: 0
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onScroll",
        /* istanbul ignore next */
        function() {
          /* istanbul ignore next */
          if (!_this.ticking && !_this.isUnmounting) {
            window.requestAnimationFrame(_this.notify);
            _this.ticking = true;
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "ticking",
        false
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "notify",
        /* istanbul ignore next */
        function() {
          /* istanbul ignore next */
          if (_this.isUnmounting) return;
          /* istanbul ignore next */

          _this.ticking = false;
          /* istanbul ignore next */

          var scrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          /* istanbul ignore next */

          _this.setState(function() {
            return {
              scrollY: scrollY
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "subscribe",
        function() {
          if (!_this.props.hasWindow) return;
          window.addEventListener("scroll", _this.onScroll, {
            passive: true
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "unsubscribe",
        function() {
          if (!_this.props.hasWindow) return;
          window.removeEventListener("scroll", _this.onScroll);
        }
      );

      return _this;
    }

    _createClass(ScrollObserverProvider, [
      {
        key: "componentDidMount",
        // eslint-disable-line
        value: function componentDidMount() {
          this.isUnmounting = false;
          this.subscribe();
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isUnmounting = true;
          this.unsubscribe();
        }
      },
      {
        key: "render",
        value: function render() {
          return React.createElement(
            Provider$5,
            {
              value: this.state
            },
            this.props.children
          );
        }
      }
    ]);

    return ScrollObserverProvider;
  })(React.Component);

_defineProperty(ScrollObserverProvider, "propTypes", {
  children: PropTypes.node.isRequired,
  hasWindow: PropTypes.bool
});

_defineProperty(ScrollObserverProvider, "defaultProps", {
  hasWindow: typeof window !== "undefined"
});

var ScrollObserverConsumer = function ScrollObserverConsumer(_ref) {
  var children = _ref.children;
  return React.createElement(Consumer$5, null, function(val) {
    return children && children(val);
  });
};

ScrollObserverConsumer.propTypes = {
  children: PropTypes.func
};
ScrollObserverConsumer.defaultProps = {
  children: null
};

var _React$createContext$6 = React.createContext({
    selected: [],
    onClick: function onClick() {
      return null;
    }
  }),
  Provider$6 = _React$createContext$6.Provider,
  Consumer$6 = _React$createContext$6.Consumer;

var _React$createContext$7 = React.createContext({
    focused: null,
    focusSelected: function focusSelected() {
      return null;
    }
  }),
  Provider$7 = _React$createContext$7.Provider,
  Consumer$7 = _React$createContext$7.Consumer;

var RadioInput = styled.input
  .attrs({
    type: "radio"
  })
  .withConfig({
    displayName: "RadioInput",
    componentId: "sc-1lyb4v5-0"
  })(
  [
    "cursor:pointer;margin:0;appearance:none;position:relative;outline:none;transition:transform 0.1s ",
    ';background:none;border:none;&:active{transform:scale(0.95,0.95);}.radio-button--large &{width:24px;height:24px;}.radio-button--small &{width:16px;height:16px;}&:before{content:"";transition:box-shadow 0.3s ',
    ";position:absolute;background-color:transparent;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;border:",
    ";.radio-button--large &{width:24px;height:24px;}.radio-button--small &{width:16px;height:16px;}.radio-button--disabled &{border:",
    ';}}&:after{content:"";transition:width 0.3s ',
    ",height 0.3s ",
    ",opacity 0.3s ",
    ";position:absolute;opacity:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;background-color:",
    ";.radio-button--large &{width:8px;height:8px;}.radio-button--small &{width:5px;height:5px;}.radio-button--disabled &{background-color:",
    ";}}&:focus:before{outline:none;border-width:1px;border-color:",
    ";box-shadow:",
    ";}&:hover:before{border-width:2px;border-color:",
    ";.radio-button--large &{width:23px;height:23px;}.radio-button--small &{width:15px;height:15px;}}&:checked:after{position:absolute;opacity:1;.radio-button--large &{width:12px;height:12px;}.radio-button--small &{width:8px;height:8px;}}"
  ],
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  function(_ref) {
    var themeName = _ref.theme.themeName;
    return "1px solid ".concat(themes[themeName].gray02);
  },
  function(_ref2) {
    var themeName = _ref2.theme.themeName;
    return "1px solid ".concat(themes[themeName].gray01);
  },
  constants.easing.elastic,
  constants.easing.elastic,
  constants.easing.elastic,
  function(_ref3) {
    var themeName = _ref3.theme.themeName;
    return themes[themeName].primary.base;
  },
  function(_ref4) {
    var themeName = _ref4.theme.themeName;
    return themes[themeName].gray01;
  },
  function(_ref5) {
    var themeName = _ref5.theme.themeName;
    return themes[themeName].primary.base;
  },
  function(_ref6) {
    var themeName = _ref6.theme.themeName;
    return "0 0 5px 0 ".concat(themes[themeName].primary.base);
  },
  function(_ref7) {
    var themeName = _ref7.theme.themeName;
    return themes[themeName].primary.base;
  }
);

var RadioInputComponent =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(RadioInputComponent, _React$Component);

    function RadioInputComponent(props) {
      var _this;

      _classCallCheck(this, RadioInputComponent);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(RadioInputComponent).call(this, props)
      );
      _this.SelectedElement = React.createRef();
      return _this;
    }

    _createClass(RadioInputComponent, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isFocused && this.SelectedElement.current) {
            this.SelectedElement.current.focus();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            name = _this$props.name,
            value = _this$props.value,
            size = _this$props.size,
            isActive = _this$props.isActive,
            checked = _this$props.checked,
            props = _objectWithoutProperties(_this$props, [
              "name",
              "value",
              "size",
              "isActive",
              "checked"
            ]);

          return React.createElement(
            RadioInput,
            _extends(
              {
                value: value,
                name: name,
                size: size,
                id: "".concat(name + value, "input"),
                disabled: !isActive,
                checked: checked,
                "aria-labelledby": "".concat(name + value, "label"),
                "aria-checked": checked
              },
              props,
              {
                ref: this.SelectedElement
              }
            )
          );
        }
      }
    ]);

    return RadioInputComponent;
  })(React.Component);

_defineProperty(RadioInputComponent, "propTypes", {
  size: PropTypes.oneOf(["large", "small"]),
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  isFocused: PropTypes.bool.isRequired
});

_defineProperty(RadioInputComponent, "defaultProps", {
  size: "small",
  isActive: true,
  onClick: null
});

var RadioWrapper = styled.label.withConfig({
  displayName: "RadioButton__RadioWrapper",
  componentId: "sc-1548ewp-0"
})(
  [
    "position:relative;cursor:pointer;margin:0;display:flex;align-items:center;text-align:left;color:",
    ";outline:none;min-height:44px;&.radio-button--disabled{opacity:0.4;cursor:default;pointer-events:none;}&.radio-button--large{font-size:16px;line-height:1.5;}&.radio-button--small{font-size:14px;line-height:1.5;}"
  ],
  function(_ref) {
    var themeName = _ref.theme.themeName;
    return themes[themeName].gray01;
  }
);
var RadioText = styled.span.withConfig({
  displayName: "RadioButton__RadioText",
  componentId: "sc-1548ewp-1"
})([
  "display:flex;outline:none;align-items:center;justify-content:center;margin-left:7px;"
]);

var RadioButton = function RadioButton(_ref2) {
  var name = _ref2.name,
    value = _ref2.value,
    size = _ref2.size,
    isActive = _ref2.isActive,
    children = _ref2.children,
    index = _ref2.index,
    props = _objectWithoutProperties(_ref2, [
      "name",
      "value",
      "size",
      "isActive",
      "children",
      "index"
    ]);

  return React.createElement(Consumer$7, null, function(_ref3) {
    var focused = _ref3.focused,
      focusSelected = _ref3.focusSelected;
    return React.createElement(Consumer$6, null, function(_ref4) {
      var selected = _ref4.selected,
        onClick = _ref4.onClick;
      var isChecked = selected.includes(value);
      return React.createElement(
        RadioWrapper,
        {
          className: classNames({
            "radio-button--small": size === "small",
            "radio-button--large": size === "large",
            "radio-button--disabled": !isActive
          }),
          id: "".concat(name + value, "label"),
          theme: props.theme,
          role: "radio"
        },
        React.createElement(
          RadioInputComponent,
          _extends(
            {
              value: value,
              name: name,
              isActive: isActive,
              size: size,
              checked: isChecked,
              onChange: composeHandler(
                function() {
                  return onClick({
                    value: value
                  });
                },
                function() {
                  return focusSelected({
                    index: index
                  });
                },
                props.onClick
              )
            },
            props,
            {
              isFocused: focused === index
            }
          )
        ),
        React.createElement(RadioText, null, children)
      );
    });
  });
};

RadioButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    themeName: PropTypes.string
  })
};
RadioButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  onClick: null,
  theme: {
    themeName: "tm"
  }
};
RadioButton.displayName = "RadioButton";

var CheckBoxInput = styled.input
  .attrs({
    type: "checkbox"
  })
  .withConfig({
    displayName: "CheckBoxInputstyles",
    componentId: "fc3vfj-0"
  })(
  [
    "outline:none;margin:0;appearance:none;position:relative;background-color:",
    ";border-color:",
    ";border-radius:",
    ';.checkbox--large &{width:24px;height:24px;}.checkbox--small &{width:16px;height:16px;}&:active{transform:scale(0.95,0.95);}&:before{content:"";box-sizing:border-box;background-color:transparent;border-radius:',
    ";border:1px solid ",
    ";position:absolute;cursor:pointer;transition:border-width 0.3s ",
    ";transition:border-color 0.3s ",
    ";.checkbox--large &{width:24px;height:24px;}.checkbox--small &{width:16px;height:16px;}&.checkbox--disabled{color:grey;}}&:hover:before{border-width:2px;border-color:",
    ";}&:focus:before{outline:none;box-shadow:",
    ";border-color:",
    ';.checkbox--small &{width:16px;height:16px;}.checkbox--large &{width:24px;height:24px;}}&::after{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.7,0.7);border-radius:',
    ";background-color:",
    ";cursor:pointer;transition:all 0.3s ",
    ";.checkbox--disabled &{background-color:",
    ";}.checkbox--small.checkbox__indeterminate &{width:8px;height:2px;transform:translate(-50%,-50%) scale(1,1);}.checkbox--large.checkbox__indeterminate &{width:12px;height:2px;transform:translate(-50%,-50%) scale(1,1);}}"
  ],
  getThemeValue("white", "base"),
  getThemeValue("gray02"),
  constants.borderRadius.small,
  constants.borderRadius.small,
  getThemeValue("gray02"),
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("primary", "base"),
  function(_ref) {
    var themeName = _ref.theme.themeName;
    return "0 0 5px 0 ".concat(themes[themeName].primary.base);
  },
  getThemeValue("primary", "base"),
  constants.borderRadius.small,
  getThemeValue("primary", "base"),
  constants.easing.elastic,
  getThemeValue("gray02")
);

var CheckBoxInputComponent =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(CheckBoxInputComponent, _React$Component);

    function CheckBoxInputComponent(props) {
      var _this;

      _classCallCheck(this, CheckBoxInputComponent);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CheckBoxInputComponent).call(this, props)
      );
      _this.SelectedElement = React.createRef();
      return _this;
    }

    _createClass(CheckBoxInputComponent, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isFocused && this.SelectedElement.current) {
            this.SelectedElement.current.focus();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            name = _this$props.name,
            value = _this$props.value,
            size = _this$props.size,
            disabled = _this$props.disabled,
            isChecked = _this$props.isChecked,
            props = _objectWithoutProperties(_this$props, [
              "name",
              "value",
              "size",
              "disabled",
              "isChecked"
            ]);

          return React.createElement(
            CheckBoxInput,
            _extends({}, props, {
              value: value,
              name: name,
              id: "".concat(name + value, "input"),
              disabled: disabled,
              checked: isChecked,
              ref: this.SelectedElement
            })
          );
        }
      }
    ]);

    return CheckBoxInputComponent;
  })(React.Component);

_defineProperty(CheckBoxInputComponent, "propTypes", {
  size: PropTypes.oneOf(["large", "small"]),
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  isFocused: PropTypes.bool
});

_defineProperty(CheckBoxInputComponent, "defaultProps", {
  size: "small",
  disabled: false,
  isFocused: false,
  onChange: function onChange() {
    return null;
  }
});

var Checkmark = function Checkmark(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 24 28",
      width: size,
      height: size,
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 3,
      fill: "none",
      fillRule: "evenodd"
    }),
    children,
    React.createElement("path", {
      d: "M5.215 12.219l4.437 4.439 9.514-9.433"
    })
  );
};

Checkmark.displayName = "Checkmark";
Checkmark.defaultProps = {
  size: 24,
  color: "currentcolor",
  children: null
};
Checkmark.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};

var CheckBoxWrapper = styled.label.withConfig({
  displayName: "CheckBoxstyles__CheckBoxWrapper",
  componentId: "sc-1dhvyoi-0"
})(
  [
    "position:relative;outline:none;cursor:pointer;display:flex;align-items:center;text-align:left;&.checkbox--disabled{opacity:0.4;pointer-events:none;}&.checkbox--large{font-size:",
    ";line-height:1.25;}&.checkbox--small{font-size:",
    ";line-height:1.29;}"
  ],
  typography.size.kilo,
  typography.size.hecto
);
var CheckBoxText = styled.span.withConfig({
  displayName: "CheckBoxstyles__CheckBoxText",
  componentId: "sc-1dhvyoi-1"
})(
  [
    "color:",
    ";display:flex;outline:none;align-items:center;justify-content:flex-start;margin-left:7px;width:90%;"
  ],
  getThemeValue("gray01")
);
var CheckDivStyling = styled.div.withConfig({
  displayName: "CheckBoxstyles__CheckDivStyling",
  componentId: "sc-1dhvyoi-2"
})(
  [
    "width:100%;height:100%;display:flex;align-items:center;justify-content:left;position:absolute;opacity:0;color:",
    ";transition:opacity 0.3s ",
    ";.checkbox__checked &{opacity:1;}.checkbox__indeterminate &{display:none;}.checkbox--disabled &{color:",
    ";}"
  ],
  getThemeValue("primary", "base"),
  constants.easing.elastic,
  getThemeValue("gray02")
);
var StyledCheckmark = styled(Checkmark).withConfig({
  displayName: "CheckBoxstyles__StyledCheckmark",
  componentId: "sc-1dhvyoi-3"
})(
  [
    "transition:all 0.3s ",
    ";margin-top:3px;transform:scale(0.7,0.7);.checkbox__checked &{transform:scale(1,1);}"
  ],
  constants.easing.elastic
);

var CheckBoxButton = function CheckBoxButton(_ref) {
  var name = _ref.name,
    value = _ref.value,
    size = _ref.size,
    disabled = _ref.disabled,
    children = _ref.children,
    index = _ref.index,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, [
      "name",
      "value",
      "size",
      "disabled",
      "children",
      "index",
      "style"
    ]);

  return React.createElement(Consumer$7, null, function(_ref2) {
    var focused = _ref2.focused,
      focusSelected = _ref2.focusSelected;
    return React.createElement(Consumer$6, null, function(_ref3) {
      var selected = _ref3.selected,
        onClick = _ref3.onClick;
      var isChecked = props.isChecked
        ? Boolean(props.isChecked)
        : selected.includes(value);
      return React.createElement(
        CheckBoxWrapper,
        {
          className: classNames({
            "checkbox--small": size === "small",
            "checkbox--large": size === "large",
            "checkbox--disabled": disabled,
            checkbox__indeterminate: props.isChecked === "indeterminate",
            checkbox__checked: isChecked
          }),
          style: style
        },
        React.createElement(
          CheckBoxInputComponent,
          _extends(
            {},
            props,
            {
              value: value,
              name: name,
              id: name + value,
              disabled: disabled,
              size: size,
              isChecked: isChecked,
              onClick: composeHandler(
                function() {
                  return onClick({
                    value: value
                  });
                },
                function() {
                  return focusSelected({
                    index: index
                  });
                },
                props.onClick
              )
            },
            index !== null && {
              isFocused: focused === index
            }
          )
        ),
        React.createElement(
          CheckDivStyling,
          null,
          React.createElement(StyledCheckmark, {
            size: size === "small" ? 16 : 24
          })
        ),
        React.createElement(
          CheckBoxText,
          {
            role: "checkbox",
            "aria-labelledby": name + value,
            "aria-checked": isChecked
          },
          children
        )
      );
    });
  });
};

CheckBoxButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  isChecked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["indeterminate"])
  ])
};
CheckBoxButton.defaultProps = {
  size: "small",
  children: null,
  disabled: false,
  onClick: null,
  index: null,
  isChecked: null,
  style: {}
};

var ItemSelectionProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ItemSelectionProvider, _React$Component);

    function ItemSelectionProvider(props) {
      var _this;

      _classCallCheck(this, ItemSelectionProvider);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(ItemSelectionProvider).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "componentDidMount",
        function() {
          _this.setState({
            onClick: _this.onClick // eslint-disable-line
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onClick",
        function(_ref) {
          var value = _ref.value;
          var _this$props = _this.props,
            isMultiSelect = _this$props.isMultiSelect,
            onChange = _this$props.onChange;
          var selected = _this.state.selected;
          var updatedSelections = isMultiSelect
            ? updateOpenIndexMultiple(selected, value)
            : [value];

          _this.setState({
            selected: updatedSelections
          });

          if (onChange) onChange(updatedSelections);
        }
      );

      var _value = props.value,
        valueOverride = props.valueOverride;
      _this.state = {
        selected: Array.isArray(valueOverride) ? valueOverride : _value
      };
      return _this;
    }

    _createClass(
      ItemSelectionProvider,
      [
        {
          key: "render",
          value: function render() {
            return React.createElement(
              Provider$6,
              {
                value: this.state
              },
              this.props.children
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props) {
            var valueOverride = props.valueOverride;
            return Array.isArray(valueOverride)
              ? {
                  selected: valueOverride
                }
              : null;
          }
        }
      ]
    );

    return ItemSelectionProvider;
  })(React.Component);

_defineProperty(ItemSelectionProvider, "propTypes", {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  isMultiSelect: PropTypes.bool.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-line
  valueOverride: PropTypes.arrayOf(PropTypes.string) // eslint-disable-line
});

_defineProperty(ItemSelectionProvider, "defaultProps", {
  value: [],
  valueOverride: null,
  onChange: null
});

var TAB = 9;
var ESCAPE = 27;
var ARROWUP = 38;
var ARROWDOWN = 40;
var SPACEBAR = 32;

var forEach = React.Children.forEach;

var getSelectedChild = function getSelectedChild(children, selectedValue) {
  return React.Children.toArray(children).find(function(thisArg) {
    return thisArg.props.value === selectedValue;
  });
};

var KeyBoardProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(KeyBoardProvider, _React$Component);

    function KeyBoardProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, KeyBoardProvider);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(KeyBoardProvider)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onClick",
        function(_ref) {
          var index = _ref.index;

          _this.setState(function() {
            return {
              focused: index
            };
          });

          _this.setState({
            word: ""
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onKeyDown",
        function(event) {
          var keywordSearch = _this.props.keywordSearch; // heres the logic for looking up words with in the drop down options with the keyboard
          // it currently matches based on the text that has been typed

          if (keywordSearch) {
            var word = _this.state.word;

            if (event.keyCode > 48 && event.keyCode < 90) {
              var temp = word + event.key;

              _this.setState(
                {
                  word: temp
                },
                function() {
                  return _this.searchValue(temp);
                }
              );
            }

            if (event.keyCode === SPACEBAR)
              _this.setState({
                word: ""
              });
          }

          if ([ARROWUP, ARROWDOWN].includes(event.keyCode)) {
            event.preventDefault();

            _this.cycleSelect(event.keyCode);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "searchValue",
        function(string) {
          var children = _this.props.children;
          var childrenArray = React.Children.toArray(children);
          var firstMatch = childrenArray.find(function(thisArg) {
            return (
              thisArg.props.children
                .substring(0, string.length)
                .toLowerCase() === string
            );
          });
          if (firstMatch)
            _this.setState(function() {
              return {
                focused: firstMatch.props.index
              };
            });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "cycleSelect",
        function(key) {
          var focused = _this.state.focused;
          var children = _this.props.children;

          if (key === ARROWUP && focused <= 0) {
            _this.setState(function() {
              return {
                focused: children.length - 1
              };
            });
          }

          if (key === ARROWUP && focused > 0) {
            _this.setState(function(prevState) {
              return {
                focused: prevState.focused - 1
              };
            });
          }

          if (key === ARROWDOWN && focused >= children.length - 1) {
            _this.setState(function() {
              return {
                focused: 0
              };
            });
          }

          if (key === ARROWDOWN && focused < children.length - 1) {
            _this.setState(function(prevState) {
              return {
                focused: prevState.focused + 1
              };
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          focused: 0,
          focusSelected: _this.onClick,
          word: "",
          firstUpdate: true,
          prevSelectedValue: ""
        }
      );

      return _this;
    }

    _createClass(
      KeyBoardProvider,
      [
        {
          key: "render",

          /* eslint-enable */
          value: function render() {
            var _this$props = this.props,
              role = _this$props.role,
              className = _this$props.className,
              keyBoardRef = _this$props.keyBoardRef;
            return React.createElement(
              Provider$7,
              {
                value: this.state
              },
              React.createElement(
                "div",
                {
                  role: role,
                  className: className,
                  ref: keyBoardRef,
                  onKeyDown: this.onKeyDown
                },
                this.props.children
              )
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            var selected = props.selected,
              children = props.children;
            if (!selected || !selected.length) return null;
            var selectedValue = selected[selected.length - 1];

            if (state.firstUpdate === true) {
              var selectedChild = getSelectedChild(children, selectedValue);
              return {
                focused: selectedChild ? selectedChild.props.index : 0,
                firstUpdate: false,
                prevSelectedValue: selectedValue
              };
            }

            if (selectedValue !== state.prevSelectedValue) {
              var _selectedChild = getSelectedChild(children, selectedValue);

              return {
                focused: _selectedChild ? _selectedChild.props.index : 0,
                prevSelectedValue: selectedValue
              };
            }

            return null;
          }
        }
      ]
    );

    return KeyBoardProvider;
  })(React.Component);

_defineProperty(KeyBoardProvider, "propTypes", {
  children: function children(props, propName, componentName) {
    if (props[propName] === null) return new Error("Invalid Child");
    forEach(props[propName], function(child) {
      if (!child.props.value || !child.props.index) {
        return new Error(
          "Invalid Child `".concat(child, "` supplied to") +
            " `".concat(componentName, "`. Validation failed.")
        );
      }

      return null;
    });
    return null;
  },
  role: PropTypes.string.isRequired,
  className: PropTypes.string,
  keywordSearch: PropTypes.bool,
  keyBoardRef: PropTypes.func
});

_defineProperty(KeyBoardProvider, "defaultProps", {
  children: null,
  keyBoardRef: null,
  className: null,
  keywordSearch: false
});

var RadioGroup = function RadioGroup(_ref) {
  var onChange = _ref.onChange,
    children = _ref.children,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, ["onChange", "children", "value"]);

  return React.createElement(
    ItemSelectionProvider,
    {
      onChange: onChange,
      isMultiSelect: false,
      value: value
    },
    React.createElement(
      KeyBoardProvider,
      _extends(
        {
          role: "radiogroup"
        },
        props
      ),
      children
    )
  );
};

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.arrayOf(PropTypes.string)
};
RadioGroup.defaultProps = {
  children: null,
  onChange: null,
  value: []
};
RadioGroup.displayName = "RadioGroup";

var CheckBoxGroup = function CheckBoxGroup(_ref) {
  var onChange = _ref.onChange,
    children = _ref.children,
    value = _ref.value;
  return React.createElement(
    ItemSelectionProvider,
    {
      onChange: onChange,
      value: value,
      isMultiSelect: true
    },
    React.createElement(
      KeyBoardProvider,
      {
        role: "checkbox"
      },
      children
    )
  );
};

CheckBoxGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.arrayOf(PropTypes.string)
};
CheckBoxGroup.defaultProps = {
  children: null,
  onChange: null,
  value: []
};

/* stylelint-disable no-descending-specificity */
var FieldInputWrapper = styled.div.withConfig({
  displayName: "Inputstyles__FieldInputWrapper",
  componentId: "sc-1vi2q2x-0"
})([
  "display:flex;position:relative;&.text--input-top{flex-direction:column;justify-content:left;}&.text--input-left{flex-direction:row;}&.text--input-disabled{pointer-events:none;opacity:0.4;}"
]);
var FieldInputText = styled.label.withConfig({
  displayName: "Inputstyles__FieldInputText",
  componentId: "sc-1vi2q2x-1"
})(
  [
    "font-size:",
    ";line-height:1.25;text-align:left;color:",
    ";position:relative;.text--input-small &{font-size:",
    ";}.text--input-large &{font-size:",
    ";}.text--input-disabled &{opacity:0.4;}.text--input-top &{margin-bottom:6px;}.text--input-left &{margin-right:11px;margin-top:10px;}.text--input-left.text--input-small &{margin-top:5px;}.text--input-left.text--input-large &{margin-top:14px;}"
  ],
  typography.size.uno,
  getThemeValue("gray01"),
  typography.size.mini,
  typography.size.hecto
);
var ErrorBoxWrapper = styled.div.withConfig({
  displayName: "Inputstyles__ErrorBoxWrapper",
  componentId: "sc-1vi2q2x-2"
})(["display:flex;flex-direction:column;flex-grow:2;"]);
var FieldInputBox = styled.input
  .attrs({
    type: "text"
  })
  .withConfig({
    displayName: "Inputstyles__FieldInputBox",
    componentId: "sc-1vi2q2x-3"
  })(
  [
    "height:36px;width:100%;box-sizing:border-box;border-radius:",
    ";background-color:",
    ";border:1px solid ",
    ";padding-left:10px;padding-right:10px;line-height:normal;font-size:",
    ";color:",
    ";textarea&{resize:none;min-height:180px;padding-top:11px;padding-bottom:11px;}&.text--input-left{flex-grow:2;}&::placeholder{color:",
    ";opacity:0.4;}&::-ms-input-placeholder{color:",
    ";opacity:0.4;}&:-ms-input-placeholder{color:",
    ";opacity:0.4;}&:focus{border:1px solid ",
    ";padding-left:10px;padding-right:10px;border-radius:",
    ";box-shadow:0 0 4px 0 inset ",
    ";background-color:",
    ";outline:none;.text--input-small &{padding-left:8px;padding-right:8px;}.text--input-large &{padding-left:12px;padding-right:12px;}}&:hover{border:2px solid ",
    ";.text__error &{border:1px solid ",
    ";padding-left:10px;padding-right:10px;}.text__error.text--input-small &{padding-left:8px;padding-right:8px;}.text__error.text--input-large &{padding-left:12px;padding-right:12px;}padding-left:9px;padding-right:9px;textarea&{padding-top:10px;padding-bottom:10px;}.text--input-small &{padding-left:7px;padding-right:7px;}.text--input-large &{padding-left:11px;padding-right:11px;}}.text--input-small &{height:24px;font-size:",
    ";padding-left:8px;padding-right:8px;}.text--input-large &{height:44px;font-size:",
    ";padding-left:12px;padding-right:12px;}.text__error &{border:1px solid ",
    ";}"
  ],
  constants.borderRadius.small,
  getThemeValue("white", "base"),
  getThemeValue("gray02"),
  typography.size.hecto,
  getThemeValue("gray01"),
  getThemeValue("gray01"),
  getThemeValue("gray01"),
  getThemeValue("gray01"),
  getThemeValue("primary", "base"),
  constants.borderRadius.small,
  getThemeValue("primary", "base"),
  getThemeValue("white", "base"),
  getThemeValue("primary", "base"),
  getThemeValue("error", "base"),
  typography.size.uno,
  typography.size.kilo,
  getThemeValue("error", "base")
);
var FieldErrorText = styled.label.withConfig({
  displayName: "Inputstyles__FieldErrorText",
  componentId: "sc-1vi2q2x-4"
})(
  [
    "opacity:0;font-size:",
    ";line-height:1.25;text-align:left;color:",
    ";position:relative;margin-top:1px;transition:opacity 0.3s ",
    ";.text--input-disabled &{opacity:0.4;}.text__error &{opacity:1;}"
  ],
  typography.size.uno,
  getThemeValue("error", "base"),
  constants.easing.easeInOutQuad
);

var Input$1 = function Input(_ref) {
  var labelPosition = _ref.labelPosition,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    label = _ref.label,
    name = _ref.name,
    errorMessage = _ref.errorMessage,
    size = _ref.size,
    tag = _ref.tag,
    rest = _objectWithoutProperties(_ref, [
      "labelPosition",
      "placeholder",
      "disabled",
      "label",
      "name",
      "errorMessage",
      "size",
      "tag"
    ]);

  var sluggified = sluggify(name + label);
  return React.createElement(
    FieldInputWrapper,
    {
      className: classNames(
        "text--input-".concat(size),
        "text--input-".concat(labelPosition),
        {
          "text--input-disabled": disabled,
          text__error: errorMessage
        }
      )
    },
    React.createElement(
      FieldInputText,
      {
        id: "".concat(sluggified, "__label")
      },
      label
    ),
    React.createElement(
      ErrorBoxWrapper,
      null,
      React.createElement(
        FieldInputBox,
        _extends(
          {
            placeholder: disabled ? "" : placeholder,
            name: name,
            id: "".concat(sluggified, "__input"),
            disabled: disabled,
            as: tag
          },
          rest,
          {
            "aria-labelledby": "".concat(sluggified, "__label")
          }
        )
      ),
      React.createElement(
        FieldErrorText,
        {
          role: "alert",
          "aria-invalid": errorMessage !== null
        },
        errorMessage
      )
    )
  );
};

Input$1.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  tag: PropTypes.oneOf(["textarea", "input"])
};
Input$1.defaultProps = {
  children: null,
  labelPosition: TOP,
  placeholder: "",
  disabled: false,
  label: "",
  errorMessage: null,
  size: REGULAR,
  tag: "input"
};

var _React$createContext$8 = React.createContext({
    isOpen: false,
    onClose: null
  }),
  Provider$8 = _React$createContext$8.Provider,
  Consumer$8 = _React$createContext$8.Consumer;

var StyledDropDownItem = styled.span.withConfig({
  displayName: "DropDownInput__StyledDropDownItem",
  componentId: "sc-2rfguq-0"
})(
  [
    "cursor:pointer;box-sizing:border-box;.dropdown__items &{appearance:none;height:36px;margin:4px 8px 0 8px;padding:7px 12px;font-size:",
    ";text-align:left;border:none;background-color:",
    ";align-items:center;overflow-x:hidden;text-overflow:ellipsis;color:",
    ";line-height:1.25;&:hover,&:focus,&.dropdown__selected{border-radius:",
    ";color:",
    ";}&:hover,&:focus{background-color:",
    ";}&:focus{outline:none;}&.dropdown__selected{color:",
    ";background-color:",
    ";}}.dropdown__items.dropdown__items--small &{height:32px;font-size:",
    ";line-height:1.3;}"
  ],
  typography.size.kilo,
  getThemeValue("white", "base"),
  getThemeValue("gray01"),
  constants.borderRadius.small,
  getThemeValue("white", "base"),
  getThemeValue("primary", "base"),
  getThemeValue("gray01"),
  getThemeValue("gray04"),
  typography.size.hecto
);

var DropDownInput =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DropDownInput, _React$Component);

    function DropDownInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DropDownInput);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DropDownInput)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "SelectedElement",
        React.createRef()
      );

      return _this;
    }

    _createClass(DropDownInput, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (
            this.props.isOpen &&
            this.props.isFocused &&
            this.SelectedElement.current
          ) {
            this.SelectedElement.current.focus();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            value = _this$props.value,
            index = _this$props.index,
            children = _this$props.children,
            isSelected = _this$props.isSelected,
            className = _this$props.className,
            props = _objectWithoutProperties(_this$props, [
              "value",
              "index",
              "children",
              "isSelected",
              "className"
            ]);

          return React.createElement(
            StyledDropDownItem,
            _extends(
              {
                role: "option",
                tabIndex: "-1",
                value: value,
                index: index,
                ref: this.SelectedElement
              },
              props,
              {
                className: classNames(
                  _defineProperty(
                    {
                      dropdown__selected: isSelected
                    },
                    className,
                    !!className
                  )
                )
              }
            ),
            children
          );
        }
      }
    ]);

    return DropDownInput;
  })(React.Component);

_defineProperty(DropDownInput, "propTypes", {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  className: PropTypes.string
});

_defineProperty(DropDownInput, "defaultProps", {
  className: ""
});

var DropDownOption = function DropDownOption(_ref) {
  var value = _ref.value,
    index = _ref.index,
    children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, [
      "value",
      "index",
      "children",
      "className"
    ]);

  return React.createElement(Consumer$7, null, function(_ref2) {
    var focused = _ref2.focused,
      focusSelected = _ref2.focusSelected;
    return React.createElement(Consumer$6, null, function(_ref3) {
      var selected = _ref3.selected,
        onClick = _ref3.onClick;
      var isChecked = selected.includes(value);
      return React.createElement(Consumer$8, null, function(_ref4) {
        var isOpen = _ref4.isOpen,
          onClose = _ref4.onClose;
        return React.createElement(
          DropDownInput,
          _extends({}, props, {
            className: className,
            isOpen: isOpen,
            value: value,
            index: index,
            selected: selected,
            isSelected: isChecked,
            isFocused: focused === index,
            onKeyDown: function onKeyDown(e) {
              if (e.keyCode === SPACEBAR) {
                onClick({
                  value: value
                });
                e.preventDefault();
              }
            },
            onClick: composeHandler(
              function() {
                return onClose();
              },
              function() {
                return onClick({
                  value: value
                });
              },
              function() {
                return focusSelected({
                  index: index
                });
              },
              props.onClick
            )
          }),
          children
        );
      });
    });
  });
};

DropDownOption.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};
DropDownOption.defaultProps = {
  onClick: null,
  className: ""
};

var TWO_SIZE_VARIANT = ["small", "large"];

var small = constants.borderRadius.small;
var DROP_DOWN_SHADOW = "0 2px 4px 0 rgba(0, 0, 0, 0.12)";
var StyledGroup = styled.label.withConfig({
  displayName: "DropDownGroupstyles__StyledGroup",
  componentId: "sc-1b4fjl8-0"
})(
  [
    "width:100%;height:44px;background-color:",
    ";border-radius:",
    ";position:relative;padding:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:border-color 0.3s ",
    ",z-index 0s ease 0.3s;z-index:",
    ";&.dropdown--small{height:36px;}&.dropdown--border{border:solid 1px ",
    ";text-align:left;}&.dropdown--no-border{border:solid 2px ",
    ";text-align:right;justify-content:flex-end;}&.dropdown--active{margin:0;border:solid 1px ",
    ";border-radius:",
    " ",
    " 0 0;z-index:",
    ";transition:border-color 0.3s ",
    ",z-index 0s ease;}.dropdown--disabled &{cursor:default;color:",
    ";transition:none;}.dropdown--open-upward &{border-radius:0 0 ",
    " ",
    ";box-shadow:",
    ";}&:hover:not(.dropdown__label--disabled){border:solid 2px ",
    ";}"
  ],
  getThemeValue("white", "base"),
  small,
  constants.easing.easeInOutQuad,
  zIndex.default,
  getThemeValue("gray02"),
  getThemeValue("white", "base"),
  getThemeValue("gray02"),
  small,
  small,
  zIndex.layout.overlay + 1,
  constants.easing.easeInOutQuad,
  getThemeValue("onyx", "muted"),
  small,
  small,
  DROP_DOWN_SHADOW,
  getThemeValue("primary", "base")
);
var StyledChildWrapper = styled.div.withConfig({
  displayName: "DropDownGroupstyles__StyledChildWrapper",
  componentId: "sc-1b4fjl8-1"
})(
  [
    "position:absolute;display:flex;background-color:",
    ";border-radius:0 0 ",
    " ",
    ";white-space:nowrap;margin-top:-1px;box-shadow:",
    ";min-width:100%;box-sizing:border-box;flex-direction:column;flex:1;width:100%;overflow:hidden;z-index:",
    ";border-color:",
    ";border-style:solid;border-width:0;max-height:0;transition:max-height 0.3s ",
    ",border-width 0s ease 0.3s,padding-top 0s ease 0.3s,padding-bottom 0s ease 0.3s;&.dropdown--clicked{padding-top:4px;padding-bottom:8px;border-width:1px;max-height:606px;transition:max-height 0.3s ",
    ",border-width 0s,padding-top 0s,padding-bottom 0s;}&.dropdown--overflow{overflow-y:auto;}.dropdown--open-upward &{bottom:43px;border-radius:",
    " ",
    " 0 0;box-shadow:",
    ";&.dropdown__items--small{bottom:35px;}}"
  ],
  getThemeValue("white", "base"),
  small,
  small,
  DROP_DOWN_SHADOW,
  zIndex.layout.overlay,
  getThemeValue("gray02"),
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  small,
  small,
  DROP_DOWN_SHADOW
);
var HiddenLabel = styled.span.withConfig({
  displayName: "DropDownGroupstyles__HiddenLabel",
  componentId: "sc-1b4fjl8-2"
})(["display:none;"]);
var StyledGroupWrapper = styled.div.withConfig({
  displayName: "DropDownGroupstyles__StyledGroupWrapper",
  componentId: "sc-1b4fjl8-3"
})(
  [
    "position:relative;color:",
    ";width:100%;outline:none;border-radius:",
    ";&:focus{box-shadow:0 0 5px 0 ",
    ";}"
  ],
  getThemeValue("gray01"),
  small,
  getThemeValue("primary", "base")
);
var StyledChevron = styled(ChevronIcon).withConfig({
  displayName: "DropDownGroupstyles__StyledChevron",
  componentId: "sc-1b4fjl8-4"
})(
  [
    "margin-right:12px;color:",
    ";transition:opacity 0.1s ",
    ";.dropdown--border:hover &{&:not(.dropdown__chevron--disabled){margin-right:11px;}}&.dropdown__icon--hide{opacity:0;}"
  ],
  getThemeValue("gray02"),
  constants.easing.easeInOutQuad
);
var StyledSelectedText = styled.div.withConfig({
  displayName: "DropDownGroupstyles__StyledSelectedText",
  componentId: "sc-1b4fjl8-5"
})(
  [
    "font-size:",
    ";white-space:nowrap;width:85%;overflow:hidden;text-overflow:ellipsis;.dropdown--small &{font-size:",
    ";}.dropdown--border &{margin-left:16px;}.dropdown--no-border &{margin-right:10px;}.dropdown--active.dropdown--no-border &{margin-right:11px;}.dropdown--border:hover &{&:not(.dropdown__text--disabled){margin-left:15px;}}.dropdown--active.dropdown--no-border:hover &{&:not(.dropdown__text--disabled){margin-right:10px;}}"
  ],
  typography.size.kilo,
  typography.size.hecto
);
var StyledKeyboardProvider = styled(KeyBoardProvider).withConfig({
  displayName: "DropDownGroupstyles__StyledKeyboardProvider",
  componentId: "sc-1b4fjl8-6"
})(
  [
    "min-height:min-content;flex-direction:column;display:flex;opacity:0;transition:opacity 0.3s ",
    ";.dropdown--clicked &{transition-delay:0.1s;opacity:1;}"
  ],
  constants.easing.easeInOutQuad
);

var DropDownGroup =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DropDownGroup, _React$Component);

    function DropDownGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DropDownGroup);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DropDownGroup)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onClick",
        function() {
          _this.toggleDropdown();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onKeyDown",
        function(e) {
          var keyCode = e.keyCode;
          var isOpen = _this.state.isOpen;

          switch (keyCode) {
            case ESCAPE:
              _this.closeDropdown();

              break;

            case TAB:
              if (isOpen) {
                e.preventDefault();
              }

              break;

            case ARROWUP:
            case ARROWDOWN:
              e.preventDefault();

              _this.openDropdown();

              break;

            case SPACEBAR:
              e.preventDefault();

              _this.toggleDropdown();

              break;

            default:
              break;
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getCurrentSelection",
        function(value) {
          var selectedItem = React.Children.toArray(_this.props.children).find(
            function(c) {
              return c.props.value === value;
            }
          );
          return selectedItem && selectedItem.props.children;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "closeDropdown",
        function() {
          return _this.setState({
            isOpen: false
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "openDropdown",
        function() {
          return _this.setState({
            isOpen: true
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleDropdown",
        function() {
          if (_this.state.isOpen) {
            _this.closeDropdown();
          } else {
            _this.openDropdown();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "stopInteraction",
        function(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleOutsideClick",
        function(e) {
          if (
            _this.state.isOpen &&
            !_this.groupWrapper.current.contains(e.target)
          ) {
            _this.closeDropdown();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "displayLabel",
        function(selected) {
          var _this$props = _this.props,
            placeholder = _this$props.placeholder,
            label = _this$props.label;

          if (placeholder.length > 0 && selected.length === 0) {
            return placeholder;
          }

          if (selected.length > 0 && label.length > 0) {
            return React.createElement(
              Fragment,
              null,
              label,
              " ",
              _this.getCurrentSelection(selected[0])
            );
          }

          return _this.getCurrentSelection(selected[0]);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "groupWrapper",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "styledChildWrapper",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "ANIMATION_TIMEOUT",
        300
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isOpen: false,
          onClose: _this.onClick
        }
      );

      return _this;
    }

    _createClass(DropDownGroup, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("click", this.handleOutsideClick);
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var isOpen = this.state.isOpen; // scroll dropdown to top after opening

          if (!this.props.isOpen && isOpen && isOpen !== prevState.isOpen) {
            this.styledChildWrapper.current.scrollTop = 0;
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("click", this.handleOutsideClick);
        }
      },
      {
        key: "render",

        /* eslint-enable */
        value: function render() {
          var _this2 = this;

          var _this$props2 = this.props,
            children = _this$props2.children,
            value = _this$props2.value,
            valueOverride = _this$props2.valueOverride,
            onChange = _this$props2.onChange,
            variant = _this$props2.variant,
            isOpenProp = _this$props2.isOpen,
            keywordSearch = _this$props2.keywordSearch,
            withKeyboardProvider = _this$props2.withKeyboardProvider,
            placeholder = _this$props2.placeholder,
            label = _this$props2.label,
            disabled = _this$props2.disabled,
            size = _this$props2.size,
            shouldOpenDownward = _this$props2.shouldOpenDownward,
            props = _objectWithoutProperties(_this$props2, [
              "children",
              "value",
              "valueOverride",
              "onChange",
              "variant",
              "isOpen",
              "keywordSearch",
              "withKeyboardProvider",
              "placeholder",
              "label",
              "disabled",
              "size",
              "shouldOpenDownward"
            ]);

          var isOpenState = this.state.isOpen;
          var isOpen = isOpenProp || isOpenState;
          var hiddenLabelId = "hidden-label__".concat(
            (placeholder || label).replace(/ /g, "_")
          );
          var onClickListener = disabled
            ? {
                onMouseDown: this.stopInteraction
              }
            : {
                onClick: this.onClick
              };
          return React.createElement(
            ItemSelectionProvider,
            {
              onChange: onChange,
              isMultiSelect: false,
              value: value,
              valueOverride: valueOverride
            },
            React.createElement(Consumer$6, null, function(_ref) {
              var selected = _ref.selected;
              var keyboardProviderProps = withKeyboardProvider
                ? {
                    keywordSearch: keywordSearch,
                    selected: selected
                  }
                : {
                    as: "div"
                  };
              return React.createElement(
                Transition,
                {
                  in: isOpen,
                  timeout: _this2.ANIMATION_TIMEOUT
                },
                function(state) {
                  // keep dropdown--open-upward className until collapse animation is finished (.3s)
                  var hasOpenUpwardClass =
                    state !== "exited" && !shouldOpenDownward;
                  return React.createElement(
                    StyledGroupWrapper,
                    _extends({}, props, {
                      className: classNames(props.className, {
                        "dropdown--open-upward": hasOpenUpwardClass,
                        "dropdown--disabled": disabled
                      }),
                      tabIndex: disabled ? -1 : 0,
                      "aria-haspopup": "listbox",
                      "aria-labelledby": hiddenLabelId,
                      onKeyDown: _this2.onKeyDown,
                      ref: _this2.groupWrapper
                    }),
                    React.createElement(
                      StyledGroup,
                      _extends({}, onClickListener, {
                        className: classNames("dropdown--".concat(size), {
                          "dropdown--active": isOpen,
                          "dropdown--border": variant === 0,
                          "dropdown--no-border": variant === 1,
                          "dropdown__label--disabled": disabled
                        })
                      }),
                      React.createElement(
                        HiddenLabel,
                        {
                          id: hiddenLabelId
                        },
                        placeholder || label
                      ),
                      React.createElement(
                        StyledSelectedText,
                        {
                          className: classNames({
                            "dropdown__text--disabled": disabled
                          })
                        },
                        _this2.displayLabel(selected)
                      ),
                      React.createElement(StyledChevron, {
                        className: classNames({
                          "dropdown__icon--hide": isOpen,
                          "dropdown--no-border": variant === 1,
                          "dropdown__chevron--disabled": disabled
                        }),
                        direction: "down",
                        size: 12
                      })
                    ),
                    React.createElement(
                      Transition,
                      {
                        in: isOpen,
                        timeout: _this2.ANIMATION_TIMEOUT
                      },
                      function(wrapperState) {
                        return React.createElement(
                          StyledChildWrapper,
                          {
                            className: classNames(
                              "dropdown__items",
                              "dropdown__items--".concat(size),
                              {
                                "dropdown--clicked": isOpen,
                                "dropdown--overflow": wrapperState === "entered"
                              }
                            ),
                            ref: _this2.styledChildWrapper
                          },
                          React.createElement(
                            Provider$8,
                            {
                              value: _objectSpread({}, _this2.state, {
                                isOpen: isOpen
                              })
                            },
                            React.createElement(
                              StyledKeyboardProvider,
                              _extends(
                                {
                                  role: "listbox",
                                  "aria-labelledby": hiddenLabelId
                                },
                                keyboardProviderProps
                              ),
                              children
                            )
                          )
                        );
                      }
                    )
                  );
                }
              );
            })
          );
        }
      }
    ]);

    return DropDownGroup;
  })(React.Component);

DropDownGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  valueOverride: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.number,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  keywordSearch: PropTypes.bool,
  withKeyboardProvider: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TWO_SIZE_VARIANT),
  shouldOpenDownward: PropTypes.bool
};
DropDownGroup.defaultProps = {
  value: [],
  valueOverride: null,
  onChange: null,
  placeholder: "",
  variant: 0,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  disabled: false,
  size: TWO_SIZE_VARIANT[1],
  shouldOpenDownward: true
};

var TOGGLE_SIZES = ["small", "large"];

var ActiveArea = styled.button.withConfig({
  displayName: "Togglestyles__ActiveArea",
  componentId: "sc-1jtisgg-0"
})([
  "background-color:transparent;border:none;padding:0;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;&.toggle--small{width:44px;}&.toggle--large{width:73px;}&:focus{outline:none;}"
]);
var ReactToggleTrack = styled.div.withConfig({
  displayName: "Togglestyles__ReactToggleTrack",
  componentId: "sc-1jtisgg-1"
})(
  [
    "box-sizing:border-box;padding:0;border-radius:21px;display:flex;align-items:center;justify-content:center;transition:background-color 0.3s ",
    ";.toggle--small &{width:28px;height:16px;border:1px solid;}.toggle--large &{width:42px;height:24px;border:1px solid;}.toggle--active &{background-color:",
    ";border-color:",
    ";}.toggle--inactive &{background-color:",
    ";border-color:",
    ";}",
    ":focus &{border-color:",
    ";box-shadow:0 0 5px 0 ",
    ";}.toggle--enabled:hover &{border:2px solid ",
    ";}.toggle--active.toggle--disabled &{background-color:",
    ";border-color:",
    ";opacity:0.2;}.toggle--inactive.toggle--disabled &{background-color:",
    ";border-color:",
    ";}"
  ],
  constants.easing.easeInOutQuad,
  themes.global.success.base,
  themes.global.success.base,
  themes.global.white.base,
  themes.global.gray02,
  ActiveArea,
  themes.global.primary.base,
  themes.global.primary.base,
  themes.global.primary.base,
  themes.global.success.base,
  themes.global.gray04,
  themes.global.white.muted,
  themes.global.gray04
);
var ReactToggle = styled.div.withConfig({
  displayName: "Togglestyles__ReactToggle",
  componentId: "sc-1jtisgg-2"
})([
  "display:flex;align-items:center;justify-content:flex-start;position:relative;background-color:transparent;border:0;padding:0;user-select:none;"
]);
var ReactThumbCenteringContainer = styled.div.withConfig({
  displayName: "Togglestyles__ReactThumbCenteringContainer",
  componentId: "sc-1jtisgg-3"
})([
  "position:absolute;height:100%;top:0;left:0;display:flex;flex:1;align-self:stretch;align-items:center;justify-content:flex-start;"
]);
var ReactToggleThumb = styled.div.withConfig({
  displayName: "Togglestyles__ReactToggleThumb",
  componentId: "sc-1jtisgg-4"
})(
  [
    "display:flex;align-self:center;border-radius:50%;box-sizing:border-box;position:relative;transition:background-color 0.3s ",
    ",left 0.3s ",
    ";.toggle--small &{width:10px;height:10px;}.toggle--large &{width:18px;height:18px;}.toggle--active &{background-color:",
    ";}.toggle--inactive &{background-color:",
    ";left:3px;}.toggle--active.toggle--disabled &,.toggle--inactive.toggle--disabled &{opacity:0.7;background-color:",
    ";}.toggle--small.toggle--active &{left:15px;}.toggle--large.toggle--active &{left:21px;}"
  ],
  constants.easing.easeInOutQuad,
  constants.easing.elastic,
  themes.global.white.base,
  themes.global.gray02,
  themes.global.gray03
);

var noop$3 = function noop() {};

var Toggle =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Toggle, _Component);

    function Toggle() {
      _classCallCheck(this, Toggle);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Toggle).apply(this, arguments)
      );
    }

    _createClass(Toggle, [
      {
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props = this.props,
            value = _this$props.value,
            size = _this$props.size,
            disabled = _this$props.disabled,
            onClick = _this$props.onClick,
            onToggle = _this$props.onToggle,
            rest = _objectWithoutProperties(_this$props, [
              "value",
              "size",
              "disabled",
              "onClick",
              "onToggle"
            ]);

          return React.createElement(
            ActiveArea,
            _extends(
              {
                className: classNames(
                  disabled ? "toggle--disabled" : "toggle--enabled",
                  value ? "toggle--active" : "toggle--inactive",
                  {
                    "toggle--small": size === "small",
                    "toggle--large": size === "large"
                  }
                ),
                role: "switch",
                "aria-checked": value,
                size: size,
                onClick: composeHandler(onClick, onToggle),
                disabled: disabled
              },
              rest,
              {
                ref: function ref(el) {
                  _this.activeArea = el;
                }
              }
            ),
            React.createElement(
              ReactToggle,
              null,
              React.createElement(ReactToggleTrack, null),
              React.createElement(
                ReactThumbCenteringContainer,
                null,
                React.createElement(ReactToggleThumb, null)
              )
            )
          );
        }
      }
    ]);

    return Toggle;
  })(Component);

_defineProperty(Toggle, "propTypes", {
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(TOGGLE_SIZES),
  disabled: PropTypes.bool
});

_defineProperty(Toggle, "defaultProps", {
  disabled: false,
  onClick: noop$3,
  onToggle: noop$3,
  size: TOGGLE_SIZES[1]
});

var _React$createContext$9 = React.createContext({
    selected: null,
    onChange: null
  }),
  Provider$9 = _React$createContext$9.Provider,
  Consumer$9 = _React$createContext$9.Consumer;
var withButtonGroupConsumer = function withButtonGroupConsumer(Component$$1) {
  return function(props) {
    return React.createElement(Consumer$9, null, function(_ref) {
      var onGroupChange = _ref.onChange,
        _ref$value = _ref.value,
        groupValue = _ref$value === void 0 ? {} : _ref$value;
      return React.createElement(
        Component$$1,
        _extends(
          {
            onGroupChange: onGroupChange,
            groupValue: groupValue
          },
          props
        )
      );
    });
  };
};

var ButtonsSection = styled.div.withConfig({
  displayName: "ButtonGroupSectionContent__ButtonsSection",
  componentId: "pj2fgv-0"
})(["display:flex;flex-wrap:wrap;"]);

var ButtonGroupSectionContent =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ButtonGroupSectionContent, _PureComponent);

    function ButtonGroupSectionContent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ButtonGroupSectionContent);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(
          ButtonGroupSectionContent
        )).call.apply(_getPrototypeOf2, [this].concat(args))
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onChange",
        function() {
          var selected =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];
          var _this$props = _this.props,
            onGroupChange = _this$props.onGroupChange,
            groupValue = _this$props.groupValue,
            sectionValue = _this$props.sectionValue;

          if (selected.length) {
            onGroupChange(
              _objectSpread(
                {},
                groupValue,
                _defineProperty({}, sectionValue, selected)
              )
            );
            return;
          }

          onGroupChange(
            _objectSpread(
              {},
              groupValue,
              _defineProperty({}, sectionValue, undefined)
            )
          );
        }
      );

      return _this;
    }

    _createClass(ButtonGroupSectionContent, [
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            groupValue = _this$props2.groupValue,
            sectionValue = _this$props2.sectionValue,
            isMultiSelect = _this$props2.isMultiSelect,
            valueOverride = _this$props2.valueOverride,
            children = _this$props2.children;
          return React.createElement(
            ButtonsSection,
            null,
            React.createElement(
              ItemSelectionProvider,
              {
                onChange: this.onChange,
                isMultiSelect: isMultiSelect,
                value: groupValue[sectionValue],
                valueOverride: valueOverride
              },
              children
            )
          );
        }
      }
    ]);

    return ButtonGroupSectionContent;
  })(PureComponent);

_defineProperty(ButtonGroupSectionContent, "propTypes", {
  onGroupChange: PropTypes.func.isRequired,
  groupValue: PropTypes.objectOf(PropTypes.any).isRequired,
  sectionValue: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool.isRequired,
  valueOverride: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired
});

_defineProperty(ButtonGroupSectionContent, "defaultProps", {
  valueOverride: null
});

var ButtonGroupSectionContent$1 = withButtonGroupConsumer(
  ButtonGroupSectionContent
);

var StyledText$1 = styled(TextBase).withConfig({
  displayName: "ButtonGroupSection__StyledText",
  componentId: "kbkgoo-0"
})(["line-height:1.25;text-transform:uppercase;"]);

var ButtonGroupSection = function ButtonGroupSection(_ref) {
  var title = _ref.title,
    sectionValue = _ref.value,
    isMultiSelect = _ref.isMultiSelect,
    valueOverride = _ref.valueOverride,
    children = _ref.children;
  return React.createElement(
    Spacing,
    {
      bottom: {
        xSmall: "moderate"
      }
    },
    title &&
      React.createElement(
        Spacing,
        {
          bottom: {
            xSmall: "moderate"
          }
        },
        React.createElement(
          StyledText$1,
          {
            secondary: true,
            size: "uno",
            weight: "semiBold"
          },
          title
        )
      ),
    React.createElement(
      ButtonGroupSectionContent$1,
      {
        isMultiSelect: isMultiSelect,
        sectionValue: sectionValue,
        valueOverride: valueOverride
      },
      children
    )
  );
};

ButtonGroupSection.defaultProps = {
  title: "",
  isMultiSelect: false,
  valueOverride: null
};
ButtonGroupSection.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool,
  valueOverride: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired
};

var ButtonGroupButtonContainer = styled.div.withConfig({
  displayName: "ButtonGroupButton__ButtonGroupButtonContainer",
  componentId: "fs16ve-0"
})(
  [
    "width:50%;&:nth-child(2n + 1){padding-right:",
    ";}&:nth-child(2n){padding-left:",
    ";}"
  ],
  spacing.slim,
  spacing.slim
);
var StyledButton$1 = styled(Button)
  .attrs({
    variant: "outlineGray"
  })
  .withConfig({
    displayName: "ButtonGroupButton__StyledButton",
    componentId: "fs16ve-1"
  })(
  [
    "font-size:",
    ";font-weight:normal;margin-bottom:",
    ";&:hover{border:solid 1px ",
    ";}&:focus{box-shadow:none;}&.button__selected{background-color:",
    ";border:solid 1px ",
    ";}"
  ],
  typography.size.kilo,
  spacing.cozy,
  getThemeValue("brand"),
  getThemeValue("primary", "lightBase"),
  getThemeValue("brand")
);

var ButtonGroupButton = function ButtonGroupButton(_ref) {
  var children = _ref.children,
    value = _ref.value,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, ["children", "value", "onClick"]);

  return React.createElement(Consumer$6, null, function(values) {
    return React.createElement(
      ButtonGroupButtonContainer,
      null,
      React.createElement(
        StyledButton$1,
        _extends(
          {
            onClick: composeHandler(function() {
              return values.onClick({
                value: value
              });
            }, onClick)
          },
          props,
          {
            className: classNames({
              button__selected: values.selected.includes(value)
            })
          }
        ),
        children
      )
    );
  });
};

ButtonGroupButton.defaultProps = {
  onClick: function onClick() {}
};
ButtonGroupButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

var Group = styled.div.withConfig({
  displayName: "ButtonGroup__Group",
  componentId: "sc-1qkwa44-0"
})(
  ["padding:", " ", " 0 ", ";"],
  spacing.normal,
  spacing.moderate,
  spacing.moderate
);
var StyledText$2 = styled(TextBase).withConfig({
  displayName: "ButtonGroup__StyledText",
  componentId: "sc-1qkwa44-1"
})(["line-height:1.25;"]);

var ButtonGroup = function ButtonGroup(_ref) {
  var title = _ref.title,
    children = _ref.children,
    value = _ref.value,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, [
      "title",
      "children",
      "value",
      "onChange"
    ]);

  return React.createElement(
    Group,
    props,
    React.createElement(
      Spacing,
      {
        bottom: {
          xSmall: "moderate"
        }
      },
      React.createElement(
        StyledText$2,
        {
          size: "giga",
          weight: "semiBold"
        },
        title
      )
    ),
    React.createElement(
      Provider$9,
      {
        value: {
          onChange: onChange,
          value: value
        }
      },
      children
    )
  );
};

ButtonGroup.defaultProps = {
  value: {},
  onChange: function onChange() {}
};
ButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.shape({}),
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired
};
ButtonGroup.Section = ButtonGroupSection;
ButtonGroup.Button = ButtonGroupButton;

var QtySelectorMinusIcon = function QtySelectorMinusIcon(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12h16"
      })
    )
  );
};

QtySelectorMinusIcon.displayName = "QtySelectorMinusIcon";
QtySelectorMinusIcon.defaultProps = {
  children: null
};
QtySelectorMinusIcon.propTypes = {
  children: PropTypes.node
};

var QtySelectorPlusIcon = function QtySelectorPlusIcon(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero"
      },
      React.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React.createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12h16M12 4v16"
      })
    )
  );
};

QtySelectorPlusIcon.displayName = "QtySelectorPlusIcon";
QtySelectorPlusIcon.defaultProps = {
  children: null
};
QtySelectorPlusIcon.propTypes = {
  children: PropTypes.node
};

var Container$a = styled.div.withConfig({
  displayName: "QtySelectorstyles__Container",
  componentId: "sc-1rwllg0-0"
})(["display:flex;justify-content:center;align-items:center;"]);
var Button$2 = styled.button.withConfig({
  displayName: "QtySelectorstyles__Button",
  componentId: "sc-1rwllg0-1"
})(
  [
    "width:36px;height:36px;border-radius:50%;border:1px solid ",
    ";color:",
    ";background-color:",
    ";outline:none;box-sizing:border-box;padding:0;font-size:",
    ";line-height:0;transition:transform 0.1s linear,background-color 0.3s ",
    ",color 0.3s ",
    ";&:disabled{border-color:",
    ";color:",
    ";}&:focus{outline:none;box-shadow:0 0 5px 0 ",
    ";}&:enabled:hover{background-color:",
    ";color:",
    ";cursor:pointer;}&:enabled:active{transform:scale(0.98,0.98) translate(0,1px);background-color:",
    ";}"
  ],
  getThemeValue("primary", "base"),
  getThemeValue("gray02"),
  getThemeValue("white", "base"),
  typography.size.tera,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("gray04"),
  getThemeValue("gray03"),
  getThemeValue("primary", "base"),
  getThemeValue("primary", "light"),
  getThemeValue("primary", "base"),
  getThemeValue("primary", "muted")
);
var InputFieldContainer = styled.div.withConfig({
  displayName: "QtySelectorstyles__InputFieldContainer",
  componentId: "sc-1rwllg0-2"
})(
  [
    "overflow-y:hidden;display:flex;height:29px;flex-direction:column;border-bottom:1px solid ",
    ";margin:0px 12px;position:relative;bottom:1px;&:hover&:not(.InputFieldContainer__disabled){border-color:",
    ";}&.InputFieldContainer__disabled{border-bottom:1px solid ",
    ";}"
  ],
  getThemeValue("gray02"),
  getThemeValue("primary", "base"),
  getThemeValue("gray04")
);
var InputField = styled.input
  .attrs({
    type: "text"
  })
  .withConfig({
    displayName: "QtySelectorstyles__InputField",
    componentId: "sc-1rwllg0-3"
  })(
  [
    "top:0;position:relative;outline:none;width:31px;font-size:",
    ";height:28px;text-align:center;color:#353c42;caret-color:#353c42;border:none;background:transparent;transition:top 0.1s ",
    ";&:disabled{border-color:",
    ";}"
  ],
  typography.size.giga,
  constants.easing.easeInOutQuad,
  themes.global.gray04
);

var QtySelector =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(QtySelector, _Component);

    function QtySelector() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, QtySelector);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(QtySelector)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          value: "",
          focused: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleChange",
        function(e) {
          var value = e.target.value;

          if (
            QtySelector.isNumber(value) &&
            value.length <= QtySelector.MAX_LENGTH_VAL
          ) {
            _this.setState(function() {
              return {
                value: Number.parseInt(value, 10)
              };
            });
          } else if (value === "") {
            // delete input value case
            _this.setState(function() {
              return {
                value: ""
              };
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "increment",
        function() {
          return _this.setState(function(state) {
            if (state.value === "") {
              return {
                value: 0
              };
            }

            if (state.value === QtySelector.MAX_INPUT_VALUE) {
              return {
                value: QtySelector.MAX_INPUT_VALUE
              };
            }

            return {
              value: state.value + 1
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "decrement",
        function() {
          return _this.setState(function(state) {
            if (state.value === "" || state.value === 0) {
              return {
                value: 0
              };
            }

            return {
              value: state.value - 1
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleFocus",
        function() {
          _this.setState(function() {
            return {
              focused: true
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleBlur",
        function() {
          _this.setState(function() {
            return {
              focused: false
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderInput",
        function() {
          var _this$props = _this.props,
            disabled = _this$props.disabled,
            style = _this$props.style,
            rest = _objectWithoutProperties(_this$props, ["disabled", "style"]);

          var _this$state = _this.state,
            value = _this$state.value,
            focused = _this$state.focused; // rendering multiple inputs is required for animation

          return !focused
            ? _toConsumableArray(Array(100)).map(function(_, i) {
                return React.createElement(
                  InputField,
                  _extends({}, rest, {
                    key: i,
                    value: value,
                    onFocus: composeHandler(_this.handleFocus, rest.onFocus),
                    onBlur: composeHandler(_this.handleBlur, rest.onBlur),
                    onChange: composeHandler(_this.handleChange, rest.onChange),
                    disabled: disabled,
                    style: _objectSpread({}, style, {
                      top: "-".concat(value * QtySelector.INPUT_HEIGHT, "px")
                    })
                  })
                );
              })
            : React.createElement(
                InputField,
                _extends({}, rest, {
                  value: value,
                  onFocus: composeHandler(_this.handleFocus, rest.onFocus),
                  onBlur: composeHandler(_this.handleBlur, rest.onBlur),
                  onChange: composeHandler(_this.handleChange, rest.onChange),
                  disabled: disabled,
                  style: style,
                  autoFocus: true
                })
              );
        }
      );

      return _this;
    }

    _createClass(QtySelector, [
      {
        key: "render",
        value: function render() {
          var disabled = this.props.disabled;
          return React.createElement(
            Container$a,
            null,
            React.createElement(
              Button$2,
              {
                onClick: this.decrement,
                disabled: disabled
              },
              React.createElement(QtySelectorMinusIcon, null)
            ),
            React.createElement(
              InputFieldContainer,
              {
                className: classNames({
                  InputFieldContainer__disabled: disabled
                })
              },
              this.renderInput()
            ),
            React.createElement(
              Button$2,
              {
                onClick: this.increment,
                disabled: disabled
              },
              React.createElement(QtySelectorPlusIcon, null)
            )
          );
        }
      }
    ]);

    return QtySelector;
  })(Component);

_defineProperty(QtySelector, "MAX_LENGTH_VAL", 2);

_defineProperty(QtySelector, "INPUT_HEIGHT", 28);

_defineProperty(QtySelector, "MAX_INPUT_VALUE", 99);

_defineProperty(QtySelector, "isNumber", function(str) {
  var numValue = parseInt(str, 10);
  var strValue = numValue.toString(); // proper number should have the same length as its string representation
  // except the case when it evaluates to NaN

  return !Number.isNaN(numValue) && strValue.length === str.length;
});

_defineProperty(QtySelector, "propTypes", {
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string)
});

_defineProperty(QtySelector, "defaultProps", {
  disabled: false,
  style: {}
});

/* eslint import/prefer-default-export: off */

function _templateObject12$1() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-top: ",
    "px;\n  "
  ]);

  _templateObject12$1 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px;\n  "]);

  _templateObject11$1 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px;\n  "]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n  "]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n  "]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 0 ", "px;\n  "]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n  "]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n  "]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral([
    "\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  "
  ]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var SHADOW_OFFSET_X = "0 16px 16px 0 rgba(0, 0, 0, 0.06)";
var SHADOW_OFFSET_Y = "0 0 16px 0 rgba(0, 0, 0, 0.12)";
var widthL = {
  small: "400px",
  medium: "520px",
  large: "640px",
  xLarge: "860px"
};
var widthM = {
  small: "400px",
  medium: "520px",
  large: "640px",
  xLarge: "640px"
};
var ContainerAnimation = css(
  [
    "transition:opacity 0.1s ",
    ",transform 0.1s ",
    ";&.open-enter{transition:opacity 0.3s ",
    ";display:block;opacity:0;transform:scale(0.7);}&.open-enter-active{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";display:block;opacity:1;transform:scale(1);}&.open-enter-done{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";display:block;opacity:1;transform:scale(1);}&.open-exit{display:block;opacity:1;transform:scale(1);}&.open-exit-active{display:block;opacity:0;transform:scale(0.7);}"
  ],
  constants.easing.easeInQuad,
  constants.easing.easeInQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad
);
var ModalContainer$1 = styled.div.withConfig({
  displayName: "indexstyles__ModalContainer",
  componentId: "sc-5w65rb-0"
})(
  [
    "display:",
    ";top:",
    ";padding:0;margin-top:",
    ";margin-left:",
    ";margin-right:",
    ";position:relative;transform:",
    ";z-index:",
    ";background-color:",
    ";box-shadow:",
    ",",
    ";border-radius:",
    ";height:auto;max-height:calc(100vh - 88px * 2);overflow:hidden;",
    ";",
    ";",
    ";",
    ";"
  ],
  function(_ref) {
    var isOpened = _ref.isOpened;
    return isOpened ? "block" : "none";
  },
  function(_ref2) {
    var displayTop = _ref2.displayTop;
    return displayTop ? 0 : "50%";
  },
  function(_ref3) {
    var displayTop = _ref3.displayTop;
    return displayTop ? spacing.colossal : "0";
  },
  spacing.moderate,
  spacing.moderate,
  function(_ref4) {
    var displayTop = _ref4.displayTop;
    return displayTop ? "none" : "translateY(-50%)";
  },
  zIndex.layout.overlay || "#fff",
  colors.white.base,
  SHADOW_OFFSET_X,
  SHADOW_OFFSET_Y,
  constants.borderRadius.large,
  smallAndUp(_templateObject$n()),
  mediumAndUp(_templateObject2$d(), function(_ref5) {
    var size = _ref5.size;
    return widthM[size];
  }),
  largeAndUp(_templateObject3$b(), function(_ref6) {
    var size = _ref6.size;
    return widthL[size];
  }),
  ContainerAnimation
);
var actionBarGutters = css(
  ["padding:", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(
    _templateObject4$6(),
    spacing.gutters.small,
    spacing.gutters.small
  ),
  mediumAndUp(
    _templateObject5$3(),
    spacing.gutters.mediumAndUp,
    spacing.gutters.small
  ),
  largeAndUp(
    _templateObject6$2(),
    spacing.gutters.largeAndUp,
    spacing.gutters.small
  )
);
var ActionBar = styled.div.withConfig({
  displayName: "indexstyles__ActionBar",
  componentId: "sc-5w65rb-1"
})(
  [
    "position:relative;font-size:",
    ";line-height:",
    ";font-weight:",
    ";text-align:left;box-shadow:",
    ";",
    ";"
  ],
  typography.size.tera,
  typography.lineHeight.header,
  typography.weight.semiBold,
  function(_ref7) {
    var shadow = _ref7.shadow;
    return shadow
      ? "".concat(SHADOW_OFFSET_X, ", ").concat(SHADOW_OFFSET_Y)
      : "none";
  },
  function(_ref8) {
    var gutters = _ref8.gutters;
    return gutters ? actionBarGutters : "";
  }
);
ActionBar.propTypes = {
  shadow: PropTypes.bool.isRequired,
  gutters: PropTypes.bool.isRequired
};
var contentGutters = css(
  ["padding:0 ", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(_templateObject7$2(), spacing.gutters.small),
  mediumAndUp(_templateObject8$2(), spacing.gutters.mediumAndUp),
  largeAndUp(_templateObject9$2(), spacing.gutters.largeAndUp)
);
var ModalContent$1 = styled.div.withConfig({
  displayName: "indexstyles__ModalContent",
  componentId: "sc-5w65rb-2"
})(["background-color:", ";overflow-y:auto;", ";"], colors.white.base, function(
  _ref9
) {
  var gutters = _ref9.gutters;
  return gutters ? contentGutters : "";
});
ModalContent$1.propTypes = {
  gutters: PropTypes.bool.isRequired
};
var bottomActionBarGutters = css(
  ["padding:", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(_templateObject10$1(), spacing.gutters.small),
  mediumAndUp(_templateObject11$1(), spacing.gutters.mediumAndUp),
  largeAndUp(
    _templateObject12$1(),
    spacing.gutters.largeAndUp,
    spacing.gutters.mediumAndUp
  )
);
var BottomActionBar = styled.div.withConfig({
  displayName: "indexstyles__BottomActionBar",
  componentId: "sc-5w65rb-3"
})(
  [
    "position:relative;overflow:hidden;box-shadow:",
    ";",
    ";button{float:right;margin-left:24px;&:last-of-type{margin-left:0;}}"
  ],
  function(_ref10) {
    var shadow = _ref10.shadow;
    return shadow
      ? "".concat(SHADOW_OFFSET_X, ", ").concat(SHADOW_OFFSET_Y)
      : "none";
  },
  function(_ref11) {
    var gutters = _ref11.gutters;
    return gutters ? bottomActionBarGutters : "";
  }
);
BottomActionBar.propTypes = {
  shadow: PropTypes.bool.isRequired,
  gutters: PropTypes.bool.isRequired
};

/* eslint-disable import/prefer-default-export */
var OverlayAnimation = css(
  [
    "transition:opacity 0.1s ",
    ";&.open-enter{transition:opacity 0.3s ",
    ";display:block;opacity:0;}&.open-enter-active{transition:opacity 0.3s ",
    ";display:block;opacity:1;}&.open-enter-done{transition:opacity 0.3s ",
    ";display:block;opacity:1;}&.open-exit{display:block;opacity:1;}&.open-exit-active{display:block;opacity:0;}"
  ],
  constants.easing.easeInQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad
);
var Overlay$2 = styled.div
  .attrs({
    className: "container--overlay"
  })
  .withConfig({
    displayName: "indexstyles__Overlay",
    componentId: "sc-1a12tsj-0"
  })(
  [
    "height:100%;width:100%;position:fixed;left:0;top:0;background-color:",
    ";z-index:",
    ";display:",
    ";",
    ";"
  ],
  themes.global.onyx.light,
  zIndex.layout.overlay,
  function(_ref) {
    var isVisible = _ref.isVisible;
    return isVisible ? "block" : "none";
  },
  function(_ref2) {
    var animated = _ref2.animated;
    return animated ? OverlayAnimation : "";
  }
);

var Backdrop$1 =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Backdrop, _Component);

    function Backdrop(props) {
      var _this;

      _classCallCheck(this, Backdrop);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Backdrop).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onKeyPress",
        function(e) {
          var onRequestClose = _this.props.onRequestClose;

          if (e.keyCode === ESCAPE && onRequestClose) {
            onRequestClose(e);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "attachListeners",
        function() {
          if (
            (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
            "object"
          ) {
            document.addEventListener("click", _this.handleOutsideClick);
            document.addEventListener("keydown", _this.onKeyPress);
            _this.hasListeners = true;
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "detachListeners",
        function() {
          if (
            (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
            "object"
          ) {
            document.removeEventListener("click", _this.handleOutsideClick);
            document.removeEventListener("keydown", _this.onKeyPress);
            _this.hasListeners = false;
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleOutsideClick",
        function(e) {
          var _this$props = _this.props,
            childRef = _this$props.childRef,
            onRequestClose = _this$props.onRequestClose;

          if (
            onRequestClose &&
            childRef.current &&
            !childRef.current.contains(e.target)
          ) {
            onRequestClose(e);
          }
        }
      );

      _this.hasListeners = false;
      return _this;
    }

    _createClass(Backdrop, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.isVisible && !this.hasListeners) {
            this.attachListeners();
          }
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var isVisible = this.props.isVisible;

          if (isVisible && !this.hasListeners) {
            this.attachListeners();
          } else if (!isVisible && this.hasListeners) {
            this.detachListeners();
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.hasListeners) {
            this.detachListeners();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            overlay = _this$props2.overlay,
            overlayProps = _this$props2.overlayProps,
            isVisible = _this$props2.isVisible,
            animated = _this$props2.animated;

          if (overlay) {
            return React.createElement(
              Overlay$2,
              _extends(
                {
                  isVisible: isVisible,
                  animated: animated
                },
                overlayProps
              ),
              children
            );
          }

          return children;
        }
      }
    ]);

    return Backdrop;
  })(Component);

_defineProperty(Backdrop$1, "propTypes", {
  /* eslint-disable-next-line react/forbid-prop-types */
  childRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
  isVisible: PropTypes.bool,
  animated: PropTypes.bool,

  /* eslint-disable-next-line react/forbid-prop-types */
  overlayProps: PropTypes.object,
  onRequestClose: PropTypes.func
});

_defineProperty(Backdrop$1, "defaultProps", {
  overlay: true,
  overlayProps: {},
  onRequestClose: null,
  isVisible: true,
  animated: false
});

var _React$createContext$a = React.createContext(),
  Provider$a = _React$createContext$a.Provider,
  Consumer$a = _React$createContext$a.Consumer;
var withModal = function withModal(Component$$1) {
  return function(props) {
    return React.createElement(Consumer$a, null, function(value) {
      return React.createElement(
        Component$$1,
        _extends(
          {
            modal: value
          },
          props
        )
      );
    });
  };
};

var MODAL_SIZE_SMALL = "small";
var MODAL_SIZE_MEDIUM = "medium";
var MODAL_SIZE_LARGE = "large";
var MODAL_SIZE_XLARGE = "xLarge";
var MODAL_XSMALL_SIZE = {
  small: 12,
  medium: 12,
  large: 12
};
var MODAL_SMALL_SIZE = {
  small: 8,
  medium: 8,
  large: 10
};
var MODAL_MEDIUM_SIZE = {
  small: 8,
  medium: 8,
  large: 10
};
var MODAL_LARGE_SIZE = {
  small: 4,
  medium: 6,
  large: 10
};
var MODAL_XLARGE_SIZE = {
  small: 4,
  medium: 6,
  large: 10
};
var DEVICE_MODAL_SIZE = {
  isXSmall: MODAL_XSMALL_SIZE,
  isSmall: MODAL_SMALL_SIZE,
  isMedium: MODAL_MEDIUM_SIZE,
  isLarge: MODAL_LARGE_SIZE,
  isXLarge: MODAL_XLARGE_SIZE
};
var SUPPORTED_SIZES = Object.keys(DEVICE_MODAL_SIZE);
var getDeviceSize = function getDeviceSize(_ref) {
  var deviceSize = _ref.deviceSize;
  return (
    SUPPORTED_SIZES.find(function(size) {
      return deviceSize[size];
    }) || SUPPORTED_SIZES[0]
  );
};
var getModalSize = function getModalSize(_ref2) {
  var deviceSize = _ref2.deviceSize,
    preferredSize = _ref2.preferredSize;
  return DEVICE_MODAL_SIZE[
    getDeviceSize({
      deviceSize: deviceSize
    })
  ][preferredSize];
};

var getContentHeight = function getContentHeight(_ref) {
  var actionBar = _ref.actionBar,
    bottomActionBar = _ref.bottomActionBar,
    container = _ref.container;
  var actionBarHeight = actionBar ? actionBar.clientHeight : 0;
  var bottomActionBarHeight = bottomActionBar
    ? bottomActionBar.clientHeight
    : 0;
  return "".concat(
    container.clientHeight - actionBarHeight - bottomActionBarHeight,
    "px"
  );
};
var getActionBarShadow = function getActionBarShadow(_ref2) {
  var content = _ref2.content;
  return Boolean(content.scrollTop);
};
var getBottomActionBarShadow = function getBottomActionBarShadow(_ref3) {
  var content = _ref3.content;
  return Boolean(
    content.scrollHeight - content.scrollTop - content.clientHeight > 0
  );
};
var isRequestCloseApproved = function isRequestCloseApproved(_ref4) {
  var onRequestClose = _ref4.onRequestClose,
    event = _ref4.event;

  if (!onRequestClose) {
    return Promise.resolve(true);
  }

  return Promise.resolve(onRequestClose(event))
    .then(function(result) {
      return typeof result === "undefined" ? true : Boolean(result);
    })
    .catch(function() {
      return false;
    });
};

var Modal$1 =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Modal);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isOpened: true,
          actionBarShadow: false,
          bottomActionBarShadow: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "actionBarRef",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "containerRef",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "contentRef",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "bottomActionBarRef",
        React.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "closeModal",
        function(event) {
          var onRequestClose = _this.props.onRequestClose;
          isRequestCloseApproved({
            onRequestClose: onRequestClose,
            event: event
          }).then(function(requestApproved) {
            if (requestApproved) {
              _this.setState({
                isOpened: false
              });
            }
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleScroll",
        function(e) {
          var onScroll = _this.props.onScroll;

          if (onScroll) {
            onScroll(e);
          }

          _this.updateShadows();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateModalHeight",
        function() {
          var isSmall = _this.props.deviceSize.isSmall;
          var actionBar = _this.actionBarRef.current;
          var bottomActionBar = _this.bottomActionBarRef.current;
          var content = _this.contentRef.current;
          var container = _this.containerRef.current;
          var contentHeight = getContentHeight({
            actionBar: actionBar,
            bottomActionBar: bottomActionBar,
            container: container
          });

          if (isSmall) {
            content.style.minHeight = contentHeight;
          }

          content.style.maxHeight = contentHeight;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateShadows",
        function() {
          _this.updateActionBarShadow();

          var bottomActionBar = _this.bottomActionBarRef.current;

          if (bottomActionBar) {
            _this.updateBottomActionBarShadow();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateActionBarShadow",
        function() {
          var content = _this.contentRef.current;
          var actionBarShadow = getActionBarShadow({
            content: content
          });

          if (actionBarShadow !== _this.state.actionBarShadow) {
            _this.setState({
              actionBarShadow: actionBarShadow
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateBottomActionBarShadow",
        function() {
          var content = _this.contentRef.current;
          var bottomActionBarShadow = getBottomActionBarShadow({
            content: content
          });

          if (bottomActionBarShadow !== _this.state.bottomActionBarShadow) {
            _this.setState({
              bottomActionBarShadow: bottomActionBarShadow
            });
          }
        }
      );

      return _this;
    }

    _createClass(
      Modal,
      [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.props.isOpened) {
              this.updateModalHeight();
              this.updateShadows();
            }
          }
        },
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (this.props.isOpened && !prevProps.isOpened) {
              this.updateModalHeight();
              this.updateShadows();
            }
          }
        },
        {
          key: "render",
          value: function render() {
            var _this$props = this.props,
              actionBar = _this$props.actionBar,
              bottomActionBar = _this$props.bottomActionBar,
              children = _this$props.children,
              gutters = _this$props.gutters,
              size = _this$props.size,
              deviceSize = _this$props.deviceSize,
              containerProps = _this$props.containerProps,
              actionBarProps = _this$props.actionBarProps,
              contentProps = _this$props.contentProps,
              bottomActionBarProps = _this$props.bottomActionBarProps,
              displayTop = _this$props.displayTop;
            var _this$state = this.state,
              isOpened = _this$state.isOpened,
              actionBarShadow = _this$state.actionBarShadow,
              bottomActionBarShadow = _this$state.bottomActionBarShadow;
            var closeModal = this.closeModal;
            return React.createElement(
              Provider$a,
              {
                value: {
                  closeModal: closeModal
                }
              },
              React.createElement(
                CSSTransition,
                {
                  in: isOpened,
                  key: "overlay-animation",
                  timeout: 300,
                  classNames: "open"
                },
                React.createElement(
                  Backdrop$1,
                  {
                    childRef: this.containerRef,
                    onRequestClose: this.closeModal,
                    isVisible: isOpened,
                    animated: true
                  },
                  React.createElement(
                    CSSTransition,
                    {
                      in: isOpened,
                      key: "modal-animation",
                      timeout: 300,
                      classNames: "open"
                    },
                    React.createElement(
                      ModalContainer$1,
                      _extends(
                        {
                          small: getModalSize({
                            deviceSize: deviceSize,
                            preferredSize: size
                          }),
                          ref: this.containerRef,
                          isOpened: isOpened,
                          size: size,
                          displayTop: displayTop
                        },
                        containerProps
                      ),
                      actionBar &&
                        React.createElement(
                          ActionBar,
                          _extends(
                            {
                              shadow: actionBarShadow,
                              ref: this.actionBarRef,
                              gutters: gutters
                            },
                            actionBarProps
                          ),
                          actionBar
                        ),
                      React.createElement(
                        ModalContent$1,
                        _extends(
                          {
                            ref: this.contentRef,
                            onScroll: this.handleScroll,
                            gutters: gutters
                          },
                          contentProps
                        ),
                        children
                      ),
                      bottomActionBar &&
                        React.createElement(
                          BottomActionBar,
                          _extends(
                            {
                              shadow: bottomActionBarShadow,
                              ref: this.bottomActionBarRef,
                              gutters: gutters
                            },
                            bottomActionBarProps
                          ),
                          bottomActionBar
                        )
                    )
                  )
                )
              )
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            if (props.isOpened !== state.isOpened) {
              return {
                isOpened: props.isOpened
              };
            }

            return null;
          }
        }
      ]
    );

    return Modal;
  })(React.Component);

_defineProperty(Modal$1, "propTypes", {
  actionBar: PropTypes.node,
  bottomActionBar: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  deviceSize: PropTypes.shape({
    isXSmall: PropTypes.bool,
    isSmall: PropTypes.bool,
    isMedium: PropTypes.bool,
    isLarge: PropTypes.bool,
    isXLarge: PropTypes.bool
  }).isRequired,
  gutters: PropTypes.bool,
  // This is used inside the `getDerivedStateFromProps`
  // eslint-disable-next-line react/no-unused-prop-types
  isOpened: PropTypes.bool,
  size: PropTypes.oneOf([
    MODAL_SIZE_SMALL,
    MODAL_SIZE_MEDIUM,
    MODAL_SIZE_LARGE,
    MODAL_SIZE_XLARGE
  ]),
  onRequestClose: PropTypes.func,
  onScroll: PropTypes.func,

  /* eslint-disable react/forbid-prop-types */
  containerProps: PropTypes.object,
  actionBarProps: PropTypes.object,
  contentProps: PropTypes.object,
  bottomActionBarProps: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
});

_defineProperty(Modal$1, "defaultProps", {
  actionBar: null,
  bottomActionBar: null,
  children: null,
  gutters: true,
  isOpened: true,
  size: MODAL_SIZE_MEDIUM,
  onRequestClose: null,
  onScroll: null,
  containerProps: {},
  actionBarProps: {},
  contentProps: {},
  bottomActionBarProps: {}
});

var index = withDeviceSize(Modal$1);

/* eslint-disable import/prefer-default-export */
var CloseButtonContainer = styled.div.withConfig({
  displayName: "DefaultActionBarstyles__CloseButtonContainer",
  componentId: "sc-1ke7390-0"
})(["background-color:white;display:flex;justify-content:flex-end;"]);

var ModalActionBar = function ModalActionBar(_ref) {
  var closeModal = _ref.modal.closeModal,
    iconButtonProps = _ref.iconButtonProps;
  return React.createElement(
    CloseButtonContainer,
    null,
    React.createElement(
      CrossIcon,
      _extends(
        {
          size: 12,
          style: {
            pointerEvent: "none"
          },
          color: themes.global.onyx.base,
          className: "button--close",
          "aria-label": "Close Modal",
          role: "button",
          onClick: closeModal
        },
        iconButtonProps
      )
    )
  );
};
ModalActionBar.propTypes = {
  modal: PropTypes.shape({
    closeModal: PropTypes.func.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  iconButtonProps: PropTypes.object
};
ModalActionBar.defaultProps = {
  iconButtonProps: {}
};
var DefaultActionBar = withModal(ModalActionBar);

var StyledPopOver = styled.div.withConfig({
  displayName: "PopOver__StyledPopOver",
  componentId: "sc-1fi6rne-0"
})(
  [
    "background-color:",
    ";",
    ";border-radius:",
    ";box-shadow:",
    ";position:absolute;max-width:300px;padding:",
    ";z-index:",
    ";display:",
    ";transition:opacity 0.1s ",
    ",transform 0.1s ",
    ";&.open-enter{transition:opacity 0.3s ",
    ";display:block;opacity:0;transform:scale(0.7);}&.open-enter-active{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";display:block;opacity:1;transform:scale(1);}&.open-enter-done{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";display:block;opacity:1;transform:scale(1);}&.open-exit{display:block;opacity:1;transform:scale(1);}&.open-exit-active{display:block;opacity:0;transform:scale(0.7);}"
  ],
  themes.global.white.base,
  function(_ref) {
    var noBorders = _ref.noBorders;
    return !noBorders && "border: 1px solid ".concat(themes.global.gray02);
  },
  constants.borderRadius.large,
  function(_ref2) {
    var noBorders = _ref2.noBorders;
    return noBorders ? popContainersSharpBoxShadow : popContainersBoxShadow;
  },
  spacing.moderate,
  zIndex.layout.overlay,
  function(_ref3) {
    var isVisible = _ref3.isVisible;
    return isVisible ? "block" : "none";
  },
  constants.easing.easeInQuad,
  constants.easing.easeInQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad
);
var MIN_SPACE_FROM_EDGE = 24;
var MOBILE_MIN_SPACE_FROM_EDGE = 16;
var MOBILE_MAX_WIDTH = 767;
var SPACE_FROM_MOUSE$1 = 10;

var PopOver =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(PopOver, _Component);

    _createClass(PopOver, null, [
      {
        key: "calculatePosition",

        /*
     * Static function that determines PopOver position.
     * @position(object) - top and bottom position of the elemt that triggers showing PopOver;
     * Mouse horizontal position on the sreen - so we can center the PopOver;
     * Additional container position and size
     * @dimensions(object) - PopOver width and height;
     * Page scroll position
     * Viewport size
     * @reduce(object) - additional top/bottom screen reduction cause by sticky header/footer
     * @inlineWithTarget(boolean) - an optional prop that allows to align PopOver with toggle
     */
        value: function calculatePosition(_ref4) {
          var position = _ref4.position,
            dimensions = _ref4.dimensions,
            reduce = _ref4.reduce,
            inlineWithTarget = _ref4.inlineWithTarget;
          var width = dimensions.width,
            windowScroll = dimensions.windowScroll,
            height = dimensions.height,
            windowWidth = dimensions.windowWidth,
            windowHeight = dimensions.windowHeight;
          var reduceTop = reduce.top,
            reduceBottom = reduce.bottom;
          var elBottom = position.elBottom,
            elTop = position.elTop,
            elLeft = position.elLeft,
            elWidth = position.elWidth,
            mouseX = position.mouseX,
            offsetTop = position.offsetTop,
            clientHeight = position.clientHeight,
            offsetLeft = position.offsetLeft,
            clientWidth = position.clientWidth;

          if (inlineWithTarget) {
            return {
              x:
                elLeft + width + MIN_SPACE_FROM_EDGE * 2 >= clientWidth
                  ? elLeft - width - spacing.gutters.tiny
                  : elLeft + elWidth + spacing.gutters.tiny,
              y: elTop
            };
          }

          var viewportTop = windowScroll + reduceTop;
          var viewportBottom = windowScroll + windowHeight - reduceBottom;
          var bottomPosition = elBottom + SPACE_FROM_MOUSE$1;
          var topPosition = elTop - SPACE_FROM_MOUSE$1 - height;
          var spaceFromEdge =
            windowWidth > MOBILE_MAX_WIDTH
              ? MIN_SPACE_FROM_EDGE
              : MOBILE_MIN_SPACE_FROM_EDGE;
          var containerTop = offsetTop + spaceFromEdge;
          var containerBottom = offsetTop + clientHeight - spaceFromEdge;
          var containerLeft = offsetLeft + spaceFromEdge;
          var containerRight = offsetLeft + clientWidth - spaceFromEdge - width;
          var topPositionWithFallback =
            topPosition - spaceFromEdge >= Math.max(viewportTop, containerTop)
              ? topPosition
              : bottomPosition;
          return {
            x: Math.min(
              Math.max(spaceFromEdge, mouseX - width / 2, containerLeft),
              windowWidth - spaceFromEdge - width,
              containerRight
            ),
            y:
              bottomPosition + height + spaceFromEdge <=
              Math.min(viewportBottom, containerBottom)
                ? bottomPosition
                : topPositionWithFallback
          };
        }
      }
    ]);

    function PopOver(props) {
      var _this;

      _classCallCheck(this, PopOver);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(PopOver).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "setDimensions",
        function() {
          var isVisible = _this.props.isVisible;
          var _this$dimensions = _this.dimensions,
            windowScroll = _this$dimensions.windowScroll,
            windowWidth = _this$dimensions.windowWidth,
            windowHeight = _this$dimensions.windowHeight,
            width = _this$dimensions.width,
            height = _this$dimensions.height;
          var dimensions = {};

          if (global.window && isVisible) {
            var _global$window$docume = global.window.document.documentElement,
              scrollTop = _global$window$docume.scrollTop,
              clientWidth = _global$window$docume.clientWidth,
              clientHeight = _global$window$docume.clientHeight;

            if (scrollTop !== windowScroll) {
              dimensions.windowScroll = scrollTop;
            }

            if (clientWidth !== windowWidth) {
              dimensions.windowWidth = clientWidth;
            }

            if (clientHeight !== windowHeight) {
              dimensions.windowHeight = clientHeight;
            }
          }

          if (_this.myRef.current) {
            var _this$myRef$current = _this.myRef.current,
              _clientWidth = _this$myRef$current.clientWidth,
              _clientHeight = _this$myRef$current.clientHeight;

            if (width !== _clientWidth && _clientWidth) {
              dimensions.width = _clientWidth;
            }

            if (height !== _clientHeight && _clientHeight) {
              dimensions.height = _clientHeight;
            }
          }

          if (
            Object.keys(dimensions).length &&
            dimensions.width &&
            dimensions.height
          ) {
            _this.dimensions = _objectSpread({}, _this.dimensions, dimensions);
            return true;
          }

          return false;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "popoverEnter",
        function() {
          var _this$props = _this.props,
            isVisible = _this$props.isVisible,
            inlineWithTarget = _this$props.inlineWithTarget,
            position = _this$props.position,
            reduceTop = _this$props.reduceTop,
            reduceBottom = _this$props.reduceBottom;

          if (isVisible) {
            _this.setDimensions();

            var reduce = {
              top: reduceTop,
              bottom: reduceBottom
            };
            _this.pos = PopOver.calculatePosition({
              position: position,
              dimensions: _this.dimensions,
              reduce: reduce,
              inlineWithTarget: inlineWithTarget
            });
          }

          _this.myRef.current.style.top = "".concat(_this.pos.y, "px");
          _this.myRef.current.style.left = "".concat(_this.pos.x, "px");
        }
      );

      _this.dimensions = {
        width: 0,
        height: 0,
        windowScroll: 0,
        windowWidth: 0,
        windowHeight: 0
      };
      _this.myRef = React.createRef();
      _this.pos = {
        x: 0,
        y: 0
      };
      return _this;
    }

    _createClass(
      PopOver,
      [
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            /*
       * This causes force update of the popover position if we use only one popover and we transiotion from
       * one zone that triggers the popover to another that triggers the same popover but with different place to display
       */
            var _this$props2 = this.props,
              _this$props2$position = _this$props2.position,
              mouseX = _this$props2$position.mouseX,
              elTop = _this$props2$position.elTop,
              elBottom = _this$props2$position.elBottom,
              isVisible = _this$props2.isVisible,
              inlineWithTarget = _this$props2.inlineWithTarget,
              position = _this$props2.position,
              reduceTop = _this$props2.reduceTop,
              reduceBottom = _this$props2.reduceBottom;

            if (
              (prevProps.position.mouseX !== mouseX ||
                prevProps.position.elTop !== elTop ||
                prevProps.position.elBottom !== elBottom) &&
              isVisible &&
              prevProps.isVisible === isVisible
            ) {
              this.setDimensions();
              var reduce = {
                top: reduceTop,
                bottom: reduceBottom
              };
              this.pos = PopOver.calculatePosition({
                position: position,
                dimensions: this.dimensions,
                reduce: reduce,
                inlineWithTarget: inlineWithTarget
              });
              this.myRef.current.style.top = "".concat(this.pos.y, "px");
              this.myRef.current.style.left = "".concat(this.pos.x, "px");
            }
          }
          /*
     * Static function that needs to be called from the parent -> PopOver.getDimensionsFromEvent
     * The parent should pass the click event which will trigger showing the PopOver.
     * By default the PopOver is shown withing the view port. If we need to show it inside
     * certain element we should pass the html element as second parameter.
     * The function will return an object that should be provided to the PopOver as props.
     */
        },
        {
          key: "render",
          value: function render() {
            var _this$props3 = this.props,
              children = _this$props3.children,
              isVisible = _this$props3.isVisible,
              noBorders = _this$props3.noBorders;
            return React.createElement(
              CSSTransition,
              {
                in: isVisible,
                key: "popover-animation",
                timeout: 300,
                classNames: "open",
                onEnter: this.popoverEnter
              },
              React.createElement(
                StyledPopOver,
                {
                  ref: this.myRef,
                  isVisible: isVisible,
                  noBorders: noBorders
                },
                children
              )
            );
          }
        }
      ],
      [
        {
          key: "getDimensionsFromEvent",
          value: function getDimensionsFromEvent(e) {
            var parent =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var mouseX = e.clientX;
            var _e$currentTarget = e.currentTarget,
              elTop = _e$currentTarget.offsetTop,
              elHeight = _e$currentTarget.clientHeight,
              elLeft = _e$currentTarget.offsetLeft,
              elWidth = _e$currentTarget.offsetWidth;
            var _parent$offsetTop = parent.offsetTop,
              offsetTop = _parent$offsetTop === void 0 ? 0 : _parent$offsetTop,
              _parent$clientHeight = parent.clientHeight,
              clientHeight =
                _parent$clientHeight === void 0 ? 100000 : _parent$clientHeight,
              _parent$offsetLeft = parent.offsetLeft,
              offsetLeft =
                _parent$offsetLeft === void 0 ? 0 : _parent$offsetLeft,
              _parent$clientWidth = parent.clientWidth,
              clientWidth =
                _parent$clientWidth === void 0 ? 100000 : _parent$clientWidth;
            return {
              mouseX: mouseX,
              elTop: elTop,
              elLeft: elLeft,
              elWidth: elWidth,
              elBottom: elTop + elHeight,
              offsetTop: offsetTop,
              clientHeight: clientHeight,
              offsetLeft: offsetLeft,
              clientWidth: clientWidth
            };
          }
        }
      ]
    );

    return PopOver;
  })(Component);

PopOver.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  inlineWithTarget: PropTypes.bool,
  noBorders: PropTypes.bool,
  reduceTop: PropTypes.number,
  reduceBottom: PropTypes.number,
  position: PropTypes.shape({
    mouseX: PropTypes.number,
    elTop: PropTypes.number,
    elBottom: PropTypes.number,
    offsetTop: PropTypes.number,
    clientHeight: PropTypes.number,
    offsetLeft: PropTypes.number,
    clientWidth: PropTypes.number
  })
};
PopOver.defaultProps = {
  isVisible: false,
  inlineWithTarget: false,
  noBorders: false,
  reduceTop: 0,
  reduceBottom: 0,
  position: {
    mouseX: 0,
    elTop: 0,
    elBottom: 0,
    offsetTop: 0,
    clientHeight: 0,
    offsetLeft: 0,
    clientWidth: 0
  }
};
PopOver.displayName = "PopOver";

var _React$createContext$b = React.createContext({
    "4g": true
  }),
  Provider$b = _React$createContext$b.Provider,
  Consumer$b = _React$createContext$b.Consumer;

var deviceConnectionStateShape = {
  "slow-2g": PropTypes.bool,
  "2g": PropTypes.bool,
  "3g": PropTypes.bool,
  "4g": PropTypes.bool,
  saveData: false,
  isInitialized: false
};
var prefixedDeviceConnectionProps = {
  "connslow-2g": PropTypes.bool,
  conn2g: PropTypes.bool,
  conn3g: PropTypes.bool,
  conn4g: PropTypes.bool
};
var prefixedDeviceConnectionDefaultProps = {
  "connslow-2g": false,
  conn2g: false,
  conn3g: false,
  conn4g: false
};

var CONNECTION_TYPES = ["4g", "3g", "2g", "slow-2g", "saveData"];
var FALSY_CONNECTIONS_STATE = {
  "slow-2g": false,
  "2g": false,
  "3g": false,
  "4g": false,
  saveData: false
};

var DeviceConnectionProvider =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(DeviceConnectionProvider, _Component);

    function DeviceConnectionProvider(props) {
      var _this;

      _classCallCheck(this, DeviceConnectionProvider);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(DeviceConnectionProvider).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "componentWillUnmount",
        function() {
          var isInitialized = _this.state.isInitialized;

          if (isInitialized) {
            _this.unsubscribe();
          }
        }
      );

      var defaultState = props.defaultState;
      _this.state = defaultState || _this.initialState;
      return _this;
    }

    _createClass(DeviceConnectionProvider, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _global$navigator$con = global.navigator.connection,
            effectiveType = _global$navigator$con.effectiveType,
            type = _global$navigator$con.type,
            saveData = _global$navigator$con.saveData;

          if (effectiveType || type) {
            var _this$update;

            this.subscribe();
            this.update(
              ((_this$update = {}),
              _defineProperty(_this$update, effectiveType || type, true),
              _defineProperty(_this$update, "isInitialized", true),
              _defineProperty(_this$update, "saveData", saveData),
              _this$update)
            );
          }
        }
      },
      {
        key: "onConnectionChange",

        /* istanbul ignore next */
        value: function onConnectionChange() {
          var _this$update2;

          var _global$navigator$con2 = global.navigator.connection,
            effectiveType = _global$navigator$con2.effectiveType,
            type = _global$navigator$con2.type,
            saveData = _global$navigator$con2.saveData;
          this.update(
            ((_this$update2 = {}),
            _defineProperty(_this$update2, effectiveType || type, true),
            _defineProperty(_this$update2, "saveData", saveData),
            _this$update2)
          );
        }
      },
      {
        key: "subscribe",
        value: function subscribe() {
          global.navigator.connection.addEventListener(
            "change",
            this.onConnectionChange
          );
        } // eslint-disable-next-line
      },
      {
        key: "unsubscribe",
        value: function unsubscribe() {
          global.navigator.connection.removeEventListener("change");
        }
      },
      {
        key: "update",
        value: function update(payload) {
          this.setState(_objectSpread({}, FALSY_CONNECTIONS_STATE, payload));
        }
      },
      {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return React.createElement(
            Provider$b,
            {
              value: this.state
            },
            children
          );
        }
      }
    ]);

    return DeviceConnectionProvider;
  })(Component);

_defineProperty(
  DeviceConnectionProvider,
  "initialState",
  _objectSpread({}, FALSY_CONNECTIONS_STATE, {
    "4g": true,
    isInitialized: false
  })
);

_defineProperty(DeviceConnectionProvider, "propTypes", {
  children: PropTypes.node.isRequired,
  defaultState: PropTypes.shape(deviceConnectionStateShape)
});

_defineProperty(DeviceConnectionProvider, "defaultProps", {
  defaultState: null
});

var getConnName = function getConnName(conn) {
  return conn === "saveData" ? conn : "conn".concat(conn);
};

var DisplayOn = function DisplayOn(props) {
  var children = props.children;
  return React.createElement(Consumer$b, null, function(val) {
    return CONNECTION_TYPES.find(function(conn) {
      return val[conn] && props[getConnName(conn)];
    })
      ? children
      : null;
  });
};

DisplayOn.propTypes = _objectSpread({}, prefixedDeviceConnectionProps, {
  saveData: PropTypes.bool,
  children: PropTypes.node.isRequired
});
DisplayOn.defaultProps = _objectSpread(
  {},
  prefixedDeviceConnectionDefaultProps,
  {
    saveData: false
  }
);

var SeatData = function SeatData(_ref) {
  var size = _ref.size,
    isLast = _ref.isLast,
    section = _ref.section,
    row = _ref.row,
    seat = _ref.seat,
    variant = _ref.variant;
  return React.createElement(
    SeatDataStyled,
    {
      size: size,
      isLast: isLast
    },
    React.createElement(
      SeatDataColumn,
      null,
      React.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Sec"
      ),
      React.createElement(
        ColumnText,
        {
          variant: variant,
          size: size
        },
        section
      )
    ),
    React.createElement(
      SeatDataColumn,
      null,
      React.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Row"
      ),
      React.createElement(
        ColumnText,
        {
          variant: variant,
          size: size
        },
        row
      )
    ),
    React.createElement(
      SeatDataColumn,
      null,
      React.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Seat"
      ),
      React.createElement(
        ColumnText,
        {
          variant: variant,
          size: size
        },
        seat
      )
    )
  );
};

SeatData.propTypes = {
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(SIZES_SL),
  variant: PropTypes.oneOf(VARIANTS),
  isLast: PropTypes.bool
};
SeatData.defaultProps = {
  size: LARGE,
  variant: LIGHT,
  isLast: false
};
SeatData.displayName = "SeatData";

var SeatTooltip =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(SeatTooltip, _Component);

    function SeatTooltip() {
      _classCallCheck(this, SeatTooltip);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(SeatTooltip).apply(this, arguments)
      );
    }

    _createClass(SeatTooltip, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            size = _this$props.size,
            row = _this$props.row,
            seat = _this$props.seat,
            section = _this$props.section,
            children = _this$props.children,
            variant = _this$props.variant,
            rest = _objectWithoutProperties(_this$props, [
              "size",
              "row",
              "seat",
              "section",
              "children",
              "variant"
            ]);

          var maxWidth = size === SMALL ? "180px" : "260px";
          return React.createElement(
            Tooltip,
            _extends({}, rest, {
              variant: variant,
              style: {
                width: maxWidth,
                padding: 0
              }
            }),
            row !== undefined &&
              seat !== undefined &&
              section !== undefined &&
              React.createElement(SeatData, {
                size: size,
                row: row,
                section: section,
                seat: seat,
                variant: variant,
                isLast: !!children
              }),
            children &&
              React.createElement(
                AdditionalData,
                {
                  size: size,
                  row: row,
                  section: section,
                  seat: seat,
                  variant: variant
                },
                children
              )
          );
        }
      }
    ]);

    return SeatTooltip;
  })(Component);

_defineProperty(SeatTooltip, "getDimensionsFromEvent", function(e) {
  return Tooltip.getDimensionsFromEvent(e);
});

SeatTooltip.propTypes = {
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(SIZES_SL),
  children: PropTypes.node,
  variant: PropTypes.oneOf(VARIANTS)
};
SeatTooltip.defaultProps = {
  size: LARGE,
  children: null,
  variant: LIGHT
};
SeatTooltip.displayName = "SeatTooltip";

var PLACEHOLDER_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
var BLUR_STYLES = {
  filter: "blur(10px)",
  transition: "80ms filter linear"
};
var DEFAULT_TARGET_DENSITY = 1;
var DEFAULT_DEVICE_PIXEL_RATIOS = [1, 2, 3, 4, 5];

var _createContext = createContext({
    src: PLACEHOLDER_IMAGE,
    style: null,
    imageRef: null,
    load: function load() {}
  }),
  Provider$c = _createContext.Provider,
  Consumer$c = _createContext.Consumer;

var createParams = function createParams(obj) {
  return Object.keys(obj).reduce(function(qs, key) {
    if (typeof obj[key] !== "undefined") {
      var sep = qs.length ? "&" : "?";
      qs += ""
        .concat(sep)
        .concat(key, "=")
        .concat(encodeURIComponent(obj[key])); // eslint-disable-line
    }

    return qs;
  }, "");
};

/* istanbul ignore next */

var Url =
  (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object"
    ? global.window.URL
    : require("url");
var resize = function resize(_ref) {
  var _ref$src = _ref.src,
    src = _ref$src === void 0 ? "" : _ref$src,
    params = _objectWithoutProperties(_ref, ["src"]);

  try {
    var _ref2 =
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
          ? new Url(src)
          : Url.parse(src),
      host = _ref2.host,
      pathname = _ref2.pathname;

    if (!host) {
      return src;
    }

    var url = "https://".concat(host).concat(pathname);
    var fit =
      params.width && params.height
        ? {
            fit: "crop"
          }
        : {};
    var resizeSrc = ""
      .concat(url)
      .concat(createParams(_objectSpread({}, params, fit)));
    return resizeSrc;
  } catch (e) {
    return src;
  }
};
var createGetSrcByDensity = function createGetSrcByDensity(_ref3) {
  var src = _ref3.src,
    width = _ref3.width,
    height = _ref3.height,
    resizeFn = _ref3.resizeFn;
  return function(density) {
    return resizeFn({
      src: src,
      width: width ? width * density : null,
      height: height ? height * density : null
    });
  };
};
var getSrcSetByDensity = function getSrcSetByDensity(
  ref,
  devicePixelRatios,
  getSrcByDensity
) {
  var devicePixelRatiosLen = devicePixelRatios.length;
  return devicePixelRatios.reduce(
    /* eslint-disable-next-line no-return-assign */
    function(memo, ratio) {
      return (
        /* eslint-disable-next-line no-param-reassign */
        (memo += ""
          .concat(getSrcByDensity(ratio), " ")
          .concat(ratio, "x")
          .concat(ratio === devicePixelRatiosLen ? "" : ", "))
      );
    },
    ""
  );
};
var getTargetDensity = function getTargetDensity(
  targetDensity,
  devicePixelRatios
) {
  if (_typeof(global.window) !== "object" || !global.window.devicePixelRatio) {
    return targetDensity;
  }

  var maxDevicePixelRatio = devicePixelRatios[devicePixelRatios.length - 1];
  return global.window.devicePixelRatio > maxDevicePixelRatio
    ? maxDevicePixelRatio
    : Math.round(global.window.devicePixelRatio);
};
var getSrcAttr = function getSrcAttr(ref) {
  if ("srcset" in ref) return "srcset";
  return "src";
};
var getSrcVariantByAttr = function getSrcVariantByAttr(
  ref,
  srcAttr,
  devicePixelRatios,
  targetDensity,
  getSrcByDensity
) {
  return srcAttr === "srcset"
    ? getSrcSetByDensity(ref, devicePixelRatios, getSrcByDensity)
    : getSrcByDensity(getTargetDensity(targetDensity, devicePixelRatios));
};
var getLowDefSrc = function getLowDefSrc(_ref4) {
  var src = _ref4.src,
    width = _ref4.width,
    height = _ref4.height,
    resizeFn = _ref4.resizeFn;
  return src === PLACEHOLDER_IMAGE
    ? src
    : resizeFn({
        src: src,
        width: Math.round(width / 10),
        height: Math.round(height / 10)
      });
};

var LazyLoaderProvider =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(LazyLoaderProvider, _PureComponent);

    function LazyLoaderProvider(props) {
      var _this;

      _classCallCheck(this, LazyLoaderProvider);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(LazyLoaderProvider).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onLoad",
        function() {
          var imageRef = _this.state.imageRef;

          if (imageRef && imageRef.current) {
            imageRef.current.style.filter = "none";
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onLoadBg",
        function(srcVariant) {
          var backgroundRef = _this.state.backgroundRef;

          if (backgroundRef && backgroundRef.current) {
            backgroundRef.current.style.backgroundImage = "url(".concat(
              srcVariant,
              ")"
            );
            backgroundRef.current.style.filter = "none";
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onLoadBoth",
        function(srcVariant) {
          return function() {
            _this.onLoad();

            _this.onLoadBg(srcVariant);
          };
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "load",
        function(ready) {
          var _this$state = _this.state,
            imageRef = _this$state.imageRef,
            backgroundRef = _this$state.backgroundRef;
          var _this$props = _this.props,
            src = _this$props.src,
            width = _this$props.width,
            height = _this$props.height,
            resizeFn = _this$props.resizeFn,
            targetDensity = _this$props.targetDensity,
            devicePixelRatios = _this$props.devicePixelRatios;

          if (ready && imageRef && imageRef.current) {
            if (!backgroundRef) imageRef.current.onload = _this.onLoad;
            var getSrcByDensity = createGetSrcByDensity({
              src: src,
              width: width,
              height: height,
              resizeFn: resizeFn
            });
            var srcAttr = backgroundRef ? "src" : getSrcAttr(imageRef.current);
            var srcVariant = getSrcVariantByAttr(
              imageRef.current,
              srcAttr,
              devicePixelRatios,
              targetDensity,
              getSrcByDensity
            );
            if (backgroundRef)
              imageRef.current.onload = _this.onLoadBoth(srcVariant);
            imageRef.current[srcAttr] = srcVariant;
          }
        }
      );

      var _src = props.src,
        _width = props.width,
        _height = props.height,
        tag = props.tag,
        _resizeFn = props.resizeFn,
        style = props.style;
      /* eslint-disable */

      _this.state = {
        src: getLowDefSrc({
          src: _src,
          width: _width,
          height: _height,
          resizeFn: _resizeFn
        }),
        style: _objectSpread({}, style, BLUR_STYLES),
        imageRef: createRef(),
        backgroundRef: tag === "img" ? null : createRef(),
        load: _this.load
      };
      /* eslint-enable */

      return _this;
    }

    _createClass(LazyLoaderProvider, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var prevProps =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var _this$props2 = this.props,
            src = _this$props2.src,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            resizeFn = _this$props2.resizeFn;
          var prevSrc = prevProps.src;

          if (src !== prevSrc) {
            /* eslint-disable-next-line react/no-did-update-set-state */
            this.setState({
              /* eslint-disable-next-line react/no-unused-state */
              src: getLowDefSrc({
                src: src,
                width: width,
                height: height,
                resizeFn: resizeFn
              }),

              /* eslint-disable-next-line react/no-unused-state */
              style: _objectSpread({}, style, BLUR_STYLES)
            });
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return React.createElement(
            Provider$c,
            {
              value: this.state
            },
            children
          );
        }
      }
    ]);

    return LazyLoaderProvider;
  })(PureComponent);

_defineProperty(LazyLoaderProvider, "propTypes", {
  children: PropTypes.node.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  resizeFn: PropTypes.func,
  targetDensity: PropTypes.number,
  devicePixelRatios: PropTypes.arrayOf(PropTypes.number),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  tag: PropTypes.string
});

_defineProperty(LazyLoaderProvider, "defaultProps", {
  src: PLACEHOLDER_IMAGE,
  width: null,
  height: null,
  resizeFn: resize,
  targetDensity: DEFAULT_TARGET_DENSITY,
  devicePixelRatios: DEFAULT_DEVICE_PIXEL_RATIOS,
  style: {},
  tag: "img"
});

var LazyLoader = function LazyLoader(_ref) {
  var src = _ref.src,
    height = _ref.height,
    width = _ref.width,
    style = _ref.style,
    resizeFn = _ref.resizeFn,
    children = _ref.children,
    tag = _ref.tag;
  return React.createElement(
    LazyLoaderProvider,
    {
      src: src,
      height: height,
      width: width,
      style: style,
      resizeFn: resizeFn,
      tag: tag
    },
    React.createElement(Consumer$c, null, function(value) {
      return children(value);
    })
  );
};
LazyLoader.propTypes = {
  children: PropTypes.func.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  resizeFn: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  tag: PropTypes.string
};
LazyLoader.defaultProps = {
  src: PLACEHOLDER_IMAGE,
  width: null,
  height: null,
  resizeFn: resize,
  style: {},
  tag: "img"
};

var _createContext$1 = createContext(),
  Provider$d = _createContext$1.Provider,
  Consumer$d = _createContext$1.Consumer;

var TabsProvider =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TabsProvider, _Component);

    function TabsProvider(props) {
      var _this;

      _classCallCheck(this, TabsProvider);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(TabsProvider).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onChangeTabIndex",
        function(callback) {
          return function(e) {
            var tabIndex =
              e.constructor === Number
                ? e
                : parseInt(e.target.dataset.index, 10);
            var currentTabIndex = _this.state.tabIndex;

            if (tabIndex === currentTabIndex) {
              return;
            }

            if (typeof callback === "function") {
              callback(tabIndex);
            }

            _this.setState({
              tabIndex: tabIndex
            });
          };
        }
      );

      var _tabIndex = props.tabIndex;
      _this.state = {
        tabIndex: _tabIndex
      };
      return _this;
    }

    _createClass(TabsProvider, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            onChangeTabIndex = _this$props.onChangeTabIndex;
          var tabsAssets = {
            tabIndex: this.state.tabIndex,
            onChangeTabIndex: onChangeTabIndex || this.onChangeTabIndex
          };
          return React.createElement(
            Provider$d,
            {
              value: tabsAssets
            },
            children
          );
        }
      }
    ]);

    return TabsProvider;
  })(Component);

_defineProperty(TabsProvider, "propTypes", {
  tabIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  onChangeTabIndex: PropTypes.func
});

_defineProperty(TabsProvider, "defaultProps", {
  tabIndex: 0,
  onChangeTabIndex: null
});

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n    padding-right: ", ";\n  "]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral([
    "\n    &.tab__content--overflowed {\n      margin-left: 0;\n      padding-left: 0;\n      width: 100%;\n    }\n  "
  ]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral([
    "\n    &.tabs__container--overflowed:after {\n      width: 100%;\n      left: 0;\n    }\n  "
  ]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var padding = spacing.moderate;
var Container$b = styled.div
  .attrs({
    className: function className(props) {
      return props.areTabsOverflow ? "tabs__container--overflowed" : null;
    }
  })
  .withConfig({
    displayName: "Tabs__Container",
    componentId: "sc-1kggst6-0"
  })(
  [
    "",
    ";position:relative;z-index:",
    ';width:100%;overflow:visible;&:after{content:"";display:block;position:absolute;border-bottom:1px solid ',
    ";left:0;right:0;bottom:0;z-index:",
    ";}&.tabs__container--overflowed:after{width:100vw;left:calc(50% - 50vw);}"
  ],
  smallAndUp(_templateObject$o()),
  zIndex.reset,
  themes.tm.gray04,
  zIndex.unset
);
var Content$4 = styled.div
  .attrs({
    className: function className(props) {
      return props.areTabsOverflow ? "tabs__content--overflowed" : null;
    }
  })
  .withConfig({
    displayName: "Tabs__Content",
    componentId: "sc-1kggst6-1"
  })(
  [
    "",
    ";display:flex;flex:1;width:100%;overflow-x:auto;scroll-behavior:smooth;&::-webkit-scrollbar{display:none;}&.tab__content--overflowed{margin-left:calc(50% - 50vw);padding-left:calc(50vw - 50%);width:100vw;}"
  ],
  smallAndUp(_templateObject2$e())
);
var Tab = styled.div.withConfig({
  displayName: "Tabs__Tab",
  componentId: "sc-1kggst6-2"
})(
  [
    "",
    ";display:block;padding-right:",
    ";white-space:nowrap;&:last-of-type{padding-right:0;}"
  ],
  largeAndUp(_templateObject3$c(), spacing.comfy),
  spacing.normal
);

var checkIfOverflows = function checkIfOverflows() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$scrollWidth = _ref.scrollWidth,
    scrollWidth = _ref$scrollWidth === void 0 ? 0 : _ref$scrollWidth;

  return offsetWidth < scrollWidth;
};

var TabItemButton = styled.div
  .attrs(function(props) {
    var isActive = props.isActive,
      dataIndex = props.dataIndex,
      rest = _objectWithoutProperties(props, ["isActive", "dataIndex"]);

    return _objectSpread(
      {
        className: isActive ? "tab__button--active" : "",
        "data-index": dataIndex
      },
      rest
    );
  })
  .withConfig({
    displayName: "Tabs__TabItemButton",
    componentId: "sc-1kggst6-3"
  })(
  [
    "display:block;padding:",
    " 0 ",
    " 0;cursor:pointer;&.tab__button--active{border-bottom:4px solid ",
    ";}"
  ],
  padding,
  spacing.cozy,
  function(props) {
    return props.underlineColor || colors.azure.base;
  }
);

var Tabs =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Tabs, _Component);

    function Tabs() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Tabs);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isTabsContainerOverflows: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateIsOverflowsState",
        function() {
          var isOverflows = checkIfOverflows(_this.content);

          if (_this.state.isTabsContainerOverflows !== isOverflows) {
            _this.setState({
              isTabsContainerOverflows: isOverflows
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "itemRefs",
        []
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderItems",
        function() {
          var _this$props = _this.props,
            items = _this$props.items,
            index = _this$props.index,
            _onClick = _this$props.onClick,
            underlineColor = _this$props.underlineColor,
            itemsProps = _this$props.itemsProps,
            defaultItemProps = _this$props.defaultItemProps,
            textProps = _objectWithoutProperties(_this$props, [
              "items",
              "index",
              "onClick",
              "underlineColor",
              "itemsProps",
              "defaultItemProps"
            ]);

          var areItemsValidKeys =
            items &&
            items.length > 0 &&
            (items[0].constructor === String ||
              items[0].constructor === Number);
          return items.map(function(item, itemIndex) {
            return React.createElement(
              Tab,
              {
                key: areItemsValidKeys ? item : itemIndex
              },
              React.createElement(
                TabItemButton,
                _extends(
                  {
                    isActive: itemIndex === index,
                    underlineColor: underlineColor,
                    onClick: function onClick() {
                      return _onClick(itemIndex);
                    },
                    ref: function ref(_ref2) {
                      _this.itemRefs[itemIndex] = _ref2;
                    },
                    dataIndex: itemIndex
                  },
                  itemsProps[itemIndex] || defaultItemProps
                ),
                React.createElement(
                  TextBase,
                  _extends(
                    {
                      responsiveSize: {
                        small: "kilo",
                        large: "giga"
                      },
                      primary: true
                    },
                    textProps
                  ),
                  item
                )
              )
            );
          });
        }
      );

      return _this;
    }

    _createClass(Tabs, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.updateIsOverflowsState();
          window.addEventListener("resize", this.updateIsOverflowsState); // eslint-disable-line
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.state.isTabsContainerOverflows) {
            var _this$content = this.content,
              contentWidth = _this$content.offsetWidth,
              contentScrollLeft = _this$content.scrollLeft;
            var index = this.props.index;
            var _this$itemRefs$index = this.itemRefs[index],
              _this$itemRefs$index$ = _this$itemRefs$index.offsetWidth,
              activeItemWidth =
                _this$itemRefs$index$ === void 0 ? 0 : _this$itemRefs$index$,
              _this$itemRefs$index$2 = _this$itemRefs$index.offsetLeft,
              activeItemLeft =
                _this$itemRefs$index$2 === void 0 ? 0 : _this$itemRefs$index$2;

            if (
              activeItemWidth + activeItemLeft >
              contentWidth + contentScrollLeft
            ) {
              this.content.scrollLeft =
                activeItemWidth +
                activeItemLeft -
                contentWidth +
                parseInt(padding, 10);
            } else if (activeItemLeft < contentScrollLeft) {
              this.content.scrollLeft = activeItemLeft - parseInt(padding, 10);
            }
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.updateIsOverflowsState); //eslint-disable-line
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          return React.createElement(
            Container$b,
            {
              areTabsOverflow: this.state.isTabsContainerOverflows
            },
            React.createElement(
              Content$4,
              {
                ref: function ref(_ref3) {
                  _this2.content = _ref3;
                },
                areTabsOverflow: this.state.isTabsContainerOverflows
              },
              this.renderItems()
            )
          );
        }
      }
    ]);

    return Tabs;
  })(Component);

_defineProperty(Tabs, "propTypes", {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  itemsProps: PropTypes.arrayOf(PropTypes.any),

  /* eslint-disable react/forbid-prop-types */
  defaultItemProps: PropTypes.object,

  /* eslint-enable react/forbid-prop-types */
  index: PropTypes.number,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  accent: PropTypes.string,
  weight: PropTypes.string,
  underlineColor: PropTypes.string
});

_defineProperty(Tabs, "defaultProps", {
  itemsProps: [],
  defaultItemProps: {},
  index: -1,
  onClick: function onClick() {},
  variant: null,
  accent: null,
  weight: null,
  underlineColor: null
});

var sliderHeight = "4px";
var handleSize = "23px";
var SliderContainer = styled.div.withConfig({
  displayName: "RangeSliderstyles__SliderContainer",
  componentId: "sc-2tdgn0-0"
})(
  [
    "position:relative;width:100%;touch-action:none;box-sizing:border-box;height:calc(",
    " + 1px);display:flex;align-items:center;&.disabled{opacity:0.4;}"
  ],
  handleSize
);
var SliderRail = styled.div.withConfig({
  displayName: "RangeSliderstyles__SliderRail",
  componentId: "sc-2tdgn0-1"
})(
  ["position:absolute;width:100%;background-color:", ";height:", ";"],
  themes.global.gray04,
  sliderHeight
);
var SliderTrack = styled.div.withConfig({
  displayName: "RangeSliderstyles__SliderTrack",
  componentId: "sc-2tdgn0-2"
})(
  [
    "position:absolute;left:0;height:",
    ";background-color:",
    ";&.disabled{background-color:",
    ";}"
  ],
  sliderHeight,
  themes.global.primary.base,
  themes.global.gray03
);
var SliderHandle = styled.div.withConfig({
  displayName: "RangeSliderstyles__SliderHandle",
  componentId: "sc-2tdgn0-3"
})(
  [
    "position:absolute;width:",
    ";height:",
    ";cursor:pointer;touch-action:pan-x;border:1px solid ",
    ";border-radius:50%;background:",
    ";margin-left:calc(-",
    " / 2);"
  ],
  handleSize,
  handleSize,
  themes.global.gray03,
  themes.global.white.base,
  handleSize
);

var Track = function Track(props) {
  var className = props.className,
    offset = props.offset,
    length = props.length,
    disabled = props.disabled;
  var positonStyle = {
    left: "".concat(offset, "%"),
    width: "".concat(length, "%")
  };
  var classes = classNames(className, {
    "slider__track--disabled": disabled
  });
  return React.createElement(SliderTrack, {
    className: classes,
    style: positonStyle
  });
};

Track.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};
Track.defaultProps = {
  className: "",
  disabled: false
};

var Handle =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Handle, _PureComponent);

    function Handle() {
      _classCallCheck(this, Handle);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Handle).apply(this, arguments)
      );
    }

    _createClass(Handle, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            offset = _this$props.offset,
            disabled = _this$props.disabled,
            min = _this$props.min,
            max = _this$props.max,
            value = _this$props.value,
            restProps = _objectWithoutProperties(_this$props, [
              "offset",
              "disabled",
              "min",
              "max",
              "value"
            ]);

          var postionStyle = {
            left: "".concat(offset, "%")
          };
          return React.createElement(
            SliderHandle,
            _extends(
              {
                ref: this.setHandleRef
              },
              restProps,
              {
                style: postionStyle, // aria attribute
                role: "slider",
                "aria-valuemin": min,
                "aria-valuemax": max,
                "aria-valuenow": value,
                "aria-disabled": disabled
              }
            )
          );
        }
      }
    ]);

    return Handle;
  })(PureComponent);
Handle.propTypes = {
  offset: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
Handle.defaultProps = {
  disabled: false
};

var isEventFromHandle = function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function(key) {
      return e.target === handles[key];
    });
  } catch (error) {
    return false;
  }
};
var isNotTouchEvent = function isNotTouchEvent(e) {
  return (
    e.touches.length > 1 ||
    (e.type.toLowerCase() === "touchend" && e.touches.length > 0)
  );
};
var getClosestPoint = function getClosestPoint(val, _ref) {
  var step = _ref.step,
    min = _ref.min;
  return step ? Math.round((val - min) / step) * step + min : 0;
};
var getPrecision = function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf(".") >= 0) {
    precision = stepString.length - stepString.indexOf(".") - 1;
  }

  return precision;
};
var getHandleCenterPosition = function getHandleCenterPosition(handle) {
  var coords = handle.getBoundingClientRect();
  return global.window.pageXOffset + coords.left + coords.width * 0.5;
};
var ensureValueInRange = function ensureValueInRange(val, _ref2) {
  var max = _ref2.max,
    min = _ref2.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
};
var ensureValuePrecision = function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = getClosestPoint(val, props);
  return !step
    ? closestPoint
    : parseFloat(closestPoint.toFixed(getPrecision(step)));
};
var pauseEvent = function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
};
var ensureValueNotConflict = function ensureValueNotConflict(
  handle,
  val,
  bounds,
  thershold
) {
  if (handle != null && bounds !== undefined) {
    if (handle > 0 && val <= bounds[handle - 1]) {
      return bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
      return bounds[handle + 1] - thershold;
    }
  }

  return val;
};
var trimAlignValue = function trimAlignValue(v, handle, props) {
  var bounds =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var thershold =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var valInRange = ensureValueInRange(v, props);
  var valNotConflict = ensureValueNotConflict(
    handle,
    valInRange,
    bounds,
    thershold
  );
  return ensureValuePrecision(valNotConflict, props);
};

var noop$4 = function noop() {};

var RangeSlider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(RangeSlider, _React$Component);

    function RangeSlider(props) {
      var _this;

      _classCallCheck(this, RangeSlider);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(RangeSlider).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onMouseDown",
        function(e) {
          var position = e.pageX;

          if (!isEventFromHandle(e, _this.handlesRefs)) {
            _this.dragOffset = 0;
          } else {
            position = _this.getHandlePosition(e, position);
          }

          _this.removeDocumentEvents();

          _this.onStart(position);

          _this.addDocumentMouseEvents();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onMouseMove",
        function(e) {
          if (!_this.sliderRef) {
            _this.onEnd();

            return;
          }

          var position = e.pageX;

          _this.onMove(e, position - _this.dragOffset);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onTouchStart",
        function(e) {
          if (isNotTouchEvent(e)) {
            return;
          }

          var position = e.touches[0].pageX;

          if (!isEventFromHandle(e, _this.handlesRefs)) {
            _this.dragOffset = 0;
          } else {
            position = _this.getHandlePosition(e, position);
          }

          _this.onStart(position);

          _this.addDocumentTouchEvents();

          pauseEvent(e);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onTouchMove",
        function(e) {
          if (isNotTouchEvent(e) || !_this.sliderRef) {
            _this.onEnd();

            return;
          }

          var position = e.touches[0].pageX;

          _this.onMove(e, position - _this.dragOffset);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onFocus",
        function(e) {
          var onFocus = _this.props.onFocus;

          if (isEventFromHandle(e, _this.handlesRefs)) {
            var handlePosition = getHandleCenterPosition(e.target);
            _this.dragOffset = 0;

            _this.onStart(handlePosition);

            pauseEvent(e);
            onFocus(e);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onBlur",
        function(e) {
          var onBlur = _this.props.onBlur;

          _this.onEnd(e);

          onBlur(e);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "onEnd",
        function() {
          var onAfterChange = _this.props.onAfterChange;

          _this.setState({
            handle: null
          });

          _this.removeDocumentEvents();

          onAfterChange(_this.getValue());
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getHandlePosition",
        function(e, position) {
          var handlePosition = getHandleCenterPosition(e.target);
          _this.dragOffset = position - handlePosition;
          return handlePosition;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getValue",
        function() {
          var bounds = _this.state.bounds;
          return bounds;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "calcOffset",
        function(value) {
          var _this$props = _this.props,
            min = _this$props.min,
            max = _this$props.max;
          var ratio = (value - min) / (max - min);
          return ratio * 100;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderHandles",
        function() {
          var bounds = _this.state.bounds;
          var _this$props2 = _this.props,
            disabled = _this$props2.disabled,
            min = _this$props2.min,
            max = _this$props2.max;
          var offsets = bounds.map(_this.calcOffset);
          return bounds.map(function(v, i) {
            var _classNames;

            var key = i + 1;
            var classes = classNames(
              "slider__handle",
              ((_classNames = {}),
              _defineProperty(
                _classNames,
                "slider__handle-".concat(i + 1),
                true
              ),
              _defineProperty(
                _classNames,
                "slider__handle--disabled",
                disabled
              ),
              _classNames)
            );
            return React.createElement(Handle, {
              key: key,
              className: classes,
              offset: offsets[i],
              value: v,
              min: min,
              max: max,
              disabled: disabled,
              ref: function ref(h) {
                return _this.saveHandle(i, h);
              }
            });
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderTrack",
        function() {
          var bounds = _this.state.bounds;
          var disabled = _this.props.disabled;
          var offsets = bounds.map(_this.calcOffset);
          return bounds.slice(0, -1).map(function(_, index) {
            var i = index + 1;
            return React.createElement(Track, {
              className: "slider__track",
              offset: offsets[i - 1],
              length: offsets[i] - offsets[i - 1],
              key: i,
              disabled: disabled
            });
          });
        }
      );

      var currentValue = props.value,
        defaultValue = props.defaultValue,
        _max = props.max;

      var _value = currentValue || defaultValue;

      var _bounds = _value.map(function(v, i) {
        return trimAlignValue(v, i, props);
      });

      var recent = _bounds[0] === _max ? 0 : _bounds.length - 1;
      _this.state = {
        handle: null,
        recent: recent,
        bounds: _bounds
      };
      _this.handlesRefs = [];
      return _this;
    }

    _createClass(
      RangeSlider,
      [
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.removeDocumentEvents();
          }
        },
        {
          key: "onChange",
          value: function onChange(state) {
            var _this$props3 = this.props,
              value = _this$props3.value,
              onChange = _this$props3.onChange;
            var isNotControlled = !value;

            if (isNotControlled) {
              this.setState(state);
            } else if (state.handle !== undefined) {
              this.setState({
                handle: state.handle
              });
            }

            var data = _objectSpread({}, this.state, state);

            var changedValue = data.bounds;
            onChange(changedValue);
          }
        },
        {
          key: "onStart",
          value: function onStart(position) {
            var onBeforeChange = this.props.onBeforeChange;
            var stateBounds = this.state.bounds;
            var bounds = this.getValue();
            onBeforeChange(bounds);
            var value = this.calcValueByPos(position);
            this.startValue = value;
            this.startPosition = position;
            var closestBound = this.getClosestBound(value);
            this.prevMovedHandleIndex = this.getBoundNeedMoving(
              value,
              closestBound
            );
            this.setState({
              handle: this.prevMovedHandleIndex,
              recent: this.prevMovedHandleIndex
            });
            var prevValue = bounds[this.prevMovedHandleIndex];

            if (value === prevValue) {
              return;
            }

            var nextBounds = _toConsumableArray(stateBounds);

            nextBounds[this.prevMovedHandleIndex] = value;
            this.onChange({
              bounds: nextBounds
            });
          }
        },
        {
          key: "onMove",
          value: function onMove(e, position) {
            pauseEvent(e);
            var _this$state = this.state,
              bounds = _this$state.bounds,
              handle = _this$state.handle;
            var value = this.calcValueByPos(position);
            var oldValue = bounds[handle];

            if (value === oldValue) {
              return;
            }

            this.moveTo(value);
          }
        },
        {
          key: "getClosestBound",
          value: function getClosestBound(value) {
            var bounds = this.state.bounds;
            var closestBound = 0;

            if (
              Math.abs(bounds[closestBound + 1] - value) <
              Math.abs(bounds[closestBound] - value)
            ) {
              closestBound += 1;
            }

            return closestBound;
          }
        },
        {
          key: "getBoundNeedMoving",
          value: function getBoundNeedMoving(value, closestBound) {
            var _this$state2 = this.state,
              bounds = _this$state2.bounds,
              recent = _this$state2.recent;
            var boundNeedMoving = closestBound;
            var isAtTheSamePoint =
              bounds[closestBound + 1] === bounds[closestBound];

            if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
              boundNeedMoving = recent;
            }

            if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
              boundNeedMoving =
                value < bounds[closestBound + 1]
                  ? closestBound
                  : closestBound + 1;
            }

            return boundNeedMoving;
          }
          /**
           * Returns an array of possible slider points, taking into account both
           * and `step`. The result is cached.
           */
        },
        {
          key: "getPoints",
          value: function getPoints() {
            var _this$props4 = this.props,
              step = _this$props4.step,
              min = _this$props4.min,
              max = _this$props4.max;
            var cache = this.getPointsCache;

            if (!cache || cache.step !== step) {
              var pointsObject = {};

              for (var point = min; point <= max; point += step) {
                pointsObject[point] = point;
              }

              var points = Object.keys(pointsObject).map(parseFloat);
              points.sort(function(a, b) {
                return a - b;
              });
              this.getPointsCache = {
                step: step,
                points: points
              };
            }

            return this.getPointsCache.points;
          }
        },
        {
          key: "getSliderStart",
          value: function getSliderStart() {
            var slider = this.sliderRef;
            var rect = slider.getBoundingClientRect();
            return rect.left + global.window.pageXOffset;
          }
        },
        {
          key: "getSliderLength",
          value: function getSliderLength() {
            var slider = this.sliderRef;

            if (!slider) {
              return 0;
            }

            var coords = slider.getBoundingClientRect();
            return coords.width;
          }
        },
        {
          key: "moveTo",
          value: function moveTo(value) {
            var _this$state3 = this.state,
              handle = _this$state3.handle,
              bounds = _this$state3.bounds;

            var nextBounds = _toConsumableArray(bounds);

            nextBounds[handle] = value;
            this.onChange({
              handle: handle,
              bounds: nextBounds
            });
          }
        },
        {
          key: "calcValue",
          value: function calcValue(offset) {
            var _this$props5 = this.props,
              min = _this$props5.min,
              max = _this$props5.max;
            var ratio = Math.max(offset, 0) / this.getSliderLength();
            var value = ratio * (max - min) + min;
            return value;
          }
        },
        {
          key: "calcValueByPos",
          value: function calcValueByPos(position) {
            var threshold = this.props.threshold;
            var _this$state4 = this.state,
              handle = _this$state4.handle,
              bounds = _this$state4.bounds;
            var pixelOffset = position - this.getSliderStart();
            var nextValue = trimAlignValue(
              this.calcValue(pixelOffset),
              handle,
              this.props,
              bounds,
              threshold
            );
            return nextValue;
          }
        },
        {
          key: "addDocumentTouchEvents",
          value: function addDocumentTouchEvents() {
            global.window.addEventListener("touchmove", this.onTouchMove);
            global.window.addEventListener("touchend", this.onEnd);
          }
        },
        {
          key: "addDocumentMouseEvents",
          value: function addDocumentMouseEvents() {
            global.window.addEventListener("mousemove", this.onMouseMove);
            global.window.addEventListener("mouseup", this.onEnd);
          }
        },
        {
          key: "removeDocumentEvents",
          value: function removeDocumentEvents() {
            global.window.removeEventListener("touchmove", this.onTouchMove);
            global.window.removeEventListener("touchend", this.onEnd);
            global.window.removeEventListener("mousemove", this.onMouseMove);
            global.window.removeEventListener("mouseup", this.onEnd);
          }
        },
        {
          key: "saveHandle",
          value: function saveHandle(index, handle) {
            this.handlesRefs[index] = handle;
          }
        },
        {
          key: "render",
          value: function render() {
            var _classNames2,
              _this2 = this;

            var _this$props6 = this.props,
              disabled = _this$props6.disabled,
              className = _this$props6.className;
            var handles = this.renderHandles();
            var track = this.renderTrack();
            var sliderClassName = classNames(
              "slider",
              ((_classNames2 = {}),
              _defineProperty(_classNames2, "slider--disabled", disabled),
              _defineProperty(_classNames2, "disabled", disabled),
              _defineProperty(_classNames2, className, className),
              _classNames2)
            );
            return React.createElement(
              SliderContainer,
              {
                ref: function ref(slider) {
                  _this2.sliderRef = slider;
                },
                className: sliderClassName,
                onTouchStart: disabled ? noop$4 : this.onTouchStart,
                onMouseDown: disabled ? noop$4 : this.onMouseDown,
                onFocus: disabled ? noop$4 : this.onFocus,
                onBlur: disabled ? noop$4 : this.onBlur
              },
              React.createElement(SliderRail, {
                className: "slider__rail"
              }),
              track,
              handles
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            var propsValue = props.value,
              min = props.min,
              max = props.max,
              threshold = props.threshold;

            if (!(propsValue || min || min === 0 || max)) {
              return null;
            }

            var bounds = state.bounds;
            var value = propsValue || bounds;
            var nextBounds = value.map(function(v, i) {
              return trimAlignValue(v, i, props, value, threshold);
            });

            if (
              nextBounds.length === bounds.length &&
              nextBounds.every(function(v, i) {
                return v === bounds[i];
              })
            ) {
              return null;
            }

            return _objectSpread({}, state, {
              bounds: nextBounds
            });
          }
        }
      ]
    );

    return RangeSlider;
  })(React.Component);

_defineProperty(RangeSlider, "displayName", "RangeSlider");

_defineProperty(RangeSlider, "propTypes", {
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.arrayOf(PropTypes.number),
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  onBeforeChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  threshold: PropTypes.number
});

_defineProperty(RangeSlider, "defaultProps", {
  defaultValue: [0, 100],
  value: null,
  min: 0,
  max: 100,
  step: 1,
  onChange: noop$4,
  onBeforeChange: noop$4,
  onAfterChange: noop$4,
  onFocus: null,
  onBlur: null,
  className: "",
  disabled: false,
  threshold: 0
});

export {
  Button,
  Badge,
  RatingBadge,
  IconButton,
  DayTile,
  DayTileDate,
  DayTileItem,
  DayTileButton,
  DayTileMoreButton,
  DayTileOverflowButton,
  Card,
  Column,
  Container$2 as Container,
  LoaderRing,
  DrawerProvider,
  Gradient,
  Header,
  ImageHeader as HeaderWithImage,
  Heading,
  ImageCard,
  Banner,
  FeedbackInline,
  ListContainer,
  ListRow,
  PureListRow,
  ListRowOverflow,
  Section,
  SectionItem,
  BottomSheet,
  NavBar,
  Row,
  SearchInput,
  SearchInput$1 as SearchComponent,
  SearchSuggest,
  Spacing,
  Breadcrumb,
  Container$1 as ContainerBlock,
  ResponsiveImage,
  StaticImage,
  ThumbnailCircle,
  TextBase as Text,
  AlertIcon,
  CAIcon,
  CampsiteIcon,
  ChevronIcon,
  ClubIcon,
  Concession as ConcessionIcon,
  CrossIcon,
  DonationIcon,
  FacebookIcon,
  GeneralIcon,
  InstagramIcon,
  Hotel as HotelIcon,
  Meal as MealIcon,
  Membership as MembershipIcon,
  Merchandise as MerchandiseIcon,
  OverflowIcon,
  ParkingIcon,
  SpecialIcon,
  StarIcon,
  Transportation as TransportationIcon,
  TwitterIcon,
  USIcon,
  VenueIcon,
  VipIcon,
  YoutubeIcon,
  LinkedinIcon,
  AppleIcon,
  GooglePlayIcon,
  HeartIcon,
  ErrorIcon,
  SuccessIcon,
  InfoIcon,
  BackIcon,
  ForwardIcon,
  UpIcon,
  DownIcon,
  CloseIcon,
  DeleteIcon,
  CalendarIcon,
  HomeIcon,
  SearchIcon,
  BookmarkIcon,
  ClearIcon,
  EditIcon,
  FeedbackIcon,
  FilterIcon,
  LocationIcon,
  TicketIcon,
  TicketsIcon,
  UserIcon,
  ListIcon,
  WarningIcon,
  VenueSearchIcon,
  DeviceSizeProvider,
  Consumer$2 as DeviceSizeConsumer,
  DisplayFor,
  ScrollObserverProvider,
  ScrollObserverConsumer,
  Portal,
  colors,
  themes,
  constants,
  spacing,
  typography,
  zIndex,
  largeAndUp,
  mediumAndUp,
  xLargeAndUp,
  smallAndUp,
  PrimaryText,
  SecondaryText,
  SectionHeading,
  Link,
  LinkCta,
  BoldText,
  Toggle,
  DropDownGroup,
  DropDownOption,
  RadioButton,
  RadioGroup,
  CheckBoxButton as CheckBox,
  CheckBoxGroup,
  Input$1 as Input,
  ButtonGroup,
  QtySelector,
  LinkList,
  ListItem as LinkListItem,
  Modal,
  Backdrop,
  Provider$3 as BackdropProvider,
  Provider$1 as ContainerProvider,
  index as AdaptiveModal,
  DefaultActionBar as AdaptiveActionBar,
  MODAL_SIZE_SMALL,
  MODAL_SIZE_MEDIUM,
  MODAL_SIZE_LARGE,
  MODAL_SIZE_XLARGE,
  Consumer$a as ModalConsumer,
  withModal,
  Backdrop$1 as AdaptiveBackdrop,
  PopOver,
  Tooltip,
  DeviceConnectionProvider,
  Consumer$b as DeviceConnectionConsumer,
  DisplayOn,
  SeatTooltip,
  SeatData,
  LazyLoaderProvider,
  Consumer$c as LazyLoaderConsumer,
  LazyLoader,
  Tabs,
  TabsProvider,
  Consumer$d as TabsConsumer,
  StatusBadge,
  StatusBadgeGroup,
  RangeSlider
};
//# sourceMappingURL=index.es.js.map
