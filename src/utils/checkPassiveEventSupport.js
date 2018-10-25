// Safely detecting option support. See: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
let isPassiveSupported = false;
let wasAlreadyChecked = false;

const checkPassiveEventSupport = forceCheck => {
  if (wasAlreadyChecked && !forceCheck) {
    return isPassiveSupported;
  }

  if (forceCheck) {
    isPassiveSupported = false;
  }

  try {
    const options = Object.defineProperty({}, "passive", {
      // eslint-disable-next-line
      get: function() {
        isPassiveSupported = true;
      }
    });

    window.addEventListener("test", options, options); // eslint-disable-line
    window.removeEventListener("test", options, options); // eslint-disable-line
  } catch (err) {
    isPassiveSupported = false;
  }

  wasAlreadyChecked = true;

  return isPassiveSupported;
};

export default checkPassiveEventSupport;
