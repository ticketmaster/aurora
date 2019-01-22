import { ErrorIcon, SuccessIcon, AlertIcon } from "../Icons";

export const variants = ["error", "success", "alert"];
export const variantsIcons = {
  [variants[0]]: ErrorIcon,
  [variants[1]]: SuccessIcon,
  [variants[2]]: AlertIcon
};
