import { themes } from "../theme";
/**
 * This function allows to retrieve a value from the themes object.
 * The first function accepts path as a list of strings.
 * The second function accepts a theme object. It's provided in styled components
 * automatically.
 */
export default (...args) => ({ theme: { themeName } }) =>
  args.reduce((acc, el) => {
    if (acc[el] === undefined) {
      throw new ReferenceError("value is not defined");
    }
    return acc[el];
  }, themes[themeName]);
