const global = {
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
    light: "#ffeded"
  },
  caution: {
    base: "#f2bd2a",
    dark: "#b98800",
    light: "#fff5d9"
  },
  success: {
    base: "#1bab1e",
    dark: "#148016",
    light: "#dbf3db"
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
      muted: "#d5f0ef"
    }
  }
};

export default themes;
