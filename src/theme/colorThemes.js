const success = "#1bab1e";

const global = {
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
  darkFill: "#1f262d", // not used in new components. kept for backward compatibility.
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

const themes = {
  global,
  tm: global,
  lne: {
    ...global,
    brand: "#e11d39",
    primary: {
      base: "#2cb3ad",
      medium: "#239893",
      dark: "#1f8783",
      light: "#e9f7f6",
      lightest: "#e9f7f6",
      muted: "#d5f0ef"
    }
  }
};

export default themes;
