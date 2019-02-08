/* eslint-disable import/prefer-default-export */

import { oneOf } from "prop-types";

export const variantType = oneOf([
  "accent",
  "alert",
  "caution",
  "default",
  "neutral",
  "positive"
]);
