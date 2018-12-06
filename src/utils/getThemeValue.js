import PropTypes from "prop-types";

import { themes } from "../theme";

export const themeShape = {
  themeName: PropTypes.string.isRequired
};

export const themeTm = { themeName: "tm" };

/**
 * This function allows to retrieve a value from the themes object.
 * The first function accepts path as a list of strings.
 * The second function accepts a theme object. It's provided in styled components
 * automatically.
 */
export default (...args) => ({ theme: { themeName = "tm" } = {} } = {}) =>
  args.reduce((acc, el) => {
    if (acc[el] === undefined) {
      throw new ReferenceError("value is not defined");
    }
    return acc[el];
  }, themes[themeName]);
