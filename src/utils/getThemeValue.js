import PropTypes from "prop-types";

import { themes } from "../theme";
import { THEME_TM } from "../theme/constants";

export const themeShape = {
  themeName: PropTypes.string.isRequired
};

/**
 * This function allows to retrieve a value from the themes object.
 * The first function accepts path as a list of strings.
 * The second function accepts a theme object. It's provided in styled components
 * automatically.
 */
export default (...args) => ({
  theme: { themeName = THEME_TM.themeName } = THEME_TM
} = {}) =>
  args.reduce((acc, el) => {
    if (acc[el] === undefined) {
      throw new ReferenceError("value is not defined");
    }
    return acc[el];
  }, themes[themeName]);
