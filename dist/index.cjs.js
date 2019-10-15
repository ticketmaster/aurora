"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = require("react");
var React__default = _interopDefault(React);
var PropTypes = require("prop-types");
var PropTypes__default = _interopDefault(PropTypes);
var styled = require("styled-components");
var styled__default = _interopDefault(styled);
var classNames = _interopDefault(require("classnames"));
var ReactDOM = _interopDefault(require("react-dom"));
var reactTransitionGroup = require("react-transition-group");

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
var AUTO = "auto";
var DIRECTIONS = [TOP, BOTTOM, LEFT, RIGHT, AUTO];
// VARIANTS
var LIGHT = "light";
var DARK = "dark";
var VARIANTS = [LIGHT, DARK];
// BUTTON_VARIANTS
var STANDARD = "standard";
var SPECIAL = "special";
var OUTLINE = "outline";
var OUTLINE_GRAY = "outlineGray";
var TRANSPARENT = "transparent";
var BUTTON_VARIANTS = [STANDARD, SPECIAL, OUTLINE, OUTLINE_GRAY, TRANSPARENT];
// SIZES
var SMALL = "small";
var REGULAR = "regular";
var LARGE = "large";
var SIZES = [SMALL, REGULAR, LARGE];
var SIZES_SL = [SMALL, LARGE];
var SIZES_SR = [SMALL, REGULAR];
var ARROW_WIDTH = 12; // FONT_WEIGHTS
var FONT_WEIGHT_SEMI_BOLD = "semiBold";

// THEME COLORS
var ONYX = "onyx";
var BASE = "base";

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

    /**
     * @deprecated Use `semiBold` value instead
     */
    extraBold: 600
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

var success = "#1bab1e";
var global$1 = {
  brand: "#026cdf",
  primary: {
    // brand colors
    base: "#026cdf",
    reverse: "#3396ff",
    reverseLight: "#80b5ef",
    reverseLightest: "#bfdaf6",
    // button colors
    dark: "#0150a7",
    darkest: "#013670",
    light: "#d6e7fa",
    lightest: "#ebf4fd",
    // not used in new components. kept for backward compatibility.
    lightBase: "rgba(2, 108, 223, 0.1)",
    medium: "#0150a7",
    muted: "#d6e7fa"
  },
  special: {
    base: success,
    dark: "#23702c",
    darkest: "#265333",
    medium: "#23702c" // not used in new components. kept for backward compatibility.
  },
  darkFill: "#1f262d",
  // not used in new components. kept for backward compatibility.
  dark: {
    base: "#1f262d",
    light: "#8f9296",
    lightest: "#e3e4e5"
  },
  accent01: {
    base: "#c56bff",
    dark: "#904eba",
    light: "#eacbff",
    lightest: "#f9f0ff"
  },
  accent02: {
    base: "#962d94",
    dark: "#6d236c",
    light: "#dfc0df",
    lightest: "#f4eaf4"
  },
  accent03: {
    base: "#14a1a3",
    dark: "#0a7e80",
    light: "#aadddd",
    lightest: "#cef2f2",
    reverse: "#20c4c7"
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
    light: "#f3c3c3",
    lightest: "#fbebeb"
  },
  caution: {
    base: "#f2bd2a",
    dark: "#c69a22",
    light: "#fae7b4",
    lightest: "#fdf5df"
  },
  success: {
    base: success,
    dark: "#148016",
    light: "#bae5bb",
    lightest: "#e8f6e8"
  },
  transparent: "transparent",
  onyx: {
    base: "rgba(38, 38, 38, 1)",
    light: "rgba(38, 38, 38, 0.65)",
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
      lightest: "#e9f7f6",
      muted: "#d5f0ef"
    }
  })
};

var tm = themes.tm;
/**
 * PLEASE NOTE: THESE COLORS ARE DEPRECATED! DO NOT USE!
 * Please reference the colorThemes located in `/src/theme/colorThemes` instead!
 */

var colors = {
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
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    exit: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  }
};
var cardBoxShadow =
  "0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12)";
var popContainersBoxShadow = "0 4px 4px 0 rgba(0, 0, 0, 0.12)";
var popContainersSharpBoxShadow = "0 2px 8px 0 rgba(159, 159, 159, 0.5)";
var THEME_TM = {
  themeName: "tm"
};

var _this = undefined;

/* eslint-disable no-param-reassign */
var memoize = function(fn) {
  return function() {
    for (
      var _len = arguments.length, input = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      input[_key] = arguments[_key];
    }

    var args = Array.prototype.slice.call(input);
    fn.cache = fn.cache || {};
    var result = fn.cache[args]
      ? fn.cache[args]
      : (fn.cache[args] = fn.apply(_this, args));
    return result;
  };
};

var getThemeObject = function getThemeObject(themeName, customValues) {
  var baseTheme = themes[themeName] || themes.global;

  if (customValues && customValues.constructor === Object) {
    return _objectSpread({}, baseTheme, customValues);
  }

  return baseTheme;
};

var memoized = memoize(getThemeObject);

var themeShape = {
  themeName: PropTypes__default.string.isRequired
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

    _ref$theme = _ref$theme === void 0 ? THEME_TM : _ref$theme;
    var _ref$theme$themeName = _ref$theme.themeName,
      themeName =
        _ref$theme$themeName === void 0
          ? THEME_TM.themeName
          : _ref$theme$themeName,
      _ref$theme$customValu = _ref$theme.customValues,
      customValues =
        _ref$theme$customValu === void 0 ? null : _ref$theme$customValu;
    var themeObject = memoized(themeName, customValues);
    return args.reduce(function(acc, el) {
      if (acc[el] === undefined) {
        throw new ReferenceError("value is not defined");
      }

      return acc[el];
    }, themeObject);
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

  if (typeof text !== "string") {
    return "";
  }

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
    dark: themes.global.onyx,
    light: themes.global.white,
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

  if (!theme || !theme.themeName) {
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

var throttle = function(callback, wait) {
  var immediate =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout = null;
  var initialCall = true; // eslint-disable-next-line func-names

  return function() {
    var _this = this;

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var callNow = immediate && initialCall;

    var next = function next() {
      callback.apply(_this, args);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
};

var isValidThemeColorVariant = function isValidThemeColorVariant() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : THEME_TM,
    _ref$themeName = _ref.themeName,
    themeName = _ref$themeName === void 0 ? THEME_TM.themeName : _ref$themeName,
    _ref$customValues = _ref.customValues,
    customValues = _ref$customValues === void 0 ? null : _ref$customValues;

  var color = arguments.length > 1 ? arguments[1] : undefined;
  var variant = arguments.length > 2 ? arguments[2] : undefined;
  var themeObject = memoized(themeName, customValues);
  return Boolean(
    themeObject[color] &&
      themeObject[color].constructor === Object &&
      themeObject[color][variant]
  );
};

var getBackgroundImage = function getBackgroundImage(_ref) {
  var backgroundImage = _ref.backgroundImage,
    deg = _ref.deg,
    stops = _ref.stops;
  return [
    deg &&
      stops &&
      "linear-gradient(".concat(deg, ", ").concat(stops.join(", "), ")"),
    backgroundImage && "url(".concat(backgroundImage, ")")
  ].join(backgroundImage && deg && stops ? ", " : "");
};

var colorVariants = {
  standard: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("primary", "base"),
    backgroundColorHover: getThemeValue("primary", "medium"),
    backgroundColorPressed: getThemeValue("primary", "dark"),
    borderColor: getThemeValue("transparent")
  },
  standardDisabled: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("primary", "base"),
    borderColor: getThemeValue("transparent")
  },
  special: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("special", "base"),
    backgroundColorHover: getThemeValue("special", "medium"),
    backgroundColorPressed: getThemeValue("special", "dark"),
    borderColor: getThemeValue("transparent")
  },
  specialDisabled: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("special", "base"),
    borderColor: getThemeValue("transparent")
  },
  outline: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("white", "base"),
    backgroundColorHover: getThemeValue("primary", "light"),
    backgroundColorPressed: getThemeValue("primary", "muted"),
    borderColor: getThemeValue("primary", "base")
  },
  outlineDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("primary", "base")
  },
  transparent: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    backgroundColorHover: getThemeValue("primary", "light"),
    backgroundColorPressed: getThemeValue("primary", "muted"),
    borderColor: getThemeValue("transparent")
  },
  transparentDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("transparent")
  },
  outlineGray: {
    color: getThemeValue("darkFill"),
    backgroundColor: getThemeValue("white", "base"),
    backgroundColorHover: getThemeValue("white", "base"),
    backgroundColorPressed: getThemeValue("white", "base"),
    borderColor: getThemeValue("gray04")
  },
  outlineGrayDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("gray02")
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

var StyledButton = styled__default.button.withConfig({
  displayName: "Basestyles__StyledButton",
  componentId: "sc-1s81zy5-0"
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
    ";&:focus{outline:none;box-shadow:0 0 5px 0 ",
    ";}&:hover{background-color:",
    ";}&:active{transform:scale(0.98,0.98) translate(0,1px);background-color:",
    ";}&:disabled{transform:none;color:",
    ";background-color:",
    ";border:1px solid ",
    ";",
    ";}&.noFocus:focus{box-shadow:none;}"
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
    var variant = _ref5.variant;
    return colorVariants[variant].color;
  },
  function(_ref6) {
    var variant = _ref6.variant;
    return colorVariants[variant].backgroundColor;
  },
  function(_ref7) {
    var variant = _ref7.variant;
    return colorVariants[variant].borderColor;
  },
  constants.easing.easeInOutQuad,
  getThemeValue("primary", "base"),
  function(_ref8) {
    var variant = _ref8.variant;
    return colorVariants[variant].backgroundColorHover;
  },
  function(_ref9) {
    var variant = _ref9.variant;
    return colorVariants[variant].backgroundColorPressed;
  },
  function(_ref10) {
    var variant = _ref10.variant;
    return colorVariants[variant].color;
  },
  function(_ref11) {
    var variant = _ref11.variant;
    return colorVariants[variant].backgroundColor;
  },
  function(_ref12) {
    var variant = _ref12.variant;
    return colorVariants["".concat(variant, "Disabled")].borderColor;
  },
  function(_ref13) {
    var variant = _ref13.variant;
    return variant === SPECIAL ? "opacity: 0.4;" : "opacity: 0.2;";
  }
);
StyledButton.defaultProps = {
  theme: {
    themeName: "tm"
  }
};
var StyledButtonLink = styled__default(StyledButton).withConfig({
  displayName: "Basestyles__StyledButtonLink",
  componentId: "sc-1s81zy5-1"
})(["display:block;text-decoration:none;"]);

function isButtonLinkProps(props) {
  return !!props.href;
}

var Button =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Button, _Component);

    function Button() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Button);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "focusHandler",
        function() {
          window.addEventListener("keyup", _this.activateFocusStyles);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "blurHandler",
        function() {
          if (
            _this.button &&
            _this.button.current &&
            _this.button.current.classList
          ) {
            _this.button.current.classList.add("noFocus");
          }

          window.removeEventListener("keyup", _this.activateFocusStyles);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "activateFocusStyles",
        function() {
          if (
            _this.button &&
            _this.button.current &&
            _this.button.current.classList
          ) {
            _this.button.current.classList.remove("noFocus");
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "button",
        React__default.createRef()
      );

      return _this;
    }

    _createClass(Button, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (
            !isButtonLinkProps(this.props) &&
            this.button &&
            this.button.current
          ) {
            // this functionality is required to avoid focus outline on click but keep it on tab focus
            this.button.current.addEventListener("focus", this.focusHandler);
            this.button.current.addEventListener("blur", this.blurHandler);
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          // in case user leaves a page before onBlur is triggered
          window.removeEventListener("keyup", this.activateFocusStyles);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            variant = _this$props.variant,
            size = _this$props.size,
            children = _this$props.children,
            rest = _objectWithoutProperties(_this$props, [
              "variant",
              "size",
              "children"
            ]);

          if (isButtonLinkProps(this.props)) {
            var _this$props2 = this.props,
              _rel = _this$props2.rel,
              _target = _this$props2.target;
            var validatedRel = getRelByTarget(_target, _rel);
            return React__default.createElement(
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

          return React__default.createElement(
            StyledButton,
            _extends(
              {
                variant: variant,
                size: size
              },
              rest,
              {
                className: "".concat(rest.className || "", " noFocus"),
                ref: this.button
              }
            ),
            children
          );
        }
      }
    ]);

    return Button;
  })(React.Component);

_defineProperty(Button, "displayName", "Button");

_defineProperty(Button, "propTypes", {
  variant: PropTypes__default.oneOf(BUTTON_VARIANTS),
  size: PropTypes__default.oneOf(SIZES),
  children: PropTypes__default.node.isRequired
});

_defineProperty(Button, "defaultProps", {
  size: REGULAR,
  variant: STANDARD
});

var HEIGHT = "36px";
var VARIANTS$1 = {
  standard: {
    color: themes.global.white.base,
    backgroundColor: themes.global.primary.base,
    borderColor: themes.global.primary.base
  },
  standardDisabled: {
    color: themes.global.white.base,
    backgroundColor: colors.azure.light,
    borderColor: colors.azure.light
  },
  outline: {
    color: themes.global.primary.base,
    backgroundColor: themes.global.white.base,
    borderColor: themes.global.primary.base
  },
  outlineDisabled: {
    color: colors.azure.light,
    backgroundColor: themes.global.white.base,
    borderColor: colors.azure.light
  },
  transparent: {
    color: themes.global.white.base,
    backgroundColor: "transparent",
    borderColor: themes.global.white.base
  },
  transparentDisabled: {
    color: themes.global.white.muted,
    backgroundColor: "transparent",
    borderColor: themes.global.white.muted
  }
};
var GenericButton = styled__default.button.withConfig({
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
var StyledBadge = styled__default(GenericButton).withConfig({
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

  return React__default.createElement(
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
  children: PropTypes__default.node.isRequired,
  variant: PropTypes__default.oneOf(BUTTON_VARIANTS),
  size: PropTypes__default.oneOf(SIZES)
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

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 11 10",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
      fillRule: "evenodd",
      d:
        "M5.5 7.7L2.267 9.95l1.14-3.77L.27 3.8l3.938-.08L5.5 0l1.293 3.72 3.938.08-3.139 2.38 1.14 3.77z"
    })
  );
};

StarIcon.displayName = "StarIcon";
StarIcon.propTypes = {
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};
StarIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

var StyledBadgeRating = styled__default(StyledBadge).withConfig({
  displayName: "RatingBadge__StyledBadgeRating",
  componentId: "kdpays-0"
})(["padding:0;&:hover{opacity:0.5;}"]);
var ContentWrapper = styled__default.span.withConfig({
  displayName: "RatingBadge__ContentWrapper",
  componentId: "kdpays-1"
})([
  "display:flex;flex-flow:row;justify-content:center;align-items:center;width:100%;height:100%;"
]);
var Container = styled__default.span.withConfig({
  displayName: "RatingBadge__Container",
  componentId: "kdpays-2"
})(["padding-left:2px;"]);
var StyledStarIcon = styled__default(StarIcon).withConfig({
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

  return React__default.createElement(
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
    React__default.createElement(
      ContentWrapper,
      null,
      React__default.createElement(StyledStarIcon, {
        size: 12
      }),
      React__default.createElement(Container, null, children),
      ratingValue &&
        React__default.createElement("meta", {
          itemProp: "ratingValue",
          content: ratingValue
        }),
      bestRating &&
        React__default.createElement("meta", {
          itemProp: "bestRating",
          content: bestRating
        }),
      ratingCount &&
        React__default.createElement("meta", {
          itemProp: "ratingCount",
          content: ratingCount
        })
    )
  );
};

RatingBadge.propTypes = {
  children: PropTypes__default.node.isRequired,
  ratingValue: PropTypes__default.string.isRequired,
  bestRating: PropTypes__default.string,
  ratingCount: PropTypes__default.string.isRequired,
  variant: PropTypes__default.oneOf(BUTTON_VARIANTS),
  size: PropTypes__default.oneOf(SIZES)
};
RatingBadge.defaultProps = {
  variant: STANDARD,
  size: REGULAR,
  bestRating: "5"
};

var StyledIconButton = styled__default(GenericButton).withConfig({
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

  return React__default.createElement(
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
  children: PropTypes__default.node.isRequired,
  size: PropTypes__default.number
};

var dotColors = {
  white: getThemeValue("white", "base"),
  primary: getThemeValue("primary", "base"),
  dark: getThemeValue("darkFill")
};
var colorVariants$1 = {
  standard: dotColors.white,
  standardDisabled: dotColors.white,
  special: dotColors.white,
  specialDisabled: dotColors.white,
  outline: dotColors.primary,
  outlineDisabled: dotColors.primary,
  transparent: dotColors.primary,
  transparentDisabled: dotColors.primary,
  outlineGray: dotColors.dark,
  outlineGrayDisabled: dotColors.primary
};
var wave = styled.keyframes([
  "0%,60%,100%{transform:initial;}30%{transform:translateY(-10px);}"
]);
var Dot = styled__default.span.withConfig({
  displayName: "styles__Dot",
  componentId: "vwf6xr-0"
})(
  [
    "display:inline-block;width:6px;height:6px;border-radius:50%;background:",
    ";animation:",
    " 0.8s linear infinite;&:nth-child(2){animation-delay:-0.1s;margin:0 ",
    ";}&:nth-child(3){animation-delay:-0.5s;}"
  ],
  function(_ref) {
    var variant = _ref.variant;
    return colorVariants$1[variant];
  },
  wave,
  spacing.cozy
);
Dot.displayName = "Dot";
var DotsWrapper = styled__default.div.withConfig({
  displayName: "styles__DotsWrapper",
  componentId: "vwf6xr-1"
})(["width:100%;position:absolute;white-space:nowrap;top:0;"]);
DotsWrapper.displayName = "DotsWrapper";

var Loader = function Loader(_ref) {
  var variant = _ref.variant;
  return React__default.createElement(
    DotsWrapper,
    {
      "data-bdd": "loader"
    },
    React__default.createElement(Dot, {
      variant: variant
    }),
    React__default.createElement(Dot, {
      variant: variant
    }),
    React__default.createElement(Dot, {
      variant: variant
    })
  );
};

Loader.propTypes = {
  variant: PropTypes__default.oneOf(BUTTON_VARIANTS)
};
Loader.defaultProps = {
  variant: STANDARD
};

var ContentWrapper$1 = styled__default.div.withConfig({
  displayName: "styles__ContentWrapper",
  componentId: "mn6pgs-0"
})(["visibility:", ";"], function(_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? "hidden" : "visible";
});
ContentWrapper$1.displayName = "ContentWrapper";
var Wrapper = styled__default.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "mn6pgs-1"
})(["position:relative;"]);
Wrapper.displayName = "Wrapper";

var ButtonWithLoading = function ButtonWithLoading(_ref) {
  var isLoading = _ref.isLoading,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["isLoading", "children"]);

  var variant = props.variant;
  return React__default.createElement(
    Button,
    props,
    React__default.createElement(
      Wrapper,
      null,
      React__default.createElement(
        ContentWrapper$1,
        {
          isLoading: isLoading
        },
        children
      ),
      isLoading &&
        React__default.createElement(Loader, {
          variant: variant
        })
    )
  );
};

ButtonWithLoading.propTypes = {
  isLoading: PropTypes__default.bool,
  children: PropTypes__default.node.isRequired
};
ButtonWithLoading.defaultProps = {
  isLoading: false
};

var DAY_TILE_CLASS = "day-tile";
var DAY_TILE_NO_BORDER_RADIUS_CLASS = "".concat(
  DAY_TILE_CLASS,
  "--no-border-radius"
);
var DayTile = styled__default.div
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
DayTile.Header = styled__default.header.withConfig({
  displayName: "DayTile__Header",
  componentId: "akx4x4-1"
})([
  "z-index:1;position:absolute;top:0;left:0;right:30px;display:flex;flex-flow:row nowrap;pointer-events:none;"
]);

var StyledText = styled__default.div.withConfig({
  displayName: "StyledText",
  componentId: "k4y7h7-0"
})(["font-size:", ";"], function(props) {
  return props.fontSize || typography.size.hecto;
});

var PrimaryStyledText = styled__default(StyledText).withConfig({
  displayName: "PrimaryText__PrimaryStyledText",
  componentId: "sc-1sslb8r-0"
})(
  ["color:", ";@media only screen and ", "{font-size:", ";}"],
  themes.global.onyx.base,
  constants.breakpoints.smallAndUp,
  typography.size.kilo
);

var PrimaryText = function PrimaryText(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(PrimaryStyledText, props, children);
};

PrimaryText.propTypes = {
  children: PropTypes__default.string.isRequired
};

var SecondaryStyledText = styled__default(StyledText).withConfig({
  displayName: "SecondaryText__SecondaryStyledText",
  componentId: "sc-1wv26om-0"
})(["color:", ";"], themes.global.onyx.light);

var SecondaryText = function SecondaryText(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(SecondaryStyledText, props, children);
};

SecondaryText.propTypes = {
  children: PropTypes__default.string.isRequired
};

var smallAndUp = function smallAndUp() {
  return styled.css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.smallAndUp,
    styled.css.apply(void 0, arguments)
  );
};
var mediumAndUp = function mediumAndUp() {
  return styled.css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.mediumAndUp,
    styled.css.apply(void 0, arguments)
  );
};
var largeAndUp = function largeAndUp() {
  return styled.css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.largeAndUp,
    styled.css.apply(void 0, arguments)
  );
};
var xLargeAndUp = function xLargeAndUp() {
  return styled.css(
    ["@media screen and ", "{", ";}"],
    constants.breakpoints.xLargeAndUp,
    styled.css.apply(void 0, arguments)
  );
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BoldStyledText = styled__default(StyledText).withConfig({
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

  return React__default.createElement(
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
  color: themes.global.darkFill
};
BoldText.propTypes = {
  children: PropTypes__default.string.isRequired,
  color: PropTypes__default.string
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
    ? styled.css(
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

var Base = styled__default.span.withConfig({
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
var variant = PropTypes__default.oneOf(["accent", "dark", "light"]);
var accent = PropTypes__default.oneOf([
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
var size = PropTypes__default.oneOf(ALLOWED_SIZES);
var responsiveSize = PropTypes__default.shape({
  xSmall: size,
  small: size,
  medium: size,
  large: size,
  xLarge: size
});
var defaultResponsiveSize = null;
var weight = PropTypes__default.oneOf(["regular", "semiBold"]);

var LinkBase = styled__default(Base).withConfig({
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
  themes.global.primary.medium
);
var ReverseLinkBase = styled__default(LinkBase).withConfig({
  displayName: "Link__ReverseLinkBase",
  componentId: "sc-1konlqf-1"
})(
  ["color:", ";&:focus,&:visited,&:active,&:hover{color:", ";}"],
  themes.global.primary.reverse,
  themes.global.primary.reverseLight
);
var LinkButtonBase = styled__default(LinkBase).withConfig({
  displayName: "Link__LinkButtonBase",
  componentId: "sc-1konlqf-2"
})([
  "appearance:none;border:0;outline:0;background:transparent;padding:0;cursor:pointer;"
]);
var LinkSpanBase = styled__default(LinkBase).withConfig({
  displayName: "Link__LinkSpanBase",
  componentId: "sc-1konlqf-3"
})(["cursor:pointer;"]);

var getElement = function getElement(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    reverseColors = _ref.reverseColors;

  if (href && href.length) {
    return reverseColors ? ReverseLinkBase : LinkBase;
  }

  if (!href && onClick && typeof onClick === "function") return LinkButtonBase;
  return LinkSpanBase;
};

var Link = function Link(_ref2) {
  var href = _ref2.href,
    onClick = _ref2.onClick,
    children = _ref2.children,
    weight = _ref2.weight,
    size = _ref2.size,
    responsiveSize = _ref2.responsiveSize,
    variant = _ref2.variant,
    accent = _ref2.accent,
    primary = _ref2.primary,
    reverseColors = _ref2.reverseColors,
    props = _objectWithoutProperties(_ref2, [
      "href",
      "onClick",
      "children",
      "weight",
      "size",
      "responsiveSize",
      "variant",
      "accent",
      "primary",
      "reverseColors"
    ]);

  var target = props.target,
    rel = props.rel;
  var Elm = getElement({
    href: href,
    onClick: onClick,
    reverseColors: reverseColors
  });
  var asProp = getAsProp({
    href: href,
    onClick: onClick
  });
  var validatedRel = getRelByTarget(target, rel);
  return React__default.createElement(
    Elm,
    _extends({}, props, asProp, {
      size: getResponsiveSize({
        size: size,
        responsiveSize: responsiveSize
      }),
      primary: primary,
      variant: variant,
      accent: accent,
      href: href,
      rel: validatedRel,
      weight: weight,
      onClick: onClick
    }),
    children
  );
};

Link.propTypes = {
  children: PropTypes__default.node.isRequired,
  href: PropTypes__default.string,
  onClick: PropTypes__default.func,
  target: PropTypes__default.string,
  rel: PropTypes__default.string,
  primary: PropTypes__default.bool,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  variant: variant,
  accent: accent,
  reverseColors: PropTypes__default.bool
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
  primary: true,
  reverseColors: false
};

var LinkCtaBase = styled__default.a.withConfig({
  displayName: "LinkCta__LinkCtaBase",
  componentId: "rsiat0-0"
})(
  [
    "text-decoration:none;transition:color 0.3s ease,text-decoration 0.3s ease;font-weight:",
    ";",
    ";line-height:",
    ";color:",
    ";display:inline-block;&:focus{outline:none;text-decoration:underline;}&:active{color:",
    ";}&:hover{color:",
    ";}&.noFocus:focus{text-decoration:none;}"
  ],
  typography.weight.semiBold,
  function(_ref) {
    var size = _ref.size;
    return responsiveSizeMixin(size);
  },
  typography.lineHeight.header,
  getThemeValue("primary", "base"),
  getThemeValue("primary", "dark"),
  getThemeValue("primary", "medium")
);
var ReverseLinkCtaBase = styled__default(LinkCtaBase).withConfig({
  displayName: "LinkCta__ReverseLinkCtaBase",
  componentId: "rsiat0-1"
})(
  ["color:", ";&:focus,&:visited,&:active,&:hover{color:", ";}"],
  getThemeValue("primary", "reverse"),
  getThemeValue("primary", "reverseLight")
);
var LinkCtaButtonBase = styled__default(LinkCtaBase).withConfig({
  displayName: "LinkCta__LinkCtaButtonBase",
  componentId: "rsiat0-2"
})([
  "appearance:none;border:0;outline:0;background:transparent;padding:0;cursor:pointer;"
]);
var LinkCtaSpanBase = styled__default(LinkCtaBase).withConfig({
  displayName: "LinkCta__LinkCtaSpanBase",
  componentId: "rsiat0-3"
})(["cursor:pointer;"]);

var getElement$1 = function getElement(_ref2) {
  var href = _ref2.href,
    onClick = _ref2.onClick,
    reverseColors = _ref2.reverseColors;

  if (href && href.length) {
    return reverseColors ? ReverseLinkCtaBase : LinkCtaBase;
  }

  if (!href && onClick && typeof onClick === "function")
    return LinkCtaButtonBase;
  return LinkCtaSpanBase;
};

var LinkCta =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(LinkCta, _Component);

    function LinkCta() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LinkCta);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(LinkCta)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "focusHandler",
        function() {
          global.window.addEventListener("keyup", _this.activateFocusStyles);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "blurHandler",
        function() {
          if (_this.link && _this.link.current) {
            _this.link.current.classList.add("noFocus");
          }

          global.window.removeEventListener("keyup", _this.activateFocusStyles);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "activateFocusStyles",
        function() {
          _this.link.current.classList.remove("noFocus");
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "link",
        React__default.createRef()
      );

      return _this;
    }

    _createClass(LinkCta, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.link && this.link.current) {
            this.link.current.addEventListener("focus", this.focusHandler);
            this.link.current.addEventListener("blur", this.blurHandler);
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          // in case user leaves a page before onBlur is triggered
          global.window.removeEventListener("keyup", this.activateFocusStyles);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            href = _this$props.href,
            onClick = _this$props.onClick,
            children = _this$props.children,
            size = _this$props.size,
            responsiveSize = _this$props.responsiveSize,
            reverseColors = _this$props.reverseColors,
            rest = _objectWithoutProperties(_this$props, [
              "href",
              "onClick",
              "children",
              "size",
              "responsiveSize",
              "reverseColors"
            ]);

          var target = rest.target,
            rel = rest.rel;
          var Elm = getElement$1({
            href: href,
            onClick: onClick,
            reverseColors: reverseColors
          });
          var asProp = getAsProp({
            href: href,
            onClick: onClick
          });
          var validatedRel = getRelByTarget(target, rel);
          return React__default.createElement(
            Elm,
            _extends({}, rest, asProp, {
              size: getResponsiveSize({
                size: size,
                responsiveSize: responsiveSize
              }),
              href: href,
              onClick: onClick,
              rel: validatedRel,
              ref: this.link,
              className: "".concat(rest.className || "", " noFocus")
            }),
            children
          );
        }
      }
    ]);

    return LinkCta;
  })(React.Component);

LinkCta.propTypes = {
  size: PropTypes__default.string,
  responsiveSize: responsiveSize,
  children: PropTypes__default.node.isRequired,
  href: PropTypes__default.string,
  onClick: PropTypes__default.func,
  target: PropTypes__default.string,
  rel: PropTypes__default.string,
  reverseColors: PropTypes__default.bool
};
LinkCta.defaultProps = {
  size: null,
  onClick: undefined,
  responsiveSize: defaultResponsiveSize,
  href: undefined,
  target: "_self",
  rel: "",
  reverseColors: false
};
LinkCta.displayName = "LinkCta";

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SectionHeading = styled__default.span.withConfig({
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
    variant = _ref.variant,
    accent = _ref.accent,
    primary = _ref.primary,
    secondary = _ref.secondary,
    disabled = _ref.disabled,
    size = _ref.size,
    responsiveSize = _ref.responsiveSize,
    weight = _ref.weight,
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
    _defineProperty(_classnames, "text--".concat(variant), !!variant),
    _defineProperty(_classnames, "text--".concat(accent), variant === "accent"),
    _defineProperty(_classnames, "text-".concat(isThemed), isThemed),
    _defineProperty(
      _classnames,
      "text--primary",
      !!primary || (!secondary && !disabled && !accent)
    ),
    _defineProperty(_classnames, "text--secondary", !!secondary),
    _defineProperty(_classnames, "text--disabled", !!disabled),
    _defineProperty(_classnames, className, !!className),
    _classnames)
  );
  return React__default.createElement(
    Base,
    _extends(
      {
        className: classes,
        size: getResponsiveSize({
          size: size,
          responsiveSize: responsiveSize
        }),
        weight: weight,
        variant: variant,
        accent: accent,
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
  tag: PropTypes__default.oneOf(AVAILABLE_TAGS),
  variant: variant,
  accent: accent,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  className: PropTypes__default.string,
  primary: PropTypes__default.bool,
  secondary: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  children: PropTypes__default.node.isRequired,
  allCaps: PropTypes__default.bool,
  monospace: PropTypes__default.bool,
  theme: PropTypes__default.shape(themeShape),
  themed: PropTypes__default.bool
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
  theme: THEME_TM,
  themed: false
};
TextBase.displayName = "Text";

var DayTileDateContainer = styled__default.div.withConfig({
  displayName: "DayTileDate__DayTileDateContainer",
  componentId: "sc-9bknqq-0"
})(
  [
    "display:flex;width:30px;height:30px;justify-content:center;align-items:center;background-color:",
    ";"
  ],
  getThemeValue("white", "base")
);
var DayTileDateText = styled__default(TextBase)
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
  return React__default.createElement(
    DayTileDateContainer,
    null,
    React__default.createElement(
      DayTileDateText,
      {
        isAccent: accent
      },
      children
    )
  );
};

DayTileDate.propTypes = {
  children: PropTypes__default.node.isRequired,
  accent: PropTypes__default.bool
};
DayTileDate.defaultProps = {
  accent: false
};

var DAY_TILE_ITEM_CLASS_HIGHLIGHTED = "day-tile-item--highlighted";
var DayTileItem = styled__default.article
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
  highlighted: PropTypes__default.bool
};
DayTileItem.defaultProps = {
  highlighted: false
};
DayTileItem.Header = styled__default.header.withConfig({
  displayName: "DayTileItem__Header",
  componentId: "sc-19tza86-1"
})(["display:flex;flex-flow:row nowrap;padding-left:30px;min-height:30px;"]);
DayTileItem.Content = styled__default.div.withConfig({
  displayName: "DayTileItem__Content",
  componentId: "sc-19tza86-2"
})(["flex:auto;display:flex;flex-flow:row nowrap;"]);
DayTileItem.ContentColumn = styled__default.div.withConfig({
  displayName: "DayTileItem__ContentColumn",
  componentId: "sc-19tza86-3"
})(["padding:", " ", " ", ";"], spacing.cozy, spacing.cozy, spacing.slim);
DayTileItem.Footer = styled__default.footer.withConfig({
  displayName: "DayTileItem__Footer",
  componentId: "sc-19tza86-4"
})(["margin-top:auto;"]);
DayTileItem.Divider = styled__default.div.withConfig({
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
  return React.Children.map(children, function(child, index) {
    if (index === 0) {
      return child;
    }

    return [React__default.createElement(DayTileItem.Divider, null), child];
  });
};

var DayTileItemBaseText = styled__default(TextBase)
  .attrs(function() {
    return {
      size: "uno"
    };
  })
  .withConfig({
    displayName: "DayTileItem__DayTileItemBaseText",
    componentId: "sc-19tza86-6"
  })(["width:100%;word-break:break-word;"]);
var DayTileItemLabel = styled__default(DayTileItemBaseText)
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
  return React__default.createElement(
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

var DayTileButtonGroup = styled__default.div.withConfig({
  displayName: "DayTileButton__DayTileButtonGroup",
  componentId: "ulhi48-0"
})(["padding:0 ", " ", ";"], spacing.cozy, spacing.cozy);
var DayTileButtonContainer = styled__default.div.withConfig({
  displayName: "DayTileButton__DayTileButtonContainer",
  componentId: "ulhi48-1"
})(["", " > & + &{margin-top:", ";}"], DayTileButtonGroup, spacing.cozy);

var DayTileButton = function DayTileButton(props) {
  return React__default.createElement(
    DayTileButtonContainer,
    null,
    React__default.createElement(
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

var DayTileMoreButtonContainer = styled__default.div.withConfig({
  displayName: "DayTileMoreButton__DayTileMoreButtonContainer",
  componentId: "cdbjbu-0"
})(["padding:0 ", " ", ";"], spacing.cozy, spacing.cozy);
var DayTileMoreButtonLink = styled__default(Link)
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
  return React__default.createElement(
    DayTileMoreButtonContainer,
    null,
    React__default.createElement(DayTileMoreButtonLink, props)
  );
};

var CAIcon = function CAIcon(_ref) {
  var height = _ref.height,
    width = _ref.width,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["height", "width", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      height: height,
      width: width,
      viewBox: "0 0 640 480"
    }),
    children,
    React__default.createElement(
      "g",
      {
        transform: "translate(74.118) scale(.9375)"
      },
      React__default.createElement("path", {
        fill: "#fff",
        d: "M81.137 0h362.276v512H81.137z"
      }),
      React__default.createElement("path", {
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
  height: PropTypes.PropTypes.number.isRequired,
  width: PropTypes.PropTypes.number.isRequired,
  children: PropTypes.PropTypes.node
};

var CampsiteIcon = function CampsiteIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
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

  return React__default.createElement(
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
    React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node,
  direction: PropTypes__default.oneOf(DIRECTION)
};

var ClubIcon = function ClubIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "defs",
      null,
      React__default.createElement("path", {
        id: "a",
        d: "M0 0h15.931v15.937H0z"
      })
    ),
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement(
        "g",
        {
          transform: "translate(4 4)"
        },
        React__default.createElement(
          "mask",
          {
            id: "b",
            fill: "#fff"
          },
          React__default.createElement("use", {
            xlinkHref: "#a"
          })
        ),
        React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var CrossIcon = function CrossIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 12 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var Concession = function Concession(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        fill: "#E0E0E0",
        fillRule: "nonzero",
        d:
          "M13 25.85c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0 1c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var DonationIcon = function DonationIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var FacebookIcon = function FacebookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 7 14",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
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
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};

var GeneralIcon = function GeneralIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement(
        "g",
        {
          transform: "translate(4 4) scale(0.8 0.8)"
        },
        React__default.createElement("path", {
          fill: color,
          strokeWidth: ".25",
          d:
            "M7.5 19.085c-0.401 0-0.778-0.156-1.061-0.438l-5.086-5.086c-0.283-0.283-0.438-0.659-0.438-1.061s0.156-0.778 0.438-1.061l8.586-8.586c0.487-0.487 1.372-0.854 2.061-0.854h4.5c0.827 0 1.5 0.673 1.5 1.5v4.5c0 0.688-0.367 1.574-0.853 2.061l-8.586 8.586c-0.283 0.283-0.659 0.438-1.061 0.438zM12 3c-0.415 0-1.060 0.267-1.353 0.561l-8.586 8.586c-0.094 0.094-0.145 0.219-0.145 0.354s0.052 0.26 0.145 0.353l5.086 5.086c0.094 0.094 0.219 0.145 0.354 0.145s0.26-0.052 0.354-0.145l8.586-8.586c0.293-0.293 0.561-0.939 0.561-1.354v-4.5c0-0.276-0.224-0.5-0.5-0.5h-4.5z"
        }),
        React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var InstagramIcon = function InstagramIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 14 14",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: color,
        fillRule: "nonzero"
      },
      React__default.createElement("path", {
        d:
          "M7.056 3.486c-1.96 0-3.584 1.565-3.584 3.514 0 1.949 1.596 3.514 3.584 3.514S10.64 8.922 10.64 7c0-1.922-1.624-3.514-3.584-3.514zm0 5.765C5.796 9.251 4.76 8.235 4.76 7c0-1.235 1.036-2.251 2.296-2.251 1.26 0 2.296 1.016 2.296 2.251 0 1.235-1.036 2.251-2.296 2.251z"
      }),
      React__default.createElement("ellipse", {
        cx: "10.78",
        cy: "3.404",
        rx: "1",
        ry: "1"
      }),
      React__default.createElement("path", {
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
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};

var Hotel = function Hotel(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var Meal = function Meal(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var Membership = function Membership(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var Merchandise = function Merchandise(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var getWidth = function getWidth(size) {
  return size / 4;
};

var OverflowIcon = function OverflowIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 5 21",
      width: getWidth(size),
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
      d:
        "M0 2.5C0 1.81.242 1.22.727.732A2.394 2.394 0 0 1 2.492 0a2.42 2.42 0 0 1 1.773.732C4.755 1.221 5 1.81 5 2.5s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 5C1.8 5 1.212 4.756.727 4.268A2.418 2.418 0 0 1 0 2.5zm0 8.008c0-.692.242-1.283.727-1.773A2.39 2.39 0 0 1 2.492 8c.692 0 1.283.245 1.773.735S5 9.815 5 10.508a2.39 2.39 0 0 1-.735 1.765A2.43 2.43 0 0 1 2.492 13c-.692 0-1.28-.242-1.765-.727A2.403 2.403 0 0 1 0 10.508zM0 18.5c0-.69.242-1.28.727-1.768A2.394 2.394 0 0 1 2.492 16a2.42 2.42 0 0 1 1.773.732c.49.489.735 1.078.735 1.768s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 21c-.692 0-1.28-.244-1.765-.732A2.418 2.418 0 0 1 0 18.5z"
    })
  );
};

OverflowIcon.displayName = "OverflowIcon";
OverflowIcon.propTypes = {
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
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

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var SpecialIcon = function SpecialIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};

var Transportation = function Transportation(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1.85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var TwitterIcon = function TwitterIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 14 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
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
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};

var USIcon = function USIcon(_ref) {
  var width = _ref.width,
    height = _ref.height,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["width", "height", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      height: height,
      width: width,
      viewBox: "0 0 640 480"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fillRule: "evenodd",
        transform: "scale(.9375)"
      },
      React__default.createElement(
        "g",
        {
          strokeWidth: "1pt"
        },
        React__default.createElement("path", {
          d:
            "M0 0h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z",
          fill: "#bd3d44"
        }),
        React__default.createElement("path", {
          d:
            "M0 39.385h972.81V78.77H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z",
          fill: "#fff"
        })
      ),
      React__default.createElement("path", {
        fill: "#192f5d",
        d: "M0 0h389.12v275.69H0z"
      }),
      React__default.createElement(
        "g",
        {
          fill: "#fff"
        },
        React__default.createElement("path", {
          d:
            "M32.427 11.8l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 39.37l3.54 10.896h11.458L70.583 57l3.542 10.897-9.27-6.734-9.269 6.734L59.126 57l-9.269-6.734h11.458zm64.852 0l3.54 10.896h11.457L135.435 57l3.54 10.897-9.268-6.734-9.27 6.734L123.978 57l-9.27-6.734h11.458zm64.855 0l3.54 10.896h11.458L200.29 57l3.541 10.897-9.27-6.734-9.268 6.734L188.833 57l-9.269-6.734h11.457zm64.855 0l3.54 10.896h11.458L265.145 57l3.541 10.897-9.269-6.734-9.27 6.734L253.69 57l-9.27-6.734h11.458zm64.852 0l3.54 10.896h11.457L329.997 57l3.54 10.897-9.268-6.734-9.27 6.734L318.54 57l-9.27-6.734h11.458zM32.427 66.939l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 94.508l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zM32.427 122.078l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 149.647l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458z"
        }),
        React__default.createElement(
          "g",
          null,
          React__default.createElement("path", {
            d:
              "M32.427 177.217l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.853 0l3.541 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735H93.74zm64.856 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.269 6.734 3.54-10.896-9.269-6.735h11.458zm64.852 0l3.54 10.896h11.457l-9.269 6.735 3.54 10.896-9.268-6.734-9.27 6.734 3.541-10.896-9.27-6.735h11.458zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.27-6.734-9.268 6.734 3.54-10.896-9.269-6.735h11.457zm64.855 0l3.54 10.896h11.458l-9.27 6.735 3.541 10.896-9.269-6.734-9.27 6.734 3.542-10.896-9.27-6.735h11.458zM64.855 204.786l3.54 10.897h11.458l-9.27 6.734 3.542 10.897-9.27-6.734-9.269 6.734 3.54-10.897-9.269-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.27-6.734-9.268 6.734 3.54-10.897-9.269-6.734h11.457zm64.855 0l3.54 10.897h11.458l-9.27 6.734 3.541 10.897-9.269-6.734-9.27 6.734 3.542-10.897-9.27-6.734h11.458zm64.852 0l3.54 10.897h11.457l-9.269 6.734 3.54 10.897-9.268-6.734-9.27 6.734 3.541-10.897-9.27-6.734h11.458z"
          })
        ),
        React__default.createElement(
          "g",
          null,
          React__default.createElement("path", {
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
  width: PropTypes.PropTypes.number.isRequired,
  height: PropTypes.PropTypes.number.isRequired,
  children: PropTypes.PropTypes.node
};

var VenueIcon = function VenueIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var VipIcon = function VipIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 .85)"
      },
      React__default.createElement("circle", {
        cx: "12",
        cy: "12.15",
        r: "12.5",
        fill: "#FAFAFA",
        stroke: "#E0E0E0"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var YoutubeIcon = function YoutubeIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 17 12",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
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
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};

var LinkedinIcon = function LinkedinIcon(_ref) {
  var color = _ref.color,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["color", "size", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 19 18",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
      d:
        "M14.78 5.917c-3.138 0-3.559 1.887-3.559 1.887l.004-1.874H6.99v11.648h4.236v-6.353s0-2.133 1.8-2.133c1.013 0 1.378.947 1.378 2.133v6.353h4.234v-6.353c0-3.315-1.441-5.308-3.857-5.308zM.637 17.577h4.219V5.918H.636v11.66zM2.747.638c-1.166 0-2.11.949-2.11 2.12 0 1.171.944 2.12 2.11 2.12 1.164 0 2.109-.949 2.109-2.12 0-1.171-.945-2.12-2.11-2.12z"
    })
  );
};

LinkedinIcon.displayName = "LinkedinIcon";
LinkedinIcon.propTypes = {
  color: PropTypes__default.string,
  size: PropTypes__default.number.isRequired,
  children: PropTypes__default.node
};
LinkedinIcon.defaultProps = {
  color: themes.global.white.base,
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

  return React__default.createElement(
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
    React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  children: PropTypes__default.node,
  color: PropTypes__default.string,
  opacity: PropTypes__default.number
};

var AppleIcon = function AppleIcon(_ref) {
  var color = _ref.color,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["color", "size", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 13 16",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
      d:
        "M10.41 8.703c-.018-1.969 1.584-2.927 1.658-2.972-.908-1.346-2.315-1.53-2.809-1.544-1.18-.127-2.326.72-2.928.72-.614 0-1.54-.708-2.538-.687-1.285.02-2.488.778-3.147 1.953-1.36 2.396-.345 5.918.957 7.855.653.949 1.414 2.009 2.412 1.971.976-.04 1.34-.633 2.518-.633 1.167 0 1.509.633 2.526.61 1.047-.018 1.706-.954 2.336-1.912.753-1.087 1.056-2.158 1.068-2.213-.025-.008-2.034-.788-2.053-3.148M9.49 2.415c.587-.646.988-1.523.877-2.415-.85.033-1.911.517-2.523 1.148-.542.556-1.025 1.468-.9 2.325.954.063 1.934-.424 2.546-1.058"
    })
  );
};

AppleIcon.displayName = "AppleIcon";
AppleIcon.defaultProps = {
  color: themes.global.white.base,
  children: null
};
AppleIcon.propTypes = {
  color: PropTypes__default.string,
  size: PropTypes__default.number.isRequired,
  children: PropTypes__default.node
};

var GooglePlayIcon = function GooglePlayIcon(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties(_ref, ["size"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 48 48",
      width: size,
      height: size
    }),
    React__default.createElement(
      "g",
      null,
      React__default.createElement("path", {
        fill: "#4DB6AC",
        d:
          "M 7.703125 4.042969 C 7.292969 4.148438 7 4.507813 7 5.121094 C 7 6.921875 7 23.914063 7 23.914063 C 7 23.914063 7 42.28125 7 43.089844 C 7 43.535156 7.195313 43.835938 7.5 43.945313 L 27.679688 23.882813 Z "
      }),
      React__default.createElement("path", {
        fill: "#DCE775",
        d:
          "M 33.238281 18.359375 L 24.929688 13.5625 C 24.929688 13.5625 9.683594 4.761719 8.789063 4.242188 C 8.402344 4.019531 8.019531 3.960938 7.703125 4.042969 L 27.683594 23.882813 Z "
      }),
      React__default.createElement("path", {
        fill: "#D32F2F",
        d:
          "M 8.417969 43.800781 C 8.949219 43.492188 23.699219 34.976563 33.28125 29.445313 L 27.679688 23.882813 L 7.5 43.945313 C 7.746094 44.039063 8.066406 44.003906 8.417969 43.800781 Z "
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  children: PropTypes__default.node
};

var _sizeMapper;

var types = ["outline", "filled"];
var allSizes = ["small", "regular", "large"];
var smallLarge = ["small", "large"]; // for backward compatibility purpose

var sizeMapper = ((_sizeMapper = {}),
_defineProperty(_sizeMapper, allSizes[0], 16),
_defineProperty(_sizeMapper, allSizes[1], 24),
_defineProperty(_sizeMapper, allSizes[2], 36),
_sizeMapper);

var errorIcons = {
  outline: {
    small: function small(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "19",
          viewBox: "0 0 18 19"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h18v19H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M16.822 9.697a.274.274 0 0 0 0-.373l-7.636-8.06a.24.24 0 0 0-.353 0l-7.635 8.06a.274.274 0 0 0 0 .373l7.663 8.06a.24.24 0 0 0 .353-.001l7.608-8.059zm-6.81 8.897a1.324 1.324 0 0 1-1.945.004l-7.663-8.06a1.51 1.51 0 0 1-.001-2.054L8.037.425a1.324 1.324 0 0 1 1.945 0l7.635 8.06a1.51 1.51 0 0 1 .002 2.05l-7.608 8.059zm-1.002-3.74c.466 0 .843-.399.843-.89 0-.492-.377-.891-.843-.891-.466 0-.844.399-.844.89 0 .492.378.891.844.891zm0-2.969a.844.844 0 0 0 .843-.843V5.604a.844.844 0 0 0-1.688 0l.001 5.438c0 .466.378.843.844.843z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "25",
          viewBox: "0 0 24 25"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M22.585 12.969a.333.333 0 0 0 0-.471l-10.35-10.35a.333.333 0 0 0-.471 0L1.415 12.497a.333.333 0 0 0 0 .471l10.387 10.35c.13.13.341.13.471-.001l10.312-10.348zm-9.603 11.054a1.333 1.333 0 0 1-1.886.003L.71 13.676a1.334 1.334 0 0 1-.002-1.886L11.057 1.44c.52-.52 1.365-.52 1.885 0l10.35 10.35c.52.52.52 1.362.001 1.883L12.982 24.023zM12 19.733a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "37",
          viewBox: "0 0 36 37"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React__default.createElement("path", {
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
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M8.34056192,15.3697458 L15.3708695,8.31426719 C15.5439065,8.14061062 15.5436555,7.85963698 15.3703084,7.68628991 L8.31370757,0.629690129 C8.14014122,0.456123805 7.8587346,0.456123805 7.68516825,0.629690129 L0.629688686,7.68516868 C0.456122323,7.85873502 0.456122304,8.14014168 0.629688645,8.31370804 C0.629875197,8.31389459 0.630061915,8.31408098 0.630248799,8.3142672 L7.71202357,15.370869 C7.88589872,15.544126 8.16730493,15.5436249 8.34056193,15.3697497 C8.34056258,15.3697491 8.34056323,15.3697484 8.34056389,15.3697477 Z"
          }),
          React__default.createElement("ellipse", {
            fill: "#FFFFFF",
            cx: "7.99977025",
            cy: "11.7877222",
            rx: "1",
            ry: "1"
          }),
          React__default.createElement("path", {
            d:
              "M7.99977025,9.78245717 L7.99977025,9.78245717 C8.36892936,9.78245717 8.66819195,9.48319458 8.66819195,9.11403547 L8.66819195,4.65789107 C8.66819195,4.28873196 8.36892936,3.98946936 7.99977025,3.98946936 L7.99977025,3.98946936 C7.63061113,3.98946936 7.33134854,4.28873196 7.33134854,4.65789107 L7.33134854,9.11403547 C7.33134854,9.48319458 7.63061113,9.78245717 7.99977025,9.78245717 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M12.5099477,22.7984661 L22.8001703,12.4714008 C23.0597259,12.210916 23.0593493,11.7894555 22.7993286,11.5294349 L12.4705801,1.20068785 C12.2102306,0.94033836 11.7881206,0.94033836 11.5277711,1.20068785 L1.2007044,11.5277531 C0.940354857,11.7881026 0.940354829,12.2102126 1.20070434,12.4705621 C1.20098417,12.4708419 1.20126424,12.4711215 1.20154457,12.4714008 L11.5671402,22.8001509 C11.8279529,23.0600364 12.2500623,23.0592847 12.5099478,22.798472 C12.5099487,22.798471 12.5099497,22.79847 12.5099507,22.7984691 Z"
          }),
          React__default.createElement("ellipse", {
            fill: "#FFFFFF",
            cx: "11.999663",
            cy: "17.5553259",
            rx: "1",
            ry: "1"
          }),
          React__default.createElement("path", {
            d:
              "M11.999663,14.6142705 L11.999663,14.6142705 C12.5410964,14.6142705 12.9800149,14.175352 12.9800149,13.6339187 L12.9800149,7.09824024 C12.9800149,6.55680687 12.5410964,6.1178884 11.999663,6.1178884 L11.999663,6.1178884 C11.4582297,6.1178884 11.0193112,6.55680687 11.0193112,7.09824024 L11.0193112,13.6339187 C11.0193112,14.175352 11.4582297,14.6142705 11.999663,14.6142705 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "37",
          viewBox: "0 0 36 37"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M18.7666212,35.2693392 L34.5395771,19.4399097 C34.9289104,19.0491824 34.9283455,18.4169918 34.5383146,18.0269608 L18.706361,2.1950086 C18.3158367,1.80448435 17.6826717,1.80448435 17.2921475,2.1950086 L1.46271661,18.0244381 C1.07219231,18.4149624 1.07219228,19.0481273 1.46271656,19.4386516 C1.46313629,19.4390714 1.46355639,19.4394907 1.46397687,19.4399097 L17.3524099,35.2718665 C17.743629,35.6616947 18.376793,35.6605672 18.7666213,35.2693481 C18.7666227,35.2693467 18.7666242,35.2693452 18.7666257,35.2693437 Z"
          }),
          React__default.createElement("circle", {
            fill: "#FFFFFF",
            cx: "18",
            cy: "27.2328071",
            r: "1.5"
          }),
          React__default.createElement("path", {
            d:
              "M18,22.7328071 L18,22.7328071 C18.8284271,22.7328071 19.5,22.0612343 19.5,21.2328071 L19.5,11.2328071 C19.5,10.40438 18.8284271,9.73280715 18,9.73280715 L18,9.73280715 C17.1715729,9.73280715 16.5,10.40438 16.5,11.2328071 L16.5,21.2328071 C16.5,22.0612343 17.1715729,22.7328071 18,22.7328071 Z",
            fill: "#FFFFFF"
          })
        )
      );
    }
  }
};

var ErrorIcon = function ErrorIcon(_ref) {
  var color = _ref.color,
    type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "color",
      "type",
      "size",
      "children"
    ]);

  return errorIcons[type][size](color, children, props);
};

ErrorIcon.displayName = "ErrorIcon";
ErrorIcon.defaultProps = {
  size: allSizes[0],
  type: types[0],
  children: null,
  color: themes.global.error.base
};
ErrorIcon.propTypes = {
  size: PropTypes.PropTypes.oneOf(allSizes),
  type: PropTypes.PropTypes.oneOf(types),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var alertIcons = {
  outline: {
    small: function small(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M1.968 12.524a.384.384 0 0 0-.055.198.4.4 0 0 0 .405.393h11.364a.415.415 0 0 0 .204-.053.387.387 0 0 0 .146-.538L8.35 3.08a.413.413 0 0 0-.7 0l-5.682 9.444zm-.788-.446L6.86 2.634a1.341 1.341 0 0 1 1.803-.46c.196.111.36.27.474.46l5.682 9.444c.367.61.155 1.392-.474 1.748a1.35 1.35 0 0 1-.664.174H2.318C1.59 14 1 13.428 1 12.722c0-.226.062-.449.18-.644zM8 11.831a.685.685 0 1 0 0-1.37.685.685 0 0 0 0 1.37zm0-2.255a.684.684 0 0 0 .684-.684v-2.17a.684.684 0 1 0-1.369 0v2.17c0 .378.307.684.685.684z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M2.041 19.13a.612.612 0 0 0-.085.313.63.63 0 0 0 .637.623h18.814a.648.648 0 0 0 .32-.084.615.615 0 0 0 .231-.851L12.551 3.245a.645.645 0 0 0-1.103 0L2.042 19.131zm-.827-.467l9.407-15.886a1.613 1.613 0 0 1 2.757 0l9.407 15.886c.441.744.181 1.697-.58 2.127a1.62 1.62 0 0 1-.798.21H2.593C1.713 21 1 20.303 1 19.443c0-.274.074-.543.214-.78zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1V8.5a1 1 0 0 0-2 0V13a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React__default.createElement("path", {
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
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M1.04970329,13.3297652 L7.61714411,2.19495085 C7.7418447,1.98352635 8.01432793,1.91322273 8.22575243,2.03792332 C8.29053904,2.0761352 8.34456808,2.13016424 8.38277997,2.19495085 L14.9502208,13.3297652 C15.0749214,13.5411897 15.0046178,13.8136729 14.7931933,13.9383735 C14.7247876,13.9787199 14.6468206,14 14.5674029,14 L1.43252122,14 C1.18706133,14 0.988076773,13.8010154 0.988076773,13.5555556 C0.988076773,13.4761379 1.00935685,13.3981708 1.04970329,13.3297652 Z"
          }),
          React__default.createElement("ellipse", {
            fill: "#FFFFFF",
            cx: "7.99996204",
            cy: "11.6648562",
            rx: "1",
            ry: "1"
          }),
          React__default.createElement("path", {
            d:
              "M7.99996204,9.84863316 L7.99996204,9.84863316 C8.4346242,9.84863316 8.7869875,9.49626986 8.7869875,9.0616077 L8.7869875,6.48429177 C8.7869875,6.04962962 8.4346242,5.69726632 7.99996204,5.69726632 L7.99996204,5.69726632 C7.56529988,5.69726632 7.21293658,6.04962962 7.21293658,6.48429177 L7.21293658,9.0616077 C7.21293658,9.49626986 7.56529988,9.84863316 7.99996204,9.84863316 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M1.07417114,19.9968129 L11.4244437,2.29635624 C11.6102988,1.97851724 12.0186236,1.87152316 12.3364626,2.05737827 C12.4353263,2.11518846 12.5176304,2.19749248 12.5754406,2.29635624 L22.9257131,19.9968129 C23.1115683,20.3146519 23.0045742,20.7229766 22.6867352,20.9088318 C22.5846348,20.9685345 22.4684894,21 22.3502147,21 L1.64966956,21 C1.28147973,21 0.983002892,20.7015232 0.983002892,20.3333333 C0.983002892,20.2150587 1.01446838,20.0989132 1.07417114,19.9968129 Z"
          }),
          React__default.createElement("ellipse", {
            fill: "#FFFFFF",
            cx: "11.9999421",
            cy: "17.6145298",
            rx: "1.04658007",
            ry: "1.03620152"
          }),
          React__default.createElement("path", {
            d:
              "M11.9999421,14.5237405 L11.9999421,14.5237405 C12.5779523,14.5237405 13.0465222,14.0551706 13.0465222,13.4771604 L13.0465222,8.31690989 C13.0465222,7.73889968 12.5779523,7.27032982 11.9999421,7.27032982 L11.9999421,7.27032982 C11.4219319,7.27032982 10.9533621,7.73889968 10.9533621,8.31690989 L10.9533621,13.4771604 C10.9533621,14.0551706 11.4219319,14.5237405 11.9999421,14.5237405 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            fill: color,
            d:
              "M1.10716259,31.5039407 L17.1316203,3.45516883 C17.4055863,2.97562625 18.0164257,2.80897351 18.4959683,3.0829395 C18.6510617,3.17154546 18.7795916,3.30007539 18.8681976,3.45516883 L34.8926553,31.5039407 C35.1666213,31.9834833 34.9999685,32.5943226 34.520426,32.8682886 C34.3693473,32.9546009 34.1983625,33 34.0243667,33 L1.97545123,33 C1.42316648,33 0.975451229,32.5522847 0.975451229,32 C0.975451229,31.8260042 1.02085033,31.6550193 1.10716259,31.5039407 Z"
          }),
          React__default.createElement("ellipse", {
            fill: "#FFFFFF",
            cx: "17.9999089",
            cy: "28.340301",
            rx: "1.56595195",
            ry: "1.55323299"
          }),
          React__default.createElement("path", {
            d:
              "M17.9999089,24.7160907 L17.9999089,24.7160907 C18.8647603,24.7160907 19.5658609,24.0149901 19.5658609,23.1501388 L19.5658609,12.8206901 C19.5658609,11.9558387 18.8647603,11.2547381 17.9999089,11.2547381 L17.9999089,11.2547381 C17.1350576,11.2547381 16.433957,11.9558387 16.433957,12.8206901 L16.433957,23.1501388 C16.433957,24.0149901 17.1350576,24.7160907 17.9999089,24.7160907 Z",
            fill: "#FFFFFF"
          })
        )
      );
    }
  }
};

var AlertIcon = function AlertIcon(_ref) {
  var color = _ref.color,
    type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "color",
      "type",
      "size",
      "children"
    ]);

  return alertIcons[type][size](color, children, props);
};

AlertIcon.displayName = "AlertIcon";
AlertIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null,
  color: themes.global.caution.base
};
AlertIcon.propTypes = {
  type: PropTypes.PropTypes.oneOf(types),
  size: PropTypes.PropTypes.oneOf(allSizes),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var successIcons = {
  outline: {
    small: function small(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM6.537 9.738l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 0 1 .943-.943l1.899 1.899z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.758-8.343l6.364-6.364a1 1 0 0 1 1.414 1.414l-7.071 7.071a1 1 0 0 1-1.414 0L5.98 13.223a1 1 0 0 1 1.414-1.414l2.848 2.848z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React__default.createElement("path", {
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
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "8",
            cy: "8",
            r: "7"
          }),
          React__default.createElement("path", {
            d:
              "M8.9939295,9.65146578 L8.9939295,3.65146578 C8.9939295,3.28327594 9.29240634,2.98479911 9.66059617,2.98479911 C10.028786,2.98479911 10.3272628,3.28327594 10.3272628,3.65146578 L10.3272628,10.3181324 C10.3272628,10.6863223 10.028786,10.9847991 9.66059617,10.9847991 L6.30900205,10.9847991 C5.94081222,10.9847991 5.64233538,10.6863223 5.64233538,10.3181324 C5.64233538,9.94994261 5.94081222,9.65146578 6.30900205,9.65146578 L8.9939295,9.65146578 Z",
            fill: "#FFFFFF",
            transform:
              "translate(7.984799, 6.984799) rotate(45.000000) translate(-7.984799, -6.984799) "
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "12",
            cy: "12",
            r: "11"
          }),
          React__default.createElement("path", {
            d:
              "M13.7212986,14.7175144 L13.7212986,5.71751442 C13.7212986,5.16522967 14.1672688,4.71751442 14.7174008,4.71751442 C15.2675329,4.71751442 15.7135031,5.16522967 15.7135031,5.71751442 L15.7135031,15.7175144 C15.7135031,16.2697992 15.2675329,16.7175144 14.7174008,16.7175144 L9.7096053,16.7175144 C9.15947323,16.7175144 8.71350308,16.2697992 8.71350308,15.7175144 C8.71350308,15.1652297 9.15947323,14.7175144 9.7096053,14.7175144 L13.7212986,14.7175144 Z",
            fill: "#FFFFFF",
            transform:
              "translate(12.213503, 10.717514) rotate(45.000000) translate(-12.213503, -10.717514) "
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "18",
            cy: "18",
            r: "17"
          }),
          React__default.createElement("path", {
            d:
              "M20.6224413,22.2530483 L20.6224413,8.75304833 C20.6224413,7.9246212 21.3232516,7.25304833 22.1877448,7.25304833 C23.0522381,7.25304833 23.7530483,7.9246212 23.7530483,8.75304833 L23.7530483,23.7530483 C23.7530483,24.5814755 23.0522381,25.2530483 22.1877448,25.2530483 L14.3183518,25.2530483 C13.4538586,25.2530483 12.7530483,24.5814755 12.7530483,23.7530483 C12.7530483,22.9246212 13.4538586,22.2530483 14.3183518,22.2530483 L20.6224413,22.2530483 Z",
            fill: "#FFFFFF",
            transform:
              "translate(18.253048, 16.253048) rotate(45.000000) translate(-18.253048, -16.253048) "
          })
        )
      );
    }
  }
};

var SuccessIcon = function SuccessIcon(_ref) {
  var color = _ref.color,
    type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "color",
      "type",
      "size",
      "children"
    ]);

  return successIcons[type][size](color, children, props);
};

SuccessIcon.displayName = "SuccessIcon";
SuccessIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null,
  color: themes.global.success.base
};
SuccessIcon.propTypes = {
  type: PropTypes.PropTypes.oneOf(types),
  size: PropTypes.PropTypes.oneOf(allSizes),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var infoIcons = {
  outline: {
    small: function small(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h16v16H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h24v24H0z"
          }),
          React__default.createElement("path", {
            fill: color,
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("path", {
            d: "M0 0h36v36H0z"
          }),
          React__default.createElement("path", {
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
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "8",
            cy: "8",
            r: "7"
          }),
          React__default.createElement("circle", {
            fill: "#FFFFFF",
            cx: "8",
            cy: "4.25",
            r: "1"
          }),
          React__default.createElement("path", {
            d:
              "M8,12.5 L8,12.5 C8.41421356,12.5 8.75,12.1642136 8.75,11.75 L8.75,7.25 C8.75,6.83578644 8.41421356,6.5 8,6.5 L8,6.5 C7.58578644,6.5 7.25,6.83578644 7.25,7.25 L7.25,11.75 C7.25,12.1642136 7.58578644,12.5 8,12.5 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    regular: function regular(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "12",
            cy: "12",
            r: "11"
          }),
          React__default.createElement("circle", {
            fill: "#FFFFFF",
            cx: "12",
            cy: "6.25",
            r: "1"
          }),
          React__default.createElement("path", {
            d:
              "M12,18 L12,18 C12.5522847,18 13,17.5522847 13,17 L13,10 C13,9.44771525 12.5522847,9 12,9 L12,9 C11.4477153,9 11,9.44771525 11,10 L11,17 C11,17.5522847 11.4477153,18 12,18 Z",
            fill: "#FFFFFF"
          })
        )
      );
    },
    large: function large(color, children, props) {
      return React__default.createElement(
        "svg",
        _extends({}, props, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "36",
          height: "36",
          viewBox: "0 0 36 36"
        }),
        children,
        React__default.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
          },
          React__default.createElement("circle", {
            fill: color,
            cx: "18",
            cy: "18",
            r: "17"
          }),
          React__default.createElement("circle", {
            fill: "#FFFFFF",
            cx: "18",
            cy: "9.5",
            r: "1.5"
          }),
          React__default.createElement("path", {
            d:
              "M18,28 L18,28 C18.8284271,28 19.5,27.3284271 19.5,26.5 L19.5,15.5 C19.5,14.6715729 18.8284271,14 18,14 L18,14 C17.1715729,14 16.5,14.6715729 16.5,15.5 L16.5,26.5 C16.5,27.3284271 17.1715729,28 18,28 Z",
            fill: "#FFFFFF"
          })
        )
      );
    }
  }
};

var InfoIcon = function InfoIcon(_ref) {
  var color = _ref.color,
    type = _ref.type,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      "color",
      "type",
      "size",
      "children"
    ]);

  return infoIcons[type][size](color, children, props);
};

InfoIcon.displayName = "InfoIcon";
InfoIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null,
  color: themes.global.primary.base
};
InfoIcon.propTypes = {
  type: PropTypes.PropTypes.oneOf(types),
  size: PropTypes.PropTypes.oneOf(allSizes),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var infoDotIcon = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h36v36H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(allSizes),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var backIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var forwardIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var upIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var downIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var closeIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var deleteIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var calendarIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var homeIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h16v16H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var searchIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M16 0H0v16h16z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};

var BookmarkIcon = function BookmarkIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }),
    children,
    React__default.createElement(
      "path",
      _extends(
        {
          fill: color
        },
        color !== "currentColor" && {
          fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
BookmarkIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var clearIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "16",
          height: "16"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z M10.3131133,4.97977994 C10.4972082,4.79568503 10.8047379,4.80473785 11,5 C11.1952621,5.19526215 11.204315,5.50279181 11.0202201,5.68688672 L5.68688672,11.0202201 C5.50279181,11.204315 5.19526215,11.1952621 5,11 C4.80473785,10.8047379 4.79568503,10.4972082 4.97977994,10.3131133 L10.3131133,4.97977994 Z M4.97977994,5.68688672 C4.79568503,5.50279181 4.80473785,5.19526215 5,5 C5.19526215,4.80473785 5.50279181,4.79568503 5.68688672,4.97977994 L11.0202201,10.3131133 C11.204315,10.4972082 11.1952621,10.8047379 11,11 C10.8047379,11.1952621 10.4972082,11.204315 10.3131133,11.0202201 L4.97977994,5.68688672 Z"
            }
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  }
};

var ClearIcon = function ClearIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return clearIcons[size](color, children, props);
};

ClearIcon.displayName = "ClearIcon";
ClearIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  size: PropTypes.PropTypes.oneOf(smallLarge),
  color: PropTypes.PropTypes.string
};
ClearIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

var editIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(0.000000, -1.000000)"
          },
          React__default.createElement("rect", {
            x: "0",
            y: "1",
            width: "16",
            height: "16"
          }),
          React__default.createElement(
            "path",
            _extends(
              {
                fill: color
              },
              color !== "currentColor" && {
                fillOpacity: ".65"
              },
              {
                fillRule: "nonzero",
                d:
                  "M5.05600084,16 L12.5,16 C12.7761424,16 13,16.2238576 13,16.5 C13,16.7761424 12.7761424,17 12.5,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.4884881 3.00038904,16.4770671 3.0011547,16.4657494 C2.99963858,16.4437511 2.99951867,16.42123 3.00089827,16.3982456 L3.26824479,11.9441846 C3.2683754,11.9408362 3.26853985,11.937487 3.26873827,11.9341375 C3.27349823,11.8566609 3.29612522,11.7813247 3.33493649,11.7141016 L9.08493649,1.75480947 C9.36107887,1.27651685 9.97266927,1.11264169 10.4509619,1.38878407 L13.0490381,2.88878407 C13.5273307,3.16492644 13.6912059,3.77651685 13.4150635,4.25480947 L7.66506351,14.2141016 C7.62625224,14.2813247 7.57232269,14.3385883 7.50754574,14.3813576 C7.50480442,14.3832955 7.50198615,14.3851125 7.49915163,14.3868998 L5.05600084,16 Z M11.0490381,6.35288568 L8.45096189,4.85288568 L4.45096189,11.7810889 L7.04903811,13.2810889 L11.0490381,6.35288568 Z M11.5490381,5.48686028 L12.5490381,3.75480947 L9.95096189,2.25480947 L8.95096189,3.98686028 L11.5490381,5.48686028 Z M4.21857846,12.8016228 L4.05901699,15.4599574 L6.28142154,13.9926058 L4.21857846,12.8016228 Z"
              }
            )
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M0 0h24v24H0z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  }
};

var EditIcon = function EditIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return editIcons[size](color, children, props);
};

EditIcon.displayName = "EditIcon";
EditIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  size: PropTypes.PropTypes.oneOf(smallLarge),
  color: PropTypes.PropTypes.string
};
EditIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

var FeedbackIcon = function FeedbackIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
FeedbackIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FilterIcon = function FilterIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
FilterIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var LocationIcon = function LocationIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
LocationIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var ticketIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children,
      React__default.createElement(
        "defs",
        null,
        React__default.createElement("polygon", {
          id: "path-1",
          points: "16 0 0 0 0 16 16 16"
        })
      ),
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          null,
          React__default.createElement(
            "mask",
            {
              id: "mask-2",
              fill: "white"
            },
            React__default.createElement("use", {
              xlinkHref: "#path-1"
            })
          ),
          React__default.createElement(
            "g",
            _extends(
              {
                mask: "url(#mask-2)",
                fill: color
              },
              color !== "currentColor" && {
                fillOpacity: ".65"
              },
              {
                fillRule: "nonzero"
              }
            ),
            React__default.createElement(
              "g",
              {
                transform:
                  "translate(8.251948, 8.031508) rotate(-45.000000) translate(-8.251948, -8.031508) translate(0.751948, 3.031508)"
              },
              React__default.createElement("path", {
                d:
                  "M9.96544565,8.54220706 L13.1895679,8.54220706 L13.1145405,6.47963002 L12.8921748,6.4055081 C12.1214593,6.14860293 11.6016054,5.42734418 11.6016054,4.61493869 C11.6016054,3.80253319 12.1214593,3.08127445 12.8921748,2.82436927 L13.1163787,2.74963464 L13.1868401,1.05692569 L9.96544565,1.05692569 L9.96544565,1.97113925 C9.96544565,2.24728163 9.74158803,2.47113925 9.46544565,2.47113925 C9.18930328,2.47113925 8.96544565,2.24728163 8.96544565,1.97113925 L8.96544565,1.05692569 L1.48016428,1.05692569 L1.48016428,8.54220706 L8.96544565,8.54220706 L8.96544565,7.6279935 C8.96544565,7.35185113 9.18930328,7.1279935 9.46544565,7.1279935 C9.74158803,7.1279935 9.96544565,7.35185113 9.96544565,7.6279935 L9.96544565,8.54220706 Z M13.2084025,3.77305257 C12.8460292,3.8938437 12.6016054,4.2329636 12.6016054,4.61493869 C12.6016054,4.99691377 12.8460292,5.33603367 13.2084025,5.4568248 L13.7597192,5.64059704 C13.9575607,5.70654417 14.093694,5.88835762 14.1012749,6.09676294 L14.1889069,8.50585556 C14.1894577,8.52402731 14.1894577,8.52402731 14.1895679,8.54220706 C14.1895679,9.09449181 13.7418526,9.54220706 13.1895679,9.54220706 L1.48016428,9.54220706 C0.927879529,9.54220706 0.480164278,9.09449181 0.480164278,8.54220706 L0.480164278,1.05692569 C0.480164278,0.50464094 0.927879529,0.0569256897 1.48016428,0.0569256897 L13.1868401,0.0569256897 C13.2076413,0.0570699303 13.2076413,0.0570699303 13.2284305,0.0577909457 C13.7802374,0.0807607017 14.2089446,0.54670923 14.1859749,1.09851611 L14.1011727,3.1357339 C14.0925392,3.3431385 13.9566509,3.52363644 13.7597192,3.58928034 L13.2084025,3.77305257 Z M3.8085914,3.88535281 C3.53244903,3.88535281 3.3085914,3.66149519 3.3085914,3.38535281 C3.3085914,3.10921044 3.53244903,2.88535281 3.8085914,2.88535281 L6.63701853,2.88535281 C6.9131609,2.88535281 7.13701853,3.10921044 7.13701853,3.38535281 C7.13701853,3.66149519 6.9131609,3.88535281 6.63701853,3.88535281 L3.8085914,3.88535281 Z M5.22280497,6.71377994 C4.94666259,6.71377994 4.72280497,6.48992231 4.72280497,6.21377994 C4.72280497,5.93763756 4.94666259,5.71377994 5.22280497,5.71377994 L6.63701853,5.71377994 C6.9131609,5.71377994 7.13701853,5.93763756 7.13701853,6.21377994 C7.13701853,6.48992231 6.9131609,6.71377994 6.63701853,6.71377994 L5.22280497,6.71377994 Z M8.96544565,4.0924596 C8.96544565,3.81631722 9.18930328,3.5924596 9.46544565,3.5924596 C9.74158803,3.5924596 9.96544565,3.81631722 9.96544565,4.0924596 L9.96544565,5.50667316 C9.96544565,5.78281553 9.74158803,6.00667316 9.46544565,6.00667316 C9.18930328,6.00667316 8.96544565,5.78281553 8.96544565,5.50667316 L8.96544565,4.0924596 Z"
              })
            )
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M24 0H0v24h24z"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
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
  }
};

var TicketIcon = function TicketIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return ticketIcons[size](color, children, props);
};

TicketIcon.displayName = "TicketIcon";
TicketIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  size: PropTypes.PropTypes.oneOf(smallLarge),
  color: PropTypes.PropTypes.string
};
TicketIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

var TicketsIcon = function TicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M24 0H0v24h24z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
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

  // this is required for backward compatibility. old icons use size of type number
  // new icons use string small, regular or large
  var widthHeightValue = Number.isInteger(+size) ? size : sizeMapper[size];
  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: widthHeightValue,
      height: widthHeightValue,
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M24 0H0v24h24z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string,
  size: PropTypes.PropTypes.oneOfType([
    PropTypes.PropTypes.number,
    PropTypes.PropTypes.oneOf(allSizes)
  ])
};
UserIcon.defaultProps = {
  children: null,
  color: themes.global.gray01,
  size: allSizes[0]
};

var SearchIconDeprecated = function SearchIconDeprecated(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 16 16",
      width: size,
      height: size,
      fill: color
    }),
    React__default.createElement("title", null, "Search Icon"),
    React__default.createElement("path", {
      d:
        "M11.491 6.048c0 .672-.135 1.31-.404 1.897a5.01 5.01 0 0 1-1.102 1.552 5.273 5.273 0 0 1-1.632 1.05 5.39 5.39 0 0 1-3.987 0 5.283 5.283 0 0 1-1.632-1.05 5.01 5.01 0 0 1-1.102-1.552 4.531 4.531 0 0 1-.404-1.897c0-.666.135-1.302.404-1.892.269-.592.64-1.114 1.102-1.552A5.304 5.304 0 0 1 4.366 1.56a5.207 5.207 0 0 1 1.994-.384c.706 0 1.376.13 1.993.384.62.256 1.17.607 1.632 1.045.462.438.833.96 1.102 1.552a4.54 4.54 0 0 1 .404 1.892m4.346 8.977l-4.744-4.93a6.36 6.36 0 0 0 .62-.774 5.913 5.913 0 0 0 .89-2.115 5.893 5.893 0 0 0-.004-2.346 5.543 5.543 0 0 0-.361-1.128 5.98 5.98 0 0 0-.588-1.036 6.49 6.49 0 0 0-.794-.925A6.37 6.37 0 0 0 8.794.461 6.82 6.82 0 0 0 7.61.116a6.742 6.742 0 0 0-2.5 0A6.82 6.82 0 0 0 3.925.46a6.44 6.44 0 0 0-2.064 1.313 6.491 6.491 0 0 0-.793.923 5.98 5.98 0 0 0-.588 1.036c-.16.361-.28.741-.36 1.128a5.954 5.954 0 0 0 0 2.376c.08.388.2.768.36 1.13a6.182 6.182 0 0 0 1.381 1.959c.298.288.624.544.97.764a6.44 6.44 0 0 0 2.279.894 6.77 6.77 0 0 0 3.363-.224 6.296 6.296 0 0 0 1.708-.873l4.749 4.925a.56.56 0 0 0 .215.145.701.701 0 0 0 .453.011.514.514 0 0 0 .2-.114.561.561 0 0 0 .039-.828"
    })
  );
};

SearchIconDeprecated.propTypes = {
  size: PropTypes.PropTypes.number.isRequired,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};
SearchIconDeprecated.defaultProps = {
  children: null,
  color: "currentColor"
};

var listIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "13",
        viewBox: "0 0 20 13"
      }),
      children,
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "17",
        viewBox: "0 0 24 17"
      }),
      children,
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
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
  size: PropTypes.PropTypes.oneOf(smallLarge),
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
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

  return React__default.createElement(
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
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M0 0h36v36H0z"
      }),
      React__default.createElement("path", {
        fill: "#F2BD2A",
        d:
          "M1.38 32.54L16.652 2.992a1 1 0 0 1 1.766-.02L34.59 32.52a1 1 0 0 1-.877 1.48H2.268a1 1 0 0 1-.889-1.46z"
      }),
      React__default.createElement("circle", {
        cx: "17.5",
        cy: "29.5",
        r: "1.5",
        fill: "#FFF"
      }),
      React__default.createElement("path", {
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
  size: PropTypes__default.number.isRequired,
  children: PropTypes__default.node
};

var VenueSearchIcon = function VenueSearchIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 1024 1024"
    }),
    children,
    React__default.createElement("path", {
      fill: color,
      d:
        "M1012.992 10.906c-5.888-5.939-13.312-9.37-21.76-10.394-8.192-0.922-15.974 0.512-23.552 4.608l-948.326 549.376c-7.424 3.994-12.954 10.086-16.384 18.074-3.379 8.192-3.84 16.384-1.536 23.552 1.946 8.448 6.451 15.36 13.414 20.582 6.758 5.12 14.336 7.68 22.63 7.68h362.086v361.984c0 8.704 2.56 16.486 7.68 23.040 5.12 6.502 11.776 11.008 19.456 13.312 2.253 0.717 4.608 1.024 7.014 1.024h3.226c6.656 0 12.902-1.536 18.637-4.608 5.939-3.226 10.752-7.834 14.080-13.824l549.12-948.89c4.403-7.322 6.042-15.36 4.813-23.757-1.178-8.090-4.608-15.258-10.598-21.658zM463.872 560.64c-7.168-7.168-16.538-11.008-26.931-11.008h-259.789l706.406-409.344-408.781 706.918v-260.25c0-10.086-3.789-19.2-10.957-26.368z"
    })
  );
};

VenueSearchIcon.displayName = "VenueSearchIcon";
VenueSearchIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
VenueSearchIcon.defaultProps = {
  children: null,
  color: themes.global.gray03
};

var CallUsIcon = function CallUsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M13.6346466,16.1541466 C14.6109088,15.1778845 16.1934912,15.1778845 17.1696701,16.1540633 L19.2919795,18.2753729 C20.2680156,19.2526587 20.2680156,20.8352413 19.2916016,21.8104052 L18.1271043,22.9739021 C16.9535357,24.1498039 15.1112383,24.334309 13.7243767,23.416739 C8.55628422,19.9986402 4.00024878,15.4426048 0.583153271,10.2755116 C-0.335354484,8.88666249 -0.151863125,7.04865634 1.02464661,5.87214661 L2.18864661,4.70814661 C3.16390876,3.73288446 4.74849124,3.73288446 5.72367005,4.70806329 L7.84597981,6.82937317 C8.82094006,7.80558338 8.82094006,9.38881662 7.84597981,10.3650268 L7.84575339,10.3652534 L7.46058399,10.7504228 C9.18451287,12.8103957 11.1861854,14.8118396 13.2495481,16.5392452 L13.6346466,16.1541466 Z M7.13872995,7.53633671 L5.01664661,5.41525339 C4.43190876,4.83051554 3.48049124,4.83051554 2.89575339,5.41525339 L1.73175339,6.57925339 C0.891635087,7.41937169 0.760681463,8.73111502 1.41725168,9.72389591 C4.76015122,14.7787952 9.22011578,19.2387598 14.2760904,22.5827054 C15.266653,23.2380776 16.582124,23.1063339 17.4197984,22.2669948 L18.5848732,21.1029202 C19.1703844,20.5181587 19.1703844,19.5687413 18.5847299,18.9823367 L16.4626466,16.8612534 C15.8769088,16.2755155 14.9274912,16.2755155 14.3417534,16.8612534 L13.6347534,17.5682534 C13.4530135,17.7499933 13.1630913,17.7643445 12.9642915,17.6014415 C10.6107027,15.6728343 8.32265683,13.3850497 6.398377,11.035509 C6.23555629,10.8367054 6.24994152,10.5468517 6.43164661,10.3651466 L7.13852537,9.65826785 C7.72345993,9.07246942 7.72342489,8.12178154 7.13872995,7.53633671 Z M12,1 C11.7238576,1 11.5,0.776142375 11.5,0.5 C11.5,0.223857625 11.7238576,0 12,0 C18.6281424,0 24,5.37185763 24,12 C24,12.2761424 23.7761424,12.5 23.5,12.5 C23.2238576,12.5 23,12.2761424 23,12 C23,5.92414237 18.0758576,1 12,1 Z M12,5 C11.7238576,5 11.5,4.77614237 11.5,4.5 C11.5,4.22385763 11.7238576,4 12,4 C16.4184775,4 20,7.58119268 20,12 C20,12.2761424 19.7761424,12.5 19.5,12.5 C19.2238576,12.5 19,12.2761424 19,12 C19,8.13349805 15.8662133,5 12,5 Z M12,9 C11.7238576,9 11.5,8.77614237 11.5,8.5 C11.5,8.22385763 11.7238576,8 12,8 C14.2094657,8 16,9.7901809 16,12 C16,12.2761424 15.7761424,12.5 15.5,12.5 C15.2238576,12.5 15,12.2761424 15,12 C15,10.3425098 13.6572252,9 12,9 Z"
            }
          )
        )
      )
    )
  );
};

CallUsIcon.displayName = "CallUsIcon";
CallUsIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
CallUsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var CartIcon = function CartIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M17.7643947,19 L9.23560526,19 C9.71088995,19.5308599 10,20.2318383 10,21 C10,22.6561424 8.65614237,24 7,24 C5.34385763,24 4,22.6561424 4,21 C4,19.5425652 5.04072549,18.3269735 6.41914573,18.0562556 L3.57643646,1 L0.5,1 C0.223857625,1 -1.77635684e-14,0.776142375 -1.77635684e-14,0.5 C-1.77635684e-14,0.223857625 0.223857625,0 0.5,0 L4,0 C4.24441958,0 4.45301463,0.176706521 4.49319696,0.417800506 L7.08890435,15.9920448 L20.1202503,15.0267814 L22.8282847,6 L7.5,6 C7.22385763,6 7,5.77614237 7,5.5 C7,5.22385763 7.22385763,5 7.5,5 L23.5003,5 C23.8352313,5 24.0754549,5.32286798 23.9792131,5.64367394 L20.9792131,15.6436739 C20.9196715,15.8421462 20.74388,15.9833272 20.537235,15.9986339 L7.25398957,16.9825562 L7.42356354,18 L20,18 C21.6561424,18 23,19.3438576 23,21 C23,22.6561424 21.6561424,24 20,24 C18.3438576,24 17,22.6561424 17,21 C17,20.2318383 17.2891101,19.5308599 17.7643947,19 Z M18,21 C18,22.1038576 18.8961424,23 20,23 C21.1038576,23 22,22.1038576 22,21 C22,19.8961424 21.1038576,19 20,19 C18.8961424,19 18,19.8961424 18,21 Z M5,21 C5,22.1038576 5.89614237,23 7,23 C8.10385763,23 9,22.1038576 9,21 C9,19.8961424 8.10385763,19 7,19 C5.89614237,19 5,19.8961424 5,21 Z"
            }
          )
        )
      )
    )
  );
};

CartIcon.displayName = "CartIcon";
CartIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
CartIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var CheckingAccountIcon = function CheckingAccountIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M20,16 L20,5 L1,5 L1,16 L20,16 Z M20.5,17 L0.5,17 C0.223857625,17 0,16.7761424 0,16.5 L0,4.5 C0,4.22385763 0.223857625,4 0.5,4 L20.5,4 C20.7761424,4 21,4.22385763 21,4.5 L21,16.5 C21,16.7761424 20.7761424,17 20.5,17 Z M2.5,10 C2.22385763,10 2,9.77614237 2,9.5 C2,9.22385763 2.22385763,9 2.5,9 L9.5,9 C9.77614237,9 10,9.22385763 10,9.5 C10,9.77614237 9.77614237,10 9.5,10 L2.5,10 Z M2.5,14 C2.22385763,14 2,13.7761424 2,13.5 C2,13.2238576 2.22385763,13 2.5,13 L18.5,13 C18.7761424,13 19,13.2238576 19,13.5 C19,13.7761424 18.7761424,14 18.5,14 L2.5,14 Z M18.5,7 C18.7761424,7 19,7.22385763 19,7.5 L19,9.5 C19,9.77614237 18.7761424,10 18.5,10 L12.5,10 C12.2238576,10 12,9.77614237 12,9.5 L12,7.5 C12,7.22385763 12.2238576,7 12.5,7 L18.5,7 Z M18,8 L13,8 L13,9 L18,9 L18,8 Z M22,18 L22,6.5 C22,6.22385763 22.2238576,6 22.5,6 C22.7761424,6 23,6.22385763 23,6.5 L23,18.5 C23,18.7761424 22.7761424,19 22.5,19 L2.5,19 C2.22385763,19 2,18.7761424 2,18.5 C2,18.2238576 2.22385763,18 2.5,18 L22,18 Z"
            }
          )
        )
      )
    )
  );
};

CheckingAccountIcon.displayName = "CheckingAccountIcon";
CheckingAccountIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
CheckingAccountIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var CompressIcon = function CompressIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M9.29289322,14 L4.5,14 C4.22385763,14 4,13.7761424 4,13.5 C4,13.2238576 4.22385763,13 4.5,13 L10.5,13 C10.7761424,13 11,13.2238576 11,13.5 L11,19.5 C11,19.7761424 10.7761424,20 10.5,20 C10.2238576,20 10,19.7761424 10,19.5 L10,14.7071068 L3.85355339,20.8535534 C3.65829124,21.0488155 3.34170876,21.0488155 3.14644661,20.8535534 C2.95118446,20.6582912 2.95118446,20.3417088 3.14644661,20.1464466 L9.29289322,14 Z M14,9.29289322 L20.1464466,3.14644661 C20.3417088,2.95118446 20.6582912,2.95118446 20.8535534,3.14644661 C21.0488155,3.34170876 21.0488155,3.65829124 20.8535534,3.85355339 L14.7071068,10 L19.5,10 C19.7761424,10 20,10.2238576 20,10.5 C20,10.7761424 19.7761424,11 19.5,11 L13.5,11 C13.2238576,11 13,10.7761424 13,10.5 L13,4.5 C13,4.22385763 13.2238576,4 13.5,4 C13.7761424,4 14,4.22385763 14,4.5 L14,9.29289322 Z"
            }
          )
        )
      )
    )
  );
};

CompressIcon.displayName = "CompressIcon";
CompressIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
CompressIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var CreateNewIcon = function CreateNewIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M11.5,5 C11.5,4.72385763 11.7238576,4.5 12,4.5 C12.2761424,4.5 12.5,4.72385763 12.5,5 L12.5,19 C12.5,19.2761424 12.2761424,19.5 12,19.5 C11.7238576,19.5 11.5,19.2761424 11.5,19 L11.5,5 Z M5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 C4.5,11.7238576 4.72385763,11.5 5,11.5 L19,11.5 C19.2761424,11.5 19.5,11.7238576 19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L5,12.5 Z"
          }
        )
      )
    )
  );
};

CreateNewIcon.displayName = "CreateNewIcon";
CreateNewIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
CreateNewIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var emailIcons = {
  small: function small(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          null,
          React__default.createElement("rect", {
            x: "0",
            y: "0",
            width: "16",
            height: "16"
          }),
          React__default.createElement(
            "path",
            _extends(
              {
                fill: color
              },
              color !== "currentColor" && {
                fillOpacity: ".65"
              },
              {
                fillRule: "nonzero",
                d:
                  "M15,4.43425855 L8.2773501,8.91602515 C8.10940039,9.02799162 7.89059961,9.02799162 7.7226499,8.91602515 L1,4.43425855 L1,12.5 C1,12.7761424 1.22385763,13 1.5,13 L14.5,13 C14.7761424,13 15,12.7761424 15,12.5 L15,4.43425855 Z M14.9439568,3.26977022 C14.8606656,3.10948483 14.6931186,3 14.5,3 L1.5,3 C1.30688141,3 1.13933437,3.10948483 1.05604315,3.26977022 L8,7.89907479 L14.9439568,3.26977022 Z M-2.70399954e-14,3.50683619 C-7.96576616e-05,3.50136696 -6.98220838e-05,3.49589325 2.99669269e-05,3.49041737 C0.00518497738,2.66640023 0.674769432,2 1.5,2 L14.5,2 C15.3252306,2 15.994815,2.66640023 15.99997,3.49041737 C16.0000698,3.49589325 16.0000797,3.50136696 16,3.5068362 L16,12.5 C16,13.3284271 15.3284271,14 14.5,14 L1.5,14 C0.671572875,14 -2.64788124e-14,13.3284271 -2.66453458e-14,12.5 L-2.66453458e-14,3.50683619 Z"
              }
            )
          )
        )
      )
    );
  },
  large: function large(color, children, props) {
    return React__default.createElement(
      "svg",
      _extends({}, props, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          null,
          React__default.createElement("rect", {
            x: "0",
            y: "0",
            width: "24",
            height: "24"
          }),
          React__default.createElement(
            "path",
            _extends(
              {
                fill: color
              },
              color !== "currentColor" && {
                fillOpacity: ".65"
              },
              {
                fillRule: "nonzero",
                d:
                  "M23,6.45690981 L12.2855322,13.9104526 C12.1138997,14.0298491 11.8861003,14.0298491 11.7144678,13.9104526 L1,6.45690981 L1,19.5 C1,19.7761424 1.22385763,20 1.5,20 L22.5,20 C22.7761424,20 23,19.7761424 23,19.5 L23,6.45690981 Z M23,5.23874236 L23,4.5 C23,4.22385763 22.7761424,4 22.5,4 L1.5,4 C1.22385763,4 1,4.22385763 1,4.5 L1,5.23874236 L12,12.8909163 L23,5.23874236 Z M6.65462761e-14,5.50621804 C-5.89125079e-05,5.50178198 -5.89867691e-05,5.49734329 -1.18291725e-09,5.49290319 L9.41469193e-14,4.5 C9.40636525e-14,3.67157288 0.671572875,3 1.5,3 L22.5,3 C23.3284271,3 24,3.67157288 24,4.5 L24,5.4929031 C24.000059,5.49734329 24.0000589,5.50178198 24,5.50621804 L24,19.5 C24,20.3284271 23.3284271,21 22.5,21 L1.5,21 C0.671572875,21 9.43134527e-14,20.3284271 9.41469193e-14,19.5 L9.41469193e-14,5.50621804 Z"
              }
            )
          )
        )
      )
    );
  }
};

var EmailIcon = function EmailIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return emailIcons[size](color, children, props);
};

EmailIcon.displayName = "EmailIcon";
EmailIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  size: PropTypes.PropTypes.oneOf(smallLarge),
  color: PropTypes.PropTypes.string
};
EmailIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

var ExchangeTicketsIcon = function ExchangeTicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-1.000000, -1.000000)"
        },
        React__default.createElement("rect", {
          x: "1",
          y: "1",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M2.70710678,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L2.70710678,10 L4.85355339,12.1464466 C5.04881554,12.3417088 5.04881554,12.6582912 4.85355339,12.8535534 C4.65829124,13.0488155 4.34170876,13.0488155 4.14644661,12.8535534 L1.14644661,9.85355339 C0.951184464,9.65829124 0.951184464,9.34170876 1.14644661,9.14644661 L4.14644661,6.14644661 C4.34170876,5.95118446 4.65829124,5.95118446 4.85355339,6.14644661 C5.04881554,6.34170876 5.04881554,6.65829124 4.85355339,6.85355339 L2.70710678,9 Z M18.2928932,4 L16.1464466,1.85355339 C15.9511845,1.65829124 15.9511845,1.34170876 16.1464466,1.14644661 C16.3417088,0.951184464 16.6582912,0.951184464 16.8535534,1.14644661 L19.8535534,4.14644661 C20.0488155,4.34170876 20.0488155,4.65829124 19.8535534,4.85355339 L16.8535534,7.85355339 C16.6582912,8.04881554 16.3417088,8.04881554 16.1464466,7.85355339 C15.9511845,7.65829124 15.9511845,7.34170876 16.1464466,7.14644661 L18.2928932,5 L7.5,5 C7.22385763,5 7,4.77614237 7,4.5 C7,4.22385763 7.22385763,4 7.5,4 L18.2928932,4 Z M19.9601551,18.131728 L15.7175144,13.8890873 L10.0606602,19.5459415 L14.3033009,23.7885822 L19.9601551,18.131728 Z M20.6672619,17.4246212 L22.7885822,15.3033009 L21.9393066,14.4540252 C21.230958,14.6195402 20.4809901,14.4099223 19.9601551,13.8890873 C19.4393201,13.3682523 19.2297022,12.6182844 19.3952172,11.9099358 L18.5459415,11.0606602 L16.4246212,13.1819805 L20.6672619,17.4246212 Z M13.9497475,24.8492424 L9,19.8994949 C8.80473785,19.7042328 8.80473785,19.3876503 9,19.1923882 L18.1923882,10 C18.3876503,9.80473785 18.7042328,9.80473785 18.8994949,10 L20.3137085,11.4142136 C20.4476246,11.5481297 20.4943859,11.7462135 20.4344968,11.9258808 L20.3971711,12.0378577 C20.263255,12.4396061 20.3678163,12.8825349 20.6672619,13.1819805 C20.9667075,13.4814261 21.4096363,13.5859874 21.8113847,13.4520713 L21.9233616,13.4147456 C22.1030289,13.3548565 22.3011127,13.4016178 22.4350288,13.5355339 L23.8492424,14.9497475 C24.0445046,15.1450096 24.0445046,15.4615921 23.8492424,15.6568542 L14.6568542,24.8492424 C14.4615921,25.0445046 14.1450096,25.0445046 13.9497475,24.8492424 Z"
            }
          )
        )
      )
    )
  );
};

ExchangeTicketsIcon.displayName = "ExchangeTicketsIcon";
ExchangeTicketsIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
ExchangeTicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var ExpandIcon = function ExpandIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M19.2928932,4 L14.5,4 C14.2238576,4 14,3.77614237 14,3.5 C14,3.22385763 14.2238576,3 14.5,3 L20.5,3 C20.7761424,3 21,3.22385763 21,3.5 L21,9.5 C21,9.77614237 20.7761424,10 20.5,10 C20.2238576,10 20,9.77614237 20,9.5 L20,4.70710678 L13.8535534,10.8535534 C13.6582912,11.0488155 13.3417088,11.0488155 13.1464466,10.8535534 C12.9511845,10.6582912 12.9511845,10.3417088 13.1464466,10.1464466 L19.2928932,4 Z M4,19.2928932 L10.1464466,13.1464466 C10.3417088,12.9511845 10.6582912,12.9511845 10.8535534,13.1464466 C11.0488155,13.3417088 11.0488155,13.6582912 10.8535534,13.8535534 L4.70710678,20 L9.5,20 C9.77614237,20 10,20.2238576 10,20.5 C10,20.7761424 9.77614237,21 9.5,21 L3.5,21 C3.22385763,21 3,20.7761424 3,20.5 L3,14.5 C3,14.2238576 3.22385763,14 3.5,14 C3.77614237,14 4,14.2238576 4,14.5 L4,19.2928932 Z"
            }
          )
        )
      )
    )
  );
};

ExpandIcon.displayName = "ExpandIcon";
ExpandIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
ExpandIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FAQIcon = function FAQIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M9.5,22 C9.77614237,22 10,22.2238576 10,22.5 C10,22.7761424 9.77614237,23 9.5,23 L2.5,23 C1.11928813,23 2.35922393e-15,21.8807119 2.22044605e-15,20.5 L0,2.5 C-1.38777878e-16,1.11928813 1.11928813,2.77555756e-16 2.5,0 L14.5,0 C15.8807119,9.71445147e-16 17,1.11928813 17,2.5 L17,6.5 C17,6.77614237 16.7761424,7 16.5,7 C16.2238576,7 16,6.77614237 16,6.5 L16,2.5 C16,1.67157288 15.3284271,1 14.5,1 L2.5,1 C1.67157288,1 1,1.67157288 1,2.5 L1,20.5 C1,21.3284271 1.67157288,22 2.5,22 L9.5,22 Z M3.5,6 C3.22385763,6 3,5.77614237 3,5.5 C3,5.22385763 3.22385763,5 3.5,5 L13.5,5 C13.7761424,5 14,5.22385763 14,5.5 C14,5.77614237 13.7761424,6 13.5,6 L3.5,6 Z M3.5,11 C3.22385763,11 3,10.7761424 3,10.5 C3,10.2238576 3.22385763,10 3.5,10 L8.5,10 C8.77614237,10 9,10.2238576 9,10.5 C9,10.7761424 8.77614237,11 8.5,11 L3.5,11 Z M3.5,16 C3.22385763,16 3,15.7761424 3,15.5 C3,15.2238576 3.22385763,15 3.5,15 L7.5,15 C7.77614237,15 8,15.2238576 8,15.5 C8,15.7761424 7.77614237,16 7.5,16 L3.5,16 Z M16.5,24 C12.3578644,24 9,20.6421356 9,16.5 C9,12.3578644 12.3578644,9 16.5,9 C20.6421356,9 24,12.3578644 24,16.5 C24,20.6421356 20.6421356,24 16.5,24 Z M16.5,23 C20.0898509,23 23,20.0898509 23,16.5 C23,12.9101491 20.0898509,10 16.5,10 C12.9101491,10 10,12.9101491 10,16.5 C10,20.0898509 12.9101491,23 16.5,23 Z M17,18.5 C17,18.7761424 16.7761424,19 16.5,19 C16.2238576,19 16,18.7761424 16,18.5 L16,17 C16,16.8328234 16.0835506,16.6767077 16.2226499,16.5839749 C17.6894365,15.6061171 18,15.2334409 18,14.5 C18,13.5580333 17.5349723,13 16.5,13 C15.4650277,13 15,13.5580333 15,14.5 C15,14.7761424 14.7761424,15 14.5,15 C14.2238576,15 14,14.7761424 14,14.5 C14,13.0419667 14.8683056,12 16.5,12 C18.1316944,12 19,13.0419667 19,14.5 C19,15.6146202 18.5417641,16.2141297 17,17.2659442 L17,18.5 Z M16.5,20 C16.775,20 17,20.224 17,20.5 C17,20.775 16.775,21 16.5,21 C16.223,21 16,20.775 16,20.5 C16,20.224 16.223,20 16.5,20 Z"
            }
          )
        )
      )
    )
  );
};

FAQIcon.displayName = "FAQIcon";
FAQIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
FAQIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FavoriteIcon = function FavoriteIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "22px",
      viewBox: "0 0 24 22",
      version: "1.1"
    }),
    children,
    React__default.createElement(
      "g",
      _extends(
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        color !== "currentColor" && {
          fillOpacity: ".65"
        }
      ),
      React__default.createElement(
        "g",
        {
          transform: "translate(-950.000000, -407.000000)",
          fill: color,
          fillRule: "nonzero"
        },
        React__default.createElement("path", {
          d:
            "M968.07706,407.053152 C971.5943,407.460137 974,410.048724 974,414.245292 C974,418.78884 971.698203,421.91696 966.97459,425.506474 C966.631149,425.767458 966.283116,426.026384 965.816501,426.369552 C965.687396,426.464501 965.532825,426.57795 965.253963,426.782612 C965.031956,426.945648 964.867028,427.067159 964.70796,427.185054 C964.142693,427.604004 963.498277,428.111251 962.774711,428.706795 C962.331151,429.093015 961.668849,429.093015 961.258126,428.73435 L961.225289,428.706795 C960.72163,428.268245 960.13994,427.81348 959.29204,427.185054 C959.132972,427.067159 958.968044,426.945648 958.746037,426.782612 C958.467175,426.57795 958.312604,426.464501 958.183499,426.369552 C957.716884,426.026384 957.368851,425.767458 957.02541,425.506474 C952.301797,421.91696 950,418.78884 950,414.245292 C950,410.048724 952.4057,407.460137 955.92294,407.053152 C958.209092,406.788618 960.56977,407.527361 962,408.915718 C963.43023,407.527361 965.790908,406.788618 968.07706,407.053152 Z M963.302492,425.307206 C963.464835,425.186884 963.632262,425.063533 963.856806,424.898633 C964.13657,424.693309 964.290003,424.580695 964.418033,424.486536 C964.875585,424.150034 965.214705,423.897739 965.546558,423.645561 C969.742398,420.457106 971.647059,417.86869 971.647059,414.245292 C971.647059,411.256638 970.154662,409.650786 967.805293,409.378937 C965.716097,409.137193 963.581221,410.105482 963.101564,411.378324 C962.719872,412.391201 961.280128,412.391201 960.898436,411.378324 C960.418779,410.105482 958.283903,409.137193 956.194707,409.378937 C953.845338,409.650786 952.352941,411.256638 952.352941,414.245292 C952.352941,417.86869 954.257602,420.457106 958.453442,423.645561 C958.785295,423.897739 959.124415,424.150034 959.581967,424.486536 C959.709997,424.580695 959.86343,424.693309 960.143194,424.898633 C960.367738,425.063533 960.535165,425.186884 960.697508,425.307206 C961.209397,425.686596 961.632747,426.008687 962.000165,426.301159 C962.372169,426.004947 962.793574,425.684394 963.302492,425.307206 Z"
        })
      )
    )
  );
};

FavoriteIcon.displayName = "FavoriteIcon";
FavoriteIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
FavoriteIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var GetHelpIcon = function GetHelpIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M9.14644661,18.1464466 C9.2402148,18.0526784 9.36739176,18 9.5,18 L19.5,18 C21.4332224,18 23,16.4334929 23,14.5 L23,4.5 C23,2.56714237 21.4328576,1 19.5,1 L4.5,1 C2.56714237,1 1,2.56714237 1,4.5 L1,14.5 C1,16.4334929 2.56677762,18 4.5,18 C4.77614237,18 5,18.2238576 5,18.5 L5,22.2928932 L9.14644661,18.1464466 Z M9.70710678,19 L4.85355339,23.8535534 C4.53857096,24.1685358 4,23.9454524 4,23.5 L4,18.9725462 C1.74987944,18.7239 0,16.8167868 0,14.5 L0,4.5 C0,2.01485763 2.01485763,0 4.5,0 L19.5,0 C21.9851424,0 24,2.01485763 24,4.5 L24,14.5 C24,16.9858163 21.9854685,19 19.5,19 L9.70710678,19 Z M12,14 C12.275,14 12.5,14.224 12.5,14.5 C12.5,14.775 12.275,15 12,15 C11.723,15 11.5,14.775 11.5,14.5 C11.5,14.224 11.723,14 12,14 Z M12.5,10.897369 L12.5,12.5 C12.5,12.7761424 12.2761424,13 12,13 C11.7238576,13 11.5,12.7761424 11.5,12.5 L11.5,10.5555556 C11.5,10.3468658 11.6296137,10.1601249 11.8251229,10.0871348 C13.558936,9.43984457 14,8.91056781 14,7.83333333 C14,6.79166667 13.2460317,6 12,6 C10.7539683,6 10,6.79166667 10,7.83333333 C10,8.10947571 9.77614237,8.33333333 9.5,8.33333333 C9.22385763,8.33333333 9,8.10947571 9,7.83333333 C9,6.25 10.1904762,5 12,5 C13.8095238,5 15,6.25 15,7.83333333 C15,9.28508611 14.3476069,10.1456847 12.5,10.897369 Z"
            }
          )
        ),
        React__default.createElement("g", {
          transform: "translate(9.000000, 5.000000)"
        })
      )
    )
  );
};

GetHelpIcon.displayName = "GetHelpIcon";
GetHelpIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
GetHelpIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var GiftCardIcon = function GiftCardIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M23,11 L23,7.50010618 C23,6.66825884 22.3306292,6 21.5003154,6 L13.2394751,6 C12.6911217,6.61411362 11.8926277,7 11,7 L9,7 L9,11 L23,11 Z M23,12 L9,12 L9,22 L21.4991358,22 C22.3245032,22 23,21.3261108 23,20.4998938 L23,12 Z M1,11 L8,11 L8,7 L6,7 C5.10737227,7 4.30887828,6.61411362 3.76052494,6 L2.49537277,6 C1.67468043,6 1,6.67441828 1,7.50010618 L1,11 Z M1,12 L1,20.4998938 C1,21.331675 1.669832,22 2.50086422,22 L8,22 L8,12 L1,12 Z M12.6281053,5.16578641 C12.8624939,4.83801738 13,4.43573657 13,4 C13,2.88942753 12.1082006,2 11,2 C9.88942753,2 9,2.89179941 9,4 L9,6 L11,6 C11.6415581,6 12.2093164,5.70239149 12.5744418,5.23737933 C12.5901963,5.2119044 12.6081745,5.18794981 12.6281053,5.16578641 Z M13.8304147,5 L21.5003154,5 C22.8825421,5 24,6.11560156 24,7.50010618 L24,20.4998938 C24,21.8789296 22.8762553,23 21.4991358,23 L2.50086422,23 C1.11805084,23 0,21.8844646 0,20.4998938 L0,7.50010618 C0,6.12204651 1.12248266,5 2.49537277,5 L3.16958528,5 C3.059706,4.68737429 3,4.35082973 3,4 C3,2.33654573 4.34010996,1 6,1 C7.04652965,1 7.96366724,1.5304223 8.5,2.3371915 C9.03633276,1.5304223 9.95347035,1 11,1 C12.65989,1 14,2.33654573 14,4 C14,4.35082973 13.940294,4.68737429 13.8304147,5 Z M4.3718947,5.16578641 C4.39182554,5.18794981 4.40980366,5.2119044 4.42555821,5.23737933 C4.79068362,5.70239149 5.35844191,6 6,6 L8,6 L8,4 C8,2.89179941 7.11057247,2 6,2 C4.89179941,2 4,2.88942753 4,4 C4,4.43573657 4.13750606,4.83801738 4.3718947,5.16578641 Z M20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L13.5,18 C13.2238576,18 13,17.7761424 13,17.5 C13,17.2238576 13.2238576,17 13.5,17 L20.5,17 Z M16.5,19 C16.7761424,19 17,19.2238576 17,19.5 C17,19.7761424 16.7761424,20 16.5,20 L13.5,20 C13.2238576,20 13,19.7761424 13,19.5 C13,19.2238576 13.2238576,19 13.5,19 L16.5,19 Z"
            }
          )
        )
      )
    )
  );
};

GiftCardIcon.displayName = "GiftCardIcon";
GiftCardIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
GiftCardIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var MinusIcon = function MinusIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          fillRule: "nonzero"
        },
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M4,12.5 C3.72385763,12.5 3.5,12.2761424 3.5,12 C3.5,11.7238576 3.72385763,11.5 4,11.5 L20,11.5 C20.2761424,11.5 20.5,11.7238576 20.5,12 C20.5,12.2761424 20.2761424,12.5 20,12.5 L4,12.5 Z"
            }
          )
        )
      )
    )
  );
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
MinusIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var MobileDeviceIcon = function MobileDeviceIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M16.5,23 C17.3284271,23 18,22.3284271 18,21.5 L18,2.5 C18,1.67157288 17.3284271,1 16.5,1 L7.5,1 C6.67157288,1 6,1.67157288 6,2.5 L6,21.5 C6,22.3284271 6.67157288,23 7.5,23 L16.5,23 Z M16.5,24 L7.5,24 C6.11928813,24 5,22.8807119 5,21.5 L5,2.5 C5,1.11928813 6.11928813,7.21644966e-16 7.5,4.4408921e-16 L16.5,0 C17.8807119,-2.77555756e-16 19,1.11928813 19,2.5 L19,21.5 C19,22.8807119 17.8807119,24 16.5,24 Z M9.5,4 C9.22385763,4 9,3.77614237 9,3.5 C9,3.22385763 9.22385763,3 9.5,3 L14.5,3 C14.7761424,3 15,3.22385763 15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 Z"
            }
          )
        )
      )
    )
  );
};

MobileDeviceIcon.displayName = "MobileDeviceIcon";
MobileDeviceIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
MobileDeviceIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var MobileTicketIcon = function MobileTicketIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M6,20 L7,20 L7,8.5 C7,8.22385763 7.22385763,8 7.5,8 L10.5,8 C10.689386,8 10.8625176,8.10700119 10.9472136,8.2763932 L11,8.38196601 C11.189386,8.76073807 11.57652,9 12,9 C12.42348,9 12.810614,8.76073807 13,8.38196601 L13.0527864,8.2763932 C13.1374824,8.10700119 13.310614,8 13.5,8 L16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,20 L18,20 L18,2.5 C18,1.67157288 17.3284271,1 16.5,1 L7.5,1 C6.67157288,1 6,1.67157288 6,2.5 L6,20 Z M6,21 L6,21.5 C6,22.3284271 6.67157288,23 7.5,23 L16.5,23 C17.3284271,23 18,22.3284271 18,21.5 L18,21 L6,21 Z M8,12 L16,12 L16,9 L13.7989429,9 C13.4151015,9.61791491 12.7365719,10 12,10 C11.2634281,10 10.5848985,9.61791491 10.2010571,9 L8,9 L8,12 Z M16,13 L8,13 L8,20 L16,20 L16,13 Z M11.5,4 C11.2238576,4 11,3.77614237 11,3.5 C11,3.22385763 11.2238576,3 11.5,3 L14.5,3 C14.7761424,3 15,3.22385763 15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L11.5,4 Z M8.5,4 C8.22385763,4 8,3.77614237 8,3.5 C8,3.22385763 8.22385763,3 8.5,3 L9.5,3 C9.77614237,3 10,3.22385763 10,3.5 C10,3.77614237 9.77614237,4 9.5,4 L8.5,4 Z M16.5,24 L7.5,24 C6.11928813,24 5,22.8807119 5,21.5 L5,2.5 C5,1.11928813 6.11928813,7.21644966e-16 7.5,4.4408921e-16 L16.5,0 C17.8807119,-2.77555756e-16 19,1.11928813 19,2.5 L19,21.5 C19,22.8807119 17.8807119,24 16.5,24 Z"
          }
        )
      )
    )
  );
};

MobileTicketIcon.displayName = "MobileTicketIcon";
MobileTicketIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
MobileTicketIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var PauseIcon = function PauseIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M8.5,5 C8.22385763,5 8,5.22385763 8,5.5 L8,18.5 C8,18.7761424 8.22385763,19 8.5,19 L9.5,19 C9.77614237,19 10,18.7761424 10,18.5 L10,5.5 C10,5.22385763 9.77614237,5 9.5,5 L8.5,5 Z M8.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L8.5,20 C7.67157288,20 7,19.3284271 7,18.5 L7,5.5 C7,4.67157288 7.67157288,4 8.5,4 Z M14.5,5 C14.2238576,5 14,5.22385763 14,5.5 L14,18.5 C14,18.7761424 14.2238576,19 14.5,19 L15.5,19 C15.7761424,19 16,18.7761424 16,18.5 L16,5.5 C16,5.22385763 15.7761424,5 15.5,5 L14.5,5 Z M14.5,4 L15.5,4 C16.3284271,4 17,4.67157288 17,5.5 L17,18.5 C17,19.3284271 16.3284271,20 15.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z"
            }
          )
        )
      )
    )
  );
};

PauseIcon.displayName = "PauseIcon";
PauseIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
PauseIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var PhoneSupportIcon = function PhoneSupportIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M15,22 L15,23.5 C15,23.7761424 14.7761424,24 14.5,24 L9.5,24 C9.22385763,24 9,23.7761424 9,23.5 L9,20.5 C9,20.2238576 9.22385763,20 9.5,20 L14.5,20 C14.7761424,20 15,20.2238576 15,20.5 L15,21 L17.4951185,21 C18.3288037,21 19,20.3295796 19,19.5 L19,18 L18.5,18 C18.2238576,18 18,17.7761424 18,17.5 L18,7.5 C18,7.22385763 18.2238576,7 18.5,7 L18.9291111,7 C18.4438815,3.60770586 15.5264719,1 12,1 C8.47352809,1 5.55611852,3.60770586 5.07088886,7 L5.5,7 C5.77614237,7 6,7.22385763 6,7.5 L6,17.5 C6,17.7761424 5.77614237,18 5.5,18 L3,18 C1.34010996,18 2.27373675e-13,16.6634543 2.27373675e-13,15 L2.27373675e-13,10 C2.27373675e-13,8.34010996 1.33654573,7 3,7 L4.06189375,7 C4.55399184,3.05368842 7.92038235,0 12,0 C16.0796177,0 19.4460082,3.05368842 19.9381062,7 L21,7 C22.6634543,7 24,8.34010996 24,10 L24,15 C24,16.6634543 22.65989,18 21,18 L20,18 L20,19.5 C20,20.8821234 18.8808297,22 17.4951185,22 L15,22 Z M19,8 L19,17 L21,17 C22.1082006,17 23,16.1105725 23,15 L23,10 C23,8.89179941 22.1105725,8 21,8 L20,8 L19,8 Z M5,8 L4,8 L3,8 C1.88942753,8 1,8.89179941 1,10 L1,15 C1,16.1105725 1.89179941,17 3,17 L5,17 L5,8 Z M9,8.5 C9,8.22385763 9.22385763,8 9.5,8 C9.77614237,8 10,8.22385763 10,8.5 L10,10.5 C10,10.7761424 9.77614237,11 9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,8.5 Z M8.0527864,13.7236068 C7.92929178,13.4766175 8.02940395,13.176281 8.2763932,13.0527864 C8.52338245,12.9292918 8.82371897,13.029404 8.9472136,13.2763932 C9.04592874,13.4738235 9.27590074,13.7984899 9.64468192,14.1262953 C10.2604843,14.6736753 11.0355056,15 12,15 C12.9644944,15 13.7395157,14.6736753 14.3553181,14.1262953 C14.7240993,13.7984899 14.9540713,13.4738235 15.0527864,13.2763932 C15.176281,13.029404 15.4766175,12.9292918 15.7236068,13.0527864 C15.970596,13.176281 16.0707082,13.4766175 15.9472136,13.7236068 C15.7959287,14.0261765 15.4946507,14.4515101 15.0196819,14.8737047 C14.2292343,15.5763247 13.2230056,16 12,16 C10.7769944,16 9.77076568,15.5763247 8.98031808,14.8737047 C8.50534926,14.4515101 8.20407126,14.0261765 8.0527864,13.7236068 Z M14,8.5 C14,8.22385763 14.2238576,8 14.5,8 C14.7761424,8 15,8.22385763 15,8.5 L15,10.5 C15,10.7761424 14.7761424,11 14.5,11 C14.2238576,11 14,10.7761424 14,10.5 L14,8.5 Z M10,23 L14,23 L14,21 L10,21 L10,23 Z"
          }
        )
      )
    )
  );
};

PhoneSupportIcon.displayName = "PhoneSupportIcon";
PhoneSupportIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
PhoneSupportIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var PlayIcon = function PlayIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M7.75948907,4.84963048 C7.68126674,4.80213835 7.59151085,4.77702424 7.5,4.77702424 C7.22385763,4.77702424 7,5.00088186 7,5.27702424 L7,18.7229758 C7,18.8144866 7.02511411,18.9042425 7.07260624,18.9824648 C7.2159181,19.2185079 7.52344601,19.2936814 7.75948907,19.1503695 L18.8326256,12.4273938 C18.9012645,12.3857202 18.9588567,12.3281279 19.0005303,12.2594891 C19.1438422,12.023446 19.0686687,11.7159181 18.8326256,11.5726062 L7.75948907,4.84963048 Z M8.2784672,3.99484297 L19.3516037,10.7178187 C20.0597329,11.1477543 20.2852534,12.070338 19.8553178,12.7784672 C19.730297,12.9843838 19.5575204,13.1571605 19.3516037,13.2821813 L8.2784672,20.005157 C7.57033804,20.4350926 6.64775429,20.2095721 6.21781873,19.501443 C6.07534234,19.266776 6,18.9975083 6,18.7229758 L6,5.27702424 C6,4.44859711 6.67157288,3.77702424 7.5,3.77702424 C7.77453254,3.77702424 8.04380021,3.85236658 8.2784672,3.99484297 Z"
            }
          )
        )
      )
    )
  );
};

PlayIcon.displayName = "PlayIcon";
PlayIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
PlayIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var PlusIcon = function PlusIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          fillRule: "nonzero"
        },
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              d: "M4,12 L20,12",
              stroke: color
            },
            color !== "currentColor" && {
              strokeOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ),
        React__default.createElement(
          "path",
          _extends(
            {
              d: "M12,4 L12,20",
              stroke: color
            },
            color !== "currentColor" && {
              strokeOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        )
      )
    )
  );
};

PlusIcon.displayName = "PlusIcon";
PlusIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
PlusIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var SellTicketsIcon = function SellTicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M2.1001387,11.4177566 L0.947213595,13.7236068 C0.823718971,13.970596 0.523382451,14.0707082 0.276393202,13.9472136 C0.0294039535,13.823719 -0.0707082199,13.5233825 0.0527864045,13.2763932 L2.0527864,9.2763932 C2.20541095,8.97114411 2.61223279,8.90512601 2.85355339,9.14644661 L5.85355339,12.1464466 C6.04881554,12.3417088 6.04881554,12.6582912 5.85355339,12.8535534 C5.65829124,13.0488155 5.34170876,13.0488155 5.14644661,12.8535534 L3.02988506,10.7369918 C3.24556834,13.3879555 4.61707519,15.7833794 6.7657131,17.3222158 C6.99021684,17.4830035 7.04186891,17.7953439 6.88108121,18.0198477 C6.72029352,18.2443514 6.4079531,18.2960035 6.18344936,18.1352158 C3.96009194,16.5428659 2.48507121,14.1229044 2.1001387,11.4177566 Z M20.8639438,8.43122233 C20.120113,4.19311012 16.4178664,1 12,1 C8.5899099,1 5.52079255,2.91307264 3.98975898,5.89243916 C3.86354484,6.13804983 3.56212127,6.23483985 3.3165106,6.10862571 C3.07089993,5.98241157 2.97410991,5.680988 3.10032405,5.43537733 C4.801041,2.12580971 8.21144965,0 12,0 C16.7649827,0 20.7804615,3.34276045 21.7677374,7.84649129 L23.0527864,5.2763932 C23.176281,5.02940395 23.4766175,4.92929178 23.7236068,5.0527864 C23.970596,5.17628103 24.0707082,5.47661755 23.9472136,5.7236068 L21.9472136,9.7236068 C21.8098112,9.9984115 21.4593932,10.0854469 21.2093809,9.90686674 L17.7093809,7.40686674 C17.4846746,7.24636224 17.4326288,6.9340872 17.5931333,6.7093809 C17.7536378,6.48467461 18.0659128,6.43262877 18.2906191,6.59313326 L20.8639438,8.43122233 Z M18.9601551,17.131728 L14.7175144,12.8890873 L9.06066017,18.5459415 L13.3033009,22.7885822 L18.9601551,17.131728 Z M19.6672619,16.4246212 L21.7885822,14.3033009 L20.9393066,13.4540252 C20.230958,13.6195402 19.4809901,13.4099223 18.9601551,12.8890873 C18.4393201,12.3682523 18.2297022,11.6182844 18.3952172,10.9099358 L17.5459415,10.0606602 L15.4246212,12.1819805 L19.6672619,16.4246212 Z M12.9497475,23.8492424 L8,18.8994949 C7.80473785,18.7042328 7.80473785,18.3876503 8,18.1923882 L17.1923882,9 C17.3876503,8.80473785 17.7042328,8.80473785 17.8994949,9 L19.3137085,10.4142136 C19.4476246,10.5481297 19.4943859,10.7462135 19.4344968,10.9258808 L19.3971711,11.0378577 C19.263255,11.4396061 19.3678163,11.8825349 19.6672619,12.1819805 C19.9667075,12.4814261 20.4096363,12.5859874 20.8113847,12.4520713 L20.9233616,12.4147456 C21.1030289,12.3548565 21.3011127,12.4016178 21.4350288,12.5355339 L22.8492424,13.9497475 C23.0445046,14.1450096 23.0445046,14.4615921 22.8492424,14.6568542 L13.6568542,23.8492424 C13.4615921,24.0445046 13.1450096,24.0445046 12.9497475,23.8492424 Z"
            }
          )
        )
      )
    )
  );
};

SellTicketsIcon.displayName = "SellTicketsIcon";
SellTicketsIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
SellTicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var ShareIcon = function ShareIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("polygon", {
          transform:
            "translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ",
          points: "24 0 0 0 0 24 24 24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M3.08942708,17.1410498 C5.75641082,14.5548838 9.20630916,13 13.5,13 C13.7761424,13 14,13.2238576 14,13.5 L14,17.4187798 L22.6992374,10.024428 L14,3.5 L14,7.5 C14,7.77614237 13.7761424,8 13.5,8 C8.23779504,8 4.79391614,10.5046392 2.76288434,14.7171496 C2.07583933,16.1421318 1.60152459,17.6693506 1.30336586,19.2015439 C1.81409167,18.4968824 2.40798256,17.8018445 3.08942708,17.1410498 Z M3.78557292,17.8589502 C2.91299689,18.7050845 2.19301391,19.6121497 1.61732416,20.5181532 C1.41661014,20.834031 1.24857921,21.1265033 1.11213185,21.3877358 C1.03189816,21.5413456 0.980926507,21.6481858 0.958078667,21.7004094 C0.736989732,22.2057556 -0.019368632,22.033396 0.000318572826,21.4821542 C0.00459102746,21.3625255 0.0187071919,21.1469332 0.0483547723,20.848937 C0.0972918252,20.3570569 0.173165888,19.8101626 0.281738373,19.2217698 C0.59202891,17.5401953 1.10274089,15.8578499 1.86211566,14.2828504 C3.98494358,9.87994806 7.60216711,7.16443793 13,7.00722111 L13,2.5 C13,2.08797734 13.4703819,1.8527864 13.8,2.1 L23.8,9.6 C24.0565773,9.79243299 24.0681946,10.1732548 23.8238242,10.3809697 L13.8238242,18.8809697 C13.4990813,19.1570012 13,18.9262058 13,18.5 L13,14.007549 C9.21423571,14.1225778 6.17072631,15.5460742 3.78557292,17.8589502 Z"
            }
          )
        )
      )
    )
  );
};

ShareIcon.displayName = "ShareIcon";
ShareIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
ShareIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var StandardMailIcon = function StandardMailIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M18.9160973,16 C18.711543,16.5830835 18.1555194,17 17.4991283,17 L12,17 L12,23 L14.5,23 C14.7761424,23 15,23.2238576 15,23.5 C15,23.7761424 14.7761424,24 14.5,24 L6.5,24 C6.22385763,24 6,23.7761424 6,23.5 C6,23.2238576 6.22385763,23 6.5,23 L9,23 L9,17 L3.50087166,17 C2.67525418,17 2,16.3237743 2,15.5046024 L2,10.509763 C2,8.01666272 4.01408068,6 6.509763,6 L12.5,6 C12.7761424,6 13,6.22385763 13,6.5 C13,6.77614237 12.7761424,7 12.5,7 L6.509763,7 C4.56665243,7 3,8.56866087 3,10.509763 L3,15.5046024 C3,15.7718111 3.22786105,16 3.50087166,16 L17.4991283,16 C17.7783713,16 18,15.7790536 18,15.5046024 L18,7.49539757 C18,7.22809158 17.7724345,7 17.5,7 L16.5,7 C16.2238576,7 16,6.77614237 16,6.5 C16,6.22385763 16.2238576,6 16.5,6 L17.5,6 C18.3252368,6 19,6.67632306 19,7.49539757 L19,8 L21.5,8 C21.8042747,8 22.0380057,8.26949412 21.9949747,8.57071068 L20.9949747,15.5707107 C20.9597856,15.817035 20.7488252,16 20.5,16 L18.9160973,16 Z M19,15 L20.0663523,15 L20.9234952,9 L19,9 L19,15 Z M14,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,0.5 C9,0.223857625 9.22385763,0 9.5,0 L14.5,0 C14.7761424,0 15,0.223857625 15,0.5 L15,8.5 C15,8.77614237 14.7761424,9 14.5,9 C14.2238576,9 14,8.77614237 14,8.5 L14,4 Z M14,3 L14,1 L10,1 L10,3 L14,3 Z M11,17 L10,17 L10,23 L11,23 L11,17 Z"
          }
        )
      )
    )
  );
};

StandardMailIcon.displayName = "StandardMailIcon";
StandardMailIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
StandardMailIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var TransferTicketsIcon = function TransferTicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M3.01698513,5.25119384 C2.3933853,4.70145646 2,3.89666826 2,3 C2,1.34314575 3.34314575,0 5,0 C6.65685425,0 8,1.34314575 8,3 C8,3.89643527 7.60681911,4.70103823 6.98350093,5.25076526 C8.73926022,5.86467842 10,7.53710878 10,9.5 L10,13.5 C10,13.7761424 9.77614237,14 9.5,14 L0.5,14 C0.223857625,14 -2.27373675e-13,13.7761424 -2.27373675e-13,13.5 L-2.27373675e-13,9.5 C-2.27373675e-13,7.53745723 1.26292965,5.86543384 3.01698513,5.25119384 Z M1,13 L9,13 L9,9.5 C9,7.56985763 7.43138226,6 5.5000567,6 L4.4999433,6 C2.57258184,6 1,7.57021309 1,9.5 L1,13 Z M5,5 C6.1045695,5 7,4.1045695 7,3 C7,1.8954305 6.1045695,1 5,1 C3.8954305,1 3,1.8954305 3,3 C3,4.1045695 3.8954305,5 5,5 Z M11.7046552,4.40349138 C11.5805665,4.31250785 11.5,4.16566259 11.5,4 C11.5,3.83433741 11.5805665,3.68749215 11.7046552,3.59650862 L15.7,0.6 C15.9209139,0.434314575 16.2343146,0.4790861 16.4,0.7 C16.5656854,0.9209139 16.5209139,1.23431458 16.3,1.4 L13.5,3.5 L15,3.5 C19.1421356,3.5 22.5,6.85786438 22.5,11 C22.5,11.2761424 22.2761424,11.5 22,11.5 C21.7238576,11.5 21.5,11.2761424 21.5,11 C21.5,7.41014913 18.5898509,4.5 15,4.5 L13.5,4.5 L16.3,6.6 C16.5209139,6.76568542 16.5656854,7.0790861 16.4,7.3 C16.2343146,7.5209139 15.9209139,7.56568542 15.7,7.4 L11.7046552,4.40349138 Z"
          }
        )
      ),
      React__default.createElement(
        "g",
        _extends(
          {
            transform:
              "translate(15.424621, 16.424621) rotate(45.000000) translate(-15.424621, -16.424621) translate(11.924621, 9.424621)",
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero"
          }
        ),
        React__default.createElement("path", {
          d:
            "M6.5,5 L0.5,5 L0.5,13 L6.5,13 L6.5,5 Z M6.5,4 L6.5,1 L5.29894291,1 C4.91510153,1.61791491 4.2365719,2 3.5,2 C2.7634281,2 2.08489847,1.61791491 1.70105709,1 L0.5,1 L0.5,4 L6.5,4 Z M7,14 L0,14 C-0.276142375,14 -0.5,13.7761424 -0.5,13.5 L-0.5,0.5 C-0.5,0.223857625 -0.276142375,4.54747351e-13 0,4.54747351e-13 L2,4.54747351e-13 C2.18938603,4.54747351e-13 2.36251759,0.107001188 2.4472136,0.276393202 L2.5,0.381966011 C2.68938603,0.76073807 3.07651996,1 3.5,1 C3.92348004,1 4.31061397,0.76073807 4.5,0.381966011 L4.5527864,0.276393202 C4.63748241,0.107001188 4.81061397,4.54747351e-13 5,4.54747351e-13 L7,4.54747351e-13 C7.27614237,4.54747351e-13 7.5,0.223857625 7.5,0.5 L7.5,13.5 C7.5,13.7761424 7.27614237,14 7,14 Z"
        })
      )
    )
  );
};

TransferTicketsIcon.displayName = "TransferTicketsIcon";
TransferTicketsIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
TransferTicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var UpgradeTicketsIcon = function UpgradeTicketsIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "path",
        _extends(
          {
            fill: color
          },
          color !== "currentColor" && {
            fillOpacity: ".65"
          },
          {
            fillRule: "nonzero",
            d:
              "M7.5,16 C7.77614237,16 8,16.2238576 8,16.5 C8,16.7761424 7.77614237,17 7.5,17 L5.5,17 C2.46243388,17 -2.31448194e-13,14.5375661 -2.31814568e-13,11.5 C-2.32180941e-13,8.46243388 2.46243388,6 5.5,6 C5.77614237,6 6,6.22385763 6,6.5 C6,6.77614237 5.77614237,7 5.5,7 C3.01471863,7 1,9.01471863 1,11.5 C1,13.9852814 3.01471863,16 5.5,16 L7.5,16 Z M12.8967416,6.38757732 L13.3320123,9.06143194 C13.3650691,9.25129115 13.3139752,9.44640418 13.19168,9.59556317 C13.0681357,9.74624564 12.8843245,9.83483208 12.6985446,9.83673282 C12.5859834,9.84004315 12.4745149,9.81439757 12.374178,9.76203493 L9.99998805,8.51931007 L7.63563209,9.75675998 C7.41053726,9.88104642 7.13408637,9.86289364 6.92710801,9.71048826 C6.72249422,9.559824 6.62263496,9.30521646 6.66705787,9.06685632 L7.10324039,6.38757313 L5.19664494,4.48322487 C5.01900427,4.30763285 4.95551044,4.04688856 5.0316899,3.80932273 C5.10840438,3.57008845 5.31400362,3.39432904 5.55985949,3.35786479 L8.21034662,2.94650349 L9.41453245,0.517974753 C9.52774451,0.299282381 9.75317723,0.161214047 10,0.161214047 C10.2468228,0.161214047 10.4722555,0.299282381 10.5893981,0.525731954 L11.7896619,2.94650581 L14.4368351,3.35736309 C14.6859964,3.39432904 14.8915956,3.57008845 14.9683101,3.80932273 C15.0444896,4.04688856 14.9809957,4.30763285 14.8052008,4.48139094 L12.8967416,6.38757732 Z M11.8685536,6.29528105 C11.8426971,6.13645573 11.8948612,5.97489282 12.008714,5.86117566 L13.6280298,4.24379565 L11.3801593,3.89492132 C11.2195512,3.8699946 11.0810804,3.76855836 11.0088819,3.62294352 L10.0000325,1.58809614 L8.99111807,3.62294352 C8.91891958,3.76855836 8.78044879,3.8699946 8.61984068,3.89492132 L6.37196588,4.24378758 L7.99127134,5.86117702 C8.10512317,5.97489413 8.15728672,6.1364564 8.13143035,6.29528105 L7.76233589,8.56187203 L9.76812806,7.51197804 C9.91336296,7.43595757 10.086637,7.43595757 10.2318719,7.51197804 L12.23754,8.56180741 L11.8685536,6.29528105 Z M18.9601551,17.131728 L14.7175144,12.8890873 L9.06066017,18.5459415 L13.3033009,22.7885822 L18.9601551,17.131728 Z M19.6672619,16.4246212 L21.7885822,14.3033009 L20.9393066,13.4540252 C20.230958,13.6195402 19.4809901,13.4099223 18.9601551,12.8890873 C18.4393201,12.3682523 18.2297022,11.6182844 18.3952172,10.9099358 L17.5459415,10.0606602 L15.4246212,12.1819805 L19.6672619,16.4246212 Z M12.9497475,23.8492424 L8,18.8994949 C7.80473785,18.7042328 7.80473785,18.3876503 8,18.1923882 L17.1923882,9 C17.3876503,8.80473785 17.7042328,8.80473785 17.8994949,9 L19.3137085,10.4142136 C19.4476246,10.5481297 19.4943859,10.7462135 19.4344968,10.9258808 L19.3971711,11.0378577 C19.263255,11.4396061 19.3678163,11.8825349 19.6672619,12.1819805 C19.9667075,12.4814261 20.4096363,12.5859874 20.8113847,12.4520713 L20.9233616,12.4147456 C21.1030289,12.3548565 21.3011127,12.4016178 21.4350288,12.5355339 L22.8492424,13.9497475 C23.0445046,14.1450096 23.0445046,14.4615921 22.8492424,14.6568542 L13.6568542,23.8492424 C13.4615921,24.0445046 13.1450096,24.0445046 12.9497475,23.8492424 Z"
          }
        )
      )
    )
  );
};

UpgradeTicketsIcon.displayName = "UpgradeTicketsIcon";
UpgradeTicketsIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
UpgradeTicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var VolumeHighIcon = function VolumeHighIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-204.000000, -178.000000)"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(204.000000, 176.000000)"
          },
          React__default.createElement(
            "g",
            null,
            React__default.createElement("rect", {
              x: "0",
              y: "0",
              width: "24",
              height: "24"
            }),
            React__default.createElement(
              "path",
              _extends(
                {
                  fill: color
                },
                color !== "currentColor" && {
                  fillOpacity: ".65"
                },
                {
                  fillRule: "nonzero",
                  d:
                    "M7.29289322,7 L12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 2.52908805e-13,15.8807119 2.54019028e-13,14.5 L3.3173464e-13,9.5 C3.32844863e-13,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 Z M7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 L7.85355339,7.85355339 Z M16.9160251,15.7773501 C16.7628489,16.0071144 16.4524142,16.0692014 16.2226499,15.9160251 C15.9928856,15.7628489 15.9307986,15.4524142 16.0839749,15.2226499 C16.6942954,14.307169 17,13.2372031 17,12 C17,10.7627969 16.6942954,9.69283097 16.0839749,8.7773501 C15.9307986,8.54758575 15.9928856,8.23715108 16.2226499,8.08397485 C16.4524142,7.93079862 16.7628489,7.99288556 16.9160251,8.2226499 C17.6390379,9.30716903 18,10.5705364 18,12 C18,13.4294636 17.6390379,14.692831 16.9160251,15.7773501 Z M18.8535534,17.8535534 C18.6582912,18.0488155 18.3417088,18.0488155 18.1464466,17.8535534 C17.9511845,17.6582912 17.9511845,17.3417088 18.1464466,17.1464466 C19.3798825,15.9130107 20,14.2076876 20,12 C20,9.79231245 19.3798825,8.08698926 18.1464466,6.85355339 C17.9511845,6.65829124 17.9511845,6.34170876 18.1464466,6.14644661 C18.3417088,5.95118446 18.6582912,5.95118446 18.8535534,6.14644661 C20.2867842,7.57967741 21,9.54102088 21,12 C21,14.4589791 20.2867842,16.4203226 18.8535534,17.8535534 Z M20.8535534,19.8535534 C20.6582912,20.0488155 20.3417088,20.0488155 20.1464466,19.8535534 C19.9511845,19.6582912 19.9511845,19.3417088 20.1464466,19.1464466 C22.0510831,17.2418101 23,14.8695179 23,12 C23,9.12877021 22.0664065,6.75523722 20.1934767,4.85057071 C19.9998618,4.65367506 20.0025214,4.33710374 20.1994171,4.14348889 C20.3963127,3.94987403 20.712884,3.95253363 20.9064989,4.14942929 C22.9669187,6.24476278 24,8.87122979 24,12 C24,15.1304821 22.9489169,17.7581899 20.8535534,19.8535534 Z"
                }
              )
            )
          )
        )
      )
    )
  );
};

VolumeHighIcon.displayName = "VolumeHighIcon";
VolumeHighIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
VolumeHighIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var VolumeLowIcon = function VolumeLowIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-117.000000, -179.000000)"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(117.000000, 177.000000)"
          },
          React__default.createElement(
            "g",
            null,
            React__default.createElement("rect", {
              x: "0",
              y: "0",
              width: "24",
              height: "24"
            }),
            React__default.createElement(
              "path",
              _extends(
                {
                  fill: color
                },
                color !== "currentColor" && {
                  fillOpacity: ".65"
                },
                {
                  fillRule: "nonzero",
                  d:
                    "M7.29289322,7 L12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 -7.58837437e-14,15.8807119 -7.72715225e-14,14.5 L-9.54791801e-15,9.5 C-9.68669589e-15,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 Z M12,3.70710678 L7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 Z M16.9160251,15.7773501 C16.7628489,16.0071144 16.4524142,16.0692014 16.2226499,15.9160251 C15.9928856,15.7628489 15.9307986,15.4524142 16.0839749,15.2226499 C16.6942954,14.307169 17,13.2372031 17,12 C17,10.7627969 16.6942954,9.69283097 16.0839749,8.7773501 C15.9307986,8.54758575 15.9928856,8.23715108 16.2226499,8.08397485 C16.4524142,7.93079862 16.7628489,7.99288556 16.9160251,8.2226499 C17.6390379,9.30716903 18,10.5705364 18,12 C18,13.4294636 17.6390379,14.692831 16.9160251,15.7773501 Z"
                }
              )
            )
          )
        )
      )
    )
  );
};

VolumeLowIcon.displayName = "VolumeLowIcon";
VolumeLowIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
VolumeLowIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var VolumeMediumIcon = function VolumeMediumIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-161.000000, -179.000000)"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(161.000000, 177.000000)"
          },
          React__default.createElement(
            "g",
            null,
            React__default.createElement("rect", {
              x: "0",
              y: "0",
              width: "24",
              height: "24"
            }),
            React__default.createElement(
              "path",
              _extends(
                {
                  fill: color
                },
                color !== "currentColor" && {
                  fillOpacity: ".65"
                },
                {
                  fillRule: "nonzero",
                  d:
                    "M7.29289322,7 L12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 -7.71327446e-14,15.8807119 -7.72715225e-14,14.5 L-8.43769499e-15,9.5 C-8.02136135e-15,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 Z M7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 L7.85355339,7.85355339 Z M16.9160251,15.7773501 C16.7628489,16.0071144 16.4524142,16.0692014 16.2226499,15.9160251 C15.9928856,15.7628489 15.9307986,15.4524142 16.0839749,15.2226499 C16.6942954,14.307169 17,13.2372031 17,12 C17,10.7627969 16.6942954,9.69283097 16.0839749,8.7773501 C15.9307986,8.54758575 15.9928856,8.23715108 16.2226499,8.08397485 C16.4524142,7.93079862 16.7628489,7.99288556 16.9160251,8.2226499 C17.6390379,9.30716903 18,10.5705364 18,12 C18,13.4294636 17.6390379,14.692831 16.9160251,15.7773501 Z M18.8535534,17.8535534 C18.6582912,18.0488155 18.3417088,18.0488155 18.1464466,17.8535534 C17.9511845,17.6582912 17.9511845,17.3417088 18.1464466,17.1464466 C19.3798825,15.9130107 20,14.2076876 20,12 C20,9.79231245 19.3798825,8.08698926 18.1464466,6.85355339 C17.9511845,6.65829124 17.9511845,6.34170876 18.1464466,6.14644661 C18.3417088,5.95118446 18.6582912,5.95118446 18.8535534,6.14644661 C20.2867842,7.57967741 21,9.54102088 21,12 C21,14.4589791 20.2867842,16.4203226 18.8535534,17.8535534 Z"
                }
              )
            )
          )
        )
      )
    )
  );
};

VolumeMediumIcon.displayName = "VolumeMediumIcon";
VolumeMediumIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
VolumeMediumIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var VolumeMuteIcon = function VolumeMuteIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-62.000000, -179.000000)"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(62.000000, 177.000000)"
          },
          React__default.createElement(
            "g",
            null,
            React__default.createElement("rect", {
              x: "0",
              y: "0",
              width: "24",
              height: "24"
            }),
            React__default.createElement(
              "path",
              _extends(
                {
                  fill: color
                },
                color !== "currentColor" && {
                  fillOpacity: ".65"
                },
                {
                  fillRule: "nonzero",
                  d:
                    "M19.2928932,12 L16.1464466,8.85355339 C15.9511845,8.65829124 15.9511845,8.34170876 16.1464466,8.14644661 C16.3417088,7.95118446 16.6582912,7.95118446 16.8535534,8.14644661 L20,11.2928932 L23.1464466,8.14644661 C23.3417088,7.95118446 23.6582912,7.95118446 23.8535534,8.14644661 C24.0488155,8.34170876 24.0488155,8.65829124 23.8535534,8.85355339 L20.7071068,12 L23.8535534,15.1464466 C24.0488155,15.3417088 24.0488155,15.6582912 23.8535534,15.8535534 C23.6582912,16.0488155 23.3417088,16.0488155 23.1464466,15.8535534 L20,12.7071068 L16.8535534,15.8535534 C16.6582912,16.0488155 16.3417088,16.0488155 16.1464466,15.8535534 C15.9511845,15.6582912 15.9511845,15.3417088 16.1464466,15.1464466 L19.2928932,12 Z M12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 2.67064149e-13,15.8807119 2.6567637e-13,14.5 L3.34510197e-13,9.5 C3.34371419e-13,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 L12.1464466,2.14644661 Z M7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 L7.85355339,7.85355339 Z"
                }
              )
            ),
            React__default.createElement("g", {
              transform: "translate(16.000000, 8.000000)"
            })
          )
        )
      )
    )
  );
};

VolumeMuteIcon.displayName = "VolumeMuteIcon";
VolumeMuteIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
VolumeMuteIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var WillCallIcon = function WillCallIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement(
        "g",
        null,
        React__default.createElement("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24"
        }),
        React__default.createElement(
          "path",
          _extends(
            {
              fill: color
            },
            color !== "currentColor" && {
              fillOpacity: ".65"
            },
            {
              fillRule: "nonzero",
              d:
                "M3.87323358,7.3883736 C2.74788573,6.68054288 2,5.42761048 2,4 C2,1.790861 3.790861,0 6,0 C8.209139,0 10,1.790861 10,4 C10,5.42720203 9.25254216,6.67982593 8.12773223,7.38776592 C10.3912064,8.24549131 12,10.43197 12,12.9945942 L12,14 L14,14 L14,10.5 C14,8.70204328 15.0572708,7.14911997 16.5826721,6.42858946 C15.6294871,5.80327695 15,4.72515077 15,3.5 C15,1.56700338 16.5670034,0 18.5,0 C20.4329966,0 22,1.56700338 22,3.5 C22,4.7251273 21.370537,5.80323565 20.4173827,6.42855352 C21.9432609,7.14932166 23,8.70293098 23,10.5 L23,14 L23.5,14 C23.7761424,14 24,14.2238576 24,14.5 C24,14.7761424 23.7761424,15 23.5,15 L12,15 L12,16.5 C12,16.7761424 11.7761424,17 11.5,17 L8.9655596,17 L8.49872935,23.5356235 C8.48003987,23.7972762 8.26231933,24 8,24 L4,24 C3.73768067,24 3.51996013,23.7972762 3.50127065,23.5356235 L3.0344404,17 L0.5,17 C0.223857625,17 0,16.7761424 0,16.5 L0,12.9945942 C0,10.4342324 1.6110278,8.24689864 3.87323358,7.3883736 Z M22,14 L22,10.5 C22,8.56985922 20.4313584,7 18.5,7 C16.5698592,7 15,8.56864156 15,10.5 L15,14 L22,14 Z M18.5,6 C19.8807119,6 21,4.88071187 21,3.5 C21,2.11928813 19.8807119,1 18.5,1 C17.1192881,1 16,2.11928813 16,3.5 C16,4.88071187 17.1192881,6 18.5,6 Z M8.00127065,16.4643765 C8.01996013,16.2027238 8.23768067,16 8.5,16 L11,16 L11,12.9945942 C11,10.2358023 8.76179428,8 6,8 C3.24242568,8 1,10.238484 1,12.9945942 L1,16 L3.5,16 C3.76231933,16 3.98003987,16.2027238 3.99872935,16.4643765 L4.4655596,23 L7.5344404,23 L8.00127065,16.4643765 Z M6,7 C7.65685425,7 9,5.65685425 9,4 C9,2.34314575 7.65685425,1 6,1 C4.34314575,1 3,2.34314575 3,4 C3,5.65685425 4.34314575,7 6,7 Z"
            }
          )
        )
      )
    )
  );
};

WillCallIcon.displayName = "WillCallIcon";
WillCallIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
WillCallIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var RefreshIcon = function RefreshIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "evenodd"
      },
      React__default.createElement("path", {
        d: "M1 0h23.543v23.395H1z"
      }),
      React__default.createElement(
        "path",
        _extends(
          {
            stroke: color
          },
          color !== "currentColor" && {
            strokeOpacity: ".65"
          },
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d:
              "M22.13 1.66l-.383 7.3-7.232-2.575m6.492 1.675c-1.51-3.893-5.371-6.662-9.897-6.662-5.84 0-10.574 4.611-10.574 10.3 0 5.688 4.734 10.3 10.574 10.3 3.582 0 6.748-1.735 8.661-4.39"
          }
        )
      )
    )
  );
};

RefreshIcon.displayName = "RefreshIcon";
RefreshIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
RefreshIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var FraudulentActivityIcon = function FraudulentActivityIcon(_ref) {
  var children = _ref.children,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["children", "color"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    children,
    React__default.createElement(
      "g",
      _extends(
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        color !== "currentColor" && {
          fillOpacity: ".65"
        }
      ),
      React__default.createElement(
        "g",
        {
          transform: "translate(-196.000000, -140.000000)",
          fill: color,
          fillRule: "nonzero"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(196.000000, 140.000000)"
          },
          React__default.createElement("path", {
            d:
              "M15,14 L15,12.5 C15,10.5670034 16.5670034,9 18.5,9 C20.4329966,9 22,10.5670034 22,12.5 L22,14 L22.5,14 C23.3284271,14 24,14.6715729 24,15.5 L24,22.5 C24,23.3284271 23.3284271,24 22.5,24 L14.5,24 C13.6715729,24 13,23.3284271 13,22.5 L13,15.5 C13,14.6715729 13.6715729,14 14.5,14 L15,14 Z M16,14 L21,14 L21,12.5 C21,11.1192881 19.8807119,10 18.5,10 C17.1192881,10 16,11.1192881 16,12.5 L16,14 Z M15.5,15 L14.5,15 C14.2238576,15 14,15.2238576 14,15.5 L14,22.5 C14,22.7761424 14.2238576,23 14.5,23 L22.5,23 C22.7761424,23 23,22.7761424 23,22.5 L23,15.5 C23,15.2238576 22.7761424,15 22.5,15 L21.5,15 L15.5,15 Z M22,5 L1,5 L1,17.5025781 C1,18.331522 1.66998831,19 2.49961498,19 L10.5,19 C10.7761424,19 11,19.2238576 11,19.5 C11,19.7761424 10.7761424,20 10.5,20 L2.49961498,20 C1.11820813,20 0,18.8843126 0,17.5025781 L0,2.49742191 C0,1.1179317 1.11372966,0 2.491155,0 L20.508845,0 C21.8874741,0 23,1.11336813 23,2.49810135 L23,8.5 C23,8.77614237 22.7761424,9 22.5,9 C22.2238576,9 22,8.77614237 22,8.5 L22,5 Z M1,4 L22,4 L22,2.49810135 C22,1.66548355 21.3350199,1 20.508845,1 L2.491155,1 C1.66685917,1 1,1.66937519 1,2.49742191 L1,4 Z M18,17.5 C18,17.2238576 18.2238576,17 18.5,17 C18.7761424,17 19,17.2238576 19,17.5 L19,20.5 C19,20.7761424 18.7761424,21 18.5,21 C18.2238576,21 18,20.7761424 18,20.5 L18,17.5 Z M3.5,2 C3.776,2 4,2.225 4,2.5 C4,2.776 3.776,3 3.5,3 C3.224,3 3,2.776 3,2.5 C3,2.225 3.224,2 3.5,2 Z M5.5,2 C5.776,2 6,2.225 6,2.5 C6,2.776 5.776,3 5.5,3 C5.224,3 5,2.776 5,2.5 C5,2.225 5.224,2 5.5,2 Z M7.5,2 C7.776,2 8,2.225 8,2.5 C8,2.776 7.776,3 7.5,3 C7.224,3 7,2.776 7,2.5 C7,2.225 7.224,2 7.5,2 Z"
          })
        )
      )
    )
  );
};

FraudulentActivityIcon.displayName = "FraudulentActivityIcon";
FraudulentActivityIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string
};
FraudulentActivityIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

var printIcons = {
  small: function small(_ref) {
    var color = _ref.color,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["color", "children"]);

    return React__default.createElement(
      "svg",
      _extends({}, props, {
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          null,
          React__default.createElement(
            "g",
            null,
            React__default.createElement("rect", {
              x: "0",
              y: "0",
              width: "16",
              height: "16"
            }),
            React__default.createElement(
              "path",
              _extends(
                {
                  d:
                    "M12.5,3 L9.5,3 C9.22385763,3 9,2.77614237 9,2.5 L9,1 L4,1 L4,2.5 C4,2.77614237 3.77614237,3 3.5,3 C3.22385763,3 3,2.77614237 3,2.5 L3,0.5 C3,0.223857625 3.22385763,-5.86197757e-14 3.5,-5.86197757e-14 L10.5,-5.86197757e-14 C10.6326082,-5.86197757e-14 10.7597852,0.0526784202 10.8535534,0.146446609 L12.8535534,2.14644661 C13.0488155,2.34170876 13.0488155,2.65829124 12.8535534,2.85355339 C12.7559223,2.95118446 12.6279612,3 12.5,3 Z M11.2928932,2 L10.2928932,1 L10,1 L10,2 L11.2928932,2 Z M4,13 L2.5,13 C1.11696918,13 7.99360578e-14,11.8871288 7.99360578e-14,10.5018986 L7.99360578e-14,6.49810135 C7.99360578e-14,5.11927853 1.1164151,4 2.49188419,4 L13.5081158,4 C14.8871076,4 16,5.11332718 16,6.49810135 L16,10.5018986 C16,11.8840345 14.885945,13 13.5,13 L12,13 L12,15.5 C12,15.7761424 11.7761424,16 11.5,16 L4.5,16 C4.22385763,16 4,15.7761424 4,15.5 L4,13 Z M12,12 L13.5,12 C14.3332764,12 15,11.332133 15,10.5018986 L15,6.49810135 C15,5.66552451 14.3347354,5 13.5081158,5 L2.49188419,5 C1.66927409,5 1,5.67099067 1,6.49810135 L1,10.5018986 C1,11.3340195 1.66843281,12 2.5,12 L4,12 L4,10.5 C4,10.2238576 4.22385763,10 4.5,10 L11.5,10 C11.7761424,10 12,10.2238576 12,10.5 L12,12 Z M5,15 L11,15 L11,11 L5,11 L5,15 Z M2.5,8 C2.22385763,8 2,7.77614237 2,7.5 C2,7.22385763 2.22385763,7 2.5,7 L4.5,7 C4.77614237,7 5,7.22385763 5,7.5 C5,7.77614237 4.77614237,8 4.5,8 L2.5,8 Z"
                },
                color !== "currentColor" && {
                  fillOpacity: ".65"
                },
                {
                  fill: color,
                  fillRule: "nonzero"
                }
              )
            )
          )
        )
      )
    );
  },
  large: function large(_ref2) {
    var color = _ref2.color,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["color", "children"]);

    return React__default.createElement(
      "svg",
      _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children,
      React__default.createElement(
        "g",
        {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(-274.000000, -187.000000)"
          },
          React__default.createElement(
            "g",
            {
              transform: "translate(274.000000, 187.000000)"
            },
            React__default.createElement(
              "g",
              null,
              React__default.createElement("rect", {
                x: "0",
                y: "0",
                width: "24",
                height: "24"
              }),
              React__default.createElement(
                "path",
                _extends(
                  {
                    d:
                      "M5,17 L2.5,17 C1.12385763,17 0,15.8761424 0,14.5 L0,8.5 C0,7.12316384 1.12355127,6 2.5,6 L21.5,6 C22.8764487,6 24,7.12316384 24,8.5 L24,14.5 C24,15.8761424 22.8761424,17 21.5,17 L19,17 L19,23.5 C19,23.7761424 18.7761424,24 18.5,24 L5.5,24 C5.22385763,24 5,23.7761424 5,23.5 L5,17 Z M19,16 L21.5,16 C22.3238576,16 23,15.3238576 23,14.5 L23,8.5 C23,7.67552581 22.3242412,7 21.5,7 L2.5,7 C1.67575883,7 1,7.67552581 1,8.5 L1,14.5 C1,15.3238576 1.67614237,16 2.5,16 L5,16 L5,13.5 C5,13.2238576 5.22385763,13 5.5,13 L18.5,13 C18.7761424,13 19,13.2238576 19,13.5 L19,16 Z M6,1 L6,4.5 C6,4.77614237 5.77614237,5 5.5,5 C5.22385763,5 5,4.77614237 5,4.5 L5,0.5 C5,0.223857625 5.22385763,0 5.5,0 L15.5,0 C15.6326082,0 15.7597852,0.0526784202 15.8535534,0.146446609 L18.8535534,3.14644661 C18.9473216,3.2402148 19,3.36739176 19,3.5 L19,4.5 C19,4.77614237 18.7761424,5 18.5,5 C18.2238576,5 18,4.77614237 18,4.5 L18,3.70710678 L15.2928932,1 L6,1 Z M6,23 L18,23 L18,14 L6,14 L6,23 Z M5,10.5 C5,10.2231424 4.77685763,10 4.5,10 C4.22371954,10 4,10.223565 4,10.5 C4,10.7758576 4.22414237,11 4.5,11 C4.77643497,11 5,10.7762805 5,10.5 Z M6,10.5 C6,11.3284106 5.32887443,12 4.5,12 C3.67185763,12 3,11.3281424 3,10.5 C3,9.67112557 3.67158938,9 4.5,9 C5.32914237,9 6,9.67085763 6,10.5 Z M16,3 L18.5,3 C18.7761424,3 19,3.22385763 19,3.5 C19,3.77614237 18.7761424,4 18.5,4 L15.5,4 C15.2238576,4 15,3.77614237 15,3.5 L15,0.5 C15,0.223857625 15.2238576,0 15.5,0 C15.7761424,0 16,0.223857625 16,0.5 L16,3 Z",
                    fill: color
                  },
                  color !== "currentColor" && {
                    fillOpacity: ".65"
                  },
                  {
                    fillRule: "nonzero"
                  }
                )
              )
            )
          )
        )
      )
    );
  }
};

var PrintIcon = function PrintIcon(_ref3) {
  var size = _ref3.size,
    rest = _objectWithoutProperties(_ref3, ["size"]);

  return printIcons[size](rest);
};

PrintIcon.displayName = "PrintIcon";
PrintIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  color: PropTypes.PropTypes.string,
  size: PropTypes.PropTypes.oneOf(smallLarge)
};
PrintIcon.defaultProps = {
  children: null,
  color: themes.global.gray01,
  size: smallLarge[0]
};

var LaunchIcon = function LaunchIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["size", "color", "children"]);

  return React__default.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        fill: color
      },
      props
    ),
    children,
    React__default.createElement("path", {
      fillRule: "evenodd",
      d:
        "M13.651 0c.096 0 .178.034.246.103A.344.344 0 0 1 14 .355v3.5a.336.336 0 0 1-.103.247.336.336 0 0 1-.246.102.336.336 0 0 1-.246-.102.336.336 0 0 1-.102-.247V1.224L5.496 9.003a.35.35 0 0 1-.595-.25.34.34 0 0 1 .103-.25L12.83.705h-2.68a.336.336 0 0 1-.246-.102.336.336 0 0 1-.102-.247c0-.1.034-.184.102-.252A.336.336 0 0 1 10.151 0h3.5zm-2.098 14h-10.5c-.292 0-.54-.103-.745-.308A1.007 1.007 0 0 1 0 12.954v-10.5c0-.292.103-.54.308-.745.205-.205.453-.308.745-.308h7a.34.34 0 0 1 .246.103c.068.068.102.15.102.246 0 .1-.034.185-.102.253a.336.336 0 0 1-.246.102h-7c-.1 0-.185.035-.253.103a.336.336 0 0 0-.103.246v10.5c0 .096.034.178.103.246a.344.344 0 0 0 .253.103h10.5a.336.336 0 0 0 .246-.103.336.336 0 0 0 .102-.246v-7c0-.096.035-.178.103-.246a.336.336 0 0 1 .246-.103c.096 0 .178.035.246.103.068.068.103.15.103.246v7c0 .287-.103.533-.308.738a1.007 1.007 0 0 1-.738.308z"
    })
  );
};

LaunchIcon.displayName = "LaunchIcon";
LaunchIcon.propTypes = {
  size: PropTypes.PropTypes.number,
  color: PropTypes.PropTypes.string,
  children: PropTypes.PropTypes.node
};
LaunchIcon.defaultProps = {
  size: 14,
  color: "currentcolor",
  children: null
};

var playCircularIcons = {
  small: function small(_ref) {
    var children = _ref.children,
      circleColor = _ref.circleColor,
      arrowColor = _ref.arrowColor,
      props = _objectWithoutProperties(_ref, [
        "children",
        "circleColor",
        "arrowColor"
      ]);

    return React__default.createElement(
      "svg",
      _extends(
        {
          className: "icon--play-circular icon--play-circular-small",
          xmlns: "http://www.w3.org/2000/svg",
          width: "48",
          height: "48"
        },
        props
      ),
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M1 1h46v46H1z"
        }),
        React__default.createElement("circle", {
          cx: "24",
          cy: "24",
          r: "22.042",
          fill: circleColor,
          fillOpacity: ".1",
          stroke: arrowColor,
          strokeWidth: "1.917"
        }),
        React__default.createElement("path", {
          fill: arrowColor,
          stroke: arrowColor,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.917",
          d: "M19.208 15.375L32.625 24l-13.417 8.625z"
        })
      ),
      children
    );
  },
  large: function large(_ref2) {
    var children = _ref2.children,
      circleColor = _ref2.circleColor,
      arrowColor = _ref2.arrowColor,
      props = _objectWithoutProperties(_ref2, [
        "children",
        "circleColor",
        "arrowColor"
      ]);

    return React__default.createElement(
      "svg",
      _extends(
        {
          className: "icon--play-circular icon--play-circular-large",
          xmlns: "http://www.w3.org/2000/svg",
          width: "120",
          height: "120"
        },
        props
      ),
      React__default.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd"
        },
        React__default.createElement("path", {
          d: "M10 10h100v100H10z"
        }),
        React__default.createElement("circle", {
          cx: "60",
          cy: "60",
          r: "47.917",
          fill: circleColor,
          fillOpacity: ".1",
          stroke: arrowColor,
          strokeWidth: "4.167"
        }),
        React__default.createElement("path", {
          fill: arrowColor,
          stroke: arrowColor,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "4.167",
          d: "M49.583 41.25L78.75 60 49.583 78.75z"
        })
      ),
      children
    );
  }
};

var PlayCircularIcon = function PlayCircularIcon(_ref3) {
  var size = _ref3.size,
    rest = _objectWithoutProperties(_ref3, ["size"]);

  return playCircularIcons[size](rest);
};

PlayCircularIcon.displayName = "PlayCircularIcon";
PlayCircularIcon.propTypes = {
  children: PropTypes.PropTypes.node,
  circleColor: PropTypes.PropTypes.string,
  arrowColor: PropTypes.PropTypes.string,
  size: PropTypes.PropTypes.oneOf(SIZES_SL)
};
PlayCircularIcon.defaultProps = {
  children: null,
  circleColor: themes.global.dark.base,
  arrowColor: themes.global.white.base,
  size: "small"
};

var DayTileOverflowButtonContainer = styled__default.div.withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowButtonContainer",
  componentId: "sc-3j854i-0"
})(["margin-left:auto;"]);
var DayTileOverflowIconButton = styled__default(IconButton).withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowIconButton",
  componentId: "sc-3j854i-1"
})(
  ["display:block;padding:", " ", " 0;border:0;color:", ";"],
  spacing.cozy,
  spacing.cozy,
  getThemeValue("gray02")
);
var DayTileOverflowIcon = styled__default(OverflowIcon).withConfig({
  displayName: "DayTileOverflowButton__DayTileOverflowIcon",
  componentId: "sc-3j854i-2"
})(
  ["", ":hover &{color:", ";fill:currentColor;}"],
  DayTileOverflowIconButton,
  getThemeValue("primary", "base")
);

var DayTileOverflowButton = function DayTileOverflowButton(props) {
  return React__default.createElement(
    DayTileOverflowButtonContainer,
    null,
    React__default.createElement(
      DayTileOverflowIconButton,
      _extends(
        {
          size: 30,
          role: "button"
        },
        props
      ),
      React__default.createElement(DayTileOverflowIcon, {
        size: 21
      })
    )
  );
};

var Container$1 = styled__default.div
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
  children: PropTypes__default.node.isRequired
};
Container$1.displayName = "ContainerBlock";

var Card = styled__default(Container$1).withConfig({
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

var Column = styled__default.div.withConfig({
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
var Container$2 = styled__default.div.withConfig({
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
var Rotate = styled.keyframes([
  "from{transform:rotate(0deg);}to{transform:rotate(360deg);}"
]);
var LoadingContainer = styled__default.div.withConfig({
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
var OuterRing = styled__default(LoadingContainer).withConfig({
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
var MiddleRing = styled__default(LoadingContainer).withConfig({
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
var InnerRing = styled__default(LoadingContainer).withConfig({
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
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      OuterRing,
      props,
      React__default.createElement("div", null),
      React__default.createElement("div", null),
      React__default.createElement("div", null),
      React__default.createElement(
        MiddleRing,
        props,
        React__default.createElement("div", null),
        React__default.createElement("div", null),
        React__default.createElement("div", null),
        React__default.createElement(
          InnerRing,
          props,
          React__default.createElement("div", null),
          React__default.createElement("div", null),
          React__default.createElement("div", null)
        )
      )
    )
  );
};

LoaderRing.displayName = "LoaderRing";
LoaderRing.propTypes = {
  size: PropTypes__default.oneOf(SIZES_SR),
  display: PropTypes__default.oneOf(["block", "inline-block"])
};
LoaderRing.defaultProps = {
  size: REGULAR,
  display: "block"
};

var _React$createContext = React__default.createContext({
    isOpen: false
  }),
  Provider = _React$createContext.Provider,
  Consumer = _React$createContext.Consumer;

var DrawerContainer = styled__default.div.withConfig({
  displayName: "Drawerstyles__DrawerContainer",
  componentId: "sc-11s7di8-0"
})(
  [
    "background-color:",
    ";color:",
    ";height:100%;position:fixed;top:0;left:0;bottom:0;right:0;visibility:hidden;transform:translateY(-100%);opacity:0;transition:opacity 300ms ",
    ";overflow:hidden;z-index:-1;&.drawer__content--open{transform:translateY(0);visibility:visible;opacity:1;}"
  ],
  getThemeValue("dark", "base"),
  getThemeValue("white", "base"),
  constants.easing.easeInOutQuad
);
var DrawerContent = styled__default.div.withConfig({
  displayName: "Drawerstyles__DrawerContent",
  componentId: "sc-11s7di8-1"
})([
  "display:flex;flex-direction:column;position:relative;width:100%;height:100vh;overflow-y:scroll;-webkit-overflow-scrolling:touch;overflow-x:hidden;"
]);
var HeaderContent = styled__default.div.withConfig({
  displayName: "Drawerstyles__HeaderContent",
  componentId: "sc-11s7di8-2"
})(
  [
    "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:60px;padding-left:",
    ";position:relative;z-index:5;"
  ],
  spacing.moderate
);
var CloseButton = styled__default.button.withConfig({
  displayName: "Drawerstyles__CloseButton",
  componentId: "sc-11s7di8-3"
})(
  [
    "appearance:none;cursor:pointer;border:0;outline:0;background:transparent;display:flex;align-items:center;height:60px;padding:0 ",
    ";"
  ],
  spacing.moderate
);
var ContentWrapper$2 = styled__default.div.withConfig({
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
  })(React__default.Component);

Portal.propTypes = {
  children: PropTypes__default.node.isRequired
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
        React__default.createRef()
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
          return React__default.createElement(
            Provider,
            {
              value: this.state
            },
            React__default.createElement(
              ContentWrapper$2,
              {
                className: classNames(
                  {
                    "drawer--open": isOpen
                  },
                  className
                ),
                ref: this.contentContainer
              },
              React.Children.only(children),
              content && React__default.createElement(Portal, null, content)
            )
          );
        }
      }
    ]);

    return DrawerProvider;
  })(React__default.Component);

_defineProperty(DrawerProvider, "propTypes", {
  children: PropTypes__default.element.isRequired,
  className: PropTypes__default.string
});

_defineProperty(DrawerProvider, "defaultProps", {
  className: ""
});

var DEFAULT_DEG = {
  small: "76deg",
  medium: "80deg",
  large: "81deg"
};
var DEFAULT_STOPS = [themes.global.primary.base, colors.defaultGradient.to];
var OVERLAY_DEG_NOT_SPOTLIGHT = {
  small: "77deg",
  medium: "82deg",
  large: "86deg"
};
var OVERLAY_STOPS_NOT_SPOTLIGHT = ["rgba(0, 0, 0, 0)", "#000000"];
var SPOTLIGHT_DEG = {
  small: "256deg",
  medium: "260deg",
  large: "262deg"
};
var SPOTLIGHT_STOPS = [
  "rgb(0, 45, 161)",
  "".concat(themes.global.primary.base, " 55%"),
  "rgb(0, 45, 161)"
];
var OVERLAY_SHADOW_DEG = {
  small: "185deg",
  medium: "185deg",
  large: "185deg"
};
var OVERLAY_SHADOW_STOPS = [
  "rgba(1, 2, 2, 0) 17%",
  "rgba(0, 0, 90, 0) 55%",
  "rgba(00, 0, 0, 1)"
];
var OVERLAY_SHADOW_TOP_DEG = "to bottom";
var OVERLAY_SHADOW_TOP_HEIGHT = "26%";
var OVERLAY_SHADOW_TOP_STOPS = ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0)"];

var backgroundImage = function backgroundImage(_ref) {
  var bgImage = _ref.backgroundImage,
    deg = _ref.deg,
    stops = _ref.stops;
  return (
    (bgImage || (deg && stops)) &&
    styled.css(
      ["background-image:", ";"],
      getBackgroundImage({
        backgroundImage: bgImage,
        deg: deg,
        stops: stops
      })
    )
  );
};

var FONT_SIZE_FALLBACK = "kilo";

var fontSize = function fontSize(size) {
  return styled.css(
    ["font-size:", ";"],
    typography.size[size] || typography.size[FONT_SIZE_FALLBACK]
  );
};

var fontSizes = styled.css(["", ";"], function(_ref) {
  var size = _ref.size;
  return typography.size[size] && "font-size: ".concat(typography.size[size]);
});

var fontWeight = function fontWeight(weight) {
  return styled.css(
    ["", ";"],
    typography.weight[weight] &&
      "font-weight: ".concat(typography.weight[weight])
  );
};

var fontWeights = styled.css(["", ";"], function(_ref) {
  var weight = _ref.weight;
  return (
    typography.weight[weight] &&
    "font-weight: ".concat(typography.weight[weight])
  );
});

var linearGradient = function linearGradient(_ref) {
  var deg = _ref.deg,
    stops = _ref.stops;
  return (
    deg &&
    stops &&
    styled.css(
      ["background-image:linear-gradient(", ",", ");"],
      deg,
      stops.join(", ")
    )
  );
};

var LINE_HEIGHT_FALLBACK = "body";

var lineHeight = function lineHeight(lH) {
  return styled.css(
    ["line-height:", ";"],
    typography.lineHeight[lH] || typography.lineHeight[LINE_HEIGHT_FALLBACK]
  );
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var responsiveBackgroundImage = function responsiveBackgroundImage(_ref) {
  var bgImage = _ref.backgroundImage,
    deg = _ref.deg,
    stops = _ref.stops;
  return (
    (bgImage || (deg && stops)) &&
    styled.css(
      ["", " ", " ", ""],
      backgroundImage({
        backgroundImage: bgImage,
        deg: deg && deg.small,
        stops: stops
      }),
      deg &&
        deg.medium &&
        mediumAndUp(
          _templateObject$5(),
          backgroundImage({
            backgroundImage: bgImage,
            deg: deg.medium,
            stops: stops
          })
        ),
      deg &&
        deg.large &&
        largeAndUp(
          _templateObject2$2(),
          backgroundImage({
            backgroundImage: bgImage,
            deg: deg.large,
            stops: stops
          })
        )
    )
  );
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var responsiveLinearGradient = function responsiveLinearGradient(_ref) {
  var deg = _ref.deg,
    stops = _ref.stops;
  return (
    deg &&
    stops &&
    styled.css(
      ["", ";", " ", ";"],
      deg.small &&
        linearGradient({
          deg: deg.small,
          stops: stops
        }),
      deg.medium &&
        mediumAndUp(
          _templateObject$6(),
          linearGradient({
            deg: deg.medium,
            stops: stops
          })
        ),
      deg.large &&
        largeAndUp(
          _templateObject2$3(),
          linearGradient({
            deg: deg.large,
            stops: stops
          })
        )
    )
  );
};

var textTransforms = styled.css(["", ";"], function(_ref) {
  var tT = _ref.textTransform;
  return tT && "text-transform: ".concat(tT, ";");
});

var themeColor = function themeColor(color, variant) {
  return styled.css(["color:", ";"], function(_ref) {
    var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? THEME_TM : _ref$theme;
    return isValidThemeColorVariant(theme, color, variant)
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme);
  });
};

var themeColors = styled.css(["color:", ";"], function(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? ONYX : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? BASE : _ref$variant,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? THEME_TM : _ref$theme;
  return isValidThemeColorVariant(theme, color, variant)
    ? getThemeValue(color, variant)(theme)
    : getThemeValue(color)(theme) || getThemeValue(ONYX, BASE)(theme);
});

var DISPLAY_INLINE = styled.css(["display:inline;"]);

var BASE_STYLE_TYPOGRAPHY = styled.css(
  ["margin:2px 0;", " ", ";"],
  themeColors,
  textTransforms
);

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["regular"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["body"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var BASE_STYLE_BODY = styled.css(
  ["", ";", " ", " ", ""],
  BASE_STYLE_TYPOGRAPHY,
  lineHeight(_templateObject$7()),
  fontWeight(_templateObject2$4()),
  fontWeights
);

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["header"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var BASE_STYLE_HEADER = styled.css(
  ["", ";", ";", ";", ";"],
  BASE_STYLE_TYPOGRAPHY,
  DISPLAY_INLINE,
  lineHeight(_templateObject$8()),
  fontWeights
);

var SpotLight = function SpotLight(_ref) {
  var className = _ref.className;
  return React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 1440 218",
      preserveAspectRatio: "xMinYMid meet",
      className: className
    },
    React__default.createElement(
      "defs",
      null,
      React__default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: "61.654%",
          x2: "3.355%",
          y1: "100%",
          y2: "0%"
        },
        React__default.createElement("stop", {
          offset: "0%",
          stopColor: "#024691"
        }),
        React__default.createElement("stop", {
          offset: "52.996%",
          stopColor: "#BADBFE"
        }),
        React__default.createElement("stop", {
          offset: "100%",
          stopColor: "#C56BFF"
        })
      ),
      React__default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: "74.395%",
          x2: ".532%",
          y1: "129.212%",
          y2: "-28.101%"
        },
        React__default.createElement("stop", {
          offset: "0%",
          stopOpacity: "0"
        }),
        React__default.createElement("stop", {
          offset: "100%",
          stopOpacity: ".4"
        }),
        React__default.createElement("stop", {
          offset: "100%"
        }),
        React__default.createElement("stop", {
          offset: "100%",
          stopOpacity: ".4"
        })
      ),
      React__default.createElement("path", {
        id: "b",
        d: "M0 .748h138.365l1325.043 217.52H413.554z"
      })
    ),
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero",
        opacity: ".102",
        transform: "translate(-20)"
      },
      React__default.createElement("use", {
        fill: "url(#a)",
        xlinkHref: "#b"
      }),
      React__default.createElement("use", {
        fill: "url(#c)",
        xlinkHref: "#b"
      })
    )
  );
};

SpotLight.propTypes = {
  className: PropTypes__default.string
};
SpotLight.defaultProps = {
  className: ""
};
var SpotLight$1 = styled__default(SpotLight).withConfig({
  displayName: "SpotLight",
  componentId: "sc-1hl5jt0-0"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:100%;"]);

var Angle = function Angle(_ref) {
  var className = _ref.className;
  return React__default.createElement(
    "svg",
    {
      viewBox: "0 0 476 218",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMaxYMid meet",
      className: className
    },
    React__default.createElement(
      "defs",
      null,
      React__default.createElement(
        "linearGradient",
        {
          x1: "21.6784013%",
          y1: "112.586732%",
          x2: "53.474493%",
          y2: "23.9282924%",
          id: "Angle-linearGradient-1"
        },
        React__default.createElement("stop", {
          stopColor: "#000000",
          stopOpacity: "0",
          offset: "0%"
        }),
        React__default.createElement("stop", {
          stopColor: "#000000",
          offset: "100%"
        }),
        React__default.createElement("stop", {
          stopColor: "#000000",
          offset: "100%"
        })
      )
    ),
    React__default.createElement(
      "g",
      {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        opacity: "0.0490513393"
      },
      React__default.createElement(
        "g",
        {
          transform: "translate(-1016.000000, -184.000000)",
          fill: "url(#Angle-linearGradient-1)",
          fillRule: "nonzero"
        },
        React__default.createElement(
          "g",
          {
            transform: "translate(52.000000, 184.000000)"
          },
          React__default.createElement(
            "g",
            {
              transform: "translate(-20.000000, 0.000000)"
            },
            React__default.createElement("polygon", {
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
  className: PropTypes__default.string
};
Angle.defaultProps = {
  className: ""
};
var Angle$1 = styled__default(Angle).withConfig({
  displayName: "Angle",
  componentId: "ebngwr-0"
})(["position:absolute;right:0;bottom:0;height:100%;width:auto;"]);

var StyledImageSeo = styled__default.img
  .attrs({
    className: "image image--seo image--hidden"
  })
  .withConfig({
    displayName: "Seostyles__StyledImageSeo",
    componentId: "sc-163fjlj-0"
  })(["position:absolute;visibility:hidden;height:0;width:0;top:0;left:0;"]);

function _templateObject$9() {
  var data = _taggedTemplateLiteral([
    "box-shadow: inset 0 1px 40px 10px rgba(0, 0, 0, 0.15);"
  ]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var GradientStyles = styled__default.span.withConfig({
  displayName: "Gradient__GradientStyles",
  componentId: "h1gc6-0"
})(
  [
    "z-index:",
    ';width:100%;&.gradient--overlay:after,&.gradient--underlay:after,&.gradient--overlay-shadow:after{content:"";top:0;left:0;right:0;position:absolute;}&.gradient--overlay:after,&.gradient--underlay:after{height:100%;}&.gradient--overlay-shadow:after{height:',
    ";",
    ";}&.gradient--spotlight{",
    ";}&:not(.gradient--overlay-shadow),&.gradient--underlay.gradient--spotlight:after,&:not(.gradient--spotlight).gradient--underlay:after{",
    ";}&.gradient--overlay-shadow{z-index:",
    ";",
    ";}&.gradient--underlay.gradient--spotlight:after,&:not(.gradient--spotlight).gradient--underlay:after{z-index:",
    ";opacity:0.8;}&:not(.gradient--spotlight).gradient--overlay:after{z-index:",
    ";opacity:0.4;",
    ";}"
  ],
  zIndex.reset,
  OVERLAY_SHADOW_TOP_HEIGHT,
  linearGradient({
    deg: OVERLAY_SHADOW_TOP_DEG,
    stops: OVERLAY_SHADOW_TOP_STOPS
  }),
  largeAndUp(_templateObject$9()),
  responsiveLinearGradient,
  zIndex.reset,
  responsiveBackgroundImage,
  zIndex.unset,
  zIndex.layout.ads,
  responsiveLinearGradient({
    deg: OVERLAY_DEG_NOT_SPOTLIGHT,
    stops: OVERLAY_STOPS_NOT_SPOTLIGHT
  })
);
var SpotLightWrapper = styled__default.div.withConfig({
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
            backgroundImage = _this$props.backgroundImage,
            children = _this$props.children,
            className = _this$props.className,
            stops = _this$props.stops,
            deg = _this$props.deg,
            imageRef = _this$props.imageRef,
            backgroundRef = _this$props.backgroundRef,
            props = _objectWithoutProperties(_this$props, [
              "backgroundImage",
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
          return React__default.createElement(
            GradientStyles,
            _extends({}, props, {
              backgroundImage: backgroundImage,
              stops: gradientStops,
              deg: gradientDeg,
              className: className,
              ref: backgroundRef
            }),
            backgroundImage &&
              imageRef &&
              React__default.createElement(StyledImageSeo, {
                src: backgroundImage,
                ref: imageRef
              }),
            hasSpotLight &&
              React__default.createElement(
                SpotLightWrapper,
                null,
                React__default.createElement(SpotLight$1, null),
                React__default.createElement(Angle$1, null)
              ),
            children
          );
        }
      }
    ]);

    return Gradient;
  })(React.PureComponent);

Gradient.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  deg: PropTypes__default.shape({
    small: PropTypes__default.string.isRequired,
    medium: PropTypes__default.string.isRequired,
    large: PropTypes__default.string.isRequired
  }),
  stops: PropTypes__default.arrayOf(PropTypes__default.string),
  imageRef: PropTypes__default.shape({
    current: PropTypes__default.object
  }),
  backgroundRef: PropTypes__default.shape({
    current: PropTypes__default.object
  }),
  backgroundImage: PropTypes__default.string
};
Gradient.defaultProps = {
  children: null,
  className: "",
  deg: DEFAULT_DEG,
  stops: DEFAULT_STOPS,
  imageRef: {
    current: null
  },
  backgroundRef: {
    current: null
  },
  backgroundImage: ""
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral([
    "\n    margin-left: ",
    "px;\n    margin-right: ",
    "px;\n  "
  ]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled__default.div.withConfig({
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
    _templateObject$a(),
    (spacing.gutters.mediumAndUp / 2) * -1,
    (spacing.gutters.mediumAndUp / 2) * -1
  )
);
Row.displayName = "Row";

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    min-height: 218px;\n  "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    min-height: 140px;\n  "]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderStyles = styled__default.header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "qifgyx-0"
})(["width:100%;display:flex;position:relative;"]);
var HeaderGradient = styled__default(Gradient).withConfig({
  displayName: "Header__HeaderGradient",
  componentId: "qifgyx-1"
})(
  [
    "display:flex;position:relative;align-items:flex-end;min-height:122px;z-index:1;",
    " ",
    ";"
  ],
  smallAndUp(_templateObject$b()),
  mediumAndUp(_templateObject2$5())
);
var HeaderContainer = styled__default(Container$2).withConfig({
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
  return React__default.createElement(
    HeaderStyles,
    {
      role: "heading",
      "aria-level": "1"
    },
    React__default.createElement(
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
      React__default.createElement(
        HeaderContainer,
        null,
        React__default.createElement(Row, null, children)
      )
    )
  );
};

Header.propTypes = _objectSpread({}, Gradient.propTypes, {
  className: PropTypes__default.string,
  style: PropTypes__default.objectOf(PropTypes__default.string),
  withOverlay: PropTypes__default.bool,
  withSpotLight: PropTypes__default.bool
});
Header.defaultProps = {
  className: null,
  style: {},
  withOverlay: false,
  withSpotLight: false
};

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n      padding-top: 60px;\n    "]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var GradientBackground = styled__default(Gradient).withConfig({
  displayName: "WithImage__GradientBackground",
  componentId: "rx5jg1-0"
})([
  "position:absolute;top:0;left:0;right:0;z-index:1;min-height:218px;max-height:218px;"
]);
var ImageBackground = styled__default(GradientBackground).withConfig({
  displayName: "WithImage__ImageBackground",
  componentId: "rx5jg1-1"
})(["background-size:cover;background-repeat:no-repeat;"]);
var Wrapper$1 = styled__default.header.withConfig({
  displayName: "WithImage__Wrapper",
  componentId: "rx5jg1-2"
})(["width:100%;position:relative;"]);
var ContainerWrapper = styled__default(Container$2).withConfig({
  displayName: "WithImage__ContainerWrapper",
  componentId: "rx5jg1-3"
})(["padding-top:60px;z-index:2;"]);
var ContainerRow = styled__default(Row).withConfig({
  displayName: "WithImage__ContainerRow",
  componentId: "rx5jg1-4"
})(["align-items:center;position:relative;z-index:2;"]);
var ImageWrapper = styled__default.div.withConfig({
  displayName: "WithImage__ImageWrapper",
  componentId: "rx5jg1-5"
})(["", ";"], mediumAndUp(_templateObject$c()));

var ImageHeader = function ImageHeader(_ref) {
  var children = _ref.children,
    stops = _ref.stops,
    deg = _ref.deg,
    backgroundImage = _ref.backgroundImage,
    backgroundImageProps = _ref.backgroundImageProps,
    withOverlay = _ref.withOverlay,
    withOverlayShadow = _ref.withOverlayShadow,
    withUnderlay = _ref.withUnderlay,
    withSpotLight = _ref.withSpotLight,
    props = _objectWithoutProperties(_ref, [
      "children",
      "stops",
      "deg",
      "backgroundImage",
      "backgroundImageProps",
      "withOverlay",
      "withOverlayShadow",
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

  return React__default.createElement(
    Wrapper$1,
    _extends({}, props, {
      role: "heading",
      "aria-level": "1"
    }),
    backgroundImage
      ? React__default.createElement(
          ImageBackground,
          _extends(
            {
              style: _objectSpread({}, backgroundImageStyle, {
                backgroundImage: withOverlayShadow
                  ? ""
                  : "url(".concat(backgroundImage, ")")
              }),
              backgroundImage: backgroundImage,
              imageRef: imageRef,
              backgroundRef: backgroundRef
            },
            otherBackgroundImageProps,
            {
              className: classNames({
                "gradient--overlay": !withSpotLight && withOverlay,
                "gradient--overlay-shadow": withOverlayShadow,
                "gradient--spotlight": withSpotLight,
                "gradient--underlay": withUnderlay
              }),
              "aria-hidden": true
            }
          )
        )
      : React__default.createElement(GradientBackground, {
          stops: stops,
          deg: deg,
          className: classNames({
            "gradient--overlay": !withSpotLight && withOverlay,
            "gradient--spotlight": withSpotLight,
            "gradient--underlay": !withSpotLight && withUnderlay
          }),
          style: backgroundImageStyle
        }),
    React__default.createElement(
      ContainerWrapper,
      null,
      React__default.createElement(ContainerRow, null, children)
    )
  );
};

ImageHeader.propTypes = _objectSpread({}, Gradient.propTypes, {
  backgroundImage: PropTypes__default.string,
  backgroundImageProps: PropTypes__default.objectOf(PropTypes__default.any),
  withOverlay: PropTypes__default.bool,
  withOverlayShadow: PropTypes__default.bool,
  withUnderlay: PropTypes__default.bool,
  withSpotLight: PropTypes__default.bool
});
ImageHeader.defaultProps = {
  backgroundImage: null,
  backgroundImageProps: {},
  withOverlay: false,
  withOverlayShadow: false,
  withUnderlay: false,
  withSpotLight: false
};
ImageHeader.ImageWrapper = ImageWrapper;

var Span = styled__default.span.withConfig({
  displayName: "Heading__Span",
  componentId: "f34eb5-0"
})(["font-weight:", ";"], typography.weight.light); // NONE: extraBold TOKEN IS DEPRECATED, USE semiBold INSTEAD

var Strong = styled__default(Span).withConfig({
  displayName: "Heading__Strong",
  componentId: "f34eb5-1"
})(["font-weight:", ";"], typography.weight.semiBold);
var Margins = styled__default.span.withConfig({
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
    return p.color ? p.color : themes.global.white.base;
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
  return React__default.createElement(
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
  level: PropTypes__default.oneOf([1, 2, 3, 4, 5]),
  size: PropTypes__default.oneOf(Object.keys(typography.size)),
  responsiveSize: PropTypes__default.shape({
    small: PropTypes__default.oneOf(Object.keys(typography.size)),
    medium: PropTypes__default.oneOf(Object.keys(typography.size)),
    large: PropTypes__default.oneOf(Object.keys(typography.size))
  }),
  weight: PropTypes__default.oneOf(Object.keys(typography.weight)),
  lineHeight: PropTypes__default.oneOf(Object.keys(typography.lineHeight)),
  monospace: PropTypes__default.bool,
  children: PropTypes__default.node
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

var CardWithoutPadding = styled__default(Card).withConfig({
  displayName: "ImageCard__CardWithoutPadding",
  componentId: "c7avku-0"
})(["padding:0;"]);
var Image = styled__default.img.withConfig({
  displayName: "ImageCard__Image",
  componentId: "c7avku-1"
})(["width:100%;max-width:100%;flex:none;"]); //  come back

var Overlay = styled__default.div
  .attrs(function() {
    return {
      className: "image-card__overlay"
    };
  })
  .withConfig({
    displayName: "ImageCard__Overlay",
    componentId: "c7avku-2"
  })([
  "position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-end;"
]);
var CaptionContainer = styled__default.div
  .attrs(function() {
    return {
      className: "image-card__caption"
    };
  })
  .withConfig({
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
  themes.global.white.base,
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
var HalfCard = styled__default(CardWithoutPadding).withConfig({
  displayName: "ImageCard__HalfCard",
  componentId: "c7avku-4"
})(["width:50%;"]);
var Title = styled__default.span.withConfig({
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
  themes.tm.primary.base
);
var SubTitle = styled__default.span.withConfig({
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
  themes.global.darkFill
);
var Container$3 = styled__default.div.withConfig({
  displayName: "ImageCard__Container",
  componentId: "c7avku-7"
})(["display:flex;flex-direction:column;position:relative;"]);
var RowContainer = styled__default(Container$3).withConfig({
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
    cardProps = _ref.cardProps,
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
      "children",
      "cardProps"
    ]);

  var titleToShow = cardTitle;
  var subtitleToShow = cardSubtitle;
  var childrenToShow = children;

  if (!cardTitle && !cardSubtitle) {
    var _Children$toArray = React.Children.toArray(children || []);

    var _Children$toArray2 = _toArray(_Children$toArray);

    titleToShow = _Children$toArray2[0];
    subtitleToShow = _Children$toArray2[1];
    childrenToShow = _Children$toArray2.slice(2);
  }

  var img =
    props.image ||
    React__default.createElement(Image, {
      src: src,
      alt: alt,
      title: title
    });

  if (type === "half") {
    return React__default.createElement(
      RowContainer,
      props,
      React__default.createElement(HalfCard, null, img),
      React__default.createElement(
        CaptionContainer,
        _extends({}, captionContainerProps, {
          half: true
        }),
        React__default.createElement(
          Title,
          null,
          React__default.createElement(
            TextBase,
            {
              className: "image-card__title--half"
            },
            titleToShow
          )
        ),
        React__default.createElement(
          SubTitle,
          {
            half: true
          },
          React__default.createElement(
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

  var combinedCardProps = _objectSpread({}, props, cardProps);

  return React__default.createElement(
    CardWithoutPadding,
    combinedCardProps,
    React__default.createElement(
      Container$3,
      containerProps,
      img,
      React__default.createElement(
        Overlay,
        overlayProps,
        (titleToShow || subtitleToShow) &&
          React__default.createElement(
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
  type: PropTypes__default.oneOf(["full", "half"]),
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  title: PropTypes__default.string,
  image: PropTypes__default.element,
  cardTitle: PropTypes__default.element,
  cardSubtitle: PropTypes__default.element,
  overlayProps: PropTypes__default.shape({}),
  containerProps: PropTypes__default.shape({}),
  captionContainerProps: PropTypes__default.shape({}),
  children: PropTypes__default.node
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

var BASE_BANNER_HEIGHT = 56;
var MAX_BANNER_HEIGHT = 1000;
var Link$1 = styled__default(LinkCta).withConfig({
  displayName: "Bannerstyles__Link",
  componentId: "d0w563-0"
})(["color:#0064e6;padding-left:4px;&:visited{color:#0064e6;}"]);
var Container$4 = styled__default.div.withConfig({
  displayName: "Bannerstyles__Container",
  componentId: "d0w563-1"
})(
  [
    "padding:",
    ";position:relative;border:1px solid ",
    ";border-radius:",
    ";display:flex;overflow:hidden;transition:max-height 0.3s ",
    ",opacity 0.3s ",
    ";background-color:",
    ";box-sizing:content-box;opacity:0;&.visible-banner{transition:max-height 0.3s ",
    ",opacity 0.3s ",
    ";opacity:1;}&.banner-variant-error{background-color:",
    ";border-color:",
    ";}&.banner-variant-success{background-color:",
    ";border-color:",
    ";}&.banner-variant-alert{background-color:",
    ";border-color:",
    ";}&.banner-variant-info{background-color:",
    ";border-color:",
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
  getThemeValue("error", "lightest"),
  getThemeValue("error", "base"),
  getThemeValue("success", "lightest"),
  getThemeValue("success", "base"),
  getThemeValue("caution", "lightest"),
  getThemeValue("caution", "base"),
  getThemeValue("primary", "lightest"),
  getThemeValue("primary", "base")
);
var ContentSection = styled__default.div.withConfig({
  displayName: "Bannerstyles__ContentSection",
  componentId: "d0w563-2"
})(["font-family:Averta,Courier,monospace;"]);
var Content = styled__default(TextBase).withConfig({
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
var CloseButton$1 = styled__default(Button).withConfig({
  displayName: "Bannerstyles__CloseButton",
  componentId: "d0w563-4"
})([
  "background-color:transparent;border:none;padding:0;position:absolute;top:6px;right:7px;width:42px;min-width:42px;height:42px;display:flex;align-items:center;justify-content:center;&:active,&:hover{background-color:transparent;}"
]);
var CloseIcon$1 = styled__default(CloseIcon)
  .attrs({
    color: "currentColor"
  })
  .withConfig({
    displayName: "Bannerstyles__CloseIcon",
    componentId: "d0w563-5"
  })(["color:", ";"], getThemeValue("onyx", "muted"));
var IconSection = styled__default.div.withConfig({
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
          isExpanded: _this.props.isExpanded,
          maxHeight: _this.props.isExpanded
            ? "".concat(MAX_BANNER_HEIGHT, "px") // max height if banner is expanded during first render
            : "".concat(BASE_BANNER_HEIGHT, "px")
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "content",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleContent",
        function() {
          var onButtonClick = _this.props.onButtonClick;
          var contentHeight = _this.content.current.offsetHeight;
          var collapsedMaxHeight = "".concat(BASE_BANNER_HEIGHT, "px");
          var expandedMaxHeight = "".concat(
            contentHeight + BASE_BANNER_HEIGHT,
            "px"
          );

          _this.setState(function(_ref) {
            var isExpanded = _ref.isExpanded;
            return {
              isExpanded: !isExpanded,
              maxHeight: isExpanded ? collapsedMaxHeight : expandedMaxHeight
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
          return React__default.createElement(
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

          return React__default.createElement(
            CloseButton$1,
            {
              onClick: onRequestClose
            },
            React__default.createElement(
              CloseIcon$1,
              {
                size: "small"
              },
              React__default.createElement("title", null, closeButtonTitleText)
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
            React__default.createElement(Icon, {
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
        key: "componentDidMount",
        value: function componentDidMount() {
          // update max height to the correct value so animation works correctly
          if (this.props.content && this.state.isExpanded) {
            var maxHeight =
              this.content.current.offsetHeight + BASE_BANNER_HEIGHT; // eslint-disable-next-line react/no-did-mount-set-state

            this.setState({
              maxHeight: "".concat(maxHeight, "px")
            });
          }
        }
      },
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
          var _this$state = this.state,
            isExpanded = _this$state.isExpanded,
            maxHeight = _this$state.maxHeight;
          return React__default.createElement(
            reactTransitionGroup.Transition,
            {
              in: isOpen,
              timeout: isOpen ? 0 : 300, // allows to animate fade in after render correctly
              mountOnEnter: true,
              unmountOnExit: true
            },
            function(state) {
              var _classnames;

              return React__default.createElement(
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
                  style: _objectSpread({}, style, {
                    maxHeight: maxHeight
                  })
                },
                React__default.createElement(
                  IconSection,
                  null,
                  _this2.renderIcon()
                ),
                React__default.createElement(
                  ContentSection,
                  null,
                  React__default.createElement(
                    TextBase,
                    {
                      tag: "span",
                      weight: "semiBold"
                    },
                    heading
                  ),
                  _this2.renderControl(),
                  React__default.createElement(
                    "div",
                    {
                      ref: _this2.content
                    },
                    React__default.createElement(Content, null, content)
                  )
                ),
                _this2.renderCloseButton()
              );
            }
          );
        }
      }
    ]);

    return Banner;
  })(React.Component);

_defineProperty(Banner, "propTypes", {
  isExpanded: PropTypes__default.bool,
  isOpen: PropTypes__default.bool.isRequired,
  heading: PropTypes__default.string.isRequired,
  content: PropTypes__default.string,
  href: PropTypes__default.string,
  linkText: PropTypes__default.string,
  expandedText: PropTypes__default.string,
  collapsedText: PropTypes__default.string,
  onButtonClick: PropTypes__default.func,
  onRequestClose: PropTypes__default.func,
  linkProps: PropTypes__default.shape(),
  buttonProps: PropTypes__default.shape(),
  style: PropTypes__default.shape(),
  variant: PropTypes__default.oneOf(variants),
  icon: PropTypes__default.node,
  closeButtonTitleText: PropTypes__default.string
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

var MAX_FEEDBACK_HEIGHT = 1000;
var BASE_FEEDBACK_HEIGHT = 21;
var Link$2 = styled__default(LinkCta).withConfig({
  displayName: "FeedbackInlinestyles__Link",
  componentId: "sc-1cnecgr-0"
})(
  ["padding-left:", ";color:", ";"],
  spacing.slim,
  getThemeValue("primary", "base")
);
var Container$5 = styled__default.div.withConfig({
  displayName: "FeedbackInlinestyles__Container",
  componentId: "sc-1cnecgr-1"
})(
  [
    "position:relative;display:inline-flex;overflow:hidden;transition:max-height 0.3s ",
    ";box-sizing:border-box;"
  ],
  constants.easing.easeInOutQuad
);
var ContentSection$1 = styled__default.div.withConfig({
  displayName: "FeedbackInlinestyles__ContentSection",
  componentId: "sc-1cnecgr-2"
})(["font-family:Averta,Courier,monospace;"]);
var Content$1 = styled__default(TextBase).withConfig({
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
var IconSection$1 = styled__default.div.withConfig({
  displayName: "FeedbackInlinestyles__IconSection",
  componentId: "sc-1cnecgr-4"
})(["padding-right:", ";"], spacing.cozy);
var Heading$1 = styled__default(TextBase).withConfig({
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
          isExpanded: _this.props.isExpanded,
          maxHeight: _this.props.isExpanded
            ? "".concat(MAX_FEEDBACK_HEIGHT, "px") // max height if banner is expanded during first render
            : "".concat(BASE_FEEDBACK_HEIGHT, "px")
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "content",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "heading",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "toggleContent",
        function(e) {
          var onButtonClick = _this.props.onButtonClick;
          var contentHeight = _this.content.current.offsetHeight;
          var headingHeight = _this.heading.current.offsetHeight;
          var collapsedMaxHeight = "".concat(
            headingHeight + BASE_FEEDBACK_HEIGHT,
            "px"
          );
          var expandedMaxHeight = "".concat(
            contentHeight + headingHeight + BASE_FEEDBACK_HEIGHT,
            "px"
          );

          _this.setState(function(_ref) {
            var isExpanded = _ref.isExpanded;
            return {
              isExpanded: !isExpanded,
              maxHeight: isExpanded ? collapsedMaxHeight : expandedMaxHeight
            };
          });

          if (onButtonClick) {
            onButtonClick(e);
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
          return React__default.createElement(
            Link$2,
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
        "renderIcon",
        function() {
          var _this$props2 = _this.props,
            variant = _this$props2.variant,
            icon = _this$props2.icon,
            iconClassName = _this$props2.iconClassName;

          if (!variant && !icon) {
            return null;
          }

          var Icon = variantsIcons$1[variant];
          return (
            icon ||
            React__default.createElement(Icon, {
              type: "filled",
              size: "regular",
              className: iconClassName
            })
          );
        }
      );

      return _this;
    }

    _createClass(FeedbackInline, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          // update max height to the correct value so animation works correctly
          if (this.props.content && this.state.isExpanded) {
            // with expanded content
            var maxHeight =
              this.content.current.offsetHeight +
              this.heading.current.offsetHeight +
              BASE_FEEDBACK_HEIGHT;
            /* eslint-disable react/no-did-mount-set-state */

            this.setState({
              maxHeight: "".concat(maxHeight, "px")
            });
          } else {
            // without content or collapsed
            var _maxHeight =
              this.heading.current.offsetHeight + BASE_FEEDBACK_HEIGHT;

            this.setState({
              maxHeight: "".concat(_maxHeight, "px")
            });
            /* eslint-enable react/no-did-mount-set-state */
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
            heading = _this$props3.heading,
            content = _this$props3.content,
            variant = _this$props3.variant,
            style = _this$props3.style,
            onButtonClick = _this$props3.onButtonClick,
            props = _objectWithoutProperties(_this$props3, [
              "heading",
              "content",
              "variant",
              "style",
              "onButtonClick"
            ]);

          var _this$state = this.state,
            isExpanded = _this$state.isExpanded,
            maxHeight = _this$state.maxHeight;
          return React__default.createElement(
            Container$5,
            _extends(
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
                style: _objectSpread({}, style, {
                  maxHeight: maxHeight
                })
              },
              props
            ),
            React__default.createElement(
              IconSection$1,
              null,
              this.renderIcon()
            ),
            React__default.createElement(
              ContentSection$1,
              null,
              React__default.createElement(
                "div",
                {
                  ref: this.heading
                },
                React__default.createElement(
                  Heading$1,
                  {
                    tag: "span",
                    weight: "semiBold"
                  },
                  heading
                ),
                this.renderControl()
              ),
              React__default.createElement(
                "div",
                {
                  ref: this.content
                },
                React__default.createElement(Content$1, null, content)
              )
            )
          );
        }
      }
    ]);

    return FeedbackInline;
  })(React.Component);

_defineProperty(FeedbackInline, "propTypes", {
  heading: PropTypes__default.string.isRequired,
  content: contentValidator,
  isExpanded: PropTypes__default.bool,
  expandedText: PropTypes__default.string,
  collapsedText: PropTypes__default.string,
  onButtonClick: PropTypes__default.func,
  buttonProps: PropTypes__default.shape(),
  style: PropTypes__default.shape(),
  variant: PropTypes__default.oneOf(variants$1),
  icon: PropTypes__default.node,
  iconClassName: PropTypes__default.string
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
  icon: null,
  iconClassName: ""
});

var _React$createContext$1 = React__default.createContext(),
  Provider$1 = _React$createContext$1.Provider,
  Consumer$1 = _React$createContext$1.Consumer;

var _React$createContext$2 = React__default.createContext({
    isSmall: true
  }),
  Provider$2 = _React$createContext$2.Provider,
  Consumer$2 = _React$createContext$2.Consumer;
var withDeviceSize = function withDeviceSize(Component) {
  return function(props) {
    return React__default.createElement(Consumer$2, null, function(value) {
      return React__default.createElement(
        Component,
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

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n    display: ", "\n  "]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledVisibility = styled__default.div.withConfig({
  displayName: "DeviceSize__StyledVisibility",
  componentId: "p0uh9r-0"
})(
  ["display:", ";", ";", ";", ";"],
  function(props) {
    return props.small ? props.display : "none";
  },
  mediumAndUp(_templateObject$d(), function(props) {
    return props.medium ? props.display : "none";
  }),
  largeAndUp(_templateObject2$6(), function(props) {
    return props.large ? props.display : "none";
  }),
  xLargeAndUp(_templateObject3$2(), function(props) {
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
          return React__default.createElement(Consumer$2, null, function(val) {
            /* istanbul ignore next */
            if (val.cssOnly) {
              return React__default.createElement(
                StyledVisibility,
                _this.props
              );
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
  })(React__default.Component);

_defineProperty(DisplayFor, "propTypes", {
  small: PropTypes__default.bool,
  medium: PropTypes__default.bool,
  large: PropTypes__default.bool,
  xLarge: PropTypes__default.bool,
  display: PropTypes__default.oneOf(["block", "inline-block", "flex"]),
  children: PropTypes__default.node,
  className: PropTypes__default.string
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

var _React$createContext$3 = React__default.createContext(),
  Provider$3 = _React$createContext$3.Provider,
  Consumer$3 = _React$createContext$3.Consumer;

var KEYCODES = {
  ESCAPE: 27
};
var Overlay$1 = styled__default.div
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
          childRef: React__default.createRef()
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

          return React__default.createElement(Consumer$1, null, function(
            value
          ) {
            _this2.onCloseRequest = value
              ? value.onCloseRequest
              : function() {};
            return React__default.createElement(
              Overlay$1,
              _extends(
                {
                  onClick: _this2.handleOutsideClick
                },
                rest
              ),
              children &&
                React__default.createElement(
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
  })(React.Component);

Backdrop.defaultProps = {
  children: null
};
Backdrop.propTypes = {
  children: PropTypes__default.node
};

var badgeProps = {
  label: PropTypes__default.string.isRequired,
  color: PropTypes__default.string
};
var badgeDefault = {
  color: themes.global.primary.base
};

var StyledBadge$1 = styled__default.div.withConfig({
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
    ";letter-spacing:0.025em;text-transform:uppercase;background-color:",
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

  return React__default.createElement(
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
  variant: PropTypes__default.oneOf(VARIANTS),
  className: PropTypes__default.string
});
StatusBadge.defaultProps = _objectSpread({}, badgeDefault, {
  variant: DARK,
  className: ""
});
StatusBadge.displayName = "StatusBadge";

var Portal$1 =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Portal, _Component);

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
        "rootEl",
        null
      );

      return _this;
    }

    _createClass(Portal, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (global.window.document.body) {
            this.rootEl = global.window.document.createElement("div");
            this.rootEl.id = "popover-root-".concat(new Date().getTime());
            global.window.document.body.appendChild(this.rootEl);
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          global.window.document.body.removeChild(this.rootEl);
        }
      },
      {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return this.rootEl
            ? ReactDOM.createPortal(children, this.rootEl)
            : null;
        }
      }
    ]);

    return Portal;
  })(React.Component);

Portal$1.propTypes = {
  children: PropTypes__default.node
};
Portal$1.defaultProps = {
  children: null
};

var StyledPopOver = styled__default.div.withConfig({
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
    ";&.open-enter,&.open-appear{transition:opacity 0.3s ",
    ";display:block;opacity:0;transform:scale(0.7);}&.open-enter-active,&.open-appear-active{transition:opacity 0.3s ",
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
  function(_ref3) {
    var zInd = _ref3.zInd;
    return zInd;
  },
  function(_ref4) {
    var isVisible = _ref4.isVisible;
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
        value: function calculatePosition(_ref5) {
          var position = _ref5.position,
            dimensions = _ref5.dimensions,
            reduce = _ref5.reduce,
            inlineWithTarget = _ref5.inlineWithTarget,
            spaceFromMouse = _ref5.spaceFromMouse;
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
              y: windowScroll + elTop
            };
          }

          var viewportTop = windowScroll + reduceTop;
          var viewportBottom = windowScroll + windowHeight - reduceBottom;
          var bottomPosition = windowScroll + elBottom + spaceFromMouse;
          var topPosition = windowScroll + elTop - spaceFromMouse - height;
          var spaceFromEdge =
            windowWidth > MOBILE_MAX_WIDTH
              ? MIN_SPACE_FROM_EDGE
              : MOBILE_MIN_SPACE_FROM_EDGE;
          var containerTop = offsetTop + spaceFromEdge;
          var containerBottom =
            windowScroll + offsetTop + clientHeight - spaceFromEdge;
          var containerLeft = offsetLeft + spaceFromEdge;
          var containerRight = offsetLeft + clientWidth - spaceFromEdge - width;
          var topPositionWithFallback =
            topPosition - spaceFromEdge >= Math.max(viewportTop, containerTop)
              ? topPosition
              : bottomPosition;
          return {
            x: Math.min(
              Math.max(elLeft + elWidth / 2 - width / 2, containerLeft),
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
              clientWidth = _global$window$docume.clientWidth,
              clientHeight = _global$window$docume.clientHeight;
            var scrollTop = Math.max(
              global.window.pageYOffset,
              global.document.documentElement.scrollTop,
              global.document.body.scrollTop
            );

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

          if (Object.keys(dimensions).length) {
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
            reduceBottom = _this$props.reduceBottom,
            spaceFromMouse = _this$props.spaceFromMouse;

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
              inlineWithTarget: inlineWithTarget,
              spaceFromMouse: spaceFromMouse
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
      _this.myRef = React__default.createRef();
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
              elTop = _this$props2$position.elTop,
              elBottom = _this$props2$position.elBottom,
              elLeft = _this$props2$position.elLeft,
              isVisible = _this$props2.isVisible,
              inlineWithTarget = _this$props2.inlineWithTarget,
              position = _this$props2.position,
              reduceTop = _this$props2.reduceTop,
              reduceBottom = _this$props2.reduceBottom,
              spaceFromMouse = _this$props2.spaceFromMouse;

            if (
              (prevProps.position.elTop !== elTop ||
                prevProps.position.elBottom !== elBottom ||
                prevProps.position.elLeft !== elLeft) &&
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
                inlineWithTarget: inlineWithTarget,
                spaceFromMouse: spaceFromMouse
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
              noBorders = _this$props3.noBorders,
              zInd = _this$props3.zInd;
            return React__default.createElement(
              Portal$1,
              null,
              React__default.createElement(
                reactTransitionGroup.CSSTransition,
                {
                  in: isVisible,
                  key: "popover-animation",
                  timeout: 300,
                  classNames: "open",
                  appear: isVisible,
                  onEnter: this.popoverEnter
                },
                React__default.createElement(
                  StyledPopOver,
                  {
                    ref: this.myRef,
                    isVisible: isVisible,
                    noBorders: noBorders,
                    zInd: zInd
                  },
                  children
                )
              )
            );
          }
        }
      ],
      [
        {
          key: "getDimensionsFromEvent",
          value: function getDimensionsFromEvent(e, parent) {
            var _e$target$getBounding = e.target.getBoundingClientRect(),
              elTop = _e$target$getBounding.y,
              elHeight = _e$target$getBounding.height,
              elLeft = _e$target$getBounding.x,
              elWidth = _e$target$getBounding.width;

            var _ref6 =
                parent && parent.getBoundingClientRect
                  ? parent.getBoundingClientRect()
                  : {},
              _ref6$y = _ref6.y,
              offsetTop = _ref6$y === void 0 ? 0 : _ref6$y,
              _ref6$height = _ref6.height,
              clientHeight = _ref6$height === void 0 ? 100000 : _ref6$height,
              _ref6$x = _ref6.x,
              offsetLeft = _ref6$x === void 0 ? 0 : _ref6$x,
              _ref6$width = _ref6.width,
              clientWidth = _ref6$width === void 0 ? 100000 : _ref6$width;

            return {
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
  })(React.Component);

PopOver.propTypes = {
  children: PropTypes__default.node.isRequired,
  isVisible: PropTypes__default.bool,
  inlineWithTarget: PropTypes__default.bool,
  noBorders: PropTypes__default.bool,
  reduceTop: PropTypes__default.number,
  reduceBottom: PropTypes__default.number,
  position: PropTypes__default.shape({
    mouseX: PropTypes__default.number,
    elTop: PropTypes__default.number,
    elBottom: PropTypes__default.number,
    offsetTop: PropTypes__default.number,
    clientHeight: PropTypes__default.number,
    offsetLeft: PropTypes__default.number,
    clientWidth: PropTypes__default.number
  }),
  zInd: PropTypes__default.number,
  spaceFromMouse: PropTypes__default.number
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
  },
  zInd: zIndex.layout.overlay,
  spaceFromMouse: 4
};
PopOver.displayName = "PopOver";

var StyledTooltip = styled__default.div.withConfig({
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
    ';:before{content:"";position:absolute;transition:opacity 0.15s ',
    ";display:",
    ";border-right:",
    ";border-bottom:",
    ";border-top-left-radius:100%;width:12px;height:12px;transform:translateY(-50%) rotate(-135deg);background-color:",
    ";",
    ";}&.open-enter &.open-enter:before,&.open-appear,&.open-appear:before{transition:opacity 0.25s ",
    ";display:block;opacity:0;}&.open-enter,&.open-appear{transition:opacity 0.3s ",
    ";}&.open-enter-active,&.open-enter-active:before,&.open-appear-active,&.open-appear-active:before{transition:opacity 0.25s ",
    ";display:block;opacity:1;}&.open-enter-active,&.open-appear-active{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";}&.open-enter-done,&.open-enter-done:before{transition:opacity 0.25s ",
    ";display:block;opacity:1;}&.open-enter-done{transition:opacity 0.3s ",
    ",transform 0.3s ",
    ";}&.open-exit,&.open-exit:before{display:block;opacity:1;}&.open-exit-active,&.open-exit-active:before{display:block;opacity:0;}&.open-exit-done{transform:translate(0);}"
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
    var direction = _ref9.direction,
      arrowAdjustment = _ref9.arrowAdjustment;

    switch (direction) {
      case TOP:
        return "left: calc(50% - "
          .concat(ARROW_WIDTH / 2, "px + ")
          .concat(
            arrowAdjustment,
            "); bottom: -13px; transform: translateY(-50%) rotate(45deg);"
          );

      case BOTTOM:
        return "left: calc(50% - "
          .concat(ARROW_WIDTH / 2, "px + ")
          .concat(
            arrowAdjustment,
            "); top: -1px; transform: translateY(-50%) rotate(-135deg);"
          );

      case LEFT:
        return "top: 10px; right: -".concat(
          ARROW_WIDTH / 2 + 1,
          "px; transform: translateY(0%) rotate(-45deg);"
        );

      case RIGHT:
        return "top: 10px; left: -".concat(
          ARROW_WIDTH / 2 + 1,
          "px; transform: translateY(0%) rotate(135deg);"
        );

      default:
        return "left: calc(50% - ".concat(
          ARROW_WIDTH / 2,
          "px); top: -1px; transform: translateY(-50%) rotate(-135deg);"
        );
    }
  },
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad,
  constants.easing.easeOutQuad
);
var SeatDataStyled = styled__default.div.withConfig({
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
var SeatDataColumn = styled__default.div.withConfig({
  displayName: "Tooltipstyles__SeatDataColumn",
  componentId: "sc-7r1g1c-2"
})([
  "display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;text-align:center;&:first-child{text-align:left;}&:last-child{text-align:right;}"
]);
var ColumnHeading = styled__default.div.withConfig({
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
var ColumnText = styled__default.div.withConfig({
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
var AdditionalData = styled__default.div.withConfig({
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

    function Tooltip(props) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Tooltip).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getDirection",
        function() {
          var direction = _this.props.direction;
          var actualDirection = _this.state.actualDirection;

          if (direction === AUTO) {
            return actualDirection;
          }

          return direction;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getPositionAndUpdateDirection",
        function(_ref) {
          var position = _ref.position,
            dimensions = _ref.dimensions,
            spaceFromMouse = _ref.spaceFromMouse,
            reduce = _ref.reduce;
          var result = PopOver.calculatePosition({
            position: position,
            dimensions: dimensions,
            spaceFromMouse: spaceFromMouse,
            reduce: reduce
          });
          var _this$state = _this.state,
            actualDirection = _this$state.actualDirection,
            arrowAdjustment = _this$state.arrowAdjustment;

          var adjustment = _this.adjustArrow({
            coords: {
              x: result.x,
              width: dimensions.width
            },
            position: position
          });

          if (
            result.y < position.elTop + dimensions.windowScroll &&
            (actualDirection !== TOP || arrowAdjustment !== adjustment)
          ) {
            _this.setState({
              actualDirection: TOP,
              arrowAdjustment: adjustment
            });
          } else if (
            result.y > position.elTop + dimensions.windowScroll &&
            (actualDirection !== BOTTOM || arrowAdjustment !== adjustment)
          ) {
            _this.setState({
              actualDirection: BOTTOM,
              arrowAdjustment: adjustment
            });
          }

          return result;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "getTranslateByDirection",
        function(direction) {
          switch (direction) {
            case TOP:
              return "translate(0, 10px)";

            case BOTTOM:
              return "translate(0, -10px)";

            case LEFT:
              return "translate(10px, 0)";

            case RIGHT:
            default:
              return "translate(-10px, 0)";
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "adjustArrow",
        function(_ref2) {
          var coords = _ref2.coords,
            position = _ref2.position;
          var reqCenter = position.elHorizontalCenter;
          var currentCenter = coords.x + coords.width / 2;
          var mostLeft = coords.x + ARROW_WIDTH / 2;
          var mostRight = coords.x + coords.width + ARROW_WIDTH / 2;
          var center = Math.min(Math.max(mostLeft, reqCenter), mostRight);
          return center - currentCenter;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "calculatePosition",
        function(_ref3) {
          var direction = _ref3.direction,
            position = _ref3.position,
            dimensions = _ref3.dimensions,
            spaceFromMouse = _ref3.spaceFromMouse,
            reduce = _ref3.reduce;
          var width = dimensions.width,
            height = dimensions.height,
            windowScroll = dimensions.windowScroll;
          var elBottom = position.elBottom,
            elTop = position.elTop,
            elLeft = position.elLeft,
            elRight = position.elRight,
            elHorizontalCenter = position.elHorizontalCenter;
          var bottomPosition = elBottom + SPACE_FROM_MOUSE;
          var topPosition = elTop - SPACE_FROM_MOUSE - height + windowScroll;

          switch (direction) {
            case TOP:
              return {
                x: elHorizontalCenter - width / 2,
                y: topPosition
              };

            case BOTTOM:
              return {
                x: elHorizontalCenter - width / 2,
                y: bottomPosition + windowScroll
              };

            case LEFT:
              return {
                x: elLeft - width - SPACE_FROM_MOUSE,
                y: elTop + windowScroll
              };

            case RIGHT:
              return {
                x: elRight + SPACE_FROM_MOUSE,
                y: elTop + windowScroll
              };

            default:
              return _this.getPositionAndUpdateDirection({
                direction: direction,
                position: position,
                dimensions: dimensions,
                spaceFromMouse: spaceFromMouse,
                reduce: reduce
              });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateSize",
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
              clientWidth = _global$window$docume.clientWidth,
              clientHeight = _global$window$docume.clientHeight;
            var scrollTop = Math.max(
              global.window.pageYOffset,
              global.document.documentElement.scrollTop,
              global.document.body.scrollTop
            );

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

          if (Object.keys(dimensions).length) {
            _this.dimensions = _objectSpread({}, _this.dimensions, dimensions);
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
            direction = _this$props.direction,
            spaceFromMouse = _this$props.spaceFromMouse,
            reduceTop = _this$props.reduceTop,
            reduceBottom = _this$props.reduceBottom;

          if (isVisible) {
            var reduce = {
              top: reduceTop,
              bottom: reduceBottom
            };

            _this.updateSize();

            _this.pos = _this.calculatePosition({
              direction: direction,
              position: position,
              dimensions: _this.dimensions,
              spaceFromMouse: spaceFromMouse,
              reduce: reduce
            });
          }

          _this.myRef.current.style.top = "".concat(_this.pos.y, "px");
          _this.myRef.current.style.left = "".concat(_this.pos.x, "px");
          _this.myRef.current.style.transition = "opacity 0.3s ".concat(
            constants.easing.easeOutQuad
          );
          _this.myRef.current.style.transform = _this.getTranslateByDirection(
            _this.state.actualDirection
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "tooltipEntering",
        function() {
          _this.myRef.current.style.transition = "opacity 0.3s "
            .concat(constants.easing.easeOutQuad, ",\n      transform 0.3s ")
            .concat(constants.easing.easeOutQuad);
          _this.myRef.current.style.transform = "translate(0)";
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "tooltipExit",
        function() {
          _this.myRef.current.style.transition = "opacity 0.1s ".concat(
            constants.easing.easeInQuad
          );
        }
      );

      _this.myRef = React__default.createRef();
      _this.dimensions = {
        width: 0,
        height: 0,
        windowScroll: 0,
        windowWidth: 0,
        windowHeight: 0
      };
      _this.pos = {
        x: 0,
        y: 0
      };
      _this.state = {
        actualDirection: props.direction,
        arrowAdjustment: 0
      };
      return _this;
    }
    /*
   * If any specific value is passed via `direction` props, than that value should be used
   * If `auto` value is passed via `direction` prop, then calculated direction value will be used
   */

    _createClass(
      Tooltip,
      [
        {
          key: "render",
          value: function render() {
            var _this$props2 = this.props,
              children = _this$props2.children,
              isVisible = _this$props2.isVisible,
              variant = _this$props2.variant,
              rest = _objectWithoutProperties(_this$props2, [
                "children",
                "isVisible",
                "variant"
              ]);

            var arrowAdjustment = this.state.arrowAdjustment;
            var direction = this.getDirection();
            return React__default.createElement(
              Portal$1,
              null,
              React__default.createElement(
                reactTransitionGroup.CSSTransition,
                {
                  in: isVisible,
                  key: "tooltip-animation",
                  timeout: 300,
                  classNames: "open",
                  onEnter: this.tooltipEnter,
                  onEntering: this.tooltipEntering,
                  onExit: this.tooltipExit,
                  appear: isVisible,
                  variant: variant
                },
                React__default.createElement(
                  StyledTooltip,
                  _extends(
                    {
                      ref: this.myRef,
                      isVisible: isVisible
                    },
                    rest,
                    {
                      direction: direction,
                      arrowAdjustment: "".concat(arrowAdjustment, "px")
                    }
                  ),
                  children
                )
              )
            );
          }
        }
      ],
      [
        {
          key: "getDimensionsFromEvent",

          /*
     * Static function that needs to be called from the parent -> Tooltip.getDimensionsFromEvent
     * The parent should pass the click event which will trigger showing the Tooltip.
     * By default the Tooltip is shown withing the view port. If we need to show it inside
     * certain element we should pass the html element as second parameter.
     * The function will return an object that should be provided to the Tooltip as props.
     */
          value: function getDimensionsFromEvent(e, parent) {
            var _e$target$getBounding = e.target.getBoundingClientRect(),
              elTop = _e$target$getBounding.top,
              elHeight = _e$target$getBounding.height,
              elLeft = _e$target$getBounding.left,
              elWidth = _e$target$getBounding.width;

            var _ref4 =
                parent && parent.getBoundingClientRect
                  ? parent.getBoundingClientRect()
                  : {},
              _ref4$top = _ref4.top,
              offsetTop = _ref4$top === void 0 ? 0 : _ref4$top,
              _ref4$height = _ref4.height,
              clientHeight = _ref4$height === void 0 ? 100000 : _ref4$height,
              _ref4$left = _ref4.left,
              offsetLeft = _ref4$left === void 0 ? 0 : _ref4$left,
              _ref4$width = _ref4.width,
              clientWidth = _ref4$width === void 0 ? 100000 : _ref4$width;

            return {
              elTop: elTop,
              elLeft: elLeft,
              elWidth: elWidth,
              elBottom: elTop + elHeight,
              elRight: elLeft + elWidth,
              offsetTop: offsetTop,
              clientHeight: clientHeight,
              offsetLeft: offsetLeft,
              clientWidth: clientWidth,
              elHorizontalCenter: elLeft + elWidth / 2,
              elVerticalCenter: elTop + elHeight / 2
            };
          }
        }
      ]
    );

    return Tooltip;
  })(React.Component);

Tooltip.propTypes = {
  children: PropTypes__default.node.isRequired,
  isVisible: PropTypes__default.bool,
  direction: PropTypes__default.oneOf(DIRECTIONS),
  position: PropTypes__default.shape({
    elHorizontalCenter: PropTypes__default.number,
    elVerticalCenter: PropTypes__default.number,
    elTop: PropTypes__default.number,
    elBottom: PropTypes__default.number,
    elLeft: PropTypes__default.number
  }),
  variant: PropTypes__default.oneOf(VARIANTS),
  spaceFromMouse: PropTypes__default.number,
  reduceTop: PropTypes__default.number,
  reduceBottom: PropTypes__default.number
};
Tooltip.defaultProps = {
  isVisible: false,
  direction: AUTO,
  variant: LIGHT,
  position: {
    mouseX: 0,
    elTop: 0,
    elBottom: 0,
    offsetTop: 0,
    clientHeight: 0,
    offsetLeft: 0,
    clientWidth: 0
  },
  spaceFromMouse: SPACE_FROM_MOUSE,
  reduceTop: 0,
  reduceBottom: 0
};
Tooltip.displayName = "Tooltip";

var StatusBadgeContainer = styled__default.div.withConfig({
  displayName: "StatusBadgeGroup__StatusBadgeContainer",
  componentId: "sc-3jq26g-0"
})(
  [
    "display:flex;& .badge{margin-left:",
    ";&:first-child,&.hidden{margin-left:0;}&.hidden{margin-top:",
    ";:first-child{margin-top:0;}}}"
  ],
  spacing.cozy,
  spacing.cozy
);
var HiddenBadgesCount = styled__default(StyledBadge$1).withConfig({
  displayName: "StatusBadgeGroup__HiddenBadgesCount",
  componentId: "sc-3jq26g-1"
})(
  ["background:", ";color:", ";"],
  themes.global.transparent,
  themes.global.onyx.light
);
var BadgeTooltip = styled__default(Tooltip).withConfig({
  displayName: "StatusBadgeGroup__BadgeTooltip",
  componentId: "sc-3jq26g-2"
})(["padding:8px;.badge + .badge{margin-top:8px;}"]);

var StatusBadgeGroup =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(StatusBadgeGroup, _Component);

    function StatusBadgeGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StatusBadgeGroup);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(StatusBadgeGroup)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "state",
        {
          isOpen: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "mouseLeave",
        function(e) {
          e.stopPropagation();
          document.body.removeEventListener("touchstart", _this.mouseLeave);

          _this.setState(function() {
            return {
              isOpen: false
            };
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "elementHovered",
        function(e) {
          var data = Tooltip.getDimensionsFromEvent(e); // on some devices both onMouseEnter and onTouchStart would be triggered
          // it needs to be checked

          _this.setState(function(state) {
            if (state.isOpen) {
              return state;
            }

            document.body.addEventListener("touchstart", _this.mouseLeave);
            return _objectSpread(
              {
                isOpen: true
              },
              data
            );
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "renderBadges",
        function(badges, variant, additionalClass) {
          return badges.map(function(item) {
            return React__default.createElement(
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

      return _this;
    }

    _createClass(StatusBadgeGroup, [
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.body.removeEventListener("touchstart", this.mouseLeave);
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

          return React__default.createElement(
            StatusBadgeContainer,
            null,
            this.renderBadges(visibleBadges, variant),
            hiddenBadges &&
              hiddenBadges.length > 0 &&
              React__default.createElement(
                HiddenBadgesCount,
                {
                  onMouseEnter: this.elementHovered,
                  onMouseLeave: this.mouseLeave,
                  onTouchStart: this.elementHovered
                },
                "+".concat(hiddenBadges.length, " more")
              ),
            React__default.createElement(
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
  })(React.Component);

_defineProperty(StatusBadgeGroup, "propTypes", {
  variant: PropTypes__default.oneOf(VARIANTS),
  visibleBadges: PropTypes__default.arrayOf(
    PropTypes__default.shape(badgeProps)
  ),
  hiddenBadges: PropTypes__default.arrayOf(
    PropTypes__default.shape(badgeProps)
  ),
  tooltipDirection: PropTypes__default.oneOf(DIRECTIONS)
});

_defineProperty(StatusBadgeGroup, "defaultProps", {
  variant: DARK,
  visibleBadges: [],
  hiddenBadges: [],
  tooltipDirection: "bottom"
});

var LabelText = styled__default(TextBase).withConfig({
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
    return React__default.createElement(
      StatusBadge,
      _extends({}, restProps, {
        label: children,
        color: StatusBadgeColor
      })
    );
  }

  return React__default.createElement(
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
  variant: PropTypes__default.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  children: PropTypes__default.string
};

function _templateObject$e() {
  var data = _taggedTemplateLiteral([
    "\n    padding-left: ",
    ";\n\n    &.row__button--cancel {\n      padding-right: calc(",
    " + ",
    "px);\n    }\n  "
  ]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}

var noop = function noop() {};

var CANCEL_BUTTON_SIZE = 28;
var CANCEL_BUTTON_ICON_SIZE = Math.floor(CANCEL_BUTTON_SIZE / 2);
var BottomSheetContent = styled__default.div.withConfig({
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
var HeaderRow = styled__default(Row).withConfig({
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
    _templateObject$e(),
    spacing.comfy,
    spacing.comfy,
    CANCEL_BUTTON_SIZE
  )
);
var CancelButton = styled__default(IconButton).withConfig({
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

  return React__default.createElement(Consumer$3, null, function(
    backdropValue
  ) {
    return React__default.createElement(
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
        React__default.createElement(
          HeaderRow,
          {
            className: classNames("row__header", {
              "row__button--cancel": withCancelBtn // this class name is for automation purposes please do not remove or modify the name
            })
          },
          React__default.createElement(
            BottomSheetLabel,
            {
              variant: labelVariant
            },
            label
          ),
          withCancelBtn &&
            React__default.createElement(Consumer$1, null, function(value) {
              return React__default.createElement(
                CancelButton,
                {
                  className: "button--cancel",
                  size: CANCEL_BUTTON_SIZE,
                  "aria-label": "Close BottomSheet",
                  role: "button",
                  onClick: value ? value.onCloseRequest : noop
                },
                React__default.createElement(CrossIcon, {
                  size: CANCEL_BUTTON_ICON_SIZE,
                  style: {
                    pointerEvent: "none"
                  },
                  color: themes.global.onyx.base
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
  withCancelBtn: PropTypes__default.bool,
  withHeader: PropTypes__default.bool,
  children: PropTypes__default.node
};

var ModalContainer = styled__default.div.withConfig({
  displayName: "Modal__ModalContainer",
  componentId: "sj711c-0"
})(
  [
    "width:fit-content;min-width:400px;max-width:640px;position:relative;background-color:",
    ";border-radius:",
    ";box-shadow:0 16px 16px 0 rgba(0,0,0,0.06),0 0 16px 0 rgba(0,0,0,0.12);border:solid 1px rgba(0,0,0,0.04);padding:0;overflow-y:auto;overflow-x:hidden;max-height:calc(100% - 96px);z-index:100;.modal-enter &{opacity:0;transform:scale(0.7);}.modal-leave &,.modal-exit &{opacity:1;transform:scale(1);}.modal-appear &{opacity:0;transform:scale(0.7);}.modal-enter.modal-enter-active &{opacity:1;transform:scale(1);transition:all 0.3s ease-in-out;}.modal-leave.modal-leave-active &,.modal-exit.modal-exit-active &{opacity:0;transition:all 0.1s ease-in-out;transform:scale(0.7);}.modal-appear.modal-appear-active &{opacity:1;transform:scale(1);transition:all 0.3s ease-in-out;}"
  ],
  themes.global.white.base,
  constants.borderRadius.large
);
var ModalContent = styled__default.div.withConfig({
  displayName: "Modal__ModalContent",
  componentId: "sj711c-1"
})(["padding:", ";"], function(props) {
  return props.padding
    ? props.padding
    : "0 ".concat(spacing.comfy, " ").concat(spacing.comfy);
});
var CancelButtonContainer = styled__default(Row).withConfig({
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

  return React__default.createElement(Consumer$3, null, function(
    backdropValue
  ) {
    return React__default.createElement(
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
        React__default.createElement(
          CancelButtonContainer,
          null,
          React__default.createElement(Consumer$1, null, function(value) {
            return React__default.createElement(
              IconButton,
              {
                className: "button--close",
                size: 45,
                "aria-label": "Close Modal",
                role: "button",
                onClick: value ? value.onCloseRequest : function() {}
              },
              React__default.createElement(CrossIcon, {
                size: 12,
                style: {
                  pointerEvent: "none"
                },
                color: themes.global.onyx.base
              })
            );
          })
        ),
      React__default.createElement(ModalContent, contentProps, children)
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
  children: PropTypes__default.node,
  withCloseIcon: PropTypes__default.bool,
  containerProps: PropTypes__default.shape({}),
  contentProps: PropTypes__default.shape({})
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

var Container$6 = styled__default.div.withConfig({
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

          return React__default.createElement(
            Container$6,
            _extends(
              {
                onClick: this.onExpandOrCollapse
              },
              rest
            ),
            React__default.createElement(
              Provider$1,
              {
                value: this.state
              },
              children,
              React__default.createElement(
                DisplayFor,
                {
                  small: true
                },
                React__default.createElement(
                  Portal,
                  null,
                  React__default.createElement(
                    reactTransitionGroup.CSSTransition,
                    {
                      classNames: "bottom-sheet",
                      timeout: 300,
                      in: isBottomSheetOpen,
                      appear: true,
                      unmountOnExit: true,
                      mountOnEnter: true
                    },
                    React__default.createElement(
                      Backdrop,
                      null,
                      React__default.createElement(
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
              React__default.createElement(
                DisplayFor,
                {
                  medium: true,
                  large: true,
                  xLarge: true
                },
                React__default.createElement(
                  Portal,
                  null,
                  React__default.createElement(
                    reactTransitionGroup.CSSTransition,
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
                    React__default.createElement(
                      Backdrop,
                      null,
                      React__default.createElement(
                        Modal,
                        null,
                        desktopPortalContent
                      )
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
  })(React.Component);

ListContainer.defaultProps = {
  onRowCollapse: noop$1,
  onModalClose: noop$1,
  expandMultiple: false
};
ListContainer.propTypes = {
  children: PropTypes__default.node.isRequired,
  onRowCollapse: PropTypes__default.func,
  onModalClose: PropTypes__default.func,
  expandMultiple: PropTypes__default.bool
};

var ROW_CONTAINER_VERTICAL_PADDING = "12px";
var ROW_LINK_VERTICAL_PADDING = "2px";
var ROW_LINK_HORIZONTAL_PADDING = "4px";
var ROW_DATE_SMALL_WIDTH = "121px";
var ROW_DATE_MEDIUM_WIDTH = "136px";
var ROW_LABEL_AND_LINK_PADDING_LEFT = {
  xSmall: ROW_DATE_SMALL_WIDTH,
  medium: "181px",
  large: "183px"
};
var ROW_BUTTON_WIDTH = "102px";
var CHEVRON_ICON_SIZE = 15;
var CHEVRON_ICON_PADDING = spacing.moderate;
var staticProps = {
  defaultResponsiveSize: {
    xSmall: "hecto",
    medium: "kilo"
  }
};

function _templateObject$f() {
  var data = _taggedTemplateLiteral([
    "\n    display: block;\n    &.button--expanded,\n    &.button--collapsed {\n      transition: all 0.1s linear;\n    }\n    &.button--expanded {\n      transform: rotate(-180deg);\n    }\n  "
  ]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var IconButton$1 = styled__default.button
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
var IconWrapper = styled__default(IconButton$1)
  .attrs({
    size: 45
  })
  .withConfig({
    displayName: "RowToggler__IconWrapper",
    componentId: "qbg1jq-1"
  })(["display:none;", ";"], mediumAndUp(_templateObject$f()));

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
          return React__default.createElement(
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
            React__default.createElement(ChevronIcon, {
              size: CHEVRON_ICON_SIZE,
              color: themes.global.darkFill
            })
          );
        }
      }
    ]);

    return RowToggler;
  })(React__default.PureComponent);

_defineProperty(RowToggler, "propTypes", {
  isOpen: PropTypes__default.bool.isRequired,
  index: PropTypes__default.number.isRequired,

  /**
   * Property onExpandItem is called whenever user clicks chevron on the collapsed item
   */
  onExpandItem: PropTypes__default.func,

  /**
   * Property onCollapseItem is called whenever user clicks chevron on the expanded item
   */
  onCollapseItem: PropTypes__default.func
});

_defineProperty(RowToggler, "defaultProps", {
  onExpandItem: function onExpandItem() {},
  onCollapseItem: function onCollapseItem() {}
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteral([
    "\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n\n    &.row__label--hidden {\n      transition: opacity 0.1s ",
    ";\n      opacity: 0;\n    }\n\n    &.row__label--active {\n      transition: opacity 0.3s ",
    " 0.2s;\n      opacity: 1;\n    }\n\n    &.row__label--expanded {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      max-width: 100%;\n      transform: translateX(-50%);\n    }\n  "
  ]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  padding-left: ", ""]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-left: ",
    ";\n    padding-right: calc(",
    " - ",
    "px);\n    font-size: ",
    ";\n  "
  ]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var rowMarginRight = spacing.gutters.small / 2;
var Content$2 = styled__default(Row).withConfig({
  displayName: "RowLabel__Content",
  componentId: "sc-1vih5h1-0"
})(
  ["width:100%;padding-left:", ";padding-top:", ";font-size:11px;", ";", ";"],
  ROW_LABEL_AND_LINK_PADDING_LEFT.xSmall,
  spacing.cozy,
  mediumAndUp(
    _templateObject$g(),
    ROW_CONTAINER_VERTICAL_PADDING,
    ROW_LABEL_AND_LINK_PADDING_LEFT.medium,
    ROW_BUTTON_WIDTH,
    rowMarginRight,
    typography.size.hecto
  ),
  largeAndUp(_templateObject2$7(), ROW_LABEL_AND_LINK_PADDING_LEFT.large)
);
var ContentColumn = styled__default(Column).withConfig({
  displayName: "RowLabel__ContentColumn",
  componentId: "sc-1vih5h1-1"
})([
  "position:relative;display:flex;justify-content:flex-start;align-items:center;"
]);
var MobileWrapper = styled__default.div.withConfig({
  displayName: "RowLabel__MobileWrapper",
  componentId: "sc-1vih5h1-2"
})(
  ["display:inline-block;max-width:100%;", ";"],
  mediumAndUp(_templateObject3$3())
);
var DesktopWrapper = styled__default.div.withConfig({
  displayName: "RowLabel__DesktopWrapper",
  componentId: "sc-1vih5h1-3"
})(
  ["display:none;", ";"],
  mediumAndUp(
    _templateObject4$1(),
    constants.easing.easeInQuad,
    constants.easing.easeInOutQuad
  )
);
var LabelText$1 = styled__default(TextBase).withConfig({
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
      return React__default.createElement(StatusBadge, {
        label: label,
        color: themes.global.error.base
      });

    case "positive":
      return React__default.createElement(
        LabelText$1,
        {
          primary: true,
          sentiment: "positive",
          variant: "accent"
        },
        label
      );

    case "accent":
      return React__default.createElement(
        LabelText$1,
        {
          primary: true,
          sentiment: "accent",
          variant: "accent"
        },
        label
      );

    case "caution":
      return React__default.createElement(StatusBadge, {
        label: label,
        color: themes.global.caution.dark
      });

    case "neutral":
      return React__default.createElement(StatusBadge, {
        label: label,
        color: themes.global.onyx.light
      });

    default:
      return React__default.createElement(
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
  return React__default.createElement(
    Content$2,
    _extends(
      {
        className: "row__content--top"
      },
      restProps
    ),
    React__default.createElement(
      ContentColumn,
      null,
      React__default.createElement(
        MobileWrapper,
        {
          className: "row__label row__label--mobile",
          "data-index": index
        },
        content
      ),
      React__default.createElement(
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
      React__default.createElement(
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
  index: PropTypes__default.number,
  variant: PropTypes__default.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  isOpen: PropTypes__default.bool,
  children: PropTypes__default.string
};

var rowDataShape = {
  title: PropTypes__default.string.isRequired,
  subTitle: PropTypes__default.string.isRequired,
  dateTitle: PropTypes__default.string.isRequired,
  url: PropTypes__default.string,
  dateSubTitle: PropTypes__default.string.isRequired,
  buttonText: PropTypes__default.string.isRequired,
  buttonVariant: PropTypes__default.oneOf(BUTTON_VARIANTS),
  variant: PropTypes__default.oneOf(["standard", "withLink"]).isRequired,
  label: RowLabel.propTypes.children,
  labelVariant: RowLabel.propTypes.variant,
  linkTitle: PropTypes__default.string,
  linkUrl: PropTypes__default.string,
  linkSubTitle: PropTypes__default.string,
  dateColor: PropTypes__default.string,
  onClick: PropTypes__default.func.isRequired
};
var sectionItemShape = {
  title: PropTypes__default.string.isRequired,
  items: PropTypes__default.arrayOf(
    PropTypes__default.shape({
      title: PropTypes__default.string,
      subTitle: PropTypes__default.string,
      icon: PropTypes__default.node.isRequired,
      onItemClick: PropTypes__default.func
    })
  ).isRequired
};

function _templateObject4$2() {
  var data = _taggedTemplateLiteral([
    "\n    display: inline-block;\n    \n    &.link--hidden {\n      opacity 0;\n      transition: opacity 0.1s ",
    ";\n    }\n  "
  ]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  padding-left: ", ""]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral([
    "\n    padding-bottom: ",
    ";\n    padding-left: ",
    ";\n  "
  ]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var Content$3 = styled__default(Row).withConfig({
  displayName: "RowOptionsLink__Content",
  componentId: "sc-1rt9ucs-0"
})(
  ["width:100%;padding-left:", ";padding-bottom:", ";", ";", ";"],
  ROW_LABEL_AND_LINK_PADDING_LEFT.xSmall,
  spacing.cozy,
  mediumAndUp(
    _templateObject$h(),
    ROW_CONTAINER_VERTICAL_PADDING,
    ROW_LABEL_AND_LINK_PADDING_LEFT.medium
  ),
  largeAndUp(_templateObject2$8(), ROW_LABEL_AND_LINK_PADDING_LEFT.large)
);
var MobileLink = styled__default(Link).withConfig({
  displayName: "RowOptionsLink__MobileLink",
  componentId: "sc-1rt9ucs-1"
})(
  ["display:inline-block;line-height:1.1;", ";"],
  mediumAndUp(_templateObject3$4())
);
var DesktopLink = styled__default(Link).withConfig({
  displayName: "RowOptionsLink__DesktopLink",
  componentId: "sc-1rt9ucs-2"
})(
  [
    "display:none;line-height:1.1;opacity:1;transition:opacity 0.3s ",
    " 0.2s;",
    ";"
  ],
  constants.easing.easeInOutQuad,
  mediumAndUp(_templateObject4$2(), constants.easing.easeInQuad)
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
    React__default.createElement(
      Content$3,
      {
        className: "row__content--bottom"
      },
      React__default.createElement(
        Column,
        null,
        React__default.createElement(
          MobileLink,
          {
            linkUrl: url,
            "data-index": index,
            onClick: onClick,
            className: "link--row-options"
          },
          children
        ),
        React__default.createElement(
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
  index: PropTypes__default.number,
  isOpen: PropTypes__default.bool,
  variant: PropTypes__default.string,
  url: PropTypes__default.string,
  onClick: PropTypes__default.func,
  children: PropTypes__default.node
};

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral([
    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([
    "\n    border-top: 1px solid ",
    ";\n\n    &.container__overflow--expanded {\n      background-color: ",
    ";\n      max-height: 600px;\n      transition: max-height 0.3s ",
    ", opacity 0.3s ",
    " 0.2s;\n      opacity: 1;\n    }\n\n    &.container__overflow--collapsed {\n      transition: max-height 0.3s ",
    ", opacity 0.1s ",
    ";\n      opacity: 0;\n    }\n  "
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([
    "\n      padding: 0 calc(",
    " + ",
    "px);\n    "
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    "\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  \n  &.column__content--expanded {\n    transition: opacity 0.1s ",
    ";\n    opacity: 0;\n  }\n  \n  &.column__content--collapsed {\n    transition: opacity 0.3s ",
    " 0.2s;\n    opacity: 1;\n  }\n\n  &.column__content--fixed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n\n    ",
    ";\n  }\n"
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 32.7%;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral([
    "\n    width: 26.8%;\n    max-width: ",
    ";\n  "
  ]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral([
    "\n    &:hover {\n      background-color: ",
    ";\n    }\n  "
  ]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral([
    "\n    border-radius: 4px;\n    &.row__wrapper--expanded {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 4px 10px 0 rgba(0, 0, 0, 0.19);\n      margin-bottom: 12px;\n    }\n    \n    &.row__wrapper--collapsed {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0;\n      margin-bottom: 0;\n    }\n  "
  ]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var RowWrapper = styled__default.div.withConfig({
  displayName: "RowContent__RowWrapper",
  componentId: "hqtov9-0"
})(
  ["background-color:", ";border-bottom:1px solid ", ";", ";"],
  themes.global.white.base,
  colors.lightGray,
  mediumAndUp(
    _templateObject$i(),
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  )
);
var ListContainer$1 = styled__default.div.withConfig({
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
  themes.global.white.base,
  function(props) {
    return props.rowLabel ? "1px" : "calc(12px + ".concat(spacing.cozy, ")");
  },
  function(props) {
    return props.rowVariant === "withLink"
      ? "1px"
      : "calc(12px + ".concat(spacing.cozy, ")");
  },
  mediumAndUp(
    _templateObject2$9(),
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
var LinkWrapper = styled__default.a.withConfig({
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
  mediumAndUp(_templateObject3$5(), themes.global.primary.light)
);
var DateWrapper = styled__default.div.withConfig({
  displayName: "RowContent__DateWrapper",
  componentId: "hqtov9-3"
})(
  [
    "display:flex;flex-direction:column;justify-content:center;min-width:",
    ";max-width:",
    ";",
    ";",
    ";"
  ],
  ROW_DATE_SMALL_WIDTH,
  ROW_DATE_SMALL_WIDTH,
  mediumAndUp(_templateObject4$3(), ROW_DATE_MEDIUM_WIDTH),
  largeAndUp(_templateObject5())
);
var ContentColumn$1 = styled__default(Column).withConfig({
  displayName: "RowContent__ContentColumn",
  componentId: "hqtov9-4"
})(
  ["display:none;", ";"],
  mediumAndUp(
    _templateObject6(),
    constants.easing.easeInQuad,
    constants.easing.easeInOutQuad,
    mediumAndUp(
      _templateObject7(),
      spacing.moderate,
      spacing.gutters.mediumAndUp / 2
    )
  )
);
var MobileOnlyColumn = styled__default(Column).withConfig({
  displayName: "RowContent__MobileOnlyColumn",
  componentId: "hqtov9-5"
})(["", ";"], mediumAndUp(_templateObject8()));
var ListRowButton = styled__default(StyledButton).withConfig({
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
var OverflowDesktopContainer = styled__default(Column).withConfig({
  displayName: "RowContent__OverflowDesktopContainer",
  componentId: "hqtov9-7"
})(
  ["max-height:0;overflow:hidden;", ";"],
  mediumAndUp(
    _templateObject9(),
    colors.lightGray,
    themes.global.white.base,
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  )
);
var DesktopContainer = styled__default.div.withConfig({
  displayName: "RowContent__DesktopContainer",
  componentId: "hqtov9-8"
})(
  ["display:none;padding-left:", ";position:relative;", ";"],
  spacing.cozy,
  mediumAndUp(_templateObject10())
);
var MobileContainer = styled__default.div.withConfig({
  displayName: "RowContent__MobileContainer",
  componentId: "hqtov9-9"
})(
  ["display:flex;align-items:stretch;", ";"],
  mediumAndUp(_templateObject11())
);
var MultilineText = styled__default(TextBase).withConfig({
  displayName: "RowContent__MultilineText",
  componentId: "hqtov9-10"
})([
  "display:-webkit-box;width:100%;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;"
]);
var SingleLineText = styled__default(TextBase).withConfig({
  displayName: "RowContent__SingleLineText",
  componentId: "hqtov9-11"
})([
  "display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;line-height:1.2;"
]);
var AbsoluteContent = styled__default.div.withConfig({
  displayName: "RowContent__AbsoluteContent",
  componentId: "hqtov9-12"
})([
  "width:100%;position:absolute;left:0;top:100%;display:flex;justify-content:center;"
]);
var ContentRow = styled__default(Row).withConfig({
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

          return React__default.createElement(
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
            React__default.createElement(
              RowLabel,
              {
                isOpen: isOpen,
                index: index,
                variant: labelVariant
              },
              label
            ),
            React__default.createElement(
              ListContainer$1,
              {
                className: "list__container",
                rowVariant: variant,
                rowLabel: label
              },
              React__default.createElement(RowToggler, {
                isOpen: isOpen,
                index: index,
                onExpandItem: onExpandItem,
                onCollapseItem: onCollapseItem,
                className: "row__toggler"
              }),
              React__default.createElement(
                LinkWrapper,
                {
                  role: "link",
                  "aria-label": buttonText,
                  onClick: onClick,
                  href: url, // this class name is for automation purposes please do not remove or modify the name
                  className: "link__wrapper"
                },
                React__default.createElement(
                  DateWrapper,
                  {
                    className: "date__wrapper"
                  },
                  React__default.createElement(
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
                  React__default.createElement(
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
                React__default.createElement(
                  ContentRow,
                  {
                    className: "row__content"
                  },
                  React__default.createElement(
                    MobileOnlyColumn,
                    {
                      className: "column__mobile-only"
                    },
                    React__default.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize,
                        className: "list-row__title"
                      },
                      title
                    ),
                    React__default.createElement(
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
                  React__default.createElement(
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
                    React__default.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize
                      },
                      title
                    )
                  ),
                  React__default.createElement(
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
                    React__default.createElement(
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
                  React__default.createElement(
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
                    React__default.createElement(
                      MultilineText,
                      {
                        responsiveSize: staticProps.defaultResponsiveSize,
                        className: "subtitle"
                      },
                      isOpen && onExpandShow === "title" ? title : subTitle
                    )
                  )
                ),
                React__default.createElement(
                  DesktopContainer,
                  null,
                  React__default.createElement(
                    ListRowButton,
                    {
                      noTransform: true,
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
                    React__default.createElement(
                      AbsoluteContent,
                      null,
                      React__default.createElement(
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
              React__default.createElement(
                MobileContainer,
                null,
                React__default.createElement(
                  IconButton$1,
                  {
                    className: "button--more-info icon-button--last",
                    "data-index": index,
                    "aria-label": "More Info",
                    onClick: onOverflowClick
                  },
                  React__default.createElement(OverflowIcon, {
                    size: 22,
                    color: themes.global.onyx.light
                  })
                )
              )
            ),
            React__default.createElement(
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
            React__default.createElement(
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
  })(React.Component);

ListRowContent.defaultProps = {
  isOpen: false,
  onExpandShow: "subTitle",
  children: null,
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};
ListRowContent.propTypes = {
  rowItem: PropTypes__default.shape(rowDataShape).isRequired,
  isOpen: PropTypes__default.bool,
  index: PropTypes__default.number.isRequired,
  onOverflowClick: PropTypes__default.func.isRequired,
  onExpandShow: PropTypes__default.oneOf(["title", "subTitle"]),
  children: PropTypes__default.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes__default.func.isRequired
};

function _templateObject4$4() {
  var data = _taggedTemplateLiteral([
    "\n    margin-left: 0;\n    margin-right: 0;\n  "
  ]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n  "]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral([
    "\n    padding: 0 ",
    ";\n    &.row__wrapper--expanded {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      margin-bottom: 3px;\n      margin-top: 3px;\n      border-radius: 4px;\n      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);\n      border: 1px solid ",
    ";\n      overflow: hidden;\n    }\n    \n    &.row__wrapper--collapsed {\n      transition: box-shadow 0.3s ",
    ", margin-bottom 0.3s ",
    ";\n      box-shadow: 0;\n      margin-bottom: -1px;\n    }\n  "
  ]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var RowWrapper$1 = styled__default.div.withConfig({
  displayName: "PureRowContent__RowWrapper",
  componentId: "sc-1phjkr-0"
})(
  [
    "background-color:",
    ";border-bottom:1px solid ",
    ";border-top:1px solid ",
    ";border-right:1px solid ",
    ";border-left:1px solid ",
    ";margin-bottom:-1px;padding:0 ",
    ";&:first-child{border-top:0px;}",
    ";.button--expand-or-collapse{position:absolute;right:",
    ";left:",
    ";z-index:10;margin:0;padding:0;height:calc(100% - ",
    ");}"
  ],
  themes.global.white.base,
  themes.global.gray04,
  themes.global.gray04,
  themes.global.white.base,
  themes.global.white.base,
  spacing.cozy,
  mediumAndUp(
    _templateObject$j(),
    spacing.normal,
    constants.easing.easeInOutQuad,
    constants.easing.easeInOutQuad,
    themes.global.gray04,
    constants.easing.easeInQuad,
    constants.easing.easeInQuad
  ),
  function(props) {
    return props.rowTriggerPosition === "right" ? "0" : "auto";
  },
  function(props) {
    return props.rowTriggerPosition === "left" ? "0" : "auto";
  },
  spacing.spacious
);
var ListContainer$2 = styled__default.div.withConfig({
  displayName: "PureRowContent__ListContainer",
  componentId: "sc-1phjkr-1"
})(
  [
    "background-color:",
    ";align-items:stretch;display:flex;padding-top:",
    ";padding-bottom:",
    ";position:relative;"
  ],
  themes.global.white.base,
  spacing.normal,
  spacing.normal
);
var PureOverflowDesktopContainer = styled__default(
  OverflowDesktopContainer
).withConfig({
  displayName: "PureRowContent__PureOverflowDesktopContainer",
  componentId: "sc-1phjkr-2"
})(["padding:0;", ";"], mediumAndUp(_templateObject2$a()));
var MobileContainer$1 = styled__default.div.withConfig({
  displayName: "PureRowContent__MobileContainer",
  componentId: "sc-1phjkr-3"
})(
  ["display:flex;align-items:stretch;", ";"],
  mediumAndUp(_templateObject3$6())
);
var ContentRow$1 = styled__default(Row).withConfig({
  displayName: "PureRowContent__ContentRow",
  componentId: "sc-1phjkr-4"
})(
  ["width:100%;position:relative;margin-left:0;margin-right:0;", ";"],
  mediumAndUp(_templateObject4$4())
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

          return React__default.createElement(
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
            React__default.createElement(
              ListContainer$2,
              {
                className: "list__container"
              },
              rowTriggerPosition === "left" &&
                React__default.createElement(RowToggler, {
                  isOpen: isOpen,
                  index: index,
                  onExpandItem: onExpandItem,
                  onCollapseItem: onCollapseItem,
                  className: "row__toggler"
                }),
              React__default.createElement(
                ContentRow$1,
                {
                  rowTriggerPosition: rowTriggerPosition,
                  className: "row__content"
                },
                header
              ),
              React__default.createElement(
                MobileContainer$1,
                null,
                React__default.createElement(
                  IconButton$1,
                  {
                    className: "button--more-info icon-button--last",
                    "data-index": index,
                    "aria-label": "More Info",
                    onClick: onOverflowClick
                  },
                  React__default.createElement(OverflowIcon, {
                    size: 22,
                    color: themes.global.onyx.light
                  })
                )
              ),
              rowTriggerPosition === "right" &&
                React__default.createElement(RowToggler, {
                  isOpen: isOpen,
                  index: index,
                  onExpandItem: onExpandItem,
                  onCollapseItem: onCollapseItem,
                  className: "row__toggler"
                })
            ),
            React__default.createElement(
              PureOverflowDesktopContainer,
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
  })(React.Component);

PureListRowContent.defaultProps = {
  isOpen: false,
  children: null,
  rowTriggerPosition: "right",
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};
PureListRowContent.propTypes = {
  isOpen: PropTypes__default.bool,
  index: PropTypes__default.number.isRequired,
  onOverflowClick: PropTypes__default.func.isRequired,
  children: PropTypes__default.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes__default.func.isRequired,
  rowTriggerPosition: PropTypes__default.oneOf(["right", "left"])
};

var ListRow = function ListRow(_ref) {
  var children = _ref.children,
    rowItem = _ref.rowItem,
    index = _ref.index,
    _onOverflowClick = _ref.onOverflowClick,
    onExpandItem = _ref.onExpandItem,
    onCollapseItem = _ref.onCollapseItem,
    isPure = _ref.isPure,
    props = _objectWithoutProperties(_ref, [
      "children",
      "rowItem",
      "index",
      "onOverflowClick",
      "onExpandItem",
      "onCollapseItem",
      "isPure"
    ]);

  return React__default.createElement(Consumer$1, null, function(_ref2) {
    var openIndex = _ref2.openIndex,
      expandMultiple = _ref2.expandMultiple,
      renderIntoPortal = _ref2.renderIntoPortal,
      restItemContainerProps = _objectWithoutProperties(_ref2, [
        "openIndex",
        "expandMultiple",
        "renderIntoPortal"
      ]);

    var params = _objectSpread(
      {},
      !isPure && {
        rowItem: rowItem
      },
      {
        isOpen: determineIfOpen(expandMultiple, openIndex, index),
        index: index,
        onOverflowClick: function onOverflowClick() {
          renderIntoPortal(
            _objectSpread(
              {
                children: children,
                contentType: "mobile"
              },
              !isPure && {
                data: rowItem
              }
            )
          );

          _onOverflowClick();
        },
        onExpandItem: onExpandItem,
        onCollapseItem: onCollapseItem
      },
      restItemContainerProps,
      props
    );

    return isPure
      ? React__default.createElement(PureListRowContent, params, children)
      : React__default.createElement(ListRowContent, params, children);
  });
};

ListRow.defaultProps = {
  children: null,
  isPure: false,
  onExpandShow: "subTitle",
  onExpandItem: ListRowContent.defaultProps.onExpandItem,
  onCollapseItem: ListRowContent.defaultProps.onCollapseItem,
  rowItem: {}
};
ListRow.propTypes = {
  rowItem: PropTypes__default.shape(rowDataShape),
  index: PropTypes__default.number.isRequired,
  onOverflowClick: PropTypes__default.func.isRequired,
  onExpandShow: PropTypes__default.oneOf(["title", "subTitle"]),
  children: PropTypes__default.node,
  onExpandItem: ListRowContent.propTypes.onExpandItem,
  onCollapseItem: ListRowContent.propTypes.onCollapseItem,
  isPure: PropTypes__default.bool
};

var ListUnstyled = styled__default.ol.withConfig({
  displayName: "Unstyledstyles__ListUnstyled",
  componentId: "sc-1503ajg-0"
})(["list-style-type:none;margin:0;padding:0;"]);

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", ";\n  "]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var OverflowRow = styled__default(Row).withConfig({
  displayName: "Overflow__OverflowRow",
  componentId: "sc-1cqzhhr-0"
})(
  ["overflow:hidden;", ";"],
  mediumAndUp(_templateObject$k(), spacing.moderate)
);

var ListRowOverflow = function ListRowOverflow(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(OverflowRow, props, children);
};

ListRowOverflow.defaultProps = {
  children: null
};
ListRowOverflow.propTypes = {
  children: PropTypes__default.node
};

function _templateObject$l() {
  var data = _taggedTemplateLiteral([
    "\n    border: none;\n    padding-left: ",
    ";\n    padding-right: ",
    ";\n  "
  ]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var SectionContainer = styled__default(Column).withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-7rwpqw-0"
})(
  ["padding:", " ", ";border-bottom:1px solid ", ";", ";"],
  spacing.moderate,
  spacing.normal,
  colors.lightGray,
  mediumAndUp(_templateObject$l(), spacing.moderate, spacing.moderate)
);
var TitleContainer = styled__default(Row).withConfig({
  displayName: "Section__TitleContainer",
  componentId: "sc-7rwpqw-1"
})(
  ["padding-bottom:", ";&&{flex:0 1 100%;margin-left:0;margin-right:0;}"],
  spacing.moderate
);
var TitleText = styled__default(BoldText).withConfig({
  displayName: "Section__TitleText",
  componentId: "sc-7rwpqw-2"
})(
  ["font-size:", ";color:", ";text-transform:uppercase;"],
  typography.size.uno,
  themes.global.onyx.light
);

var Section = function Section(_ref) {
  var title = _ref.title,
    titleStyle = _ref.titleStyle,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["title", "titleStyle", "children"]);

  return React__default.createElement(
    SectionContainer,
    rest,
    React__default.createElement(
      TitleContainer,
      {
        className: "container__title"
      },
      React__default.createElement(
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
  title: PropTypes__default.string.isRequired,
  titleStyle: PropTypes__default.objectOf(PropTypes__default.any),
  children: PropTypes__default.node
};

var ItemContainer = styled__default.div
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
    return props.onItemClick || props.href ? "pointer" : "text";
  },
  spacing.moderate
);
var IconContainer = styled__default.div.withConfig({
  displayName: "SectionItem__IconContainer",
  componentId: "sc-18zkmdl-1"
})(["padding-right:", ";"], spacing.cozy);
/* stylelint-disable */

var MultiLineLink = styled__default.div
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
    return color || themes.global.primary.base;
  }
);
/* stylelint-enable */

var handleItemClick = function handleItemClick(
  children,
  value,
  event,
  onItemClick,
  url
) {
  if (children && value) {
    value.renderIntoPortal({
      children: children,
      contentType: "desktop"
    });
  }

  if (onItemClick) {
    onItemClick(event, value && value.onCloseRequest);
  }

  if (url && value) {
    value.resetOpenIndex();
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
  return React__default.createElement(Consumer$1, null, function(value) {
    return React__default.createElement(
      ItemContainer,
      _extends(
        {
          key: title,
          role: "link",
          "aria-label": "Section Item",
          onClick: function onClick(event) {
            return handleItemClick(children, value, event, onItemClick, url);
          },
          onItemClick: onItemClick,
          href: url
        },
        itemContainerProps
      ),
      icon && React__default.createElement(IconContainer, null, icon),
      React__default.createElement(
        "div",
        null,
        React__default.createElement(Title, null, title),
        subTitle && React__default.createElement(SecondaryText, null, subTitle)
      )
    );
  });
};

SectionItem.defaultProps = {
  children: null
};
SectionItem.propTypes = {
  item: PropTypes__default.shape({
    title: PropTypes__default.string.isRequired,
    subTitle: PropTypes__default.string,
    url: PropTypes__default.string,
    icon: PropTypes__default.node,
    onItemClick: PropTypes__default.func
  }).isRequired,
  children: PropTypes__default.node
};

var LinkRow = styled__default.div
  .attrs({
    className: "links links__row",
    role: "menubar"
  })
  .withConfig({
    displayName: "Row__LinkRow",
    componentId: "acv6qu-0"
  })([".list-container{position:relative;}"]);

var _React$createContext$4 = React__default.createContext({}),
  Provider$4 = _React$createContext$4.Provider,
  Consumer$4 = _React$createContext$4.Consumer;

var Container$7 = styled__default.div
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
  themes.global.white.base,
  constants.borderRadius.small
);
var Wrapper$2 = styled__default.div.withConfig({
  displayName: "List__Wrapper",
  componentId: "sc-16g2wmd-1"
})(
  ["padding:", ";&.wrapper--has-after{padding:", " ", " 0 ", ";}"],
  spacing.cozy,
  spacing.cozy,
  spacing.cozy,
  spacing.cozy
);
var AfterWrapper = styled__default.div.withConfig({
  displayName: "List__AfterWrapper",
  componentId: "sc-16g2wmd-2"
})(
  ["padding:0 ", ";border-top:1px solid ", ";color:", ";"],
  spacing.cozy,
  themes.global.gray04,
  themes.global.darkFill
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
            onItemClick = _this$props.onItemClick,
            rest = _objectWithoutProperties(_this$props, [
              "children",
              "renderAfter",
              "onItemClick"
            ]);

          return React__default.createElement(
            Provider$4,
            {
              value: this.state
            },
            React__default.createElement(
              Container$7,
              rest,
              React__default.createElement(
                Wrapper$2,
                {
                  className: classNames({
                    "wrapper--has-after": !!renderAfter
                  })
                },
                children
              ),
              renderAfter &&
                React__default.createElement(AfterWrapper, null, renderAfter)
            )
          );
        }
      }
    ]);

    return LinkList;
  })(React.Component);

LinkList.defaultProps = {
  selectedIndex: -1,
  onItemClick:
    /* istanbul ignore next */
    function onItemClick() {},
  renderAfter: null
};
LinkList.propTypes = {
  children: PropTypes__default.node.isRequired,
  onItemClick: PropTypes__default.func,
  selectedIndex: PropTypes__default.number,
  renderAfter: PropTypes__default.oneOfType([
    PropTypes__default.element,
    PropTypes__default.node
  ])
};

var StyledLink = styled__default.a.withConfig({
  displayName: "Item__StyledLink",
  componentId: "l3gsar-0"
})(
  [
    'display:inline-block;text-decoration:none;outline:0;border:0;position:relative;.links__list &{width:100%;text-align:left;}&:focus,&:hover{outline:0;}&.link--has-other.link--open:after{content:"";display:inline-block;border-bottom:4px solid ',
    ";position:absolute;left:0;right:0;bottom:0;}"
  ],
  themes.global.primary.base
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
        "hasListener",
        false
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "ref",
        React.createRef()
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

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleOutsideClick",
        function(e) {
          if (
            _this.ref &&
            _this.ref.current &&
            !_this.ref.current.contains(e.target)
          ) {
            _this.close();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "attachListener",
        function() {
          if (
            (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
            "object"
          ) {
            document.addEventListener("click", _this.handleOutsideClick);
            _this.hasListener = true;
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "removeListener",
        function() {
          if (
            (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
            "object"
          ) {
            document.removeEventListener("click", _this.handleOutsideClick);
            _this.hasListener = false;
          }
        }
      );

      return _this;
    }

    _createClass(LinkItem, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var open = this.state.open;
          var disableHoverEvents = this.props.disableHoverEvents;

          if ("ontouchstart" in document.documentElement) {
            this.setState({
              touchEventsExist: true
            }); // eslint-disable-line
          }

          if (open && disableHoverEvents && !this.hasListener)
            this.attachListener();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var prevOpen = prevState.open;
          var open = this.state.open;
          var disableHoverEvents = this.props.disableHoverEvents;

          if (!prevOpen && open && disableHoverEvents && !this.hasListener) {
            this.attachListener();
          } else if (prevOpen && !open && this.hasListener) {
            this.removeListener();
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.hasListener) this.removeListener();
        }
      },
      {
        key: "render",
        value: function render() {
          var touchEventsExist = this.state.touchEventsExist;

          var _this$props = this.props,
            children = _this$props.children,
            rel = _this$props.rel,
            target = _this$props.target,
            role = _this$props.role,
            className = _this$props.className,
            disableHoverEvents = _this$props.disableHoverEvents,
            props = _objectWithoutProperties(_this$props, [
              "children",
              "rel",
              "target",
              "role",
              "className",
              "disableHoverEvents"
            ]);

          var _Children$toArray = React.Children.toArray(children),
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
            ? React__default.createElement(
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
            : React__default.createElement(
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
          var hoverEvents = disableHoverEvents
            ? {}
            : {
                onMouseEnter: touchEventsExist ? null : this.open,
                onMouseLeave: this.close
              };
          return React__default.createElement(
            "span",
            _extends({}, hoverEvents, {
              ref: disableHoverEvents ? this.ref : undefined,
              className: this.state.open
                ? "list-container list-container--open"
                : "list-container list-container--closed",
              onClick: this.toggle,
              role: "none"
            }),
            content,
            other
          );
        }
      }
    ]);

    return LinkItem;
  })(React__default.Component);

_defineProperty(LinkItem, "propTypes", {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  href: PropTypes__default.string,
  target: PropTypes__default.string,
  rel: PropTypes__default.string,
  role: PropTypes__default.string,
  disableHoverEvents: PropTypes__default.bool
});

_defineProperty(LinkItem, "defaultProps", {
  children: null,
  className: "",
  href: null,
  target: "_self",
  rel: null,
  role: null,
  disableHoverEvents: false
});

var ItemContainer$1 = styled__default.div
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
  themes.global.darkFill,
  typography.size.kilo,
  typography.weight.regular,
  constants.borderRadius.small,
  colors.shale,
  themes.global.primary.base,
  themes.global.white.base,
  spacing.slim
);
var LinkItemContainer = styled__default(ItemContainer$1).withConfig({
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

  return React__default.createElement(Consumer$4, null, function(_ref2) {
    var onItemClick = _ref2.onItemClick,
      selectedIndex = _ref2.selectedIndex;
    return href
      ? React__default.createElement(
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
      : React__default.createElement(
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
  children: PropTypes__default.node,
  index: PropTypes__default.number,
  onClick: PropTypes__default.func,
  href: PropTypes__default.string
};

var LinkRow$1 = styled__default(LinkRow).withConfig({
  displayName: "Links__LinkRow",
  componentId: "sc-1qd1aa5-0"
})(["height:60px;"]);
var LinkList$1 = styled__default(LinkList)
  .attrs({
    role: "menu"
  })
  .withConfig({
    displayName: "Links__LinkList",
    componentId: "sc-1qd1aa5-1"
  })(["top:60px;left:-74%;"]);
var Link$3 = styled__default(LinkItem).withConfig({
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
  themes.global.white.base,
  typography.size.kilo,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  themes.global.onyx.base,
  typography.weight.regular,
  themes.global.white.base,
  themes.global.onyx.base,
  colors.shale
);
var Links = {
  Link: Link$3,
  LinkList: LinkList$1,
  LinkListItem: ListItem,
  LinkRow: LinkRow$1
};

function _templateObject$m() {
  var data = _taggedTemplateLiteral([
    "\n    padding-right: ",
    "px;\n    padding-left: ",
    "px;\n\n    &.nav-button--last {\n        padding-right: ",
    "px;\n    }\n\n    &.nav-button--first {\n        padding-left: ",
    "px;\n    }\n  "
  ]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var BaseButton = styled__default.button.withConfig({
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
  themes.global.white.base,
  typography.size.kilo,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  themes.global.onyx.base,
  typography.weight.regular,
  spacing.gutters.small,
  spacing.gutters.small,
  smallAndUp(
    _templateObject$m(),
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
    return React__default.createElement(
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

  return React__default.createElement(
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
  children: PropTypes__default.node,
  href: PropTypes__default.string,
  target: PropTypes__default.string,
  rel: PropTypes__default.string,
  isFirst: PropTypes__default.bool,
  isLast: PropTypes__default.bool,
  className: PropTypes__default.string
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

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 20 17",
      width: size,
      height: size,
      fill: color
    }),
    children,
    React__default.createElement("path", {
      d: "M 0 0 H 20 V 3 H 0 z M 0 7 H 20 V 10 H 0 z M 0 14 H 20 V 17 H 0 z"
    })
  );
};

MenuIcon.displayName = "MenuIcon";
MenuIcon.propTypes = {
  size: PropTypes__default.number,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};
MenuIcon.defaultProps = {
  size: 24,
  color: "currentcolor",
  children: null
};

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", "px;\n  "]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral([
    "\n    padding-left: ",
    "px;\n    padding-right: ",
    "px;\n  "
  ]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var LogoBtn = styled__default(Button$1).withConfig({
  displayName: "Buttons__LogoBtn",
  componentId: "s6wlak-0"
})(
  ["padding-left:", "px;padding-right:", "px;", " ", ";"],
  spacing.gutters.small / 2,
  spacing.gutters.small / 2,
  smallAndUp(
    _templateObject$n(),
    spacing.gutters.mediumAndUp / 2,
    spacing.gutters.mediumAndUp / 2
  ),
  mediumAndUp(_templateObject2$b(), spacing.gutters.mediumAndUp)
);

var LogoContainer = function LogoContainer(_ref) {
  var children = _ref.children,
    href = _ref.href,
    props = _objectWithoutProperties(_ref, ["children", "href"]);

  return React__default.createElement(
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
  children: PropTypes__default.node,
  href: PropTypes__default.string
};
LogoContainer.defaultProps = {
  children: null,
  href: null
};

var MenuButton = function MenuButton(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, ["children"]);

  return React__default.createElement(
    Button$1,
    _extends(
      {
        isFirst: true
      },
      props
    ),
    React__default.createElement(MenuIcon, {
      size: 20
    }),
    children
  );
};

MenuButton.propTypes = {
  children: PropTypes__default.node
};
MenuButton.defaultProps = {
  children: null
};

var SearchButton = function SearchButton(_ref3) {
  var children = _ref3.children,
    props = _objectWithoutProperties(_ref3, ["children"]);

  return React__default.createElement(
    Button$1,
    props,
    React__default.createElement(SearchIconDeprecated, {
      size: 21
    }),
    children
  );
};

SearchButton.propTypes = {
  children: PropTypes__default.node
};
SearchButton.defaultProps = {
  children: null
};

var UserButton = function UserButton(_ref4) {
  var children = _ref4.children,
    iconProps = _ref4.iconProps,
    props = _objectWithoutProperties(_ref4, ["children", "iconProps"]);

  return React__default.createElement(
    Button$1,
    props,
    React__default.createElement(
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
  children: PropTypes__default.node,
  iconProps: PropTypes__default.objectOf(PropTypes__default.string)
};
UserButton.defaultProps = {
  children: null,
  iconProps: null
};

var TextButton = function TextButton(_ref5) {
  var children = _ref5.children,
    props = _objectWithoutProperties(_ref5, ["children"]);

  return React__default.createElement(Button$1, props, children);
};

TextButton.propTypes = {
  children: PropTypes__default.node
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

var HamburgerContent = styled__default.span.withConfig({
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
var HamburgerIconWrapper = styled__default.span.withConfig({
  displayName: "HamburgerIcon__HamburgerIconWrapper",
  componentId: "sc-1j3ukq5-1"
})([
  "height:17px;width:20px;position:relative;display:flex;align-items:center;"
]);

var HamburgerIcon = function HamburgerIcon(props) {
  return React__default.createElement(
    HamburgerIconWrapper,
    props,
    React__default.createElement(HamburgerContent, null)
  );
};

var MenuButton$1 = function MenuButton(_ref) {
  var iconClassName = _ref.iconClassName,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, ["iconClassName", "className"]);

  return React__default.createElement(
    Button$1,
    _extends({}, props, {
      className: classNames("menu-button", className)
    }),
    React__default.createElement(HamburgerIcon, {
      className: iconClassName
    })
  );
};

MenuButton$1.propTypes = {
  isLast: PropTypes__default.bool,
  className: PropTypes__default.string
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
            return React__default.createElement(
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
        "getHeaderLayout",
        function(_ref) {
          var toggleDrawer = _ref.toggleDrawer,
            isOpen = _ref.isOpen;
          return React__default.createElement(
            HeaderContent,
            null,
            React__default.createElement(
              "div",
              null,
              _this.getHeaderContent({
                toggleDrawer: toggleDrawer,
                isOpen: isOpen
              })
            ),
            React__default.createElement(
              CloseButton,
              {
                type: "button",
                onClick: toggleDrawer
              },
              React__default.createElement(HamburgerIcon, {
                className: classNames({
                  hamburger: true,
                  "hamburger--opened": isOpen,
                  "hamburger--closed": !isOpen
                })
              })
            )
          );
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
        function(_ref2) {
          var toggleDrawer = _ref2.toggleDrawer,
            isOpen = _ref2.isOpen,
            withSpotLight = _ref2.withSpotLight;

          var headerLayout = _this.getHeaderLayout({
            toggleDrawer: toggleDrawer,
            isOpen: isOpen
          });

          return withSpotLight
            ? React__default.createElement(
                Gradient,
                {
                  className: "gradient--spotlight",
                  style: {
                    height: "60px",
                    position: "relative"
                  }
                },
                headerLayout
              )
            : headerLayout;
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
            withSpotLight = _this$props.withSpotLight,
            rest = _objectWithoutProperties(_this$props, [
              "className",
              "withSpotLight"
            ]);

          return React__default.createElement(Consumer, null, function(_ref3) {
            var isOpen = _ref3.isOpen,
              toggleDrawer = _ref3.toggleDrawer;
            return React__default.createElement(
              DrawerContainer,
              _extends({}, omitKeys(["children", "header"], rest), {
                className: classNames(
                  {
                    "drawer__content--open": isOpen
                  },
                  className
                )
              }),
              React__default.createElement(
                DrawerContent,
                null,
                _this2.renderHeader({
                  toggleDrawer: toggleDrawer,
                  isOpen: isOpen,
                  withSpotLight: withSpotLight
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
  })(React__default.Component);

_defineProperty(Drawer, "propTypes", {
  children: PropTypes__default.oneOfType([
    PropTypes__default.node,
    PropTypes__default.element,
    PropTypes__default.func
  ]),
  header: PropTypes__default.oneOfType([
    PropTypes__default.node,
    PropTypes__default.func,
    PropTypes__default.string
  ]),
  withSpotLight: PropTypes__default.bool
});

_defineProperty(Drawer, "defaultProps", {
  children: null,
  header: null,
  withSpotLight: true
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
            React__default.createElement(
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

          return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(DrawerMenu, "propTypes", {
  onClick: PropTypes__default.func,
  children: PropTypes__default.oneOfType([
    PropTypes__default.node,
    PropTypes__default.element,
    PropTypes__default.func
  ]),
  setContent: PropTypes__default.func.isRequired,
  toggleDrawer: PropTypes__default.func.isRequired,
  isOpen: PropTypes__default.bool.isRequired
});

_defineProperty(DrawerMenu, "defaultProps", {
  onClick: noop$2,
  children: null
});

var DrawerMenuWrapper = function DrawerMenuWrapper(props) {
  return React__default.createElement(Consumer, null, function() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$setContent = _ref.setContent,
      setContent = _ref$setContent === void 0 ? noop$2 : _ref$setContent,
      _ref$toggleDrawer = _ref.toggleDrawer,
      toggleDrawer = _ref$toggleDrawer === void 0 ? noop$2 : _ref$toggleDrawer;

    return React__default.createElement(
      DrawerMenu,
      _objectSpread({}, props, {
        isOpen: isOpen,
        setContent: setContent,
        toggleDrawer: toggleDrawer
      })
    );
  });
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["width: 50%;"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 44px;\n  "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n  "]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral([
    "\n      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral([
    "\n        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);\n      "
  ]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var Nav = styled__default.nav
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
  themes.global.white.base,
  typography.weight.semiBold,
  constants.easing.easeInOutQuad,
  themes.global.white.base,
  smallAndUp(_templateObject$o()),
  mediumAndUp(_templateObject2$c())
);
var Container$8 = styled__default.div.withConfig({
  displayName: "NavBar__Container",
  componentId: "sc-97sk6i-1"
})(
  [
    "width:100%;height:60px;position:relative;display:flex;flex-direction:row;align-items:center;align-content:center;z-index:5;",
    ";",
    ";"
  ],
  mediumAndUp(_templateObject3$7()),
  xLargeAndUp(_templateObject4$5())
);
var Right = styled__default.div.withConfig({
  displayName: "NavBar__Right",
  componentId: "sc-97sk6i-2"
})(["display:flex;flex:1 0 auto;justify-content:flex-end;height:60px;"]);
var Left = styled__default.div.withConfig({
  displayName: "NavBar__Left",
  componentId: "sc-97sk6i-3"
})(
  [
    "flex:0 1 auto;width:310px;min-width:310px;max-width:310px;align-items:center;height:60px;display:flex;padding-left:",
    "px;",
    ";"
  ],
  parseInt(spacing.normal, 10) / 2,
  mediumAndUp(_templateObject5$1())
);
var MessageContainer = styled__default.div.withConfig({
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

  return React__default.createElement(
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
      ? React__default.createElement(
          MessageContainer,
          null,
          React__default.createElement(
            Row,
            null,
            React__default.createElement(
              Column,
              {
                role: "note"
              },
              message
            )
          )
        )
      : null,
    React__default.createElement(Container$8, null, children)
  );
};

NavBar.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  position: PropTypes__default.oneOf(["relative", "absolute", "fixed"]),
  invert: PropTypes__default.bool,
  message: PropTypes__default.node,
  backgroundColor: PropTypes__default.string,
  style: PropTypes__default.objectOf(PropTypes__default.string)
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

var Input = styled__default.input
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
    return props.invert ? themes.global.onyx.base : themes.global.white.base;
  },
  function(props) {
    return props.slim ? typography.size.hecto : typography.size.kilo;
  },
  themes.global.white.base,
  themes.global.onyx.base,
  function(props) {
    return props.invert ? "#26262699" : themes.global.white.base;
  }
);
var Container$9 = styled__default.div.withConfig({
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
    return props.invert ? themes.global.onyx.base : themes.global.white.base;
  },
  function(props) {
    return props.invert
      ? themes.global.white.base
      : themes.global.white.lighter;
  }
);
var IconContainer$1 = styled__default.div.withConfig({
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
    return props.invert ? themes.global.onyx.base : themes.global.white.base;
  },
  themes.global.onyx.base
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

          return React__default.createElement(
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
            React__default.createElement(
              IconContainer$1,
              {
                slim: slim,
                invert: invert
              },
              React__default.createElement(
                SearchIcon,
                _extends(
                  {
                    size: "small"
                  },
                  iconProps
                )
              )
            ),
            React__default.createElement(
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
  })(React__default.Component);

_defineProperty(SearchInput, "propTypes", {
  onBlur: PropTypes__default.func,
  onFocus: PropTypes__default.func,
  slim: PropTypes__default.bool,
  invert: PropTypes__default.bool,
  className: PropTypes__default.string,
  iconProps: PropTypes__default.objectOf(PropTypes__default.string)
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

function _templateObject3$8() {
  var data = _taggedTemplateLiteral([
    "\n    max-height: ",
    ";\n    border: 1px solid ",
    ";\n    border-top: none;\n    border-bottom-left-radius: ",
    ";\n    border-bottom-right-radius: ",
    ";\n  "
  ]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral([
    "\n    width: 40px;\n    justify-content: left;\n  "
  ]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var SearchContainer = styled__default.div.withConfig({
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
    ";visibility:visible;> *{visibility:visible;}&.search--container-icon-only{visibility:hidden;> *{visibility:hidden;}&.search--container-focused,&.search--container-has-value{visibility:visible;> *{visibility:visible;}}}"
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
var StyledSearchIcon = styled__default.button.withConfig({
  displayName: "Searchstyles__StyledSearchIcon",
  componentId: "vkrxgh-1"
})(
  [
    "height:100%;display:flex;align-items:center;color:",
    ";padding:0;border:none;background:transparent;outline:none;.search--container &{visibility:visible;}"
  ],
  function(_ref5) {
    var isFocused = _ref5.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.gray02;
  }
);
var OpenSearch = styled__default(StyledSearchIcon).withConfig({
  displayName: "Searchstyles__OpenSearch",
  componentId: "vkrxgh-2"
})(["position:absolute;left:0;width:56px;"]);
var SearchIconContainer = styled__default.div.withConfig({
  displayName: "Searchstyles__SearchIconContainer",
  componentId: "vkrxgh-3"
})(["position:relative;"]);
var StyledInput = styled__default.input
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
    ";}&::-ms-clear{display:none;}:focus{outline:none;}"
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
var Icon = styled__default(SearchIcon).withConfig({
  displayName: "Searchstyles__Icon",
  componentId: "vkrxgh-5"
})(["margin:0 ", ";"], spacing.moderate);
var Cancel = styled__default.button.withConfig({
  displayName: "Searchstyles__Cancel",
  componentId: "vkrxgh-6"
})(
  [
    "border:none;background:transparent;outline:none;display:",
    ";align-items:center;margin-left:",
    ";color:",
    ";padding:0 ",
    " 0 0;height:100%;",
    ";"
  ],
  function(_ref9) {
    var showElement = _ref9.showElement;
    return showElement ? "flex" : "none";
  },
  spacing.cozy,
  function(_ref10) {
    var isFocused = _ref10.isFocused;
    return isFocused ? themes.global.primary.base : themes.global.white.base;
  },
  spacing.moderate,
  mediumAndUp(_templateObject$p())
);
var Clear = styled__default.button.withConfig({
  displayName: "Searchstyles__Clear",
  componentId: "vkrxgh-7"
})(
  [
    "background:transparent;outline:none;border:none;padding:0;height:100%;width:44px;margin-left:",
    ";display:",
    ";justify-content:center;align-items:center;cursor:pointer;color:",
    ";svg{margin-left:",
    ";}",
    ";"
  ],
  spacing.cozy,
  function(_ref11) {
    var value = _ref11.value;
    return value ? "flex" : "none";
  },
  function(_ref12) {
    var isFocused = _ref12.isFocused;
    return !isFocused ? themes.global.white.base : themes.global.gray02;
  },
  function(_ref13) {
    var variant = _ref13.variant;
    return variant === SMALL ? spacing.cozy : 0;
  },
  mediumAndUp(_templateObject2$d())
);
var SearchSuggest = styled__default.div.withConfig({
  displayName: "Searchstyles__SearchSuggest",
  componentId: "vkrxgh-8"
})(
  [
    "max-width:100%;height:100%;max-height:100%;padding:",
    ";background-color:",
    ";box-shadow:",
    ";overflow-y:auto;box-sizing:border-box;",
    ";"
  ],
  spacing.moderate,
  themes.global.white.base,
  cardBoxShadow,
  mediumAndUp(
    _templateObject3$8(),
    SuggestMaxHeight,
    themes.global.gray02,
    constants.borderRadius.small,
    constants.borderRadius.small
  )
);
var MobileActiveSearch = styled__default.div.withConfig({
  displayName: "Searchstyles__MobileActiveSearch",
  componentId: "vkrxgh-9"
})(
  [
    "position:fixed;z-index:",
    ";top:0;width:100%;left:0;.search--container{padding-left:",
    ";border-radius:0;border-top:transparent;border-left:transparent;border-right:transparent;}.search--search-icon{display:none;}"
  ],
  zIndex.searchsuggest.base,
  spacing.moderate
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

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "containerClick",
        function() {
          _this.inputClicked = true;
          global.window.removeEventListener("click", _this.windowClick);
          global.window.addEventListener("click", _this.windowClick);
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "windowClick",
        function() {
          if (!_this.inputClicked) {
            _this.blurInput();
          }

          _this.inputClicked = false;
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "blurInput",
        function() {
          global.window.removeEventListener("click", _this.windowClick);
          var onBlur = _this.props.onBlur;
          var isFocused = _this.state.isFocused;

          if (isFocused) {
            _this.setState({
              isFocused: false
            });

            onBlur();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "focusInput",
        function() {
          var onFocus = _this.props.onFocus;
          var isFocused = _this.state.isFocused;

          if (!isFocused) {
            _this.setState(
              {
                isFocused: true
              },
              function() {
                return _this.inputRef.current.focus();
              }
            );

            onFocus();
          }

          _this.inputRef.current.focus();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "searchIconClick",
        function() {
          var searchIconSelect = _this.props.searchIconSelect;

          _this.focusInput();

          searchIconSelect();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "clearTextClick",
        function() {
          var _this$props = _this.props,
            clearText = _this$props.clearText,
            isMobile = _this$props.isMobile;

          if (!isMobile) {
            _this.focusInput();
          }

          clearText();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "cancelClick",
        function() {
          var cancelCallback = _this.props.cancelCallback;

          _this.setState({
            isFocused: false
          });

          cancelCallback();
        }
      );

      _this.state = {
        isFocused: false
      };
      _this.inputRef = React__default.createRef();
      _this.inputClicked = false;
      return _this;
    }

    _createClass(SearchInput, [
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          global.window.removeEventListener("click", this.windowClick);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            variant = _this$props2.variant,
            placeholder = _this$props2.placeholder,
            value = _this$props2.value,
            onChange = _this$props2.onChange,
            className = _this$props2.className,
            iconOnly = _this$props2.iconOnly,
            searchBtnAreaLabel = _this$props2.searchBtnAreaLabel,
            clearBtnAreaLabel = _this$props2.clearBtnAreaLabel,
            cancelBtnAreaLabel = _this$props2.cancelBtnAreaLabel,
            inputAreaLabel = _this$props2.inputAreaLabel,
            isSuggestOpened = _this$props2.isSuggestOpened,
            hasBackground = _this$props2.hasBackground,
            isMobile = _this$props2.isMobile,
            onFocus = _this$props2.onFocus,
            onBlur = _this$props2.onBlur,
            rest = _objectWithoutProperties(_this$props2, [
              "variant",
              "placeholder",
              "value",
              "onChange",
              "className",
              "iconOnly",
              "searchBtnAreaLabel",
              "clearBtnAreaLabel",
              "cancelBtnAreaLabel",
              "inputAreaLabel",
              "isSuggestOpened",
              "hasBackground",
              "isMobile",
              "onFocus",
              "onBlur"
            ]);

          var isFocused = this.state.isFocused;
          var isStyleForFocusedUsed = !hasBackground || isFocused;
          var showCancelButton = isFocused && isMobile;
          return React__default.createElement(
            SearchContainer,
            _extends(
              {
                variant: variant,
                isFocused: isStyleForFocusedUsed,
                isSuggestOpened: isSuggestOpened
              },
              rest,
              {
                onClick: this.containerClick,
                className: classNames("search--container", className, {
                  "search--container-has-value": value,
                  "search--container-icon-only": iconOnly,
                  "search--container-focused": isFocused
                })
              }
            ),
            React__default.createElement(
              StyledSearchIcon,
              {
                type: "button",
                variant: variant,
                isFocused: isStyleForFocusedUsed,
                onClick: this.searchIconClick,
                "aria-label": searchBtnAreaLabel,
                className: "search--search-icon"
              },
              React__default.createElement(Icon, {
                size: variant,
                color: "currentColor"
              })
            ),
            React__default.createElement(StyledInput, {
              variant: variant,
              placeholder: placeholder,
              value: value,
              onChange: onChange,
              onFocus: this.focusInput,
              isFocused: isStyleForFocusedUsed,
              ref: this.inputRef,
              "aria-label": inputAreaLabel,
              className: classNames("search--input", {
                "search--input-focused": isFocused
              })
            }),
            React__default.createElement(
              Clear,
              {
                type: "button",
                onClick: this.clearTextClick,
                value: value,
                "aria-label": clearBtnAreaLabel,
                className: "search--clear-icon",
                isFocused: isStyleForFocusedUsed,
                variant: variant
              },
              React__default.createElement(ClearIcon, {
                size: variant,
                color: "currentColor"
              })
            ),
            React__default.createElement(
              Cancel,
              {
                type: "button",
                isFocused: isStyleForFocusedUsed,
                showElement: showCancelButton,
                onClick: this.cancelClick,
                "aria-label": cancelBtnAreaLabel,
                className: "search--cancel-icon",
                iconOnly: iconOnly
              },
              "Cancel"
            )
          );
        }
      }
    ]);

    return SearchInput;
  })(React.Component);

SearchInput$1.propTypes = {
  variant: PropTypes__default.oneOf(SIZES_SL),
  placeholder: PropTypes__default.string,
  className: PropTypes__default.string,
  searchBtnAreaLabel: PropTypes__default.string,
  clearBtnAreaLabel: PropTypes__default.string,
  cancelBtnAreaLabel: PropTypes__default.string,
  inputAreaLabel: PropTypes__default.string,
  value: PropTypes__default.string.isRequired,
  onChange: PropTypes__default.func.isRequired,
  onFocus: PropTypes__default.func,
  onBlur: PropTypes__default.func,
  searchIconSelect: PropTypes__default.func,
  clearText: PropTypes__default.func,
  cancelCallback: PropTypes__default.func,
  hasBackground: PropTypes__default.bool,
  iconOnly: PropTypes__default.bool,
  isSuggestOpened: PropTypes__default.bool,
  isMobile: PropTypes__default.bool
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
  iconOnly: false,
  className: "",
  searchBtnAreaLabel: "Search button",
  clearBtnAreaLabel: "Clear button",
  cancelBtnAreaLabel: "Cancel button",
  inputAreaLabel: "Search input",
  isSuggestOpened: false,
  isMobile: false
};
SearchInput$1.displayName = "SearchComponent";

function withMobile(SearchComponent) {
  return (
    /*#__PURE__*/
    (function(_Component) {
      _inherits(_class2, _Component);

      function _class2(props) {
        var _this;

        _classCallCheck(this, _class2);

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(_class2).call(this, props)
        );

        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(_this)),
          "openSearch",
          function() {
            var onFocus = _this.props.onFocus;

            _this.setState(
              {
                isMobileVisible: true
              },
              function() {
                return _this.mobileRef.current.focusInput();
              }
            );

            onFocus();
          }
        );

        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(_this)),
          "cancelClick",
          function() {
            var cancelCallback = _this.props.cancelCallback;

            _this.setState({
              isMobileVisible: false
            });

            cancelCallback();
          }
        );

        _this.state = {
          isMobileVisible: false
        };
        _this.mobileRef = React__default.createRef();
        return _this;
      }

      _createClass(_class2, [
        {
          key: "render",
          value: function render() {
            var isMobileVisible = this.state.isMobileVisible;
            return React__default.createElement(
              React__default.Fragment,
              null,
              !isMobileVisible &&
                React__default.createElement(
                  SearchComponent,
                  _extends({}, this.props, {
                    onFocus: this.openSearch,
                    isMobile: false
                  })
                ),
              isMobileVisible &&
                React__default.createElement(
                  MobileActiveSearch,
                  null,
                  React__default.createElement(
                    SearchComponent,
                    _extends({}, this.props, {
                      cancelCallback: this.cancelClick,
                      ref: this.mobileRef,
                      isMobile: true
                    })
                  )
                )
            );
          }
        }
      ]);

      return _class2;
    })(React.Component)
  );
}

var SearchInputMobile = withMobile(SearchInput$1);
SearchInputMobile.defaultProps = {
  cancelCallback: function cancelCallback() {},
  onFocus: function onFocus() {}
};
SearchInputMobile.displayName = "SearchInputMobile";

function _templateObject4$6() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral([
    "\n    padding-top: ",
    ";\n    padding-bottom: ",
    ";\n  "
  ]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}

var getSpacing = function getSpacing(val) {
  return spacing[val] || val || 0;
};

var Spacing = styled__default.div.withConfig({
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
    _templateObject$q(),
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
    _templateObject2$e(),
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
    _templateObject3$9(),
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
    _templateObject4$6(),
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
var spacingShape = PropTypes__default.shape({
  xSmall: PropTypes__default.string,
  small: PropTypes__default.string,
  medium: PropTypes__default.string,
  large: PropTypes__default.string,
  xLarge: PropTypes__default.string
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

var spanStyles = styled.css(["cursor:text;&:hover{color:currentColor;}"]);
var StyledWrapper = styled__default.li.withConfig({
  displayName: "BreadcrumbItem__StyledWrapper",
  componentId: "x7eejr-0"
})(["white-space:nowrap;"]);
var StyledLink$1 = styled__default(Link).withConfig({
  displayName: "BreadcrumbItem__StyledLink",
  componentId: "x7eejr-1"
})(["", ";"], function(props) {
  return getAsProp(props).as === "span" ? spanStyles : "";
});

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var position = _ref.position,
    children = _ref.children,
    href = _ref.href,
    size = _ref.size,
    weight = _ref.weight,
    variant = _ref.variant,
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

  return React__default.createElement(
    StyledWrapper,
    null,
    React__default.createElement(
      StyledLink$1,
      _extends({}, props, {
        size: size,
        weight: weight,
        variant: variant,
        primary: primary,
        accent: null,
        href: href || null
      }),
      children
    )
  );
};

BreadcrumbItem.propTypes = {
  position: PropTypes__default.string.isRequired,
  href: PropTypes__default.string,
  children: PropTypes__default.node.isRequired,
  size: size,
  responsiveSize: responsiveSize,
  weight: weight,
  variant: variant,
  primary: PropTypes__default.bool
};
BreadcrumbItem.defaultProps = {
  href: "",
  variant: "light",
  size: "uno",
  weight: "semiBold",
  primary: true,
  responsiveSize: null
};

var StyledBreadcrumb = styled__default(ListUnstyled).withConfig({
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

  return React__default.createElement(
    "nav",
    {
      style: {
        overflow: "hidden",
        maxWidth: "100%"
      }
    },
    React__default.createElement(
      StyledBreadcrumb,
      _extends({}, props, {
        className: classNames(className, "breadcrumb--".concat(variant)),
        childrenLen: React__default.Children.count(children)
      }),
      children
    )
  );
};

Breadcrumb.propTypes = {
  children: PropTypes__default.node.isRequired,
  className: PropTypes__default.string,
  variant: PropTypes__default.oneOf(["light", "dark", "accent", "none"])
};
Breadcrumb.defaultProps = {
  variant: "light",
  className: null
};

Breadcrumb.Item = BreadcrumbItem;

var StyledResponsiveImage = styled__default.div
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
  image: PropTypes__default.string.isRequired,
  height: PropTypes__default.number.isRequired,
  width: PropTypes__default.number.isRequired
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
            React__default.createElement(
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
              React__default.createElement(StyledImageSeo, {
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
  })(React.PureComponent);

ResponsiveImage.displayName = "ResponsiveImage";
ResponsiveImage.propTypes = {
  loader: PropTypes__default.node,
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  height: PropTypes__default.number,
  width: PropTypes__default.number,
  children: PropTypes__default.node,
  imageRef: PropTypes__default.shape({
    current: PropTypes__default.object
  }),
  backgroundRef: PropTypes__default.shape({
    current: PropTypes__default.object
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

var StyledStaticImage = styled__default.img
  .attrs({
    className: "image image--static"
  })
  .withConfig({
    displayName: "Staticstyles__StyledStaticImage",
    componentId: "pm1g26-0"
  })(["position:relative;width:100%;max-width:100%;"]);
StyledStaticImage.propTypes = {
  src: PropTypes__default.string.isRequired
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
            React__default.createElement(
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
  })(React.PureComponent);

StaticImage.displayName = "StaticImage";
StaticImage.propTypes = {
  loader: PropTypes__default.node,
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  height: PropTypes__default.number,
  width: PropTypes__default.number,
  imageRef: PropTypes__default.shape({
    current: PropTypes__default.object
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

var RoundContainer = styled__default.div.withConfig({
  displayName: "ThumbnailCircle__RoundContainer",
  componentId: "mid6me-0"
})(
  [
    "border:solid 1px ",
    ";align-items:center;justify-content:center;border-radius:50%;overflow:hidden;display:flex;position:relative;padding-top:",
    ";width:",
    ";& > img{position:absolute;height:100%;width:auto;top:0;}"
  ],
  colors.lightGray,
  function(_ref) {
    var size = _ref.size;
    return size ? "".concat(size, "px") : "100%";
  },
  function(_ref2) {
    var size = _ref2.size;
    return size ? "".concat(size, "px") : "100%";
  }
);

var ThumbnailCircle = function ThumbnailCircle(_ref3) {
  var size = _ref3.size,
    src = _ref3.src,
    alt = _ref3.alt,
    props = _objectWithoutProperties(_ref3, ["size", "src", "alt"]);

  return React__default.createElement(
    RoundContainer,
    {
      size: size
    },
    props.image ||
      React__default.createElement("img", {
        src: src,
        alt: alt
      })
  );
};

ThumbnailCircle.defaultProps = {
  alt: "",
  src: "",
  image: null,
  size: 0
};
ThumbnailCircle.propTypes = {
  size: PropTypes__default.number,
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  image: PropTypes__default.element
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
            return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(DeviceSizeProvider, "propTypes", {
  children: PropTypes__default.node.isRequired,
  // https://github.com/yannickcr/eslint-plugin-react/issues/1751
  // eslint-disable-next-line
  fallbackDetection: PropTypes__default.func,
  cssOnly: PropTypes__default.bool
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

var _React$createContext$5 = React__default.createContext(),
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
          return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(ScrollObserverProvider, "propTypes", {
  children: PropTypes__default.node.isRequired,
  hasWindow: PropTypes__default.bool
});

_defineProperty(ScrollObserverProvider, "defaultProps", {
  hasWindow: typeof window !== "undefined"
});

var ScrollObserverConsumer = function ScrollObserverConsumer(_ref) {
  var children = _ref.children;
  return React__default.createElement(Consumer$5, null, function(val) {
    return children && children(val);
  });
};

ScrollObserverConsumer.propTypes = {
  children: PropTypes__default.func
};
ScrollObserverConsumer.defaultProps = {
  children: null
};

var _React$createContext$6 = React__default.createContext({
    selected: [],
    onClick: function onClick() {
      return null;
    }
  }),
  Provider$6 = _React$createContext$6.Provider,
  Consumer$6 = _React$createContext$6.Consumer;

var _React$createContext$7 = React__default.createContext({
    focused: null,
    focusSelected: function focusSelected() {
      return null;
    }
  }),
  Provider$7 = _React$createContext$7.Provider,
  Consumer$7 = _React$createContext$7.Consumer;

var RadioInput = styled__default.input
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
    ";position:absolute;background-color:transparent;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;border:1px solid ",
    ";.radio-button--large &{width:24px;height:24px;}.radio-button--small &{width:16px;height:16px;}.radio-button--disabled &{border:1px solid ",
    ';}}&:after{content:"";transition:width 0.3s ',
    ",height 0.3s ",
    ",opacity 0.3s ",
    ";position:absolute;opacity:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;background-color:",
    ";.radio-button--large &{width:8px;height:8px;}.radio-button--small &{width:5px;height:5px;}.radio-button--disabled &{background-color:",
    ";}}&:focus:before{outline:none;border-width:1px;border-color:",
    ";box-shadow:0 0 5px 0 ",
    ";}&:hover:before{border-width:2px;border-color:",
    ";.radio-button--large &{width:23px;height:23px;}.radio-button--small &{width:15px;height:15px;}}&:checked:after{position:absolute;opacity:1;.radio-button--large &{width:12px;height:12px;}.radio-button--small &{width:8px;height:8px;}}"
  ],
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("gray02"),
  getThemeValue("gray01"),
  constants.easing.elastic,
  constants.easing.elastic,
  constants.easing.elastic,
  getThemeValue("primary", "base"),
  getThemeValue("gray01"),
  getThemeValue("primary", "base"),
  getThemeValue("primary", "base"),
  getThemeValue("primary", "base")
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
      _this.SelectedElement = React__default.createRef();
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

          return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(RadioInputComponent, "propTypes", {
  size: PropTypes__default.oneOf(["large", "small"]),
  isActive: PropTypes__default.bool,
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.string.isRequired,
  checked: PropTypes__default.bool.isRequired,
  onClick: PropTypes__default.func,
  isFocused: PropTypes__default.bool.isRequired
});

_defineProperty(RadioInputComponent, "defaultProps", {
  size: "small",
  isActive: true,
  onClick: null
});

var RadioWrapper = styled__default.label.withConfig({
  displayName: "RadioButton__RadioWrapper",
  componentId: "sc-1548ewp-0"
})(
  [
    "position:relative;cursor:pointer;margin:0;display:flex;align-items:center;text-align:left;color:",
    ";outline:none;min-height:44px;&.radio-button--disabled{opacity:0.4;cursor:default;pointer-events:none;}&.radio-button--large{font-size:16px;line-height:1.5;}&.radio-button--small{font-size:14px;line-height:1.5;}"
  ],
  getThemeValue("gray01")
);
var RadioText = styled__default.span.withConfig({
  displayName: "RadioButton__RadioText",
  componentId: "sc-1548ewp-1"
})([
  "display:flex;outline:none;align-items:center;justify-content:center;margin-left:7px;"
]);

var RadioButton = function RadioButton(_ref) {
  var name = _ref.name,
    value = _ref.value,
    size = _ref.size,
    isActive = _ref.isActive,
    children = _ref.children,
    index = _ref.index,
    props = _objectWithoutProperties(_ref, [
      "name",
      "value",
      "size",
      "isActive",
      "children",
      "index"
    ]);

  return React__default.createElement(Consumer$7, null, function(_ref2) {
    var focused = _ref2.focused,
      focusSelected = _ref2.focusSelected;
    return React__default.createElement(Consumer$6, null, function(_ref3) {
      var selected = _ref3.selected,
        onClick = _ref3.onClick;
      var isChecked = selected.includes(value);
      return React__default.createElement(
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
        React__default.createElement(
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
        React__default.createElement(RadioText, null, children)
      );
    });
  });
};

RadioButton.propTypes = {
  size: PropTypes__default.oneOf(["large", "small"]),
  children: PropTypes__default.node,
  isActive: PropTypes__default.bool,
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.string.isRequired,
  index: PropTypes__default.number.isRequired,
  onClick: PropTypes__default.func
};
RadioButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  onClick: null
};
RadioButton.displayName = "RadioButton";

var CheckBoxInput = styled__default.input
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
    ';display:flex;justify-content:center;align-items:center;&::-ms-check{display:none;}.checkbox--large &{width:24px;height:24px;}.checkbox--small &{width:16px;height:16px;}&:active{transform:scale(0.95,0.95);}&:before{content:"";box-sizing:border-box;background-color:transparent;border-radius:',
    ";border:1px solid ",
    ";position:absolute;cursor:pointer;transition:border-width 0.3s ",
    ";transition:border-color 0.3s ",
    ";.checkbox--large &{width:24px;height:24px;}.checkbox--small &{width:16px;height:16px;}&.checkbox--disabled{color:grey;}}&:hover:before{border-width:2px;border-color:",
    ";}&:focus:before{outline:none;box-shadow:0 0 5px 0 ",
    ";border-color:",
    ';.checkbox--small &{width:16px;height:16px;}.checkbox--large &{width:24px;height:24px;}}&::after{content:"";box-sizing:border-box;transform:scale(0.7,0.7);border-radius:',
    ";background-color:",
    ";cursor:pointer;transition:all 0.3s ",
    ";.checkbox--disabled &{background-color:",
    ";}.checkbox--small.checkbox__indeterminate &{width:8px;height:2px;transform:scale(1,1);}.checkbox--large.checkbox__indeterminate &{width:12px;height:2px;transform:scale(1,1);}}"
  ],
  getThemeValue("white", "base"),
  getThemeValue("gray02"),
  constants.borderRadius.small,
  constants.borderRadius.small,
  getThemeValue("gray02"),
  constants.easing.easeInOutQuad,
  constants.easing.easeInOutQuad,
  getThemeValue("primary", "base"),
  getThemeValue("primary", "base"),
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
      _this.SelectedElement = React__default.createRef();
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

          return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(CheckBoxInputComponent, "propTypes", {
  size: PropTypes__default.oneOf(["large", "small"]),
  disabled: PropTypes__default.bool,
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.string.isRequired,
  isChecked: PropTypes__default.bool.isRequired,
  onClick: PropTypes__default.func.isRequired,
  onChange: PropTypes__default.func,
  isFocused: PropTypes__default.bool
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

  return React__default.createElement(
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
    React__default.createElement("path", {
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
  size: PropTypes__default.number,
  color: PropTypes__default.string,
  children: PropTypes__default.node
};

var CheckBoxWrapper = styled__default.label.withConfig({
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
var CheckBoxText = styled__default.span.withConfig({
  displayName: "CheckBoxstyles__CheckBoxText",
  componentId: "sc-1dhvyoi-1"
})(
  [
    "color:",
    ";display:flex;outline:none;align-items:center;justify-content:flex-start;margin-left:7px;width:90%;"
  ],
  getThemeValue("gray01")
);
var CheckDivStyling = styled__default.div.withConfig({
  displayName: "CheckBoxstyles__CheckDivStyling",
  componentId: "sc-1dhvyoi-2"
})(
  [
    "width:100%;height:100%;display:flex;align-items:center;justify-content:left;position:absolute;top:0;left:0;opacity:0;color:",
    ";transition:opacity 0.3s ",
    ";.checkbox__checked &{opacity:1;}.checkbox__indeterminate &{display:none;}.checkbox--disabled &{color:",
    ";}"
  ],
  getThemeValue("primary", "base"),
  constants.easing.elastic,
  getThemeValue("gray02")
);
var StyledCheckmark = styled__default(Checkmark).withConfig({
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

  return React__default.createElement(Consumer$7, null, function(_ref2) {
    var focused = _ref2.focused,
      focusSelected = _ref2.focusSelected;
    return React__default.createElement(Consumer$6, null, function(_ref3) {
      var selected = _ref3.selected,
        onClick = _ref3.onClick;
      var isChecked = props.isChecked
        ? Boolean(props.isChecked)
        : selected.includes(value);
      return React__default.createElement(
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
        React__default.createElement(
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
        React__default.createElement(
          CheckDivStyling,
          null,
          React__default.createElement(StyledCheckmark, {
            size: size === "small" ? 16 : 24
          })
        ),
        React__default.createElement(
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
  size: PropTypes__default.oneOf(["large", "small"]),
  children: PropTypes__default.node,
  disabled: PropTypes__default.bool,
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.string.isRequired,
  index: PropTypes__default.number,
  onClick: PropTypes__default.func,
  style: PropTypes__default.shape(),
  isChecked: PropTypes__default.oneOfType([
    PropTypes__default.bool,
    PropTypes__default.oneOf(["indeterminate"])
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
            return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(ItemSelectionProvider, "propTypes", {
  children: PropTypes__default.node.isRequired,
  onChange: PropTypes__default.func,
  isMultiSelect: PropTypes__default.bool.isRequired,
  value: PropTypes__default.arrayOf(PropTypes__default.string),
  // eslint-disable-line
  valueOverride: PropTypes__default.arrayOf(PropTypes__default.string) // eslint-disable-line
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
var ENTER = 13;
var keyCharCodes = {
  ARROW_DOWN: ARROWDOWN,
  ARROW_UP: ARROWUP,
  ENTER: ENTER,
  ESCAPE: ESCAPE,
  SPACE_BAR: SPACEBAR,
  TAB: TAB
};

var forEach = React__default.Children.forEach;

var getSelectedChild = function getSelectedChild(children, selectedValue) {
  return React__default.Children.toArray(children).find(function(thisArg) {
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
          var childrenArray = React__default.Children.toArray(children);
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
            return React__default.createElement(
              Provider$7,
              {
                value: this.state
              },
              React__default.createElement(
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
  })(React__default.Component);

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
  role: PropTypes__default.string.isRequired,
  className: PropTypes__default.string,
  keywordSearch: PropTypes__default.bool,
  keyBoardRef: PropTypes__default.func
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

  return React__default.createElement(
    ItemSelectionProvider,
    {
      onChange: onChange,
      isMultiSelect: false,
      value: value
    },
    React__default.createElement(
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
  onChange: PropTypes__default.func,
  children: PropTypes__default.node,
  value: PropTypes__default.arrayOf(PropTypes__default.string)
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
  return React__default.createElement(
    ItemSelectionProvider,
    {
      onChange: onChange,
      value: value,
      isMultiSelect: true
    },
    React__default.createElement(
      KeyBoardProvider,
      {
        role: "checkbox"
      },
      children
    )
  );
};

CheckBoxGroup.propTypes = {
  onChange: PropTypes__default.func,
  children: PropTypes__default.node,
  value: PropTypes__default.arrayOf(PropTypes__default.string)
};
CheckBoxGroup.defaultProps = {
  children: null,
  onChange: null,
  value: []
};

/* stylelint-disable no-descending-specificity */
var FieldInputWrapper = styled__default.div.withConfig({
  displayName: "Inputstyles__FieldInputWrapper",
  componentId: "sc-1vi2q2x-0"
})([
  "display:flex;position:relative;&.text--input-top{flex-direction:column;justify-content:left;}&.text--input-left{flex-direction:row;}&.text--input-disabled{pointer-events:none;opacity:0.4;}"
]);
var FieldInputText = styled__default.label.withConfig({
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
var ErrorBoxWrapper = styled__default.div.withConfig({
  displayName: "Inputstyles__ErrorBoxWrapper",
  componentId: "sc-1vi2q2x-2"
})(["display:flex;flex-direction:column;flex-grow:2;"]);
var FieldInputBox = styled__default.input
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
var FieldErrorText = styled__default.label.withConfig({
  displayName: "Inputstyles__FieldErrorText",
  componentId: "sc-1vi2q2x-4"
})(
  [
    "opacity:0;font-size:",
    ";line-height:1.25;text-align:left;color:",
    ";position:relative;transition:opacity 0.3s ",
    ";.text--input-disabled &{opacity:0.4;}.text__error &{margin-top:1px;opacity:1;}"
  ],
  typography.size.uno,
  getThemeValue("error", "base"),
  constants.easing.easeInOutQuad
);

var Input$1 = React.forwardRef(function(_ref, ref) {
  var labelPosition = _ref.labelPosition,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    label = _ref.label,
    name = _ref.name,
    errorMessage = _ref.errorMessage,
    size = _ref.size,
    tag = _ref.tag,
    labelStyle = _ref.labelStyle,
    rest = _objectWithoutProperties(_ref, [
      "labelPosition",
      "placeholder",
      "disabled",
      "label",
      "name",
      "errorMessage",
      "size",
      "tag",
      "labelStyle"
    ]);

  var sluggified = sluggify(name + label);
  var labelId = sluggified ? "".concat(sluggified, "__label") : null;
  return React__default.createElement(
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
    label &&
      React__default.createElement(
        FieldInputText,
        {
          id: labelId,
          style: labelStyle
        },
        label
      ),
    React__default.createElement(
      ErrorBoxWrapper,
      null,
      React__default.createElement(
        FieldInputBox,
        _extends(
          {
            placeholder: disabled ? "" : placeholder,
            name: name || null,
            id: sluggified ? "".concat(sluggified, "__input") : null,
            disabled: disabled,
            as: tag
          },
          rest,
          {
            "aria-labelledby": label ? labelId : null,
            ref: ref
          }
        )
      ),
      React__default.createElement(
        FieldErrorText,
        {
          role: "alert",
          "aria-invalid": errorMessage !== null
        },
        errorMessage
      )
    )
  );
});
Input$1.propTypes = {
  children: PropTypes__default.node,
  labelPosition: PropTypes__default.string,
  placeholder: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  name: PropTypes__default.string,
  label: PropTypes__default.string,
  labelStyle: PropTypes__default.shape(),
  errorMessage: PropTypes__default.string,
  size: PropTypes__default.oneOf(SIZES),
  tag: PropTypes__default.oneOf(["textarea", "input"])
};
Input$1.defaultProps = {
  children: null,
  labelPosition: TOP,
  placeholder: "",
  disabled: false,
  name: "",
  label: "",
  errorMessage: null,
  size: REGULAR,
  tag: "input",
  labelStyle: {}
};

var _React$createContext$8 = React__default.createContext({
    isOpen: false,
    onClose: null
  }),
  Provider$8 = _React$createContext$8.Provider,
  Consumer$8 = _React$createContext$8.Consumer;

var StyledDropDownItem = styled__default.span.withConfig({
  displayName: "DropDownInput__StyledDropDownItem",
  componentId: "sc-2rfguq-0"
})(
  [
    "cursor:pointer;box-sizing:border-box;.dropdown__items &{appearance:none;height:36px;margin:4px 8px 0 8px;padding:7px 12px;font-size:",
    ";text-align:left;border:none;background-color:",
    ";align-items:center;overflow-x:hidden;text-overflow:ellipsis;color:",
    ";line-height:1.25;&:focus{background-color:",
    ";color:",
    ";outline:none;}&.dropdown__selected{color:",
    ";background-color:",
    ";border-radius:",
    ";}}.dropdown__items.dropdown__items--small &{height:32px;font-size:",
    ";line-height:1.3;}"
  ],
  typography.size.kilo,
  getThemeValue("white", "base"),
  getThemeValue("gray01"),
  getThemeValue("primary", "base"),
  getThemeValue("white", "base"),
  getThemeValue("gray01"),
  getThemeValue("gray04"),
  constants.borderRadius.small,
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
        "focus",
        function() {
          if (_this.SelectedElement && _this.SelectedElement.current) {
            _this.SelectedElement.current.focus();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "SelectedElement",
        React__default.createRef()
      );

      return _this;
    }

    _createClass(DropDownInput, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isOpen && this.props.isFocused) {
            this.focus();
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

          return React__default.createElement(
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
  })(React__default.Component);

_defineProperty(DropDownInput, "propTypes", {
  value: PropTypes__default.string.isRequired,
  index: PropTypes__default.number.isRequired,
  children: PropTypes__default.node.isRequired,
  isOpen: PropTypes__default.bool.isRequired,
  isFocused: PropTypes__default.bool.isRequired,
  isSelected: PropTypes__default.bool.isRequired,
  className: PropTypes__default.string
});

_defineProperty(DropDownInput, "defaultProps", {
  className: ""
});

var DropDownOption =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(DropDownOption, _React$PureComponent);

    function DropDownOption() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DropDownOption);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DropDownOption)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "focusInput",
        function() {
          if (_this.input && _this.input.current) {
            _this.input.current.focus();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "input",
        React__default.createRef()
      );

      return _this;
    }

    _createClass(DropDownOption, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            value = _this$props.value,
            index = _this$props.index,
            children = _this$props.children,
            className = _this$props.className,
            props = _objectWithoutProperties(_this$props, [
              "value",
              "index",
              "children",
              "className"
            ]);

          return React__default.createElement(Consumer$7, null, function(_ref) {
            var focused = _ref.focused,
              focusSelected = _ref.focusSelected;
            return React__default.createElement(Consumer$6, null, function(
              _ref2
            ) {
              var selected = _ref2.selected,
                onClick = _ref2.onClick;
              var isChecked = selected.includes(value);
              return React__default.createElement(Consumer$8, null, function(
                _ref3
              ) {
                var isOpen = _ref3.isOpen,
                  onClose = _ref3.onClose;
                return React__default.createElement(
                  DropDownInput,
                  _extends({}, props, {
                    ref: _this2.input,
                    className: className,
                    isOpen: isOpen,
                    value: value,
                    index: index,
                    selected: selected,
                    isSelected: isChecked,
                    isFocused: focused === index,
                    onMouseMove: function onMouseMove() {
                      if (index === focused) return;
                      focusSelected({
                        index: index
                      });

                      _this2.focusInput();
                    },
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
        }
      }
    ]);

    return DropDownOption;
  })(React__default.PureComponent);

DropDownOption.propTypes = {
  value: PropTypes__default.string.isRequired,
  index: PropTypes__default.number.isRequired,
  children: PropTypes__default.node.isRequired,
  className: PropTypes__default.string,
  onClick: PropTypes__default.func
};
DropDownOption.defaultProps = {
  onClick: null,
  className: ""
};

var TWO_SIZE_VARIANT = ["small", "large"];

var LAYOUT_VARIANTS = {
  BORDERED_INNER_LABEL: 0,
  BORDERLESS_INNER_LABEL: 1
};
var VARIANTS_WITH_BORDER = [LAYOUT_VARIANTS.BORDERED_INNER_LABEL];

/* stylelint-disable no-descending-specificity */
var small = constants.borderRadius.small;
var DROP_DOWN_SHADOW = "0 2px 4px 0 rgba(0, 0, 0, 0.12)";
var StyledGroup = styled__default.label.withConfig({
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
var StyledChildWrapper = styled__default.div.withConfig({
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
var HiddenLabel = styled__default.span.withConfig({
  displayName: "DropDownGroupstyles__HiddenLabel",
  componentId: "sc-1b4fjl8-2"
})(["display:none;"]);
var StyledGroupWrapper = styled__default.div.withConfig({
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
var StyledChevron = styled__default(DownIcon)
  .attrs({
    size: "small"
  })
  .withConfig({
    displayName: "DropDownGroupstyles__StyledChevron",
    componentId: "sc-1b4fjl8-4"
  })(
  [
    "color:",
    ";transition:opacity 0.1s ",
    ";margin-right:16px;.dropdown--small &{margin-right:12px;}.dropdown--border:hover &{&:not(.dropdown__chevron--disabled){margin-right:15px;}}.dropdown--small.dropdown--border:hover &{&:not(.dropdown__chevron--disabled){margin-right:11px;}}&.dropdown__icon--hide{opacity:0;}"
  ],
  getThemeValue("gray02"),
  constants.easing.easeInOutQuad
);
var StyledSelectedText = styled__default.div.withConfig({
  displayName: "DropDownGroupstyles__StyledSelectedText",
  componentId: "sc-1b4fjl8-5"
})(
  [
    "font-size:",
    ";white-space:nowrap;width:85%;overflow:hidden;text-overflow:ellipsis;.dropdown--small &{font-size:",
    ";}.dropdown--no-border &{margin-right:10px;}.dropdown--large.dropdown--border &{margin-left:16px;}.dropdown--small.dropdown--border &{margin-left:12px;}.dropdown--active.dropdown--no-border &{margin-right:11px;}.dropdown--active.dropdown--no-border:hover &{&:not(.dropdown__text--disabled){margin-right:10px;}}.dropdown--small.dropdown--border:hover &{&:not(.dropdown__text--disabled){margin-left:11px;}}.dropdown--large.dropdown--border:hover &{&:not(.dropdown__text--disabled){margin-left:15px;}}"
  ],
  typography.size.kilo,
  typography.size.hecto
);
var StyledKeyboardProvider = styled__default(KeyBoardProvider).withConfig({
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
          var selectedItem = React__default.Children.toArray(
            _this.props.children
          ).find(function(c) {
            return c.props.value === value;
          });
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
            return React__default.createElement(
              React.Fragment,
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
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "styledChildWrapper",
        React__default.createRef()
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
          isOpenPrevProp: false,
          onClose: _this.onClick
        }
      );

      return _this;
    }

    _createClass(
      DropDownGroup,
      [
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
            var isBorderAround = VARIANTS_WITH_BORDER.includes(variant);
            return React__default.createElement(
              ItemSelectionProvider,
              {
                onChange: onChange,
                isMultiSelect: false,
                value: value,
                valueOverride: valueOverride
              },
              React__default.createElement(Consumer$6, null, function(_ref) {
                var selected = _ref.selected;
                var keyboardProviderProps = withKeyboardProvider
                  ? {
                      keywordSearch: keywordSearch,
                      selected: selected
                    }
                  : {
                      as: "div"
                    };
                return React__default.createElement(
                  reactTransitionGroup.Transition,
                  {
                    in: isOpen,
                    timeout: _this2.ANIMATION_TIMEOUT
                  },
                  function(state) {
                    // keep dropdown--open-upward className until collapse animation is finished (.3s)
                    var hasOpenUpwardClass =
                      state !== "exited" && !shouldOpenDownward;
                    return React__default.createElement(
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
                      React__default.createElement(
                        StyledGroup,
                        _extends({}, onClickListener, {
                          className: classNames("dropdown--".concat(size), {
                            "dropdown--active": isOpen,
                            "dropdown--border": isBorderAround,
                            "dropdown--no-border": !isBorderAround,
                            "dropdown__label--disabled": disabled
                          })
                        }),
                        React__default.createElement(
                          HiddenLabel,
                          {
                            id: hiddenLabelId
                          },
                          placeholder || label
                        ),
                        React__default.createElement(
                          StyledSelectedText,
                          {
                            className: classNames({
                              "dropdown__text--disabled": disabled
                            })
                          },
                          _this2.displayLabel(selected)
                        ),
                        React__default.createElement(StyledChevron, {
                          className: classNames({
                            "dropdown__icon--hide": isOpen,
                            "dropdown--no-border": !isBorderAround,
                            "dropdown__chevron--disabled": disabled
                          })
                        })
                      ),
                      React__default.createElement(
                        reactTransitionGroup.Transition,
                        {
                          in: isOpen,
                          timeout: _this2.ANIMATION_TIMEOUT
                        },
                        function(wrapperState) {
                          return React__default.createElement(
                            StyledChildWrapper,
                            {
                              className: classNames(
                                "dropdown__items",
                                "dropdown__items--".concat(size),
                                {
                                  "dropdown--clicked": isOpen,
                                  "dropdown--overflow":
                                    wrapperState === "entered"
                                }
                              ),
                              ref: _this2.styledChildWrapper
                            },
                            React__default.createElement(
                              Provider$8,
                              {
                                value: _objectSpread({}, _this2.state, {
                                  isOpen: isOpen
                                })
                              },
                              React__default.createElement(
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
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            if (props.isOpen !== state.isOpenPrevProp) {
              return {
                isOpen: props.isOpen,
                isOpenPrevProp: props.isOpen
              };
            }

            return null;
          }
        }
      ]
    );

    return DropDownGroup;
  })(React__default.Component);

_defineProperty(DropDownGroup, "LAYOUT_VARIANTS", LAYOUT_VARIANTS);

DropDownGroup.propTypes = {
  value: PropTypes__default.arrayOf(PropTypes__default.string),
  valueOverride: PropTypes__default.arrayOf(PropTypes__default.string),
  children: PropTypes__default.node.isRequired,
  onChange: PropTypes__default.func,
  placeholder: PropTypes__default.string,
  variant: PropTypes__default.oneOf(Object.values(LAYOUT_VARIANTS)),
  label: PropTypes__default.string,
  isOpen: PropTypes__default.bool,
  keywordSearch: PropTypes__default.bool,
  withKeyboardProvider: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  size: PropTypes__default.oneOf(TWO_SIZE_VARIANT),
  shouldOpenDownward: PropTypes__default.bool
};
DropDownGroup.defaultProps = {
  value: [],
  valueOverride: null,
  onChange: null,
  placeholder: "",
  variant: LAYOUT_VARIANTS.BORDERED_INNER_LABEL,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  disabled: false,
  size: TWO_SIZE_VARIANT[1],
  shouldOpenDownward: true
};

var _fontForSizeMap;
var fontForSizeMap = ((_fontForSizeMap = {}),
_defineProperty(_fontForSizeMap, TWO_SIZE_VARIANT[0], typography.size.hecto),
_defineProperty(_fontForSizeMap, TWO_SIZE_VARIANT[1], typography.size.kilo),
_fontForSizeMap);
var StyledLabel = styled__default.label.withConfig({
  displayName: "DropDownLabel__StyledLabel",
  componentId: "sc-13nujgz-0"
})(
  ["font-size:", ";opacity:", ";"],
  function(_ref) {
    var size = _ref.size;
    return fontForSizeMap[size];
  },
  function(_ref2) {
    var disabled = _ref2.disabled;
    return disabled ? "0.4" : "1";
  }
);

var DropDownLabel = function DropDownLabel(_ref3) {
  var children = _ref3.children,
    size = _ref3.size,
    disabled = _ref3.disabled,
    otherProps = _objectWithoutProperties(_ref3, [
      "children",
      "size",
      "disabled"
    ]);

  return React__default.createElement(
    StyledLabel,
    _extends(
      {
        size: size,
        disabled: disabled
      },
      otherProps
    ),
    children
  );
};

DropDownLabel.propTypes = {
  size: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  children: PropTypes__default.oneOfType([
    PropTypes__default.arrayOf(PropTypes__default.node),
    PropTypes__default.node
  ]).isRequired
};
DropDownLabel.defaultProps = {
  size: TWO_SIZE_VARIANT[1],
  disabled: false
};

var TOGGLE_SIZES = ["small", "large"];

var ActiveArea = styled__default.button.withConfig({
  displayName: "Togglestyles__ActiveArea",
  componentId: "sc-1jtisgg-0"
})([
  "background-color:transparent;border:none;padding:0;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;&.toggle--small{width:44px;}&.toggle--large{width:73px;}&:focus{outline:none;}"
]);
var ReactToggleTrack = styled__default.div.withConfig({
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
var ReactToggle = styled__default.div.withConfig({
  displayName: "Togglestyles__ReactToggle",
  componentId: "sc-1jtisgg-2"
})([
  "display:flex;align-items:center;justify-content:flex-start;position:relative;background-color:transparent;border:0;padding:0;user-select:none;"
]);
var ReactThumbCenteringContainer = styled__default.div.withConfig({
  displayName: "Togglestyles__ReactThumbCenteringContainer",
  componentId: "sc-1jtisgg-3"
})([
  "position:absolute;height:100%;top:0;left:0;display:flex;flex:1;align-self:stretch;align-items:center;justify-content:flex-start;"
]);
var ReactToggleThumb = styled__default.div.withConfig({
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

          return React__default.createElement(
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
            React__default.createElement(
              ReactToggle,
              null,
              React__default.createElement(ReactToggleTrack, null),
              React__default.createElement(
                ReactThumbCenteringContainer,
                null,
                React__default.createElement(ReactToggleThumb, null)
              )
            )
          );
        }
      }
    ]);

    return Toggle;
  })(React.Component);

_defineProperty(Toggle, "propTypes", {
  value: PropTypes__default.bool.isRequired,
  onToggle: PropTypes__default.func,
  onClick: PropTypes__default.func,
  size: PropTypes__default.oneOf(TOGGLE_SIZES),
  disabled: PropTypes__default.bool
});

_defineProperty(Toggle, "defaultProps", {
  disabled: false,
  onClick: noop$3,
  onToggle: noop$3,
  size: TOGGLE_SIZES[1]
});

var _React$createContext$9 = React__default.createContext({
    selected: null,
    onChange: null
  }),
  Provider$9 = _React$createContext$9.Provider,
  Consumer$9 = _React$createContext$9.Consumer;
var withButtonGroupConsumer = function withButtonGroupConsumer(Component) {
  return function(props) {
    return React__default.createElement(Consumer$9, null, function(_ref) {
      var onGroupChange = _ref.onChange,
        _ref$value = _ref.value,
        groupValue = _ref$value === void 0 ? {} : _ref$value;
      return React__default.createElement(
        Component,
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

var ButtonsSection = styled__default.div.withConfig({
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
          return React__default.createElement(
            ButtonsSection,
            null,
            React__default.createElement(
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
  })(React.PureComponent);

_defineProperty(ButtonGroupSectionContent, "propTypes", {
  onGroupChange: PropTypes__default.func.isRequired,
  groupValue: PropTypes__default.objectOf(PropTypes__default.any).isRequired,
  sectionValue: PropTypes__default.string.isRequired,
  isMultiSelect: PropTypes__default.bool.isRequired,
  valueOverride: PropTypes__default.arrayOf(PropTypes__default.string),
  children: PropTypes__default.node.isRequired
});

_defineProperty(ButtonGroupSectionContent, "defaultProps", {
  valueOverride: null
});

var ButtonGroupSectionContent$1 = withButtonGroupConsumer(
  ButtonGroupSectionContent
);

var StyledText$1 = styled__default(TextBase).withConfig({
  displayName: "ButtonGroupSection__StyledText",
  componentId: "kbkgoo-0"
})(["line-height:1.25;text-transform:uppercase;"]);

var ButtonGroupSection = function ButtonGroupSection(_ref) {
  var title = _ref.title,
    sectionValue = _ref.value,
    isMultiSelect = _ref.isMultiSelect,
    valueOverride = _ref.valueOverride,
    children = _ref.children;
  return React__default.createElement(
    Spacing,
    {
      bottom: {
        xSmall: "moderate"
      }
    },
    title &&
      React__default.createElement(
        Spacing,
        {
          bottom: {
            xSmall: "moderate"
          }
        },
        React__default.createElement(
          StyledText$1,
          {
            secondary: true,
            size: "uno",
            weight: "semiBold"
          },
          title
        )
      ),
    React__default.createElement(
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
  title: PropTypes__default.string,
  value: PropTypes__default.string.isRequired,
  isMultiSelect: PropTypes__default.bool,
  valueOverride: PropTypes__default.arrayOf(PropTypes__default.string),
  children: PropTypes__default.node.isRequired
};

var ButtonGroupButtonContainer = styled__default.div.withConfig({
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
var StyledButton$1 = styled__default(Button)
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

  return React__default.createElement(Consumer$6, null, function(values) {
    return React__default.createElement(
      ButtonGroupButtonContainer,
      null,
      React__default.createElement(
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
  value: PropTypes__default.string.isRequired,
  onClick: PropTypes__default.func,
  children: PropTypes__default.node.isRequired
};

var Group = styled__default.div.withConfig({
  displayName: "ButtonGroup__Group",
  componentId: "sc-1qkwa44-0"
})(
  ["padding:", " ", " 0 ", ";"],
  spacing.normal,
  spacing.moderate,
  spacing.moderate
);
var StyledText$2 = styled__default(TextBase).withConfig({
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

  return React__default.createElement(
    Group,
    props,
    React__default.createElement(
      Spacing,
      {
        bottom: {
          xSmall: "moderate"
        }
      },
      React__default.createElement(
        StyledText$2,
        {
          size: "giga",
          weight: "semiBold"
        },
        title
      )
    ),
    React__default.createElement(
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
  title: PropTypes__default.string.isRequired,
  value: PropTypes__default.shape({}),
  onChange: PropTypes__default.func,
  children: PropTypes__default.node.isRequired
};
ButtonGroup.Section = ButtonGroupSection;
ButtonGroup.Button = ButtonGroupButton;

var QtySelectorMinusIcon = function QtySelectorMinusIcon(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero"
      },
      React__default.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React__default.createElement("path", {
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
  children: PropTypes__default.node
};

var QtySelectorPlusIcon = function QtySelectorPlusIcon(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(
    "svg",
    _extends({}, props, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }),
    children,
    React__default.createElement(
      "g",
      {
        fill: "none",
        fillRule: "nonzero"
      },
      React__default.createElement("path", {
        d: "M0 0h24v24H0z"
      }),
      React__default.createElement("path", {
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
  children: PropTypes__default.node
};

var INPUT_HEIGHT = 34;
var Container$a = styled__default.div.withConfig({
  displayName: "QtySelectorstyles__Container",
  componentId: "sc-1rwllg0-0"
})(["display:flex;justify-content:center;align-items:center;"]);
var Button$2 = styled__default(Button).withConfig({
  displayName: "QtySelectorstyles__Button",
  componentId: "sc-1rwllg0-1"
})(
  [
    "min-width:36px;width:36px;height:36px;border-radius:50%;border:1px solid ",
    ";color:",
    ";background-color:",
    ";outline:none;box-sizing:border-box;padding:0;font-size:",
    ";line-height:0;transition:transform 0.1s linear,background-color 0.3s ",
    ",color 0.3s ",
    ";&:disabled{border:1px solid ",
    ";color:",
    ";background:transparent;opacity:1;cursor:default;}&:focus{outline:none;box-shadow:0 0 5px 0 ",
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
  getThemeValue("primary", "lightest"),
  getThemeValue("primary", "base"),
  getThemeValue("primary", "light")
);
var InputFieldContainer = styled__default.div.withConfig({
  displayName: "QtySelectorstyles__InputFieldContainer",
  componentId: "sc-1rwllg0-2"
})(
  [
    "box-sizing:border-box;overflow-y:hidden;display:flex;height:36px;flex-direction:column;border:1px solid ",
    ";border-radius:",
    ";margin:0px 12px;&:hover&:not(.InputFieldContainer__disabled){border-color:",
    ";}&.InputFieldContainer__disabled{border:1px solid ",
    ";}"
  ],
  getThemeValue("gray02"),
  constants.borderRadius.small,
  getThemeValue("primary", "base"),
  getThemeValue("gray04")
);
var InputField = styled__default.input
  .attrs({
    type: "text"
  })
  .withConfig({
    displayName: "QtySelectorstyles__InputField",
    componentId: "sc-1rwllg0-3"
  })(
  [
    "top:0;position:relative;line-height:",
    "px;padding:0;outline:none;width:30px;font-size:",
    ";text-align:center;color:#353c42;caret-color:#353c42;border:none;background:transparent;transition:top 0.1s ",
    ";&:disabled{border-color:",
    ";color:",
    ";}"
  ],
  INPUT_HEIGHT,
  typography.size.giga,
  constants.easing.easeInOutQuad,
  themes.global.gray04,
  themes.global.onyx.muted
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
          value: _this.props.value,
          focused: false
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleChange",
        function(e) {
          var value = e.target.value;
          var _this$props = _this.props,
            max = _this$props.max,
            min = _this$props.min;

          if (
            QtySelector.isNumber(value) &&
            value.length <= QtySelector.MAX_LENGTH_VAL &&
            value <= max &&
            value >= min
          ) {
            _this.setState(
              function() {
                return {
                  value: Number.parseInt(value, 10)
                };
              },
              function() {
                return _this.handleValueUpdated();
              }
            );
          } else if (value === "") {
            // delete input value case
            _this.setState(
              function() {
                return {
                  value: ""
                };
              },
              function() {
                return _this.handleValueUpdated();
              }
            );
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "increment",
        function() {
          var _this$props2 = _this.props,
            max = _this$props2.max,
            min = _this$props2.min;

          _this.setState(
            function(state) {
              if (state.value === "") {
                return {
                  value: min + 1
                };
              }

              if (state.value === max) {
                return {};
              }

              return {
                value: state.value + 1
              };
            },
            function() {
              return _this.handleValueUpdated();
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "decrement",
        function() {
          var min = _this.props.min;

          _this.setState(
            function(state) {
              if (state.value === "") {
                return {
                  value: min
                };
              }

              if (state.value === min) {
                return {};
              }

              return {
                value: state.value - 1
              };
            },
            function() {
              return _this.handleValueUpdated();
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "handleValueUpdated",
        function() {
          var onValueUpdated = _this.props.onValueUpdated;
          var value = _this.state.value;
          onValueUpdated(value);
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
          var _this$props3 = _this.props,
            disabled = _this$props3.disabled,
            style = _this$props3.style,
            min = _this$props3.min,
            max = _this$props3.max,
            rest = _objectWithoutProperties(_this$props3, [
              "disabled",
              "style",
              "min",
              "max"
            ]);

          var _this$state = _this.state,
            value = _this$state.value,
            focused = _this$state.focused; // rendering multiple inputs is required for animation

          return !focused
            ? _toConsumableArray(Array(max + 1)).map(function(_, i) {
                return React__default.createElement(
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
            : React__default.createElement(
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
          var _this$props4 = this.props,
            disabled = _this$props4.disabled,
            min = _this$props4.min,
            max = _this$props4.max;
          var value = this.state.value;
          return React__default.createElement(
            Container$a,
            null,
            React__default.createElement(
              Button$2,
              {
                onClick: this.decrement,
                disabled: disabled || min === value
              },
              React__default.createElement(QtySelectorMinusIcon, null)
            ),
            React__default.createElement(
              InputFieldContainer,
              {
                className: classNames({
                  InputFieldContainer__disabled: disabled
                })
              },
              this.renderInput()
            ),
            React__default.createElement(
              Button$2,
              {
                onClick: this.increment,
                disabled: disabled || max === value
              },
              React__default.createElement(QtySelectorPlusIcon, null)
            )
          );
        }
      }
    ]);

    return QtySelector;
  })(React.Component);

_defineProperty(QtySelector, "MAX_LENGTH_VAL", 2);

_defineProperty(QtySelector, "INPUT_HEIGHT", INPUT_HEIGHT);

_defineProperty(QtySelector, "MIN_INPUT_VALUE", 0);

_defineProperty(QtySelector, "MAX_INPUT_VALUE", 99);

_defineProperty(QtySelector, "isNumber", function(str) {
  var numValue = parseInt(str, 10);
  var strValue = numValue.toString(); // proper number should have the same length as its string representation
  // except the case when it evaluates to NaN

  return !Number.isNaN(numValue) && strValue.length === str.length;
});

_defineProperty(QtySelector, "propTypes", {
  disabled: PropTypes__default.bool,
  value: PropTypes__default.number,
  style: PropTypes__default.objectOf(PropTypes__default.string),
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  onValueUpdated: PropTypes__default.func
});

_defineProperty(QtySelector, "defaultProps", {
  disabled: false,
  style: {},
  value: 0,
  min: QtySelector.MIN_INPUT_VALUE,
  max: QtySelector.MAX_INPUT_VALUE,
  onValueUpdated: function onValueUpdated() {}
});

/* eslint import/prefer-default-export: off */

function _templateObject12() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-top: ",
    "px;\n  "
  ]);

  _templateObject12 = function _templateObject12() {
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

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n  "]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n  "]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 0 ", "px;\n  "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral([
    "\n    padding: ",
    "px;\n    padding-bottom: ",
    "px;\n  "
  ]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n  "]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n  "]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteral([
    "\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  "
  ]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
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
var ContainerAnimation = styled.css(
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
var ModalContainer$1 = styled__default.div
  .attrs(function(_ref) {
    var isFullscreen = _ref.isFullscreen;
    return {
      className: classNames({
        fullscreen: isFullscreen
      })
    };
  })
  .withConfig({
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
    ";box-shadow:0 16px 16px 0 rgba(0,0,0,0.06),0 0 16px 0 rgba(0,0,0,0.12);border-radius:",
    ";height:auto;max-height:calc(100vh - ",
    " * 2);overflow:hidden;&.fullscreen{top:0;margin:0;border-radius:0;transform:none;height:100%;max-height:initial;max-width:initial;}",
    ";",
    ";",
    ";",
    ";"
  ],
  function(_ref2) {
    var isOpened = _ref2.isOpened;
    return isOpened ? "block" : "none";
  },
  function(_ref3) {
    var displayTop = _ref3.displayTop;
    return displayTop ? 0 : "50%";
  },
  function(_ref4) {
    var displayTop = _ref4.displayTop;
    return displayTop ? spacing.colossal : "0";
  },
  spacing.moderate,
  spacing.moderate,
  function(_ref5) {
    var displayTop = _ref5.displayTop;
    return displayTop ? "none" : "translateY(-50%)";
  },
  zIndex.layout.overlay || "#fff",
  themes.global.white.base,
  constants.borderRadius.large,
  spacing.colossal,
  smallAndUp(_templateObject$r()),
  mediumAndUp(_templateObject2$f(), function(_ref6) {
    var size = _ref6.size;
    return widthM[size];
  }),
  largeAndUp(_templateObject3$a(), function(_ref7) {
    var size = _ref7.size;
    return widthL[size];
  }),
  ContainerAnimation
);
var actionBarGutters = styled.css(
  ["padding:", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(
    _templateObject4$7(),
    spacing.gutters.small,
    spacing.gutters.small
  ),
  mediumAndUp(
    _templateObject5$2(),
    spacing.gutters.mediumAndUp,
    spacing.gutters.small
  ),
  largeAndUp(
    _templateObject6$1(),
    spacing.gutters.largeAndUp,
    spacing.gutters.small
  )
);
var ActionBar = styled__default.div.withConfig({
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
  function(_ref8) {
    var shadow = _ref8.shadow;
    return shadow ? "0px 26px 18px -23px rgba(0,0,0,0.12)" : "none";
  },
  function(_ref9) {
    var gutters = _ref9.gutters;
    return gutters ? actionBarGutters : "";
  }
);
ActionBar.propTypes = {
  shadow: PropTypes__default.bool.isRequired,
  gutters: PropTypes__default.bool.isRequired
};
var contentGutters = styled.css(
  ["padding:0 ", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(_templateObject7$1(), spacing.gutters.small),
  mediumAndUp(_templateObject8$1(), spacing.gutters.mediumAndUp),
  largeAndUp(_templateObject9$1(), spacing.gutters.largeAndUp)
);
var ModalContent$1 = styled__default.div.withConfig({
  displayName: "indexstyles__ModalContent",
  componentId: "sc-5w65rb-2"
})(
  [
    "background-color:",
    ";overflow-y:auto;line-height:",
    ";.fullscreen &{height:100%;}",
    ";"
  ],
  themes.global.white.base,
  typography.lineHeight.body,
  function(_ref10) {
    var gutters = _ref10.gutters;
    return gutters ? contentGutters : "";
  }
);
ModalContent$1.propTypes = {
  gutters: PropTypes__default.bool.isRequired
};
var bottomActionBarGutters = styled.css(
  ["padding:", "px;", ";", ";", ";"],
  spacing.gutters.small,
  smallAndUp(_templateObject10$1(), spacing.gutters.small),
  mediumAndUp(_templateObject11$1(), spacing.gutters.mediumAndUp),
  largeAndUp(
    _templateObject12(),
    spacing.gutters.largeAndUp,
    spacing.gutters.mediumAndUp
  )
);
var BottomActionBar = styled__default.div.withConfig({
  displayName: "indexstyles__BottomActionBar",
  componentId: "sc-5w65rb-3"
})(
  [
    "position:relative;overflow:hidden;box-shadow:",
    ";",
    ";button{float:right;margin-left:24px;&:last-of-type{margin-left:0;}}"
  ],
  function(_ref11) {
    var shadow = _ref11.shadow;
    return shadow ? "0px -26px 18px -23px rgba(0,0,0,0.12)" : "none";
  },
  function(_ref12) {
    var gutters = _ref12.gutters;
    return gutters ? bottomActionBarGutters : "";
  }
);
BottomActionBar.propTypes = {
  shadow: PropTypes__default.bool.isRequired,
  gutters: PropTypes__default.bool.isRequired
};

/* eslint-disable import/prefer-default-export */
var OverlayAnimation = styled.css(
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
var Overlay$2 = styled__default.div
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
            return React__default.createElement(
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
  })(React.Component);

_defineProperty(Backdrop$1, "propTypes", {
  childRef: PropTypes__default.object,
  children: PropTypes__default.node.isRequired,
  overlay: PropTypes__default.bool,
  isVisible: PropTypes__default.bool,
  animated: PropTypes__default.bool,
  overlayProps: PropTypes__default.object,
  onRequestClose: PropTypes__default.func
});

_defineProperty(Backdrop$1, "defaultProps", {
  childRef: React__default.createRef(),
  overlay: true,
  overlayProps: {},
  onRequestClose: null,
  isVisible: true,
  animated: false
});

var _React$createContext$a = React__default.createContext(),
  Provider$a = _React$createContext$a.Provider,
  Consumer$a = _React$createContext$a.Consumer;
var withModal = function withModal(Component) {
  return function(props) {
    return React__default.createElement(Consumer$a, null, function(value) {
      return React__default.createElement(
        Component,
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

var SPACING = spacing.colossal.replace("px", "");
var getContentHeight = function getContentHeight(_ref) {
  var actionBar = _ref.actionBar,
    bottomActionBar = _ref.bottomActionBar,
    container = _ref.container,
    _ref$isFullscreen = _ref.isFullscreen,
    isFullscreen = _ref$isFullscreen === void 0 ? false : _ref$isFullscreen;
  var actionBarHeight = actionBar ? actionBar.clientHeight : 0;
  var bottomActionBarHeight = bottomActionBar
    ? bottomActionBar.clientHeight
    : 0;
  return "".concat(
    container.clientHeight -
      (isFullscreen ? container.offsetTop : SPACING * 2) -
      actionBarHeight -
      bottomActionBarHeight,
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
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "containerRef",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "contentRef",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "bottomActionBarRef",
        React__default.createRef()
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "updateHeightAndShadows",
        function() {
          _this.updateModalHeight();

          _this.updateShadows();
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "throttledUpdateHeightAndShadows",
        throttle(_this.updateHeightAndShadows, Modal.throttleTimout)
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
          var actionBar = _this.actionBarRef.current;
          var bottomActionBar = _this.bottomActionBarRef.current;
          var content = _this.contentRef.current;
          var container = _this.containerRef.current;
          var isFullscreen = _this.props.isFullscreen;
          var contentHeight = getContentHeight({
            isFullscreen: isFullscreen,
            actionBar: actionBar,
            bottomActionBar: bottomActionBar,
            container: container
          });
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
              this.updateHeightAndShadows();
            }

            window.addEventListener(
              "resize",
              this.throttledUpdateHeightAndShadows
            ); // eslint-disable-line
          }
        },
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (this.props.isOpened && !prevProps.isOpened) {
              this.updateHeightAndShadows();
            }
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            window.removeEventListener(
              "resize",
              this.throttledUpdateHeightAndShadows
            ); // eslint-disable-line
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
              overlayProps = _this$props.overlayProps,
              containerProps = _this$props.containerProps,
              actionBarProps = _this$props.actionBarProps,
              contentProps = _this$props.contentProps,
              bottomActionBarProps = _this$props.bottomActionBarProps,
              displayTop = _this$props.displayTop,
              isFullscreen = _this$props.isFullscreen;
            var _this$state = this.state,
              isOpened = _this$state.isOpened,
              actionBarShadow = _this$state.actionBarShadow,
              bottomActionBarShadow = _this$state.bottomActionBarShadow;
            var closeModal = this.closeModal;
            return React__default.createElement(
              Provider$a,
              {
                value: {
                  closeModal: closeModal
                }
              },
              React__default.createElement(
                reactTransitionGroup.CSSTransition,
                {
                  in: isOpened,
                  key: "overlay-animation",
                  timeout: 300,
                  classNames: "open"
                },
                React__default.createElement(
                  Backdrop$1,
                  {
                    overlayProps: _objectSpread({}, overlayProps, {
                      ref: this.containerRef
                    }),
                    onRequestClose: this.closeModal,
                    isVisible: isOpened,
                    animated: true
                  },
                  React__default.createElement(
                    reactTransitionGroup.CSSTransition,
                    {
                      in: isOpened,
                      key: "modal-animation",
                      timeout: 300,
                      classNames: "open"
                    },
                    React__default.createElement(
                      ModalContainer$1,
                      _extends(
                        {
                          small: getModalSize({
                            deviceSize: deviceSize,
                            preferredSize: size
                          }),
                          isOpened: isOpened,
                          size: size,
                          displayTop: displayTop,
                          isFullscreen: isFullscreen
                        },
                        containerProps
                      ),
                      actionBar &&
                        React__default.createElement(
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
                      React__default.createElement(
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
                        React__default.createElement(
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
  })(React__default.Component);

_defineProperty(Modal$1, "propTypes", {
  actionBar: PropTypes__default.node,
  bottomActionBar: PropTypes__default.node,
  children: PropTypes__default.oneOfType([
    PropTypes__default.arrayOf(PropTypes__default.node),
    PropTypes__default.node
  ]),
  deviceSize: PropTypes__default.shape({
    isXSmall: PropTypes__default.bool,
    isSmall: PropTypes__default.bool,
    isMedium: PropTypes__default.bool,
    isLarge: PropTypes__default.bool,
    isXLarge: PropTypes__default.bool
  }).isRequired,
  gutters: PropTypes__default.bool,
  // This is used inside the `getDerivedStateFromProps`
  // eslint-disable-next-line react/no-unused-prop-types
  isOpened: PropTypes__default.bool,
  size: PropTypes__default.oneOf([
    MODAL_SIZE_SMALL,
    MODAL_SIZE_MEDIUM,
    MODAL_SIZE_LARGE,
    MODAL_SIZE_XLARGE
  ]),
  isFullscreen: PropTypes__default.bool,
  onRequestClose: PropTypes__default.func,
  onScroll: PropTypes__default.func,

  /* eslint-disable react/forbid-prop-types */
  overlayProps: PropTypes__default.object,
  containerProps: PropTypes__default.object,
  actionBarProps: PropTypes__default.object,
  contentProps: PropTypes__default.object,
  bottomActionBarProps: PropTypes__default.object
  /* eslint-enable react/forbid-prop-types */
});

_defineProperty(Modal$1, "defaultProps", {
  actionBar: null,
  bottomActionBar: null,
  children: null,
  gutters: true,
  isOpened: true,
  size: MODAL_SIZE_MEDIUM,
  isFullscreen: false,
  onRequestClose: null,
  onScroll: null,
  overlayProps: {},
  containerProps: {},
  actionBarProps: {},
  contentProps: {},
  bottomActionBarProps: {}
});

_defineProperty(Modal$1, "throttleTimout", 100);

var index = withDeviceSize(Modal$1);

/* eslint-disable import/prefer-default-export */
var CloseButtonContainer = styled__default.div.withConfig({
  displayName: "DefaultActionBarstyles__CloseButtonContainer",
  componentId: "sc-1ke7390-0"
})(["background-color:white;display:flex;justify-content:flex-end;"]);

var ModalActionBar = function ModalActionBar(_ref) {
  var closeModal = _ref.modal.closeModal,
    iconButtonProps = _ref.iconButtonProps;
  return React__default.createElement(
    CloseButtonContainer,
    null,
    React__default.createElement(
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
  modal: PropTypes__default.shape({
    closeModal: PropTypes__default.func.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  iconButtonProps: PropTypes__default.object
};
ModalActionBar.defaultProps = {
  iconButtonProps: {}
};
var DefaultActionBar = withModal(ModalActionBar);

var _React$createContext$b = React__default.createContext({
    "4g": true
  }),
  Provider$b = _React$createContext$b.Provider,
  Consumer$b = _React$createContext$b.Consumer;

var deviceConnectionStateShape = {
  "slow-2g": PropTypes__default.bool,
  "2g": PropTypes__default.bool,
  "3g": PropTypes__default.bool,
  "4g": PropTypes__default.bool,
  saveData: false,
  isInitialized: false
};
var prefixedDeviceConnectionProps = {
  "connslow-2g": PropTypes__default.bool,
  conn2g: PropTypes__default.bool,
  conn3g: PropTypes__default.bool,
  conn4g: PropTypes__default.bool
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
          return React__default.createElement(
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
  })(React.Component);

_defineProperty(
  DeviceConnectionProvider,
  "initialState",
  _objectSpread({}, FALSY_CONNECTIONS_STATE, {
    "4g": true,
    isInitialized: false
  })
);

_defineProperty(DeviceConnectionProvider, "propTypes", {
  children: PropTypes__default.node.isRequired,
  defaultState: PropTypes__default.shape(deviceConnectionStateShape)
});

_defineProperty(DeviceConnectionProvider, "defaultProps", {
  defaultState: null
});

var getConnName = function getConnName(conn) {
  return conn === "saveData" ? conn : "conn".concat(conn);
};

var DisplayOn = function DisplayOn(props) {
  var children = props.children;
  return React__default.createElement(Consumer$b, null, function(val) {
    return CONNECTION_TYPES.find(function(conn) {
      return val && val[conn] && props[getConnName(conn)];
    })
      ? children
      : null;
  });
};

DisplayOn.propTypes = _objectSpread({}, prefixedDeviceConnectionProps, {
  saveData: PropTypes__default.bool,
  children: PropTypes__default.node.isRequired
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
  return React__default.createElement(
    SeatDataStyled,
    {
      size: size,
      isLast: isLast
    },
    React__default.createElement(
      SeatDataColumn,
      null,
      React__default.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Sec"
      ),
      React__default.createElement(
        ColumnText,
        {
          variant: variant,
          size: size
        },
        section
      )
    ),
    React__default.createElement(
      SeatDataColumn,
      null,
      React__default.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Row"
      ),
      React__default.createElement(
        ColumnText,
        {
          variant: variant,
          size: size
        },
        row
      )
    ),
    React__default.createElement(
      SeatDataColumn,
      null,
      React__default.createElement(
        ColumnHeading,
        {
          size: size
        },
        "Seat"
      ),
      React__default.createElement(
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
  section: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  row: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  seat: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  size: PropTypes__default.oneOf(SIZES_SL),
  variant: PropTypes__default.oneOf(VARIANTS),
  isLast: PropTypes__default.bool
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
          return React__default.createElement(
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
              React__default.createElement(SeatData, {
                size: size,
                row: row,
                section: section,
                seat: seat,
                variant: variant,
                isLast: !!children
              }),
            children &&
              React__default.createElement(
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
  })(React.Component);

_defineProperty(SeatTooltip, "getDimensionsFromEvent", function(e, parent) {
  return Tooltip.getDimensionsFromEvent(e, parent);
});

SeatTooltip.propTypes = {
  section: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  row: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  seat: PropTypes__default.oneOfType([
    PropTypes__default.string,
    PropTypes__default.number
  ]).isRequired,
  size: PropTypes__default.oneOf(SIZES_SL),
  children: PropTypes__default.node,
  variant: PropTypes__default.oneOf(VARIANTS)
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

var _createContext = React.createContext({
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
    var webp = pathname.endsWith(".svg")
      ? {}
      : {
          auto: "webp"
        };
    var resizeSrc = ""
      .concat(url)
      .concat(createParams(_objectSpread({}, params, fit, webp)));
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
          var _this$state = _this.state,
            imageRef = _this$state.imageRef,
            backgroundRef = _this$state.backgroundRef;

          if (imageRef && imageRef.current) {
            imageRef.current.style.filter = "none";

            if (!backgroundRef) {
              _this.setState(function() {
                return {
                  isLoaded: true
                };
              });
            }
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

            _this.setState(function() {
              return {
                isLoaded: true
              };
            });
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
        "applyBlurs",
        function() {
          var _this$state2 = _this.state,
            imageRef = _this$state2.imageRef,
            backgroundRef = _this$state2.backgroundRef;

          if (imageRef && imageRef.current) {
            imageRef.current.style.filter = "blur(10px)";
            imageRef.current.src = "";
            imageRef.current.srcset = "";
          }

          if (backgroundRef && backgroundRef.current)
            backgroundRef.current.style.filter = "blur(10px)";
        }
      );

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        "load",
        function(ready) {
          var _this$state3 = _this.state,
            imageRef = _this$state3.imageRef,
            backgroundRef = _this$state3.backgroundRef;
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
        imageRef: React.createRef(),
        backgroundRef: tag === "img" ? null : React.createRef(),
        load: _this.load,
        isLoaded: false
      };
      /* eslint-enable */

      return _this;
    }

    _createClass(LazyLoaderProvider, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var _this2 = this;

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
            this.applyBlurs();
            /* eslint-disable-next-line react/no-did-update-set-state */

            this.setState(
              function() {
                return {
                  imageRef: null,
                  backgroundRef: null,

                  /* eslint-disable-next-line react/no-unused-state */
                  src: getLowDefSrc({
                    src: src,
                    width: width,
                    height: height,
                    resizeFn: resizeFn
                  }),

                  /* eslint-disable-next-line react/no-unused-state */
                  style: _objectSpread({}, style, BLUR_STYLES),
                  isLoaded: false
                };
              },
              function() {
                _this2.setState({
                  imageRef: React.createRef(),
                  backgroundRef: React.createRef()
                });
              }
            );
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return React__default.createElement(
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
  })(React.PureComponent);

_defineProperty(LazyLoaderProvider, "propTypes", {
  children: PropTypes__default.node.isRequired,
  src: PropTypes__default.string,
  width: PropTypes__default.number,
  height: PropTypes__default.number,
  resizeFn: PropTypes__default.func,
  targetDensity: PropTypes__default.number,
  devicePixelRatios: PropTypes__default.arrayOf(PropTypes__default.number),
  style: PropTypes__default.objectOf(
    PropTypes__default.oneOfType([
      PropTypes__default.string,
      PropTypes__default.number
    ])
  ),
  tag: PropTypes__default.string
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
  return React__default.createElement(
    LazyLoaderProvider,
    {
      src: src,
      height: height,
      width: width,
      style: style,
      resizeFn: resizeFn,
      tag: tag
    },
    React__default.createElement(Consumer$c, null, function(value) {
      return children(value);
    })
  );
};
LazyLoader.propTypes = {
  children: PropTypes__default.func.isRequired,
  src: PropTypes__default.string,
  width: PropTypes__default.number,
  height: PropTypes__default.number,
  resizeFn: PropTypes__default.func,
  style: PropTypes__default.objectOf(
    PropTypes__default.oneOfType([
      PropTypes__default.string,
      PropTypes__default.number
    ])
  ),
  tag: PropTypes__default.string
};
LazyLoader.defaultProps = {
  src: PLACEHOLDER_IMAGE,
  width: null,
  height: null,
  resizeFn: resize,
  style: {},
  tag: "img"
};

var _createContext$1 = React.createContext(),
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
          return React__default.createElement(
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
  })(React.Component);

_defineProperty(TabsProvider, "propTypes", {
  tabIndex: PropTypes__default.number,
  children: PropTypes__default.node.isRequired,
  onChangeTabIndex: PropTypes__default.func
});

_defineProperty(TabsProvider, "defaultProps", {
  tabIndex: 0,
  onChangeTabIndex: null
});

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    padding-right: ", ";\n  "]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral([
    "\n    &.tab__content--overflowed {\n      margin-left: 0;\n      padding-left: 0;\n      width: 100%;\n    }\n  "
  ]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteral([
    "\n    &.tabs__container--overflowed:after {\n      width: 100%;\n      left: 0;\n    }\n  "
  ]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var padding = spacing.moderate;
var Container$b = styled__default.div
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
    ";width:100%;overflow:visible;",
    " &.tabs__container--overflowed:after{width:100vw;left:calc(50% - 50vw);}"
  ],
  smallAndUp(_templateObject$s()),
  zIndex.reset,
  function(_ref) {
    var withBorderBottom = _ref.withBorderBottom;
    return (
      withBorderBottom &&
      "\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    border-bottom: 1px solid "
        .concat(
          themes.tm.gray04,
          ";\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: "
        )
        .concat(zIndex.unset, ";\n  }\n  ")
    );
  }
);
var Content$4 = styled__default.div
  .attrs({
    className: function className(props) {
      return props.areTabsOverflow ? "tabs__content--overflowed" : null;
    },
    role: "tablist"
  })
  .withConfig({
    displayName: "Tabs__Content",
    componentId: "sc-1kggst6-1"
  })(
  [
    "",
    ";display:flex;flex:1;width:100%;overflow-x:auto;scroll-behavior:smooth;&::-webkit-scrollbar{display:none;}&.tab__content--overflowed{margin-left:calc(50% - 50vw);padding-left:calc(50vw - 50%);width:100vw;}"
  ],
  smallAndUp(_templateObject2$g())
);
var Tab = styled__default.div.withConfig({
  displayName: "Tabs__Tab",
  componentId: "sc-1kggst6-2"
})(
  [
    "",
    ";display:block;padding-right:",
    ";white-space:nowrap;&:last-of-type{padding-right:0;}"
  ],
  largeAndUp(_templateObject3$b(), spacing.comfy),
  spacing.normal
);

var checkIfOverflows = function checkIfOverflows() {
  var content =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!content) return false;
  var _content$offsetWidth = content.offsetWidth,
    offsetWidth = _content$offsetWidth === void 0 ? 0 : _content$offsetWidth,
    _content$scrollWidth = content.scrollWidth,
    scrollWidth = _content$scrollWidth === void 0 ? 0 : _content$scrollWidth;
  return offsetWidth < scrollWidth;
};

var TabItemButton = styled__default.button
  .attrs(function(props) {
    var isActive = props.isActive,
      dataIndex = props.dataIndex,
      rest = _objectWithoutProperties(props, ["isActive", "dataIndex"]);

    return _objectSpread(
      {
        className: isActive ? "tab__button--active" : "",
        role: "tab",
        "data-index": dataIndex,
        "aria-selected": isActive
      },
      rest
    );
  })
  .withConfig({
    displayName: "Tabs__TabItemButton",
    componentId: "sc-1kggst6-3"
  })(
  [
    "padding:",
    " 0 ",
    " 0;cursor:pointer;background-color:",
    ";border:none;appearance:none;&.tab__button--active{border-bottom:4px solid ",
    ";}"
  ],
  padding,
  spacing.cozy,
  themes.global.transparent,
  function(props) {
    return props.underlineColor || themes.global.primary.base;
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
            return React__default.createElement(
              Tab,
              {
                key: areItemsValidKeys ? item : itemIndex
              },
              React__default.createElement(
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
                React__default.createElement(
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

          var withBorderBottom = this.props.withBorderBottom;
          return React__default.createElement(
            Container$b,
            {
              areTabsOverflow: this.state.isTabsContainerOverflows,
              withBorderBottom: withBorderBottom
            },
            React__default.createElement(
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
  })(React.Component);

_defineProperty(Tabs, "propTypes", {
  items: PropTypes__default.arrayOf(PropTypes__default.node).isRequired,
  itemsProps: PropTypes__default.arrayOf(PropTypes__default.any),

  /* eslint-disable react/forbid-prop-types */
  defaultItemProps: PropTypes__default.object,

  /* eslint-enable react/forbid-prop-types */
  index: PropTypes__default.number,
  onClick: PropTypes__default.func,
  variant: PropTypes__default.string,
  accent: PropTypes__default.string,
  weight: PropTypes__default.string,
  underlineColor: PropTypes__default.string,
  withBorderBottom: PropTypes__default.bool
});

_defineProperty(Tabs, "defaultProps", {
  itemsProps: [],
  defaultItemProps: {},
  index: -1,
  onClick: function onClick() {},
  variant: null,
  accent: null,
  weight: null,
  underlineColor: null,
  withBorderBottom: true
});

var sliderHeight = "4px";
var handleSize = "23px";
var SliderContainer = styled__default.div.withConfig({
  displayName: "RangeSliderstyles__SliderContainer",
  componentId: "sc-2tdgn0-0"
})(
  [
    "position:relative;width:100%;touch-action:none;box-sizing:border-box;height:calc(",
    " + 1px);display:flex;align-items:center;&.disabled{opacity:0.4;}"
  ],
  handleSize
);
var SliderRail = styled__default.div.withConfig({
  displayName: "RangeSliderstyles__SliderRail",
  componentId: "sc-2tdgn0-1"
})(
  ["position:absolute;width:100%;background-color:", ";height:", ";"],
  themes.global.gray04,
  sliderHeight
);
var SliderTrack = styled__default.div.withConfig({
  displayName: "RangeSliderstyles__SliderTrack",
  componentId: "sc-2tdgn0-2"
})(
  [
    "position:absolute;left:0;height:",
    ";background-color:",
    ";&.slider__track--disabled{background-color:",
    ";}"
  ],
  sliderHeight,
  themes.global.primary.base,
  themes.global.gray03
);
var SliderHandle = styled__default.div.withConfig({
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
  return React__default.createElement(SliderTrack, {
    className: classes,
    style: positonStyle
  });
};

Track.propTypes = {
  className: PropTypes__default.string,
  offset: PropTypes__default.number.isRequired,
  length: PropTypes__default.number.isRequired,
  disabled: PropTypes__default.bool
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
          return React__default.createElement(
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
  })(React.PureComponent);
Handle.propTypes = {
  offset: PropTypes__default.number.isRequired,
  disabled: PropTypes__default.bool,
  min: PropTypes__default.number.isRequired,
  max: PropTypes__default.number.isRequired,
  value: PropTypes__default.number.isRequired
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
  threshold
) {
  if (handle != null && bounds !== undefined) {
    if (handle > 0 && val <= bounds[handle - 1]) {
      return bounds[handle - 1] + threshold;
    }

    if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
      return bounds[handle + 1] - threshold;
    }
  }

  return val;
};
var trimAlignValue = function trimAlignValue(v, handle, props) {
  var bounds =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var threshold =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var valInRange = ensureValueInRange(v, props);
  var valNotConflict = ensureValueNotConflict(
    handle,
    valInRange,
    bounds,
    threshold
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
        "getClosestBound",
        function(value) {
          var bounds = _this.state.bounds;
          var single = _this.props.single; // always move the right handle when single

          if (single) {
            return 1;
          }

          var closestBound = 0;

          if (
            Math.abs(bounds[closestBound + 1] - value) <
            Math.abs(bounds[closestBound] - value)
          ) {
            closestBound += 1;
          }

          return closestBound;
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
            max = _this$props2.max,
            single = _this$props2.single;
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
            ); // do not render the first handle if single

            if (i === 0 && single) {
              return null;
            }

            return React__default.createElement(Handle, {
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
            return React__default.createElement(Track, {
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
            return React__default.createElement(
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
              React__default.createElement(SliderRail, {
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
  })(React__default.Component);

_defineProperty(RangeSlider, "displayName", "RangeSlider");

_defineProperty(RangeSlider, "propTypes", {
  defaultValue: PropTypes__default.arrayOf(PropTypes__default.number),
  value: PropTypes__default.arrayOf(PropTypes__default.number),
  disabled: PropTypes__default.bool,
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  step: PropTypes__default.number,
  onChange: PropTypes__default.func,
  onBeforeChange: PropTypes__default.func,
  onAfterChange: PropTypes__default.func,
  onFocus: PropTypes__default.func,
  onBlur: PropTypes__default.func,
  className: PropTypes__default.string,
  threshold: PropTypes__default.number,
  single: PropTypes__default.bool
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
  threshold: 0,
  single: false
});

var typographyClassnames = function typographyClassnames(elem) {
  var _classnames;

  var _ref =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    weight = _ref.weight,
    color = _ref.color,
    variant = _ref.variant,
    textTransform = _ref.textTransform;

  return elem
    ? classNames(
        ((_classnames = {}),
        _defineProperty(_classnames, elem, true),
        _defineProperty(
          _classnames,
          "".concat(elem, "--").concat(weight),
          !!weight
        ),
        _defineProperty(
          _classnames,
          "".concat(elem, "--").concat(textTransform),
          !!textTransform
        ),
        _defineProperty(
          _classnames,
          ""
            .concat(elem, "--")
            .concat(color, "-")
            .concat(variant),
          !!(color && variant)
        ),
        _classnames)
      )
    : "";
};

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["bronto"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["zetta"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$t() {
  var data = _taggedTemplateLiteral(["semiBold"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var H1 = styled__default.h1
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? FONT_WEIGHT_SEMI_BOLD : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("h1", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "H1",
    componentId: "sc-1syqu7r-0"
  })(
  ["", " ", " ", " ", ";"],
  fontWeight(_templateObject$t()),
  BASE_STYLE_HEADER,
  fontSize(_templateObject2$h()),
  largeAndUp(_templateObject3$c(), fontSize(_templateObject4$8()))
);
H1.displayName = "Typography.H1";

function _templateObject4$9() {
  var data = _taggedTemplateLiteral(["zetta"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["tera"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$u() {
  var data = _taggedTemplateLiteral(["regular"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var H2 = styled__default.h2
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("h2", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "H2",
    componentId: "lddj86-0"
  })(
  ["", " ", " ", " ", ";"],
  fontWeight(_templateObject$u()),
  BASE_STYLE_HEADER,
  fontSize(_templateObject2$i()),
  largeAndUp(_templateObject3$d(), fontSize(_templateObject4$9()))
);
H2.displayName = "Typography.H2";

function _templateObject4$a() {
  var data = _taggedTemplateLiteral(["tera"]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["giga"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = _taggedTemplateLiteral(["regular"]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var H3 = styled__default.h3
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("h3", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "H3",
    componentId: "sn3joy-0"
  })(
  ["", " ", " ", " ", ";"],
  fontWeight(_templateObject$v()),
  BASE_STYLE_HEADER,
  fontSize(_templateObject2$j()),
  largeAndUp(_templateObject3$e(), fontSize(_templateObject4$a()))
);
H3.displayName = "Typography.H3";

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["giga"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$w() {
  var data = _taggedTemplateLiteral(["regular"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var H4 = styled__default.h4
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("h4", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "H4",
    componentId: "wo9omn-0"
  })(
  ["", " ", " ", ";"],
  fontWeight(_templateObject$w()),
  BASE_STYLE_HEADER,
  fontSize(_templateObject2$k())
);
H4.displayName = "Typography.H4";

function _templateObject$x() {
  var data = _taggedTemplateLiteral(["kilo"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}
var P1 = styled__default.p
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("p1", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "P1",
    componentId: "sc-1ez6rvh-0"
  })(["", ";", ";"], BASE_STYLE_BODY, fontSize(_templateObject$x()));
P1.displayName = "Typography.P1";

function _templateObject$y() {
  var data = _taggedTemplateLiteral(["hecto"]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}
var P2 = styled__default.p
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("p2", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "P2",
    componentId: "sc-1m76fws-0"
  })(["", ";", ";"], BASE_STYLE_BODY, fontSize(_templateObject$y()));
P2.displayName = "Typography.P2";

function _templateObject$z() {
  var data = _taggedTemplateLiteral(["uno"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}
var P3 = styled__default.p
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("p3", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "P3",
    componentId: "sc-160dm3l-0"
  })(["", ";", ";"], BASE_STYLE_BODY, fontSize(_templateObject$z()));
P3.displayName = "Typography.P3";

function _templateObject$A() {
  var data = _taggedTemplateLiteral(["mini"]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var P4 = styled__default.p
  .attrs(function(_ref) {
    var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? REGULAR : _ref$weight,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? ONYX : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BASE : _ref$variant;
    return {
      className: typographyClassnames("p4", {
        weight: weight,
        color: color,
        variant: variant
      })
    };
  })
  .withConfig({
    displayName: "P4",
    componentId: "sc-6lcz17-0"
  })(["", ";", ";"], BASE_STYLE_BODY, fontSize(_templateObject$A()));
P4.displayName = "Typography.P4";

var Typography = P1;
Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.P1 = P1;
Typography.P2 = P2;
Typography.P3 = P3;
Typography.P4 = P4;

var composeHandlers = function composeHandlers() {
  for (
    var _len = arguments.length, fns = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    fns[_key] = arguments[_key];
  }

  return function() {
    for (
      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    fns.forEach(function(fn) {
      return fn && fn.apply(void 0, args);
    });
  };
};

exports.Button = Button;
exports.Badge = Badge;
exports.RatingBadge = RatingBadge;
exports.IconButton = IconButton;
exports.ButtonWithLoading = ButtonWithLoading;
exports.DayTile = DayTile;
exports.DayTileDate = DayTileDate;
exports.DayTileItem = DayTileItem;
exports.DayTileButton = DayTileButton;
exports.DayTileMoreButton = DayTileMoreButton;
exports.DayTileOverflowButton = DayTileOverflowButton;
exports.Card = Card;
exports.Column = Column;
exports.Container = Container$2;
exports.LoaderRing = LoaderRing;
exports.DrawerProvider = DrawerProvider;
exports.Gradient = Gradient;
exports.GradientStyles = GradientStyles;
exports.SpotLightWrapper = SpotLightWrapper;
exports.SpotLight = SpotLight$1;
exports.Angle = Angle$1;
exports.DEFAULT_DEG = DEFAULT_DEG;
exports.DEFAULT_STOPS = DEFAULT_STOPS;
exports.OVERLAY_DEG_NOT_SPOTLIGHT = OVERLAY_DEG_NOT_SPOTLIGHT;
exports.OVERLAY_SHADOW_DEG = OVERLAY_SHADOW_DEG;
exports.OVERLAY_SHADOW_STOPS = OVERLAY_SHADOW_STOPS;
exports.OVERLAY_STOPS_NOT_SPOTLIGHT = OVERLAY_STOPS_NOT_SPOTLIGHT;
exports.SPOTLIGHT_DEG = SPOTLIGHT_DEG;
exports.SPOTLIGHT_STOPS = SPOTLIGHT_STOPS;
exports.Header = Header;
exports.HeaderWithImage = ImageHeader;
exports.Heading = Heading;
exports.ImageCard = ImageCard;
exports.Banner = Banner;
exports.FeedbackInline = FeedbackInline;
exports.ListContainer = ListContainer;
exports.ListRow = ListRow;
exports.ListRowOverflow = ListRowOverflow;
exports.Section = Section;
exports.SectionItem = SectionItem;
exports.BottomSheet = BottomSheet;
exports.NavBar = NavBar;
exports.Row = Row;
exports.SearchInput = SearchInput;
exports.SearchComponent = SearchInput$1;
exports.SearchInputMobile = SearchInputMobile;
exports.SearchSuggest = SearchSuggest;
exports.Spacing = Spacing;
exports.Breadcrumb = Breadcrumb;
exports.ContainerBlock = Container$1;
exports.ResponsiveImage = ResponsiveImage;
exports.StaticImage = StaticImage;
exports.ThumbnailCircle = ThumbnailCircle;
exports.StyledImageSeo = StyledImageSeo;
exports.Text = TextBase;
exports.AlertIcon = AlertIcon;
exports.CAIcon = CAIcon;
exports.CallUsIcon = CallUsIcon;
exports.CartIcon = CartIcon;
exports.CheckingAccountIcon = CheckingAccountIcon;
exports.CampsiteIcon = CampsiteIcon;
exports.ChevronIcon = ChevronIcon;
exports.ClubIcon = ClubIcon;
exports.ConcessionIcon = Concession;
exports.CrossIcon = CrossIcon;
exports.CompressIcon = CompressIcon;
exports.CreateNewIcon = CreateNewIcon;
exports.DonationIcon = DonationIcon;
exports.EmailIcon = EmailIcon;
exports.ExchangeTicketsIcon = ExchangeTicketsIcon;
exports.ExpandIcon = ExpandIcon;
exports.FacebookIcon = FacebookIcon;
exports.FAQIcon = FAQIcon;
exports.FavoriteIcon = FavoriteIcon;
exports.GeneralIcon = GeneralIcon;
exports.GetHelpIcon = GetHelpIcon;
exports.GiftCardIcon = GiftCardIcon;
exports.InstagramIcon = InstagramIcon;
exports.HotelIcon = Hotel;
exports.MealIcon = Meal;
exports.MembershipIcon = Membership;
exports.MerchandiseIcon = Merchandise;
exports.MinusIcon = MinusIcon;
exports.MobileDeviceIcon = MobileDeviceIcon;
exports.MobileTicketIcon = MobileTicketIcon;
exports.OverflowIcon = OverflowIcon;
exports.ParkingIcon = ParkingIcon;
exports.PauseIcon = PauseIcon;
exports.PhoneSupportIcon = PhoneSupportIcon;
exports.PlayIcon = PlayIcon;
exports.PlusIcon = PlusIcon;
exports.SellTicketsIcon = SellTicketsIcon;
exports.ShareIcon = ShareIcon;
exports.StandardMailIcon = StandardMailIcon;
exports.SpecialIcon = SpecialIcon;
exports.StarIcon = StarIcon;
exports.TransportationIcon = Transportation;
exports.TransferTicketsIcon = TransferTicketsIcon;
exports.TwitterIcon = TwitterIcon;
exports.USIcon = USIcon;
exports.UpgradeTicketsIcon = UpgradeTicketsIcon;
exports.VenueIcon = VenueIcon;
exports.VipIcon = VipIcon;
exports.VolumeHighIcon = VolumeHighIcon;
exports.VolumeLowIcon = VolumeLowIcon;
exports.VolumeMediumIcon = VolumeMediumIcon;
exports.VolumeMuteIcon = VolumeMuteIcon;
exports.WillCallIcon = WillCallIcon;
exports.YoutubeIcon = YoutubeIcon;
exports.LinkedinIcon = LinkedinIcon;
exports.AppleIcon = AppleIcon;
exports.GooglePlayIcon = GooglePlayIcon;
exports.HeartIcon = HeartIcon;
exports.ErrorIcon = ErrorIcon;
exports.SuccessIcon = SuccessIcon;
exports.InfoIcon = InfoIcon;
exports.InfoDotIcon = InfoDotIcon;
exports.BackIcon = BackIcon;
exports.ForwardIcon = ForwardIcon;
exports.UpIcon = UpIcon;
exports.DownIcon = DownIcon;
exports.CloseIcon = CloseIcon;
exports.DeleteIcon = DeleteIcon;
exports.CalendarIcon = CalendarIcon;
exports.HomeIcon = HomeIcon;
exports.SearchIcon = SearchIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.ClearIcon = ClearIcon;
exports.EditIcon = EditIcon;
exports.FeedbackIcon = FeedbackIcon;
exports.FilterIcon = FilterIcon;
exports.LocationIcon = LocationIcon;
exports.TicketIcon = TicketIcon;
exports.TicketsIcon = TicketsIcon;
exports.UserIcon = UserIcon;
exports.ListIcon = ListIcon;
exports.WarningIcon = WarningIcon;
exports.RefreshIcon = RefreshIcon;
exports.VenueSearchIcon = VenueSearchIcon;
exports.FraudulentActivityIcon = FraudulentActivityIcon;
exports.PrintIcon = PrintIcon;
exports.LaunchIcon = LaunchIcon;
exports.PlayCircularIcon = PlayCircularIcon;
exports.DeviceSizeProvider = DeviceSizeProvider;
exports.DeviceSizeConsumer = Consumer$2;
exports.DisplayFor = DisplayFor;
exports.ScrollObserverProvider = ScrollObserverProvider;
exports.ScrollObserverConsumer = ScrollObserverConsumer;
exports.Portal = Portal;
exports.colors = colors;
exports.themes = themes;
exports.constants = constants;
exports.spacing = spacing;
exports.typography = typography;
exports.zIndex = zIndex;
exports.largeAndUp = largeAndUp;
exports.mediumAndUp = mediumAndUp;
exports.xLargeAndUp = xLargeAndUp;
exports.smallAndUp = smallAndUp;
exports.PrimaryText = PrimaryText;
exports.SecondaryText = SecondaryText;
exports.SectionHeading = SectionHeading;
exports.Link = Link;
exports.LinkCta = LinkCta;
exports.BoldText = BoldText;
exports.Toggle = Toggle;
exports.DropDownGroup = DropDownGroup;
exports.DropDownOption = DropDownOption;
exports.DropDownLabel = DropDownLabel;
exports.RadioButton = RadioButton;
exports.RadioGroup = RadioGroup;
exports.CheckBox = CheckBoxButton;
exports.CheckBoxGroup = CheckBoxGroup;
exports.Input = Input$1;
exports.ButtonGroup = ButtonGroup;
exports.QtySelector = QtySelector;
exports.LinkList = LinkList;
exports.LinkListItem = ListItem;
exports.Modal = Modal;
exports.Backdrop = Backdrop;
exports.BackdropProvider = Provider$3;
exports.ContainerProvider = Provider$1;
exports.AdaptiveModal = index;
exports.AdaptiveActionBar = DefaultActionBar;
exports.MODAL_SIZE_SMALL = MODAL_SIZE_SMALL;
exports.MODAL_SIZE_MEDIUM = MODAL_SIZE_MEDIUM;
exports.MODAL_SIZE_LARGE = MODAL_SIZE_LARGE;
exports.MODAL_SIZE_XLARGE = MODAL_SIZE_XLARGE;
exports.ModalConsumer = Consumer$a;
exports.withModal = withModal;
exports.AdaptiveBackdrop = Backdrop$1;
exports.PopOver = PopOver;
exports.Tooltip = Tooltip;
exports.DeviceConnectionProvider = DeviceConnectionProvider;
exports.DeviceConnectionConsumer = Consumer$b;
exports.DisplayOn = DisplayOn;
exports.SeatTooltip = SeatTooltip;
exports.SeatData = SeatData;
exports.LazyLoaderProvider = LazyLoaderProvider;
exports.LazyLoaderConsumer = Consumer$c;
exports.LazyLoader = LazyLoader;
exports.Tabs = Tabs;
exports.TabsProvider = TabsProvider;
exports.TabsConsumer = Consumer$d;
exports.StatusBadge = StatusBadge;
exports.StatusBadgeGroup = StatusBadgeGroup;
exports.RangeSlider = RangeSlider;
exports.Typography = Typography;
exports.fontSize = fontSize;
exports.fontSizes = fontSizes;
exports.fontWeight = fontWeight;
exports.fontWeights = fontWeights;
exports.lineHeight = lineHeight;
exports.textTransforms = textTransforms;
exports.themeColor = themeColor;
exports.themeColors = themeColors;
exports.getThemeValue = getThemeValue;
exports.keyCharCodes = keyCharCodes;
exports.composeHandlers = composeHandlers;
//# sourceMappingURL=index.cjs.js.map
