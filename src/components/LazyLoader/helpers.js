import { PLACEHOLDER_IMAGE, DEFAULT_TARGET_DENSITY } from "./constants";
import createParams from "../../utils/createParams";

export const resize = ({ src = "", ...params }) => {
  try {
    const { host, pathname } = process.browser
      ? new global.Url(src)
      : global.Url.parse(src);

    if (!host) {
      return src;
    }

    const url = `https://${host}${pathname}`;
    const fit = params.width && params.height ? { fit: "crop" } : {};
    const resizeSrc = `${url}?${createParams({ ...params, ...fit })}`;
    return resizeSrc;
  } catch (e) {
    return src;
  }
};

export const createGetSrcByDensity = ({
  src,
  width,
  height,
  resizeFn
}) => density =>
  resizeFn({
    src,
    width: width ? width * density : null,
    height: height ? height * density : null
  });

export const getSrcSetByDensity = (ref, getSrcByDensity) =>
  `${getSrcByDensity(1)} 1x, ${getSrcByDensity(2)} 2x, ${getSrcByDensity(
    3
  )} 3x`;

export const getTargetDensity = (
  defaultTargetDensity = DEFAULT_TARGET_DENSITY
) => {
  if (typeof global.window !== "object" || !global.window.devicePixelRatio) {
    return defaultTargetDensity;
  }

  return global.window.devicePixelRatio > 3
    ? 3
    : Math.round(global.window.devicePixelRatio);
};

export const getSrcAttr = ref => {
  if ("srcset" in ref) return "srcset";
  if ("src" in ref) return "src";
  return "backgroundImage";
};

export const getSrcVariantByAttr = (ref, srcAttr, getSrcByDensity) =>
  srcAttr === "srcset"
    ? getSrcSetByDensity(ref, getSrcByDensity)
    : getSrcByDensity(getTargetDensity());

export const getLowDefSrc = ({ src, width, height, resizeFn }) =>
  src === PLACEHOLDER_IMAGE
    ? src
    : resizeFn({
        src,
        width: Math.round(width / 10),
        height: Math.round(height / 10)
      });
