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

export const isRequestCloseApproved = ({ onRequestClose, event }) => {
  if (!onRequestClose) {
    return Promise.resolve(true);
  }

  return Promise.resolve(onRequestClose(event))
    .then(result => (typeof result === "undefined" ? true : Boolean(result)))
    .catch(() => false);
};
