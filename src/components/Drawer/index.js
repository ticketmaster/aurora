import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Consumer } from "./Context";
import {
  DrawerContainer,
  DrawerContent,
  HeaderContent,
  CloseButton
} from "./Drawer.styles";
import Gradient from "../Gradient";
import Text from "../Text/Base";
import HamburgerIcon from "../Icons/HamburgerIcon";
import omitKeys from "../../utils/omitKeys";

export default class Drawer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.func
    ]),
    header: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.string
    ]),
    withGradient: PropTypes.bool
  };

  static defaultProps = { children: null, header: null, withGradient: true };

  getHeaderContent = props => {
    const { header } = this.props;

    if (typeof header === "function") return header(props);

    if (typeof header === "string") {
      return (
        <Text size="kilo" variant="light" primary weight="semiBold">
          {header}
        </Text>
      );
    }

    return header;
  };

  getHeaderLayout = ({ toggleDrawer, isOpen }) => (
    <HeaderContent>
      <div>
        {this.getHeaderContent({
          toggleDrawer,
          isOpen
        })}
      </div>
      <CloseButton type="button" onClick={toggleDrawer}>
        <HamburgerIcon
          className={classNames({
            hamburger: true,
            "hamburger--opened": isOpen,
            "hamburger--closed": !isOpen
          })}
        />
      </CloseButton>
    </HeaderContent>
  );

  renderChildren = props => {
    const { children } = this.props;
    if (typeof children === "function") return children(props);

    return children;
  };

  renderHeader = ({ toggleDrawer, isOpen, withGradient }) => {
    const headerLayout = this.getHeaderLayout({ toggleDrawer, isOpen });
    return withGradient ? (
      <Gradient
        className="gradient--spotlight"
        style={{ height: "60px", position: "relative" }}
      >
        {headerLayout}
      </Gradient>
    ) : (
      headerLayout
    );
  };

  render() {
    const { className, withGradient, ...rest } = this.props;
    return (
      <Consumer>
        {({ isOpen, toggleDrawer }) => (
          <DrawerContainer
            {...omitKeys(["children", "header"], rest)}
            className={classNames(
              { "drawer__content--open": isOpen },
              className
            )}
          >
            <DrawerContent>
              {this.renderHeader({
                toggleDrawer,
                isOpen,
                withGradient
              })}
              {this.renderChildren({
                toggleDrawer,
                isOpen
              })}
            </DrawerContent>
          </DrawerContainer>
        )}
      </Consumer>
    );
  }
}
