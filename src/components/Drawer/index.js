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
    ])
  };

  static defaultProps = { children: null, header: null };

  renderChildren = props => {
    const { children } = this.props;
    if (typeof children === "function") return children(props);

    return children;
  };

  renderHeader = ({ toggleDrawer, isOpen }) => {
    const { header } = this.props;

    if (typeof header === "function") return header({ toggleDrawer, isOpen });

    return (
      <Gradient
        className="gradient--spotlight"
        style={{ height: "60px", position: "relative" }}
      >
        <HeaderContent>
          <div>
            {typeof content === "string" ? (
              <Text size="kilo" variant="light" primary weight="semiBold">
                {header}
              </Text>
            ) : (
              header
            )}
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
      </Gradient>
    );
  };

  render() {
    const { className, ...rest } = this.props;
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
                isOpen
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
