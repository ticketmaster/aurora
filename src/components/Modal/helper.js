export const getContentHeight = ({ actionBar, bottomActionBar, container }) => {
  const actionBarHeight = actionBar ? actionBar.clientHeight : 0;

  const bottomActionBarHeight = bottomActionBar
    ? bottomActionBar.clientHeight
    : 0;

  return container.clientHeight - actionBarHeight - bottomActionBarHeight;
};

export const getActionBarShadow = ({ content }) => Boolean(content.scrollTop);

export const getBottomActionBarShadow = ({ content }) =>
  Boolean(content.scrollHeight - content.scrollTop - content.clientHeight > 0);

export const isRequestCloseApproved = async ({ onRequestClose }) => {
  if (!onRequestClose) {
    return true;
  }

  try {
    const result = await onRequestClose();

    return typeof result === "undefined" ? true : Boolean(result);
  } catch (e) {
    return false;
  }
};
