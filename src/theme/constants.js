const constants = {
  MAX_COLUMNS: 12,
  borderRadius: {
    small: "2px",
    large: "4px"
  },
  breakpoints: {
    small: "(max-width: 768px)",
    medium: "(min-width: 769px)",
    large: "(min-width: 1025px)",
    xLarge: "(min-width: 1440px)",
    xSmallAndDown: "(max-width: 480px)",
    smallAndUp: "(min-width: 481px)",
    mediumAndUp: "(min-width: 769px)",
    largeAndUp: "(min-width: 1025px)",
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

export const cardBoxShadow =
  "0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12)";
export const popContainersBoxShadow = "0 4px 4px 0 rgba(0, 0, 0, 0.12)";
export const popContainersSharpBoxShadow =
  "0 2px 8px 0 rgba(159, 159, 159, 0.5)";
export const THEME_TM = { themeName: "tm" };

export default constants;
