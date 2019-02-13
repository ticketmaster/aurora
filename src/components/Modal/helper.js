import { spacing } from "../../theme";

export const SPACING = spacing.colossal.replace("px", "");

export const getContentHeight = ({
  actionBar,
  bottomActionBar,
  container,
  isFullscreen
}) => {
  const actionBarHeight = actionBar ? actionBar.clientHeight : 0;

  const bottomActionBarHeight = bottomActionBar
    ? bottomActionBar.clientHeight
    : 0;

  return `${container.clientHeight -
    (isFullscreen ? 0 : SPACING * 2) -
    actionBarHeight -
    bottomActionBarHeight}px`;
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
