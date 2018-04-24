import colors from "../../../src/theme/colors";

const variant = "pacific";

const color = Object.keys(colors[variant]).map(colorVariantName => ({
  name: colorVariantName,
  value: colors[variant][colorVariantName]
}));

export default color;
