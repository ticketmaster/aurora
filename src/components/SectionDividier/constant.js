export const MAIN_SECTION_DIVIDER = "MAIN_SECTION_DIVIDER";
export const GENERAL_CONTENT_SPACER = "GENERAL_CONTENT_SPACER";
export const MAIN_SECTION_HEADER_SPACER = "MAIN_SECTION_HEADER_SPACER";
export const SUB_SECTION_DIVIDER = "SUB_SECTION_DIVIDER";

const DIVIDER_CONFIG = {
  [MAIN_SECTION_DIVIDER]: {
    spacing: {
      bottom: {
        xSmall: "spacious",
        medium: "giant",
        large: "colossal"
      }
    },
    tag: "section"
  },
  [GENERAL_CONTENT_SPACER]: {
    spacing: {
      bottom: {
        xSmall: "normal"
      }
    },
    tag: "div"
  },
  [MAIN_SECTION_HEADER_SPACER]: {
    spacing: {
      bottom: {
        xSmall: "comfy"
      }
    },
    tag: "header"
  },
  [SUB_SECTION_DIVIDER]: {
    spacing: {
      bottom: {
        xSmall: "comfy",
        medium: "spacious"
      }
    },
    tag: "section"
  }
};

export default DIVIDER_CONFIG;
