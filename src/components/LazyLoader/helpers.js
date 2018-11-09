import { PLACEHOLDER_IMAGE } from "./constants";
import createParams from "../../utils/createParams";

/* istanbul ignore next */
const Url = process.browser ? global.window.URL : require("url");

export const resize = ({ src = "", ...params }) => {
  try {
    const { host, pathname } = process.browser ? new Url(src) : Url.parse(src);

    if (!host) {
      return src;
    }

    const url = `https://${host}/${pathname}`;
    const fit = params.width && params.height ? { fit: "crop" } : {};
    const resizeSrc = `${url}${createParams({ ...params, ...fit })}`;
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

export const getSrcSetByDensity = (ref, devicePixelRatios, getSrcByDensity) => {
  const devicePixelRatiosLen = devicePixelRatios.length;
  return devicePixelRatios.reduce(
    /* eslint-disable-next-line no-return-assign */
    (memo, ratio) =>
      /* eslint-disable-next-line no-param-reassign */
      (memo += `${getSrcByDensity(ratio)} ${ratio}x${
        ratio === devicePixelRatiosLen ? "" : ", "
      }`),
    ""
  );
};

export const getTargetDensity = (targetDensity, devicePixelRatios) => {
  if (typeof global.window !== "object" || !global.window.devicePixelRatio) {
    return targetDensity;
  }

  const maxDevicePixelRatio = devicePixelRatios[devicePixelRatios.length - 1];

  return global.window.devicePixelRatio > maxDevicePixelRatio
    ? maxDevicePixelRatio
    : Math.round(global.window.devicePixelRatio);
};

export const getSrcAttr = ref => {
  if ("srcset" in ref) return "srcset";
  if ("src" in ref) return "src";
  return "backgroundImage";
};

export const getSrcVariantByAttr = (
  ref,
  srcAttr,
  devicePixelRatios,
  targetDensity,
  getSrcByDensity
) =>
  srcAttr === "srcset"
    ? getSrcSetByDensity(ref, devicePixelRatios, getSrcByDensity)
    : getSrcByDensity(getTargetDensity(targetDensity, devicePixelRatios));

export const getLowDefSrc = ({ src, width, height, resizeFn }) =>
  src === PLACEHOLDER_IMAGE
    ? src
    : resizeFn({
        src,
        width: Math.round(width / 10),
        height: Math.round(height / 10)
      });
