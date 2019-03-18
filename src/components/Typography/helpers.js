import classnames from "classnames";

const typographyClassnames = (
  elem,
  { weight, color, variant, textTransform } = {}
) =>
  elem
    ? classnames({
        [elem]: true,
        [`${elem}--${weight}`]: !!weight,
        [`${elem}--${textTransform}`]: !!textTransform,
        [`${elem}--${color}-${variant}`]: !!(color && variant)
      })
    : "";

export default typographyClassnames;
