export const isEventFromHandle = (e, handles) => {
  try {
    return Object.keys(handles).some(key => e.target === handles[key]);
  } catch (error) {
    return false;
  }
};

export const isNotTouchEvent = e =>
  e.touches.length > 1 ||
  (e.type.toLowerCase() === "touchend" && e.touches.length > 0);

export const getClosestPoint = (val, { step, min }) =>
  step ? Math.round((val - min) / step) * step + min : 0;

export const getPrecision = step => {
  const stepString = step.toString();
  let precision = 0;
  if (stepString.indexOf(".") >= 0) {
    precision = stepString.length - stepString.indexOf(".") - 1;
  }
  return precision;
};

export const getHandleCenterPosition = handle => {
  const coords = handle.getBoundingClientRect();
  return global.window.pageXOffset + coords.left + coords.width * 0.5;
};

export const ensureValueInRange = (val, { max, min }) => {
  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
};

export const ensureValuePrecision = (val, props) => {
  const { step } = props;
  const closestPoint = getClosestPoint(val, props);
  return !step
    ? closestPoint
    : parseFloat(closestPoint.toFixed(getPrecision(step)));
};

export const pauseEvent = e => {
  e.stopPropagation();
  e.preventDefault();
};

export const shallowEqual = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys  and values different from B.
  return keysA.every(
    value => bHasOwnProperty(value) && objA[value] === objB[value]
  );
};

export const ensureValueNotConflict = (handle, val, bounds, threshold) => {
  if (handle != null && bounds !== undefined) {
    if (handle > 0 && val <= bounds[handle - 1]) {
      return bounds[handle - 1] + threshold;
    }
    if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
      return bounds[handle + 1] - threshold;
    }
  }
  return val;
};

export const trimAlignValue = (
  v,
  handle,
  props,
  bounds = {},
  threshold = 0
) => {
  const valInRange = ensureValueInRange(v, props);
  const valNotConflict = ensureValueNotConflict(
    handle,
    valInRange,
    bounds,
    threshold
  );
  return ensureValuePrecision(valNotConflict, props);
};
