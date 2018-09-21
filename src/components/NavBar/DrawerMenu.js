import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MenuButton from "./MenuButton";
import Drawer from "../Drawer";
import { Consumer } from "../Drawer/Context";
import composeEventHandlers from "../../utils/composeEventHandlers";
import omitKeys from "../../utils/omitKeys";

const noop = () => {};

class DrawerMenu extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.func
    ]),
    setContent: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  static defaultProps = { onClick: noop, children: null };

  componentDidMount() {
    const { children, ...rest } = this.props;
    this.props.setContent(
      <Drawer
        {...omitKeys(["onClick", "toggleDrawer", "isOpen", "setContent"], rest)}
      >
        {children}
      </Drawer>
    );
  }

  render() {
    const { onClick, toggleDrawer, isOpen } = this.props;

    return (
      <MenuButton
        onClick={composeEventHandlers(toggleDrawer, onClick)}
        iconClassName={classNames({
          hamburger: true,
          "hamburger--opened": isOpen,
          "hamburger--closed": !isOpen
        })}
      />
    );
  }
}

const DrawerMenuWrapper = props => (
  <Consumer>
    {({ isOpen = false, setContent = noop, toggleDrawer = noop } = {}) => (
      <DrawerMenu {...{ ...props, isOpen, setContent, toggleDrawer }} />
    )}
  </Consumer>
);

export default DrawerMenuWrapper;
